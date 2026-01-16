<template>
  <section class="py-24 bg-zinc-950 relative overflow-hidden font-sans">
    <div class="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
      <svg class="absolute right-0 top-0 h-full text-emerald-500" viewBox="0 0 400 800" fill="none">
        <circle cx="400" cy="400" r="300" stroke="currentColor" stroke-dasharray="10 10" />
        <circle cx="400" cy="400" r="200" stroke="currentColor" stroke-dasharray="5 5" class="text-lime-500" />
      </svg>
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div class="max-w-xl text-left">
          <h2 class="text-white text-5xl font-black uppercase tracking-tighter leading-none mb-4 italic">
            Sergipe <br>
            <span class="text-emerald-500 font-outline-2">Estratégico</span>
          </h2>
          <p class="text-gray-400 text-lg">
            Sua melhor opção de aluguel em Sergipe. Unidades prontas para entrega imediata em Aracaju e região metropolitana.
          </p>
        </div>
        <div class="hidden md:block">
           <div class="flex items-center gap-2 text-emerald-400 font-bold uppercase text-xs tracking-widest bg-emerald-400/10 px-4 py-2 rounded-full border border-emerald-400/20">
             <span class="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
             Unidades Disponíveis em Aracaju
           </div>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="local in locais"
          :key="local.bairro"
          class="group relative bg-[#111] p-1 border border-white/5 rounded-[2rem] hover:border-emerald-500/50 transition-all duration-500"
        >
          <div class="p-8 h-full flex flex-col items-start">
            <div class="mb-6 p-4 bg-emerald-500 rounded-2xl group-hover:bg-emerald-300 transition-colors duration-500 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-black">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
              </svg>
            </div>

            <h3 class="text-white text-2xl font-black uppercase mb-2 group-hover:text-emerald-400 transition-colors italic">
              {{ local.cidade }}
            </h3>
            <p class="text-gray-500 font-bold uppercase text-xs tracking-widest mb-6">
              {{ local.bairro }}
            </p>

            <button class="mt-auto flex items-center gap-2 text-white/40 group-hover:text-white transition-all text-xs font-black uppercase tracking-widest">
              Ver no Mapa
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="translate-x-0 group-hover:translate-x-2 transition-transform">
                <path d="M5 12h14m-7-7 7 7-7 7"/>
              </svg>
            </button>
          </div>

          <div class="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 rounded-[2rem] transition-opacity"></div>
        </div>
      </div>

      <div class="mt-16 text-center">
        <p class="text-gray-600 text-sm font-medium uppercase tracking-[0.3em]">
          Entrega VIP em hotéis da Orla e Aeroporto de Aracaju (AJU)
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
const locais = [
  { cidade: 'Aracaju', bairro: 'Aeroporto Santa Maria' },
  { cidade: 'Aracaju', bairro: 'Orla de Atalaia' },
  { cidade: 'Aracaju', bairro: 'Centro / Shopping Riomar' }
]
</script>

<style scoped>
.font-outline-2 {
  -webkit-text-stroke: 1px rgba(16, 185, 129, 0.5);
  color: transparent;
}
</style>
