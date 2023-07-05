<template>
  <section class="landing">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <img
            src="https://i.postimg.cc/T1FbYFFj/my-picture.jpg"
            alt="Liyabona Mxhalisa"
            class="img-fluid landing__image"
          />
        </div>
        <div class="col-lg-6">
          <h2 class="landing__title">Liyabona Mxhalisa</h2>
          <p class="landing__description">
            Software Developer | Passionate about creating stunning web
            experiences
          </p>
          <router-link to="/about" class="btn btn-primary landing__button"
            >Read More</router-link
          >
        </div>
      </div>
    </div>
  </section>
</template>
n

<style scoped>
.landing {
  background-color: #f8f9fa;
  padding: 80px 0;
}

.landing__image {
  max-width: 100%;
}

.landing__title {
  font-size: 32px;
  margin-bottom: 20px;
}

.landing__description {
  font-size: 18px;
  color: #6c757d;
  margin-bottom: 20px;
}

.landing__button {
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

.landing__button:hover {
  background-color: #0056b3;
}
</style>
