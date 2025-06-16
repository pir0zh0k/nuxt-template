import type { Component } from 'vue';
import type { EBaseModals, EModalPosition } from './enums';

type keyType = keyof typeof EBaseModals;

export type ModalConfigType = {
  [K in keyType]: IModal;
};

export interface IModal {
  head?: {
    title?: string;
    hasCloseButton?: boolean;
  };
  body?: {
    component?: ReturnType<typeof defineAsyncComponent>;
    description?: string;
  };
  hasOutsideClose?: boolean;
  canBeCloseByEscape?: boolean;
  width?: number;
  position?: keyof typeof EModalPosition;
  props?: {
    [key: string]: any;
  };
}
