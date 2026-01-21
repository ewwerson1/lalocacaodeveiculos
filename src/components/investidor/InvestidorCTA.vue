<template>
  <section id="contato-investidor" class="py-32 bg-gray-50 relative overflow-hidden">
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-[0.03] pointer-events-none">
      <svg class="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="black" stroke-width="0.1"/>
          </pattern>
        </defs>
        <rect width="100" height="100" fill="url(#grid)" />
      </svg>
    </div>
    <a href="https://wa.me/5579999094631?text=Olá!%20Vi%20o%20Portal%20do%20Investidor%20e%20gostaria%20de%20realizar%20uma%20simulação%20de%20rentabilidade%20para%20o%20meu%20veículo." target="_blank">
      <div class="container mx-auto px-6 relative z-10">
        <div class="max-w-6xl mx-auto">

          <div class="relative bg-zinc-900 rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] flex flex-col lg:flex-row items-stretch">

            <div class="p-12 md:p-20 lg:w-2/3 relative z-10">
              <div class="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full mb-8">
                <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span class="text-[10px] font-black uppercase tracking-[0.3em] text-green-500">Expansão de Frota 2026</span>
              </div>

              <h2 class="text-5xl md:text-7xl font-black text-white italic leading-[0.85] tracking-tighter mb-8">
                SEU PATRIMÔNIO <br>
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-amber-500">GERANDO VALOR.</span>
              </h2>

              <p class="text-zinc-400 text-lg md:text-xl font-medium max-w-xl mb-12 leading-relaxed">
                Não deixe seu ativo depreciar parado. Fale com nossos especialistas e descubra como o modelo <span class="text-white italic">L.A Asset Management</span> entrega rentabilidade e segurança real.
              </p>

              <div class="grid grid-cols-2 md:grid-cols-3 gap-6 pt-10 border-t border-white/5">
                <div v-for="g in garantias" :key="g" class="flex items-center gap-3">
                  <div class="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                    <Check class="w-3 h-3 text-green-500" />
                  </div>
                  <span class="text-[10px] font-black uppercase tracking-widest text-slate-300">{{ g }}</span>
                </div>
              </div>
            </div>

            <div class="lg:w-1/3 bg-green-600 flex flex-col items-center justify-center p-12 relative overflow-hidden group">
              <div class="absolute inset-0 bg-zinc-950 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out"></div>

              <div class="relative z-10 text-center">
                <div class="mb-8 flex justify-center">
                  <div class="w-20 h-20 rounded-full bg-zinc-900 flex items-center justify-center group-hover:bg-green-600 transition-colors duration-500 shadow-2xl">
                    <component :is="MessageCircle" class="w-10 h-10 text-green-500 group-hover:text-zinc-900 transition-colors" />
                  </div>
                </div>

                <a href="https://wa.me/5579999999999?text=Quero+uma+simulação+de+investimento"
                   target="_blank"
                   class="block">
                  <span class="block text-[11px] font-black uppercase tracking-[0.4em] text-zinc-900 group-hover:text-green-500 mb-2 transition-colors">Solicitar</span>
                  <span class="text-3xl font-black uppercase italic leading-none text-zinc-900 group-hover:text-white transition-colors">Simulação <br> de Ganhos</span>
                </a>

                <p class="mt-8 text-[9px] font-black uppercase tracking-widest text-zinc-800 group-hover:text-slate-400 transition-colors">
                  Resposta imediata via WhatsApp
                </p>
              </div>

              <ArrowRight class="absolute bottom-10 right-10 w-12 h-12 text-zinc-900/20 group-hover:text-green-500/20 -rotate-45 transition-all group-hover:rotate-0" />
            </div>

          </div>

          <div class="mt-12 flex flex-col md:flex-row items-center justify-between px-10 gap-6">
            <div class="flex items-center gap-6">
              <div class="text-center md:text-left">
                <span class="block text-[10px] font-black text-zinc-400 uppercase tracking-widest">Sede Administrativa</span>
                <p class="text-sm font-bold text-slate-900">Aracaju, Sergipe</p>
              </div>
              <div class="h-8 w-[1px] bg-slate-200 hidden md:block"></div>
              <div class="text-center md:text-left">
                <span class="block text-[10px] font-black text-zinc-400 uppercase tracking-widest">Contatos Oficiais</span>
                <p class="text-sm font-bold text-slate-900"></p>
              </div>
            </div>
            <p class="text-[9px] font-black text-zinc-300 uppercase tracking-[0.3em]">LA Administração e Locação © 2026</p>
          </div>

        </div>
    </div>
  </a>
  </section>
</template>

<script setup>
import { Check, MessageCircle, ArrowRight } from 'lucide-vue-next'

const garantias = [
  "Gestão Jurídica",
  "Risco Calculado",
  "Liquidez do Ativo"
]
</script>

<style scoped>
/* Transição suave para o efeito de preenchimento do botão lateral */
.group:hover {
  cursor: pointer;
}
</style>
