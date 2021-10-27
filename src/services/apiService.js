import axios from 'axios'

async function getDoughnutsFromApi() {
  const response = await axios.get('https://localhost:44350/api/Sample/TestGenericRepositoryInsertProduct/123/123');
  return response.data;
}

export {
  getDoughnutsFromApi
}
