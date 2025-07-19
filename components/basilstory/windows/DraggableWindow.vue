<template>
    <BaseWindow v-show="isOpen" :title="title" @close="handleClose" :draggable="true">
        <slot></slot>
    </BaseWindow>
</template>
<script setup>
import BaseWindow from '~/components/basilstory/windows/BaseDraggableWindow.vue'
import { defineExpose } from 'vue'

const props = defineProps({
    title: {
        type: String,
        required: true,
    },
})

const isOpen = ref(true)

function handleClose() {
    isOpen.value = false
}

function toggle() {
    isOpen.value = !isOpen.value
}

defineExpose({
    toggle
})

</script>