<template>
	<h2>Hello world</h2>
	<button
		type="button"
		@click="useModalStore().open(EBaseModals.login)">
		Open login modal
	</button>
	<button
		type="button"
		@click="useModalStore().open(EBaseModals.register)">
		Open register modal
	</button>
</template>

<script lang="ts" setup>
import { EBaseModals } from '~/types/modals/enums';
</script>

