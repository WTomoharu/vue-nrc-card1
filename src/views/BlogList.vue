<template>
  <div class="blog-list">
    <v-container>
      <v-row v-for="n in 5" :key="n">
        <v-col>
          <BlogCard
            :title="'タイトル'"
            :subtitle="'サブタイトル'"
            :category="'カテゴリ'"
            :src="'https://cdn.vuetifyjs.com/images/cards/docks.jpg'"
            @click="$router.push('/blog-page')"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import BlogCard from '../components/BlogCard'

export default {
  components: {
    BlogCard
  }
}
</script>