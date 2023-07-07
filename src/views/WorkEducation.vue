<template>
  <section class="work-education">
    <div class="container">
      <h2 class="text-center">Resume</h2>
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
          <i class="fas fa-briefcase"></i>
          <i class="fas fa-graduation-cap"></i>
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
        }, 100);
      });
    },
  },
};
</script>

<style scoped>
/* Add your custom styles here */
.timeline-item {
  position: relative;
  display: flex;
  align-items: center;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s, box-shadow 0.3s;
}

.timeline-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.timeline-content {
  flex: 1;
  margin-left: 20px;
}

.timeline-content h3 {
  font-size: 20px;
  margin-bottom: 10px;
}

.timeline-content .timeline-date {
  font-weight: bold;
  margin-bottom: 10px;
}

.timeline-description {
  list-style: none;
  padding-left: 0;
  margin-bottom: 0;
}

.timeline-description li {
  margin-bottom: 5px;
}

.fas {
  font-size: 16px;
  color: #333;
  margin-left: 10px;
}

@media (max-width: 767px) {
  .timeline-item {
    flex-direction: column;
    text-align: center;
  }

  .timeline-content {
    margin-left: 0;
    margin-top: 20px;
  }

  .fas {
    margin: 10px 0;
  }
}
</style>
