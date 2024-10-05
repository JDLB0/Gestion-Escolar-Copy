import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../api/api.js';

const EstudiantesDelCurso = () => {
  const { cursoId } = useParams();  // Obtener el ID del curso de la URL
  const [estudiantes, setEstudiantes] = useState([]);
  const [notas, setNotas] = useState({});

  useEffect(() => {
    fetchEstudiantes();
  }, [cursoId]);

  const fetchEstudiantes = async () => {
    try {
      const response = await api.get(`/course/${cursoId}/estudiante/`);
      setEstudiantes(response.data);
    } catch (error) {
      console.error('Error al obtener estudiantes:', error);
    }
  };

  const handleNotaChange = (estudianteId, nota) => {
    setNotas({ ...notas, [estudianteId]: nota });
  };

  const handleGuardar = () => {
    const notasArray = estudiantes.map(estudiante => ({
      student: estudiante.id,
      course: cursoId,
      grade: notas[estudiante.id],
      evaluation_date: new Date().toISOString().split('T')[0]  // Fecha actual
    }));

    api.post('/grade/', notasArray)
      .then(response => {
        alert('Notas guardadas exitosamente');
      })
      .catch(error => {
        console.error('Error al guardar las notas:', error);
      });
  };

  return (
    <div>
      <h1>Asignar Notas - Curso {cursoId}</h1>
      <form>
        {estudiantes.map(estudiante => (
          <div key={estudiante.id}>
            <label>{estudiante.nombre} {estudiante.apellido}:</label>
            <input 
              type="number"
              min="0" 
              max="10" 
              step="0.1" 
              value={notas[estudiante.id] || ''} 
              onChange={(e) => handleNotaChange(estudiante.id, e.target.value)}
            />
          </div>
        ))}
      </form>
      <button onClick={handleGuardar}>Guardar Notas</button>
    </div>
  );
};

export default EstudiantesDelCurso;
