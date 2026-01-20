<template>
  <section class="py-24 bg-white relative overflow-hidden font-sans">
    <div class="absolute top-0 right-0 w-96 h-96 bg-green-100/40 blur-[120px] rounded-full opacity-50"></div>
    <div class="absolute bottom-0 left-0 w-64 h-64 bg-amber-100/40 blur-[100px] rounded-full opacity-30"></div>

    <div class="container mx-auto px-4 relative z-10">

      <div class="max-w-3xl mb-16">
        <div class="flex items-center gap-2 mb-4">
          <span class="w-12 h-[2px] bg-amber-600"></span>
          <span class="text-sm font-black uppercase tracking-[0.2em] text-amber-600">Área do Motorista</span>
        </div>
        <h2 class="text-4xl md:text-6xl font-black text-slate-900 leading-tight  italic">
          Sua ferramenta de <br>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-300">trabalho está aqui</span>
        </h2>
        <p class="text-slate-500 mt-6 text-lg font-medium">Planos flexíveis para quem busca rentabilidade e segurança em Sergipe.</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">

        <div class="bg-slate-50 border border-slate-200 p-8 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:shadow-green-900/5 transition-all group">
          <div class="w-12 h-12 bg-green-700 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
          </div>
          <h3 class="text-slate-900 font-black uppercase text-xl mb-4 italic">Plano Trimestral</h3>
          <div class="space-y-4">
            <div class="flex justify-between items-end border-b border-slate-200 pb-4">
              <span class="text-slate-400 text-xs font-bold uppercase">A partir de</span>
              <span class="text-slate-900 font-black text-2xl">R$ 500<span class="text-green-700 text-sm">/sem</span></span>
            </div>
            <p class="text-slate-500 text-sm leading-relaxed font-medium">Modelos variam conforme ano e categoria. Caução padrão de R$ 1.300,00.</p>
            <div class="bg-green-100/50 p-4 rounded-2xl border border-green-200/50">
              <span class="text-green-700 text-[10px] font-black uppercase tracking-widest block mb-1">Diferencial</span>
              <span class="text-green-900 text-xs font-extrabold uppercase tracking-tight">KM Livre + Manutenção Preventiva e Corretiva</span>
            </div>
          </div>
        </div>

        <div class="bg-green-700 p-8 rounded-[2.5rem] shadow-2xl shadow-green-700/20 transform lg:-translate-y-4 relative overflow-hidden">
          <div class="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>

          <div class="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-green-700 mb-6 shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" x2="19" y1="8" y2="14"/><line x1="22" x2="16" y1="11" y2="11"/></svg>
          </div>
          <h3 class="text-white font-black uppercase text-xl mb-4 italic">Entrada Facilitada</h3>
          <p class="text-green-50 font-medium text-sm mb-6">Comece a rodar com investimento inicial reduzido:</p>
          <ul class="space-y-3 mb-8">
            <li class="flex items-center gap-2 text-white font-bold text-sm">
              <div class="bg-white/20 rounded-full p-1"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4"><polyline points="20 6 9 17 4 12"/></svg></div>
              R$ 900,00 (Caução Inicial)
            </li>
            <li class="flex items-center gap-2 text-white font-bold text-sm">
              <div class="bg-white/20 rounded-full p-1"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4"><polyline points="20 6 9 17 4 12"/></svg></div>
              + 1º Aluguel Semanal
            </li>
          </ul>
          <div class="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/20 text-center">
            <p class="text-amber-300 font-black text-xs uppercase tracking-widest">Início: R$ 1.400 a R$ 1.550</p>
          </div>
        </div>

        <div class="bg-slate-50 border border-slate-200 p-8 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all group">
          <div class="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center text-white mb-6 group-hover:rotate-6 transition-transform shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          </div>
          <h3 class="text-slate-900 font-black uppercase text-xl mb-4 italic">Compromisso</h3>
          <ul class="space-y-4">
            <li class="text-slate-600 text-xs flex items-start gap-3">
              <span class="font-black text-green-700">01</span>
              <span class="font-bold">Vistorias semanais para sua segurança total.</span>
            </li>
            <li class="text-slate-600 text-xs flex items-start gap-3">
              <span class="font-black text-green-700">02</span>
              <span class="font-bold">Tempo mínimo de contrato: 90 dias.</span>
            </li>
            <li class="text-slate-600 text-xs flex items-start gap-3">
              <span class="font-black text-green-700">03</span>
              <span class="font-bold">Suporte 24 horas</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="bg-white border border-slate-200 rounded-[3rem] p-8 md:p-12 shadow-sm">
        <div class="flex flex-col lg:flex-row gap-12 items-center">
          <div class="lg:w-1/3 text-center lg:text-left">
            <h4 class="text-slate-900 font-black uppercase text-2xl italic mb-4">Checklist de <br> Documentos</h4>
            <p class="text-slate-500 text-sm font-medium">Envie seus documentos e agilize sua aprovação pelo WhatsApp.</p>
          </div>

          <div class="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
            <div v-for="doc in documentos" :key="doc" class="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-100 group hover:border-green-400 transition-colors">
              <div class="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center text-green-700">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <span class="text-slate-700 text-[10px] font-black uppercase tracking-widest">{{ doc }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-12 flex flex-wrap justify-center gap-12 border-t border-slate-100 pt-10">
        <div class="flex flex-col items-center gap-1 text-center">
          <span class="text-green-700 text-[10px] font-black uppercase tracking-[0.2em]">Nossa Responsabilidade</span>
          <span class="text-slate-900 text-xs font-black uppercase tracking-tight">Manutenção Geral e Proteção</span>
        </div>
        <div class="w-px h-8 bg-slate-200 hidden md:block"></div>
        <div class="flex flex-col items-center gap-1 text-center">
          <span class="text-amber-600 text-[10px] font-black uppercase tracking-[0.2em]">Sua Responsabilidade</span>
          <span class="text-slate-900 text-xs font-black uppercase tracking-tight">Óleo, Filtros, Acessórios e Taxa de pneus fixa: R$ 25,00/semana.</span>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
const documentos = [
  'CNH Válida',
  'Comprovante de Residência',
  'E-mail Ativo',
  'Print Perfis Uber / 99',
  'Print do Instagram',
  'App Carteira Digital'
]
</script>

<style scoped>
.transition-all {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
