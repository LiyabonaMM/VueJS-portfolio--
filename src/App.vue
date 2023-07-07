<template>
  <div id="app">
    <Navbar />
    <div class="content">
      <router-link to="#landing" class="hidden" />
      <router-link to="#about" class="hidden" />
      <router-link to="#work-education" class="hidden" />
      <router-link to="#skills" class="hidden" />
      <router-link to="#projects" class="hidden" />
      <router-link to="#testimonials" class="hidden" />
      <router-link to="#contact" class="hidden" />

      <section id="landing">
        <Landing />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="work-education">
        <WorkEducation />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Landing from './views/Landing.vue';
import About from './views/About.vue';
import WorkEducation from './views/WorkEducation.vue';
import Skills from './views/Skills.vue';
import Projects from './views/Projects.vue';
import Testimonials from './views/Testimonials.vue';
import Contact from './views/Contact.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Landing,
    About,
    WorkEducation,
    Skills,
    Projects,
    Testimonials,
    Contact,
  },
};
</script>

<style>
#app {
  font-family: 'Arial', sans-serif;
  background-color: #f8f9fa;
}

.content {
  margin-top: 80px;
}

.hidden {
  display: none;
}

/* Add your global styles here */
</style>
