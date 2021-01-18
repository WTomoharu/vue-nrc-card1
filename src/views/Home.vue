<template>
  <div
    class="home"
    style="margin: 16px"
  >
    <div>
      N高鉄道同好会のデモサイトです。<br>
      左上のメニュー、または以下のリンクから<br>
      各デモページに行くことができます。
    </div>

    <div style="height: 16px" />

    <div
      v-for="route in routes.slice(1)"
      :key="route.path"
    >
      <router-link
        :to="route.path"
      >
        {{ route.ja }}（{{ route.path }}）
      </router-link>
    </div>
  </div>
</template>

<script>
import routes from '../router/routes'

export default {
  data() { return { routes } }
}
</script>
