<template>
  <div class="cardlayout">
    <div>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "CardLayout",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cardlayout {
  background: wheat;
  padding: 10px;
  border-radius: 10px;
  margin: 10px;
}
</style>
