<script setup>
import JoaoGabriel from '../../assets/JoaoGabriel.png';
import IconDjango from './Icon/IconDjango.vue';
</script>

<template>
    <div id="home-section" class="home-container">
        <div class="text-content">
            <h1 class="title">João <span class="name-highlight">Gabriel</span></h1>
            <p class="role">Um Desenvolvedor e Educador de Tecnologia</p>

            <p class="about-text">
                Apaixonado por tecnologia e por transformar ideias em experiências reais, criando soluções inovadoras
                através do código.
            </p>

            <div class="cta-section">
                <!-- <a href="#projects-section" class="btn">Meus Projetos</a> -->
                <div class="social-links">
                    <a href="https://www.instagram.com/jgasrocha_dev/" aria-label="Instagram" class="social-icon"><font-awesome-icon
                            :icon="['fab', 'instagram']" /></a>
                    <a href="https://www.linkedin.com/in/jo%C3%A3o-gabriel-silva-rocha/" aria-label="LinkedIn" class="social-icon"><font-awesome-icon
                            :icon="['fab', 'linkedin']" /></a>
                    <a href="https://github.com/jgasrocha" aria-label="GitHub" class="social-icon"><font-awesome-icon
                            :icon="['fab', 'github']" /></a>
                </div>
            </div>
        </div>

        <div class="image-content">
            <img :src="JoaoGabriel" alt="Foto de João Gabriel" class="profile-photo">

            <div class="tech-icon php-icon icon-float"><font-awesome-icon :icon="['fab', 'php']" color="#69729c" />
            </div>
            <div class="tech-icon vue-icon icon-float"><font-awesome-icon :icon="['fab', 'vuejs']" color="#42b883" />
            </div>
            <div class="tech-icon python-icon icon-float"><font-awesome-icon :icon="['fab', 'python']"
                    color="#ffde57" /></div>
            <div class="tech-icon laravel-icon icon-float"><font-awesome-icon :icon="['fab', 'laravel']"
                    color="#ff2d20" /></div>
            <div class="tech-icon react-icon icon-float"><font-awesome-icon :icon="['fab', 'react']" color="#02569b" />
            </div>
            <div class="tech-icon django-icon icon-float">
                <IconDjango />
            </div>
        </div>
    </div>

    <svg width="0" height="0" style="position: absolute;">
        <defs>
            <clipPath id="photo-clip" clipPathUnits="objectBoundingBox">
                <path
                    d="M0.5,0.05 C0.7,0.01 0.9,0.1 0.95,0.3 C1.0,0.5 0.95,0.7 0.85,0.85 C0.75,0.95 0.5,1 0.3,0.95 C0.1,0.9 0.01,0.7 0.05,0.5 C0.09,0.3 0.3,0.09 0.5,0.05 Z">
                </path>
            </clipPath>

            <filter id="photo-shadow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow dx="5" dy="5" stdDeviation="5" flood-color="#000000" flood-opacity="0.3" />
            </filter>
        </defs>
    </svg>
</template>

<style scoped>
.social-links a {
    color: #555;
    font-size: 1.5rem;
    transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;
}

.social-links a:hover {
    transform: scale(1.2);
    color: #ff6b6b;
}

.home-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 80px 0;
}

.text-content {
    flex: 1;
    max-width: 600px;
}

.title {
    font-size: 3.5rem;
    font-weight: 700;
    color: #2c3e50;
    margin: 0 0 10px 0;
}

.name-highlight {
    color: #ff6b6b;
}

.role {
    font-size: 1.5rem;
    color: #5da0a8;
    margin-bottom: 20px;
}

.about-text {
    font-size: 19px;
    line-height: 1.6;
    color: #555;
    margin-bottom: 30px;
}

.cta-section {
    display: flex;
    align-items: center;
    gap: 20px;
}

.btn {
    background-color: #ff6b6b;
    color: white;
    padding: 12px 25px;
    border-radius: 50px;
    text-decoration: none;
    font-weight: bold;
    transition: background-color 0.3s ease;
}

.btn:hover {
    background-color: #ff4757;
}

.social-links {
    display: flex;
    gap: 15px;
}

.image-content {
    position: relative;
    width: 400px;
    height: 400px;
}

.profile-photo {
    width: 100%;
    height: 100%;
    object-fit: cover;
    clip-path: url(#photo-clip);
    border-radius: 50%;
    filter: url(#photo-shadow);
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
}

.tech-icon {
    position: absolute;
    width: 60px;
    height: 60px;
    border-radius: 10px;
    background-color: white;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;
}

.tech-icon svg {
    width: 70%;
    height: 70%;
    transition: transform 0.3s ease-in-out;
}

@keyframes float {
    0% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-10px);
    }

    100% {
        transform: translateY(0);
    }
}

.icon-float {
    animation: float 3s ease-in-out infinite;
}

.tech-icon:hover {
    transform: scale(1.1);
}

.php-icon:hover {
    box-shadow: 0 0 15px #69729c;
}

.vue-icon:hover {
    box-shadow: 0 0 15px #42b883;
}

.python-icon:hover {
    box-shadow: 0 0 15px #ffde57;
}

.laravel-icon:hover {
    box-shadow: 0 0 15px #ff2d20;
}

.react-icon:hover {
    box-shadow: 0 0 15px #02569b;
}

.django-icon:hover {
    box-shadow: 0 0 15px #092E20;
}

.php-icon {
    top: -5%;
    left: 40%;
    transform: translateX(-50%);
    animation-delay: 0s;
}

.vue-icon {
    top: 15%;
    right: -15%;
    transform: translateY(-50%);
    animation-delay: 0.2s;
}

.python-icon {
    top: 50%;
    right: -20%;
    transform: translateY(-50%);
    animation-delay: 0.4s;
}

.laravel-icon {
    bottom: 15%;
    right: -15%;
    transform: translateY(50%);
    animation-delay: 0.6s;
}

.react-icon {
    bottom: -5%;
    left: 40%;
    transform: translateX(-50%);
    animation-delay: 0.8s;
}

.django-icon {
    top: 50%;
    left: -20%;
    transform: translateY(-50%);
    animation-delay: 1s;
}

/* ------------------------------------------- */
/* --- Media Queries para responsividade --- */
/* ------------------------------------------- */
@media (max-width: 768px) {
    .home-container {
        flex-direction: column;
        /* Empilha o conteúdo */
        text-align: center;
        padding: 50px 20px;
    }

    .text-content {
        max-width: 100%;
        margin-bottom: 40px;
    }

    .title {
        font-size: 2.5rem;
    }

    .role {
        font-size: 1.2rem;
    }

    .about-text {
        font-size: 1rem;
    }

    .cta-section {
        flex-direction: column;
        /* Empilha o botão e os links sociais */
        gap: 15px;
    }

    .image-content {
        width: 80%;
        /* Aumenta a imagem para preencher melhor a tela */
        height: auto;
        padding-top: 80%;
        /* Mantém a proporção 1:1 */
    }

    .profile-photo {
        position: absolute;
        top: 0;
        left: 0;
    }

    /* Esconde os ícones de tecnologia flutuantes em telas menores */
    .tech-icon {
        display: none;
    }
}
</style>