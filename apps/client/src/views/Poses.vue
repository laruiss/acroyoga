<script setup>
import { onMounted, reactive } from 'vue'

const poses = reactive([])

onMounted(async () => {
  poses.length = 0
  Object.assign(poses, await fetch('/api/nodes').then(res => res.json()))
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
      v-for="pose of poses"
      :key="pose.id"
    >
      <router-link
        :to="`/poses/${pose.id}`"
        flex
        items-center
        gap-2
      >
        <img
          v-if="pose.img"
          :src="pose.img"
          :title="`Photo de : ${pose.french_name || pose.name}`"
          :alt="`Photo de : ${pose.french_name || pose.name}`"
          width="40"
        >
        <span>{{ pose.french_name || pose.name }}</span>
      </router-link>
    </li>
  </ul>
</template>

<style scoped>
.columns-x {
  columns: 15rem auto;
}
</style>
