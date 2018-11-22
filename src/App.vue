<template>
  <div id="app">
      <div class="logo__img">
       <img src="./assets/logo.png" class="logo_image"> 
      </div>    
    <div class="wrapper">
      <div class="app__header">
        <div class="app__header__title">
            Выберите друзей 
        </div>
          <search-block/>
      </div>
        <div class="app__content">
          <div class="app__content_elem">
            <div class="app__content__title">
                Ваши друзья
                <hr style="border-width: 0.5px; width:90%" >
            </div>
              <left-list/>
          </div>
          <hr noshade style="border-color:#f0f0f0; margin: 0">
            <div class="app__content_elem">
              <div class="app__content__title">
                Друзья в списке
                <hr class='line_center' style="border-width: 0.5px; width:90%" >
              </div>
              <div class="app__content_right__list">
                <right-list/>
              </div>
            </div>
        </div>
        <footer class="app__footer">
          <input type="button" value="Сохранить" class="app__footer__button" @click="saveFriends">
        </footer>
    </div>      
    </div>
</template>

<script>
import SearchBlock from "./components/SearchBlock.vue";
import LeftList from "./components/LeftList.vue";
import RightList from "./components/RightList.vue";

export default {
  name: "app",
  components: {
    "search-block": SearchBlock,
    "left-list": LeftList,
    "right-list": RightList
  },
  methods: {
    saveFriends() {
      this.$store.commit("saveFriends");
    }
  }
};
</script>

<style>
.logo__img {
  margin-bottom: 1%;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #999999;
  margin-top: 8%;
  font-size: 80%;
}

.wrapper {
  width: 35%;
  background-color: #ffffff;
  border-radius: 10px 10px 0 0;
  height: 600px;
}

.app__header {
  background-color: #ff8663;
  height: 15%;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px 10px 0 0;
}

.app__header__title {
  width: 100%;
  text-align: left;
  font-size: 120%;
  color: white;
  margin-left: 5%;
  margin-top: 2%;
}

.app__content__title {
  margin-top: 1%;
}

.app__content_elem {
  width: 50%;
  overflow: auto;
}

.app__content {
  display: flex;
  height: 85%;
}

.app__footer {
  background-color: #f0f0f0;
  display: flex;
  justify-content: flex-end;
  height: 46px;
  border-radius: 0 0 10px 10px;
  align-items: center;
}

.app__footer__button {
  border-radius: 10px;
  border: 0;
  outline-style: none;
  height: 30px;
  margin-right: 2%;
  background-color: #ff8663;
  color: #ffffff;
}

::-webkit-scrollbar-button {
  /* background-image:url(''); */
  background-repeat: no-repeat;
  width: 5px;
  height: 0px;
}

::-webkit-scrollbar-track {
  background-color: #ffffff;
}

::-webkit-scrollbar-thumb {
  -webkit-border-radius: 10px;
  border-radius: 10px;
  background-color: #c4c4c4;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #c4c4c4;
}

::-webkit-resizer {
  background-repeat: no-repeat;
  width: 4px;
  height: 0px;
}

::-webkit-scrollbar {
  width: 4px;
}
</style>
