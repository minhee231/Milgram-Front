<template>
  <div >
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

#app {
  background-color: #000000; /* 원하는 배경색 */
  min-height: 100vh; /* 배경이 화면 전체를 덮도록 설정 */
}
</style>
