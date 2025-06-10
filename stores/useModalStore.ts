import { defineStore } from "pinia";
import { ModalConfig } from "~/configs/modal.config";
import type { EBaseModals } from "~/types/modals/enums";
import type { IModal } from "~/types/modals/types";

export const useModalStore = defineStore("modalStore", {
  state: () => ({
    isOpen: false,
    modalContent: {} as IModal,
  }),
  actions: {
    /**
     * Открываем модальное окно
     */
    open(key: keyof typeof EBaseModals) {
      this.modalContent = this.getModal(key);
      this.isOpen = true;
    },

    /**
     * Закрываем модальное окно
     */
    close() {
      this.isOpen = false;
    },

    /**
     * Получаем конфиг конкретного
     * модального окна по ключу
     */
    getModal(key: keyof typeof EBaseModals) {
      return ModalConfig[key];
    },
  },
});
