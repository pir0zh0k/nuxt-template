<template>
	<teleport to="body">
		<div
			v-if="modalStore.isOpen"
			:class="$style['modal-wrapper']"
			@click.self="closeOutside"
		>
			<div :class="$style['modal']">
				<div
					v-if="modalStore.modalContent.head"
					:class="$style['modal__head']">
					<h2
						v-if="modalStore.modalContent.head.title"
						:class="$style['modal__title']"
					>
						{{ modalStore.modalContent.head.title }}
					</h2>
					<div
						v-if="modalStore.modalContent.head.hasCloseButton"
						:class="$style['modal__close']"
						@click="modalStore.close"
					>
						&#x2715;
					</div>
				</div>
				<div
					v-if="modalStore.modalContent.body"
					:class="$style['modal__body']">
					<p
						v-if="modalStore.modalContent.body.description"
						:class="$style['modal__description']"
					>
						{{ modalStore.modalContent.body.description }}
					</p>

					<component
						:is="modalStore.modalContent.body.component"
						v-if="modalStore.modalContent.body.component"
						v-bind="modalStore.modalContent.props"
					/>
				</div>
			</div>
		</div>
	</teleport>
</template>

<script lang="ts" setup>
const modalStore = useModalStore();

const closeOutside = () => {
	if(modalStore.modalContent.hasOutsideClose) {
		modalStore.close();
	}
};

const closeOnEscKeyDown = (e: KeyboardEvent) => {
	if (modalStore.modalContent.canBeCloseByEscape && e.key === "Escape") {
		modalStore.close();
	}
};

onMounted(() => {
	window.addEventListener("keydown", closeOnEscKeyDown);
});

onUnmounted(() => {
	window.removeEventListener("keydown", closeOnEscKeyDown);
});
</script>

<style lang="scss" src="./AppBaseModal.scss" module></style>
