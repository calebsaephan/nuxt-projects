<template>
    <div class="relative inline-block borders">
        <button
            class="text-shadow-lg uppercase tracking-widest text-xs px-8 py-1.5 rounded-full bg-gradient-to-br text-white font-semibold shadow-sm outline hover:brightness-110 active:brightness-95 outline-black/20"
            :class="[
                `${fromColor}`,
                `${toColor}`,
                `${outlineColor}`
            ]">
            {{ label }}
        </button>
    </div>
</template>
<style scoped>
.borders::before {
    content: "";
    position: absolute;
    z-index: 15;
    top: 1px;
    left: 1px;
    right: 1px;
    bottom: 1px;
    border: 1px solid white;
    border-radius: 9999px;
    pointer-events: none;
    mask-image: linear-gradient(to bottom, white 0%, transparent 130%);
    -webkit-mask-image: linear-gradient(to bottom, white 0%, transparent 130%);
    /* mix-blend-mode: overlay; */
    opacity: 50%;
}
</style>

<script setup>
const props = defineProps({
    label: {
        type: String,
        default: 'Button'
    },
    color: {
        type: String,
        default: 'cyan'
    },
})


const colorMap = {
    cyan: {
        from: 'from-cyan-500',
        to: 'to-cyan-700',
        outline: 'outline-cyan-800/10',
    },
    lime: {
        from: 'from-lime-500',
        to: 'to-lime-700',
        outline: 'outline-lime-800/10',
    },
    emerald: {
        from: 'from-emerald-500',
        to: 'to-emerald-700',
        outline: 'outline-emerald-800/10',
    },
}

const palette = colorMap[props.color]
const fromColor = palette.from
const toColor = palette.to
const outlineColor = palette.outline
</script>
