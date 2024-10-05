import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../api/api.js';  // Archivo donde configuras axios

const AsignarNotas = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await api.get('/course/');
      setCourses(response.data);
    } catch (error) {
      console.error('Error al obtener cursos:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedCourse) {
      navigate(`/course/${selectedCourse}/asignarnotas`);  // Redirige al componente de estudiantes del curso
    } else {
      alert('Por favor, selecciona un curso.');
    }
  };

  return (
    <div>
      <h1>Asignar Notas</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Selecciona un Curso:</label>
          <select 
            value={selectedCourse} 
            onChange={(e) => setSelectedCourse(e.target.value)}
            required
          >
            <option value="">-- Selecciona un Curso --</option>
            {courses.map(course => (
              <option key={course.id} value={course.id}>
                {course.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Siguiente</button>
      </form>
    </div>
  );
};

export default AsignarNotas;