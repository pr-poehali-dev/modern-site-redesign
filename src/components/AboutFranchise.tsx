import Icon from "@/components/ui/icon";

const AboutFranchise = () => {
  const benefits = [
    {
      icon: "Rocket",
      title: "Быстрый старт",
      description: "Запуск локации за 30 дней с полной поддержкой",
    },
    {
      icon: "TrendingUp",
      title: "Растущий рынок",
      description:
        "Образовательные услуги — один из самых перспективных сегментов",
    },
    {
      icon: "Shield",
      title: "Минимальные риски",
      description: "Проверенная бизнес-модель с гарантированной окупаемостью",
    },
    {
      icon: "Lightbulb",
      title: "Уникальная методика",
      description: "Авторские программы, разработанные экспертами",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Почему выбирают нас?
            </h2>
            <p className="text-xl mb-8 text-purple-100 leading-relaxed">
              Мастерская будущего — это не просто франшиза, это возможность
              создать образовательный центр нового поколения, где дети получают
              навыки XXI века.
            </p>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Icon
                      name={benefit.icon}
                      size={24}
                      className="text-white"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-purple-100">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6">Условия партнерства</h3>

              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-white/20">
                  <span className="text-purple-100">Паушальный взнос</span>
                  <span className="font-bold">от 350 000 ₽</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/20">
                  <span className="text-purple-100">Роялти</span>
                  <span className="font-bold">7% с оборота</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/20">
                  <span className="text-purple-100">Окупаемость</span>
                  <span className="font-bold">8-12 месяцев</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-purple-100">Прибыль в месяц</span>
                  <span className="font-bold">от 200 000 ₽</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFranchise;
