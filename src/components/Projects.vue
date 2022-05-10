<template>
  <div>
    <h1 class="uppercase text-3xl font-bold text-center mt-20">&lt;Projects /&gt;</h1>
    <div class="mt-4 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
      <item v-for="project in projects" :key="project.title"
            :title="project.title"
            :image="project.image"
            :description="project.description"
            :skills="project.skills"
            :repoUrl="project.repoUrl"
            :demoUrl="project.demoUrl"/>
    </div>
  </div>
</template>

<script>
import Item from './ProjectItem.vue';

export default {
  components: {
    Item,
  },

  data () {
    return {
      projects: [
        {
          title: 'Rent App',
          image: 'rentapp.png',
          description: 'Rental manager made with Django.',
          skills: ['Django', 'Python', 'SQLite', 'Bootstrap'],
          repoUrl: 'https://github.com/emanuelnav/rentControlApp',
          demoUrl: 'https://github.com/emanuelnav/rentControlApp',
        },
        {
          title: 'TODO App',
          image: 'todoapp.png',
          description: 'A task manager web app made with React.',
          skills: ['React', 'JS', 'HTML', 'CSS'],
          repoUrl: 'https://github.com/emanuelnav/todo-react-app',
          demoUrl: 'https://emanuelnav.github.io/todo-react-app/',
        },
        {
          title: 'Ministerio Quiz',
          image: 'quiz.png',
          description: 'Interactive quiz with government projects questions.',
          skills: ['VueJS', 'JS', 'TailwindCSS'],
          repoUrl: 'https://github.com/emanuelnav/ministerio-quiz',
          demoUrl: 'https://ministerio-quiz.netlify.app/',
        }
      ]
    }
  }
}
</script>