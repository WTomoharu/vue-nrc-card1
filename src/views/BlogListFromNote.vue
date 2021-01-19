<template>
  <div class="blog-list-from-note">
    <v-card
      v-for="noteItem in noteItems"
      :key="noteItem.id"
      :elevation="8"
      style="margin: 8px"
    >
    <div
      v-html="noteItem.name"
    ></div>
    </v-card>
  </div>
</template>

<script>
import axios from 'axios'

async function timelog(fnc) {
  const start = Date.now()
  console.log("start")
  const res = await fnc()
  console.log("end", Date.now() - start)
  return res
}

async function getNote(userName) {
  const urls = Array.from({length: 3}, (_, i) => {
    return `https://note.com/api/v2/creators/${userName}/contents?kind=note&page=${i + 1}`
  })

  const baseUrl = "https://get-page.netlify.app/.netlify/functions/get-many"
  const reqUrl = `${baseUrl}?urls=${encodeURIComponent(urls.join(","))}`

  const pages = await axios.get(reqUrl).then(res => res.data)
  const contents = [].concat(...pages.map(page => page.data.contents))

  return contents
}

export default {
  data() {
    return {
      noteItems: []
    }
  },
  beforeCreate() {
    timelog(() => getNote("info"))
      .then(items => { this.noteItems = items})
      .catch(err => { console.log(err) })
  },
}
</script>