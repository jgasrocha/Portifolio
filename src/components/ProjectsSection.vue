<template>
    <div id="projects-section" class="projects-container">
        <div class="projects-inner">
            <div class="projects-header">
                <h2 class="projects-title">Meus Projetos</h2>
            </div>

            <div class="projects-carousel" v-if="projects.length > 0">
                <button @click="scrollCarousel(-1)" class="nav-arrow left-arrow">‹</button>

                <div class="carousel-wrapper" ref="carouselWrapper">
                    <div class="carousel-track">

                        <div v-for="project in projects" :key="project.title" class="project-card">
                            <div class="project-image-top">
                                <img :src="project.image" :alt="project.title" class="project-image" />
                            </div>
                            <div class="project-details">
                                <h3 class="project-name">{{ project.title }}</h3>
                                <p class="project-description">{{ project.description }}</p>
                                <button type="button" class="see-more-button" @click="openModal(project)">
                                    Ver mais
                                </button>
                                <div class="project-tech-tags">
                                    <span v-for="tech in project.technologies" :key="tech" class="tech-tag">
                                        {{ tech }}
                                    </span>
                                </div>
                                <a :href="project.link" target="_blank" class="project-button">
                                    CONFERIR
                                </a>
                            </div>
                        </div>
                    </div>
                </div> <button @click="scrollCarousel(1)" class="nav-arrow right-arrow">›</button>
            </div>

        </div>

        <ProjectModal v-if="isModalVisible" :project="selectedProject" @close="closeModal" />
    </div>
</template>

<script>
import { projects } from './projects.js'; // Ajuste o caminho se necessário
import ProjectModal from './ProjectModal.vue';

export default {
    name: 'ProjectsSection',
    components: {
        ProjectModal
    },
    data() {
        return {
            projects: projects,
            isModalVisible: false,
            selectedProject: null,
        };
    },
    watch: {
        isModalVisible(newValue) {
            document.body.style.overflow = newValue ? 'hidden' : '';
        }
    },
    methods: {
        scrollCarousel(direction) {
            const wrapper = this.$refs.carouselWrapper;
            if (!wrapper) return;

            // Tenta pegar a largura do primeiro card
            const firstCard = wrapper.querySelector('.project-card');
            let scrollAmount = 350; // Um valor padrão caso o card não seja encontrado

            if (firstCard) {
                const cardStyle = window.getComputedStyle(firstCard);
                const cardWidth = firstCard.offsetWidth;
                const cardMargin = parseFloat(cardStyle.marginRight); // Pega o gap
                scrollAmount = cardWidth + cardMargin;
            }

            wrapper.scrollBy({
                left: scrollAmount * direction,
                behavior: 'smooth'
            });
        },
        openModal(project) {
            this.selectedProject = project;
            this.isModalVisible = true;
        },
        closeModal() {
            this.isModalVisible = false;
            this.selectedProject = null;
        }
    },
    beforeUnmount() {
        document.body.style.overflow = '';
    }
};
</script>

<style scoped>
.projects-container {
    padding: 80px 0;
    text-align: center;
}

.projects-inner {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 20px;
}

.projects-header {
    margin-bottom: 50px;
}

