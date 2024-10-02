<script setup>
import { ref } from "vue";

const items = ref([
  {
    label: "Home",
    icon: "pi pi-home",
    route: "/",
  },
  {
    label: "About",
    icon: "pi pi-star",
    route: "/about",
  },
]);
</script>

<template>
  <div class="card">
    <Menubar :model="items">
      <template #item="{ item, props }">
        <router-link
          v-if="item.route"
          v-slot="{ href, navigate }"
          :to="item.route"
          custom
        >
          <a v-ripple :href="href" v-bind="props.action" @click="navigate">
            <span :class="item.icon" />
            <span class="ml-2">{{ item.label }}</span>
          </a>
        </router-link>
      </template>
    </Menubar>
  </div>
</template>
