<template>
  <div>
    <form onsubmit = "return false">
      <p>Загрузите ваши фотографии на сервер</p>
      <p><input type="file" id = "text" @change="change" ref = "text" multiple accept="image/*">
      <input type="submit" value="Отправить" @click="Click"></p>
    </form>
  </div>

</template>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  data: () => ({
    file: null
  }),
  methods: {
    change () {
      if (this.$refs.text.files.length === null) this.file = null
      else {
        this.file = this.$refs.text.files
        console.log('g')
      }
    },
    async Click () {
      console.log('f')
      const formData = new FormData()
      if (this.file) {
        formData.append('file', this.file[0])
        await axios.post('http://localhost:3000/files',
          formData,
          {
            headers: {
              'Content-type': 'multipart/form-data'
            }
          }
        )
      }
    }
  }
}
</script>

<style scoped>

</style>
