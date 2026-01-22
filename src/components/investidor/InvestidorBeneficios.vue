<template>
  <section class="bg-black text-white py-24 px-6 relative overflow-hidden">
    <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] -z-10"></div>
    <div class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-yellow-600/5 rounded-full blur-[120px] -z-10"></div>

    <div class="container mx-auto max-w-[1480px]">
      <div class="mb-16 text-center md:text-left border-l-4 border-emerald-500 pl-6">
        <span class="text-yellow-600 uppercase text-xs tracking-[0.4em] font-black italic">Vantagens Exclusivas</span>
        <h2 class="text-4xl md:text-5xl font-bold mt-4 italic">Benefícios do <span class="text-gold-outline">Investidor</span></h2>
        <div class="h-1 w-20 bg-gradient-to-r from-emerald-500 to-yellow-600 mt-6 rounded-full mx-auto md:mx-0"></div>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        <div class="group p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-emerald-600/20 hover:border-emerald-400 transition-all duration-500 shadow-xl relative overflow-hidden">
          <div class="absolute top-0 left-0 w-1 h-0 group-hover:h-full bg-emerald-400 transition-all duration-500"></div>
          <div class="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-500 transition-all duration-300">
            <svg class="w-6 h-6 text-emerald-500 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
          </div>
          <h3 class="text-xl font-bold mb-3 group-hover:text-white">Comunicação Direta</h3>
          <p class="text-slate-400 text-sm leading-relaxed group-hover:text-emerald-50">Suporte humanizado e ágil com nossa equipe operacional para qualquer necessidade.</p>
        </div>

        <div class="group p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-emerald-600/20 hover:border-emerald-400 transition-all duration-500 relative overflow-hidden">
          <div class="absolute top-0 left-0 w-1 h-0 group-hover:h-full bg-emerald-400 transition-all duration-500"></div>
          <div class="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-500 transition-all duration-300">
            <svg class="w-6 h-6 text-emerald-500 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zM17 13v-2V7a2 2 0 00-2-2H9a2 2 0 00-2 2v10s.303 3 5 3 5-3 5-3v-4z"></path></svg>
          </div>
          <h3 class="text-xl font-bold mb-3 group-hover:text-white">Cobrança Pontual</h3>
          <p class="text-slate-400 text-sm leading-relaxed group-hover:text-emerald-50">Cobrança rigorosa dos aluguéis para garantir a rentabilidade do seu patrimônio no prazo.</p>
        </div>

        <div class="group p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-emerald-600/20 hover:border-emerald-400 transition-all duration-500 relative overflow-hidden">
          <div class="absolute top-0 left-0 w-1 h-0 group-hover:h-full bg-emerald-400 transition-all duration-500"></div>
          <div class="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-500 transition-all duration-300">
            <svg class="w-6 h-6 text-emerald-500 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
          </div>
          <h3 class="text-xl font-bold mb-3 group-hover:text-white">Gestão de Multas</h3>
          <p class="text-slate-400 text-sm leading-relaxed group-hover:text-emerald-50">Monitoramento completo, cobrança dos valores e indicação de condutores.</p>
        </div>

        <div class="group p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-emerald-600/20 hover:border-emerald-400 transition-all duration-500 relative overflow-hidden">
          <div class="absolute top-0 left-0 w-1 h-0 group-hover:h-full bg-emerald-400 transition-all duration-500"></div>
          <div class="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-500 transition-all duration-300">
            <svg class="w-6 h-6 text-emerald-500 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><circle cx="12" cy="12" r="3"></circle></svg>
          </div>
          <h3 class="text-xl font-bold mb-3 group-hover:text-white">Logística de Manutenção</h3>
          <p class="text-slate-400 text-sm leading-relaxed group-hover:text-emerald-50">Acompanhamento presencial em oficinas e controle de qualidade em cada revisão.</p>
        </div>

        <div class="group p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-emerald-600/20 hover:border-emerald-400 transition-all duration-500 relative overflow-hidden">
          <div class="absolute top-0 left-0 w-1 h-0 group-hover:h-full bg-emerald-400 transition-all duration-500"></div>
          <div class="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-500 transition-all duration-300">
            <svg class="w-6 h-6 text-emerald-500 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
          </div>
          <h3 class="text-xl font-bold mb-3 group-hover:text-white">Transparência Total</h3>
          <p class="text-slate-400 text-sm leading-relaxed group-hover:text-emerald-50">Relatórios claros e acesso direto às informações sobre seu investimento.</p>
        </div>

        <div class="group p-8 bg-gradient-to-br from-yellow-600 to-yellow-700 border border-yellow-500 rounded-3xl transition-all duration-500 transform hover:-translate-y-2 shadow-[0_0_30px_rgba(202,138,4,0.3)]">
          <div class="w-12 h-12 bg-black/20 rounded-2xl flex items-center justify-center mb-6">
            <svg class="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
          </div>
          <h3 class="text-xl font-bold mb-3 text-black">Padrão Nordeste</h3>
          <p class="text-black/80 text-sm leading-relaxed font-medium">Sua frota gerida pela empresa mais reconhecida e renomada do Nordeste, com o selo de excelência verde e ouro.</p>
        </div>

      </div>

      <div class="mt-24 relative">
        <div class="absolute inset-0 bg-emerald-500/10 blur-[60px] rounded-full h-20 w-full max-w-2xl mx-auto -z-10"></div>
        <p class="text-center flex flex-col md:flex-row items-center justify-center gap-4">
          <span class="hidden md:block w-12 h-[2px] bg-gradient-to-r from-transparent to-emerald-500"></span>
          <span class="text-2xl md:text-4xl font-black italic tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-white to-amber-500 drop-shadow-sm">
            Garantimos comodidade total no seu dia a dia
          </span>
          <span class="hidden md:block w-12 h-[2px] bg-gradient-to-l from-transparent to-amber-500"></span>
        </p>
        <div class="flex justify-center items-center gap-3 mt-4">
          <span class="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></span>
          <span class="text-[10px] text-emerald-500/60 font-black uppercase tracking-[0.5em]">Excelência L.A Administração</span>
          <span class="w-2 h-2 bg-amber-500 rounded-full animate-ping"></span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.text-gold-outline {
  -webkit-text-stroke: 1px #ca8a04;
  color: transparent;
}

@media (min-width: 768px) {
  .text-gold-outline {
    color: #ca8a04;
    -webkit-text-stroke: 0px;
  }
}

.group:hover {
  box-shadow: 0 20px 50px -15px rgba(16, 185, 129, 0.3);
}
</style>
