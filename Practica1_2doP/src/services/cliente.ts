import axios from 'axios';

type HttpClient = {
  get: (url: string) => Promise<any>;
};

const httpClient: HttpClient = {
  get: async (url: string) => {
    console.log(`Making request to ${url} with axios`);
    try {
      const response = await axios.get(url);
      console.log('Response received:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error al obtener datos del servicio externo con axios:', error);
      throw new Error('Error al obtener datos del servicio externo con axios');
    }
  }
};


export default httpClient;

/*
const fetchClient: HttpClient = {
  get: async (url: string) => {
    console.log(`Making request to ${url} with node-fetch`);
    try {
      const response: Response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }
      const data = await response.json();
      console.log('Response received:', data);
      return data;
    } catch (error) {
      console.error('Error al obtener datos del servicio externo con node-fetch:', error);
      throw new Error('Error al obtener datos del servicio externo con node-fetch');
    }
  }
};
*/
