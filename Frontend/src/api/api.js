// src/api/studentApi.js
// import axios from 'axios';

// const API_URL = 'http://127.0.0.1:8000/api'; // Cambia esto por la URL de tu API

// // Función para obtener datos del estudiante
// export const getStudentData = async (studentId) => {
//   try {
//     const response = await axios.get(`${API_URL}/students/${studentId}`);
//     return response.data; // Devuelve los datos del estudiante
//   } catch (error) {
//     console.error("Error fetching student data:", error);
//     throw error; // Lanza el error para manejarlo en el componente
//   }
// };

// Puedes añadir más funciones aquí para registrar o actualizar estudiantes
// src/services/api.js
// src/services/api.js
// import axios from 'axios';

// const API_URL = 'http://127.0.0.1:8000/api/';

// const api = axios.create({
//   baseURL: API_URL,
// });

// export default api;

import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/';

const api = axios.create({
  baseURL: API_URL,
});

// Interceptor para agregar el token JWT a cada solicitud si está presente en el localStorage
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    // Verificar si la solicitud es al endpoint de registro
    if (token && !config.url.includes('register')) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


export default api;



