<template>
    <div>
        <h6 class="font-semibold text-sm mb-2 uppercase text-gray-400 dark:text-gray-500">{{ title }}</h6>
        <ul class="text-gray-700 dark:text-gray-300">
            <li v-for="(link, index) in links" :key="index" class="my-0.5">
                <a :href="link.href" class="hover:text-gray-400 dark:hover:text-gray-500">
                    {{ link.name }}
                </a>
            </li>
        </ul>
    </div>
</template>

<script setup>
defineProps({
    title: {
        type: String,
        default: 'CATEGORY'
    },
    links: {
        type: Array,
        default: () => [
            { name: 'Link 1', href: 'javascript:void(0)' },
            { name: 'Link 2', href: 'javascript:void(0)' },
            { name: 'Link 3', href: 'javascript:void(0)' }
        ]
    }
})
</script>