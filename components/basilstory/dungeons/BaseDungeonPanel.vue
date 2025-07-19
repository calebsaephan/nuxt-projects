<template>
    <div class="group relative w-full h-24 rounded-lg bg-cover bg-center overflow-hidden highlight">
        <div class="halftone"></div>
        <div class="halftone-color"></div>
        <div class="halftone-bg-color"></div>
        <div class="halftone-fade"></div>
        <div class="absolute inset-0 bg-gray-600 mix-blend-multiply transition-all duration-50" :class="color">
        </div>
        <img src="/images/basilstory/22975-2.png"
            class="absolute left-8 top-1/2 object-auto pointer-events-none boss" />
        <div class="absolute inset-0 bg-white mix-blend-overlay opacity-0 group-active:opacity-30"></div>
    </div>
</template>


<script setup>
defineProps({
    color: {
        type: String,
        default: "group-hover:bg-emerald-600"
    }
})
</script>

<style scoped>
.halftone {
    --dot: radial-gradient(closest-side, #777, #fff calc(100%/sqrt(2)));
    --pattern: var(--dot) 0 0/ 2em 2em, var(--dot) 1em 1em/ 2em 2em;
    position: absolute;
    inset: 0;
    background:
        var(--pattern,
            radial-gradient(closest-side, #777, #fff) 0/ 1em 1em space),
        var(--map,
            linear-gradient(-90deg, #888, transparent 40%));
    background-blend-mode: multiply;
    filter: contrast(16);
    mask-image: linear-gradient(to left, black -10%, transparent 60%);
    -webkit-mask-image: linear-gradient(to left, black -10%, transparent 60%);
}

.halftone-color {
    position: absolute;
    inset: 0;
    background: linear-gradient(-45deg, green, yellow);
    mix-blend-mode: screen;
}

.halftone-fade {
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: linear-gradient(to left, black 0%, transparent 50%, transparent 70%);
    opacity: 0.8;
}

.highlight::before {
    content: "";
    position: absolute;
    z-index: 15;
    top: 1px;
    left: 1px;
    right: 1px;
    bottom: 1px;
    border: 2px solid white;
    border-radius: .45rem;
    pointer-events: none;
    mask-image: linear-gradient(to bottom, white 0%, transparent 110%);
    -webkit-mask-image: linear-gradient(to bottom, white 0%, transparent 110%);
    /* mix-blend-mode: overlay; */
    opacity: 50%;
}

.boss {
    image-rendering: pixelated;
    scale: 2;
}
</style>