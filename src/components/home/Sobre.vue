<template>
  <section class="py-24 bg-white overflow-hidden font-sans">
    <div class="container mx-auto px-4">
      <div class="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

        <div class="lg:w-1/2 relative">
          <div class="absolute -bottom-6 -right-6 w-full h-full border-2 border-yellow-400 rounded-[3rem] -z-10 hidden md:block"></div>

          <div class="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl transform hover:rotate-1 transition-transform duration-700">
            <img
              src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=1200"
              class="w-full h-[500px] object-cover"
              alt="Showroom LA Veículos"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

            <div class="absolute bottom-8 left-8 bg-yellow-400 p-6 rounded-2xl shadow-xl rotate-[-4deg]">
              <span class="block text-4xl font-black text-black leading-none">3+</span>
              <span class="text-[10px] font-black uppercase text-black tracking-tighter">Anos de Estrada</span>
            </div>
          </div>

          <div class="absolute -top-10 -right-10 bg-black text-white p-8 rounded-[2rem] hidden lg:block shadow-2xl animate-bounce-slow">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FACC15" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
          </div>
        </div>

        <div class="lg:w-1/2">
          <div class="mb-8">
            <div class="flex items-center gap-3 mb-4">
              <span class="h-[2px] w-10 bg-yellow-400"></span>
              <span class="text-xs font-black uppercase tracking-[0.4em] text-gray-400">Nossa História</span>
            </div>
            <h2 class="text-5xl md:text-6xl font-black text-black uppercase leading-[0.9] tracking-tighter">
              A LIBERDADE DE <br>
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600">IR MAIS LONGE</span>
            </h2>
          </div>

          <div class="space-y-6 text-gray-500 text-lg leading-relaxed mb-12">
            <p>
              Na <span class="text-black font-bold">LA Veículos</span>, não apenas alugamos carros; entregamos a chave para a sua próxima conquista. Com uma década de experiência, transformamos o aluguel em uma experiência invisível, rápida e eficiente.
            </p>
            <p>
              Nossa frota é rigorosamente selecionada para garantir que, seja para um compromisso de negócios ou uma viagem em família, você tenha em mãos <span class="text-green-600 font-bold italic">tecnologia e segurança.</span>
            </p>
          </div>

          <div class="grid grid-cols-2 gap-8 border-t border-gray-100 pt-10">
            <div class="group">
              <div class="flex items-baseline gap-1">
                <span class="text-4xl font-black text-black group-hover:text-yellow-500 transition-colors">10k</span>
                <span class="text-yellow-500 font-black text-2xl">+</span>
              </div>
              <p class="text-[10px] font-black uppercase tracking-widest text-gray-400 mt-2">Clientes que confiam</p>
            </div>
            <div class="group">
              <div class="flex items-baseline gap-1">
                <span class="text-4xl font-black text-black group-hover:text-yellow-500 transition-colors">100</span>
                <span class="text-yellow-500 font-black text-2xl">+</span>
              </div>
              <p class="text-[10px] font-black uppercase tracking-widest text-gray-400 mt-2">Veículos na frota</p>
            </div>
          </div>

          <button class="mt-12 group flex items-center gap-4 text-black font-black uppercase text-sm tracking-widest border-b-2 border-black pb-2 hover:border-yellow-400 transition-all">
            Conheça nossos valores
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="group-hover:translate-x-2 transition-transform">
              <path d="M5 12h14m-7-7 7 7-7 7"/>
            </svg>
          </button>
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
