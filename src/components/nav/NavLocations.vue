<template>
  <li class="mr-12 my-2">
    <a class="hover:text-gray-600 cursor-pointer" @click="$router.push('/home')"
      >Home</a
    >
  </li>
  <li class="mr-12 my-2">
    <a
      class="hover:text-gray-600 cursor-pointer"
      @click="$router.push('/proposals')"
      >Proposals</a
    >
  </li>
  <li class="mr-12 my-2" v-if="userId">
    <a
      class="hover:text-gray-600 cursor-pointer"
      @click="$router.push('/messages')"
      >Messages</a
    >
  </li>
  <li v-if="userId">
    <a
      class="hover:text-gray-600 cursor-pointer"
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
});
</script>
