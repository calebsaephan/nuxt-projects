<script setup lang="ts">
import FooterLinkGroup from './FooterLinkGroup.vue'

const companyLinks = [
    { name: 'About Us', href: 'javascript:void(0)' },
    { name: 'Partners', href: 'javascript:void(0)' },
    { name: 'Leadership', href: 'javascript:void(0)' },

    { name: 'Awards', href: 'javascript:void(0)' },
    { name: 'Press', href: 'javascript:void(0)' },
]


const careerLinks = [
    { name: 'Jobs', href: 'javascript:void(0)' },
    { name: 'Employee Benefits', href: 'javascript:void(0)' },
    { name: 'Life at Astella', href: 'javascript:void(0)' },
]

const solutionLinks = [
    { name: 'Patient Privacy', href: 'javascript:void(0)' },
    { name: 'Patient Portal', href: 'javascript:void(0)' },
    { name: 'Provider Tools', href: 'javascript:void(0)' },
    { name: 'Patient Support', href: 'javascript:void(0)' },
    { name: 'Scheduling', href: 'javascript:void(0)' },
    { name: 'Medical Database', href: 'javascript:void(0)' },
]

const productLinks = [
    { name: 'VitalView', href: 'javascript:void(0)' },
    { name: 'MediCore', href: 'javascript:void(0)' },
    { name: 'Medexa', href: 'javascript:void(0)' },
    { name: 'MediBase', href: 'javascript:void(0)' },
]

const supportLinks = [
    { name: 'FAQ', href: 'javascript:void(0)' },
    { name: 'Customer Service', href: 'javascript:void(0)' },
]
const astellaLinks = [
    { name: 'support@astella.com', href: 'javascript:void(0)' },
]

const resourceLinks = [
    { name: 'Blog', href: 'javascript:void(0)' },
    { name: 'Documentation', href: 'javascript:void(0)' },
    { name: 'Case Studies', href: 'javascript:void(0)' }
]
</script>

<template>
    <footer class="bg-neutral-100 dark:bg-gray-950 dark:text-gray-100 py-16">
        <div class="max-w-7xl mx-auto px-12">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div class="flex flex-col gap-6">
                    <FooterLinkGroup title="Company" :links="companyLinks" />
                    <FooterLinkGroup title="Careers" :links="careerLinks" />
                </div>
                <FooterLinkGroup title="Solutions" :links="solutionLinks" />
                <div class="flex flex-col gap-6">
                    <FooterLinkGroup title="Products" :links="productLinks" />
                    <FooterLinkGroup title="Resources" :links="resourceLinks" />
                </div>
                <div class="flex flex-col gap-6">
                    <FooterLinkGroup title="Support" :links="supportLinks" />
                    <FooterLinkGroup title="Astella" :links="astellaLinks" />
                </div>
            </div>

            <!-- Social Media Section -->
            <div class="mt-12 flex justify-center space-x-8 text-2xl">
                <Icon name="ri:twitter-x-line"
                    class="text-gray-400 hover:cursor-pointer hover:text-gray-600 dark:hover:text-white" />
                <Icon name="mdi:linkedin"
                    class="text-gray-400 hover:cursor-pointer hover:text-gray-600 dark:hover:text-white" />
                <Icon name="mdi:instagram"
                    class="text-gray-400 hover:cursor-pointer hover:text-gray-600 dark:hover:text-white" />
                <Icon name="mdi:youtube"
                    class="text-gray-400 hover:cursor-pointer hover:text-gray-600 dark:hover:text-white" />
            </div>



            <div
                class="flex justify-between mt-8 pt-6 border-t border-gray-300 dark:border-gray-800 text-sm text-gray-600">
                <div>
                    <p>&copy; 2025 Caleb Saephan</p>
                </div>
                <!-- Legal Links Section -->
                <div class="flex gap-4 text-sm">
                    <a href="javascript:void(0)"
                        class="text-gray-600 dark:text-gray-400 hover:text-gray-400 dark:hover:text-gray-200">Terms of
                        Use</a>
                    <a href="javascript:void(0)"
                        class="text-gray-600 dark:text-gray-400 hover:text-gray-400 dark:hover:text-gray-200">Privacy
                        Policy</a>
                    <a href="javascript:void(0)"
                        class="text-gray-600 dark:text-gray-400 hover:text-gray-400 dark:hover:text-gray-200">Cookies</a>
                </div>
            </div>
        </div>
    </footer>
</template>
