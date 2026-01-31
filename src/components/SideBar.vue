<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue';
import logo from '../../assets/logoSide.png';

const props = defineProps({
  mainContentEl: {
    type: [Object, null],
    required: true,
  },
  isOpen: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(['toggle']);

const activeSection = ref('home-section');
const isMobile = ref(false); // Adicionamos um estado para verificar se é mobile

// Função para verificar se a tela é mobile
const checkMobile = () => {
  isMobile.value = window.innerWidth <= 768;
};

// Funçao de rolagem corrigida
const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (!section) return;

  // Lógica para determinar onde rolar: window (mobile) ou mainContentEl (desktop)
  if (isMobile.value) {
    window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth'
    });
  } else if (props.mainContentEl) {
    props.mainContentEl.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth'
    });
  }

  activeSection.value = sectionId;
  if (props.isOpen) {
    // Fecha a sidebar após o clique, essencial para o mobile
    emit('toggle');
  }
};

// Função para atualizar a seção ativa ao rolar
const updateActiveSection = () => {
  const sections = document.querySelectorAll('div[id$="-section"]');
  const offset = 100;

  // Obtém o scroll correto dependendo do dispositivo
  const scrollTop = isMobile.value ? window.scrollY : (props.mainContentEl ? props.mainContentEl.scrollTop : 0);

  let currentActive = 'home-section';
  for (let i = sections.length - 1; i >= 0; i--) {
    const section = sections[i];
    const sectionTop = section.offsetTop;

    if (scrollTop >= sectionTop - offset) {
      currentActive = section.id;
      break;
    }
  }

  activeSection.value = currentActive;
};

// Adiciona event listeners no `window` ou `mainContentEl`
const setupEventListeners = () => {
  if (isMobile.value) {
    window.addEventListener('scroll', updateActiveSection);
  } else if (props.mainContentEl) {
    props.mainContentEl.addEventListener('scroll', updateActiveSection);
  }
  updateActiveSection();
};

const cleanupEventListeners = () => {
  window.removeEventListener('scroll', updateActiveSection);
  if (props.mainContentEl) {
    props.mainContentEl.removeEventListener('scroll', updateActiveSection);
  }
};

onMounted(() => {
  // Adiciona o listener de resize para monitorar a mudança de mobile para desktop
  window.addEventListener('resize', checkMobile);
  checkMobile(); // Executa a verificação inicial

  // Configura os listeners de scroll com base no estado inicial
  setupEventListeners();
});

onUnmounted(() => {
  // Remove todos os listeners
  window.removeEventListener('resize', checkMobile);
  cleanupEventListeners();
});

// Usa um watcher para reconfigurar os listeners quando o `isMobile` muda
watch(isMobile, (newVal, oldVal) => {
  if (newVal !== oldVal) {
    cleanupEventListeners();
    setupEventListeners();
  }
});

// Assista à prop `mainContentEl` para re-adicionar listeners se o elemento mudar
watch(() => props.mainContentEl, (el) => {
  if (el) {
    cleanupEventListeners();
    setupEventListeners();
  }
});
</script>

<template>
  <aside class="sidebar" :class="{ 'is-open': isOpen }">
    <div class="sidebar-logo">
      <a href="#home-section" @click.prevent="scrollToSection('home-section')">
        <img :src="logo" alt="">
      </a>
    </div>
    <ul class="sidebar-menu">
      <li>
        <a href="#home-section" :class="{ 'active': activeSection === 'home-section' }"
          @click.prevent="scrollToSection('home-section')">Inicio</a>
      </li>
      <li>
        <a href="#about-section" :class="{ 'active': activeSection === 'about-section' }"
          @click.prevent="scrollToSection('about-section')">Sobre Mim</a>
      </li>
      <li>
        <a href="#projects-section" :class="{ 'active': activeSection === 'projects-section' }"
          @click.prevent="scrollToSection('projects-section')">Projetos</a>
      </li>
      <li>
        <a href="#skills-section" :class="{ 'active': activeSection === 'skills-section' }"
          @click.prevent="scrollToSection('skills-section')">Habilidades</a>
      </li>
      <li>
        <a href="#services-section" :class="{ 'active': activeSection === 'services-section' }"
          @click.prevent="scrollToSection('services-section')">Serviços</a>
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
  transition: transform 0.3s ease-in-out;
  /* Transição para o mobile */
}

.sidebar-logo {
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
}

.sidebar-logo img {
  width: 150px;
  height: auto;
  object-fit: contain;
  transition: transform 0.2s ease-in-out;
}

.sidebar-logo img:hover {
  transform: scale(1.05);
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

/* ------------------------------------------- */
/* --- Media Queries para responsividade --- */
/* ------------------------------------------- */

@media (max-width: 768px) {
  .sidebar {
    width: 250px;
    transform: translateX(-100%);
    /* Esconde a sidebar por padrão */
  }

  .sidebar.is-open {
    transform: translateX(0);
    /* Mostra a sidebar quando o menu está aberto */
    box-shadow: 4px 0 10px rgba(0, 0, 0, 0.2);
  }
}
</style>