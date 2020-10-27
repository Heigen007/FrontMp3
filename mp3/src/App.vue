<template>
  <div class="home">
    <Header />
    <MainStr />
  </div>
</template>

<script>
import MainStr from '@/components/MainStr.vue'
import Header from '@/components/Header.vue'

export default {
  name: 'Home',
  components: {
    MainStr,
    Header
  },
  data: function () {
    return {
    }
  },
  computed: {},
  watch: {},
  methods: {
  },
  async beforeMount () {
  }
}
</script>

<style>
body{
  background-color: #c0e3ff;
  margin:0;
  padding:0;
}
</style>
