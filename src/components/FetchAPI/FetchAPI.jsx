// Your API key: 34899280-ba1753ecc84482fb675b913b6

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '34899280-ba1753ecc84482fb675b913b6';
export const getSearchImage = (text, page) => {
  return fetch(
    `${BASE_URL}?q=${text}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then(response => response.json());
};
