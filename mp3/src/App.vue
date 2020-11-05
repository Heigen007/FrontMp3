<template>
<div>
      <p>Загрузите ваши фотографии на сервер</p>
      <p><input type="file" name="image" id = "text" @change="change" ref = "text" multiple accept="image/*">
      <p><input type="file" name="file" id = "text" @change="change" ref = "text" >
      <input type="submit" value="Отправить" @click="Click"></p>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import axios from 'axios'
export default {
  name: 'App',
  components: {
    HelloWorld
  },
   methods: {
    change () {
      if (this.$refs.text.files.length === null) this.image = null
      if (this.$refs.text.files.length === null) this.file = null
      else {
        this.image = this.$refs.text.files
        this.file = this.$refs.text.files
        console.log('g')
      }
    },
    Click () {
      const formData = new FormData()
      if (this.image) {
        formData.append('image', this.image[0])
        if (this.file) {
          formData.append('file', this.file[0])
          axios.post('http://localhost:3000/files', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
              'Content-Type': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
            }
          })
        } 
      }
    }
   }
}
   

</script>

<style>
</style>