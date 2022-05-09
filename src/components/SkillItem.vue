<template>
  <div class="flex flex-col justify-center items-center rounded-lg shadow-2xl h-24 w-24">
    <h2>{{ name }}</h2>
    <img :src="image" :alt="name" class="w-10">
  </div>
</template>

<script>

export default {
  props: {
    name: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      default: '',
    }
  }
}
</script>
