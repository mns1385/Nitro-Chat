<script setup lang="ts">
import {UserCircle, SendHorizonal} from 'lucide-vue-next'
import AppButton from '~/components/global/AppButton.vue';

</script>

<template>
    <div class="min-h-screan w-full">

        <!--Header-->
        <div class="flex w-full items-center justify-between py-3 bg-white/20 backdrop-blur-sm px-8 border-b border-blue-600 shadow-sm shadow-blue-500">
            
            <!--Name App-->
            <div class="flex items-center justify-between gap-2">
                <SendHorizonal class="w-7 h-7 text-blue-500 -rotate-[30deg]"/>
                <p class="text-blue-500 text-xl font-bold">
                    {{ $t('name') }}
                </p>
            </div>

            
            <div>
                <AppButton type="next" size="xl" value="login">
                    <UserCircle class="size-xl"/>
                </AppButton>
            </div>
        </div>
    </div>
</template>