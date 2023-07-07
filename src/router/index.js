import { createRouter, createWebHistory } from "vue-router"
import Landing from "../components/Landing.vue"
import About from "../components/About.vue"
import WorkEducation from "../components/WorkEducation.vue"
import Skills from "../components/Skills.vue"
import Projects from "../components/Projects.vue"
import Testimonials from "../components/Testimonials.vue"
import Contact from "../components/Contact.vue"

const routes = [
  {
    path: "/",
    name: "Landing",
    component: Landing,
    meta: { section: "landing" },
  },
  {
    path: "/about",
    name: "About",
    component: About,
    meta: { section: "about" },
  },
  {
    path: "/work-education",
    name: "WorkEducation",
    component: WorkEducation,
    meta: { section: "work-education" },
  },
  {
    path: "/skills",
    name: "Skills",
    component: Skills,
    meta: { section: "skills" },
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects,
    meta: { section: "projects" },
  },
  {
    path: "/testimonials",
    name: "Testimonials",
    component: Testimonials,
    meta: { section: "testimonials" },
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
    meta: { section: "contact" },
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
