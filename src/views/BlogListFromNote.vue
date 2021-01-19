<template>
  <div class="blog-list-from-note">
    <v-card
      v-for="noteItem in noteItems"
      :key="noteItem.link"
      :elevation="8"
      style="margin: 8px"
    >
    <div
      v-html="noteItem.description"
    ></div>
    </v-card>
  </div>
</template>

<script>
import axios from 'axios'
import xml2js from 'xml2js'

const baseUrl = "https://get-page.netlify.app/.netlify/functions/"

async function getNote () {
  const pageUrl = "https://note.com/info/rss"
  const xmlUrl = `${baseUrl}get-one?url=${encodeURIComponent(pageUrl)}`

  const xmlText = await axios.get(xmlUrl)
    .then(res => res.data).catch(() => '')

  const parser = new xml2js.Parser({
    async: false,
    explicitArray: false
  })

  const xmlItems = await parser.parseStringPromise(xmlText)
    .then(res => res.rss.channel.item).catch(() => [])

  return xmlItems.map(item => ({
    title: item.title,
    img: item['media:thumbnail'],
    link: item.link,
    description: item.description
  }))
}

export default {
  data() {
    return {
      noteItems: []
    }
  },
  beforeCreate() {
    getNote()
      .then(items => { this.noteItems = items})
      .catch(err => { console.log(err) })
  },
}
</script>