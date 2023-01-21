<template>
  <ul class="navbar">
    <li v-if="!isLoggedIn">
      <router-link to="/">Log In</router-link>
    </li>

    <li>
      <router-link to="/details">Details</router-link>
    </li>

    <li v-if="isLoggedIn">
      <button @click="handleLogout">Logout</button>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Navigation",

  computed: {
    isLoggedIn() {
      return localStorage.getItem("isLoggedIn") === "true";
    },
  },

  methods: {
    handleLogout() {
      localStorage.removeItem("isLoggedIn");
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.navbar {
  background: lightcoral;
  color: white;
}

ul {
  margin: 0;
  padding: 0;
  text-decoration: none;
}
li {
  display: inline-block;
  padding: 1em 0.5em;
  text-decoration: none;
}
</style>