<template>
  <v-card
    class="mx-auto"
    :elevation="8"
    max-width="400"
    @click="$emit('click', $event)"
  >
    <v-img
      class="white--text align-end"
      :src="src"
      :aspect-ratio="16/9"
    >
      <v-card-text class="white--text">
        <div class="body-1 red--text">
          {{ category }}
        </div>
        <div class="text-h4" style="margin-left: -4px;">
          {{ title }}
        </div>
        <div class="body-1">
          {{ subtitle }}
        </div>
      </v-card-text>
    </v-img>
  </v-card>
</template>

<script>
export default {
  props: {
    title: String,
    subtitle: String,
    category: String,
    src: String
  }
}
</script>