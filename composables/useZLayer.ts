import { ref } from "vue"

const globalZ = ref(10)

export function useZLayer() {
    globalZ.value++
    const localZ = ref(globalZ.value)

    function bringToFront() {
        if (localZ.value < globalZ.value) {
            globalZ.value++
            localZ.value = globalZ.value
        }
    }

    function isTopMost() {
        return localZ.value === globalZ.value
    }

    return {
        localZ,
        bringToFront,
        isTopMost,
    }
}
