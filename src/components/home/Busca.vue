<template>
  <section class="relative bg-[#FBFDFA] pt-22 font-sans">
    <div class="container mx-auto px-4">
      <div class="relative z-30 -mt-32 md:-mt-40">
        <div class="bg-white rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] p-2 md:p-4 border border-gray-100">

          <div class="flex flex-col lg:flex-row items-stretch lg:items-center">

            <div class="flex-1 p-6 flex items-start gap-4 hover:bg-gray-50 rounded-[2rem] transition-colors cursor-pointer group">
              <div class="mt-1 text-yellow-500 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div class="flex-1">
                <label class="block text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-1">Localização</label>
                <select class="w-full bg-transparent border-none p-0 font-bold text-black focus:ring-0 cursor-pointer appearance-none text-sm md:text-base">
                  <option>Onde você retira?</option>
                  <option>São Paulo - Centro</option>
                  <option>Aeroporto Guarulhos (GRU)</option>
                  <option>Aeroporto Congonhas (CGH)</option>
                </select>
              </div>
            </div>

            <div class="hidden lg:block w-[1px] h-12 bg-gray-100 mx-2"></div>

            <div class="flex-1 p-6 flex items-start gap-4 hover:bg-gray-50 rounded-[2rem] transition-colors cursor-pointer group">
              <div class="mt-1 text-yellow-500 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
              </div>
              <div class="flex-1">
                <label class="block text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-1">Retirada</label>
                <input type="date" class="w-full bg-transparent border-none p-0 font-bold text-black focus:ring-0 cursor-pointer text-sm md:text-base uppercase">
              </div>
            </div>

            <div class="hidden lg:block w-[1px] h-12 bg-gray-100 mx-2"></div>

            <div class="flex-1 p-6 flex items-start gap-4 hover:bg-gray-50 rounded-[2rem] transition-colors cursor-pointer group">
              <div class="mt-1 text-yellow-500 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/><path d="m9 16 2 2 4-4"/></svg>
              </div>
              <div class="flex-1">
                <label class="block text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-1">Devolução</label>
                <input type="date" class="w-full bg-transparent border-none p-0 font-bold text-black focus:ring-0 cursor-pointer text-sm md:text-base uppercase">
              </div>
            </div>

            <div class="p-4">
              <button class="w-full lg:w-auto bg-black text-yellow-400 px-10 py-6 rounded-[1.8rem] font-black text-xs uppercase tracking-[0.2em] hover:bg-yellow-400 hover:text-black transition-all duration-500 shadow-2xl shadow-black/20 flex items-center justify-center gap-3 group/btn">
                <span>Ver Disponibilidade</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="group-hover/btn:translate-x-1 transition-transform">
                  <path d="M5 12h14m-7-7 7 7-7 7"/>
                </svg>
              </button>
            </div>

          </div>
        </div>
      </div>

      <div class="mt-8 flex justify-center items-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
        <span class="flex items-center gap-2">
          <svg class="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10"/></svg>
          Cancelamento Grátis
        </span>
        <span class="w-1 h-1 bg-gray-300 rounded-full"></span>
        <span class="flex items-center gap-2">
          <svg class="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10"/></svg>
          Sem Taxas Ocultas
        </span>
      </div>
    </div>
  </section>
</template>
