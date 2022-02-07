<template>
  <Nav />
  <Call />
  <Questions />
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Nav from "@/components/nav/Nav.vue";
import Call from "@/components/home/Call.vue";
import Questions from "@/components/home/Questions.vue";
import Footer from "@/components/nav/Footer.vue";

export default defineComponent({
  components: { Nav, Call, Questions, Footer },
});
</script>
