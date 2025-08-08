<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue';
import logo from '../../assets/logoSide.png';

const props = defineProps({
  mainContentEl: {
    type: [Object, null],
    required: true,
  },
});

const activeSection = ref('home-section');

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section && props.mainContentEl) {
    props.mainContentEl.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth'
    });
    activeSection.value = sectionId;
  }
};

const updateActiveSection = () => {
  if (!props.mainContentEl) return;

  const sections = document.querySelectorAll('div[id$="-section"]');
  const offset = 100;
  const scrollTop = props.mainContentEl.scrollTop;

  // CORREÇÃO: Percorre as seções de trás para frente
  let currentActive = 'home-section';
  for (let i = sections.length - 1; i >= 0; i--) {
    const section = sections[i];
    const sectionTop = section.offsetTop;

    // Verifica se a seção está visível na tela
    if (scrollTop >= sectionTop - offset) {
      currentActive = section.id;
      break; // Sai do loop assim que encontrar a primeira seção (de baixo para cima)
    }
  }

  activeSection.value = currentActive;
};

watch(() => props.mainContentEl, (el) => {
  if (el) {
    el.addEventListener('scroll', updateActiveSection);
    updateActiveSection();
  }
}, { immediate: true });

onUnmounted(() => {
  if (props.mainContentEl) {
    props.mainContentEl.removeEventListener('scroll', updateActiveSection);
  }
});
</script>

<template>
  <aside class="sidebar">
    <div class="sidebar-logo">
      <a href="#home-section" @click.prevent="scrollToSection('home-section')">
        <img :src="logo" alt="">
      </a>
    </div>
    <ul class="sidebar-menu">
      <li>
        <a href="#home-section" :class="{ 'active': activeSection === 'home-section' }"
          @click.prevent="scrollToSection('home-section')">Home</a>
      </li>
      <li>
        <a href="#about-section" :class="{ 'active': activeSection === 'about-section' }"
          @click.prevent="scrollToSection('about-section')">Sobre Mim</a>
      </li>
      <li>
        <a href="#services-section" :class="{ 'active': activeSection === 'services-section' }"
          @click.prevent="scrollToSection('services-section')">Serviços</a>
      </li>
      <li>
        <a href="#projects-section" :class="{ 'active': activeSection === 'projects-section' }"
          @click.prevent="scrollToSection('projects-section')">Projetos</a>
      </li>
      <li>
        <a href="#contact-section" :class="{ 'active': activeSection === 'contact-section' }"
          @click.prevent="scrollToSection('contact-section')">Contato</a>
      </li>
    </ul>
  </aside>
</template>

<style scoped>
/* Estilos da Sidebar */
/* ... (Seus estilos não foram alterados) ... */
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  overflow-y: auto;
  width: 280px;
  background-color: #2c3e50;
  color: white;
  padding: 30px 20px;
  box-sizing: border-box;
  z-index: 1000;
}

.sidebar-logo {
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
}

.sidebar-logo img {
  width: 150px; /* tamanho ajustado */
  height: auto; /* mantém proporção */
  object-fit: contain; /* evita distorção */
  transition: transform 0.2s ease-in-out;
}

.sidebar-logo img:hover {
  transform: scale(1.05); /* efeito leve ao passar o mouse */
}

.sidebar-menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

.sidebar-menu li a {
  display: flex;
  align-items: center;
  padding: 12px 15px;
  margin: 10px 0;
  color: #c0c8d1;
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.sidebar-menu li a.active {
  background-color: #ff6b6b;
  color: #2f435a;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  font-weight: 600;
}

.sidebar-menu li a:hover {
  background-color: #ff4757;
  color: white;
}
</style>