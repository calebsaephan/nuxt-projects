<template>
    <div class="grid grid-flow-col text-gray-100 items-center gap-4">
        <div class="col-span-2">{{ label }}</div>

        <div class="relative w-64 bg-gray-600 rounded h-2">
            <div class="h-2 rounded transition-all" :class="color" :style="{ width: progress + '%' }"></div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    label: {
        type: String,
        default: 'HP',
    },
    progress: {
        type: Number,
        required: true,
    },
    color: {
        type: String,
        default: 'bg-emerald-500',
    },
})
</script>
