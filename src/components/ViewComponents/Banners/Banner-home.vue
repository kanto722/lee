<template>
    <div class="banner">
        <div class="banner-title">
            <h1 class="marmelad">Coffee Lee</h1>
            <p class="marmelad">be yourself...</p>
        </div>
        <div class="banner-images">
            <img class="banner-images__img" src="../../../assets/images/banners/art1.png" alt="">
        </div>
        <div class="shadow-wrap"></div>
        <div class="shadow-block"></div>
        <div class="shadow-effect"></div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .banner {
        display: flex;
        align-items: center;
        width: 100%;
        height: 100%;
        padding: 25px 20px;
        margin-bottom: 20px;
        // min-height: 350px;
        background: linear-gradient(0.06deg, #2E3138 0.35%, #3D4148 192.77%);
        box-shadow: 3.88889px 3.88889px 16.6667px #1F2427;
        border-radius: 24px 24px 30px 30px;
        // подумать
        filter: blur(0.6px);
        position: relative;
        z-index: 2;
        &-title {
            display: flex;
            flex-direction: column;
            h1 {
                font-size: 100px;
            }
            p {
                margin-top: 10px;
                font-size: 24px;
                text-align: end;
            }
        }
        &-images {
            position: absolute;
            right: 2%;
            top: 10%;
            max-height: 350px;
            &__img {
                box-shadow: 3.88889px 3.88889px 10px #1F2427, -3.88889px -3.88889px 10px #484E53;
                border-radius: 50%;
                padding: 1px 1px;
            }
        }
    }
</style>