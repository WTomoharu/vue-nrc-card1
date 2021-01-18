<template>
  <div>
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
    <p style="margin: 16px;">
      本文
    </p>
  </div>
</template>