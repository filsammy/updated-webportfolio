<template>
    <!-- My Projects Section -->
    <section class="pb-5" id="projects">
        <!-- Section Heading -->
        <h1 class="mt-5 mb-5 pb-4 text-center">My Projects</h1>

        <!-- Full Stack Web Apps -->
        <div class="project-category-section mb-5">
            <h2 class="category-title text-center mb-4">Full Stack Web Apps</h2>
            <div v-for="(group, index) in chunkedFullStackProjects" :key="'fullstack-' + index"
                class="card-deck my-4 justify-content-center d-flex align-items-stretch">
                <ProjectCard v-for="project in group" :key="project.id" :project="project" />
            </div>
        </div>

        <!-- Client Projects -->
        <div class="project-category-section mb-5">
            <h2 class="category-title text-center mb-4">Client Projects</h2>
            <div v-for="(group, index) in chunkedClientProjects" :key="'client-' + index"
                class="card-deck my-4 justify-content-center d-flex align-items-stretch">
                <ProjectCard v-for="project in group" :key="project.id" :project="project" />
            </div>
        </div>

        <!-- Other Projects (Text Links Only) -->
        <div class="project-category-section mb-5">
            <h2 class="category-title text-center mb-4">Other Projects</h2>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-lg-8">
                        <div class="other-projects-container">
                            <div v-for="project in otherProjects" :key="project.id" class="project-item">
                                <a :href="project.url" target="_blank" rel="noopener noreferrer" class="project-link">
                                    {{ project.title }}
                                </a>
                                <p class="project-description">
                                    {{ project.description }}
                                </p>
                                <div class="project-technologies">
                                    <span v-for="tech in project.technologies" :key="tech" class="tech-badge">
                                        {{ tech }}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { computed } from 'vue';
import ProjectCard from './ProjectCard.vue';
import projects from '../data/projects.json';

const chunkSize = 2;

// Define which projects belong to which category by ID
const fullStackIds = [0, 2, 3, 5]; // Dating App, E-commerce, Blog, Course Booking
const clientIds = [1, 6, 7, 8, 9]; // Gym Web App
const otherIds = [4]; // Mobile Movie App

// Filter projects by category
const fullStackProjects = computed(() =>
    projects.filter(p => fullStackIds.includes(p.id))
);

const clientProjects = computed(() =>
    projects.filter(p => clientIds.includes(p.id))
);

const otherProjects = computed(() =>
    projects.filter(p => otherIds.includes(p.id))
);

// Chunk full stack projects
const chunkedFullStackProjects = computed(() => {
    const chunks = [];
    const projectList = fullStackProjects.value;
    for (let i = 0; i < projectList.length; i += chunkSize) {
        chunks.push(projectList.slice(i, i + chunkSize));
    }
    return chunks;
});

// Chunk client projects
const chunkedClientProjects = computed(() => {
    const chunks = [];
    const projectList = clientProjects.value;
    for (let i = 0; i < projectList.length; i += chunkSize) {
        chunks.push(projectList.slice(i, i + chunkSize));
    }
    return chunks;
});
</script>

<style scoped>
.card-deck {
    display: flex;
    flex-wrap: wrap;
}

.card-deck>* {
    flex: 1 1 auto;
}

.project-category-section {
    margin-bottom: 3rem;
}

.category-title {
    font-size: 1.8rem;
    font-weight: 600;
    color: #ffffff;
    position: relative;
    padding-bottom: 1rem;
}

.category-title::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: linear-gradient(90deg, #0d6efd, #0dcaf0);
    border-radius: 2px;
}

.other-projects-container {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
}

.project-item {
    background: linear-gradient(145deg, #ffffff 0%, #ffffffd9 100%);
    border-radius: 15px;
    padding: 1.5rem 1.75rem;
    border: 1px solid rgba(32, 58, 67, 0.1);
    box-shadow: 0 4px 12px rgba(15, 32, 39, 0.12);
    transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.project-item:not(:last-child) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.project-item:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 22px rgba(15, 32, 39, 0.2);
}

.project-link {
    font: normal normal 600 18px Montserrat;
    color: #203A43;
    text-decoration: none;
    display: inline-block;
    transition: color 0.3s ease;
}

.project-link:hover {
    color: #039682;
    text-decoration: underline;
}

.project-description {
    font: normal normal 14px Montserrat;
    color: #000000;
    line-height: 1.6;
    margin-top: 0.5rem;
    margin-bottom: 0.75rem;
}

.project-technologies {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 10px;
    padding-top: 10px;
    border-top: 1px solid rgba(32, 58, 67, 0.1);
}

.tech-badge {
    background: rgba(3, 150, 130, 0.9);
    color: #ffffff;
    padding: 0.25rem 0.75rem;
    border-radius: 12px;
    font-size: 0.8rem;
    font-weight: 550;
    border: 1px solid rgba(13, 110, 253, 0.3);
}

@media (max-width: 768px) {
    .category-title {
        font-size: 1.5rem;
    }

    .other-projects-container {
        padding: 1.5rem;
    }

    .project-link {
        font-size: 1rem;
    }
}
</style>