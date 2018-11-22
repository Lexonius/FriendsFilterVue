<template>
  <ul class="app__content__list">
    <right-list-item v-for="elem in filterRightListFriends" 
      :key="elem.id" :friend="elem"
    />
  </ul>
</template>

<script>
import RightListItem from "./RightListItem.vue";

export default {
  components: {
    "right-list-item": RightListItem
  },
  computed: {
    filterRightListFriends: function() {
      return this.$store.state.filterRightListFriends;
    }
  }
};
</script>

<style>
</style>