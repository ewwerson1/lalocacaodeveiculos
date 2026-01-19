<template>
  <section
    class="relative py-24 bg-[#fafafa] overflow-hidden bg-cover bg-center bg-no-repeat"
    :style="{ backgroundImage: `url(${bgCta})` }"
  >
    <div class="absolute inset-0 bg-white/95 z-0"></div>

    <div class="container mx-auto px-4 relative z-10">

      <div class="max-w-3xl mb-16">
        <div class="flex items-center gap-2 mb-4">
          <span class="w-12 h-[2px] bg-emerald-500"></span>
          <span class="text-sm font-black uppercase tracking-[0.2em] text-gray-400">Vantagens de ser Parceiro</span>
        </div>
        <h2 class="text-4xl md:text-5xl font-black text-black leading-tight uppercase italic">
          Por que rodar com a <br>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-amber-300">L.A Veículos?</span>
        </h2>
        <p class="mt-4 text-gray-500 font-medium">Oferecemos a estrutura completa para você focar no que importa: seu lucro.</p>
      </div>

      <div class="grid pb-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(ben, index) in diferenciaisMotorista"
          :key="index"
          class="group relative p-10 bg-white border border-gray-100 rounded-[2.5rem] transition-all duration-500 hover:shadow-[0_30px_60px_rgba(16,185,129,0.08)] hover:-translate-y-2 overflow-hidden"
        >
          <div class="absolute -right-8 -top-8 w-32 h-32 bg-emerald-500/5 rounded-full group-hover:bg-emerald-500/10 transition-colors duration-500"></div>

          <div class="relative mb-8 flex items-center justify-center w-14 h-14 rounded-2xl bg-zinc-950 text-emerald-400 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
            <component :is="ben.icon" class="w-7 h-7" stroke-width="2.5" />
          </div>

          <div class="relative z-10">
            <h3 class="text-lg font-black text-black uppercase mb-3 tracking-tight italic">
              {{ ben.titulo }}
            </h3>
            <p class="text-gray-500 leading-relaxed font-medium text-sm">
              {{ ben.desc }}
            </p>
          </div>

          <div class="absolute bottom-0 left-0 h-1.5 w-0 bg-gradient-to-r from-emerald-500 to-lime-400 group-hover:w-full transition-all duration-500"></div>
        </div>
      </div>

      <div class="relative overflow-hidden bg-zinc-950 p-6 md:p-10 rounded-3xl border border-zinc-800">

    <img src="../../assets/images/ticket.png"
         class="absolute inset-0 w-full h-full object-cover  pointer-events-none"
         alt="Background Ticket">

    <div class="absolute top-0 right-0 w-80 h-80 bg-emerald-500/15 blur-[100px]"></div>

    <div class="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">

        <div class="text-center md:text-left">
            <h4 class="text-2xl md:text-3xl font-bold mb-2 uppercase italic tracking-tight text-white">
                Pronto para <span class="text-emerald-400 font-black">faturar mais?</span>
            </h4>

            <p class="text-zinc-500 text-xs font-black uppercase tracking-[0.3em] mb-6">
                O melhor suporte de Sergipe para motoristas APP
            </p>

            <div class="mt-4 p-3 border-l-4 border-emerald-400 bg-zinc-900/80 backdrop-blur-sm">
                <p class="text-white text-sm font-bold uppercase">
                    Reserve sua prioridade por <span class="text-emerald-400">R$ 250</span>
                </p>
                <p class="text-zinc-400 text-xs mt-1">
                    O valor é abatido no aluguel: na retirada, você só paga o restante.
                </p>
            </div>
        </div>

        <button class="w-full md:w-auto bg-emerald-500 hover:bg-white text-black px-12 py-5 rounded-2xl font-black transition-all duration-500 transform hover:scale-105 uppercase text-[11px] tracking-[0.2em] shadow-xl shadow-emerald-500/20">
            Reservar Veículo Agora
        </button>

    </div>
</div>
    </div>
  </section>
</template>

<script setup>
import {
  Infinity,
  ShieldCheck,
  Wrench,
  Map,
  Clock,
  Zap
} from 'lucide-vue-next'

import bgCta from '../../assets/images/bg-cta.png'

const diferenciaisMotorista = [
  {
    icon: Infinity,
    titulo: 'KM Livre Real',
    desc: 'Rode o quanto precisar sem se preocupar com taxas extras no final da semana. Sua liberdade financeira não tem limites.'
  },
  {
    icon: ShieldCheck,
    titulo: 'Proteção Inclusa',
    desc: 'Seguro completo para o veículo e terceiros. Você trabalha protegido contra imprevistos com a solidez da L.A.'
  },
  {
    icon: Wrench,
    titulo: 'Manutenção em Dias',
    desc: 'Preventivas e corretivas por nossa conta. Carro parado é prejuízo, por isso garantimos sua máquina sempre em dia.'
  },
  {
    icon: Map,
    titulo: 'Liberdade em Sergipe',
    desc: 'Autorização total para rodar em todo o estado. De Aracaju ao interior, você define seu melhor trajeto.'
  },
  {
    icon: Clock,
    titulo: 'Vistorias Agendadas',
    desc: 'Checkups semanais rápidos para garantir sua segurança. Qualidade de frota que reflete na sua nota nos apps.'
  },
  {
    icon: Zap,
    titulo: 'Aprovação Ágil',
    desc: 'Sem burocracia desnecessária. Análise focada na sua vontade de trabalhar e na documentação digital.'
  }
]
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap');
section {
  font-family: 'Inter', sans-serif;
}
</style>
