<template>
  <section id="como-funciona" class="py-24 bg-gradient-to-br from-green-900 via-green-800 to-amber-400 relative overflow-hidden font-sans">

    <div class="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
    <div class="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-300/20 blur-[150px] rounded-full"></div>

    <div class="container mx-auto px-4 relative z-10">

      <div class="text-center mb-20">
        <h2 class="text-6xl md:text-8xl font-black italic tracking-tighter leading-none text-white">
          Fluxo L.A.
        </h2>
        <div class="flex items-center justify-center gap-3 mt-6">
          <span class="h-[2px] w-12 bg-amber-400"></span>
          <p class="text-amber-300 font-black uppercase tracking-[0.3em] text-xs">
            Do cadastro ao aluguel em 4 etapas
          </p>
          <span class="h-[2px] w-12 bg-amber-400"></span>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="(passo, index) in passos" :key="index" class="group relative">

          <div class="h-full bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-[2.5rem] transition-all duration-500 hover:bg-white/20 hover:scale-[1.05] hover:shadow-2xl hover:shadow-black/20">

            <span class="absolute top-4 right-8 text-7xl font-black text-white/5 group-hover:text-amber-400/10 transition-colors duration-500 select-none">
              0{{ index + 1 }}
            </span>

            <div class="relative w-16 h-16 bg-amber-400 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-amber-900/20 group-hover:rotate-6 transition-transform duration-500 text-green-950"
                 v-html="passo.icon">
            </div>

            <div class="relative">
              <h3 class="text-xl font-extrabold text-white uppercase mb-4 tracking-tight group-hover:text-amber-300 transition-colors">
                {{ passo.titulo }}
              </h3>
              <p class="text-green-50/80 leading-relaxed font-medium text-sm">
                {{ passo.desc }}
              </p>
            </div>
          </div>

          <div v-if="index < 3" class="hidden lg:block absolute top-1/2 -right-4 translate-x-1/2 -translate-y-1/2 z-20">
            <div class="w-10 h-10 bg-white/10 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center shadow-xl">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>

        </div>
      </div>

      <div class="mt-20 py-8 border-t border-white/10 flex flex-col items-center justify-center">
        <div class="bg-black/20 backdrop-blur-xl px-8 py-4 rounded-3xl border border-white/10 flex flex-col md:flex-row items-center gap-4">
          <div class="flex -space-x-3">
            <div v-for="i in 3" :key="i" class="w-10 h-10 rounded-full border-2 border-amber-400 bg-green-800 flex items-center justify-center overflow-hidden">
               <img :src="`https://i.pravatar.cc/100?img=${i+5}`" alt="Motorista">
            </div>
          </div>
          <p class="text-white text-[11px] font-bold uppercase tracking-widest italic">
            Aprovação recorde para <span class="text-amber-400">Uber & 99</span> em Aracaju
          </p>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
const passos = [
  {
    titulo: 'Análise de Perfil',
    desc: 'Documentação simplificada com aprovação em até 24h.',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/></svg>'
  },
  {
    titulo: 'Caução Facilitada',
    desc: 'Apenas R$ 900 de caução inicial + primeira semana de aluguel.',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><path d="M12 10v4"/><path d="m9 12 3 3 3-3"/></svg>'
  },
  {
    titulo: 'Vistoria Técnica',
    desc: 'Veículos revisados e prontos para rodar com segurança.',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m9 11 3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>'
  },
  {
    titulo: 'Pé na Estrada',
    desc: 'Liberdade total com KM livre para trabalhar em Sergipe.',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>'
  }
]
</script>
