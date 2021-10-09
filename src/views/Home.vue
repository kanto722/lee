<template>
    <div class="promo">
        <BannerOne />
        <ContentOne />
    </div>
</template>

<script>
import BannerOne from '../components/ViewComponents/Banners/Banner-home.vue'
import ContentOne from '../components/ViewComponents/Content/Content-home.vue'

export default {
    components: {
        BannerOne,
        ContentOne,
    }
}
</script>

<style lang='scss'>
    .promo {
        padding: 20px 20px;
        position: relative;
    }

    
</style>