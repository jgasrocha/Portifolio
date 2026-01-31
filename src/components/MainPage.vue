<!-- components/MainPage.vue -->
<template>
  <div>
    <Home id="home-section" />
    <About id="about-section" />
    <Projects id="projects-section" />
    <Skills id="skills-section" />
    <ServicesSection id="services-section" />
    <Contact id="contact-section" />
    <Footer />
  </div>
</template>

<script setup>
import Home from './Home.vue';
import About from './About.vue';
import Skills from './SkillsSection.vue'
import Projects from './ProjectsSection.vue';
import Contact from './ContactSection.vue';
import ServicesSection from './ServicesSection.vue';
import Footer from './Footer.vue';
</script>
