<template>
  <section class="relative min-h-screen w-full bg-black flex items-center overflow-hidden font-sans">

    <div class="absolute inset-0 z-0">
      <div class="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#052e16_0%,#000_70%)]"></div>
      <div class="absolute inset-0 opacity-10"
           style="background-image: radial-gradient(#d97706 1px, transparent 1px); background-size: 40px 40px;"></div>
    </div>

    <img src="../../assets/images/bg-hero.jpg"
         class="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none z-0"
         alt="Background Ticket">

    <div class="container mx-auto px-4 relative z-10 md:pt-20 pb-48 pt-32 md:pb-0">
      <div class="flex flex-col lg:flex-row items-center justify-between gap-12">

        <div class="w-full lg:w-1/2 text-center lg:text-left">
          <div class="inline-flex items-center gap-2 bg-green-900/20 border border-amber-500/20 px-4 py-2 rounded-full mb-8 animate-fade-in">
            <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_#22c55e]"></span>
            <span class="text-[10px] font-black uppercase tracking-[0.3em] text-amber-500">Frota Premium</span>
          </div>

          <h1 class="text-6xl md:text-8xl font-black text-white  italic leading-[0.85] tracking-tighter mb-8">
            A casa do motorista<br>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-amber-400 to-yellow-300">de aplicativo.</span>
          </h1>

          <p class="text-gray-400 text-lg md:text-xl max-w-lg mx-auto lg:mx-0 mb-6 leading-relaxed font-medium">
            Liberdade para explorar o caminho com veículos de alta performance.
          </p>



          <div class="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <a href="https://wa.me/5579999094631" class="w-full sm:w-auto bg-green-700 hover:bg-amber-500 text-white hover:text-black px-10 py-5 rounded-2xl font-black uppercase text-xs tracking-widest transition-all duration-500 shadow-[0_20px_40px_rgba(5,46,22,0.4)]">
              Reservar Veículo Agora
            </a>
            <a href="https://wa.me/5579999094631" class="w-full sm:w-auto bg-transparent border border-amber-500/20 hover:border-amber-500 text-white px-10 py-5 rounded-2xl font-black uppercase text-xs tracking-widest transition-all">
              Ver Plano
            </a>
          </div>
        </div>

        <div class="w-full lg:w-1/2 relative animate-slide-left">
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-green-900/20 blur-[120px] rounded-full"></div>

          <img
            src="../../assets/images/bg.PNG"
            alt="Veículo"
            class="relative z-10 w-full h-auto object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.8)] transform -rotate-2 hover:rotate-0 transition-transform duration-1000"
          >

        </div>

      </div>
    </div>

    <div class="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
      <span class="text-[9px] font-black uppercase tracking-[0.5em] text-amber-500">Scroll</span>
      <div class="w-[1px] h-12 bg-gradient-to-b from-amber-600 to-transparent"></div>
    </div>
  </section>
</template>
