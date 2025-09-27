import React from "react";
import Snake from "../components/Snake";

export default function SnakePage() {
  return (
    <div className="font-sans">
      <div className="py-10 flex justify-center">
        <Snake />
      </div>
    </div>
  );
}
