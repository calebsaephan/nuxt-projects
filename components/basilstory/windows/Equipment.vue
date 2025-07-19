<template>
    <DraggableWindow ref="wrapperRef" title="Equipment" class="w-80 h-96">
        <div class="grid grid-cols-5 gap-2 text-xs w-full">
            <div class="col-span-3 row-span-4 bg-gray-300 rounded"></div>
            <div v-for="i in 18" :key="i" class="bg-gray-300 rounded aspect-square"></div>
        </div>
    </DraggableWindow>
</template>
<script setup>
import DraggableWindow from './DraggableWindow.vue'

const wrapperRef = ref(null)

defineExpose({
    toggle: () => wrapperRef.value?.toggle(),
})
</script>