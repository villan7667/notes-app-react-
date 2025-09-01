import { useState } from "react";
import { FiFeather, FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/20 bg-white/40 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-teal-500 text-white shadow">
            <FiFeather aria-hidden className="h-5 w-5" />
            <span className="sr-only">Logo</span>
          </span>
          <span className="text-lg font-semibold text-slate-800">Keeper</span>
        </div>
        <button
          type="button"
          className="sm:hidden inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:text-slate-900 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500 transition-all duration-200"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          {isMenuOpen ? (
            <FiX className="block h-6 w-6" />
          ) : (
            <FiMenu className="block h-6 w-6" />
          )}
        </button>
        <nav 
          aria-label="Main" 
          className={`${isMenuOpen ? 'block' : 'hidden'} sm:flex sm:items-center sm:gap-6 text-sm absolute top-14 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-white/20 sm:static sm:border-b-0 sm:bg-transparent sm:backdrop-blur-none px-4 sm:px-0 shadow-lg sm:shadow-none`}
        >
          <a 
            href="#add-note" 
            className="text-slate-700 hover:text-teal-600 hover:scale-105 focus-ring rounded block py-3 sm:py-0 text-center font-medium transition-all duration-200 transform sm:hover:scale-100 sm:hover:text-slate-900"
          >
            Add
          </a>
          <a 
            href="#your-notes" 
            className="text-slate-700 hover:text-teal-600 hover:scale-105 focus-ring rounded block py-3 sm:py-0 text-center font-medium transition-all duration-200 transform sm:hover:scale-100 sm:hover:text-slate-900"
          >
            Notes
          </a>
          <a 
            href="#" 
            className="text-slate-700 hover:text-teal-600 hover:scale-105 focus-ring rounded block py-3 sm:py-0 text-center font-medium transition-all duration-200 transform sm:hover:scale-100 sm:hover:text-slate-900"
          >
            About
          </a>
          <a 
            href="#" 
            className="text-slate-700 hover:text-teal-600 hover:scale-105 focus-ring rounded block py-3 sm:py-0 text-center font-medium transition-all duration-200 transform sm:hover:scale-100 sm:hover:text-slate-900"
          >
            sign in
          </a>
          <a 
            href="#" 
            className="text-slate-700 hover:text-teal-600 hover:scale-105 focus-ring rounded block py-3 sm:py-0 text-center font-medium transition-all duration-200 transform sm:hover:scale-100 sm:hover:text-slate-900"
          >
            sign up
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
