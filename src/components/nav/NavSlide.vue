<template>
  <div
    class="xl:hidden fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50"
    aria-labelledby="slide-over-title"
    role="dialog"
    aria-modal="true"
  >
    <div
      class="fixed inset-0 bg-gray-800 opacity-50 transition-opacity"
      @click="emitHide()"
    />
    <nav
      class="relative flex flex-col py-4 px-4 w-full h-full bg-white border-r overflow-y-auto"
    >
      <div class="flex items-center mx-auto mb-8">
        <button class="mr-auto text-2xl font-bold font-heading">
          <img
            class="h-9 mx-auto"
            src="@/assets/icon.svg"
            alt="Icon for Branching Software"
          />
          Path to Zero Marketplace
        </button>
      </div>
      <div class="flex mb-8 items-center mx-auto justify-between">
        <UserIcon />
      </div>
      <input
        class="block mb-4 py-5 px-8 w-full placeholder-gray-400 text-xs uppercase font-semibold font-heading bg-gray-50 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
        type="text"
        placeholder="Search"
      />
      <ul class="text-2xl font-bold font-heading">
        <Locations />
      </ul>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Locations from "@/components/nav/NavLocations.vue";
import UserIcon from "@/components/nav/UserIcon.vue";

export default defineComponent({
  components: { Locations, UserIcon },
  methods: {
    emitHide() {
      this.$emit("hide");
    },
  },
});
</script>
