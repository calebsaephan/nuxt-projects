<template>
    <Window ref="wrapperRef" title="Dungeons" class="w-256 h-156" :scrollable="true">
        <div class="flex flex-col gap-2 text-xs">
            <div>
                <StoneDungeon></StoneDungeon>
            </div>
            <StoneDungeon></StoneDungeon>
            <StoneDungeon></StoneDungeon>
            <div class="grid grid-cols-2 gap-2">
                <div class="col-start-1">
                    <div class="grid grid-cols-4 gap-2">
                        <StoneDungeon></StoneDungeon>
                        <StoneDungeon></StoneDungeon>
                        <StoneDungeon></StoneDungeon>
                        <StoneDungeon></StoneDungeon>
                        <StoneDungeon></StoneDungeon>
                        <StoneDungeon></StoneDungeon>
                        <StoneDungeon></StoneDungeon>
                        <StoneDungeon></StoneDungeon>
                        <StoneDungeon></StoneDungeon>
                        <StoneDungeon></StoneDungeon>
                    </div>
                </div>
                <div>
                    <div class="row-span-full h-full">
                        <StoneDungeon class="h-full"></StoneDungeon>
                    </div>
                </div>

            </div>
            <div class="grid grid-cols-2 gap-2">
                <StoneDungeon></StoneDungeon>
                <StoneDungeon></StoneDungeon>
            </div>
            <div class="grid grid-cols-4 gap-2">
                <StoneDungeon></StoneDungeon>
                <StoneDungeon></StoneDungeon>
                <StoneDungeon></StoneDungeon>
                <StoneDungeon></StoneDungeon>
            </div>
        </div>
    </Window>
</template>
<script setup>
import Window from './Window.vue'
import StoneDungeon from '../dungeons/StoneDungeon.vue'

const wrapperRef = ref(null)

defineExpose({
    toggle: () => wrapperRef.value?.toggle(),
})
</script>
