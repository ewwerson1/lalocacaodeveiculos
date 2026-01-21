<template>

  <section class="relative min-h-96 py-26 md:py-48 w-full bg-zinc-950 flex items-center overflow-hidden font-sans">



    <div class="absolute inset-0 z-0">

      <div class="absolute inset-0 opacity-[0.03]"

           style="background-image: linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px); background-size: 50px 50px;">

      </div>

      <div class="absolute -top-24 -right-24 w-[600px] h-[600px] bg-amber-500/10 blur-[150px] rounded-full"></div>

      <div class="absolute -bottom-24 -left-24 w-[600px] h-[600px] bg-green-600/10 blur-[150px] rounded-full"></div>

    </div>



    <div class="container mx-auto px-6 relative z-10 pt-20">

      <div class="flex flex-col lg:flex-row items-center gap-16">



        <div class="w-full lg:w-7/12 text-left">

          <div class="flex items-center gap-4 mb-8">

            <div class="h-[1px] w-12 bg-amber-500/50"></div>

            <span class="text-[11px] font-black uppercase tracking-[0.4em] text-amber-500">Gestão de Ativos</span>

          </div>



          <h1 class="text-5xl md:text-[84px] font-black text-white leading-[0.85] tracking-tighter mb-10">

            Seu carro é um <br>

            <span class="italic text-transparent bg-clip-text bg-gradient-to-r from-white via-green-500 to-green-300">ativo gerador.</span>

          </h1>



          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 border-l-2 border-green-500/30 pl-8">

            <div>

              <p class="text-amber-500 font-black text-2xl mb-1 italic">2023</p>

              <p class="text-gray-400 text-xs uppercase font-bold tracking-widest">Pioneirismo em Sergipe</p>

            </div>

            <div>

              <p class="text-white font-black text-2xl mb-1 italic">20% ADM</p>

              <p class="text-gray-400 text-xs uppercase font-bold tracking-widest">Taxa de Gestão fixa</p>

            </div>

          </div>



          <div class="flex flex-col sm:flex-row items-center gap-6">

            <a href="https://wa.me/5579999094631?text=Olá!+Gostaria+de+falar+com+o+setor+de+investimentos+da+L.A.+Tenho+interesse+no+modelo+de+Asset+Management+e+gostaria+de+receber+uma+simulação+de+rentabilidade+para+o+meu+capital/veículo." class="group relative w-full sm:w-auto px-10 py-5 bg-white text-black font-black uppercase text-xs tracking-[0.2em] rounded-sm transition-all hover:bg-green-500 overflow-hidden">

              <span class="relative z-10 italic">Seja um Investidor</span>

              <div class="absolute inset-0 w-0 group-hover:w-full transition-all duration-500 bg-green-500"></div>

            </a>



            <a href="#modelo-repasse" class="text-gray-400 hover:text-white text-[10px] font-black uppercase tracking-[0.3em] transition-colors border-b border-gray-800 pb-2">

              Explorar Modelo Financeiro

            </a>

          </div>

        </div>



        <div class="w-full lg:w-5/12 relative">

          <div class="relative z-10 bg-gradient-to-br from-white/10 to-transparent p-[1px] rounded-[2rem] backdrop-blur-sm">

            <div class="bg-black/40 p-8 rounded-[2rem] border border-white/5">

              <div class="flex justify-between items-center mb-10">

                <div class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-[0_0_20px_#22c55e]">

                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="3"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>

                </div>

                <div class="text-right">

                  <span class="block text-[10px] font-black text-gray-500 uppercase tracking-widest">Status Patrimonial</span>

                  <span class="text-green-500 font-bold text-sm">Garantia Real</span>

                </div>

              </div>



              <div class="space-y-6">

                <div class="h-2 w-full bg-white/5 rounded-full overflow-hidden">

                  <div class="h-full bg-amber-500 w-[70%]"></div>

                </div>

                <p class="text-gray-400 text-[10px] font-medium leading-relaxed italic">

                  "O veículo permanece integralmente em nome do investidor, garantindo liquidez e segurança jurídica total."

                </p>

              </div>

            </div>

          </div>



          <div class="absolute -bottom-10 -left-10 bg-green-600 text-black p-6 rounded-2xl shadow-2xl rotate-3 hidden md:block">

            <span class="block text-2xl font-black leading-none italic">PLANILHA 24H</span>

            <span class="text-[9px] font-black uppercase tracking-widest">Acesso total aos dados</span>

          </div>

        </div>



      </div>

    </div>



    <div class="absolute bottom-12 left-0 w-full px-6">

      <div class="container mx-auto flex justify-between items-end border-t border-white/5 pt-8">

        <div class="hidden md:block">

          <span class="text-[9px] font-black text-gray-600 uppercase tracking-widest block mb-2">Fundadores</span>

          <p class="text-white text-xs font-bold italic uppercase tracking-tighter">Marcel (Advogado) & Elan (Policial)</p>

        </div>

        <div class="flex gap-10">

          <div class="text-right">

            <span class="block text-xl font-black text-white italic">Nordeste</span>

            <span class="text-[9px] text-gray-500 font-bold uppercase tracking-widest">Maior Gestora Especializada</span>

          </div>

        </div>

      </div>

    </div>



  </section>

</template>



<style scoped>

/* Estética de tipografia para mercado financeiro */

h1 {

  text-rendering: optimizeLegibility;

}

</style>



