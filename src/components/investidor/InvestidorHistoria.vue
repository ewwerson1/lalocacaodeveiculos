<template>
  <section
    class="ecosystem-section relative hidden md:flex py-32 px-6 overflow-hidden min-h-[600px]
    items-center justify-center
    bg-gradient-to-br
    from-[#f8fafc]
    via-emerald-50
    to-amber-50
    text-slate-900"
  >
    <!-- Blobs -->
    <div class="absolute -top-24 -right-24 w-[600px] h-[600px] bg-emerald-400/20 rounded-full blur-[140px] -z-10"></div>
    <div class="absolute -bottom-24 -left-24 w-[600px] h-[600px] bg-amber-300/25 rounded-full blur-[140px] -z-10"></div>

    <!-- Título -->
    <div class="absolute top-10 left-10 md:left-20">
      <span class="text-amber-600 uppercase text-xs tracking-widest font-bold">
        Nosso Ecossistema
      </span>
      <h2 class="text-4xl md:text-6xl font-black tracking-tighter italic leading-none">
        O ciclo <br />
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-500">
          do sucesso.
        </span>
      </h2>
    </div>

    <!-- Centro -->
    <div class="relative w-full max-w-4xl h-[500px] flex items-center justify-center">

      <!-- Círculo -->
      <div
        class="absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px]
        border-2 border-dashed border-emerald-300/60
        rounded-full animate-[spin_50s_linear_infinite]"
      ></div>

      <!-- Texto central -->
      <div class="text-center z-10 px-4">
        <div class="mb-4 flex justify-center">
          <svg class="w-8 h-8 text-emerald-400 animate-spin-slow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
          </svg>
        </div>
        <p class="text-amber-600 italic font-medium text-lg md:text-xl">
          "Para um ganhar, todos <br> precisam ganhar"
        </p>
      </div>

      <!-- Investidor -->
      <div class="absolute -top-5 flex flex-col items-center w-64 text-center">
        <div class="icon-circle">
          <span class="text-amber-500 text-2xl font-bold">$</span>
        </div>
        <h3 class="font-bold text-lg">Investidor</h3>
        <p class="text-xs text-slate-600 mt-1 px-4">
          Disponibiliza o veículo e confia no nosso trabalho
        </p>
      </div>

      <!-- LA -->
      <div class="absolute bottom-36 left-[100px] md:right-0 flex flex-col items-center w-64 text-center">
        <div class="icon-circle border-yellow-500">
          <svg class="w-8 h-8 text-amber-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
          </svg>
        </div>
        <h3 class="font-bold text-lg">L.A Administração</h3>
        <p class="text-xs text-slate-600 mt-1 px-4">
          Repasse do aluguel para o investidor
        </p>
      </div>

      <!-- Motorista -->
      <div class="absolute -bottom-20 ml-3 md:left-78 flex flex-col items-center w-64 text-center">
        <div class="icon-circle">
          <svg class="w-8 h-8 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99z"/>
          </svg>
        </div>
        <h3 class="font-bold text-lg">Motorista</h3>
        <p class="text-xs text-slate-600 mt-1 px-4">
          Aluga o carro e gera a renda para o ciclo girar
        </p>
      </div>

      <!-- LA -->
      <div class="absolute bottom-32 left-[540px] md:right-0 flex flex-col items-center w-64 text-center">
        <div class="icon-circle border-yellow-500">
          <svg class="w-8 h-8 text-amber-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
          </svg>
        </div>
        <h3 class="font-bold text-lg">L.A Administração</h3>
        <p class="text-xs text-slate-600 mt-1 px-4">
          Faz a gestão, proteção e garante a qualidade
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* textura grain / noise */
.ecosystem-section::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image:
    repeating-radial-gradient(
      circle at 0 0,
      rgba(0,0,0,0.035) 0,
      rgba(0,0,0,0.035) 1px,
      transparent 1px,
      transparent 3px
    );
  opacity: 0.35;
  pointer-events: none;
  z-index: -1;
}

/* ícones */
.icon-circle {
  width: 4rem;
  height: 4rem;
  background: white;
  border: 2px solid #f59e0b;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  box-shadow: 0 0 15px rgba(245, 158, 11, 0.35);
}

/* animação */
.animate-spin-slow {
  animation: spin 6s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
</style>
