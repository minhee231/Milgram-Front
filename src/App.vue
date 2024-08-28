<template>
  <div>
    <mainHeader class="main-header" />
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import MainHeader from './components/MainHeader.vue';

export default {
  name: 'App',
  components: {
    MainHeader,
  },
};
</script>

<style>
.main-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  z-index: 1000;
  background-color: #fff;
}

.content {
  margin-top: 60px;
  padding: 20px;
}
</style>
