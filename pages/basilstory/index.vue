<template>
    <div class="min-h-screen w-full bg-gray-100 p-4 background font-fira-sans overflow-hidden">
        <h1 class="group text-2xl font-black tracking-tight mb-6 hover:brightness-115 transition-all duration-100"><span
                class="text-emerald-600">basil</span>
            <span class="text-gray-700 group-hover:text-gray-600 transition-all duration-100">story
            </span>
        </h1>
        <div class="relative w-full h-full">
            <Quests ref="questsRef"></Quests>
            <Equipment></Equipment>
            <Inventory></Inventory>
            <Dungeons></Dungeons>
            <div class="flex gap-3">
                <PrimaryButton label="Accept" color="lime">
                </PrimaryButton>
                <PrimaryButton label="Details" color="cyan">
                </PrimaryButton>
                <PrimaryButton label="DROPS - INFO" color="emerald">
                </PrimaryButton>
            </div>
        </div>

        <footer class="absolute bottom-0 left-0">
            <div class="min-w-screen h-16 flex bg-gray-950 text-sm">
                <div class="flex flex-col gap-1 justify-center px-4">
                    <ProgressBar :progress="hp" label="HP" color="bg-rose-500" />
                    <ProgressBar :progress="mp" label="MP" color="bg-blue-400" />
                </div>
                <div class="flex ml-auto box-border">
                    <button
                        class="bg-gradient-to-b from-emerald-700 to-emerald-800 px-4 border border-emerald-950 shadow rounded-sm text-gray-50 text-shadow-lg text-xs font-semibold tracking-wider font-grotesk-sans">MENU</button>
                    <button
                        class="bg-gradient-to-b from-emerald-700 to-emerald-800 px-4 border border-emerald-950 shadow rounded-sm text-gray-50 text-shadow-lg text-xs font-semibold tracking-wider font-grotesk-sans"
                        @click.stop="handleQuestVisibility">QUESTS</button>
                    <button
                        class="bg-gradient-to-b from-emerald-600 to-emerald-700 px-4 border border-emerald-950 shadow rounded-sm text-gray-50 text-shadow-lg text-xs font-semibold tracking-wider font-grotesk-sans">DUNGEONS</button>
                    <button
                        class="bg-gradient-to-b from-emerald-600 to-emerald-700 px-4 border border-emerald-950 shadow rounded-sm text-gray-50 text-shadow-lg text-xs font-semibold tracking-wider font-grotesk-sans">MARKETPLACE</button>
                </div>
            </div>
        </footer>
    </div>
</template>

<script setup>
import PrimaryButton from '~/components/basilstory/PrimaryButton.vue'
import ProgressBar from '~/components/basilstory/ProgressBar.vue'
import Quests from '~/components/basilstory/windows/Quests.vue'
import Equipment from '~/components/basilstory/windows/Equipment.vue'
import Inventory from '~/components/basilstory/windows/Inventory.vue'
import Dungeons from '~/components/basilstory/windows/Dungeons.vue'

const hp = ref(50)
const mp = ref(70)

const questsRef = ref(null)

function handleQuestVisibility() {
    questsRef.value?.toggle()
}
</script>
<style scoped>
.background {
    background: radial-gradient(circle, #a1a0a07e 10%, transparent 10%) 0 0,
        radial-gradient(circle, #a1a0a07e 10%, transparent 10%) 10px 10px;
    background-color: var(--color-gray-200);
    background-size: 20px 20px;
    height: 100vh;
    margin: 0;
}
</style>
<style>
/* Prevent text selection globally */
* {
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
}
</style>
