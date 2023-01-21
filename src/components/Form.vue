<template>
  <cardlayout>
    <div>
      <div class="inputfieldDesign">
        <label for="title">Title:</label>

        <input
          type="text"
          className="form-control"
          v-model="title"
          maxlength="100"
        />
      </div>

      <div class="inputfieldDesign">
        <label for="text">Text: </label>
        <input
          type="text"
          className="form-control"
          v-model="text"
          maxlength="300"
        />

        <p>{{ textValueLengthCount }}/300</p>
      </div>

      <div class="inputfieldDesign">
        <label for="date">Date</label>
        <input v-model="date" id="date" type="date" />
      </div>

      <button class="btnDesign" @click.prevent="save">Save</button>
    </div>
  </cardlayout>
</template>

<script>
import CardLayout from "../components/CardLayout.vue";

export default {
  name: "Form",
  components: {
    cardlayout: CardLayout,
  },

  props: {
    title: {
      type: String,
    },
    text: {
      type: String,
    },
    date: {
      type: String,
    },
  },

  methods: {
    save() {
      this.$emit("save", this.title, this.text, this.date);
    },
  },

  // To count and compute the lengh of the text user added

  computed: {
    textValueLengthCount() {
      return String(this.text).length;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list-item {
  margin-top: 10px;
  border: 1px solid black;
  padding: 10px;
  border-radius: 10px;
}

.deletePostButton {
  background: red;
  color: white;
  padding: 10px;
  cursor: pointer;
}

.updatePostButton {
  background: green;
  color: white;
  padding: 10px;
  cursor: pointer;
}

.postButtonContainer {
  display: flex;
  margin-top: 20px;
}

.btnDesign {
  height: 40px;
  width: 100px;
  background: green;
  color: white;
  padding: 10px;
  margin-top: 40px;
  cursor: pointer;
}

.inputfieldDesign input {
  height: 50px;
  width: 550px;
  margin: 20px;
}

p {
  margin-top: 10px;
}

h4 {
  margin-top: 15px;
}
</style>
