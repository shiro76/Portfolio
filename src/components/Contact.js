import emailjs from "emailjs-com";

export default function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qa84urj",         // ID service
        "template_ebofpun",  // ID template
        e.target,            // le <form> complet
        "1uQmBmaOdrMtueMxp"  // clé publique
      )
      .then(
        () => alert("Message envoyé ✅"),
        (error) => alert("Erreur ❌ " + error.text)
      );
  };

  return (
    <section id="contact" className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
          Me contacter
        </h2>
        <p className="mb-8 text-gray-700 dark:text-gray-300">
          N’hésitez pas à m’envoyer un message pour collaborer ou poser vos
          questions.
        </p>

        <form onSubmit={sendEmail} className="space-y-4">
          <input
            type="text"
            name="user_name" // ⚡ doit correspondre à EmailJS
            placeholder="Votre nom"
            required
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="user_email" // ⚡ doit correspondre à EmailJS
            placeholder="Votre email"
            required
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            rows="4"
            name="message" // ⚡ doit correspondre à EmailJS
            placeholder="Votre message"
            required
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Envoyer
          </button>
        </form>
      </div>
    </section>
  );
}


// import emailjs from "emailjs-com";


// export default function Contact() {

//     const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm(
//       "portfolio", // ID service
//       "template_ebofpun", // ID template
//       e.target,
//       "1uQmBmaOdrMtueMxp" // user/public key
//     ).then(
//       () => alert("Message envoyé ✅"),
//       () => alert("Erreur ❌")
//     );
//   };
//   return (
//     <section id="contact" className="py-16 bg-gray-100 dark:bg-gray-800">
//       <div className="max-w-4xl mx-auto text-center">
//         <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
//           Me contacter
//         </h2>
//         <p className="mb-8 text-gray-700 dark:text-gray-300">
//           N’hésitez pas à m’envoyer un message pour collaborer ou poser vos
//           questions.
//         </p>

//         <form onSubmit={sendEmail} className="space-y-4">
//           <input
//             type="text"
//             placeholder="Votre nom"
//             className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <input
//             type="email"
//             placeholder="Votre email"
//             className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <textarea
//             rows="4"
//             placeholder="Votre message"
//             className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           ></textarea>
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
//           >
//             Envoyer
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// }
