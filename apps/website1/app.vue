<template>
  <div>{{ user.name }}</div>
</template>
<script setup lang="ts">
const user = useUserStore();
</script>
