<script lang="ts" setup>
const modalStore = useModalStore();
const $style = useCssModule();

const closeOutside = () => {
  modalStore.modalContent.hasOutsideClose && modalStore.close();
};

const closeOnEscKeyDown = (e: KeyboardEvent) => {
  if (modalStore.modalContent.canBeCloseByEscape && e.key === 'Escape') {
    modalStore.close();
  }
};

onMounted(() => {
  window.addEventListener('keydown', closeOnEscKeyDown);
});

onUnmounted(() => {
  window.removeEventListener('keydown', closeOnEscKeyDown);
});

const classList = computed(() => [
  $style['modal'],
  $style[`--position-${modalStore.modalContent.position}`],
]);
</script>

<template>
   <Teleport to="body"
    >
    <div
      @click.self="closeOutside"
      v-if="modalStore.isOpen"
      :class="$style['modal-wrapper']"
    >

      <div
        :class="[...classList]"
        :style="{ width: `${modalStore.modalContent.width}px` }"
      >

        <div v-if="modalStore.modalContent.head" :class="$style['modal__head']">

          <h2
            :class="$style['modal__title']"
            v-if="modalStore.modalContent.head.title"
          >
             {{ modalStore.modalContent.head.title }}
          </h2>

          <div
            v-if="modalStore.modalContent.head.hasCloseButton"
            @click="modalStore.close"
            :class="$style['modal__close']"
          >
             &#x2715;
          </div>

        </div>

        <div v-if="modalStore.modalContent.body" :class="$style['modal__body']">

          <p
            v-if="modalStore.modalContent.body.description"
            :class="$style['modal__description']"
          >
             {{ modalStore.modalContent.body.description }}
          </p>
           <component
            v-if="modalStore.modalContent.body.component"
            :is="modalStore.modalContent.body.component"
            v-bind="modalStore.modalContent.props"
          />
        </div>

      </div>

    </div>
     </Teleport
  >
</template>

<style lang="scss" src="./AppBaseModal.scss" module></style>

