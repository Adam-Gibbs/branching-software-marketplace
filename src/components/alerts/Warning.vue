<template>
  <div class="pb-1 px-2">
    <div class="p-3 bg-yellow-100 border-l-4 border-yellow-500 rounded-r-xl">
      <div class="flex items-center">
        <font-awesome-icon
          icon="triangle-exclamation"
          class="inline-block mr-2 text-yellow-800"
        />
        <h3 class="text-yellow-800 text-sm font-medium" v-html="text" />
        <button class="ml-auto" @click="emitRemoveWarning">
          <font-awesome-icon icon="times" class="text-yellow-800" />
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    text: {
      type: String,
      required: true,
    },
  },
  methods: {
    emitRemoveWarning: function () {
      this.$emit("removeWarning", this.text);
    },
  },
});
</script>
