<template>
  <header class="header">
    <div class="wrap">
      <div class="header-container">
        <router-link to="/" class="header-logo">
          <p class="rampart">L</p>
          <p class="rampart">e</p>
          <p class="rampart">e</p>
        </router-link>
            <!-- <router-link to="/">Home</router-link> -->
        <!-- <router-link to="/About">About</router-link> -->
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.header {
  width: 100%;
  padding: 20px 0px;

  &-logo {
    outline: none;
    text-decoration: none;
    color: #fdfdfd;
    display: flex;
    justify-content: space-between;
    max-width: 100px;
    cursor: pointer;
    p {
      font-size: 50px;
    }
  }
}
</style>
