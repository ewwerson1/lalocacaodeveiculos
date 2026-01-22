<template>
  <footer class="w-full bg-zinc-950 text-white pt-20 pb-10 border-t border-white/5 font-sans">
    <div class="max-w-7xl mx-auto px-6">

      <div class="flex flex-col md:flex-row justify-between items-center mb-16 pb-12 border-b border-white/5 gap-8">
        <div class="flex flex-col items-center md:items-start">
          <router-link to="/">
            <img src="../assets/icons/logo-normal.png" alt="LA Veículos" class="w-40">
          </router-link>
          <p class="text-[10px] font-black uppercase tracking-[0.3em] text-green-600 mt-4 italic">A Casa do Motorista de APP</p>
        </div>

        <div class="flex gap-4">
          <a href="https://wa.me/5579999094631?text=Olá!%20Vi%20o%20Portal%20do%20Investidor%20e%20gostaria%20de%20realizar%20uma%20simulação%20de%20rentabilidade%20para%20o%20meu%20veículo."
             target="_blank"
             class="w-12 h-12 rounded-2xl border border-white/10 flex items-center justify-center text-gray-400 hover:bg-green-600 hover:text-white hover:border-green-600 transition-all duration-300 shadow-lg hover:shadow-green-600/20">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          </a>
          <a href="https://www.instagram.com/la.locacaodeveiculos" target="_blank"
             class="w-12 h-12 rounded-2xl border border-white/10 flex items-center justify-center text-gray-400 hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-all duration-300 shadow-lg hover:shadow-amber-500/20">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          </a>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">

        <div class="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-8">
          <div>
            <h3 class="text-[10px] font-black uppercase tracking-[0.2em] text-amber-500 mb-6">Menu</h3>
            <ul class="space-y-4">
              <li v-for="item in menuLinks" :key="item.href">
                <a :href="item.href" class="text-gray-400 hover:text-green-500 transition-colors text-xs font-bold uppercase">
                  {{ item.label }}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 class="text-[10px] font-black uppercase tracking-[0.2em] text-amber-500 mb-6">Acesso</h3>
            <ul class="space-y-4">
              <li>
                <router-link to="/" class="text-gray-400 hover:text-green-500 transition-colors text-xs font-bold uppercase">Portal do Motorista</router-link>
              </li>
              <li>
                <a href="#depoimentos" class="text-gray-400 hover:text-green-500 transition-colors text-xs font-bold uppercase">Depoimentos</a>
              </li>
              <li>
                <a href="https://wa.me/5579999094631" target="_blank" class="text-gray-400 hover:text-green-500 transition-colors text-xs font-bold uppercase">Contato</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 class="text-[10px] font-black uppercase tracking-[0.2em] text-amber-500 mb-6">Corporativo</h3>
            <ul class="space-y-4">
              <li>
                <router-link to="/portal-investidor" class="text-gray-400 hover:text-green-500 transition-colors text-xs font-bold uppercase italic">
                  Portal do Investidor
                </router-link>
              </li>
              <li>
                <a href="https://darkturquoise-parrot-843561.hostingersite.com" target="_blank" class="text-gray-400 hover:text-amber-500 transition-colors text-xs font-bold uppercase italic">
                  Painel de Lucros
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="bg-zinc-900/50 p-8 rounded-[2.5rem] border border-white/5">
          <h3 class="text-[10px] font-black uppercase tracking-[0.2em] text-white mb-6">Contato Direto</h3>
          <div class="space-y-6">
            <div>
              <span class="block text-[9px] font-bold text-gray-500 uppercase mb-1">E-mail</span>
              <a href="mailto:contato@laveiculos.com" class="text-sm font-bold text-white hover:text-green-500 transition-colors">la.locacaodeveiculos@gmail.com</a>
            </div>
            <div>
              <span class="block text-[9px] font-bold text-gray-500 uppercase mb-1">Localização</span>
              <p class="text-sm font-bold text-gray-300">Rua joaquim Soares Bezerra , 84, Farolandia - Aracaju/SE</p>
            </div>
          </div>
        </div>

      </div>

      <div class="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <div class="text-center md:text-left">
          <p class="text-[10px] text-gray-600 font-bold uppercase tracking-widest leading-loose">
            © 2023 LA VEÍCULOS LTDA - CNPJ: 57.626.158/0001-99 <br>
            Desenvolvido para motoristas de elite em Sergipe.
          </p>
        </div>
        <div class="flex gap-4 opacity-30 grayscale pointer-events-none">
          <img src="https://img.icons8.com/color/48/visa.png" class="h-5" alt="Visa">
          <img src="https://img.icons8.com/color/48/mastercard.png" class="h-5" alt="Mastercard">
          <img src="https://img.icons8.com/color/48/pix.png" class="h-5" alt="Pix">
        </div>
      </div>

    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isPortalInvestidor = computed(() => route.path === '/portal-investidor')

const menuLinks = computed(() => {
  return isPortalInvestidor.value
    ? [
        { label: 'Modelo de repasse', href: '#modelo-repasse' },
        { label: 'Como funciona', href: '#como-funciona' },
        { label: 'Seja um investidor', href: '#contato-investidor' },
      ]
    : [
        { label: 'Como Funciona', href: '#como-funciona' },
        { label: 'Benefícios', href: '#beneficios' },
        { label: 'Sobre Nós', href: '#sobre' },
      ]
})
</script>
