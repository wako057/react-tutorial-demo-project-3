export async function getMeals() {
  try {
    const response = await fetch('http://localhost:3000/meals');
    if (false === response.ok) {
      return [];
    }

    return response.json();
  } catch (error) {
    console.log(error);
  }
  return [];
}
