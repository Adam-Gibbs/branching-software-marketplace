<template>
  <section class="relative">
    <nav class="flex justify-between border-b-2 border-b-gray-200 bg-gray-100">
      <Top />
      <a class="navbar-burger self-center mx-6 xl:hidden" href="#">
        <BurgerButton :open="open" @toggleOpen="toggleOpen($event)" />
      </a>
    </nav>
    <Slide v-if="!open" @hide="toggleOpen(true)" />
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Top from "@/components/nav/NavTop.vue";
import BurgerButton from "@/components/nav/BurgerButton.vue";
import Slide from "@/components/nav/NavSlide.vue";

export default defineComponent({
  components: { Top, Slide, BurgerButton },
  data: function () {
    return {
      open: true,
      name: localStorage.getItem("userName"),
    };
  },
  methods: {
    toggleOpen: function (newValue: boolean) {
      this.open = newValue;
    },
  },
});
</script>
