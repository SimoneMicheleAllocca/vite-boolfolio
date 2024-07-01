<template>
    <div>
      <h1>Project List</h1>
      <div v-for="project in projects" :key="project.id">
        <ProjectCard :project="project" />
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
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
      axios.get('http://localhost:8000/api/projects')
        .then(response => {
          this.projects = response.data;
        })
        .catch(error => {
          console.error('There was an error fetching the projects!', error);
        });
    },
  };
  </script>