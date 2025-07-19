<template>
    <DraggableWindow ref="wrapperRef" title="Inventory" class="w-80 h-96" :scrollable="true">
        <div class="grid grid-cols-5 gap-2 text-xs w-full">
            <div v-for="i in 100" :key="i" class="bg-gray-300 rounded aspect-square"></div>
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