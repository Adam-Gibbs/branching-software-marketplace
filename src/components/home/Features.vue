<template>
  <section class="py-12 bg-gray-100">
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap -mx-3">
        <FeatureItem
          title="Title"
          subtitle="Subtitle"
          colour="red-300"
          description="Description"
          icon="medal"
        />
        <FeatureItem
          title="Title"
          subtitle="Subtitle"
          colour="red-300"
          description="Description"
          icon="medal"
        />
        <FeatureItem
          title="Title"
          subtitle="Subtitle"
          colour="red-300"
          description="Description"
          icon="medal"
        />
        <FeatureItem
          title="Title"
          subtitle="Subtitle"
          colour="red-300"
          description="Description"
          icon="medal"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FeatureItem from "@/components/home/FeatureItem.vue";

export default defineComponent({
  components: { FeatureItem },
});
</script>
