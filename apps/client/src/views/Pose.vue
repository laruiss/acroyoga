<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'

import type { Pose } from '@laruiss/acroyogy-shared-types'

const allPoses = ref([])
const allLinks = ref([])
const pose = ref({})
const nextPoses = ref([])
const previousPoses = ref([])

const props = defineProps<{id: string}>()

onMounted(async () => {
  allPoses.value = await fetch('/api/nodes').then(res => res.json())
  allLinks.value = await fetch('/api/links').then(res => res.json())
  update()
})
const update = () => {
  pose.value = allPoses.value.find(({ id }) => id === +props.id) || {}
  nextPoses.value = allLinks.value.filter((pose: Pose) => pose.source === +props.id).map(({ target }) => allPoses.value.find(({ id }) => id === target))
  previousPoses.value = allLinks.value.filter((pose: Pose) => pose.target === +props.id).map(({ source }) => allPoses.value.find(({ id }) => id === source))
}

watch(() => props.id, update)
</script>

<template>
  <section>
    <header
      flex
      items-center
      justify-between
    >
      <router-link
        to="/poses"
        class="inline-block  i-fa-arrow-left"
      />
      <h3 class="text-3xl  text-center  px-6">
        {{ pose.french_name || pose.name }}
        <span
          v-if="!pose.french_name"
        >
          ({{ pose.name }})
        </span>
      </h3>
      <router-link
        to="/poses"
        class="inline-block  i-fa-arrow-right"
      />
    </header>

    <div class="flex  justify-between  flex-wrap">
      <div class="w-flex-1/2  flex-grow">
        <p v-if="pose.description">
          Description : {{ pose.description }}
        </p>
        <div>
          <h4 class="inline-block">
            Position voltigeur·se :
          </h4>
          {{ pose.flyer }}
        </div>
        <div>
          <h4 class="inline-block">
            Position porteur·se :
          </h4>
          {{ pose.base }}
        </div>
        <div
          v-if="pose.img"
          class="img"
        >
          <img
            :src="pose.img"
            :title="`Photo de : ${pose.french_name || pose.name}`"
            :alt="`Photo de : ${pose.french_name || pose.name}`"
            class="image"
          >
        </div>
      </div>

      <footer>
        <h4 class="mt-8">
          Comment arriver là :
        </h4>
        <ul>
          <li v-for="pose of previousPoses">
            <router-link :to="`/poses/${pose.id}`">
              {{ pose.french_name || pose.name }}
            </router-link>
          </li>
        </ul>
        <h4 class="mt-8">
          Quoi faire après :
        </h4>
        <ul>
          <li v-for="pose of nextPoses">
            <router-link :to="`/poses/${pose.id}`">
              {{ pose.french_name || pose.name }}
            </router-link>
          </li>
        </ul>
      </footer>
    </div>
  </section>
</template>

<style scoped>
.img {
  max-width: 400px;
}
.image {
  flex-basis: 400px;
  max-width: 70vw;
  flex-shrink: 0;
}

.w-flex-1\/2 {
  flex-basis: 34%;
}
</style>
