<template>
  <div>
    <h1 class="uppercase text-3xl font-bold text-center mt-20">&lt;About Me /&gt;</h1>

    <div class="flex flex-col lg:flex-row justify-center items-center mt-4 max-w-3xl mx-auto">
      <img src="../assets/img/profile.jpg" alt="profile photo" class="rounded-3xl w-56">
      <div class="flex flex-col mx-2 lg:ml-6">
        <h2 class="uppercase text-3xl font-bold text-center lg:text-left">Full Stack Developer</h2>
        <h2 class="uppercase text-2xl font-bold text-yellow my-2 text-center lg:text-left">Emanuel Navarro</h2>
        <p class="text-justify text-lg">Hi I'm Emanuel, a Web developer that is passionate with technology and to learning new things. I have experience making responsive web applications and working in team.</p>
        <p class="text-justify text-lg">In my free time i love to play videogames (mostly esports) and sports like padel or tennis &#x1F3BE;.</p>
        <div class="flex justify-center lg:justify-start space-x-4 mt-1">
          <a href="https://github.com/emanuelnav" target="_blank" class="text-4xl btn-default"><i class="bi bi-github"></i></a>
          <a href="https://www.linkedin.com/in/emanuelnav/" target="_blank" class="text-4xl btn-default"><i class="bi bi-linkedin"></i></a>
        </div>
      </div>
    </div>


    <h1 class="uppercase text-3xl font-bold text-center mt-20 ">&lt;Technologies /&gt;</h1>

    <div class="flex flex-wrap justify-center items-center space-x-4 mt-2">
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
          image: 'https://img.icons8.com/color/48/000000/vue-js.png'
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
          image: 'https://img.icons8.com/windows/64/000000/django.png'
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
