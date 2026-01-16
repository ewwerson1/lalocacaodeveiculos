<template>
  <section
    class="relative py-24 bg-black overflow-hidden flex items-center justify-center"
    :style="`background-image: linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.95)), url(${bgImg}); background-attachment: fixed; background-size: cover;`"
  >
    <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-50"></div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="max-w-4xl mx-auto bg-white/[0.03] backdrop-blur-xl border border-white/10 p-8 md:p-16 rounded-[3rem] shadow-2xl">

        <div class="text-center mb-12">
          <span class="text-yellow-400 font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Club VIP LA Veículos</span>
          <h2 class="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter leading-none">
            Receba Ofertas <br>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Antes de Todo Mundo</span>
          </h2>
          <p class="text-gray-400 mt-6 font-medium max-w-lg mx-auto">
            Cadastre-se para receber cupons exclusivos e as novas máquinas da nossa frota direto no seu e-mail.
          </p>
        </div>

        <form @submit.prevent class="space-y-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="relative group">
              <input
                type="text"
                placeholder="NOME COMPLETO"
                class="w-full bg-white/5 border border-white/10 px-6 py-4 rounded-2xl text-white placeholder:text-gray-600 focus:outline-none focus:border-yellow-400/50 focus:bg-white/10 transition-all font-bold text-xs tracking-widest"
              />
            </div>

            <div class="flex gap-2">
              <select class="bg-white/5 border border-white/10 px-4 py-4 rounded-2xl text-yellow-400 font-black text-xs focus:outline-none focus:border-yellow-400/50 appearance-none cursor-pointer">
                <option>+55</option>
                <option>+351</option>
                <option>+1</option>
              </select>
              <input
                type="text"
                placeholder="WHATSAPP"
                class="flex-1 bg-white/5 border border-white/10 px-6 py-4 rounded-2xl text-white placeholder:text-gray-600 focus:outline-none focus:border-yellow-400/50 focus:bg-white/10 transition-all font-bold text-xs tracking-widest"
              />
            </div>
          </div>

          <input
            type="email"
            placeholder="SEU MELHOR E-MAIL"
            class="w-full bg-white/5 border border-white/10 px-6 py-4 rounded-2xl text-white placeholder:text-gray-600 focus:outline-none focus:border-yellow-400/50 focus:bg-white/10 transition-all font-bold text-xs tracking-widest"
          />

          <button class="w-full bg-yellow-400 hover:bg-white text-black font-black py-5 rounded-2xl transition-all duration-500 uppercase text-xs tracking-[0.3em] shadow-[0_20px_40px_rgba(250,204,21,0.2)] hover:shadow-white/10 transform hover:-translate-y-1">
            QUERO ME CADASTRAR AGORA
          </button>
        </form>

        <div class="mt-12 pt-10 border-t border-white/5">
          <p class="text-center text-[9px] font-black text-gray-500 uppercase tracking-[0.4em] mb-8">Siga a nossa jornada</p>
          <div class="flex justify-center items-center gap-8">
            <a v-for="(social, name) in redesSociais" :key="name" href="#"
               class="text-gray-400 hover:text-yellow-400 transition-all transform hover:scale-125 duration-300"
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
  instagram: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>',
  youtube: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 20.2 0 2 2 0 0 1 1.4 1.4 24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-20.2 0A2 2 0 0 1 2.5 17Z"/><path d="m10 15 5-3-5-3z"/></svg>',
  facebook: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>',
  linkedin: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>'
}
</script>
