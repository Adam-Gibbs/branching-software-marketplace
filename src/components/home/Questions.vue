<template>
  <section class="py-12 bg-gray-100">
    <div class="container mx-auto px-4">
      <h2 class="mb-16 text-4xl font-bold font-heading">FAQs</h2>
      <ul>
        <Question
          title="Question 1"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt laboriosam modi possimus beatae nam! Similique sequi, modi laboriosam consectetur alias iusto odio aliquam consequuntur, provident tempora dolorum laborum facere aperiam."
        />
        <Question
          title="Question 2"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt laboriosam modi possimus beatae nam! Similique sequi, modi laboriosam consectetur alias iusto odio aliquam consequuntur, provident tempora dolorum laborum facere aperiam."
        />
        <Question
          title="Question 3"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt laboriosam modi possimus beatae nam! Similique sequi, modi laboriosam consectetur alias iusto odio aliquam consequuntur, provident tempora dolorum laborum facere aperiam."
        />
        <Question
          title="Question 4"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt laboriosam modi possimus beatae nam! Similique sequi, modi laboriosam consectetur alias iusto odio aliquam consequuntur, provident tempora dolorum laborum facere aperiam."
        />
        <Question
          title="Question 5"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt laboriosam modi possimus beatae nam! Similique sequi, modi laboriosam consectetur alias iusto odio aliquam consequuntur, provident tempora dolorum laborum facere aperiam."
        />
        <Question
          title="Question 6"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt laboriosam modi possimus beatae nam! Similique sequi, modi laboriosam consectetur alias iusto odio aliquam consequuntur, provident tempora dolorum laborum facere aperiam."
        />
      </ul>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Question from "@/components/home/QuestionItem.vue";

export default defineComponent({
  components: { Question },
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
