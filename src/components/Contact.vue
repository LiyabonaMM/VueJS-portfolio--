<template>
  <section class="contact">
    <div class="container">
      <h2>Contact Me</h2>
      <form action="https://formspree.io/f/mjvqvblv" method="POST">
        <div class="form-group">
          <label for="email">Your email:</label>
          <input
            type="email"
            name="email"
            id="email"
            class="form-control"
            required
          />
        </div>
        <div class="form-group">
          <label for="message">Your message:</label>
          <textarea
            name="message"
            id="message"
            class="form-control"
            rows="5"
            required
          ></textarea>
        </div>
        <!-- Add other form fields here -->

        <button type="submit" class="btn btn-primary">Send</button>
      </form>
    </div>
  </section>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <p class="footer-text">&copy; {{ currentYear }} Liyabona Mxhalisa</p>
        <div class="social-icons">
          <a
            href="https://www.instagram.com/liyamxhalisa/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-instagram"></i>
          </a>
          <a
            href="https://github.com/LiyabonaMM"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-github"></i>
          </a>
          <a
            href="https://twitter.com/lil_mxhalisa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      currentYear: new Date().getFullYear()
    };
  }
};
</script>

<style scoped>
/* Add your custom styles here */

.contact {
  padding: 80px 0;
  background-color: #f8f9fa;
}

.contact h2 {
  text-align: center;
  margin-bottom: 40px;
}

.container {
  max-width: 600px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  font-weight: bold;
}

.form-control {
  width: 100%;
  padding: 10px;
  border: 1px solid #ced4da;
  border-radius: 4px;
}

textarea.form-control {
  resize: vertical;
}

.btn-primary {
  background-color: black;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
}

.btn-primary:hover {
  background-color: #0056b3;
}

.footer {
  background-color: #000;
  color: #fff;
  padding: 1rem;
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footer-text {
  margin-bottom: 0.5rem;
}

.social-icons {
  display: flex;
  justify-content: center;
}

.social-icons a {
  color: #fff;
  font-size: 1.5rem;
  margin: 0 0.5rem;
}
</style>
