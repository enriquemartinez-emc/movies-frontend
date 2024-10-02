<script setup>
import { ref, onMounted } from "vue";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import MoviesService from "@/services/MoviesService";

const movies = ref();

onMounted(() => {
  MoviesService.getMovies().then((response) => (movies.value = response.data));
});
</script>

<template>
  <div class="card">
    <DataTable :value="movies" tableStyle="min-width: 50rem">
      <Column field="id" header="Id"></Column>
      <Column field="title" header="Title"></Column>
      <Column field="director" header="Director"></Column>
      <Column field="releaseDate" header="Release Date"></Column>
    </DataTable>
  </div>
</template>
