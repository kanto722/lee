<template>
  <main class="layout">
    <div class="wrap">
      <div class="layout__row">
        <Nav />
        <Content />
      </div>
    </div>
  </main>
</template>

<script>
import Nav from './Main/Navigation'
import Content from './Main/ViewContent'
export default {
  name: 'Main',
    components: {
      Nav,
      Content,
  }
}
</script>

<style lang="scss">
  .layout {
    &__row {
      display: flex;
      justify-content: center;
    }
  }
</style>