<template>
  <section
    id="frota"
    class="relative  pt-12 pb-24 overflow-hidden font-sans bg-cover bg-center bg-no-repeat"
    :style="{ backgroundImage: `url(${bgFrota})` }"
  >
    <div class="absolute inset-0 bg-white/80 backdrop-blur-[2px] z-0"></div>

    <div class="container mx-auto px-4 relative z-10">

      <div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div class="max-w-xl">
          <div class="flex items-center gap-2 mb-4">
            <span class="w-12 h-1 bg-emerald-500"></span>
            <span class="text-xs font-black uppercase tracking-[0.3em] text-gray-500">Showroom Disponível</span>
          </div>
          <h2 class="text-4xl md:text-6xl font-black text-black leading-[0.9] uppercase italic">
            Máquinas <br>
            <span class="text-emerald-500">De Performance</span>
          </h2>
        </div>

        <div class="flex flex-wrap gap-2">
          <button
            v-for="cat in categorias" :key="cat"
            @click="categoriaAtiva = cat"
            :class="['px-6 py-3 rounded-xl font-black text-xs uppercase tracking-widest transition-all duration-300',
              categoriaAtiva === cat
                ? 'bg-black text-emerald-400 shadow-xl shadow-emerald-500/20 translate-y-[-2px]'
                : 'bg-white/80 backdrop-blur-md text-gray-400 border border-gray-200 hover:border-emerald-500 hover:text-black']"
          >
            {{ cat }}
          </button>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div v-for="carro in frotaFiltrada" :key="carro.nome"
             class="group bg-white/90 backdrop-blur-sm rounded-[2.5rem] p-4 border border-gray-100 hover:border-emerald-500/30 transition-all duration-500 hover:shadow-[0_30px_60px_rgba(16,185,129,0.15)]">

          <div class="relative h-64 w-full overflow-hidden rounded-[2rem] bg-gray-100">
            <div class="absolute top-4 left-4 z-10">
              <span class="bg-black/80 backdrop-blur-md text-emerald-400 text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-widest">
                {{ carro.categoria }}
              </span>
            </div>
            <img :src="carro.imagem" :alt="carro.nome"
                 class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
          </div>

          <div class="p-6">
            <h3 class="text-2xl font-black uppercase text-black mb-6 group-hover:text-emerald-600 transition-colors italic">
              {{ carro.nome }}
            </h3>

            <div class="grid grid-cols-2 gap-y-4 gap-x-2 mb-8 border-b border-gray-200 pb-8">
              <div class="flex items-center gap-3">
                <div class="text-gray-400 group-hover:text-emerald-500 transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/></svg>
                </div>
                <span class="text-[10px] font-black uppercase text-gray-600 tracking-wider">{{ carro.cambio }}</span>
              </div>
              <div class="flex items-center gap-3">
                <div class="text-gray-400 group-hover:text-emerald-500 transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M2 12h20"/><path d="m4.93 4.93 14.14 14.14M4.93 19.07l14.14-14.14"/></svg>
                </div>
                <span class="text-[10px] font-black uppercase text-gray-600 tracking-wider">Ar Condicionado</span>
              </div>
              <div class="flex items-center gap-3">
                <div class="text-gray-400 group-hover:text-emerald-500 transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18M9 21V9"/></svg>
                </div>
                <span class="text-[10px] font-black uppercase text-gray-600 tracking-wider">4 Portas</span>
              </div>
              <div class="flex items-center gap-3">
                <div class="text-gray-400 group-hover:text-emerald-500 transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                </div>
                <span class="text-[10px] font-black uppercase text-gray-600 tracking-wider">5 Lugares</span>
              </div>
            </div>

            <div class="flex items-center justify-between">
              <div>
                <span class="block text-[10px] font-black text-gray-400 uppercase tracking-widest">Diária Premium</span>
                <div class="flex items-baseline gap-1">
                  <span class="text-sm font-bold text-black italic">R$</span>
                  <span class="text-3xl font-black text-black tracking-tighter">{{ carro.preco }}</span>
                </div>
              </div>
              <button class="bg-emerald-500 hover:bg-black hover:text-emerald-400 text-black p-5 rounded-2xl shadow-lg shadow-emerald-500/20 transition-all duration-300 transform group-hover:scale-105">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L20 7"/></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
// Importação correta do Asset para o Vite reconhecer
import bgFrota from '../../assets/images/bg-frota.png'

const categoriaAtiva = ref('Todos')
const categorias = ['Todos', 'Econômico', 'Sedan', 'SUV', 'Premium']

const carros = ref([
  {
    nome: 'VW Gol 1.0 Flex',
    categoria: 'Econômico',
    preco: '89,90',
    cambio: 'Manual',
    imagem: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=800'
  },
  {
    nome: 'Hyundai HB20S Vision',
    categoria: 'Sedan',
    preco: '129,90',
    cambio: 'Automático',
    imagem: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800'
  },
  {
    nome: 'Jeep Compass Limited',
    categoria: 'SUV',
    preco: '249,90',
    cambio: 'Automático',
    imagem: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800'
  },
])

const frotaFiltrada = computed(() => {
  if (categoriaAtiva.value === 'Todos') return carros.value
  return carros.value.filter(c => c.categoria === categoriaAtiva.value)
})
</script>
