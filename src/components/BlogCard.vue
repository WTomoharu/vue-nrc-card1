<template>
  <v-card
    class="mx-auto"
    :elevation="8"
    max-width="400"
  >
    <v-img
      class="white--text align-end"
      :src="'https://cdn.vuetifyjs.com/images/cards/docks.jpg'"
      :aspect-ratio="16/9"
    >
      <v-card-text class="white--text">
        <div class="body-1 red--text">
          カテゴリ
        </div>
        <div class="text-h4" style="margin-left: -4px;">
          タイトル
        </div>
        <div class="body-1">
          サブタイトル
        </div>
      </v-card-text>
    </v-img>
  </v-card>
</template>