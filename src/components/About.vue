<script setup>
import Figura from '../../assets/programmer.png';
</script>

<template>
    <div id="about-section" class="about-container">
        <div class="about-inner">
            <div class="about-content">
                <h1 class="about-title">Sobre Mim</h1>
                <p class="about-text">
                    Sou João Gabriel Silva Rocha, profissional da área de Tecnologia da Informação com foco no
                    desenvolvimento de soluções inovadoras que promovem inclusão e acessibilidade. Natural de Senhor do
                    Bonfim, Bahia, tenho como propósito utilizar a tecnologia para transformar ideias em
                    resultados concretos e de impacto social.
                    <br><br>
                    Minha experiência inclui o desenvolvimento de recursos educacionais, como <strong>jogos em Unity</strong> 
                    voltados para estudantes com Transtorno do Espectro Autista (TEA), e o <strong>SIGEA</strong>, sistema de gestão escolar em uso no IF Baiano. 
                    Atualmente, também colaboro em um projeto de arquitetura distribuída (microsserviços) que utiliza 
                    <strong>Inteligência Artificial Generativa</strong> para a otimização de fluxos pedagógicos complexos.
                    <br><br>
                    No front-end, possuo sólida experiência com <strong>JavaScript</strong> e <strong>Vue.js</strong>. 
                    No back-end, utilizo <strong>PHP (Laravel)</strong> e <strong>Python</strong> — atuando com 
                    <strong>Django</strong> para sistemas robustos e <strong>Pandas</strong> para análise de dados. 
                    Complemento minha stack com <strong>MySQL</strong> e o uso de <strong>Docker</strong> para a 
                    padronização de ambientes, além de <strong>Git</strong> e <strong>GitHub</strong> para versionamento. 
                    Acredito que a combinação entre técnica e visão estratégica é a chave para soluções que realmente fazem a diferença.
                </p>
            </div>
            <div class="about-image">
                <img :src="Figura" alt="Programador" class="programmer-image">
            </div>
        </div>
    </div>
</template>

<style scoped>
/* O estilo permanece o mesmo que você definiu para manter a identidade visual */
.about-container { padding: 80px 20px; }
.about-inner { display: flex; justify-content: space-between; align-items: center; max-width: 1200px; margin: 0 auto; }
.about-content { max-width: 60%; }
.about-title { font-size: 3rem; font-weight: 700; color: #2c3e50; margin-bottom: 20px; }
.about-title::after { content: ''; display: block; width: 80px; height: 4px; background-color: #ff6b6b; margin-top: 10px; }
.about-text { font-size: 1.1rem; line-height: 1.8; color: #555; text-align: justify; }
.about-text strong { color: #ff6b6b; font-weight: bold; }
.about-image { width: 35%; display: flex; justify-content: center; }
.programmer-image { max-width: 100%; height: auto; }

@media (max-width: 768px) {
    .about-inner { flex-direction: column; align-items: center; }
    .about-content { max-width: 100%; margin-bottom: 30px; text-align: center; }
    .about-title { font-size: 2.5rem; }
    .about-title::after { margin: 10px auto 0; }
    .about-text { font-size: 1rem; }
    .about-image { width: 60%; }
}
@media (max-width: 480px) { .about-image { width: 80%; } }
</style>