
const API_URL = 'http://localhost:3000'
export async function getMeals() {
  try {
    const response = await fetch(`${API_URL}/meals`);
    if (false === response.ok) {
      return [];
    }

    return response.json();
  } catch (error) {
    console.log(error);
  }
  return [];
}

export async function postOrder({ items, customer }) {
  try {
    const response = await fetch(`${API_URL}/orders`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        order: {
          items,
          customer
        }
      })
    })
  } catch (error) {
    console.log(error);
  }
}