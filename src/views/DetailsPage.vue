<template>
  <div class="hello">
    <cardlayout>
      <div v-if="this.updateTask === null">
        <Form
          v-model="title"
          v-model2="text"
          v-model3="date"
          @save="handleSavePost"
        ></Form>
      </div>

      <div v-if="this.updateTask !== null">
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

            <p>{{ this.text.length }}/300</p>
          </div>

          <div class="inputfieldDesign">
            <label for="date">Date</label>
            <input v-model="date" id="date" type="date" />
          </div>

          <button class="btnDesign" @click.prevent="updatePost">Update</button>
        </div>
      </div>
    </cardlayout>

    <!-- To show list data  -->

    <cardlayout>
      <h4>Lists: {{ this.postList.length }}</h4>
      <!-- To show delete all button if at least one post is created -->
      <div v-if="this.postList.length >= 1">
        <button class="deletePostButton" @click="deleteAllPost">
          Delete All
        </button>
      </div>

      <hr />

      <div v-for="(list, index) in postList" :key="index" class="list-item">
        <div class="postListItemDesign">
          <h3>{{ list.title }}</h3>
          <p>{{ list.text }}</p>

          <h4>{{ list.date }}</h4>
          <div class="postButtonContainer">
            <button class="deletePostButton" @click="deletePost(index)">
              Delete
            </button>
            <button
              class="updatePostButton"
              @click="showupdateSinglePost(index)"
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    </cardlayout>
  </div>
</template>

<script>
import CardLayout from "../components/CardLayout.vue";
import Form from "../components/Form.vue";

export default {
  name: "DetailsPage",

  components: {
    cardlayout: CardLayout,
    Form,
  },

  data() {
    return {
      title: "",
      text: "",
      date: "",
      updateTask: null,

      postList: [],
    };
  },

  methods: {
    // To create Post

    handleSavePost(title, text, date) {
      if (this.updateTask === null) {
        this.postList.push({
          title: title,
          text: text,
          date: date,
        });
        this.title = "";
        this.text = "";
        this.date = "";
      }
    },

    // to update

    updatePost() {
      this.postList[this.updateTask].title = this.title;
      this.postList[this.updateTask].text = this.text;
      this.postList[this.updateTask].date = this.date;
      this.updateTask = null;
      this.title = "";
      this.text = "";
      this.date = "";
    },

    // To delete single post
    deletePost(index) {
      this.postList.splice(index, 1);
    },
    // To delete all the post
    deleteAllPost() {
      this.postList = [];
    },
    //To  show  post information in the input field to update when user click on the edit button
    showupdateSinglePost(index) {
      this.title = this.postList[index].title;
      this.text = this.postList[index].text;
      this.date = this.postList[index].date;
      this.updateTask = index;
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
