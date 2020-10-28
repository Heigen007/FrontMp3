<template>
<div class = "header">
  <div>
    <img class = "logo" src = "../assets/logo.png">
  </div>
  <div class = "buttons">
    <div class = "but">Auth</div>
    <div class = "but">Login</div>
    <div class = "but">Auccion</div>
  </div>
</div>

</template>

<script>

export default {
  name: 'MainStr',
  props: {
  },
  data: function () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.header{
  height:50px;
  background-color: aqua ;
}
.logo{
  margin-left: 5vw;
  height: 50px;
  float: left;
}
.buttons{
  margin-left: 25vw;
  display: flex;
  flex-direction: row;
}
.but{
  font-size: 210%;
  margin-left: 11vw;
  padding:6px;
  color: #5f6bff;
}
.but:hover{
  background-color: #50d2d2;
  border-radius: 20%;
}
</style>
