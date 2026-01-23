<template>
  <section id="contato-investidor" class="py-32 bg-gray-50 relative overflow-hidden">
    <div class="absolute inset-0 opacity-[0.05] pointer-events-none"
         style="background-image: radial-gradient(#000 1px, transparent 1px); background-size: 30px 30px;"></div>

    <div class="container mx-auto px-6 relative z-10">
      <div class="max-w-6xl mx-auto">

        <div class="relative bg-zinc-950 rounded-[3rem] md:rounded-[5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,36,20,0.4)] flex flex-col lg:flex-row items-stretch border border-white/5">

          <div class="p-10 md:p-20 lg:w-2/3 relative z-10">
            <div class="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full mb-8">
              <span class="w-2 h-2 bg-green-500 rounded-full animate-ping"></span>
              <span class="text-[10px] font-black  tracking-[0.3em] text-green-400">Oportunidade de Mercado</span>
            </div>

            <h2 class="text-5xl md:text-7xl text-transparent bg-clip-text  bg-gradient-to-r from-green-400 via-green-300 to-amber-500 font-black italic leading-[0.85] tracking-tighter mb-8">
              Fale com nossa equipe e se torne um <br>
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-yellow-400 to-amber-500">
                investidor L.A.
              </span>
            </h2>

            <p class="text-zinc-400 text-lg md:text-xl font-medium max-w-xl mb-12 leading-relaxed italic">
              O próximo passo para a sua <span class="text-white">liberdade financeira</span> começa com uma conversa. Estamos prontos para gerir seu patrimônio com excelência.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-white/10">
              <div v-for="g in garantias" :key="g" class="flex items-center gap-3 group/item">
                <div class="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center border border-green-500/20 group-hover/item:bg-green-500 transition-colors">
                  <Check class="w-3 h-3 text-green-500 group-hover/item:text-white" />
                </div>
                <span class="text-[10px] font-black  tracking-widest text-zinc-300 group-hover/item:text-white transition-colors">{{ g }}</span>
              </div>
            </div>
          </div>

          <a href="https://wa.me/5579999094631?text=Olá!%20Gostaria%20de%20me%20tornar%20um%20investidor%20L.A%20e%20falar%20com%20a%20equipe."
             target="_blank"
             class="lg:w-1/3 bg-green-600 flex flex-col items-center justify-center p-12 relative overflow-hidden group transition-all duration-500 hover:bg-green-500">

            <div class="absolute inset-0 bg-zinc-900 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out"></div>

            <div class="relative z-10 text-center">
              <div class="mb-8 flex justify-center">
                <div class="w-24 h-24 rounded-3xl bg-zinc-900 flex items-center justify-center group-hover:bg-green-500 transition-all duration-500 shadow-2xl group-hover:rotate-12">
                  <MessageCircle class="w-12 h-12 text-green-500 group-hover:text-white transition-colors" />
                </div>
              </div>

              <span class="block text-[11px] font-black  tracking-[0.5em] text-zinc-900 group-hover:text-green-400 mb-4 transition-colors">Iniciar Conversa</span>
              <span class="text-3xl md:text-4xl font-black  italic leading-none text-zinc-900 group-hover:text-white transition-colors">
                Quero ser <br> Investidor
              </span>

              <div class="mt-10 flex items-center justify-center gap-2 text-zinc-800 group-hover:text-zinc-400 transition-colors">
                <span class="text-[9px] font-black  tracking-widest">Atendimento Humano</span>
                <ArrowRight class="w-4 h-4" />
              </div>
            </div>

            <ArrowRight class="absolute bottom-10 right-10 w-20 h-20 text-black/10 group-hover:text-green-500/10 -rotate-45 transition-all group-hover:translate-x-4 group-hover:-translate-y-4" />
          </a>

        </div>

        <div class="mt-16 flex flex-col md:flex-row items-center justify-between px-10 gap-8">
          <div class="flex flex-wrap justify-center md:justify-start items-center gap-8">
            <div>
              <span class="block text-[10px] font-black text-zinc-400 tracking-widest mb-1">Sede Administrativa</span>
              <p class="text-sm font-bold text-slate-900 italic">Aracaju, Sergipe</p>
            </div>
            <div class="h-8 w-[1px] bg-slate-200 hidden md:block"></div>
            <div>
              <span class="block text-[10px] font-black text-zinc-400 tracking-widest mb-1">Horário de Atendimento</span>
            <p class="text-sm font-bold text-slate-900 italic">Segunda a Sexta, 08h às 17:30h / Sábado das 08h às 12h</p>
            </div>
          </div>

          <div class="text-center md:text-right">
            <p class="text-[10px] font-black text-green-800 tracking-[0.4em]">LA Administração e Locação © 2023</p>
            <p class="text-[9px] text-zinc-400 mt-1  tracking-widest font-bold">Gestão Profissional de Ativos</p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { Check, MessageCircle, ArrowRight } from 'lucide-vue-next'

const garantias = [
  "Suporte Operacional",
  "Gestão de Contratos",
  "Máximo Retorno"
]
</script>

<style scoped>
/* Tipografia ultra-focada */
h2 {
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
}
</style>
