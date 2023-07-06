<template>
  <section class="testimonials">
    <div class="container">
      <h2 class="testimonials__title">Testimonials</h2>
      <div class="row">
        <div
          v-for="testimonial in testimonials"
          :key="testimonial.id"
          class="col-md-6 col-lg-4"
        >
          <div class="card testimonial-card">
            <img
              :src="testimonial.image"
              :alt="testimonial.name"
              class="card-img-top"
            />
            <div class="card-body">
              <h3 class="card-title">{{ testimonial.name }}</h3>
              <p class="card-company">{{ testimonial.company }}</p>
              <p class="card-message">{{ testimonial.message }}</p>
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
  name: 'Testimonials',
  data() {
    return {
      testimonials: [],
      error: null,
    };
  },
  async mounted() {
    try {
      const data = await this.fetchData();
      this.testimonials = data.testimonials;
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
.testimonials {
  background-color: #f8f9fa;
  padding: 80px 0;
}

.testimonials__title {
  font-size: 32px;
  margin-bottom: 40px;
  text-align: center;
}

.testimonial-card {
  margin-bottom: 2rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
}

.testimonial-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.card-img-top {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-body {
  padding: 1.5rem;
  text-align: center;
}

.card-title {
  font-size: 20px;
  margin-bottom: 0.5rem;
}

.card-company {
  font-size: 16px;
  color: #666;
  margin-bottom: 0.5rem;
}

.card-message {
  font-size: 14px;
}

@media (max-width: 767px) {
  .testimonial-card {
    margin-bottom: 1rem;
  }
}
</style>
