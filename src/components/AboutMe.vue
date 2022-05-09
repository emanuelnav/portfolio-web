<template>
  <div>
    <h1 class="uppercase text-2xl text-center mt-4">About Me</h1>

    <div class="flex justify-center mt-2">
      <img src="../assets/img/profile.jpg" alt="profile photo" class="rounded-2xl">
      <div class="flex flex-col m-4">
        <h2 class="uppercase text-3xl">Full Stack Developer</h2>
        <h2 class="uppercase text-2xl">Emanuel Navarro</h2>
        <p>Hi! Im a Full stack Developer</p>
      </div>
    </div>


    <h1 class="uppercase text-2xl text-center mt-4">Technologies</h1>

    <div class="flex justify-center space-x-4">
      <item v-for="skill in skills" :key="skill.name"
            :name="skill.name"
            :image="skill.image"/>
    </div>
  </div>
</template>

<script>
import Item from './SkillItem.vue';

export default {

  components: {
    Item,
  },

  data () {
    return {
      skills: [
        {
          name: 'Javascript',
          image: 'https://img.icons8.com/color/48/000000/javascript--v1.png'
        },
        {
          name: 'VueJS',
          image: 'https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/000000/external-vuejs-an-open-source-javascript-framework-for-building-user-interfaces-and-single-page-applications-logo-color-tal-revivo.png'
        },
        {
          name: 'Git',
          image: 'https://img.icons8.com/color/48/000000/git.png'
        },
        {
          name: 'Laravel',
          image: 'https://img.icons8.com/fluency/48/000000/laravel.png'
        },
        {
          name: 'MySQL',
          image: 'https://img.icons8.com/color/48/000000/mysql-logo.png'
        },
        {
          name: 'Python',
          image: 'https://img.icons8.com/color/48/000000/python--v1.png'
        },
        {
          name: 'Django',
          image: 'https://img.icons8.com/material/24/000000/django.png'
        },
        {
          name: 'ReactJS',
          image: 'https://img.icons8.com/color/48/000000/react-native.png'
        }
      ],
    }
  }
}
</script>

<style scoped>
  img {
    height: 220px;
  }
</style>