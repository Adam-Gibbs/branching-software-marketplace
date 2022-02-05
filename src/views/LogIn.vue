<template>
  <section class="py-12 bg-green-900 h-screen">
    <div class="container px-4 mx-auto">
      <div class="flex max-w-md mx-auto flex-col text-center">
        <img
          class="h-12 block my-10"
          src="@/assets/icon.svg"
          alt="Icon for Branching Software"
        />
        <div class="mt-12 mb-8 p-8 bg-white rounded">
          <span class="text-sm text-gray-600">Log In</span>
          <h4 class="mb-6 text-3xl">Path To Zero</h4>
          <Warning
            v-for="item in warningList"
            :text="item"
            :key="item"
            @removeWarning="removeWarning($event)"
          />
          <form>
            <div class="flex my-4 px-4 rounded">
              <input
                class="w-full py-4 text-sm placeholder-gray-400 font-semibold leading-none outline-none"
                type="email"
                ref="email"
                v-model="email"
                placeholder="Email"
              />
              <font-awesome-icon
                icon="at"
                class="h-6 w-6 my-auto text-gray-400"
              />
            </div>
            <div class="flex mb-6 px-4 rounded">
              <input
                class="w-full py-4 text-sm placeholder-gray-400 font-semibold leading-none outline-none"
                type="password"
                v-model="password"
                placeholder="Password"
              />
              <font-awesome-icon
                icon="key"
                class="h-6 w-6 my-auto text-gray-400"
              />
            </div>
            <button
              class="w-full p-3 text-center flex justify-center items-center text-white font-semibold leading-none bg-green-main hover:bg-green-highlight rounded"
              @click.prevent="logIn"
              type="submit"
            >
              <p v-show="!loading">Log In</p>
              <font-awesome-icon
                icon="fan"
                class="h-4 w-4 animate-spin"
                v-show="loading"
              />
            </button>
          </form>
          <div class="block mt-3">
            <button
              class="m-3 text-xs text-green-main text-center"
              @click="$router.push('/forgot-password')"
            >
              Forgot Password
            </button>
            <button
              class="m-3 text-xs text-green-main text-center"
              @click="$router.push('/signup')"
            >
              No Account? Sign Up
            </button>
          </div>
        </div>
        <div>
          <p class="text-xs text-white text-center">
            <button
              class="underline hover:text-green-highlight"
              @click="$router.push('/privacy-policy')"
            >
              Privacy Policy
            </button>
            and
            <button
              class="underline hover:text-green-highlight"
              @click="$router.push('/terms-of-use')"
            >
              Terms of Use
            </button>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import router from "@/router";
import { defineComponent } from "vue";
import Warning from "@/components/alerts/Warning";

export default defineComponent({
  components: {
    Warning,
  },
  data() {
    return {
      email: "",
      password: "",
      warningList: [],
      loading: false,
    };
  },
  mounted() {
    this.$nextTick(function () {
      this.$refs.email.focus();
    });
  },
  methods: {
    logIn() {
      this.warningList = [];
      if (this.email === "") {
        this.addWarning("Email is required");
      }
      if (this.password === "") {
        this.addWarning("Password is required");
      }
      if (this.warningList.length === 0) {
        this.sendRequest();
      }
    },
    authPass(response) {
      localStorage.setItem("userId", response.result.id);
      localStorage.setItem("userName", response.result.firstName);
      if (this.$route.query.go) {
        router.push({ name: this.$route.query.go });
      } else {
        router.push({
          name: "Home",
        });
      }
    },
    sendRequest() {
      this.loading = true;
      const requestOptions = {
        method: "POST",
        body: JSON.stringify({
          email: this.email,
          password: this.password,
        }),
      };
      fetch(process.env.VUE_APP_APIURL + "/v1/signin", requestOptions)
        .then(async (response) => {
          const data = await response.json();

          // check for error response
          if (!response.ok) {
            this.addWarning(data.message);
            this.loading = false;
            return;
          }

          this.loading = false;
          this.authPass(data);
        })
        .catch((e) => {
          console.log(e);
          this.addWarning("An error occurred, please retry");
          this.loading = false;
        });
    },
    addWarning(text) {
      if (!this.warningList.includes(text)) {
        this.warningList.push(text);
      }
    },
    removeWarning(text) {
      this.warningList.splice(this.warningList.indexOf(text), 1);
    },
  },
});
</script>