.projects-title {
    font-size: 3rem;
    font-weight: 700;
    color: #2c3e50;
    margin-bottom: 5px;
    background: #2c3e50;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.projects-carousel {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

.carousel-wrapper {
    flex: 1;
    position: relative;
    overflow-x: auto;
    overflow-y: hidden;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
    padding-bottom: 20px;
}

.carousel-track {
    display: flex;
    flex-wrap: nowrap;
    width: max-content;
}

.project-card {
    display: flex;
    flex-direction: column;
    flex: 0 0 auto;
    width: 360px;
    margin-right: 20px;
    background-color: #ffffff;
    color: #2c3e50;
    border-radius: 15px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    height: auto;
    /* A altura será determinada pelo conteúdo */
    transition: transform 0.3s ease;
}

.project-card:hover {
    transform: translateY(-5px);
}

.project-image-top {
    width: 100%;
    height: 200px;
    overflow: hidden;
    padding: 0;
}

.project-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

.project-details {
    flex-grow: 1;
    /* Faz esta seção preencher o espaço restante */
    text-align: left;
    padding: 25px 30px;
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.project-name {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 0;
    -webkit-text-fill-color: #2c3e50;
}

/* ================== AJUSTE FEITO AQUI ================== */
.project-description {
    font-size: 0.95rem;
    line-height: 1.5;
    color: #555;
    margin-bottom: 0;

    /* Remove o 'flex-grow' e 'min-height' que causavam o espaço */
    /* flex-grow: 1;  <-- REMOVIDO */
    /* min-height: 60px; <-- REMOVIDO */

    /* Adiciona o truncamento de 2 linhas com "..." */
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    /* Define o número de linhas */
    -webkit-box-orient: vertical;
}

/* ======================================================= */

.project-button {
    display: block;
    padding: 12px 25px;
    background-color: #ff6b6b;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
    font-weight: bold;
    transition: background-color 0.3s ease;

    /* Esta linha empurra o botão para o final do card */
    margin-top: auto;

    align-self: stretch;
    text-align: center;
    border: none;
    cursor: pointer;
}

.project-button:hover {
    background-color: #e65c5c;
}

.nav-arrow {
    background: none;
    border: none;
    font-size: 3rem;
    color: #2c3e50;
    cursor: pointer;
    transition: transform 0.2s ease, color 0.2s ease;
    padding: 10px 0;
}

.nav-arrow:hover {
    transform: scale(1.1);
    color: #ff6b6b;
}

.dots-container {
    display: none;
}

.project-tech-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 0;
    margin-bottom: 0;
}

.tech-tag {
    background-color: #e0e0e0;
    color: #555;
    padding: 6px 12px;
    border-radius: 15px;
    font-size: 0.85rem;
    font-weight: 500;
}

.see-more-button {
    background: none;
    border: none;
    color: #ff6b6b;
    font-weight: 700;
    font-size: 0.95rem;
    cursor: pointer;
    padding: 0;
    margin-bottom: 0;
    transition: color 0.2s ease;
    align-self: flex-start;
}

.see-more-button:hover {
    color: #c32727;
    text-decoration: underline;
}

/* Estilização da Barra de Rolagem */
.carousel-wrapper::-webkit-scrollbar {
    height: 8px;
}

.carousel-wrapper::-webkit-scrollbar-track {
    background: #f0f0f0;
    border-radius: 4px;
}

.carousel-wrapper::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 4px;
}

.carousel-wrapper::-webkit-scrollbar-thumb:hover {
    background: #aaa;
}

.carousel-wrapper {
    scrollbar-width: thin;
    scrollbar-color: #ccc #f0f0f0;
}

/* --- Media Queries --- */
@media (max-width: 992px) {
    .projects-title {
        font-size: 2.5rem;
    }

    .project-card {
        width: 320px;
    }
}

@media (max-width: 768px) {
    .nav-arrow {
        font-size: 2.5rem;
    }

    .project-card {
        width: 300px;
    }
}

@media (max-width: 576px) {
    .projects-container {
        padding: 50px 0;
    }

    .projects-inner {
        padding: 0;
    }

    .projects-carousel {
        gap: 0;
    }

    .projects-title {
        font-size: 2rem;
        padding: 0 10px;
    }

    .nav-arrow {
        padding: 10px 5px;
    }

    .carousel-wrapper {
        padding-bottom: 15px;
    }

    .carousel-track {
        padding-left: 15px;
        padding-right: 15px;
    }

    .project-card {
        width: 280px;
        margin-right: 15px;
    }

    .project-name {
        font-size: 1.3rem;
    }

    .project-description {
        font-size: 0.9rem;
    }

    .project-details {
        padding: 20px;
        gap: 12px;
    }
}
</style>