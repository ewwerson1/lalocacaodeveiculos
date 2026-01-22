<template>
  <section id="quem-somos" class="py-32 bg-white relative overflow-hidden">
    <div class="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -z-0 rounded-l-[5rem] hidden lg:block"></div>
    <div class="absolute inset-0 opacity-[0.02] pointer-events-none"
         style="background-image: radial-gradient(#000 1px, transparent 1px); background-size: 40px 40px;"></div>

    <div class="container mx-auto px-6 relative z-10">
      <div class="flex flex-col lg:flex-row gap-20 items-start">

        <div class="lg:w-1/2">
          <div class="flex items-center gap-3 mb-8">
            <span class="text-[11px] font-black uppercase tracking-[0.4em] text-green-700">Fundação e Propósito</span>
            <div class="h-[1px] w-12 bg-green-700/30"></div>
          </div>

          <h2 class="text-5xl md:text-7xl font-black text-slate-900 italic tracking-tighter leading-[0.9] mb-10">
            Quem está por <br>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-700 via-green-600 to-amber-500">
              trás da L.A.
            </span>
          </h2>

          <div class="space-y-6 text-slate-600 text-lg font-medium leading-relaxed max-w-xl italic">
            <p>
              A L.A Administração e Locação de Veículos une a experiência em segurança pública com o rigor do conhecimento jurídico.
            </p>
            <p class="text-sm not-italic text-slate-500">
              Além dos sócios, contamos com uma equipe qualificada focada em gestão eficiente, controle de custos e redução de riscos, garantindo que seu patrimônio nunca pare de render.
            </p>
          </div>

          <div class="grid grid-cols-2 gap-4 mt-12">
            <div v-for="(item, idx) in objetivos" :key="idx"
                 class="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100 group hover:bg-white hover:shadow-lg transition-all">
              <div class="w-1.5 h-1.5 bg-green-600 rounded-full group-hover:scale-150 transition-transform"></div>
              <span class="text-[10px] font-black text-slate-800 uppercase tracking-tight">{{ item }}</span>
            </div>
          </div>
        </div>

        <div class="lg:w-1/2 space-y-8">

          <div class="relative group">
            <div class="absolute inset-0 bg-green-700 rounded-[2.5rem] translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300"></div>
            <div class="relative bg-zinc-950 p-8 rounded-[2.5rem] border-2 border-zinc-900 flex items-center gap-8">
              <div class="w-20 h-20 bg-green-700/10 rounded-3xl flex items-center justify-center border border-green-700/30 flex-shrink-0 group-hover:bg-green-700 transition-all duration-500">
                <Shield class="w-10 h-10 text-green-500 group-hover:text-white" />
              </div>
              <div>
                <span class="text-green-500 font-black uppercase text-[9px] tracking-[0.3em] mb-2 block">Sócio-Fundador</span>
                <h3 class="text-3xl font-black text-white italic leading-none">Elan</h3>
                <p class="text-slate-400 font-bold text-xs uppercase mt-2 tracking-widest">Experiência em Segurança • Policial</p>
              </div>
            </div>
          </div>

          <div class="relative group">
            <div class="absolute inset-0 bg-amber-500 rounded-[2.5rem] translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300"></div>
            <div class="relative bg-zinc-950 p-8 rounded-[2.5rem] border-2 border-zinc-900 flex items-center gap-8">
              <div class="w-20 h-20 bg-amber-500/10 rounded-3xl flex items-center justify-center border border-amber-500/30 flex-shrink-0 group-hover:bg-amber-600 transition-all duration-500">
                <Gavel class="w-10 h-10 text-amber-500 group-hover:text-white" />
              </div>
              <div>
                <span class="text-amber-500 font-black uppercase text-[9px] tracking-[0.3em] mb-2 block">Sócio-Fundador</span>
                <h3 class="text-3xl font-black text-white italic leading-none">Marcel</h3>
                <p class="text-slate-400 font-bold text-xs uppercase mt-2 tracking-widest">Conhecimento Jurídico • Advogado</p>
              </div>
            </div>
          </div>

          <div class="pt-6 pl-4 border-l-2 border-slate-200">
            <p class="text-slate-400 text-xs font-medium italic leading-relaxed">
              "Base sólida e profissional para garantir o melhor retorno possível com total tranquilidade."
            </p>
          </div>

        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { Shield, Gavel } from 'lucide-vue-next'

const objetivos = [
  'Veículos sempre rodando',
  'Redução de inatividade',
  'Cobranças em dia',
  'Proteção do patrimônio'
]
</script>

<style scoped>
/* Tipografia refinada para o gradiente */
.text-transparent {
  -webkit-background-clip: text;
  background-clip: text;
}
</style>
