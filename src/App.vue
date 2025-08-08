<script setup>
import { ref } from 'vue';
import Sidebar from './components/SideBar.vue';
import MainPage from './components/MainPage.vue';

const mainContentRef = ref(null);
const isSidebarOpen = ref(false);

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};
</script>

<template>
  <div class="app-layout">
    <button class="menu-toggle" @click="toggleSidebar">
      ☰
    </button>
    <Sidebar :main-content-el="mainContentRef" :is-open="isSidebarOpen" @toggle="toggleSidebar" />
    <main ref="mainContentRef" class="main-content" :class="{ 'is-sidebar-open': isSidebarOpen }">
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

.main-content {
  margin-left: 280px;
  flex-grow: 1;
  overflow-y: auto;
  height: 100vh;
  transition: margin-left 0.3s ease-in-out;

  /* Estilos para a barra de rolagem (Scrollbar) */
  scrollbar-width: thin;
  scrollbar-color: #ff6b6b #eef2f5;
}

.main-content::-webkit-scrollbar {
  width: 12px;
}

.main-content::-webkit-scrollbar-track {
  background: #eef2f5;
  border-radius: 10px;
}

.main-content::-webkit-scrollbar-thumb {
  background-color: #ff6b6b;
  border-radius: 10px;
  border: 3px solid #eef2f5;
}

.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px;
  padding-bottom: 80px;
}

/* Estilos para o botão do menu hambúrguer */
.menu-toggle {
  display: none;
  /* Oculto por padrão em telas grandes */
}

/* ------------------------------------------- */
/* --- Media Queries para responsividade --- */
/* ------------------------------------------- */

@media (max-width: 768px) {
  .app-layout {
    flex-direction: column;
    /* Empilha os elementos */
  }

  .main-content {
    margin-left: 0;
    /* Remove a margem da barra lateral */
    height: auto;
  }

  .content-wrapper {
    padding: 20px;
    /* Reduz o padding para telas menores */
  }

  .menu-toggle {
    display: block;
    /* Mostra o botão do menu */
    position: fixed;
    top: 15px;
    left: 15px;
    z-index: 2000;
    /* Garante que fique acima de tudo */
    background: #ff6b6b;
    color: white;
    border: none;
    padding: 10px 15px;
    font-size: 1.5rem;
    cursor: pointer;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  }
}
</style>