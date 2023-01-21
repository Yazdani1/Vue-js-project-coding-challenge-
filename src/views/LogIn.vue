
<template>
  <div>
    <form @submit.prevent="handleLogin">
      <div class="formInputDesign">
        <label> Username: </label>
        <input type="text" v-model="username" />
        <label v-if="!validateUserName" class="error-message"
          >Username is required</label
        >
      </div>

      <div class="formInputDesign">
        <label> Password: </label>
        <input type="password" v-model="password" />
        <label v-if="!validatePassword" class="error-message"
          >Password is required</label
        >
      </div>

      <br />

      <label v-if="!matcUsernamePassword" class="error-message"
        >Wrong username or password. Try right one</label
      >
      <button type="submit" class="logInButtonDesign">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      validateUserName: true,
      validatePassword: true,
      matcUsernamePassword: true,
    };
  },

  methods: {
    handleLogin() {
      // To add validation

      if (this.username === "") {
        this.validateUserName = false;
      } else {
        this.validateUserName = true;
      }

      if (this.password === "") {
        this.validatePassword = false;
      } else {
        this.validatePassword = true;
      }

      if (this.username === "admin" && this.password === "password") {
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("username", this.username);
        localStorage.setItem("password", this.password);
        this.$router.push("/details");
      } else {
        this.matcUsernamePassword = false;
      }
    },
  },
};
</script>


<style scoped>
.formInputDesign input {
  height: 40px;
  margin: 20px;
  display: flex-column;
}

.logInButtonDesign {
  height: 50px;
  width: 100px;
  background: black;
  color: white;
}
</style>

