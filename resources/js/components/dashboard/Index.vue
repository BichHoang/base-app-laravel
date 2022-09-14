<template>
    <div>
        <h1>This is dashboard page</h1>
        <button class="bg-gray-300 p-2 mr-2" @click="getUserInfo">Get User Info</button>
        <button class="bg-gray-300 p-2" @click="logout">Logout</button>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import useStore from '../../store';

const store = useStore();

export default defineComponent({
    methods: {
        logout() {
            store.auth.actLogout();
        },

        getUserInfo() {
            store.auth.actGetCurrentUserInfo();
            console.log(store.auth.currentUser)
        }
    }
});
</script>
