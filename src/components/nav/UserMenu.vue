<template>
  <transition
    enter-active-class="transition ease-out duration-100"
    enter-class="transform opacity-0 scale-95"
    enter-to-class="transform opacity-100 scale-100"
    leave-active-class="transition ease-in duration-75"
    leave-class="transform opacity-100 scale-100"
    leave-to-class="transform opacity-0 scale-95"
  >
    <div
      v-if="openMenu"
      class="absolute bg-white right-0 m-2 px-4 rounded-xl shadow-lg overflow-hidden border z-20"
    >
      <div class="border-t border-gray-100"></div>
      <div class="py-1 text-gray-600">
        <button
          class="p-4 flex items-center hover:text-green-main"
          @click="$router.push('/settings')"
        >
          <font-awesome-icon icon="cog" class="mr-2 h-4 w-4" />
          <span> Settings </span>
        </button>
        <button
          class="p-4 flex items-center hover:text-red-main"
          @click="logOut"
        >
          <font-awesome-icon icon="sign-out" class="mr-2 h-4 w-4" />
          <span> Logout </span>
        </button>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import router from "@/router";
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    openMenu: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    logOut() {
      localStorage.clear();
      router.push({
        name: "Log In",
      });
    },
  },
});
</script>
