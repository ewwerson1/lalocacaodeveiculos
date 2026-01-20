<template>
  <section class="py-32 bg-white relative overflow-hidden">
    <div class="absolute inset-0 opacity-[0.4] pointer-events-none"
         style="background-image: radial-gradient(#e2e8f0 1px, transparent 1px); background-size: 30px 30px;"></div>

    <div class="container mx-auto px-6 relative z-10">

      <div class="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
        <div class="max-w-2xl">
          <div class="flex items-center gap-3 mb-4">
            <span class="w-10 h-[2px] bg-green-600"></span>
            <span class="text-[11px] font-black uppercase tracking-[0.4em] text-slate-400">Excelência Operacional</span>
          </div>
          <h2 class="text-5xl md:text-7xl font-black text-slate-900 uppercase italic leading-none tracking-tighter">
            GESTÃO <span class="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-green-500">360º.</span>
          </h2>
        </div>
        <div class="text-left md:text-right">
          <p class="text-slate-400 font-bold uppercase text-[10px] tracking-[0.2em] leading-relaxed">
            Sua única tarefa é <br> <span class="text-slate-900">conferir o faturamento mensal.</span>
          </p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="(item, i) in etapas" :key="i"
             class="group relative bg-slate-50 border border-slate-100 rounded-[2.5rem] p-10 transition-all duration-500 hover:bg-white hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-2">

          <span class="absolute top-6 right-8 text-7xl font-black text-slate-200/50 group-hover:text-green-500/10 transition-colors duration-500">
            0{{ i + 1 }}
          </span>

          <div class="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-slate-100 mb-10 group-hover:scale-110 group-hover:bg-green-700 group-hover:text-white transition-all duration-500 text-green-700">
            <component :is="item.icon" class="w-7 h-7" />
          </div>

          <div class="relative z-10">
            <h3 class="text-xl font-black text-slate-900 uppercase italic mb-4 group-hover:text-green-700 transition-colors">
              {{ item.titulo }}
            </h3>
            <p class="text-slate-500 text-sm leading-relaxed font-medium">
              {{ item.desc }}
            </p>
          </div>

          <div class="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-green-600 group-hover:h-1/2 transition-all duration-500 rounded-r-full"></div>
        </div>
      </div>

      <div class="mt-20 pt-10 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">

        <button class="text-[10px] font-black uppercase tracking-widest px-8 py-4 bg-slate-900 text-white rounded-full hover:bg-green-700 transition-all">
          Ver detalhes do contrato
        </button>
      </div>

    </div>
  </section>
</template>

<script setup>
// Ícones (Certifique-se de ter lucide-vue-next instalado ou use SVGs)
import { UserCheck, ShieldAlert, Wrench, BarChart3 } from 'lucide-vue-next'

const etapas = [
  {
    titulo: 'Filtro Rigoroso',
    desc: 'Análise de histórico criminal, social e técnico para garantir o melhor condutor no seu bem.',
    icon: UserCheck
  },
  {
    titulo: 'Gestão de Multas',
    desc: 'Sistema de identificação e repasse imediato. Proteção total para sua CNH e transparência.',
    icon: ShieldAlert
  },
  {
    titulo: 'Manutenção',
    desc: 'Logística programada em oficinas credenciadas para preservar o valor de revenda do veículo.',
    icon: Wrench
  },
  {
    titulo: 'Auditoria Mensal',
    desc: 'Fechamento financeiro detalhado com repasse pontual até o 5º dia útil de cada mês.',
    icon: BarChart3
  }
]
</script>
