<template>
  <li class="mr-12 my-2">
    <a
      class="transition"
      :class="
        currentRoute('/') || currentRoute('/home')
          ? 'text-green-main cursor-default'
          : 'hover:text-gray-500 cursor-pointer'
      "
      @click="$router.push('/home')"
      >Home</a
    >
  </li>
  <li class="mr-12 my-2">
    <a
      class="transition"
      :class="
        currentRoute('/proposals')
          ? 'text-green-main cursor-default'
          : 'hover:text-gray-500 cursor-pointer'
      "
      @click="$router.push('/proposals')"
      >Proposals</a
    >
  </li>
  <li class="mr-12 my-2" v-if="userId">
    <a
      class="transition"
      :class="
        currentRoute('/messages')
          ? 'text-green-main cursor-default'
          : 'hover:text-gray-500 cursor-pointer'
      "
      @click="$router.push('/messages')"
      >Messages</a
    >
  </li>
  <li v-if="userId">
    <a
      class="transition"
      :class="
        currentRoute('/projects')
          ? 'text-green-main cursor-default'
          : 'hover:text-gray-500 cursor-pointer'
      "
      @click="$router.push('/projects')"
      >My Projects</a
    >
  </li>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data: function () {
    return {
      userId: localStorage.getItem("userId"),
    };
  },
  methods: {
    currentRoute(path: string): boolean {
      // return true if current path equals path
      return this.$route.path.endsWith(path);
    },
  },
});
</script>
