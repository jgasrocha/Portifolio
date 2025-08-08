<script setup>
    import { reactive } from 'vue';
    let initialState = reactive({val: {count: 0}, user: ["Gabriel", "Guilherme"]});

    const changeUsers =  () => {
        initialState.user[0] = 'João ';
        initialState.user[1] = 'Pedro';
    };
</script>

<template>
    <h1>Current Count: {{ initialState.val.count }}</h1>
    <h2>User: {{ initialState.user }}</h2>

    <button class="button-in" @click="initialState.val.count+=10">Add 10</button>
    <button class="button-de" @click="changeUsers">Change Users</button>
    <button class="add-user" @click="initialState.user.push('John Doe')">Add One More User</button>

    <h3>User length: {{ initialState.user.length }}</h3>
</template>

<style scoped>
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
.add-user {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
</style>