<script setup>
import { onMounted, reactive } from 'vue'

const figures = reactive([])

onMounted(async () => {
  figures.length = 0
  Object.assign(figures, await fetch('/api/nodes').then(res => res.json()))
})
</script>

<template>
  <section>
    <header>
      <h2>Figures</h2>
    </header>
  </section>

  <ul class="columns-x">
    <li
      v-for="figure of figures"
      :key="figure.id"
    >
      <router-link
        :to="`/poses/${figure.id}`"
        flex
        items-center
        gap-2
      >
        <img
          v-if="figure.img"
          :src="figure.img"
          :title="`Photo de : ${figure.Nom}`"
          :alt="`Photo de : ${figure.Nom}`"
          width="40"
        >
        <span>{{ figure.id }}</span>
      </router-link>
    </li>
  </ul>
</template>

<style scoped>
.columns-x {
  columns: 15rem auto;
}
</style>
