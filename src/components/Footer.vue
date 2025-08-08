<template>
    <footer class="footer-section">
        <div class="footer-container">
            <img src="../../assets/logo.png" alt="Logo João Gabriel" class="footer-logo" />
            <p>&copy; {{ currentYear }} João Gabriel. Todos os direitos reservados.</p>
        </div>
    </footer>
</template>

<script setup>
import { ref } from 'vue';

const currentYear = ref(new Date().getFullYear());
</script>

<style scoped>
.footer-section {
    color: #2c3e50;
    text-align: center;
    padding: 20px 0;
    width: 100%;
    margin: 0;
}

.footer-container {
    max-width: 1200px;
    margin: 0 auto;
}

.footer-logo {
    width: 50px;
    /* tamanho da logo */
    height: auto;
    margin-bottom: 8px;
    /* espaço entre a logo e o texto */
}

.footer-section p {
    margin: 5px 0;
    font-size: 0.9rem;
}
</style>
