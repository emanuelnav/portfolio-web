<template>
  <div class="container">
    <about-me id="about-me"/>
    <projects id="projects"/>
    <contact-me id="contact-me"/>
  </div>
</template>

<script>
import AboutMe from '../components/AboutMe.vue';
import Projects from '../components/Projects.vue';
import ContactMe from '../components/ContactMe.vue';

export default {
  components: {
    AboutMe,
    Projects,
    ContactMe,
  }
}
</script>
