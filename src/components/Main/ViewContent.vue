<template>
    <section class="view-content">
        <router-view class="height scroll-style"></router-view>
    </section>
</template>

<script>
export default {
    Name: 'Content',
    components: {

    }
    
}
</script>

<style lang="scss">
    .view-content {
        background: linear-gradient(320.66deg, #2F353A 14.75%, #1C1F22 84.81%);
        box-shadow: 3.88889px 3.88889px 12px #1f2427, -3.88889px -3.88889px 30px #484e53;
        border-radius: 24px 24px 30px 30px;
        width: 100%;
        height: calc(100vh - 130px);
        margin-right: 20px;
        padding: 20px 10px;
        position: relative;
        // overflow: scroll;
    }


    .height {
        max-height: 100%;
        overflow-y: scroll;
    }

</style>