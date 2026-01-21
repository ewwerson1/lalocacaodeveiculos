<template>
  <section class="py-16 bg-neutral-950 border-t border-neutral-900">
    <div class="container mx-auto px-4">

      <div class="text-center mb-12">
        <span class="text-amber-500 text-[10px] font-black uppercase tracking-[0.3em] block mb-2">Confiabilidade</span>
        <h2 class="text-white text-2xl font-bold opacity-90 italic">Parceiros Estratégicos</h2>
      </div>

      <div class="flex flex-wrap justify-center items-center gap-8 md:gap-20 transition-all duration-700">

        <div v-for="parceiro in parceiros" :key="parceiro.nome"
             class="group flex flex-col items-center transition-all duration-300">

          <div class="h-16 md:h-20 w-40 md:w-48 flex items-center justify-center transition-all duration-500 transform group-hover:scale-110">
            <img
              :src="parceiro.logo"
              :alt="parceiro.nome"
              class="max-h-full max-w-full object-contain transition-all duration-500"
            >
          </div>

          <div class="w-0 h-[2px] bg-amber-500 group-hover:w-1/2 transition-all duration-500 mt-4 opacity-50"></div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
const getImageUrl = (name) => {
  return new URL(`../../assets/icons/${name}.png`, import.meta.url).href
}

const parceiros = [
  { nome: 'Parceiro 1', logo: getImageUrl('parceiro1') },
  { nome: 'Parceiro 2', logo: getImageUrl('parceiro2') },
  { nome: 'Parceiro 3', logo: getImageUrl('parceiro3') },
  { nome: 'Parceiro 4', logo: getImageUrl('parceiro4') },
]
</script>

<style scoped>
section {
  animation: fadeIn 1.2s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
