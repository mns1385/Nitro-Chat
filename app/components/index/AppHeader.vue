<script setup lang="ts">
import {UserCircle, SendHorizonal, EarthIcon} from 'lucide-vue-next'
import AppButton from '~/components/global/AppButton.vue'

const {locale, locales, setLocale} = useI18n()

const isOpenLang = ref(false)
</script>

<template>
    <div class="flex w-full items-center justify-between py-3 bg-white/20 backdrop-blur-sm px-4 lg:px-8 md:px-6 border-b border-blue-600 shadow-sm shadow-blue-500">
            
        <!--Name App-->
        <div class="flex items-center justify-between gap-2">
            <SendHorizonal class="w-7 h-7 text-blue-500 -rotate-[30deg]"/>
            <p class="text-blue-500 text-xl font-bold">
                {{ $t('name') }}
            </p>
        </div>

            
        <div class="flex items-center justify-between gap-4">
            <div class="relative">
                <AppButton type="cancle" size="xl" :value="locale" @click="isOpenLang = !isOpenLang">
                    <EarthIcon class="size-xl"/>
                </AppButton>

                <div v-if="isOpenLang" 
                class="absolute mt-1 top-full left-0 bg-gray-300 rounded-xl w-full">
                    <div v-for="l in locales" 
                    class="tex-xl text-bold text-gray-800 rounded-xl w-full hover:bg-gray-400 p-1 border-b border-gray-500 transition"
                    @click="setLocale(l.code); isOpenLang = !isOpenLang">
                        {{ l.code }}
                    </div>
                </div>
            </div>

            <AppButton type="next" size="xl" :value="$t('button.login')"
            class="hidden sm:flex">
                <UserCircle class="size-xl"/>
            </AppButton>
            
            <!--mobile login-->
            <AppButton type="next" size="xl" value=""
            class="felx sm:hidden">
                <UserCircle class="size-xl"/>
            </AppButton>
        </div>
    </div>
</template>