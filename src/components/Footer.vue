<template>
  <footer class="w-full bg-black text-white pt-20 pb-10 border-t border-white/5">
    <div class="max-w-7xl mx-auto px-6">

      <div class="flex flex-col md:flex-row justify-between items-center mb-16 pb-12 border-b border-white/5 gap-8">
        <div class="flex flex-col items-center md:items-start">
          <img src="../assets/icons/logo-normal.png" alt="logo" class="w-32">
        </div>

        <div class="flex gap-6">
          <a v-for="(icon, name) in social" :key="name" href="#"
             class="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition-all duration-300"
             v-html="icon">
          </a>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

        <div>
          <h3 class="text-xs font-black uppercase tracking-[0.2em] text-green-400 mb-6">Aluguel</h3>
          <ul class="space-y-4">
            <li v-for="link in ['Loja mais próxima', 'Grupos de Veículos', 'Diferenciais LA']" :key="link"
                class="text-gray-400 hover:text-white transition-colors cursor-pointer text-sm font-medium">
              {{ link }}
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-xs font-black uppercase tracking-[0.2em] text-green-400 mb-6">A Companhia</h3>
          <ul class="space-y-4">
            <li v-for="link in ['Sobre nós', 'Relação com Investidores', 'Trabalhe Conosco', 'Privacidade']" :key="link"
                class="text-gray-400 hover:text-white transition-colors cursor-pointer text-sm font-medium">
              {{ link }}
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-xs font-black uppercase tracking-[0.2em] text-green-400 mb-6">Suporte</h3>
          <ul class="space-y-4 mb-6">
            <li v-for="link in ['Perguntas Frequentes', 'Canais de Atendimento', 'Ouvidoria']" :key="link"
                class="text-gray-400 hover:text-white transition-colors cursor-pointer text-sm font-medium">
              {{ link }}
            </li>
          </ul>
          <button class="text-[10px] font-black uppercase tracking-widest border border-white/20 px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all">
            Contrato de Locação
          </button>
        </div>

        <div class="bg-white/5 p-8 rounded-[2rem] border border-white/5">
          <h3 class="text-xs font-black uppercase tracking-[0.2em] text-white mb-6">Central 24h</h3>

          <div class="space-y-6">
            <div>
              <span class="block text-[10px] font-bold text-gray-500 uppercase mb-1">Reservas</span>
              <a href="tel:08006121121" class="text-lg font-black text-green-400 hover:underline tracking-tighter">0800 6 121 121</a>
            </div>

            <div>
              <span class="block text-[10px] font-bold text-gray-500 uppercase mb-1">Assistência 24h</span>
              <a href="tel:08007794042" class="text-lg font-black text-white hover:underline tracking-tighter">0800 779 4042</a>
            </div>

            <div class="pt-4">
              <button class="w-full bg-green-500 hover:bg-green-600 text-black font-black py-3 rounded-xl text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 transition-all">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Chamar no Whats
              </button>
            </div>
          </div>
        </div>

      </div>

      <div class="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p class="text-[10px] text-gray-600 font-bold uppercase tracking-widest">
          © 2026 LA VEÍCULOS LTDA - 00.000.000/0001-00
        </p>
        <div class="flex gap-8">
          <img src="https://img.icons8.com/color/48/visa.png" class="h-6 opacity-50 grayscale hover:grayscale-0 transition-all" alt="Visa">
          <img src="https://img.icons8.com/color/48/mastercard.png" class="h-6 opacity-50 grayscale hover:grayscale-0 transition-all" alt="Mastercard">
          <img src="https://img.icons8.com/color/48/amex.png" class="h-6 opacity-50 grayscale hover:grayscale-0 transition-all" alt="Amex">
        </div>
      </div>

    </div>
  </footer>
</template>

<script setup>
const social = {
  facebook: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>',
  instagram: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>',
  youtube: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 20.2 0 2 2 0 0 1 1.4 1.4 24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-20.2 0A2 2 0 0 1 2.5 17Z"/><path d="m10 15 5-3-5-3z"/></svg>',
  linkedin: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>'
}
</script>
