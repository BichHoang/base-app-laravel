<template>
    <div class="min-h-screen pt-16 pb-12 flex flex-col bg-white">
        <main class="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex-shrink-0 flex justify-center">
                <a href="/" class="inline-flex">
                    <span class="sr-only">LTV</span>
                </a>
            </div>
            <div class="py-8">
                <div class="text-center">
                    <p class="text-lg font-semibold text-indigo-600 uppercase tracking-wide">
                        401 error
                    </p>
                    <h1 class="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
                        401 - Page authentication
                    </h1>
                    <p class="mt-2 text-base text-gray-500">
                        Sorry, You not permission.
                    </p>
                </div>
            </div>
        </main>
        <footer class="flex-shrink-0 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8"></footer>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: '401',
})
</script>
  