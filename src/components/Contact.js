export default function Contact() {
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

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Votre nom"
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Votre email"
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            rows="4"
            placeholder="Votre message"
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
