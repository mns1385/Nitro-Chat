<script setup lang="ts">
const {locale} = useI18n()

const rtlLocales = ['fa', 'ar', 'he']

useHead({
    htmlAttrs: {
        lang: locale,
        dir: computed(() => (rtlLocales.includes(locale.value) ? 'rtl' : 'ltr'))
    }
})
</script>

<template>
    <NuxtLoadingIndicator/>
    <NuxtLayout>
        <NuxtPage/>
    </NuxtLayout>
</template>
