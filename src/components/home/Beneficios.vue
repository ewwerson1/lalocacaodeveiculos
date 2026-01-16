<template>
  <section
    class="relative py-24 bg-[#fafafa] overflow-hidden bg-cover bg-center bg-no-repeat"
    :style="{ backgroundImage: `url(${bgCta})` }"
  >
    <div class="absolute inset-0 bg-white/90 z-0"></div>

    <div class="container mx-auto px-4 relative z-10">

      <div class="max-w-3xl mb-16">
        <div class="flex items-center gap-2 mb-4">
          <span class="w-12 h-[2px] bg-emerald-500"></span>
          <span class="text-sm font-black uppercase tracking-[0.2em] text-gray-500">Diferenciais</span>
        </div>
        <h2 class="text-4xl md:text-5xl font-black text-black leading-tight uppercase italic">
          Por que escolher a <br>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-lime-500">LA Veículos?</span>
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(ben, index) in beneficios"
          :key="index"
          class="group relative p-10 bg-white/80 backdrop-blur-md border border-gray-100 rounded-[2.5rem] transition-all duration-500 hover:shadow-[0_20px_50px_rgba(16,185,129,0.1)] hover:-translate-y-2 overflow-hidden"
        >
          <div class="absolute -right-8 -top-8 w-32 h-32 bg-emerald-500/5 rounded-full group-hover:bg-emerald-500/10 transition-colors duration-500"></div>

          <div class="relative mb-8 flex items-center justify-center w-16 h-16 rounded-2xl bg-black text-emerald-400 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg shadow-emerald-500/10">
            <component :is="ben.icon" class="w-8 h-8" stroke-width="2" />
          </div>

          <div class="relative z-10">
            <h3 class="text-xl font-bold text-black uppercase mb-4 tracking-tight group-hover:text-emerald-600 transition-colors italic">
              {{ ben.titulo }}
            </h3>
            <p class="text-gray-500 leading-relaxed font-medium">
              {{ ben.desc }}
            </p>
          </div>

          <div class="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-emerald-500 to-lime-400 group-hover:w-full transition-all duration-500"></div>
        </div>
      </div>

      <div class="mt-16 flex flex-col md:flex-row items-center justify-between p-8 md:p-12 bg-black rounded-[2.5rem] text-white relative overflow-hidden shadow-2xl">
        <div class="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 blur-[80px] -z-0"></div>

        <div class="relative z-10 text-center md:text-left">
          <p class="text-xl md:text-2xl font-bold mb-4 md:mb-0 uppercase italic tracking-wide">
            Pronto para <span class="text-emerald-400 font-black">pegar a estrada?</span>
          </p>
          <p class="text-gray-400 text-sm font-medium mt-1">Reserve seu veículo em menos de 60 segundos.</p>
        </div>

        <button class="relative z-10 w-full md:w-auto mt-6 md:mt-0 bg-emerald-500 hover:bg-white text-black px-10 py-4 rounded-2xl font-black transition-all duration-500 transform hover:scale-105 uppercase text-xs tracking-[0.2em] shadow-xl shadow-emerald-500/40">
          Alugar agora
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import {
  Zap,
  PlaneTakeoff,
  Infinity,
  Headphones,
  CalendarClock,
  ShieldCheck
} from 'lucide-vue-next'

// Importação da imagem de fundo
import bgCta from '../../assets/images/bg-cta.png'

const beneficios = [
  {
    icon: Zap,
    titulo: 'Sem Burocracia',
    desc: 'Processo 100% digital. Nada de papelada ou espera infinita. Reserve em menos de 2 minutos.'
  },
  {
    icon: PlaneTakeoff,
    titulo: 'No Aeroporto',
    desc: 'Seu tempo é precioso. Entregamos o carro no desembarque para você sair dirigindo imediatamente.'
  },
  {
    icon: Infinity,
    titulo: 'Km Livre',
    desc: 'Não conte os quilômetros, conte as memórias. Viaje sem limites e sem taxas surpresas.'
  },
  {
    icon: Headphones,
    titulo: 'Suporte 24h',
    desc: 'Nossa central de emergência está pronta para te atender em qualquer lugar, a qualquer hora.'
  },
  {
    icon: CalendarClock,
    titulo: 'Mensalistas',
    desc: 'Tarifas especiais e suporte premium para quem precisa de um carro por 30 dias ou mais.'
  },
  {
    icon: ShieldCheck,
    titulo: 'Seguro Total',
    desc: 'Proteção completa contra colisões, roubos e danos a terceiros. Sua paz de espírito é nossa prioridade.'
  }
]
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap');

section {
  font-family: 'Inter', sans-serif;
}
</style>
