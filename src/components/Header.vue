<template>
  <header class="header">
    <div class="wrap">
      <div class="header-container">
        <Logo />
            <!-- <router-link to="/">Home</router-link> -->
        <!-- <router-link to="/About">About</router-link> -->
        <div class="social">
          <div class="social-container">
            <a class="icons-inst" href="#">
              <img src="../assets/images/svg/social/inst.svg" alt="">
            </a>
            <a class="icons-gis" href="#">
              <img class="icons-gis__img" src="../assets/images/svg/social/local.svg" alt="">
              <p class="icons-gis__text">2GIS</p>
            </a>
            <div class="social-block"></div>
            <div class="social-wrap"></div>
            <div class="social-efect"></div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Logo from './Header/Logo'

export default {
  name: "Header",
  components: {
    Logo,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .header {
    width: 100%;
    padding: 20px 0px;
    &-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
.social {
  max-width: 160px;
  width: 100%;
  position: relative;

}
.social-container {
  display: flex;
  width: 100%;
  height: 60px;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
  padding: 20px 20px;
  z-index: 1;
  // вопрос
  img {
    width: 24px;
    filter: blur(0.4px);
  }
}

.icons-inst {
    margin-top: 4px;

}
.icons-gis {
  display: flex;
  align-items: center;
		&__img {
      filter: blur(0.4px);

		}

		&__text {
      filter: blur(0.5px);

		}
}


</style>
