<template>
  <section id="quem-somos" class="py-24 bg-white relative overflow-hidden">
    <div class="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -z-0 rounded-l-[5rem] hidden lg:block"></div>
    <div class="absolute inset-0 opacity-[0.03] pointer-events-none"
         style="background-image: radial-gradient(#000 1px, transparent 1px); background-size: 40px 40px;"></div>

    <div class="container mx-auto px-6 relative z-10">
      <div class="flex flex-col lg:flex-row gap-20 items-center">

        <div class="lg:w-5/12">
          <div class="flex items-center gap-3 mb-8">
            <span class="text-[11px] font-black uppercase tracking-[0.4em] text-emerald-700">Fundação e Propósito</span>
            <div class="h-[1px] w-12 bg-emerald-700/30"></div>
          </div>

          <h2 class="text-5xl md:text-7xl font-black text-slate-900 italic tracking-tighter leading-[0.9] mb-10">
            Quem está por <br>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-emerald-500 to-amber-500">
              trás da L.A.
            </span>
          </h2>

          <div class="space-y-6 text-slate-600 text-lg font-medium leading-relaxed max-w-xl italic mb-12">
            <p>
              A L.A Administração e Locação de Veículos une a experiência em segurança pública com o rigor do conhecimento jurídico.
            </p>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div v-for="(item, idx) in objetivos" :key="idx"
                 class="group flex items-center gap-3 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm
                         hover:-translate-y-1 hover:shadow-none hover:border-none transition-all duration-300 cursor-default">
              <div class="w-2 h-2 bg-emerald-500 rounded-full group-hover:scale-150 group-hover:bg-amber-500 transition-all duration-500 shadow-[0_0_10px_rgba(16,185,129,0.4)]"></div>
              <span class="text-[11px] font-black text-slate-700 uppercase tracking-tight group-hover:text-amber-500 transition-colors">{{ item }}</span>
            </div>
          </div>
        </div>

        <div class="lg:w-7/12 w-full">
          <div class="relative group">
            <div class="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-amber-500/10 rounded-[3.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

            <div class="relative rounded-[3.5rem] p-4 overflow-hidden">
              <div class="relative h-[520px] w-full rounded-[2.8rem] overflow-hidden bg-slate-100 shadow-2xl border border-white">
                <img src="../../assets/images/bg-donos.jpeg" alt="Sócios L.A Administração"
                     class="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105" />

                <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/20"></div>

                <div class="absolute bottom-10 left-10 right-10">
                   <p class="text-white text-2xl md:text-3xl font-black italic tracking-tight leading-tight drop-shadow-2xl">
                     "Base sólida e profissional para garantir o melhor retorno possível com total tranquilidade."
                   </p>
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-8 py-10 px-4">
                <div class="flex flex-col md:flex-row items-center md:items-start gap-6 group/item">
                  <div class="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center border border-emerald-100
                              group-hover/item:bg-emerald-600 group-hover/item:text-white transition-all duration-500 shadow-sm">
                    <Shield class="w-8 h-8 text-emerald-600 group-hover/item:text-white" />
                  </div>
                  <div class="text-center md:text-left">
                    <h3 class="text-4xl md:text-5xl font-black text-slate-900 italic leading-none tracking-tighter group-hover/item:text-emerald-700 transition-colors">
                      Elan Arimateia
                    </h3>
                    <p class="text-emerald-600 font-black text-[10px] uppercase mt-3 tracking-[0.2em]">Segurança Pública • Sócio</p>
                  </div>
                </div>

                <div class="flex flex-col md:flex-row items-center md:items-start gap-6 group/item">
                  <div class="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center border border-amber-100
                              group-hover/item:bg-amber-500 group-hover/item:text-white transition-all duration-500 shadow-sm">
                    <Gavel class="w-8 h-8 text-amber-600 group-hover/item:text-white" />
                  </div>
                  <div class="text-center md:text-left">
                    <h3 class="text-4xl md:text-5xl font-black text-slate-900 italic leading-none tracking-tighter group-hover/item:text-amber-600 transition-colors">
                      Marcel Lima
                    </h3>
                    <p class="text-amber-600 font-black text-[10px] uppercase mt-3 tracking-[0.2em]">Jurídico • Sócio Fundador</p>
                  </div>
                </div>
              </div>

            </div>
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
.text-transparent {
  -webkit-background-clip: text;
  background-clip: text;
}
/* Suavização de renderização de fontes pesadas */
h2, h3 {
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
}
</style>
