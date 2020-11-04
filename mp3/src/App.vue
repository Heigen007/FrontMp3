<template>
  <div class="home">
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
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
  background-color: #5580a3;
}
</style>
