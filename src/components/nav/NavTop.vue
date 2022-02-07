<template>
  <div class="px-8 py-4 flex w-full items-center">
    <button class="text-2xl font-bold font-heading">
      <img
        class="h-9 mx-auto"
        src="@/assets/icon.svg"
        alt="Icon for Branching Software"
      />
      Path to Zero Marketplace
    </button>
    <ul
      class="hidden xl:flex mr-auto ml-10 font-semibold font-heading items-center"
    >
      <Locations />
    </ul>
    <div class="hidden ml-10 xl:inline-block">
      <input
        class="py-5 px-8 w-full placeholder-gray-400 text-xs uppercase font-semibold font-heading bg-gray-50 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
        type="text"
        placeholder="Search"
      />
    </div>
  </div>
  <div class="hidden xl:flex items-center border-l">
    <UserIcon />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Locations from "@/components/nav/NavLocations.vue";
import UserIcon from "@/components/nav/UserIcon.vue";

export default defineComponent({
  components: { Locations, UserIcon },
});
</script>
