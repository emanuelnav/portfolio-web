<template>
  <header class="shadow w-screen h-16 flex items-center justify-center navbar">
    <nav class="space-x-2 nav-item">
      <a href="#about-me" class="uppercase rounded-lg p-1 relative">About Me</a>
      <a href="#projects" class="uppercase rounded-lg p-1 relative">Projects</a>
      <a href="#contact-me" class="uppercase rounded-lg p-1 relative">Contact Me</a>
      <a href="https://medium.com/@emanuelnav" target="_blank" class="uppercase rounded-lg p-1 relative">Blog</a>
    </nav>
  </header>
</template>

<style scoped>
  .nav-item a::after{
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    transform: scaleX(0);
    transition: transform 0.4s ease;
    transform-origin: bottom right;
    background-color: #feda6a;
  }

  .nav-item a:hover::after{
    transform-origin: bottom left;
    transform: scaleX(1);
  }
</style>