<template>
    <div id="projects-section" class="projects-container">
        <div class="projects-inner">
            <div class="projects-header">
                <h2 class="projects-title">Meus Projetos</h2>
            </div>
            <div class="projects-carousel">
                <button @click="prevProject" class="nav-arrow left-arrow" :disabled="isTransitioning">‹</button>
                <div class="carousel-wrapper">
                    <transition :name="transitionName" mode="out-in">
                        <div class="project-card" :key="currentProjectIndex">
                            <div class="project-image-container">
                                <img :src="projects[currentProjectIndex].image"
                                    :alt="projects[currentProjectIndex].title" class="project-image" />
                            </div>
                            <div class="project-details">
                                <h3 class="project-name">{{ projects[currentProjectIndex].title }}</h3>
                                <p class="project-info">{{ projects[currentProjectIndex].subtitle }}</p>
                                <p class="project-description">{{ projects[currentProjectIndex].description }}</p>
                                <a :href="projects[currentProjectIndex].link" target="_blank" class="project-button">
                                    CONFERIR <span class="arrow">→</span>
                                </a>
                            </div>
                        </div>
                    </transition>
                </div>
                <button @click="nextProject" class="nav-arrow right-arrow" :disabled="isTransitioning">›</button>
            </div>
            <div class="dots-container">
                <span v-for="(project, index) in projects" :key="index"
                    :class="['dot', { active: index === currentProjectIndex }]" @click="goToProject(index)"></span>
            </div>
        </div>
    </div>
</template>

<script>
import FiveTech from '../../assets/five.png';
import InterageTEA from '../../assets/interageTea.png';
import LogoNova from '../../assets/logoNova.png';
import Portifolio from '../../assets/portifolioPessoal.png';

export default {
    name: 'ProjectsSection',
    data() {
        return {
            currentProjectIndex: 0,
            isTransitioning: false,
            slideDirection: 'right',
            projects: [
                {
                    title: 'InterageTEA',
                    subtitle: 'Jogo Educativo focado em interações para estudantes com Transtorno do Espectro Autista',
                    description: 'InterageTEA é um jogo educativo desenvolvido para auxiliar estudantes com Transtorno do Espectro Autista (TEA) a desenvolverem habilidades sociais e emocionais através de interações lúdicas.',
                    image: InterageTEA,
                    link: 'https://play.google.com/store/apps/details?id=com.IFBaiano.InterageTEA'
                },
                {
                    title: 'Portifólio da FiveTech',
                    subtitle: 'Portfólio de projetos da FiveTech',
                    description: 'Portfólio de projetos desenvolvidos pela FiveTech, incluindo sistemas de gestão e aplicativos.',
                    image: FiveTech,
                    link: 'https://fivetech.netlify.app/'
                },
                {
                    title: 'Sistema de Gestão Educacional de Aulas - SIGEA',
                    subtitle: 'Otimização de rotina escolar',
                    description: 'Sistema de agendas para otimizar a organização e rotina escolar, visando maior eficiência e praticidade para estudantes e educadores.',
                    image: LogoNova,
                    link: 'https://horario.formigueirotecnologico.com.br/'
                },
                {
                    title: 'Portfólio Pessoal',
                    subtitle: 'Meu portfólio pessoal desenvolvido em Vue.js',
                    description: 'Este portfólio pessoal foi desenvolvido utilizando Vue.js, destacando minhas habilidades e projetos na área de desenvolvimento web.',
                    image: Portifolio,
                    link: '#home-section'
                }
            ]
        };
    },
    computed: {
        transitionName() {
            return `slide-${this.slideDirection}`;
        }
    },
    methods: {
        startTransition() {
            this.isTransitioning = true;
            setTimeout(() => {
                this.isTransitioning = false;
            }, 500);
        },
        nextProject() {
            if (!this.isTransitioning) {
                this.slideDirection = 'right';
                this.startTransition();
                this.currentProjectIndex = (this.currentProjectIndex + 1) % this.projects.length;
            }
        },
        prevProject() {
            if (!this.isTransitioning) {
                this.slideDirection = 'left';
                this.startTransition();
                this.currentProjectIndex = (this.currentProjectIndex - 1 + this.projects.length) % this.projects.length;
            }
        },
        goToProject(index) {
            if (!this.isTransitioning && index !== this.currentProjectIndex) {
                this.slideDirection = index > this.currentProjectIndex ? 'right' : 'left';
                this.startTransition();
                this.currentProjectIndex = index;
            }
        }
    }
};
</script>

