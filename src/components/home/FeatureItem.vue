<template>
  <div class="w-full md:w-1/2 lg:w-1/4 p-3">
    <div class="relative h-full text-center pt-16 bg-white rounded-lg shadow">
      <div class="pb-12 border-b">
        <span
          class="inline-flex mb-16 items-center justify-center w-20 h-20 rounded-full"
          :class="`bg-${colour}`"
        >
          <font-awesome-icon :icon="icon" class="h-10 text-white" />
        </span>
        <h3 class="mb-4 text-xl font-bold font-heading">{{ title }}</h3>
        <p>{{ subtitle }}</p>
      </div>
      <div class="pt-12 px-14 pb-14 text-center">
        <p class="text-lg text-gray-500">
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    icon: {
      type: String,
      required: true,
    },
    colour: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
});
</script>
