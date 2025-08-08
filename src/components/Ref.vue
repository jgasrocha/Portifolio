<script setup>
    import { ref } from 'vue';
    let username = ref("");
</script>

<template>
    <!-- <h1>Count: {{ count }}</h1>
    <button class="button-in" @click="count++">Increment</button>
    <button class="button-de" @click="count--">Decrement</button>
    <button class="button-re" @click="count = 0">Reset</button> -->
    <h1>Username: {{ username }}</h1>
    <button class="button-in" @click="username = 'João Gabriel'">Add User</button>
</template>

<style scoped>
.input {
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 10px;
}
.button-in {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #42b983;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
.button-de {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #e74c3c;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
.button-re {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #f39c12;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
</style>