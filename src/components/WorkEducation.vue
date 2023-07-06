<template>
  <section class="work-education">
    <div class="container">
      <h2>Resume</h2>
      <div class="timeline">
        <div
          class="timeline-item"
          v-for="experience in experiences"
          :key="experience.id"
        >
          <div class="timeline-content">
            <h3>{{ experience.title }}</h3>
            <p class="timeline-date">{{ experience.duration }}</p>
            <ul class="timeline-description">
              <li
                v-for="description in experience.descriptions"
                :key="description"
              >
                {{ description }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { fetchData } from '@/api.js';

export default {
  name: 'WorkEducation',
  data() {
    return {
      experiences: [],
      error: null,
    };
  },
  async mounted() {
    try {
      const data = await this.fetchData();
      this.experiences = data.education;
    } catch (error) {
      this.error = error.message;
    }
  },
  methods: {
    fetchData() {
      return new Promise((resolve, reject) => {
        // Simulating an asynchronous API call
        setTimeout(() => {
          try {
            // Assuming fetchData is an asynchronous function that fetches the data from the API
            resolve(fetchData());
          } catch (error) {
            reject(error);
          }
        }, 1000);
      });
    },
  },
};
</script>

<style scoped>
/* Add your custom styles here */

.timeline {
  position: relative;
}

.timeline:before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  width: 4px;
  background-color: black;
  left: 50%;
  margin-left: -2px;
}

.timeline-item {
  position: relative;
  padding: 20px 40px;
  margin-bottom: 50px;
}

.timeline-item:before {
  content: '';
  position: absolute;
  top: 32px;
  right: -8px;
  display: inline-block;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  background-color: black;
}

.timeline-content {
  position: relative;
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 6px;
}

.timeline-date {
  font-weight: bold;
  margin-bottom: 10px;
}

.timeline-description {
  list-style: none;
  padding-left: 0;
}

.timeline-description li {
  margin-bottom: 10px;
}
</style>
