/*Resume Fetch*/

export async function fetchEducation() {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/LiyabonaMM/VueJS-portolio--/main/src/data/education.json"
    )
    if (!response.ok) {
      throw new Error("Failed to fetch education data")
    }
    return await response.json()
  } catch (error) {
    console.error(error)
    throw new Error("An error occurred while fetching education data")
  }
}

/*Projects Fetch*/
export async function fetchProjects() {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/LiyabonaMM/VueJS-portolio--/main/src/data/projects.json"
    )
    if (!response.ok) {
      throw new Error("Failed to fetch projects data")
    }
    return await response.json()
  } catch (error) {
    console.error(error)
    throw new Error("An error occurred while fetching projects data")
  }
}

/*Testimonials Fetch*/
export async function fetchTestimonials() {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/LiyabonaMM/VueJS-portolio--/main/src/data/testimonials.json"
    )
    if (!response.ok) {
      throw new Error("Failed to fetch testimonials data")
    }
    return await response.json()
  } catch (error) {
    console.error(error)
    throw new Error("An error occurred while fetching testimonials data")
  }
}

/*Skills Fetch*/
export async function fetchSkills() {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/LiyabonaMM/VueJS-portolio--/main/src/data/skills.json"
    )
    if (!response.ok) {
      throw new Error("Failed to fetch skills data")
    }
    return await response.json()
  } catch (error) {
    console.error(error)
    throw new Error("An error occurred while fetching skills data")
  }
}
