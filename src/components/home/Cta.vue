<template>
  <section
    class="relative py-24 bg-black overflow-hidden flex items-center justify-center font-sans"
    :style="`background-image: linear-gradient(to bottom, rgba(0,0,0,0.94), rgba(0,0,0,0.98)), url(${bgImg}); background-attachment: fixed; background-size: cover;`"
  >
    <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-40"></div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="max-w-6xl mx-auto bg-white/[0.01] backdrop-blur-3xl border border-white/5 p-8 md:p-20 rounded-[4rem] shadow-3xl">

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div class="text-left">
            <span class="inline-block bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-6">
              Programa de Gestão de Ativos
            </span>
            <h2 class="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter leading-[0.9] mb-8">
              Rentabilize seu <br>
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-300">Patrimônio hoje</span>
            </h2>
            <p class="text-gray-400 text-lg font-medium leading-relaxed mb-8">
              Transforme seu veículo parado ou seu capital em uma <span class="text-white">máquina de renda recorrente</span>. A LA Veículos faz a gestão completa com segurança jurídica e transparência total em Sergipe.
            </p>

            <div class="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
              <div class="group">
                <p class="text-emerald-400 font-black text-3xl tracking-tighter group-hover:scale-105 transition-transform">100%</p>
                <p class="text-gray-500 text-[10px] font-black uppercase tracking-widest mt-1">Gestão LA Especializada</p>
              </div>
              <div class="group">
                <p class="text-white font-black text-3xl tracking-tighter group-hover:scale-105 transition-transform italic">Renda</p>
                <p class="text-gray-500 text-[10px] font-black uppercase tracking-widest mt-1">Recorrente Mensal</p>
              </div>
            </div>
          </div>

          <div class="bg-white/[0.02] p-8 md:p-12 rounded-[3rem] border border-white/10 shadow-inner relative overflow-hidden">
            <div class="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-3xl"></div>

            <h3 class="text-white font-black uppercase text-xs mb-8 tracking-[0.2em] text-center">Falar com Consultor de Investimentos</h3>

            <form @submit.prevent class="space-y-4">
              <div class="space-y-4 italic">
                <input
                  type="text"
                  placeholder="NOME COMPLETO"
                  class="w-full bg-black/60 border border-white/5 px-6 py-5 rounded-2xl text-white placeholder:text-zinc-700 focus:outline-none focus:border-emerald-500/50 transition-all font-bold text-[10px] tracking-[0.2em]"
                />

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="WHATSAPP"
                    class="w-full bg-black/60 border border-white/5 px-6 py-5 rounded-2xl text-white placeholder:text-zinc-700 focus:outline-none focus:border-emerald-500/50 transition-all font-bold text-[10px] tracking-[0.2em]"
                  />
                  <select class="w-full bg-black/60 border border-white/5 px-6 py-5 rounded-2xl text-emerald-500 font-black text-[10px] tracking-[0.2em] focus:outline-none focus:border-emerald-500/50 appearance-none cursor-pointer uppercase">
                    <option selected disabled>MODELO DE ATIVO</option>
                    <option>Possuo veículo para locação</option>

                  </select>
                </div>

                <select class="w-full bg-black/60 border border-white/5 px-6 py-5 rounded-2xl text-zinc-400 font-black text-[10px] tracking-[0.2em] focus:outline-none focus:border-emerald-500/50 appearance-none cursor-pointer uppercase">
                  <option selected disabled>EXPECTATIVA DE APORTE</option>
                  <option>Até R$ 60.000</option>
                  <option>R$ 60.000 a R$ 200.000</option>
                  <option>Acima de R$ 200.000</option>
                </select>
              </div>

              <button class="w-full bg-emerald-500 hover:bg-white text-black font-black py-6 rounded-2xl transition-all duration-500 uppercase text-[10px] tracking-[0.3em] shadow-xl shadow-emerald-500/20 group flex items-center justify-center gap-3 mt-6">
                QUERO RENTABILIZAR MEU VEÍCULO
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="group-hover:translate-x-2 transition-transform"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
              </button>
            </form>

            <p class="text-center text-[9px] text-zinc-600 uppercase font-black tracking-widest mt-6">
              Sua segurança e privacidade são prioridade LA.
            </p>
          </div>

        </div>

        <div class="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </div>
            <div>
              <p class="text-gray-500 text-[10px] font-black uppercase tracking-widest">Atendimento Direct</p>
              <span class="text-white text-xs font-black uppercase tracking-widest">(79) 99999-9999</span>
            </div>
          </div>

          <div class="flex items-center gap-6">
            <a v-for="(social, name) in redesSociais" :key="name" href="#"
               class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-emerald-400 hover:bg-white/10 transition-all transform hover:-translate-y-1 duration-300 border border-white/5"
               v-html="social">
            </a>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import bgImg from '@/assets/images/bg-cta.png'

const redesSociais = {
  instagram: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>',
  linkedin: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>',
}
</script>

<style scoped>
.shadow-3xl {
  box-shadow: 0 50px 100px -20px rgba(0, 0, 0, 0.8), 0 30px 60px -30px rgba(16, 185, 129, 0.1);
}
input, select {
  transition: all 0.3s ease;
}
</style>
