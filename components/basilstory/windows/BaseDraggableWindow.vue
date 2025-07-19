<template>
    <div ref="wrapperRef"
        class="flex flex-col px-3 py-2 box-border border bg-slate-950/75 border-gray-400 text-gray-200 rounded-lg shadow-xs shadow-gray-950/50 overflow-hidden"
        :style="[windowStyle, zIndex]" @mousedown="onMouseDown">
        <!-- Title -->
        <div
            class="flex justify-between mb-2 text-emerald-400 font-semibold tracking-wider text-sm uppercase text-shadow-lg">
            <span>{{ title }}</span>
            <div>
                <button
                    class="text-gray-400 hover:text-red-500 transition-colors duration-50 text-lg leading-none font-bold"
                    @click.stop="emit('close')" title="Close">
                    <Icon name="ph:x" class="w-5 h-5" />
                </button>
            </div>
        </div>

        <!-- Content -->
        <div class="flex-grow overflow-hidden rounded-lg bg-gray-100 text-gray-700 pr-1 py-1">
            <div class="h-full w-full px-4 py-2 custom-scroll box-border" :class="scrollable ? 'overflow-y-auto ' : ''">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, computed, onUnmounted, onMounted, nextTick } from "vue"
import { useZLayer } from "~/composables/useZLayer"

const { localZ, bringToFront } = useZLayer()

// Events
const emit = defineEmits(["close", "toggle"])

// Props
const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    scrollable: {
        type: Boolean,
        required: false,
    },
    draggable: {
        type: Boolean,
        default: true,
    },
})

const wrapperRef = ref(null)

const zIndex = computed(() => ({ zIndex: localZ.value }))

const windowStyle = reactive({
    position: "absolute",
    top: "",
    left: "",
})

const isDragging = ref(false)
const initialX = ref(0)
const initialY = ref(0)
const offsetX = ref(0)
const offsetY = ref(0)

function centerWindow() {
    if (!wrapperRef.value) return

    const el = wrapperRef.value
    const winWidth = window.innerWidth
    const winHeight = window.innerHeight

    const width = el.offsetWidth
    const height = el.offsetHeight + 128

    windowStyle.left = `${(winWidth - width) / 2}px`
    windowStyle.top = `${(winHeight - height) / 2}px`
}

onMounted(async () => {
    await nextTick()
    if (props.draggable) {
        windowStyle.top = `100px`
        windowStyle.left = `100px`
    } else {
        centerWindow()
    }
})

const onMouseDown = (event) => {
    bringToFront()
    if (!props.draggable) return
    startDrag(event)
}

function onDrag(event) {
    if (!isDragging.value) return

    const dx = event.clientX - initialX.value
    const dy = event.clientY - initialY.value

    windowStyle.left = `${offsetX.value + dx}px`
    windowStyle.top = `${offsetY.value + dy}px`
}

function endDrag() {
    isDragging.value = false
    document.removeEventListener("mousemove", onDrag)
    document.removeEventListener("mouseup", endDrag)
}

function startDrag(event) {
    if (!props.draggable) return

    isDragging.value = true
    initialX.value = event.clientX
    initialY.value = event.clientY

    offsetX.value = parseFloat(windowStyle.left)
    offsetY.value = parseFloat(windowStyle.top)

    document.addEventListener("mousemove", onDrag)
    document.addEventListener("mouseup", endDrag)
}

onUnmounted(() => {
    document.removeEventListener("mousemove", onDrag)
    document.removeEventListener("mouseup", endDrag)
})
</script>


<style scoped>
.custom-scroll::-webkit-scrollbar {
    width: 6px;
}

.custom-scroll::-webkit-scrollbar-track {
    background: transparent;
}

.custom-scroll::-webkit-scrollbar-thumb {
    background-color: rgba(100, 100, 100, 0.4);
    border-radius: 3px;
}

.custom-scroll {
    scrollbar-width: thin;
    scrollbar-color: rgba(100, 100, 100, 0.4) transparent;
}
</style>
