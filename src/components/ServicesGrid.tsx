import Icon from "@/components/ui/icon";

const ServicesGrid = () => {
  const services = [
    {
      icon: "Clock",
      title: "Продлёнка",
      description:
        "Безопасное пространство для детей после школы с развивающими активностями",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: "Palette",
      title: "Мастер-классы",
      description:
        "Творческие и технические занятия для развития навыков будущего",
      color: "from-blue-500 to-purple-500",
    },
    {
      icon: "Users",
      title: "Консультирование родителей",
      description:
        "Профессиональная помощь в вопросах воспитания и развития детей",
      color: "from-green-500 to-blue-500",
    },
    {
      icon: "BookOpen",
      title: "Просвещение",
      description: "Образовательные программы для детей и взрослых",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: "Heart",
      title: "Социальные проекты",
      description:
        "Благотворительные инициативы и общественно полезная деятельность",
      color: "from-pink-500 to-purple-500",
    },
    {
      icon: "Brain",
      title: "Психологическое сопровождение",
      description: "Профессиональная психологическая поддержка детей и семей",
      color: "from-indigo-500 to-purple-500",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Что включает франшиза
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Полный спектр образовательных и развивающих услуг для создания
            успешного бизнеса
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div
                className={`w-16 h-16 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <Icon name={service.icon} size={32} className="text-white" />
              </div>

              <h3 className="text-xl font-bold mb-4 text-gray-800 group-hover:text-purple-600 transition-colors">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
