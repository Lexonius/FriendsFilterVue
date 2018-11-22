<template>
  <div class="app__header_search">
    <input class="app__header_search__input" placeholder="Начните вводить имя друга" 
    v-model="inputTextLeft" @keydown.exact="filterLeftFriends">
    <input class="app__header_search__input" placeholder="Начните вводить имя друга"
    v-model="inputTextRight" @keydown.exact="filterRightFriends">
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputTextLeft: "",
      inputTextRight: ""
    };
  },

  methods: {
    filterLeftFriends(inputTextLeft) {
      if (inputTextLeft.key === "Backspace") {
        this.$store.state.filterleftListFriends = this.$store.state.leftListFriends.filter(
          item =>
            this.isMatching(
              item.first_name + " " + item.last_name,
              this.inputTextLeft
            )
        );
      } else {
        this.$store.state.filterleftListFriends = this.$store.state.leftListFriends.filter(
          item =>
            this.isMatching(
              item.first_name + " " + item.last_name,
              this.inputTextLeft
            )
        );
      }
    },

    filterRightFriends(inputTextRight) {
      if (inputTextRight.key === "Backspace") {
        this.$store.state.filterRightListFriends = this.$store.state.rightListFriends.filter(
          item =>
            this.isMatching(
              item.first_name + " " + item.last_name,
              this.inputTextRight
            )
        );
      } else {
        this.$store.state.filterRightListFriends = this.$store.state.rightListFriends.filter(
          item =>
            this.isMatching(
              item.first_name + " " + item.last_name,
              this.inputTextRight
            )
        );
      }
    },

    isMatching(full, chunk) {
      if (full.toLowerCase().indexOf(chunk.toLowerCase()) !== -1) {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>

<style>
.app__header_search {
  width: 100%;
  background-color: #f0f0f0;
  height: 50%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.app__header_search__input {
  border-radius: 10px;
  width: 48%;
  height: 50%;
  border: none;
  outline: none;
  padding-left: 1%;
}
</style>
