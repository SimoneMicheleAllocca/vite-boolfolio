<script >

</script>

<template>
  <div class="project-card">
    <h2>{{ project.name }}</h2>
    <p>{{ project.description }}</p>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    project: Object,
  },
};
</script>

<style scoped>
.project-card {
  border: 1px solid #ccc;
  padding: 16px;
  margin: 8px;
}
</style>