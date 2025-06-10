<script lang="ts" setup>
import { EBaseModals } from "~/types/modals/enums";
</script>

<template>
  <h2>Hello world</h2>

  <button @click="useModalStore().open(EBaseModals.login)">
    Open login modal
  </button>
  <button @click="useModalStore().open(EBaseModals.register)">
    Open register modal
  </button>
</template>
