<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from '@/shared/components/NavBar.vue'
import ContacBar from '@/shared/components/ContacBar.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <img
        alt="Foto retrato de José Miguel"
        src="../public/img/img-cv.png"
        width="125"
        height="125"
      />
      <h1>José Miguel Díaz Muñoz</h1>
      <h3>Desarrollo Web, Diseño UX/UI, Diseño Gráfico y Audiovisuales</h3>
      <div class="container">
        <ContacBar />
      </div>
      <NavBar />
    </div>
  </header>

  <RouterView class="" />
</template>

<style scoped></style>
