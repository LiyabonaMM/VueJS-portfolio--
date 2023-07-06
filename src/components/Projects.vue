<template>
  <section class="projects">
    <div class="container">
      <h2 class="projects__title">Projects</h2>
      <div class="row">
        <div v-for="project in projects" :key="project.id" class="col-md-4">
          <div class="card mb-4">
            <div class="card-image">
              <img
                :src="project.image"
                class="card-img-top"
                alt="Project Image"
              />
            </div>
            <div class="card-content">
              <h3 class="card-title">{{ project.title }}</h3>
              <p class="card-description">{{ project.description }}</p>
            </div>
            <div class="card-footer">
              <a :href="project.link" class="btn btn-primary">
                <i class="fas fa-eye"></i> View Project
              </a>
              <a :href="project.github" class="btn btn-secondary">
                <i class="fab fa-github"></i> GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { fetchData } from '@/api.js';

export default {
  name: 'Projects',
  data() {
    return {
      projects: [],
      error: null,
    };
  },
  async mounted() {
    try {
      const data = await this.fetchData();
      this.projects = data.projects;
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
.projects {
  background-color: #f8f9fa;
  padding: 80px 0;
}

.projects__title {
  font-size: 32px;
  margin-bottom: 40px;
  text-align: center;
}

.card {
  transition: transform 0.3s, box-shadow 0.3s;
  border-radius: 6px;
  overflow: hidden;
  position: relative;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card-image {
  position: relative;
}

.card-img-top {
  height: 200px;
  object-fit: cover;
}

.card-content {
  padding: 20px;
}

.card-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.card-description {
  font-size: 16px;
  color: #666;
}

.card-footer {
  background-color: #f8f9fa;
  border-top: none;
  padding: 10px;
  text-align: center;
}

.btn-primary,
.btn-secondary {
  display: inline-block;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: #fff;
  font-size: 16px;
  transition: background-color 0.3s, transform 0.3s;
  white-space:nowrap;
  margin: 5px;
}

.btn-primary {
  background-color: brown;
}

.btn-secondary {
  background-color: #6c757d;
}

.btn-primary:hover,
.btn-secondary:hover {
  background-color: #8b4513;
  transform: scale(1.05);
}

.btn-primary i,
.btn-secondary i {
  margin-right: 5px;
}

@media (max-width: 767px) {
  .col-md-4 {
    flex-basis: 100%;
  }
}
</style>
