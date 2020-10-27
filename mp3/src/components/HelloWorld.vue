<template>
  <div>
      <p>Загрузите ваши фотографии на сервер</p>
      <p><input type="file" name="file" id = "text" @change="change" ref = "text" >
      <input type="submit" value="Отправить" @click="Click"></p>
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
    Click () {
      console.log('f')
      const formData = new FormData()
      if (this.file) {
        formData.append('file', this.file[0])
        axios.post('http://localhost:3000/files', formData, {
          headers: {
            'Content-Type': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
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
