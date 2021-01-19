<template>
  <div class="blog-list-from-note">
    {{ text }}
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      text: ""
    }
  },
  beforeCreate() {
    const url = "https://get-page.netlify.app/.netlify/functions/get-one?url=https%3A%2F%2Fnote.com%2Finfo%2Frss"
    axios.get(url)
      .then(res => { this.text = res.data })
      .catch(err => { console.log(err) })
  },
}
</script>