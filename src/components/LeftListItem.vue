<template>
  <li class="list__item">
    <div class="list__item_avatar">
      <img class="list__item_avatar__img" :src= "friend.photo_100">  
    </div>
    <div>{{friend.first_name}} {{friend.last_name}}</div>
    <div class="list__item__button"> 
        <img src="../assets/add.png" @click="addFriend(friend.id)">
    </div>
  </li>
</template>

<script>
export default {
  name: "LeftListItem",
  props: ["friend"],
  methods: {
    addFriend(friendId) {
      this.$store.commit("addFriend", friendId);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.list__item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
}

.list__item_avatar__img {
  height: 80px;
  padding: 1% 1% 1% 1%;
}

.list__item:hover {
  background-color: #f0f0f0;
  transition: 0.5s;
}
</style>