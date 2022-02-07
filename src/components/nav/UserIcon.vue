<template>
  <button
    class="flex px-6 py-2 m-2 font-semibold font-heading hover:text-green-main hover:border-green-main border-2 rounded-xl transition"
    @click="$router.push('/signup')"
    v-if="!name"
  >
    <font-awesome-icon icon="user-plus" class="mr-3 h-5 w-5" />
    <p>Sign&nbsp;Up</p>
  </button>
  <button
    class="flex px-6 py-2 m-2 font-semibold font-heading hover:text-green-main hover:border-green-main border-2 rounded-xl transition"
    @click="$router.push('/login')"
    v-if="!name"
  >
    <font-awesome-icon icon="sign-in" class="mr-3 h-5 w-5" />
    <p>Log&nbsp;In</p>
  </button>
  <div class="inline-block relative items-center px-6" v-if="name">
    <button class="flex items-center" @click="openMenu = !openMenu">
      <div
        class="bg-blue-500 text-white w-9 h-9 rounded-full flex justify-center items-center"
      >
        {{ name.charAt(0) }}
      </div>
      <span class="mx-2 font-medium">{{ name }}</span>
      <span>
        <font-awesome-icon icon="chevron-down" class="w-3 h-3" />
      </span>
    </button>
    <UserMenu :openMenu="openMenu" @close="openMenu = false" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import UserMenu from "@/components/nav/UserMenu.vue";

export default defineComponent({
  components: { UserMenu },
  data: function () {
    return {
      name: localStorage.getItem("userName"),
      openMenu: false,
    };
  },
});
</script>
