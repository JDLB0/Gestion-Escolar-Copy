import React, { useEffect, useState } from 'react';
import api from '../api/api';

const Dashboard = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await api.get('course/');
      setCourses(response.data);
    };
    fetchCourses();
  }, []);

  const handleAssign = async (courseId) => {
    try {
      await api.post(`course/${courseId}/assign_teacher/`);
      alert('Te has inscrito al curso con éxito');
    } catch (error) {
      console.error('Error al inscribirse al curso:', error);
    }
  };

  return (
    <div>
      <h1>Mis Cursos Disponibles</h1>
      {courses.map(course => (
        <div key={course.id}>
          <h2>{course.name}</h2>
          <p>{course.description}</p>
          <button onClick={() => handleAssign(course.id)}>Inscribirse</button>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;


// import React from 'react';
// import './TeacherDashboard.css'; 

// const TeacherDashboard = () => {
//   return (
//     <div className="teacher-dashboard">
//       <h2 className="dashboard-title">Panel del Profesor</h2>
//       <p className="dashboard-subtitle">Seleccione un curso para generar el informe de calificaciones:</p>

//       <div className="course-list">
//         {/* Ejemplo de curso */}
//         <div className="course-card">
//           <h3>Nombre del Curso</h3>
//           <table className="grades-table">
//             <thead>
//               <tr>
//                 <th className="table-header">Estudiante</th>
//                 <th className="table-header">Calificación</th>
//               </tr>
//             </thead>
//             <tbody>
//               {/* Ejemplo de filas de estudiantes */}
//               <tr>
//                 <td className="table-cell">Nombre del Estudiante</td>
//                 <td className="table-cell">Calificación</td>
//               </tr>
//               <tr>
//                 <td className="table-cell">Nombre del Estudiante</td>
//                 <td className="table-cell">Calificación</td>
//               </tr>
//               {/* Puedes agregar más filas aquí */}
//             </tbody>
//           </table>
//           <button className="generate-button">Generar Informe en PDF</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TeacherDashboard;


