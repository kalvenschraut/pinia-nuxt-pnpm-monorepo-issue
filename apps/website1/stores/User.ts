import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', () => {
  const user = reactive({ name: 'bob', email: 'bob@gmail.com' });
  return { user };
});
