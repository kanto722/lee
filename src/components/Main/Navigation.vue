<template>
    <section class="navigation">
        <div class="navigation-container">
            <router-link class="marmelad nav-rout" to="/">Главная
                <div class="nav-rout__wrap"></div>
                <div class="nav-rout__block"></div>
                <div class="nav-rout__effect"></div>
            </router-link>
            <router-link class="marmelad nav-rout" to="/About">О нас
                <div class="nav-rout__wrap"></div>
                <div class="nav-rout__block"></div>
                <div class="nav-rout__effect"></div>
            </router-link>
            <router-link class="marmelad nav-rout" to="/Stock">Акции
                <div class="nav-rout__wrap"></div>
                <div class="nav-rout__block"></div>
                <div class="nav-rout__effect"></div>
            </router-link>
            <router-link class="marmelad nav-rout" to="/Shop">Магазин
                <div class="nav-rout__wrap"></div>
                <div class="nav-rout__block"></div>
                <div class="nav-rout__effect"></div>
            </router-link>
            <router-link class="marmelad nav-rout" to="/Job">Вакансии
                <div class="nav-rout__wrap"></div>
                <div class="nav-rout__block"></div>
                <div class="nav-rout__effect"></div>
            </router-link>
            <router-link class="marmelad nav-rout" to="/Contacts">Контакты
                <div class="nav-rout__wrap"></div>
                <div class="nav-rout__block"></div>
                <div class="nav-rout__effect"></div>
            </router-link>
            <router-link class="marmelad nav-rout" to="/Cooperation">Сотрудничество
                <div class="nav-rout__wrap"></div>
                <div class="nav-rout__block"></div>
                <div class="nav-rout__effect"></div>
            </router-link>
            <router-link class="marmelad nav-rout" to="/Franchise">Франшиза
                <div class="nav-rout__wrap"></div>
                <div class="nav-rout__block"></div>
                <div class="nav-rout__effect"></div>
            </router-link>
        </div>
        <div class="navigation-wrap"></div>
        <div class="navigation-block"></div>
    </section>
</template>

<script>

export default {
    
    name: 'Nav',
    components: {

    },
}
</script>

<style lang="scss">
    .navigation {
        padding: 0px 20px;
        background: linear-gradient(0.06deg, #2E3138 0.35%, #3D4148 192.77%);
        box-shadow: 3.88889px 3.88889px 16.6667px #1F2427;
        border-radius: 24px 24px 30px 30px;
        height: 100%;
        position: relative;
        &-container {
            display: flex;
            flex-direction: column;
            text-align: center;
            padding: 20px 0px;
        }
        &-wrap {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 1px;
            left: 1px;
            z-index: -1;
            background: linear-gradient(318.21deg, #2C3036 14.05%, #31343C 85.29%);
            box-shadow: 4px 4px 10px rgba(31, 36, 39, 0.8), -4px -4px 10px rgba(72, 78, 83, 0.6);
            border-radius: 24px 24px 30px 30px;
            filter: blur(2px);
        }
        &-block {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 5px;
            left: 3px;
            z-index: -2;
            background: linear-gradient(318.21deg, #2C3036 14.05%, #31343C 85.29%);
            filter: blur(2px);
            border-radius: 24px 24px 30px 30px;
        }
    }
    .nav-rout {
        font-size: 20px;
        padding: 5px 5px;
        margin-bottom: 3px;
        border: 1px solid transparent;
        transition: 0.4s;
        position: relative;
        z-index: 1;
        &__wrap {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 2px;
            left: 0px;
            z-index: -1;
            background: linear-gradient(318.21deg, #2C3036 14.05%, #31343C 85.29%);
            filter: blur(2px);
            border-radius: 24px 24px 30px 30px;
            opacity: 0;
            transition: 0.4s;
        }
        &__block {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 2px;
            left: 0px;
            z-index: -2;
            background: linear-gradient(318.21deg, #2C3036 14.05%, #31343C 85.29%);
            filter: blur(2px);
            border-radius: 24px 24px 30px 30px;
            opacity: 0;
            transition: 0.4s;
        }
        &__effect {
            position: absolute;
            background: linear-gradient(318.21deg, #2C3036 14.05%, #31343C 85.29%);
            box-shadow: 3.88889px 3.88889px 10px #1f2427, -3.88889px -3.88889px 10px #484e53;
            border-radius: 20px;
            top: 2px;
            left: 0px;
            width: 100%;
            height: 100%;
            z-index: -3;
            opacity: 0;
            transition: 0.4s;
        }
    }
    .nav-rout:hover .nav-rout__wrap {
            opacity: 1;
            transition: 0.3s;
    }
    .nav-rout:hover .nav-rout__block {
            opacity: 1;
            transition: 0.3s;
    }
    .nav-rout:hover .nav-rout__effect {
            opacity: 1;
            transition: 0.3s;
    }
    .nav-rout:last-child {
        margin-bottom: 0;
    }
</style>