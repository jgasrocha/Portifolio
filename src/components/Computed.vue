<script setup>
import { computed, ref } from 'vue';

    const firtName = ref("João");
    const lastName = ref("Gabriel");
    const fullName = computed(() => firtName.value + " " + lastName.value);
</script>

<template>
    <h1>Full name: {{fullName}}</h1>
</template>

<style>
</style>