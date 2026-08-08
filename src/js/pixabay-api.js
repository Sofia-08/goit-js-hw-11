const API_KEY = '57070176-1d3ec272671065a7e5a57d0b3'; // Заміни за потреби на свій ключ Pixabay

export function fetchImages(query) {
  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  return fetch(`https://pixabay.com/api/?${searchParams}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .catch(error => {
      console.error('Error fetching images:', error);
      throw error;
    });
}
