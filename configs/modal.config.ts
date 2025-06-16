import { EBaseModals } from "~/types/modals/enums";
import type { ModalConfigType } from "~/types/modals/types";
import Test from "~/components/modules/test/Test.vue";

export const ModalConfig: ModalConfigType = {
	[EBaseModals.login]: {
		head: {
			title: "Login",
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
	[EBaseModals.register]: {
		head: {
			title: "Register",
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
