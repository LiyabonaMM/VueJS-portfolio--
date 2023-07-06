export async function fetchData() {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/LiyabonaMM/VueJS-portolio--/main/src/data/data.json"
    )
    if (!response.ok) {
      throw new Error("Failed to fetch data")
    }
    return await response.json()
  } catch (error) {
    console.error(error)
    throw new Error("An error occurred while fetching data")
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
