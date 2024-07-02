<template>
  <div>
    <h1>Project List</h1>
    <div v-for="project in projects" :key="project.id">
      <router-link :to="`/projects/${project.id}`">
        <ProjectCard :project="project" />
      </router-link>
    </div>
  </div>
</template>

<script>
import apiClient from '../api'; // Importa il client API
import ProjectCard from '../components/ProjectCard.vue';

export default {
  name: 'Projects',
  components: {
    ProjectCard,
  },
  data() {
    return {
      projects: [],
    };
  },
  created() {
    apiClient.get('/projects')
      .then(response => {
        this.projects = response.data;
      })
      .catch(error => {
        console.error('There was an error fetching the projects!', error);
      });
  },
};
</script>