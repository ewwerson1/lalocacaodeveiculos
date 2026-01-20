<script setup>
import InvestidorHero from '../components/investidor/InvestidorHero.vue'
import InvestidorPassoaPasso from '../components/investidor/InvestidorPassoaPasso.vue'
import InvestidorFinanceiro from '../components/investidor/InvestidorFinanceiro.vue'
import InvestidorCTA from '../components/investidor/InvestidorCTA.vue'
</script>

<template>
  <InvestidorHero />
  <InvestidorFinanceiro id="modelo-repasse" />
  <InvestidorPassoaPasso id="como-funciona"/>
  <InvestidorCTA id="contato-investidor"/>
</template>
