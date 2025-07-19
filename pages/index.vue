<template>
    <div class="font-inter bg-slate-400 h-screen w-screen">
        <div class="max-w-lg px-16">
            <h1>Nuxt Projects</h1>
            <p>Check out my frontend projects created with Nuxt and Tailwind</p>
            <ul class="list-disc pl-6">
                <li class="group relative">
                    <NuxtLink to="/astella"
                        class="inline-flex items-center px-4 py-2 font-bold text-amber-800 hover:bg-amber-200">
                        Astella
                        <Icon name="mdi:arrow-right" class="w-5 h-5 text-amber-800 opacity-0 group-hover:opacity-100" />
                    </NuxtLink>
                </li>
                <li class="group relative">
                    <NuxtLink to="/basilstory"
                        class="inline-flex items-center px-4 py-2 font-bold text-amber-800 hover:bg-amber-200">
                        basilstory
                        <Icon name="mdi:arrow-right" class="w-5 h-5 text-amber-800 opacity-0 group-hover:opacity-100" />
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </div>
</template>