<template>
    <transition name="modal-fade">
        <div class="modal-overlay" @click="$emit('close')">
            <div class="modal-content" @click.stop>
                <button class="modal-close-button" @click="$emit('close')">&times;</button>
                
                <h3 class="project-name">{{ project.title }}</h3>
                
                <p class="modal-full-description">{{ project.fullDescription }}</p>

                <div class="project-tech-tags modal-tags">
                    <span v-for="tech in project.technologies" :key="tech" class="tech-tag">
                        {{ tech }}
                    </span>
                </div>

                <a :href="project.link" target="_blank" class="project-button modal-button">
                    CONFERIR
                </a>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'ProjectModal',
    props: {
        project: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
/* Estilos do Modal (transição, overlay, conteúdo) */
.modal-fade-enter-active,
.modal-fade-leave-active {
    transition: opacity 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
    opacity: 0;
}

.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: 20px;
}

.modal-content {
    background-color: #2c3e50;
    padding: 30px 40px;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
    color: #f9f9f9;
    width: 100%;
    max-width: 700px;
    max-height: 90vh;
    overflow-y: auto;
    position: relative;
    text-align: left;
}

.modal-close-button {
    position: absolute;
    top: 10px;
    right: 15px;
    background: none;
    border: none;
    font-size: 2.5rem;
    color: #f9f9f9;
    cursor: pointer;
}

.modal-close-button:hover {
    color: #ff6b6b;
}

.modal-full-description {
    font-size: 1.1rem;
    line-height: 1.7;
    color: #ccc;
    margin-bottom: 30px;
    white-space: pre-wrap;
}

/* Estilos compartilhados (reutilizados do card) */
.project-name {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 20px;
    background: none;
    -webkit-text-fill-color: #f9f9f9;
    text-align: center;
}

.project-tech-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 5px;
    margin-bottom: 30px;
    justify-content: center;
}

.tech-tag {
    background-color: rgba(255, 255, 255, 0.1);
    color: #f9f9f9;
    padding: 8px 15px;
    border-radius: 20px;
    font-size: 0.9rem;
    font-weight: 500;
}

.project-button {
    display: table;
    margin: 0 auto;
    padding: 12px 25px;
    background-color: #ff6b6b;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
    font-weight: bold;
    transition: background-color 0.3s ease;
}

.project-button:hover {
    background-color: #e65c5c;
}

/* Media Query para o modal em telas pequenas */
@media (max-width: 576px) {
    .modal-content {
        padding: 20px;
        width: 95%;
    }
    .project-name {
        font-size: 1.5rem;
    }
}
</style>