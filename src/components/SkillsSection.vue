<template>
    <div id="skills-section" class="skills-container">
        <div class="skills-inner">
            <div class="skills-header">
                <h2 class="skills-title">Habilidades e especialidades</h2>
                <p class="skills-subtitle">
                    Explore as tecnologias e ferramentas nas quais me destaco para construir sistemas escaláveis e
                    eficientes.
                </p>
            </div>

            <div class="categories-wrapper">
                <div v-for="category in categories" :key="category.title" class="skill-category">
                    <h3 class="category-title">{{ category.title }}</h3>
                    <p class="category-description">{{ category.description }}</p>
                    <div class="skills-grid">
                        <div v-for="skill in category.skills" :key="skill.name" class="skill-tag">
                            <img :src="skill.icon" :alt="skill.name" class="skill-icon" />
                            <span>{{ skill.name }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
const iconPath = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/';

export default {
    name: 'SkillsSection',
    data() {
        return {
            categories: [
                {
                    title: 'Back-end',
                    description: 'Desenvolvedor back-end com experiência em PHP e Python, e seus principais frameworks como Laravel, Django e FastAPI.',
                    skills: [
                        { name: 'PHP', icon: `${iconPath}php/php-plain.svg` },
                        { name: 'Laravel', icon: `${iconPath}laravel/laravel-original-wordmark.svg` },
                        { name: 'Python', icon: `${iconPath}python/python-plain.svg` },
                        { name: 'Django', icon: `${iconPath}django/django-plain.svg` },
                        { name: 'FastAPI', icon: `${iconPath}fastapi/fastapi-plain.svg` },
                    ]
                },
                {
                    title: 'Front-end',
                    description: 'Desenvolvedor front-end com experiência em JavaScript, Vue.js e React, focado em interfaces modernas e responsivas.',
                    skills: [
                        { name: 'JavaScript', icon: `${iconPath}javascript/javascript-plain.svg` },
                        { name: 'Vue.js', icon: `${iconPath}vuejs/vuejs-plain.svg` },
                        { name: 'React', icon: `${iconPath}react/react-original.svg` },
                        { name: 'HTML5', icon: `${iconPath}html5/html5-plain.svg` },
                        { name: 'CSS3', icon: `${iconPath}css3/css3-plain.svg` },
                    ]
                },
                {
                    title: 'Banco de Dados',
                    description: 'Projetei e implementei soluções de banco de dados relacionais, incluindo MySQL, PostgreSQL e SQLite.',
                    skills: [
                        { name: 'MySQL', icon: `${iconPath}mysql/mysql-original-wordmark.svg` },
                        { name: 'PostgreSQL', icon: `${iconPath}postgresql/postgresql-plain.svg` },
                        { name: 'SQLite', icon: `${iconPath}sqlite/sqlite-plain.svg` },
                    ]
                },
                {
                    title: 'Infraestrutura & DevOps',
                    description: 'Experiência com Docker para criação e gerenciamento de ambientes de desenvolvimento e produção.',
                    skills: [
                        { name: 'Docker', icon: `${iconPath}docker/docker-plain.svg` },
                    ]
                },
                {
                    title: 'Arquitetura',
                    description: 'Conhecimento em design e implementação de APIs, utilizando padrões como REST e GraphQL.',
                    skills: [
                        { name: 'REST API', icon: 'https://api.iconify.design/heroicons-outline/link.svg' },
                        { name: 'GraphQL', icon: `${iconPath}graphql/graphql-plain.svg` },
                    ]
                }
            ]
        };
    }
}
</script>

<style scoped>
.skills-container {
    padding: 80px 20px;
    background-color: #f9f9f9;
    color: #333;
}

.skills-inner {
    max-width: 1000px;
    margin: 0 auto;
    text-align: left;
}

.skills-header {
    margin-bottom: 50px;
    border-bottom: 1px solid #ddd;
    padding-bottom: 30px;
}

.skills-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: #2c3e50;
    margin-bottom: 15px;
}

.skills-subtitle {
    font-size: 1.1rem;
    color: #555;
    max-width: 700px;
}

.categories-wrapper {
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;
}

.skill-category {
    margin-bottom: 10px;
}

.category-title {
    font-size: 1.5rem;
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 10px;
}

.category-description {
    font-size: 1rem;
    color: #555;
    margin-bottom: 20px;
    max-width: 700px;
    line-height: 1.6;
}

.skills-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
}

.skill-tag {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background-color: #e0e0e0;
    color: #555;
    padding: 8px 15px;
    border-radius: 20px;
    font-size: 0.9rem;
    font-weight: 500;
    border: 1px solid transparent;
    transition: background-color 0.2s ease, transform 0.2s ease;
}

.skill-tag:hover {
    background-color: #d0d0d0;
    transform: translateY(-2px);
}

.skill-icon {
    width: 18px;
    height: 18px;
    object-fit: contain;
}

@media (max-width: 768px) {
    .skills-title {
        font-size: 2rem;
    }

    .skills-subtitle {
        font-size: 1rem;
    }

    .category-title {
        font-size: 1.3rem;
    }

    .category-description {
        font-size: 0.95rem;
    }
}

@media (max-width: 576px) {
    .skills-container {
        padding: 50px 15px;
    }

    .skills-inner {
        text-align: center;
    }

    .category-title {
        text-align: center;
    }

    .category-description {
        text-align: left;
    }

    .skills-grid {
        justify-content: center;
    }
}
</style>