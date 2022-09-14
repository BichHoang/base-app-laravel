<template>
    <section class="bg-gray-50 dark:bg-gray-900">
        <LoadingOverlay v-if="loading" />
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <router-link to="/" class="flex items-center mb-6 text-2xl font-semibold text-base-primary">
                <img class="bg-base-primary h-8 w-8" src="/images/logo.png" />
                <span class="text-base-primary self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                    {{ $t('app_name') }}
                </span>
            </router-link>
            <div
                class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1
                        class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        {{ $t('title.sign_in') }}
                    </h1>
                    <form class="space-y-4 md:space-y-6" action="#">
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                {{ $t('label.email') }}
                            </label>
                            <input type="email" name="email" id="email" @change="validate('email')"
                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm placeholder-gray-400 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="name@company.com" v-model="email">
                            <p class="text-base-danger text-sm pt-1">{{ errorEmail }}</p>
                        </div>
                        <div>
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                {{ $t('label.password') }}
                            </label>
                            <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg
                                placeholder-gray-400 focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 
                                dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
                                dark:focus:ring-blue-500 dark:focus:border-blue-500" v-model="password"
                                @change="validate('password')">
                            <p class="text-base-danger text-sm pt-1">{{ errorPassword }}</p>
                        </div>
                        <div class="flex items-center justify-between">
                            <div class="flex items-start">
                                <router-link to="/" class="text-sm font-medium text-base-info hover:underline">
                                    {{ $t('link.forgot_password') }}
                                </router-link>
                            </div>

                        </div>
                        <button type="submit" @click.prevent="login" :disabled="isDisableLoginBtn"
                            class="w-full bg-base-primary text-white py-2 rounded-md"
                            :class="[isDisableLoginBtn ? 'cursor-not-allowed opacity-50' : 'hover:opacity-50']" >
                            {{ $t('button.sign_in') }}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import useStore from '../../store';
import validation from '../../utils/validation/validation';
import LoadingOverlay from '../common/LoadingOverlay.vue';

const store = useStore();

export default defineComponent({
    components: {
        LoadingOverlay
    },

    setup() {
        const loading = computed(() => store.global.loading);
        return {
            email: '',
            password: '',
            rules: {
                'email': 'required|email',
                'password': 'required|minLength:6|maxLength:60'
            },
            errorEmail: '',
            errorPassword: '',
            loading,
        }
    },

    methods: {
        login() {
            this.validateEmail();
            this.validatePassword();
            if (!this.isDisableLoginBtn) {
                store.global.actLoading(true);
                store.auth.actLogin({
                    email: "user.test.001@test.com",
                    password: "12345678"
                })
            }
        },

        validate(fieldName: string) {
            switch (fieldName) {
                case 'email':
                    this.validateEmail();
                    break;
                case 'password':
                    this.validatePassword();
                    break;
                default:
                    break;
            }
        },

        validateEmail() {
            let errEmail = validation.oneField(this.rules.email, this.email);
            if (errEmail) {
                this.errorEmail = errEmail[0];
            } else {
                this.errorEmail = '';
            }
        },

        validatePassword() {
            let errPass = validation.oneField(this.rules.password, this.password);
            if (errPass) {
                this.errorPassword = errPass[0];
            } else {
                this.errorPassword = '';
            }
        }
    },

    computed: {
        isDisableLoginBtn(): boolean {
            return (!!this.errorEmail || !!this.errorPassword);
        }
    }
})
</script>
