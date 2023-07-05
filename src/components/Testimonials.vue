<template>
  <section class="testimonials">
    <div class="container">
      <h2>Testimonials</h2>
      <div
        id="testimonialsCarousel"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            v-for="(testimonial, index) in testimonials"
            :key="testimonial.id"
            :data-target="'#testimonialsCarousel'"
            :data-slide-to="index"
            :class="{ active: index === 0 }"
          ></li>
        </ol>
        <div class="carousel-inner">
          <div
            v-for="(testimonial, index) in testimonials"
            :key="testimonial.id"
            class="carousel-item"
            :class="{ active: index === 0 }"
          >
            <img
              :src="testimonial.image"
              class="testimonial-img"
              alt="Testimonial Image"
            />
            <div class="carousel-caption">
              <h3>{{ testimonial.name }}</h3>
              <p>{{ testimonial.company }}</p>
              <p>{{ testimonial.message }}</p>
            </div>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#testimonialsCarousel"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#testimonialsCarousel"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
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
      testimonials: testimonialsData
    };
  }
};
</script>

<style scoped>
.testimonial-img {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
  margin: 0 auto;
}

.carousel-caption {
  text-align: center;
}

.carousel-caption h3 {
  font-size: 24px;
  font-weight: bold;
}

.carousel-caption p {
  font-size: 16px;
  color: #666;
}
</style>
