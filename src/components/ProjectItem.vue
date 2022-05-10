<template>
  <div class="mx-auto max-w-md rounded-lg overflow-hidden shadow-lg">
    <img class="w-full" :src="require(`@/assets/img/${image}`)" :alt="title">

    <div class="px-6 py-4 h-32">
      <div class="font-bold text-xl mb-2">{{ title }}</div>
      <p class="text-base">
        {{ description }}
      </p>
    </div>

    <div class="px-6 py-2">
      <span v-for="skill in skills" :key="skill" class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
        {{ skill }}
      </span>
    </div>

    <div class="flex justify-center space-x-4 pb-4">
      <a :href="demoUrl" target="_blank" class="btn-default rounded-lg p-2 bg-gray-200 text-black"><i class="bi bi-box-arrow-up-right"></i> Demo</a>
      <a :href="repoUrl" target="_blank" class="btn-default rounded-lg p-2 bg-gray-200 text-black"><i class="bi bi-file-earmark-code"></i> Code</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    skills: {
      type: Array,
      default: () => [],
    },
    repoUrl: {
      type: String,
      default: ''
    },
    demoUrl: {
      type: String,
      default: ''
    },
  },
}
</script>