<template>
  <section class="py-24 bg-white overflow-hidden font-sans">
    <div class="container mx-auto px-4">
      <div class="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

        <div class="lg:w-1/2 relative">
          <div class="absolute -bottom-6 -right-6 w-full h-full border-2 border-green-700 rounded-[3rem] -z-10 hidden md:block"></div>

          <div class="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl transform hover:rotate-1 transition-transform duration-700 border border-gray-100">
            <img
              src="../../assets/icons/sobre.PNG"
              class="w-full h-[600px] object-cover"
              alt="L.A Administração e Locação"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

            <div class="absolute bottom-8 left-8 bg-green-700 p-6 rounded-2xl shadow-xl rotate-[-4deg] border border-green-600">
              <span class="block text-3xl font-black text-white leading-none">L.A Veículos</span>
              <span class="text-[10px] font-black uppercase text-green-200 tracking-widest">A Casa do Motorista de APP</span>
            </div>
          </div>

          <div class="absolute -top-10 -right-10 bg-black text-white p-8 rounded-[2rem] hidden lg:block shadow-2xl border border-amber-500/30">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
          </div>
        </div>

        <div class="lg:w-1/2">
          <div class="mb-8">
            <div class="flex items-center gap-3 mb-4">
              <span class="h-[2px] w-10 bg-green-700"></span>
              <span class="text-xs font-black uppercase tracking-[0.4em] text-amber-600">Quem Somos</span>
            </div>
            <h2 class="text-4xl md:text-6xl font-black text-black  leading-[0.9] tracking-tighter italic">
              L.A administração e <br>
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-amber-500">locação de veículos</span>
            </h2>
          </div>

          <div class="space-y-5 text-slate-600 text-base leading-relaxed mb-10">
            <p>
              Reconhecida pelos próprios motoristas como <span class="text-black font-bold">“a casa do motorista de app”</span> — um lugar onde você é bem recebido, ouvido e tratado com respeito. Nosso objetivo é simples: facilitar sua rotina e ajudar você a rodar com tranquilidade e segurança.
            </p>
            <p>
              Somos especialistas em gestão de frota, oferecendo carros revisados e dentro dos padrões exigidos pelos aplicativos. Trabalhamos com valores semanais que variam conforme o modelo e categoria (Comfort ou não), buscando sempre a <span class="text-green-700 font-bold">melhor opção para o seu perfil.</span>
            </p>
            <p>
              Aqui, você não é apenas um número. Nossa equipe é próxima e preparada para reduzir seu tempo parado e aumentar seu <span class="text-green-700 font-bold italic underline decoration-amber-400">tempo na rua faturando.</span> Se você procura parceria de verdade, a L.A é o seu lugar.
            </p>
            <div class="bg-slate-50 p-4 rounded-xl border-l-4 border-green-700 italic font-medium text-slate-700">
              "Aqui é trabalho, respeito e parceria. Aqui é a casa do motorista de app."
            </div>
          </div>

          <div class="grid grid-cols-2 gap-8 border-t border-slate-100 pt-8">
            <div class="group">
              <div class="flex items-baseline gap-1">
                <span class="text-4xl font-black text-black group-hover:text-green-700 transition-colors">Elite</span>
                <span class="text-amber-500 font-black text-2xl">★</span>
              </div>
              <p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">Gestão de Frota</p>
            </div>
            <div class="group">
              <div class="flex items-baseline gap-1">
                <span class="text-4xl font-black text-black group-hover:text-green-700 transition-colors">100%</span>
                <span class="text-amber-500 font-black text-2xl">✔</span>
              </div>
              <p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">Suporte Sergipano</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes bounce-slow {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}
.animate-bounce-slow {
  animation: bounce-slow 4s ease-in-out infinite;
}
</style>
