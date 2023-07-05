<template>
  <section class="landing">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <transition name="slide-in-left">
            <img
              v-show="showImage"
              src="https://i.postimg.cc/T1FbYFFj/my-picture.jpg"
              alt="Liyabona Mxhalisa"
              class="img-fluid landing__image"
            />
          </transition>
        </div>
        <div class="col-lg-6">
          <transition name="slide-in-right">
            <h2 class="landing__title">
              <span>{{ typedTitle }}</span>
              <span class="cursor" v-if="showCursor"></span>
            </h2>
          </transition>
          <transition name="slide-in-right">
            <p class="landing__description">
              <span>{{ typedDescription }}</span>
              <span class="cursor" v-if="showCursor"></span>
            </p>
          </transition>
          <transition name="slide-in-right">
            <router-link
              to="/about"
              class="btn btn-primary landing__button"
              v-show="showButton"
              >Read More</router-link
            >
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Landing',
  data() {
    return {
      showImage: true,
      showTitle: false,
      showDescription: false,
      showButton: false,
      showCursor: true,
      typedTitle: '',
      typedDescription: '',
      title: "Liyabona Mxhalisa",
      description: "Software Developer | Passionate about creating stunning web experiences",
    };
  },
  mounted() {
    this.animateElements();
  },
  methods: {
    animateElements() {
      this.typeText(this.title, 'typedTitle', () => {
        this.typeText(this.description, 'typedDescription', () => {
          setTimeout(() => {
            this.showButton = true;
          }, 500);
        });
      });
    },
    typeText(text, dataProperty, onComplete) {
      const typingDelay = 100; // Delay between each character typing
      let charIndex = 0;

      const type = () => {
        if (charIndex < text.length) {
          this[dataProperty] += text[charIndex];
          charIndex++;
          setTimeout(type, typingDelay);
        } else {
          setTimeout(onComplete, 500); // Typing complete
        }
      };

      type();
    },
  },
};
</script>

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
  background-color: black;
  color: #fff;
  border-radius: 4px;
}

.cursor {
  display: inline-block;
  width: 2px;
  height: 24px;
  margin-left: 2px;
  background-color: #000;
  animation: blink 0.7s infinite;
}

@keyframes blink {
  0%, 100% { opacity: 0; }
  50% { opacity: 1; }
}

.slide-in-left-enter-active,
.slide-in-left-leave-active {
  transition: transform 0.8s;
}

.slide-in-left-enter,
.slide-in-left-leave-to {
  transform: translateX(-100%);
}

.slide-in-right-enter-active,
.slide-in-right-leave-active {
  transition: transform 0.8s;
}

.slide-in-right-enter,
.slide-in-right-leave-to {
  transform: translateX(100%);
}
</style>
