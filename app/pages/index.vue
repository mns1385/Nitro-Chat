<script setup lang="ts">
import {UserCircle2, SendHorizonal} from 'lucide-vue-next'

</script>

<template>
    <div class="min-h-screan w-full">

        <!--Header-->
        <div class="flex w-full items-center justify-bitween py-3 bg-white/20 backdrop-blur-sm lg:px-8 md:px-6 border-b border-blue-600 shadow-sm shadow-blue-500">
            
            <!--Name App-->
            <div class="flex items-center justify-bitween gap-2">
                <SendHorizonal class="w-7 h-7 text-blue-500 -rotate-[30deg]"/>
                <p class="text-blue-500 text-xl font-bold">
                    {{ $t('name') }}
                </p>
            </div>

            
            <div>

            </div>
        </div>
    </div>
</template>