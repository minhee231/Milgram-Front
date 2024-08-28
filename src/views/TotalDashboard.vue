<template>
    <totalViewsChart class="Chart"/>
</template>

<script>
import totalViewsChart from '../components/TotalViewsChart.vue';

export default {
  name: 'TotalDashboard',
  components: {
    totalViewsChart,
  },
};
</script>

<style>
/* 알아서 나중에 ㄱㄱ */
.Chart {
    max-width: 400px;
    max-height: 400px
}
</style>