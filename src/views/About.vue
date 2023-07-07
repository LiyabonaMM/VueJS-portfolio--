<template>
  <section class="about">
    <div class="container">
      <div class="row d-flex justify-content-center align-items-center">
        <div class="col-lg-6">
          <transition name="fade-in">
            <div v-if="showContent">
              <h2 class="about__title">
                <i class="fas fa-user"></i> {{ typedTitle }}
              </h2>
              <p class="about__description">{{ typedDescription1 }}</p>
              <p class="about__description">{{ typedDescription2 }}</p>
              <a href="" class="btn btn-primary about__button"
                ><i class="fas fa-download"></i> Download CV</a
              >
            </div>
          </transition>
        </div>
        <!-- <div class="col-lg-6">
          <img src="" alt="" class="about__image" />
        </div> -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      showContent: false,
      typedTitle: '',
      typedDescription1: '',
      typedDescription2: '',
      title: 'About Me',
      description1:
        "I am a developer based in Cape Town, South Africa. I'm currently a student at LifeChoice Academy, where I've been developing my skills in HTML, CSS, JavaScript, and Vue.js.",
      description2:
        "I'm passionate about creating visually stunning web experiences that not only look great, but also function seamlessly. In my free time, I enjoy exploring new technologies and experimenting with new design concepts.",
    };
  },
  mounted() {
    this.showContent = true;
    this.animateText();
  },
  methods: {
    animateText() {
      this.typeText(this.title, 'typedTitle', () => {
        this.typeText(this.description1, 'typedDescription1', () => {
          this.typeText(this.description2, 'typedDescription2');
        });
      });
    },
    typeText(text, dataProperty, onComplete) {
      const typingDelay = 50; // Delay between each character typing
      let charIndex = 0;

      const type = () => {
        if (charIndex < text.length) {
          this[dataProperty] += text[charIndex];
          charIndex++;
          setTimeout(type, typingDelay);
        } else if (onComplete) {
          setTimeout(onComplete, 1000); // Delay before starting next text
        }
      };

      type();
    },
  },
};
</script>

<style scoped>
/* Styles for the about section */
.about {
  padding: 80px 0;
}

.about__title {
  font-size: 32px;
  margin-bottom: 20px;
  text-align: center; /* Center align the title */
}

.about__description {
  font-size: 18px;
  color: #6c757d;
  margin-bottom: 20px;
  text-align: center; /* Center align the descriptions */
}

.about__button {
  display: block; /* Make the button a block element */
  margin: 0 auto; /* Center align the button */
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  background-color: black;
  color: #fff;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.about__button:hover {
  background-color: brown;
}

.about__image {
  max-width: 100%;
  height: auto;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

/* Animation */
.fade-in-enter-active {
  transition: opacity 0.5s;
}

.fade-in-enter {
  opacity: 0;
}

.fade-in-leave-active {
  transition: opacity 0.5s;
}

.fade-in-leave-to {
  opacity: 0;
}
</style>
