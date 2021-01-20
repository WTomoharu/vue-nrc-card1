<template>
  <div class="blog-list-from-note">
    <v-container v-if="noteItems.length > 0" class="grey lighten-5">
      <v-row v-for="noteItem in noteItems" :key="noteItem.id">
        <v-col>
          <BlogCard
            :title="noteItem.name"
            :subtitle="'サブタイトル'"
            :category="noteItem.hashtags[0] ? noteItem.hashtags[0].hashtag.name : ''"
            :src="noteItem.eyecatch"
            @click="toLink(noteItem.noteUrl)"
          />
        </v-col>
      </v-row>
    </v-container>
    <div v-else class="text-center" style="padding: 16px">
      <v-progress-circular
        class="mx-auto"
        indeterminate
        color="grey"
        :size="50"
      />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import BlogCard from '../components/BlogCard'

async function timelog(fnc) {
  const start = Date.now()
  console.log("start")
  const res = await fnc()
  console.log("end", Date.now() - start)
  return res
}

async function getNote(userName) {
  const urls = Array.from({length: 1}, (_, i) => {
    return `https://note.com/api/v2/creators/${userName}/contents?kind=note&page=${i + 1}`
  })

  const baseUrl = "https://get-page.netlify.app/.netlify/functions/get-many"
  const reqUrl = `${baseUrl}?urls=${encodeURIComponent(urls.join(","))}`

  const pages = await axios.get(reqUrl).then(res => res.data)
  const contents = [].concat(...pages.map(page => page.data.contents))

  return contents
}

export default {
  components: {
    BlogCard
  },
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
  methods: {
    toLink(url) {
      location.href = url
    }
  }
}
</script>