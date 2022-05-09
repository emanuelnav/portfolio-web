<template>
  <div>
    <h1 class="uppercase text-2xl text-center mt-4">Projects</h1>
    <div class="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
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
          title: 'ToDo App',
          image: 'todoapp.png',
          description: 'A task manager web app made with React.',
          skills: ['React', 'JS', 'HTML', 'CSS'],
          repoUrl: 'https://github.com/emanuelnav/todo-react-app',
          demoUrl: 'https://emanuelnav.github.io/todo-react-app/',
        },
        {
          title: 'Ministerio Quiz',
          image: 'quiz.png',
          description: 'An interactive quiz of how much you know about government projects.',
          skills: ['VueJS', 'JS', 'TailwindCSS', 'Animate.css'],
          repoUrl: 'https://github.com/emanuelnav/ministerio-quiz',
          demoUrl: 'https://ministerio-quiz.netlify.app/',
        },
        {
          title: 'Rent App',
          image: 'rentapp.png',
          description: 'A webapp to take rent control.',
          skills: ['Django', 'Python', 'SQLite', 'Bootstrap'],
          repoUrl: 'https://github.com/emanuelnav/ministerio-quiz',
          demoUrl: 'https://ministerio-quiz.netlify.app/',
        }
      ]
    }
  }
}
</script>