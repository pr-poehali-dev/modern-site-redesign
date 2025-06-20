import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">М</span>
              </div>
              <span className="text-xl font-bold">Мастерская будущего</span>
            </div>
            <p className="text-gray-400 mb-6">
              Образовательная франшиза нового поколения для развития детей и
              поддержки семей.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors"
              >
                <Icon name="Phone" size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors"
              >
                <Icon name="Mail" size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors"
              >
                <Icon name="MessageCircle" size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Продлёнка
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Мастер-классы
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Консультирование
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Просвещение
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Франшиза</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Условия
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Поддержка
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Обучение
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Документы
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-2">
                <Icon name="Phone" size={16} />
                <span>+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Mail" size={16} />
                <span>info@mastercraft.ru</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="MapPin" size={16} />
                <span>Москва, ул. Примерная, 123</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Мастерская будущего. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
