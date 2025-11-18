<template>
    <!-- My Projects Section -->
    <section class="pb-5" id="projects">
        <!-- Section Heading -->
        <h1 class="mt-5 mb-5 pb-4 text-center">My Projects</h1>


        <div v-for="(group, index) in chunkedProjects" :key="index"
            class="card-deck my-5 justify-content-center d-flex align-items-stretch">

            <ProjectCard v-for="project in group" :key="project.id" :project="project" />
        </div>
    </section>
</template>

<script setup>

import { computed } from 'vue';


import ProjectCard from './ProjectCard.vue';

import projects from '../data/projects.json';


const chunkSize = 2;


const chunkedProjects = computed(() => {
    const chunks = [];

    for (let i = 0; i < projects.length; i += chunkSize) {
        chunks.push(projects.slice(i, i + chunkSize));
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
</style>
