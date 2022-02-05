<template>
  <div class="py-2 px-6">
    <div class="p-6 border-l-4 border-red-600 bg-red-500 rounded-r-lg">
      <div class="flex">
        <div class="w-auto">
          <span class="w-auto inline-block mr-2">
            <svg
              width="20"
              height="20"
              viewbox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM10 15C9.4 15 9 14.6 9 14C9 13.4 9.4 13 10 13C10.6 13 11 13.4 11 14C11 14.6 10.6 15 10 15ZM11 10C11 10.6 10.6 11 10 11C9.4 11 9 10.6 9 10V6C9 5.4 9.4 5 10 5C10.6 5 11 5.4 11 6V10Z"
                fill="#FADDDA"
              ></path>
            </svg>
          </span>
        </div>
        <div class="w-full">
          <div class="flex">
            <h3 class="text-white font-medium">
              Are you sure you would like to delete
              <strong>{{ item.name }}</strong>
            </h3>
            <button
              class="ml-auto text-sm inline-block w-full md:w-auto px-3 py-1 font-small text-white bg-red-800 hover:bg-red-700 rounded transition"
              @click="deleteClick()"
              id="delete"
            >
              <font-awesome-icon
                icon="fan"
                class="h-4 w-4 px-10 animate-spin"
                v-show="loading"
              />
              <p v-if="!loading">Confirm Delete</p>
            </button>
            <button
              class="ml-2 text-sm inline-block w-full md:w-auto px-3 py-1 font-small text-white bg-red-500 hover:bg-red-700 rounded transition"
              @click="emitRemoveDelete()"
              :disabled="loading"
              id="cancel-delete"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data: function () {
    return {
      loading: false,
    };
  },
  methods: {
    emitRemoveDelete() {
      console.log(this.item);
      this.$emit("removeDelete", this.item);
    },
    emitAddWarning(message: string) {
      this.$emit("addWarning", message);
    },
    deleteClick() {
      this.loading = true;
      const requestOptions = {
        method: "POST",
        body: JSON.stringify({
          userId: localStorage.getItem("userId"),
          id: this.item.id,
        }),
      };
      fetch(process.env.VUE_APP_APIURL + this.item.link, requestOptions)
        .then(async (response) => {
          const data = await response.json();

          // check for error response
          if (await !response.ok) {
            this.loading = false;
            this.emitAddWarning(data.message);
            return;
          }

          this.loading = false;
          this.emitRemoveDelete();
        })
        .catch(() => {
          this.loading = false;
          this.emitAddWarning("An error occurred, please retry");
        });
    },
  },
});
</script>
