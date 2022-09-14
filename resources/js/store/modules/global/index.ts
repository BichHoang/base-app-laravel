import { defineStore } from 'pinia';
import { Locations } from '../../../types/common';

export const globalStore = defineStore('global', {
    state: () => ({
        loading: false,
        local: 'vi',
    }),

    actions: {
        async actLoading(status: boolean) {
            this.loading = status;
        },
        actChangeLocal(local: keyof Locations) {
            this.local = local;
        }
    },
})
