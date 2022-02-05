<template>
  <section class="py-12 bg-green-900 h-screen">
    <div class="container px-4 mx-auto">
      <div class="flex max-w-md mx-auto flex-col text-center">
        <img
          class="h-12 block my-10"
          src="@/assets/icon.svg"
          alt="Icon for Branching Software"
        />
        <div class="mt-1 mb-3 p-8 bg-white rounded">
          <span class="text-sm text-gray-600">Sign Up</span>
          <h4 class="mb-6 text-3xl">Path To Zero</h4>
          <Warning
            v-for="item in warningList"
            :text="item"
            :key="item"
            @removeWarning="removeWarning($event)"
          />
          <form>
            <div class="flex -mx-3">
              <div class="flex w-1/2 px-3">
                <div class="flex w-full mb-4 px-4 rounded">
                  <input
                    class="w-full py-4 text-sm placeholder-gray-400 font-semibold leading-none outline-none"
                    type="text"
                    v-model="firstName"
                    ref="firstName"
                    placeholder="First name"
                  />
                  <font-awesome-icon
                    icon="user"
                    class="h-6 w-6 my-auto text-gray-400"
                  />
                </div>
              </div>
              <div class="flex w-1/2 px-3">
                <div class="flex w-full mb-4 px-4 rounded">
                  <input
                    class="w-full py-4 text-sm placeholder-gray-400 font-semibold leading-none outline-none"
                    type="text"
                    v-model="lastName"
                    placeholder="Last name"
                  />
                  <font-awesome-icon
                    icon="signature"
                    class="h-6 w-6 my-auto text-gray-400"
                  />
                </div>
              </div>
            </div>
            <div class="flex mb-4 px-4 rounded">
              <input
                class="w-full py-4 text-sm placeholder-gray-400 font-semibold leading-none outline-none"
                type="email"
                v-model="email"
                @blur="validateEmail"
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
                @blur="validatePassword"
                placeholder="Password"
              />
              <font-awesome-icon
                icon="key"
                class="h-6 w-6 my-auto text-gray-400"
              />
            </div>
            <button
              class="block w-full p-4 text-center text-xs text-white font-semibold leading-none bg-green-main hover:bg-green-highlight rounded"
              @click.prevent="signUp"
              type="submit"
            >
              <p v-show="!loading">Sign Up</p>
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
              @click="$router.push('/signin')"
            >
              Already have an account? Sign In
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
      firstName: "",
      lastName: "",
      warningList: [],
      loading: false,
    };
  },
  mounted() {
    this.$nextTick(function () {
      this.$refs.firstName.focus();
    });
  },
  methods: {
    async signUp() {
      this.warningList = [];
      if (this.email === "") {
        this.addWarning("Email is required");
      } else {
        this.validateEmail();
      }
      if (this.password === "") {
        this.addWarning("Password is required");
      } else {
        this.validatePassword();
      }
      if (this.firstName === "") {
        this.addWarning("A first name is required");
      }
      if (this.lastName === "") {
        this.addWarning("A last name is required");
      }
      if (this.warningList.length === 0) {
        this.sendRequest();
      }
    },
    signPass(response) {
      localStorage.setItem("userId", response.result.id);
      localStorage.setItem("userName", response.result.firstName);
      router.push({
        name: "Home",
      });
    },
    sendRequest() {
      this.loading = true;
      const requestOptions = {
        method: "POST",
        body: JSON.stringify({
          email: this.email,
          password: this.password,
          firstName: this.firstName,
          lastName: this.lastName,
        }),
      };
      fetch(process.env.VUE_APP_APIURL + "/v1/signup", requestOptions)
        .then(async (response) => {
          const data = await response.json();

          // check for error response
          if (await !response.ok) {
            this.addWarning(data.message);
            this.loading = false;
            return;
          }

          this.loading = false;
          this.signPass(data);
        })
        .catch(() => {
          this.addWarning("An error occurred, please retry");
          this.loading = false;
        });
    },
    validateEmail() {
      // from https://stackoverflow.com/a/62825465
      // eslint-disable-next-line no-useless-escape
      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
        this.addWarning("Please enter a valid email address");
      }
    },
    validatePassword() {
      if (this.password.length < 8) {
        this.addWarning("Password must be at least 8 characters");
      }
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
