<template>
  <section class="skills">
    <div class="container">
      <h2 class="skills__title">Skills</h2>
      <div class="skills__list">
        <div v-for="skill in skills" :key="skill.id" class="skills__item">
          <i :class="['skills__icon', skill.icon]"></i>
          <p class="skills__description">{{ skill.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import skillsData from '@/data/skills.json';

export default {
  name: 'Skills',
  data() {
    return {
      skills: skillsData
    };
  }
};
</script>

<style scoped>
.skills {
  background-color: #f8f9fa;
  padding: 80px 0;
}

.skills__title {
  font-size: 32px;
  margin-bottom: 20px;
}

.skills__list {
  display: flex;
  flex-wrap: wrap;
}

.skills__item {
  flex-basis: 33.33%;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.skills__icon {
  font-size: 32px;
  margin-right: 10px;
}

.skills__description {
  font-size: 18px;
  color: #6c757d;
}
</style>
