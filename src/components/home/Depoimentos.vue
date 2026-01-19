<template>
  <section class="py-24 bg-slate-50 overflow-hidden font-sans">
    <div class="container mx-auto px-4 relative">

      <div class="text-center mb-20">
        <span class="bg-emerald-500 text-black px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em]">
          Parceiros LA
        </span>
        <h2 class="text-4xl md:text-6xl font-black text-slate-900 uppercase mt-6 tracking-tighter italic">
          Quem roda <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-amber-300">Aprova</span>
        </h2>
        <p class="text-slate-500 font-bold uppercase tracking-[0.2em] mt-4 text-xs">Histórias reais de quem transformou o asfalto em lucro</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div v-for="(dep, index) in depoimentos" :key="index"
             class="group relative bg-zinc-950 p-10 rounded-tr-[5rem] rounded-bl-[5rem] rounded-tl-2xl rounded-br-2xl transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-emerald-500/10 border border-white/5 hover:border-emerald-500/30">

          <div class="absolute top-6 right-10 text-emerald-500/10 transition-colors group-hover:text-emerald-500/20">
            <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12C15.017 12.5523 14.5693 13 14.017 13H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM2.01697 21L2.01697 18C2.01697 16.8954 2.91241 16 4.01697 16H7.01697C7.56925 16 8.01697 15.5523 8.01697 15V9C8.01697 8.44772 7.56925 8 7.01697 8H4.01697C3.46468 8 3.01697 8.44772 3.01697 9V12C3.01697 12.5523 2.56925 13 2.01697 13H0.0169678V5H10.017V15C10.017 18.3137 7.33066 21 4.01697 21H2.01697Z" />
            </svg>
          </div>

          <div class="flex gap-1 mb-8">
            <svg v-for="i in 5" :key="i" class="w-5 h-5 text-emerald-400 shadow-emerald-500/50" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>

          <p class="text-zinc-400 text-lg leading-relaxed mb-10 font-medium italic">
            "{{ dep.texto }}"
          </p>

          <div class="flex items-center gap-4">
            <div class="relative">
              <div class="w-14 h-14 bg-gradient-to-tr from-emerald-600 to-lime-500 rounded-2xl flex items-center justify-center text-zinc-950 font-black text-xl rotate-3 group-hover:rotate-0 transition-transform duration-300 shadow-lg shadow-emerald-500/20">
                {{ dep.nome.charAt(0) }}
              </div>
              <div class="absolute -bottom-1 -right-1 bg-emerald-500 text-white rounded-full p-1 border-2 border-zinc-900">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
            </div>
            <div>
              <h4 class="text-white font-black uppercase tracking-tight">{{ dep.nome }}</h4>
              <p class="text-emerald-400 text-[10px] font-black uppercase tracking-[0.2em]">{{ dep.info }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-20 flex justify-center">
        <div class="inline-flex flex-col md:flex-row items-center gap-4 bg-white px-8 py-4 rounded-3xl border border-slate-200 shadow-sm">
          <div class="flex -space-x-3">
            <img v-for="i in 4" :key="i" :src="`https://i.pravatar.cc/100?img=${i+30}`" class="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm" />
          </div>
          <p class="text-[11px] font-black text-slate-500 uppercase tracking-widest text-center md:text-left">
            Junte-se a + de <span class="text-emerald-600">500 motoristas</span> lucrando diariamente em Sergipe
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const depoimentos = [
  {
    nome: 'José Santos',
    info: 'Motorista Uber/99',
    texto: 'O que me convenceu foi a caução facilitada. Comecei com R$ 900 e o restante parcelei no aluguel. O suporte mecânico é nota 10, nunca fico na mão.'
  },
  {
    nome: 'Carlos André',
    info: 'Parceiro há 2 anos',
    texto: 'Rodo com KM livre e isso mudou meu faturamento. Não preciso ficar fazendo conta de quanto vou pagar no fim da semana. É pegar e trabalhar.'
  },
  {
    nome: 'Bruno Lima',
    info: 'Motorista em Aracaju',
    texto: 'A vistoria semanal me dá segurança de que o carro está sempre em dia. A manutenção é por conta deles, então meu lucro sobra no bolso.'
  }
]
</script>
