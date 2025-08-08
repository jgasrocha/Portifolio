<script setup>
import { ref } from 'vue';
import Sidebar from './components/SideBar.vue';
import MainPage from './components/MainPage.vue';

const mainContentRef = ref(null);
</script>

<template>
  <div class="app-layout">
    <Sidebar :main-content-el="mainContentRef" />
    <main ref="mainContentRef" class="main-content">
      <div class="content-wrapper">
        <MainPage />
      </div>
    </main>
  </div>
</template>

<style>
/* Estilos globais para o layout da aplicação */
body {
  margin: 0;
  font-family: 'Arial', sans-serif;
  background-color: #eef2f5;
  scroll-behavior: smooth;
}

.app-layout {
  display: flex;
  min-height: 100vh;
}

/* ... Estilos da Sidebar permanecem inalterados ... */

.main-content {
  margin-left: 280px;
  flex-grow: 1;
  overflow-y: auto;
  height: 100vh;
}

.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px;
}
</style>