<template>
  <li
    class="pr-8 md:pr-12 my-4 bg-gray-50 cursor-pointer"
    :class="activated ? 'py-12' : 'py-6'"
    @click="activated = !activated"
  >
    <div class="border-l-2 border-green-highlight">
      <div
        class="pl-8 md:pl-16 lg:pl-28 w-full flex justify-between items-center text-left"
      >
        <span
          class="mr-4 font-bold font-heading"
          :class="activated ? 'text-2xl text-green-main' : 'text-xl'"
          >{{ title }}</span
        >
        <font-awesome-icon
          :icon="activated ? 'chevron-up' : 'chevron-down'"
          class="flex-shrink-0 w-5 h-5 text-green-main"
        />
      </div>
      <p
        class="pl-8 md:pl-16 lg:pl-28 pr-20 max-w-4xl mt-4 text-gray-500"
        v-if="activated"
      >
        {{ description }}
      </p>
    </div>
  </li>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  data: function () {
    return {
      activated: false,
    };
  },
});
</script>
