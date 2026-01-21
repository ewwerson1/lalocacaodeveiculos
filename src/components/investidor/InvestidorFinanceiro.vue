<template>
  <section class="py-32 bg-slate-100 relative overflow-hidden">
    <div class="absolute top-0 right-0 w-1/2 h-full bg-white -z-0 rounded-l-[5rem] border-l border-slate-100"></div>

    <div class="container mx-auto px-6 relative z-10">
      <div class="flex flex-col lg:flex-row gap-16 items-center">

        <div class="lg:w-1/2">
          <div class="flex items-center gap-3 mb-6">
            <span class="text-[11px] font-black uppercase tracking-[0.4em] text-green-700">Inteligência Financeira</span>
            <div class="h-[1px] flex-1 bg-slate-200"></div>
          </div>

          <h2 class="text-5xl md:text-6xl font-black text-slate-900  italic leading-none mb-10">
            Modelo de <br>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-yellow-500">repasse.</span>
          </h2>

          <div class="grid gap-4">
            <div v-for="(info, i) in financeiro" :key="i"
                 class="group bg-white p-6 rounded-3xl border border-slate-100 hover:border-green-500/30 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 flex items-center gap-6">

              <div class="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-900 group-hover:bg-green-700 group-hover:text-white transition-all duration-500 shadow-inner">
                 <component :is="info.icon" class="w-6 h-6" />
              </div>

              <div class="flex-1">
                <h4 class="text-xs font-black uppercase tracking-widest text-slate-400 group-hover:text-green-700 transition-colors mb-1">
                  {{ info.t }}
                </h4>
                <p class="text-slate-900 font-bold text-lg leading-tight">{{ info.d }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="lg:w-1/2 relative">
          <div class="relative z-10 bg-zinc-900 rounded-[4rem] p-12 text-white shadow-[0_50px_100px_-20px_rgba(0,0,0,0.4)] overflow-hidden">

            <div class="absolute -top-10 -right-10 w-40 h-40 bg-green-500/10 blur-[80px] rounded-full"></div>

            <div class="flex justify-between items-start mb-12">
              <div>
                <h3 class="text-2xl font-black uppercase italic mb-2 leading-none text-green-500">Planilha do <br> Investidor</h3>
                <span class="text-[9px] font-black uppercase tracking-[0.3em] text-slate-500 italic">Transparência em Tempo Real</span>
              </div>
              <div class="bg-white/5 p-4 rounded-2xl border border-white/10">
                <BarChart3 class="w-6 h-6 text-amber-500" />
              </div>
            </div>

            <div class="space-y-8">
              <p class="text-slate-300 font-medium leading-relaxed italic">
                "Você terá acesso a um dashboard exclusivo para acompanhar o faturamento semanal e o histórico detalhado de manutenções do seu ativo."
              </p>

              <div class="bg-gradient-to-r from-white/5 to-transparent p-6 rounded-[2rem] border-l-4 border-amber-500">
                <div class="flex items-center gap-4">
                  <div class="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center">
                    <ShieldCheck class="w-5 h-5 text-amber-500" />
                  </div>
                  <div>
                    <p class="text-[10px] font-black uppercase tracking-widest text-amber-500">Garantia Patrimonial</p>
                    <p class="text-sm font-bold text-white italic">O veículo permanece no seu nome.</p>
                  </div>
                </div>
              </div>

              <button class="w-full py-5 bg-green-600 hover:bg-green-500 text-slate-900 font-black uppercase text-xs tracking-widest rounded-2xl transition-all shadow-lg shadow-green-600/20">
                Ver Exemplo de Relatório
              </button>
            </div>
          </div>

          <div class="absolute -bottom-6 -right-6 w-32 h-32 bg-amber-500/20 blur-[60px] rounded-full"></div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { Wallet, CalendarCheck, Settings2, BarChart3, ShieldCheck } from 'lucide-vue-next'

const financeiro = [
  {
    t: 'Taxa de Adm: 20%',
    d: 'Gestão operacional, suporte e jurídico inclusos.',
    icon: Wallet
  },
  {
    t: 'Ciclo de Repasse',
    d: 'Faturamento creditado até o 5º dia útil.',
    icon: CalendarCheck
  },
  {
    t: 'Manutenção',
    d: 'Logística e auditoria de serviços mecânicos.',
    icon: Settings2
  }
]
</script>
