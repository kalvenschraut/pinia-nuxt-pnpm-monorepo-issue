<template>
  <div>{{ userStore.user.name }}</div>
</template>
<script setup lang="ts">
import { useUserStore } from './stores/User';
const userStore = useUserStore();
</script>
