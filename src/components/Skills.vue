<template>
  <section class="skills">
    <div class="container">
      <h2 class="skills__title">Skills</h2>
      <div class="skills__list">
        <div class="skills__item" v-for="skill in skills" :key="skill.id">
          <div class="skills__content">
            <i :class="['skills__icon', skill.icon]"></i>
            <p class="skills__description">{{ skill.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { fetchSkills } from '@/api.js';

export default {
  name: 'Skills',
  data() {
    return {
      skills: [],
      error: null,
    };
  },
  async mounted() {
    try {
      this.skills = await fetchSkills();
    } catch (error) {
      this.error = error.message;
    }
  },
};
</script>

<style scoped>
/* Add your custom styles here */

.skills {
  background-color: #f8f9fa;
  padding: 80px 0;
}

.skills__title {
  font-size: 32px;
  margin-bottom: 40px;
  text-align: center;
}

.skills__list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.skills__item {
  flex-basis: 33.33%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
}

.skills__item:hover {
  transform: translateY(-5px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.skills__icon {
  font-size: 48px;
  margin-bottom: 10px;
  color: #333;
}

.skills__description {
  font-size: 18px;
  color: #6c757d;
}
</style>
