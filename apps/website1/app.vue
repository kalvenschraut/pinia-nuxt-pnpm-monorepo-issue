<template>
  <div>{{ userStore.user.name }}</div>
</template>
<script setup lang="ts">
const userStore = useUserStore();
</script>
