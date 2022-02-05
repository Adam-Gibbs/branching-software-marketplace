<template>
  <section class="relative py-10 lg:py-20 bg-green-light">
    <img
      class="hidden lg:block lg:absolute top-0 left-0 mt-32"
      src="zeus-assets/icons/dots/blue-dot-left-bars.svg"
      alt=""
    />
    <img
      class="h-16 mt-4 ml-auto lg:hidden"
      src="zeus-assets/icons/dots/yellow-dot-right-shield.svg"
      alt=""
    />
    <img
      class="hidden lg:block lg:absolute top-0 right-0 mt-64"
      src="zeus-assets/icons/dots/yellow-dot-right-shield.svg"
      alt=""
    />
    <div class="relative container px-4 mx-auto">
      <div class="max-w-3xl mx-auto text-center">
        <span class="text-green-main text-lg font-semibold"
          >What is Path to Zero Marketplace?</span
        >
        <h2 class="mt-8 mb-6 lg:mb-10 text-4xl font-semibold">
          We link those passionate about green change with organisations who
          need it.
        </h2>
        <p class="mb-6 lg:mb-12 text-xl text-gray-500">
          Path to Zero Marketplace is a place for sustainable infrastructure
          experts, installers and researchers to share their knowledge and
          expertise. To try and help organisations reach their net zero goals
          one change at a time.
        </p>
        <button
          class="inline-block w-full md:w-auto mb-2 mr-4 py-4 px-8 text-sm font-medium leading-normal bg-green-main hover:bg-green-highlight text-white rounded transition"
          @click="$router.push('/signup')"
        >
          Sign Up</button
        ><a
          class="inline-block w-full md:w-auto mb-2 py-4 px-8 text-sm font-medium leading-normal border bg-white border-gray-300 hover:border-gray-400 rounded"
          @click="$router.push('/proposals')"
          href="#"
          >View Proposals</a
        >
      </div>
    </div>
  </section>
</template>
