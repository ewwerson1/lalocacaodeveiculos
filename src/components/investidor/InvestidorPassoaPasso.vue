<template>
  <section id="como-funciona" class="py-24 bg-zinc-950 text-white overflow-hidden">
    <div class="container mx-auto px-6">

      <div class="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
        <div class="max-w-2xl">
          <div class="flex items-center gap-4 mb-4">
            <div class="h-[1px] w-12 bg-green-500"></div>
            <span class="text-[11px] font-black uppercase tracking-[0.4em] text-green-500">Operação 360º</span>
          </div>
          <h2 class="text-4xl md:text-6xl font-black tracking-tighter italic leading-none text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-green-500 to-yellow-300">
            Como funciona a <br>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-amber-500 to-yellow-300 box-decoration-clone">
              gestão profissional de veículos.
            </span>
          </h2>
        </div>
        <p class="text-gray-400 text-sm max-w-xs font-medium leading-relaxed border-l border-white/10 pl-6">
          Você entra com o veículo, nós entregamos a inteligência operacional para transformar seu veículo em dividendos.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5 rounded-[2.5rem] overflow-hidden mb-20">

        <div class="bg-zinc-950 p-10 hover:bg-zinc-900 transition-colors group">
          <span class="text-5xl font-black text-white/5 group-hover:text-green-500/20 transition-colors italic">01</span>
          <h3 class="text-xl font-black uppercase mt-4 mb-4 italic">Gestão Completa</h3>
          <p class="text-gray-400 text-sm leading-relaxed">
            Ao investir conosco, você coloca seu veículo sob a gestão completa da L.A Administração e Locação de Veículos, e nós cuidamos de toda a operação.
          </p>
        </div>

        <div class="bg-zinc-950 p-10 hover:bg-zinc-900 transition-colors group border-x border-white/5">
          <span class="text-5xl font-black text-white/5 group-hover:text-green-500/20 transition-colors italic">02</span>
          <h3 class="text-xl font-black uppercase mt-4 mb-4 italic">Seleção de Elite</h3>
          <p class="text-gray-400 text-sm leading-relaxed">
            Desde a seleção criteriosa do motorista até o controle financeiro e repasse dos valores.
          </p>
        </div>

        <div class="bg-zinc-950 p-10 hover:bg-zinc-900 transition-colors group">
          <span class="text-5xl font-black text-white/5 group-hover:text-green-500/20 transition-colors italic">03</span>
          <h3 class="text-xl font-black uppercase mt-4 mb-4 italic">Segurança & Tranquilidade</h3>
          <p class="text-gray-400 text-sm leading-relaxed">
            Seu carro é alugado para motoristas de aplicativo previamente analisados, garantindo rentabilidade, segurança e tranquilidade.
          </p>
        </div>

        <div class="bg-zinc-950 p-10 hover:bg-zinc-900 transition-colors group">
          <span class="text-5xl font-black text-white/5 group-hover:text-green-500/20 transition-colors italic">04</span>
          <h3 class="text-xl font-black uppercase mt-4 mb-4 italic">Repasse ao Investidor</h3>
          <p class="text-gray-400 text-sm leading-relaxed">
            O motorista realiza os pagamentos à empresa de forma semanal, e a empresa faz o repasse dos valores para a conta do investidor de forma mensal.
          </p>
        </div>

        <div class="bg-zinc-950 p-10 hover:bg-zinc-900 transition-colors group border-x border-white/5">
          <span class="text-5xl font-black text-white/5 group-hover:text-green-500/20 transition-colors italic">05</span>
          <h3 class="text-xl font-black uppercase mt-4 mb-4 italic">Taxa de Administração</h3>
          <p class="text-gray-400 text-sm leading-relaxed">
            A taxa de administração será de 20% do valor total do aluguel referente ao mês. Lembrando que a taxa incide em cima do período em que o veículo ficou alugado.
          </p>
        </div>

        <div class="bg-zinc-950 p-10 hover:bg-zinc-900 transition-colors group">
          <span class="text-5xl font-black text-white/5 group-hover:text-green-500/20 transition-colors italic">06</span>
          <h3 class="text-xl font-black uppercase mt-4 mb-4 italic">Repasse & Lucro</h3>
          <p class="text-gray-400 text-sm leading-relaxed">
            Até o 5º dia útil o investidor receberá o valor correspondente ao periodo em que seu veículo ficou alugado.
          </p>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        <div class="relative group h-full">
          <div class="absolute -inset-4 bg-green-500/10 blur-xl rounded-[3rem] opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
          <div class="relative bg-zinc-900 border border-white/10 p-10 rounded-[2.5rem] shadow-2xl h-full">
            <div class="flex justify-between items-start mb-8">
              <div>
                <h4 class="text-3xl font-black uppercase italic tracking-tighter">Planilha Exclusiva</h4>
                <p class="text-green-500 text-xs font-black uppercase tracking-widest mt-2">Transparência em Tempo Real</p>
              </div>
              <div class="bg-green-500/20 text-green-500 p-3 rounded-xl">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
              </div>
            </div>
            <ul class="space-y-6">
              <li v-for="item in ['Valores semanais', 'Faturamento mensal', 'Histórico de manutenções', ]" :key="item" class="flex items-center gap-4 border-b border-white/5 pb-4">
                <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                <span class="text-sm font-bold uppercase tracking-wider text-gray-300">{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="space-y-8">
          <div class="flex items-center gap-3 mb-8">
            <div class="h-8 w-1 bg-gradient-to-b from-green-500 to-amber-500"></div>
            <h4 class="text-sm font-black text-amber-500 uppercase tracking-[0.3em]">Responsabilidades</h4>
          </div>

          <div class="space-y-6">
            <div class="flex flex-col sm:flex-row gap-6 p-8 rounded-[2rem] bg-gradient-to-br from-white/5 to-transparent border-l-4 border-amber-500 group hover:bg-white/[0.08] transition-all duration-300">
              <div class="flex-shrink-0 w-16 h-16 rounded-2xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20 group-hover:scale-110 transition-transform">
                <svg class="w-8 h-8 text-amber-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                </svg>
              </div>
              <div>
                <h5 class="font-black uppercase text-xl italic text-white tracking-tight">Responsabilidades do <span class="text-amber-500">Investidor</span></h5>
                <p class="text-gray-300 text-sm mt-3 leading-relaxed font-medium">
                  Manutenção Geral e Proteção Veícular. O investidor precisa manter o veículo em condições para que o motorista possa rodar com tranquilidade e arrecadar o valor do aluguel.
                </p>
              </div>
            </div>

            <div class="flex flex-col sm:flex-row gap-6 p-8 rounded-[2rem] bg-gradient-to-br from-white/5 to-transparent border-l-4 border-green-500 group hover:bg-white/[0.08] transition-all duration-300">
              <div class="flex-shrink-0 w-16 h-16 rounded-2xl bg-green-500/10 flex items-center justify-center border border-green-500/20 group-hover:scale-110 transition-transform">
                <svg class="w-8 h-8 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/>
                </svg>
              </div>
              <div>
                <h5 class="font-black uppercase text-xl italic text-white tracking-tight">Responsabilidades do <span class="text-green-500">Motorista</span></h5>
                <p class="text-gray-300 text-sm mt-3 leading-relaxed font-medium">
                  Óleo, Filtros, Acessórios, Pneus, e Mau Uso.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.box-decoration-clone {
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
}
</style>
