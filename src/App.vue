<template>
    <Header />
    <Main />
    <Footer />
    <!-- <router-link to="/">Home</router-link>
    <router-link to="/About">About</router-link>
    <router-view></router-view> -->
    
</template>

<script>
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Main,
    Footer
  }
}
</script>

<style lang="scss">
@import "./style/main.scss";


</style>
