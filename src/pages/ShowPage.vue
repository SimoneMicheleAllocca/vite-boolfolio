<template>
    <div v-if="project">
      <h1>{{ project.title }}</h1>
      <p>{{ project.description }}</p>
      <!-- Aggiungi altri dettagli del progetto se necessario -->
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </template>
  
  <script>
  import apiClient from '../api';
  
  export default {
    name: 'ShowProject',
    data() {
      return {
        project: null,
      };
    },
    created() {
      const projectId = this.$route.params.id;
      apiClient.get(`/projects/${projectId}`)
        .then(response => {
          this.project = response.data;
        })
        .catch(error => {
          console.error('There was an error fetching the project!', error);
        });
    },
  };
  </script>