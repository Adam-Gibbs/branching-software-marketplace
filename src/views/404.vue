<template>
  <section
    class="h-screen bg-green-900 bg-no-repeat bg-cover"
    :style="{ backgroundImage: 'url(' + require('@/assets/404.png') + ')' }"
  >
    <div class="flex h-full items-center">
      <div class="container mx-auto px-4">
        <div class="max-w-md mx-auto text-center">
          <h2 class="mb-4 text-2xl text-bold text-white font-heading">
            Page not found
          </h2>
          <p class="mb-10 text-lg text-gray-100">
            Sorry! We are unable to find the page you are looking for
          </p>
          <div class="flex flex-wrap items-center justify-center">
            <button
              class="inline-flex font-bold w-full sm:w-auto mb-6 sm:mb-0 sm:mr-8 items-center justify-center py-4 px-6 rounded-full bg-yellow-300 hover:bg-yellow-400 transform"
              @click="$router.push('/home')"
              id="go-home"
            >
              <font-awesome-icon
                icon="long-arrow-alt-left"
                class="mr-2 h-6 font-heading text-gray-700"
              />
              <span class="text-sm font-heading">Back to home</span>
            </button>
            <button
              class="inline-flex font-bold cursor-pointer items-center text-white hover:underline"
              @click="reloadPage"
            >
              <span class="mr-2 text-sm font-heading">Try again</span>
              <font-awesome-icon
                icon="long-arrow-alt-right"
                class="h-6 my-auto text-yellow-300"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  methods: {
    reloadPage() {
      window.location.reload();
    },
  },
});
</script>
