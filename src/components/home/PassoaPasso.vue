<template>
  <section id="como-funciona" class="py-24 bg-yellow-200/80 relative overflow-hidden font-sans">
    <div class="absolute top-1/4 -left-20 w-80 h-80 bg-green-100/40 blur-[120px] rounded-full"></div>
    <div class="absolute bottom-1/4 -right-20 w-80 h-80 bg-amber-100/30 blur-[120px] rounded-full"></div>

    <div class="container mx-auto px-4 relative z-10">

      <div class="text-center mb-20">
        <h2 class="text-6xl md:text-8xl font-black  italic tracking-tighter leading-none">
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-700 via-green-600 to-amber-500">
            Fluxo L.A.
          </span>
        </h2>
        <p class="text-slate-400 font-bold uppercase tracking-[0.3em] mt-4 text-xs">
          Do cadastro ao aluguel em 4 etapas
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="(passo, index) in passos" :key="index" class="group relative">

          <div class="h-full bg-slate-50 border border-slate-200 p-8 rounded-[2.5rem] transition-all duration-500 group-hover:bg-white group-hover:border-green-600/30 group-hover:shadow-2xl group-hover:shadow-green-900/10 group-hover:-translate-y-3">

            <span class="absolute top-4 right-8 text-8xl font-black text-slate-200/40 group-hover:text-amber-500/10 transition-colors duration-500 select-none">
              0{{ index + 1 }}
            </span>

            <div class="relative w-16 h-16 bg-gradient-to-br from-green-700 to-green-500 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-green-900/20 group-hover:rotate-6 transition-transform duration-500 text-white"
                 v-html="passo.icon">
            </div>

            <div class="relative">
              <h3 class="text-xl font-extrabold text-slate-900 uppercase mb-4 tracking-tight group-hover:text-green-700 transition-colors">
                {{ passo.titulo }}
              </h3>
              <p class="text-slate-500 leading-relaxed font-medium text-sm">
                {{ passo.desc }}
              </p>
            </div>

            <div v-if="index < 3" class="lg:hidden flex justify-center mt-8">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-green-700 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 14l-7 7-7-7" />
              </svg>
            </div>
          </div>

          <div v-if="index < 3" class="hidden lg:block absolute top-1/2 -right-4 translate-x-1/2 -translate-y-1/2 z-20">
            <div class="w-8 h-8 bg-white border-2 border-green-700 rounded-full flex items-center justify-center shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>

        </div>
      </div>

      <div class="mt-20 py-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-center gap-6">
        <div class="flex items-center gap-3">
          <div class="flex -space-x-2">
            <div v-for="i in 3" :key="i" class="w-10 h-10 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center overflow-hidden shadow-sm">
               <img :src="`https://i.pravatar.cc/100?img=${i+12}`" alt="Motorista">
            </div>
          </div>
          <span class="text-slate-400 text-[10px] font-black uppercase tracking-widest italic">
            Aprovação ágil para motoristas <span class="text-green-700">Uber & 99</span>
          </span>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
const passos = [
  {
    titulo: 'Análise de Perfil',
    desc: 'Envio da documentação para análise rápida e sem burocracia.',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/></svg>'
  },
  {
    titulo: 'Caução Facilitada',
    desc: 'Pague a entrada de R$ 900 + a primeira semana. O restante da caução você parcela direto no aluguel.',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><path d="M12 10v4"/><path d="m9 12 3 3 3-3"/></svg>'
  },
  {
    titulo: 'Vistoria Técnica',
    desc: 'Conferência completa do veículo e Carteira Digital. Transparência total antes da partida.',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m9 11 3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>'
  },
  {
    titulo: 'Pé na Estrada',
    desc: 'Retire seu carro com KM livre para Sergipe. Manutenção e proteção garantidas por nossa conta.',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>'
  }
]
</script>
