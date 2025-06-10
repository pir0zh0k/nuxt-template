<script lang="ts" setup>
const props = defineProps<{
  size?: "xl" | "lg" | "md";
}>();

const $style = useCssModule();

const classList = computed(() => [$style[`--size-${props.size}`]]);
</script>

<template>
  <button :class="[$style['btn'], ...classList]"></button>
</template>

<style lang="scss" sec="./AppButton.scss" module></style>
