<template>
    <div id="services-section" class="services-container">
        <div class="services-header">
            <h2 class="services-title">Principais Serviços</h2>
            <p class="services-subtitle">Soluções inovadoras para seus projetos</p>
        </div>

        <div class="services-grid">
            <div class="service-card" v-for="(service, index) in services" :key="index">
                <div class="service-icon">
                    <component :is="service.icon" />
                </div>
                <h3 class="card-title">{{ service.title }}</h3>
                <p class="card-description">{{ service.description }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import WebDevelopmentIcon from './icon/WebDevelopmentIcon.vue';
import MobileAppIcon from './icon/MobileAppIcon.vue';
import GameDevelopmentIcon from './icon/GameDevelopmentIcon.vue';

export default {
    name: 'ServicesSection',
    components: {
        WebDevelopmentIcon,
        MobileAppIcon,
        GameDevelopmentIcon,
    },
    data() {
        return {
            services: [
                {
                    title: 'Desenvolvimento Web',
                    description: 'Criação de websites responsivos, e-commerce e sistemas web personalizados para impulsionar sua presença online.',
                    icon: 'WebDevelopmentIcon'
                },
                {
                    title: 'Desenvolvimento de Games',
                    description: 'Games envolventes e interativos para todas as plataformas, focados em uma experiência de usuário rica e memorável.',
                    icon: 'GameDevelopmentIcon'
                },
                {
                    title: 'Desenvolvimento de Aplicativos',
                    description: 'Construção de aplicativos mobile nativos e multi-plataforma, focados em usabilidade e performance.',
                    icon: 'MobileAppIcon'
                }
            ]
        };
    }
};
</script>

<style scoped>
.services-container {
    padding: 80px 20px;
    text-align: center;
}

.services-header {
    margin-bottom: 50px;
}

.services-title {
    font-size: 3rem;
    font-weight: 700;
    color: #2c3e50;
    margin-bottom: 5px;
}

.services-subtitle {
    font-size: 1.2rem;
    color: #555;
    font-style: italic;
}

.services-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    max-width: 1200px;
    margin: 0 auto;
}

.service-card {
    background-color: #ffffff;
    padding: 40px;
    border-radius: 15px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    flex: 1;
    min-width: 280px;
    max-width: 350px;
    text-align: center;
}

.service-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.service-icon {
    width: 60px;
    height: 60px;
    margin: 0 auto 20px;
}

.service-icon svg {
    width: 100%;
    height: 100%;
}

.card-title {
    font-size: 1.5rem;
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 10px;
}

.card-description {
    font-size: 1rem;
    color: #555;
    line-height: 1.6;
}

/* ------------------------------------------- */
/* --- Media Queries para responsividade --- */
/* ------------------------------------------- */
@media (max-width: 768px) {
    .services-header {
        margin-bottom: 30px;
    }

    .services-title {
        font-size: 2.5rem;
    }

    .services-subtitle {
        font-size: 1rem;
    }

    .services-grid {
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }

    .service-card {
        max-width: 90%;
        min-width: 0;
        padding: 30px;
    }

    .card-title {
        font-size: 1.2rem;
    }
}
</style>