<template>
  <section id="como-funciona" class="py-24 bg-[#1a2e05] bg-[radial-gradient(circle_at_center,_#365314_0%,_#1a2e05_60%,_#111827_100%)] text-white relative overflow-hidden">

    <div class="absolute inset-0 pointer-events-none overflow-hidden -z-10">
      <div class="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-lime-400/10 rounded-full blur-[120px] animate-pulse"></div>
      <div class="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-yellow-600/10 rounded-full blur-[100px] animate-pulse" style="animation-delay: 2s;"></div>
      <div class="absolute bottom-[-10%] right-[10%] w-[600px] h-[600px] bg-lime-600/10 rounded-full blur-[130px] animate-pulse" style="animation-delay: 4s;"></div>
    </div>

    <div class="container mx-auto px-6 relative z-10">

      <div class="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
        <div class="max-w-3xl">
          <div class="flex items-center gap-4 mb-4">
            <div class="h-[2px] w-12 bg-yellow-500 shadow-[0_0_10px_#eab308]"></div>
            <span class="text-[11px] font-black uppercase tracking-[0.4em] text-lime-400">Operação 360º</span>
          </div>
          <h2 class="text-5xl md:text-7xl font-black tracking-tighter italic leading-[0.9]">
            Como funciona a <br>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-white to-lime-400">
              gestão profissional.
            </span>
          </h2>
        </div>
        <p class="text-lime-50/80 text-sm max-w-xs font-bold leading-relaxed border-l-2 border-lime-500 pl-6 italic bg-white/5 backdrop-blur-md p-6 rounded-r-2xl border-y border-r border-white/10">
          Você entra com o veículo, nós entregamos a inteligência operacional para transformar seu patrimônio em dividendos.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        <div v-for="(passo, idx) in passos" :key="idx"
             class="group relative p-10 rounded-[2.5rem] bg-white/5 backdrop-blur-xl border border-white/10 hover:border-lime-500/50 hover:bg-white/10 transition-all duration-500 shadow-2xl overflow-hidden">

          <div class="relative z-10">
            <span class="text-6xl font-black text-white/10 group-hover:text-lime-500/20 transition-all italic block">
              {{ passo.id }}
            </span>
            <h3 class="text-xl font-black uppercase mt-4 mb-4 italic group-hover:text-yellow-400 transition-colors">
              {{ passo.titulo }}
            </h3>
            <p class="text-lime-50/70 text-sm leading-relaxed group-hover:text-white transition-colors">
              {{ passo.desc }}
            </p>
          </div>
          <div class="absolute bottom-0 left-0 w-0 h-[3px] bg-gradient-to-r from-yellow-500 to-lime-500 group-hover:w-full transition-all duration-700"></div>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

        <div class="relative p-[1px] rounded-[3rem] bg-gradient-to-br from-yellow-500/50 to-lime-500/20 shadow-2xl">
          <div class="bg-[#1a2e05]/90 backdrop-blur-2xl rounded-[2.95rem] p-10 h-full border border-white/5">
            <div class="flex justify-between items-start mb-10">
              <div>
                <h4 class="text-3xl font-black uppercase italic tracking-tighter">Planilha <span class="text-yellow-500">Exclusiva</span></h4>
                <p class="text-lime-400 text-[10px] font-black uppercase tracking-widest mt-2">Transparência em Tempo Real</p>
              </div>
              <div class="bg-yellow-500 shadow-[0_0_20px_#eab308] text-black p-3 rounded-xl">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
              </div>
            </div>
            <ul class="space-y-6">
              <li v-for="item in ['Valores semanais', 'Faturamento mensal', 'Histórico de manutenções']" :key="item" class="flex items-center gap-4 border-b border-white/5 pb-4">
                <div class="w-2 h-2 bg-yellow-500 rounded-full shadow-[0_0_8px_#eab308]"></div>
                <span class="text-xs font-black uppercase tracking-widest text-lime-50/80">{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="space-y-6">
          <div class="group p-8 rounded-[2.5rem] bg-white/5 backdrop-blur-md border border-white/10 hover:border-yellow-500/50 transition-all duration-500 shadow-xl">
            <div class="flex flex-col sm:flex-row gap-6">
              <div class="flex-shrink-0 w-16 h-16 rounded-2xl bg-yellow-500 shadow-[0_0_20px_rgba(234,179,8,0.4)] flex items-center justify-center text-black">
                <svg class="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
              </div>
              <div>
                <h5 class="font-black uppercase text-xl italic text-white">Responsabilidades do <span class="text-yellow-500">Investidor</span></h5>
                <p class="text-lime-50/60 text-sm mt-3 leading-relaxed">Manutenção Geral e Proteção Veícular. O investidor precisa manter o veículo em condições para que o motorista possa rodar com tranquilidade.</p>
              </div>
            </div>
          </div>

          <div class="group p-8 rounded-[2.5rem] bg-white/5 backdrop-blur-md border border-white/10 hover:border-lime-500/50 transition-all duration-500 shadow-xl">
            <div class="flex flex-col sm:flex-row gap-6">
              <div class="flex-shrink-0 w-16 h-16 rounded-2xl bg-lime-500 shadow-[0_0_20px_rgba(132,204,22,0.4)] flex items-center justify-center text-[#1a2e05]">
                <svg class="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>
              </div>
              <div>
                <h5 class="font-black uppercase text-xl italic text-white">Responsabilidades do <span class="text-lime-500">Motorista</span></h5>
                <p class="text-lime-50/60 text-sm mt-3 leading-relaxed">Óleo, Filtros, Acessórios, Pneus, e Mau Uso.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
const passos = [
  { id: '01', titulo: 'Gestão Completa', desc: 'Ao investir conosco, você coloca seu veículo sob a gestão completa da L.A Administração e Locação de Veículos, e nós cuidamos de toda a operação.' },
  { id: '02', titulo: 'Seleção de Elite', desc: 'Desde a seleção criteriosa do motorista até o controle financeiro e repasse dos valores.' },
  { id: '03', titulo: 'Segurança e Tranquilidade', desc: 'Seu carro é alugado para motoristas de aplicativo previamente analisados, garantindo rentabilidade, segurança e tranquilidade.' },
  { id: '04', titulo: 'Repasse ao Investidor', desc: 'O motorista realiza os pagamentos à empresa de forma semanal, e a empresa faz o repasse dos valores para a conta do investidor de forma mensal.' },
  { id: '05', titulo: 'Taxa de Administração', desc: 'A taxa de administração será de 20% do valor total do aluguel referente ao mês.' },
  { id: '06', titulo: 'Repasse e Lucro', desc: 'Até o 5º dia útil o investidor receberá o valor correspondente ao período em que seu veículo ficou alugado.' },
]
</script>

<style scoped>
.text-transparent { -webkit-background-clip: text; background-clip: text; }
@keyframes pulse-custom {
  0%, 100% { opacity: 0.1; transform: scale(1); }
  50% { opacity: 0.2; transform: scale(1.1); }
}
.animate-pulse { animation: pulse-custom 10s infinite; }
</style>
