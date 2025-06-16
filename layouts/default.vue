<template>
	<main>
		<slot/>
	</main>

	<app-base-modal />
</template>

<script lang="ts" setup>
import AppBaseModal from "~/components/modals/AppBaseModal/AppBaseModal.vue";
</script>
