<script setup lang="ts">
const props = defineProps<{
    type: string
    size: string
    value: string 
}>()

const classType = computed(() => {
    let types = [
        'bg-blue-500 text-white hover:bg-blue-600',
        'bg-red-500 text-white hover:bg-red-600',
        'bg-gray-500 text-gray-100 hover:bg-gray-600',
        'bg-green-500 text-white hover:bg-green-600'
    ]

    if (props.type == 'confirm') {
        return types[3]
    } else if (props.type == 'delete') {
        return types[1]
    } else if (props.type == 'cancle') {
        return types[2]
    } else if (props.type == 'next') {
        return types[0]
    }
})
</script>

<template>
    <button class="flex items-center justify-bitween gap-2 py-1 px-2 transition"
    :class="classType, props.value? 'rounded-xl': 'rounded-full'">
        <slot/>
        <span :class="[`text-${props.size}`]" v-if="props.value">
            {{ props.value }}
        </span>
    </button>
</template>