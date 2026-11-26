<script setup lang="ts">
import {UserCircle2, SendHorizonal} from 'lucide-vue-next'

</script>

<template>
    <div class="min-h-screan w-full">
        <div class="flex w-full items-center justify-bitween py-4 lg:px-8 md:px-6 sm:px-4 border-b border-gray-400">
            <div class="flex items-center justify-bitween gap-2">
                <SendHorizonal class="w-7 h-7 text-blue-500 -rotate-[30deg]"/>
                <p class="text-gray-700 text-xl font-bold">
                    {{ $t('name') }}
                </p>
            </div>
            <div></div>
        </div>
    </div>
</template>