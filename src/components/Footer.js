export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm">&copy; {new Date().getFullYear()} Mon Portfolio. Tous droits réservés.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://github.com/shiro76" target="_blank" rel="noopener noreferrer" className="hover:text-white">GitHub</a>
          <a href="https://www.linkedin.com/in/stan-jan-b8ab69199/" target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn</a>
          <a href="mailto:shinkahb@gmail.com" className="hover:text-white">Email</a>
        </div>
      </div>
    </footer>
  );
}
