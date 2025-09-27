import React, { useRef, useEffect, useState, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";


const CELL = 20;
const WIDTH = 600;
const HEIGHT = 400;

export default function Snake() {
    const navigate = useNavigate();
    const canvasRef = useRef(null);
    const animationRef = useRef(null);

    const [state, setState] = useState("menu"); // "menu", "game", "gameover"
    const [selectedOption, setSelectedOption] = useState(0);

    const stateRef = useRef(state);
    const scoreRef = useRef(0);
    const speedRef = useRef(5);

    const snake = useRef([]);
    const dx = useRef(CELL);
    const dy = useRef(0);
    const apple = useRef({ x: 0, y: 0 });
    const lastTimeRef = useRef(0);

    const menuOptions = useMemo(() => ["Jouer", "Quitter"], []);

    const initGame = useCallback(() => {
        snake.current = [
        { x: 100, y: 100 },
        { x: 80, y: 100 },
        { x: 60, y: 100 },
        ];
        dx.current = CELL;
        dy.current = 0;
        apple.current = {
        x: Math.floor(Math.random() * (WIDTH / CELL)) * CELL,
        y: Math.floor(Math.random() * (HEIGHT / CELL)) * CELL,
        };
        scoreRef.current = 0;
        speedRef.current = 10;
    }, []);

    const drawText = useCallback((ctx, text, x, y, color = "white", font = "20px sans-serif") => {
        ctx.fillStyle = color;
        ctx.font = font;
        ctx.fillText(text, x, y);
    }, []);

    const drawSnake = useCallback((ctx) => {
        ctx.fillStyle = "green";
        snake.current.forEach((block) => ctx.fillRect(block.x, block.y, CELL, CELL));
    }, []);

    const drawApple = useCallback((ctx) => {
        ctx.fillStyle = "red";
        ctx.fillRect(apple.current.x, apple.current.y, CELL, CELL);
    }, []);

    const moveSnake = useCallback(() => {
        const head = { x: snake.current[0].x + dx.current, y: snake.current[0].y + dy.current };
        snake.current.unshift(head);

        if (head.x === apple.current.x && head.y === apple.current.y) {
        apple.current = {
            x: Math.floor(Math.random() * (WIDTH / CELL)) * CELL,
            y: Math.floor(Math.random() * (HEIGHT / CELL)) * CELL,
        };
        scoreRef.current += 1;
        speedRef.current += 0.5;
        } else {
        snake.current.pop();
        }

        if (
        head.x < 0 ||
        head.x >= WIDTH ||
        head.y < 0 ||
        head.y >= HEIGHT ||
        snake.current.slice(1).some((s) => s.x === head.x && s.y === head.y)
        ) {
        stateRef.current = "gameover";
        }
  }, []);

  const drawMenu = useCallback((ctx, options, title = "SNAKE GAME") => {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    ctx.textAlign = "center";
    drawText(ctx, title, WIDTH / 2, HEIGHT / 4, "white", "30px sans-serif");
    options.forEach((opt, i) => {
      drawText(ctx, opt, WIDTH / 2, HEIGHT / 2 + i * 40, i === selectedOption ? "yellow" : "white");
    });
  }, [drawText, selectedOption]);

  const gameLoop = useCallback((timestamp) => {
    if (!lastTimeRef.current) lastTimeRef.current = timestamp;
    const delta = timestamp - lastTimeRef.current;

    if (delta > 1000 / speedRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      ctx.clearRect(0, 0, WIDTH, HEIGHT);
      drawSnake(ctx);
      drawApple(ctx);
      drawText(ctx, `Score: ${scoreRef.current}`, 50, 30);
      moveSnake();
      lastTimeRef.current = timestamp;
    }

    if (stateRef.current === "game") {
      animationRef.current = requestAnimationFrame(gameLoop);
    } else if (stateRef.current === "gameover") {
      const ctx = canvasRef.current.getContext("2d");
      drawMenu(ctx, [`Score: ${scoreRef.current} - Rejouer`, "Quitter"], "GAME OVER");
    }
  }, [drawSnake, drawApple, drawText, moveSnake, drawMenu]);

  const handleKeyDown = useCallback((e) => {
    if (stateRef.current === "game") {
      if (e.key === "ArrowUp" && dy.current === 0) { dx.current = 0; dy.current = -CELL; }
      if (e.key === "ArrowDown" && dy.current === 0) { dx.current = 0; dy.current = CELL; }
      if (e.key === "ArrowLeft" && dx.current === 0) { dx.current = -CELL; dy.current = 0; }
      if (e.key === "ArrowRight" && dx.current === 0) { dx.current = CELL; dy.current = 0; }
    } else if (stateRef.current === "menu" || stateRef.current === "gameover") {
      if (e.key === "ArrowUp") setSelectedOption((prev) => (prev - 1 + menuOptions.length) % menuOptions.length);
      if (e.key === "ArrowDown") setSelectedOption((prev) => (prev + 1) % menuOptions.length);
      if (e.key === "Enter") {
        if (menuOptions[selectedOption] === "Quitter") {
            navigate("/");
        }
        else {
          stateRef.current = "game";
          setState("game");
          initGame();
          lastTimeRef.current = 0;
          animationRef.current = requestAnimationFrame(gameLoop);
        }
      }
    }
  }, [selectedOption, menuOptions, initGame, gameLoop, navigate]);

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");
    drawMenu(ctx, menuOptions);
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [drawMenu, handleKeyDown, menuOptions]);

  return <canvas ref={canvasRef} width={WIDTH} height={HEIGHT} className="mx-auto block bg-black" />;
}