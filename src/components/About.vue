<script setup>
import Figura from '../../assets/programmer.png';
</script>
<template>

    <div id="about-section" class="about-container">
        <div class="about-inner">
            <div class="about-content">
                <h1 class="about-title">Sobre Mim</h1>
                <p class="about-text">
                    Sou João Gabriel Silva Rocha, profissional da área de Tecnologia da Informação, com foco no
                    desenvolvimento de soluções inovadoras que promovem inclusão e acessibilidade. Natural de Senhor do
                    Bonfim, Bahia, tenho como propósito utilizar a tecnologia como ferramenta para transformar ideias em
                    resultados concretos e de impacto social.
                    <br><br>
                    Minha experiência inclui o desenvolvimento de plataformas e recursos educacionais, como jogos e
                    sistemas voltados para estudantes com Transtorno do Espectro Autista (TEA), sempre priorizando a
                    criação de ambientes de aprendizagem inclusivos e eficientes. Atualmente, atuo no desenvolvimento de
                    um sistema de agendas voltado à otimização da organização e rotina escolar, visando maior eficiência
                    e praticidade.
                    <br><br>
                    Possuo sólida experiência em <strong>JavaScript</strong> e <strong>Vue.js</strong> para
                    desenvolvimento front-end, além de atuação com <strong>PHP</strong> e <strong>Laravel</strong> no
                    back-end. Tenho domínio em bancos de dados como <strong>MySQL</strong> e utilizo ferramentas de
                    versionamento como <strong>Git</strong> e <strong>GitHub</strong>. Acredito que a combinação entre
                    conhecimento técnico e visão estratégica é essencial para gerar soluções tecnológicas que realmente
                    façam a diferença.
                </p>
            </div>
            <div class="about-image">
                <img :src="Figura" alt="Programador" class="programmer-image">
            </div>
        </div>
    </div>
</template>

<style scoped>
.about-container {
    padding: 80px 20px;
}

.about-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
}

.about-content {
    max-width: 60%;
}

.about-title {
    font-size: 3rem;
    font-weight: 700;
    color: #2c3e50;
    margin-bottom: 20px;
}

.about-title::after {
    content: '';
    display: block;
    width: 80px;
    height: 4px;
    background-color: #ff6b6b;
    margin-top: 10px;
}

.about-text {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #555;
    text-align: justify;
}

.about-text strong {
    color: #ff6b6b;
    font-weight: bold;
}

.about-image {
    width: 35%;
    display: flex;
    justify-content: center;
}

.programmer-image {
    max-width: 100%;
    height: auto;
}

/* ------------------------------------------- */
/* --- Media Queries para responsividade --- */
/* ------------------------------------------- */
@media (max-width: 768px) {
    .about-inner {
        flex-direction: column;
        align-items: center;
    }

    .about-content {
        max-width: 100%;
        margin-bottom: 30px;
        text-align: center;
    }

    .about-title {
        font-size: 2.5rem;
    }

    .about-title::after {
        margin: 10px auto 0;
    }

    .about-text {
        font-size: 1rem;
    }

    .about-image {
        width: 60%;
    }
}

@media (max-width: 480px) {
    .about-image {
        width: 80%;
    }
}
</style>