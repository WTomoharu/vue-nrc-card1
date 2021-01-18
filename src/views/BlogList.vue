<template>
  <div class="blog-list">
    <v-container class="grey lighten-5">
      <v-row v-for="n in 5" :key="n">
        <v-col>
          <BlogCard />
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