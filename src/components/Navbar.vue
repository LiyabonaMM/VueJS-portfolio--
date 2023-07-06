<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <router-link to="/" class="navbar-brand">
        <i class="fas fa-code"></i> LM
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link">
              <i class="fas fa-home"></i> Home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">
              <i class="fas fa-user"></i> About
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/work-education" class="nav-link">
              <i class="fas fa-file-alt"></i> Resume
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/skills" class="nav-link">
              <i class="fas fa-cogs"></i> Skills
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/projects" class="nav-link">
              <i class="fas fa-code"></i> Projects
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/testimonials" class="nav-link">
              <i class="fas fa-star"></i> Testimonials
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link">
              <i class="fas fa-envelope"></i> Contact
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  background-color: #f8f9fa;
  border-bottom: 1px solid #ddd;
}

.navbar-brand {
  font-weight: bold;
  font-size: 20px;
  color: #333;
}

.nav-link {
  color: #333;
}

.nav-link:hover,
.nav-link:focus {
  color: #000;
}

.navbar-toggler-icon {
  background-image: url('data:image/svg+xml;charset=utf-8,%3Csvg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath stroke="rgba(0, 0, 0, 0.5)" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" d="M4 7h22M4 15h22M4 23h22"/%3E%3C/svg%3E');
}

.navbar-toggler {
  border: none;
  background-color: transparent;
  padding: 0;
}

.navbar-toggler:focus {
  outline: none;
}

.nav-item {
  margin-right: 10px;
}

@media (max-width: 767.98px) {
  .navbar-nav.ml-auto {
    margin-top: 10px;
  }

  .navbar-toggler{
    margin-right: 0;
  }
}
</style>
