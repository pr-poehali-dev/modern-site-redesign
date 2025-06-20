import { useState } from "react";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center transform-gpu rotate-3d hover:rotate-0 transition-all duration-300">
              <span className="text-white font-bold text-xl">М</span>
            </div>
            <span className="text-xl font-bold text-gray-800">
              Мастерская будущего
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#services"
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              Услуги
            </a>
            <a
              href="#about"
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              О франшизе
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              Контакты
            </a>
            <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300">
              Стать партнером
            </button>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4 pt-4">
              <a
                href="#services"
                className="text-gray-600 hover:text-purple-600 transition-colors"
              >
                Услуги
              </a>
              <a
                href="#about"
                className="text-gray-600 hover:text-purple-600 transition-colors"
              >
                О франшизе
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-purple-600 transition-colors"
              >
                Контакты
              </a>
              <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full">
                Стать партнером
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
