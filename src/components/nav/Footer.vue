<template>
  <section class="py-12 bg-gray-100">
    <div class="container mx-auto px-4">
      <div class="text-center pb-12 border-b border-gray-300">
        <button class="inline-block mb-12 text-2xl font-bold font-heading">
          <img
            class="h-9 mx-auto"
            src="@/assets/icon.svg"
            alt="Icon for Branching Software"
          />
          Path to Zero Marketplace
        </button>

        <div class="flex -mx-4 flex-wrap text-left">
          <div class="w-full lg:w-auto px-4 mb-10 lg:mb-0">
            <h3 class="mb-3 text-lg text-orange-300 font-bold font-heading">
              Contact Us:
            </h3>
            <a
              href="mailto: contact@branching.software"
              class="text-2xl md:text-2xl font-bold font-heading hover:text-green-main"
            >
              contact@branching.software
            </a>
          </div>

          <div class="w-auto md:ml-auto px-4">
            <div class="flex items-center">
              <h3 class="mr-5 text-xl text-orange-300 font-bold font-heading">
                Follow Us:
              </h3>
              <div class="flex">
                <button
                  class="inline-flex items-center justify-center w-10 h-10 bg-blue-500 text-white rounded-full m-2 hover:bg-gray-300 hover:text-blue-500"
                >
                  <font-awesome-icon
                    :icon="['fab', 'facebook-f']"
                    class="h-7"
                  />
                </button>
                <button
                  class="inline-flex items-center justify-center w-10 h-10 bg-blue-400 text-white rounded-full m-2 hover:bg-gray-300 hover:text-blue-400"
                >
                  <font-awesome-icon :icon="['fab', 'twitter']" class="h-7" />
                </button>
                <button
                  class="inline-flex items-center justify-center w-10 h-10 bg-purple-500 text-white rounded-full m-2 hover:bg-gray-300 hover:text-purple-500"
                >
                  <font-awesome-icon :icon="['fab', 'instagram']" class="h-7" />
                </button>
                <button
                  class="inline-flex items-center justify-center w-10 h-10 bg-blue-500 text-white rounded-full m-2 hover:bg-gray-300 hover:text-blue-500"
                >
                  <font-awesome-icon
                    :icon="['fab', 'linkedin-in']"
                    class="h-6"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-10 text-center">
        <p class="text-gray-500">© Copyright 2021 Branching Software</p>
      </div>
    </div>
  </section>
</template>
