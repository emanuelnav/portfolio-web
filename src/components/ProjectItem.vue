<template>
  <div class="group relative shadow-xl p-1">
    <div class="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
      <img :src="require(`@/assets/img/${image}`)" :alt="title" class="w-full h-full object-center object-cover">
    </div>

    <h3 class="mt-6 text-lg text-gray-500">
      {{ title }}
    </h3>

    <p>{{ description }}</p>

    <ul class="list-disc pl-3">
      <li v-for="skill in skills" :key="skill">
        {{ skill }}
      </li>
    </ul>
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