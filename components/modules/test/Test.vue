<script lang="ts" setup>
defineProps<{
  userId: number;
}>();
</script>

<template>
  <div>
    <h1>Test component for integrate to modal</h1>
    <p>I am a good vue-developer</p>
    <h3>User id: {{ userId }}</h3>
  </div>
</template>
