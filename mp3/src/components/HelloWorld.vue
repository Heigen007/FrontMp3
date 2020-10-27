<template>
  <div>
      <p>Загрузите ваши фотографии на сервер</p>
      <p><input type="file" name="image" id = "text" @change="change" ref = "text" multiple accept="image/*">
      <input type="submit" value="Отправить" @click="Click"></p>
  </div>

</template>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  data: () => ({
    image: null
  }),
  methods: {
    change () {
      if (this.$refs.text.files.length === null) this.image = null
      else {
        this.image = this.$refs.text.files
        console.log('g')
      }
    },
    Click () {
      console.log('f')
      const formData = new FormData()
      if (this.image) {
        formData.append('image', this.image[0])
        axios.post('http://localhost:3000/files', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        // fetch('http://localhost:3000/files', {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'multipart/form-data'
        //   },
        //   body: formData
        // })
      }
    }
  }
}
</script>

<style scoped>

</style>