<style scoped>
.projects-container {
    padding: 80px 20px;
    text-align: center;
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
    gap: 20px;
}

.carousel-wrapper {
    flex: 1;
    position: relative;
    overflow: hidden;
    max-width: 900px;
}

.project-card {
    display: flex;
    background-color: #f0f0f0;
    color: #555;
    border-radius: 15px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);

    /* Alterado: removemos o `position: absolute` para a altura se adaptar ao conteúdo */
    position: relative;
    top: 0;
    left: 0;
    right: 0;
}

.project-image-container {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
}

.project-image {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.project-details {
    flex: 1.2;
    text-align: left;
    padding: 40px;
}

.project-name {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 5px;
    background: linear-gradient(90deg, #ff6b6b, #c32727);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.project-info {
    font-size: 1rem;
    color: #888;
    margin-bottom: 20px;
}

.project-description {
    font-size: 1.1rem;
    line-height: 1.6;
    color: #555;
    margin-bottom: 30px;
}

.project-button {
    display: inline-block;
    padding: 12px 25px;
    background-color: #ff6b6b;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
    font-weight: bold;
    transition: background-color 0.3s ease, transform 0.2s ease;
}

.project-button:hover {
    background-color: #e65c5c;
    transform: translateY(-2px);
}

.arrow {
    margin-left: 10px;
}

.nav-arrow {
    background: none;
    border: none;
    font-size: 4rem;
    color: #2c3e50;
    cursor: pointer;
    transition: transform 0.2s ease, color 0.2s ease;
    padding: 10px;
}

.nav-arrow:hover {
    transform: scale(1.1);
    color: #e65c5c;
}

.nav-arrow:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

.dots-container {
    display: flex;
    justify-content: center;
    margin-top: 40px;
}

.dot {
    width: 10px;
    height: 10px;
    background-color: #ccc;
    border-radius: 50%;
    margin: 0 5px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;
}

.dot.active {
    background-color: #2c3e50;
    transform: scale(1.2);
}

/* Transições existentes... */
.slide-right-enter-from {
    transform: translateX(100%);
    opacity: 0;
}

.slide-right-leave-to {
    transform: translateX(-100%);
    opacity: 0;
}

.slide-left-enter-from {
    transform: translateX(-100%);
    opacity: 0;
}

.slide-left-leave-to {
    transform: translateX(100%);
    opacity: 0;
}

.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
    transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.slide-right-leave-active,
.slide-left-leave-active {
    position: absolute;
    width: 100%;
}


/* ------------------------------------------- */
/* --- Media Queries para responsividade --- */
/* ------------------------------------------- */
@media (max-width: 992px) {
    .projects-title {
        font-size: 2.5rem;
    }

    .project-card {
        flex-direction: column;
        text-align: center;
    }

    .carousel-wrapper {
        height: auto;
        /* A altura se adapta ao conteúdo */
    }

    .project-details {
        padding: 20px;
        text-align: center;
    }

    .project-image-container {
        padding: 20px 20px 0;
    }
}

@media (max-width: 768px) {
    .projects-carousel {
        flex-direction: column;
        gap: 0;
    }

    .nav-arrow {
        position: static;
        /* Remove o posicionamento fixo para ficar na linha */
        font-size: 3rem;
        padding: 5px;
    }

    .left-arrow {
        order: 0;
    }

    .right-arrow {
        order: 1;
    }

    .carousel-wrapper {
        order: 2;
        /* Garante que o carrossel fique abaixo das setas */
        width: 100%;
    }
}

@media (max-width: 576px) {
    .projects-container {
        padding: 50px 10px;
    }

    .projects-title {
        font-size: 2rem;
    }

    .project-name {
        font-size: 1.5rem;
    }

    .project-description,
    .project-info {
        font-size: 1rem;
    }
}
</style>