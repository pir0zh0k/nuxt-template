<template>
	<button
		:class="[$style['btn'], ...classList]"
		type="button" />
</template>

<script lang="ts" setup>
const props = defineProps<{
	size?: "xl" | "lg" | "md";
}>();

const $style = useCssModule();

const classList = computed(() => [$style[`--size-${props.size}`]]);
</script>

<style lang="scss" src="./AppButton.scss" module></style>
