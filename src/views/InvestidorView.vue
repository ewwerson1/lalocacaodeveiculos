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
  <InvestidorHistoria/>
  <InvestidorBeneficios/>
  <InvestidorPassoaPasso id="como-funciona"/>
   <InvestidorFinanceiro id="modelo-repasse" />
  <InvestidorCTA id="contato-investidor"/>
</template>
