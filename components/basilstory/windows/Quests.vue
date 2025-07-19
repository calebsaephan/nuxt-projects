<template>
    <DraggableWindow ref="wrapperRef" title="Quests" class="w-64 h-72" :scrollable="true">
        <div class="flex flex-col gap-2 text-xs">
            <div>Quest1</div>
            <div>Quest1</div>
            <div>Quest1</div>
            <div>Quest1</div>
            <div>Quest1</div>
            <div>Quest1</div>
            <div>Quest1</div>
            <div>Quest1</div>
            <div>Quest1</div>
            <div>Quest1</div>
            <div>Quest1</div>
            <div>Quest1</div>
            <div>Quest1</div>
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