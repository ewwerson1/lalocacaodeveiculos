<script setup>
import InvestidorHero from '../components/investidor/InvestidorHero.vue'
import InvestidorPassoaPasso from '../components/investidor/InvestidorPassoaPasso.vue'
import InvestidorFinanceiro from '../components/investidor/InvestidorFinanceiro.vue'
import InvestidorCTA from '../components/investidor/InvestidorCTA.vue'
import InvestidorBeneficios from '../components/investidor/InvestidorBeneficios.vue'
import InvestidorHistoria from '@/components/investidor/InvestidorHistoria.vue'
</script>

<template>
  <InvestidorHero />
  <InvestidorPassoaPasso id="como-funciona"/>
  <InvestidorHistoria id="ciclo"/>
  <InvestidorBeneficios id="beneficios"/>
  <InvestidorFinanceiro id="quem-somos" />
  <InvestidorCTA id="contato-investidor"/>
</template>
