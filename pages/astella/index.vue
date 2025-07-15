<script setup>
import { ref } from 'vue'
import Footer from '~/components/astella/footer/Footer.vue'
import FeatureCard from '~/components/astella/section/FeatureCard.vue'

const isOpen = ref(false)

onBeforeMount(() => {
    document.body.classList.remove('no-scroll')
})

function toggleOpen() {
    isOpen.value = !isOpen.value

    if (isOpen.value) {
        document.body.classList.add('no-scroll')  // Disable page scroll
    } else {
        document.body.classList.remove('no-scroll')  // Enable page scroll
    }
}

const routes = [
    { name: "Home", to: "/" },
    { name: "Products", to: "#" },
    { name: "Services", to: "#" },
    { name: "Company", to: "#" },
    { name: "Contact", to: "#" },
]
</script>

<template>
    <div class="font-manrope">

        <nav
            class="relative z-100 bg-offwhite-100 dark:bg-black border-b border-gray-50 dark:border-gray-900 px-6 py-5">

            <div class="max-w-7xl mx-auto flex justify-between items-center">
                <a href="/astella" class="text-2xl font-bold text-primary">
                    astella
                </a>

                <!-- Desktop Links -->
                <div class="hidden md:flex space-x-6 items-center">
                    <NuxtLink v-for="(route, index) in routes" :key="index" :to="route.to"
                        class="text-gray-700 dark:text-gray-300 hover:text-primary">
                        {{ route.name }}
                    </NuxtLink>
                    <DarkToggle />
                </div>

                <div class="flex gap-5 items-center md:hidden">
                    <DarkToggle class="md:hidden" />

                    <!-- Mobile Menu Button -->
                    <button @click="toggleOpen()"
                        class="relative z-50 flex flex-col justify-center items-center w-8 h-8 md:hidden focus:outline-none">
                        <span :class="[
                            'block h-0.5 w-6 bg-gray-900 dark:bg-gray-50 transform transition duration-300 ease-in-out',
                            isOpen ? 'rotate-45 translate-y-1.5' : ''
                        ]" />
                        <span :class="[
                            'block h-0.5 w-6 bg-gray-900 dark:bg-gray-50 my-1 transition-all duration-300 ease-in-out',
                            isOpen ? 'opacity-0' : ''
                        ]" />
                        <span :class="[
                            'block h-0.5 w-6 bg-gray-900 dark:bg-gray-50 transform transition duration-300 ease-in-out',
                            isOpen ? '-rotate-45 -translate-y-1.5' : ''
                        ]" />
                    </button>
                </div>

            </div>
        </nav>
        <!-- Mobile Dropdown -->
        <div :class="[
            'md:hidden absolute z-100 w-full px-4 font-public-sans font-[500] tracking-tight overflow-hidden transition-all duration-200 ease-in bg-offwhite-100 dark:bg-gray-950',
            isOpen ? 'h-screen max-h-screen pt-2' : 'h-0 max-h-0 pt-0'
        ]">
            <NuxtLink v-for="(route, index) in routes" :key="index" :to="route.to"
                class="block px-6 py-4 text-gray-800 dark:text-gray-300 hover:text-primary border-b-[1px] border-b-gray-300 dark:border-b-gray-800">
                {{ route.name }}
            </NuxtLink>
        </div>

        <div class="flow-root">
            <section
                class="relative bg-gradient-to-b bg-offwhite-100 to-neutral-50 dark:from-black dark:to-slate-800 py-18 mb-10 md:py-0 md:h-screen flex items-center">
                <div class="absolute inset-0 hero-bg dark:hidden">
                </div>
                <div
                    class="z-10 dark:text-slate-50 max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center justify-between px-8 lg:px-12 w-full">
                    <div class="w-full md:w-2xl flex flex-col gap-16">
                        <h1 class="leading-none font-black">Transform patient care and streamline operations with
                            precision.</h1>
                        <div class="text-gray-500 dark:text-gray-400 text-xl font-roboto">
                            <p>Better care begins with intelligent systems to optimize your operations, secure patient
                                data, and
                                predict the future so you can stay ahead.
                            </p>
                        </div>
                        <div class="text-gray-500">
                            <a href="#" class="hover:text-gray-800 dark:hover:text-gray-200 border-b border-dotted">
                                <Icon name="mdi:book-open-page-variant" class="w-5 h-5 mr-2" /> Learn how
                                <strong class="text-primary">astella</strong>
                                can unlock the full potential of healthcare services
                            </a>
                        </div>
                    </div>
                    <div
                        class="w-full md:w-xl h-64 md:h-screen overflow-hidden md:overflow-visible rounded-lg flex items-center justify-center">
                        <video class="object-cover  rounded-lg shadow-lg " autoplay muted loop playsinline>
                            <source src="/videos/1192.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </section>
            <section class="relative z-10 bg-offwhite-100 dark:bg-nextlight rounded-t-4xl -mt-18 py-36 overflow-hidden">
                <!-- Background Video -->
                <div class="absolute top-0 left-0 w-full h-full -z-10">
                    <video class="w-full h-full object-cover" autoplay muted loop playsinline>
                        <source src="/videos/9165.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <!-- Blur Overlay -->
                    <div class="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
                </div>

                <!-- Foreground Content -->
                <div class="relative flex flex-col gap-8 max-w-7xl mx-auto justify-center items-center px-8 lg:px-0">
                    <h1 class="text-center text-gray-50 lg:max-w-4xl" style="font-size: calc(16px + 2vw);">
                        One platform for all your operations with AI-powered solutions
                    </h1>
                    <div class="lg:max-w-xl w-full">
                        <video class="rounded-lg shadow-lg w-full" autoplay muted loop playsinline>
                            <source src="/videos/9165.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </section>

            <section class="relative bg-gray-200 dark:bg-slate-800 py-36 dark:text-gray-100">
                <FeatureCard>
                    <div class="max-w-lg">
                        <h3 class="text-2xl font-semibold mb-3 border-l-[24px] pl-2 border-primary">Optimized tools for
                            providers</h3>
                        <p class="text-lg text-gray-600 dark:text-gray-400">
                            AI-powered controls to help navigate and assist with complex issues quickly.
                        </p>
                    </div>
                    <div
                        class="flex justify-center items-center w-full mx-auto md:max-w-2xl md:max-h-72 max-w-md max-h-64 overflow-hidden rounded-lg">
                        <video class="w-full h-auto rounded-lg shadow-lg" autoplay muted loop playsinline>
                            <source src="/videos/9237.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </FeatureCard>
                <FeatureCard>
                    <div class="max-w-lg order-1 lg:order-2 ">
                        <h3 class="text-2xl font-semibold mb-3 border-l-[24px] pl-2 border-primary">Effortless tools for
                            patient privacy & data</h3>
                        <p class="text-lg text-gray-600 dark:text-gray-400">
                            Secure data solutions so you can focus on patient care.
                        </p>
                    </div>
                    <div
                        class="order-2 lg:order-1 flex justify-center items-center w-full mx-auto md:max-w-2xl md:max-h-72 max-w-md max-h-64 overflow-hidden rounded-lg">
                        <video class="w-full h-auto rounded-lg shadow-lg" autoplay muted loop playsinline>
                            <source src="/videos/9237.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </FeatureCard>
                <FeatureCard>
                    <div class="max-w-lg">
                        <h3 class="text-2xl font-semibold mb-3 border-l-[24px] pl-2 border-primary">Full picture
                            operations</h3>
                        <p class="text-lg text-gray-600 dark:text-gray-400">
                            With the power of AI, users can get a full overview and speed up operations by 5x.
                        </p>
                    </div>
                    <div
                        class="flex justify-center items-center w-full mx-auto md:max-w-2xl md:max-h-72 max-w-md max-h-64 overflow-hidden rounded-lg">
                        <video class="w-full h-auto rounded-lg shadow-lg" autoplay muted loop playsinline>
                            <source src="/videos/9237.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </FeatureCard>
            </section>

        </div>
    </div>
    <Footer />
</template>

<style>
/* Prevent page scroll when dropdown is open */
body.no-scroll {
    overflow: hidden;
}

.hero-bg {
    mask-image: radial-gradient(circle at 20% -90%, transparent 10%, black 170%);
    -webkit-mask-image: radial-gradient(circle at 20% -90%, transparent 10%, black 170%);
    mask-repeat: no-repeat;
    mask-size: cover;
    background-image: url('/images/ripples.png');
    background-repeat: repeat, no-repeat;
    background-blend-mode: multiply;
}
</style>