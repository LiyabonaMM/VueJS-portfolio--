<template>
  <section class="about">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <h2 class="about__title">About Me</h2>
          <p class="about__description">
            I am a developer based in Cape Town, South Africa. I'm currently a
            student at LifeChoice Academy, where I've been developing my skills
            in HTML, CSS, JavaScript, and Vue.js.
          </p>
          <p class="about__description">
            I'm passionate about creating visually stunning web experiences that
            not only look great, but also function seamlessly. In my free time,
            I enjoy exploring new technologies and experimenting with new design
            concepts.
          </p>
          <a href="path_to_your_cv" class="btn btn-primary about__button"
            >Download CV</a
          >
        </div>
        <div class="col-lg-6">
          <!-- Add any additional content or styling for the right-side column if needed -->
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Styles for the about section */
.about {
  background-color: #f8f9fa;
  padding: 80px 0;
}

.about__title {
  font-size: 32px;
  margin-bottom: 20px;
}

.about__description {
  font-size: 18px;
  color: #6c757d;
  margin-bottom: 20px;
}

.about__button {
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  background-color: #007bff;
  color: #fff;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.about__button:hover {
  background-color: #0056b3;
}
</style>
