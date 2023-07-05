<template>
  <section class="testimonials">
    <div class="container">
      <h2>Testimonials</h2>
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
              <p class="card-text">{{ testimonial.company }}</p>
              <p class="card-text">{{ testimonial.message }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import testimonialsData from '@/data/testimonials.json';

export default {
  name: 'Testimonials',
  data() {
    return {
      testimonials: testimonialsData,
    };
  },
};
</script>

<style scoped>
.testimonial-card {
  margin-bottom: 2rem;
}

.testimonial-card .card-img-top {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
}

.testimonial-card .card-body {
  padding: 1.5rem;
}

.testimonial-card .card-title {
  font-size: 20px;
  margin-bottom: 0.5rem;
}

.testimonial-card .card-text {
  margin-bottom: 0.5rem;
}
</style>
