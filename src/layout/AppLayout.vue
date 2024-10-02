<script setup>
import { RouterView } from "vue-router";
import AppTopbar from "./AppTopBar.vue";
</script>

<template>
  <div id="layout">
    <header>
      <AppTopbar></AppTopbar>
    </header>
    <RouterView />
  </div>
</template>
