import axios from 'axios';

// Configurar la URL base de la API
const API_URL = 'http://localhost:3000/api'; // Reemplaza esta URL con la URL real de tu API

// Crear una instancia de Axios con la URL base de la API
const api = axios.create({
  baseURL: API_URL,
});

// Función para obtener todas las citas de un usuario específico
export const getCitasUsuario = async (userId) => {
  try {
    const response = await api.get(`/citas?userId=${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener citas del usuario:', error);
    throw error;
  }
};

// Función para agregar una nueva cita para un usuario
export const agregarCita = async (citaData) => {
  try {
    const response = await api.post('/citas', citaData);
    return response.data;
  } catch (error) {
    console.error('Error al agregar nueva cita:', error);
    throw error;
  }
};

// Otras funciones para interactuar con tu API, como actualizar citas, eliminar citas, etc.
