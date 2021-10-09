<template>
    <router-link to="/" class="header-logo">
        <!-- <p class="rampart">L</p>
        <p class="rampart">e</p>
        <p class="rampart">e</p> -->
        <img src="../../assets/images/logo-lee-white.png" alt="">
    </router-link>
</template>

<script>
export default {
    name: 'Logo',
}
</script>

<style lang="scss">
    .header {
          &-logo {
            color: #fdfdfd;
            display: flex;
            justify-content: space-between;
            max-width: 120px;
            p {
            font-size: 50px;
            }
            // править высоту
            img {
                width: 100%;
                height: 100%;
            }
        }
    }
</style>