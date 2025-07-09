<template>
    <button @click="toggleDark()"
        class="relative w-10 h-6 rounded-full bg-gray-300 dark:bg-gray-600 transition-colors duration-300 px-0.5 flex items-center hover:cursor-pointer"
        aria-label="Toggle dark mode">
        <!-- Icon switch circle -->
        <span
            class="absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white dark:bg-gray-900 flex items-center justify-center text-gray-800 dark:text-gray-100 transition-transform duration-300"
            :class="{ 'translate-x-4': isDark }">
            <!-- Light (sun) SVG -->
            <svg v-if="!isDark" xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 3v1m0 16v1m8-9h1M3 12H2m15.364-6.364l.707.707M6.343 17.657l-.707.707m12.02 1.414l-.707-.707M6.343 6.343l-.707-.707M12 7a5 5 0 000 10 5 5 0 000-10z" />
            </svg>

            <!-- Dark (moon) SVG -->
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24"
                stroke="none">
                <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
            </svg>
        </span>
    </button>
</template>

<script setup>
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>
