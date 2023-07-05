<template>
  <section class="work-education">
    <div class="container">
      <h2>Projects</h2>
      <div class="row">
        <div v-for="project in projects" :key="project.id" class="col-md-4">
          <div class="card mb-4">
            <img
              :src="project.image"
              class="card-img-top"
              alt="Project Image"
            />
            <div class="card-body">
              <h3 class="card-title">{{ project.title }}</h3>
              <p class="card-text">{{ project.description }}</p>
            </div>
            <div class="card-footer">
              <a :href="project.link" class="btn btn-primary mr-2"
                >View Project</a
              >
              <a :href="project.github" class="btn btn-secondary">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import projectData from '@/data/projects.json';

export default {
  name: 'Projects',
  data() {
    return {
      projects: projectData
    };
  }
};
</script>

<style scoped>
.card {
  transition: transform 0.3s;
}

.card:hover {
  transform: translateY(-5px);
}

.card-img-top {
  height: 200px;
  object-fit: cover;
}

.card-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}

.card-text {
  font-size: 16px;
  color: #666;
}

.card-footer {
  background-color: #f8f9fa;
  border-top: none;
  padding: 10px;
}

.btn-primary,
.btn-secondary {
  display: inline-block;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: #fff;
}

.btn-primary {
  background-color: brown;
}

.btn-secondary {
  background-color: #6c757d;
}

.btn-primary:hover,
.btn-secondary:hover {
  opacity: 0.8;
}
</style>
