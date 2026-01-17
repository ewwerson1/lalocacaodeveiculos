<template>
  <section class="relative min-h-screen w-full bg-black flex items-center overflow-hidden font-sans">

    <div class="absolute inset-0 z-0">
      <div class="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#062012_0%,#000_70%)]"></div>
      <div class="absolute inset-0 opacity-10"
           style="background-image: radial-gradient(#10b981 1px, transparent 1px); background-size: 40px 40px;"></div>
    </div>

    <div class="container mx-auto px-4 relative z-10 md:pt-20 pb-48 pt-20 md:pb-0 md:pt-0">
      <div class="flex flex-col lg:flex-row items-center justify-between gap-12">
        <div class="w-full lg:w-1/2 text-center lg:text-left">
          <div class="inline-flex items-center gap-2 bg-emerald-500/5 border border-emerald-500/20 px-4 py-2 rounded-full mb-8 animate-fade-in">
            <span class="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            <span class="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-400">Frota Disponível</span>
          </div>

          <h1 class="text-6xl md:text-8xl font-black text-white uppercase italic leading-[0.85] tracking-tighter mb-8">
            NÃO É APENAS <br>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-lime-400">ALUGUEL.</span> <br>
            <span class="text-4xl md:text-6xl text-white">É EXPERIÊNCIA.</span>
          </h1>

          <p class="text-gray-400 text-lg md:text-xl max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed font-medium">
            Liberdade para explorar o caminho com veículos de alta performance e aprovação em menos de 60 segundos.
          </p>

          <div class="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <button class="w-full sm:w-auto bg-emerald-500 hover:bg-white text-black px-10 py-5 rounded-2xl font-black uppercase text-xs tracking-widest transition-all duration-500 shadow-[0_20px_40px_rgba(16,185,129,0.3)]">
              Escolher meu Carro
            </button>
            <button class="w-full sm:w-auto bg-transparent border border-emerald-500/20 hover:border-emerald-500 text-white px-10 py-5 rounded-2xl font-black uppercase text-xs tracking-widest transition-all">
              Ver Planos Semanais
            </button>
          </div>
        </div>

        <div class="w-full lg:w-1/2 relative animate-slide-left">
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-emerald-500/20 blur-[120px] rounded-full"></div>

          <img
            src="../../assets/images/bg.png"
            alt="Porsche em Destaque"
            class="relative z-10 w-full h-auto object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)] transform -rotate-2 hover:rotate-0 transition-transform duration-1000"
          >

          <div class="absolute top-0 right-0 bg-black/60 backdrop-blur-md border border-emerald-500/20 p-4 rounded-2xl z-20 hidden md:block">
            <span class="block text-emerald-400 font-black text-xl">Rodagem ilimitada</span>
            <span class="text-[9px] text-gray-400 uppercase font-bold tracking-widest">Veículos Novos</span>
          </div>
        </div>

      </div>
    </div>

    <div class="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
      <span class="text-[9px] font-black uppercase tracking-[0.5em] text-white">Scroll</span>
      <div class="w-[1px] h-12 bg-gradient-to-b from-emerald-500 to-transparent"></div>
    </div>
  </section>
</template>

<style scoped>
@keyframes fade-in {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes slide-left {
  from { opacity: 0; transform: translateX(100px); }
  to { opacity: 1; transform: translateX(0); }
}

.animate-fade-in {
  animation: fade-in 1s ease-out forwards;
}

.animate-slide-left {
  animation: slide-left 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}
</style>
