<script setup>
  import Hero from '../components/home/Hero.vue';
  import Frota from '../components/home/Frota.vue';
  import Beneficios from '../components/home/Beneficios.vue';
  import Depoimentos from '../components/home/Depoimentos.vue';
  import Sobre from '../components/home/Sobre.vue';
  import Parceiros from '../components/home/Parceiros.vue';
  import PassoaPasso from '../components/home/PassoaPasso.vue';
</script>

<template>
  <main>
    <div class="">
       <Hero/>
    </div>
    <Frota id="motorista"/>
    <PassoaPasso id="como-funciona" />
    <Beneficios id="beneficios"/>
    <Depoimentos id="depoimentos"/>
    <Parceiros id="parceiros"/>
    <Sobre id="sobre"/>
  </main>
</template>
