<template>
  <Nav />
  <Call />
  <Questions />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Nav from "@/components/nav/Nav.vue";
import Call from "@/components/home/Call.vue";
import Questions from "@/components/home/Questions.vue";

export default defineComponent({
  components: { Nav, Call, Questions },
});
</script>
