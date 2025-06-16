import Test from '~/components/modules/test/Test.vue';
import { EBaseModals } from '~/types/modals/enums';
import type { ModalConfigType } from '~/types/modals/types';

export const ModalConfig: ModalConfigType = {
  [EBaseModals.login]: {
    head: {
      title: 'Login',
      hasCloseButton: true,
    },
    body: {
      component: markRaw(Test),
    },
    hasOutsideClose: true,
    canBeCloseByEscape: true,
    width: 800,
    props: {
      userId: 1,
    },
  },
  [EBaseModals.register]: {
    head: {
      title: 'Register',
      hasCloseButton: true,
    },
    body: {
      component: markRaw(Test),
    },
    hasOutsideClose: true,
    canBeCloseByEscape: true,
    props: {
      userId: 1,
    },
  },
};
