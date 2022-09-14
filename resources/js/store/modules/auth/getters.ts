import { defineStore } from 'pinia';
import { computed } from 'vue';
import { User } from '../../../models/user';
import { useState } from './state';

export const useGetters = defineStore('auth.getters', () => {
    const state = useState()
    const getAuthenticationState = computed((): boolean => state.isAuthenticated)
    const getCurrentUser = computed((): User|null => state.currentUser)
    return { getAuthenticationState, getCurrentUser }
})
