<template>
  <header
    :class="[
      'fixed top-0 left-0 w-full z-[100] transition-all duration-500',
      isScrolled ? 'py-3 bg-black/80 backdrop-blur-xl border-b border-white/10' : 'py-6 bg-transparent'
    ]"
  >
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center">
        <router-link to="/">
          <img src="@/assets/icons/logo-normal.png" alt="Logo" class="w-24 lg:w-40">
        </router-link>

        <nav class="hidden lg:flex items-center bg-white/5 border border-white/10 px-8 py-3 rounded-full backdrop-blur-md">
          <ul class="flex items-center gap-8">
            <li v-for="item in currentLinks" :key="item.href">
              <a
                :href="item.href"
                class="text-[10px] font-black uppercase tracking-widest text-gray-300 hover:text-green-500 transition-colors relative group"
              >
                {{ item.label }}
                <span class="absolute -bottom-1 left-0 w-0 h-[2px] bg-green-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          </ul>
        </nav>

        <div class="flex items-center gap-3 md:gap-6">

          <template v-if="isPortalInvestidor">
            <router-link to="/"
              class="hidden md:flex items-center gap-2 text-gray-500 hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              <span class="text-[10px] font-black uppercase tracking-widest">Portal do Motorista</span>
            </router-link>

            <div class="h-6 w-[1px] bg-white/10 hidden md:block"></div>

            <a
              href="https://seu-sistema.com"
              target="_blank"
              class="flex items-center gap-3 bg-amber-500 hover:bg-white text-black px-5 py-2.5 rounded-xl transition-all duration-300 shadow-lg shadow-amber-500/20 group"
            >
              <div class="flex flex-col items-end leading-none">
                <span class="text-[7px] font-black uppercase tracking-tighter opacity-60">Dashboard</span>
                <span class="text-[10px] font-black uppercase tracking-widest">Painel de Lucros</span>
              </div>
              <div class="w-7 h-7 bg-black/10 rounded-lg flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
              </div>
            </a>
          </template>

          <template v-else>
            <router-link to="/portal-investidor"
              class="hidden md:flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>
              <span class="text-[10px] font-black uppercase tracking-widest">Portal do Investidor</span>
            </router-link>

            <div class="h-6 w-[1px] bg-white/10 hidden md:block"></div>

            <a
              href="https://wa.me/5579999094631"
              target="_blank"
              class="bg-green-500 hover:bg-white text-black px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 shadow-lg shadow-green-500/20 flex items-center gap-2"
            >
              <span class="hidden sm:inline">CONTATO WHATSAPP</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </a>
          </template>

          <button class="lg:hidden text-white p-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isScrolled = ref(false)

const isPortalInvestidor = computed(() => route.path === '/portal-investidor')

const currentLinks = computed(() => {
  return isPortalInvestidor.value
    ? [
        { label: 'Modelo de repasse', href: '#modelo-repasse' },
        { label: 'Como funciona', href: '#como-funciona' },
        { label: 'Seja um investidor', href: '#contato-investidor' },
      ]
    : [
        { label: 'Área do motorista', href: '#motorista' },
        { label: 'Como Funciona', href: '#como-funciona' },
        { label: 'Benefícios', href: '#beneficios' },
        { label: 'Depoimentos', href: '#depoimentos' },
        { label: 'Sobre', href: '#sobre' },
      ]
})

const updateScroll = () => {
  isScrolled.value = window.scrollY > 40
}

onMounted(() => { window.addEventListener('scroll', updateScroll) })
onUnmounted(() => { window.removeEventListener('scroll', updateScroll) })
</script>
