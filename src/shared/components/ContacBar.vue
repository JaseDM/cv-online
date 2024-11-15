<script setup lang="ts">
import { DevicePhoneMobileIcon, EnvelopeIcon, ArrowDownTrayIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <div class="contact-cont">
    <div class="item-contac">
      <a href="tel:+34625030452"><DevicePhoneMobileIcon class="heroicon" /> <br />¿Hablamos?</a>
    </div>
    <div class="item-contac">
      <a href="mailTo:jase@soulmarket.es"
        ><EnvelopeIcon class="heroicon" /> <br />Espero tu email</a
      >
    </div>
    <div class="item-contac">
      <a href="../../../public/cv/cv-jose-miguel.pdf" download="cv-jose-miguel.pdf"
        ><ArrowDownTrayIcon class="heroicon" /> <br />CV PDF</a
      >
    </div>
  </div>
</template>

<style scoped></style>
