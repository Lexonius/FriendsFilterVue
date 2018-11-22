<template>
  <ul class="app__content__list" v-if="filterleftListFriends.length">
    <left-list-item v-for="item in filterleftListFriends" 
      :key="item.id" :friend="item"
      />
  </ul>
</template>

<script>
import LeftListItem from "./LeftListItem.vue";

export default {
  name: "leftListFriends",
  components: {
    "left-list-item": LeftListItem
  },
  computed: {
    filterleftListFriends: function() {
      return this.$store.state.filterleftListFriends;
    }
  }
};
</script>

<style>
.app__content__list {
  list-style: none;
  padding: 0;
  margin-left: 3%;
  margin-right: 3%;
  margin-top: 0;
}
</style>