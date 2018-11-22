<template>
  <li class="list__item">
    <img class="list__item_avatar__img" :src= "friend.photo_100">
      <div>{{friend.first_name}} {{friend.last_name}}</div>
      <div class="list__item__button"> 
        <img src="../assets/remove.png" @click="removeFriend(friend.id)">
      </div>
  </li>
</template>

<script>
export default {
  name: "RightListItem",
  props: ["friend"],
  methods: {
    removeFriend(friendId) {
      this.$store.commit("removeFriend", friendId);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.list__item {
  border-bottom-style: solid;
  border-bottom-width: 0.5px;
  border-bottom-color: #f0f0f0;
}
.list__item_avatar__img {
  border-radius: 50%;
}
</style>