import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden flex items-center">
      {/* 3D Background Elements */}
      <div className="absolute inset-0">
        <div className="floating-cube absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-purple-500/30 to-pink-500/30 transform-gpu animate-floating-slow"></div>
        <div className="floating-sphere absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full animate-floating"></div>
        <div className="floating-pyramid absolute bottom-40 left-20 w-12 h-12 bg-gradient-to-r from-yellow-500/30 to-orange-500/30 transform-gpu animate-floating-fast"></div>
        <div className="floating-octagon absolute top-60 left-1/2 w-14 h-14 bg-gradient-to-r from-green-500/30 to-teal-500/30 transform-gpu animate-floating-slow rotate-45"></div>
      </div>

      {/* Parallax Grid */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Im0gMTAwIDAgTCAwIDAgMCAxMDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzZkMjhkOSIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30 animate-grid-move"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center">
          <div className="transform-gpu animate-float-up">
            <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent animate-text-shimmer">
              Мастерская будущего
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-purple-100 max-w-4xl mx-auto leading-relaxed transform-gpu animate-fade-in-up">
              Откройте собственную образовательную локацию с полным спектром
              услуг для детей и родителей. Инновационная франшиза с 3D подходом
              к обучению.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <button className="group px-10 py-5 bg-gradient-to-r from-white to-purple-50 text-purple-700 font-bold rounded-2xl hover:shadow-3d transition-all duration-500 transform-gpu hover:scale-105 hover:rotate-1 shadow-2xl">
                <span className="flex items-center space-x-3">
                  <Icon
                    name="Rocket"
                    size={24}
                    className="group-hover:animate-bounce"
                  />
                  <span>Узнать о франшизе</span>
                </span>
              </button>
              <button className="group px-10 py-5 border-2 border-white/50 text-white font-bold rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-500 transform-gpu hover:scale-105 hover:-rotate-1">
                <span className="flex items-center space-x-3">
                  <Icon
                    name="Play"
                    size={24}
                    className="group-hover:animate-pulse"
                  />
                  <span>Смотреть презентацию</span>
                </span>
              </button>
            </div>
          </div>

          {/* 3D Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            <div className="stat-card bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 transform-gpu hover:scale-105 hover:rotate-1 transition-all duration-500 shadow-3d">
              <div className="text-5xl font-bold mb-3 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                15+
              </div>
              <div className="text-purple-200 text-lg">Успешных локаций</div>
            </div>
            <div className="stat-card bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 transform-gpu hover:scale-105 hover:-rotate-1 transition-all duration-500 shadow-3d">
              <div className="text-5xl font-bold mb-3 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                500+
              </div>
              <div className="text-purple-200 text-lg">Довольных семей</div>
            </div>
            <div className="stat-card bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 transform-gpu hover:scale-105 hover:rotate-1 transition-all duration-500 shadow-3d">
              <div className="text-5xl font-bold mb-3 bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
                24/7
              </div>
              <div className="text-purple-200 text-lg">Поддержка партнеров</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
