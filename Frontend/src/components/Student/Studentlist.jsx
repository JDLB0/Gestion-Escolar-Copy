// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import api from '../api/api.js';
// import './StudentList.css';

// const StudentList = () => {
//   const [students, setStudents] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchStudents();
//   }, []);

//   const fetchStudents = async () => {
//     try {
//       const response = await api.get('/student/'); // Endpoint correcto para obtener estudiantes
//       setStudents(response.data);
//     } catch (error) {
//       console.error('Error al buscar estudiantes:', error);
//     }
//   };

//   const deleteStudent = async (id) => {
//     try {
//       await api.delete(`/student/${id}/`); // Endpoint para eliminar estudiantes
//       fetchStudents(); // Vuelve a obtener la lista de estudiantes
//     } catch (error) {
//       console.error('Error eliminando estudiante:', error);
//     }
//   };

//   const handleBack = () => {
//     navigate('/home'); // Cambia a la ruta deseada para volver
//   };

//   return (
//     <div className="container">
//       <h1>Estudiantes</h1>
//       <div className="button-container">
//         <button className="back-button" onClick={handleBack}>Atras</button>
//         <button className="add-button" onClick={() => navigate('/createstudent')}>Añadir Estudiante</button>
//       </div>
//       <ul className="student-list">
//         {students.map(student => (
//           <li key={student.id} className="student-item">
//             <div className="student-info">
//               {student.full_name} - {student.grade} {/* Mostrar el nombre completo y el grado */}
//             </div>
//             <div className="action-buttons">
//               <button className="edit-button" onClick={() => navigate(`/updatestudent/${student.id}`)}>Editar</button>
//               <button className="delete-button" onClick={() => deleteStudent(student.id)}>Eliminar</button>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default StudentList;








// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import api from '../api/api.js';
// import './StudentList.css';

// const StudentList = () => {
//   const [students, setStudents] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchStudents();
//   }, []);

//   const fetchStudents = async () => {
//     try {
//       const response = await api.get('/student/');
//       setStudents(response.data);
//     } catch (error) {
//       console.error('Error al buscar estudiantes:', error);
//     }
//   };

//   const deleteStudent = async (id) => {
//     // Verifica que el ID esté definido antes de hacer la solicitud
//     if (!id) {
//       console.error('El ID del estudiante no está definido o es nulo.');
//       return;
//     }

//     const confirmDelete = window.confirm('¿Estás seguro de que deseas eliminar este estudiante?');
//     if (!confirmDelete) {
//       return; // Cancela la eliminación si el usuario no confirma
//     }

//     try {
//       await api.delete(`/student/${id}/`);
//       fetchStudents();  // Vuelve a obtener la lista de estudiantes
//       alert('Estudiante eliminado exitosamente.');
//     } catch (error) {
//       console.error('Error eliminando estudiante:', error);
//       alert('Ocurrió un error al eliminar el estudiante. Intenta nuevamente.');
//     }
//   };

//   const handleBack = () => {
//     navigate('/home');
//   };

//   return (
//     <div className="container">
//       <h1>Estudiantes</h1>
//       <div className="button-container">
//         <button className="back-button" onClick={handleBack}>Atras</button>
//         <button className="add-button" onClick={() => navigate('/createstudent')}>Añadir Estudiante</button>
//       </div>
//       <ul className="student-list">
//         {students.map(student => (
//           <li key={student.user_id} className="student-item"> {/* Asegúrate de usar un identificador único */}
//             <div className="student-info">
//               {student.full_name} - {student.grade} (ID: {student.user_id}) {/* Mostrar el nombre completo y el ID */}
//             </div>
//             <div className="action-buttons">
//               <button className="edit-button" onClick={() => navigate(`/updatestudent/${student.user_id}`)}>Editar</button>
//               <button 
//                 className="delete-button" 
//                 onClick={() => deleteStudent(student.user_id)} // Asegúrate de pasar el ID correcto
//               >
//                 Eliminar
//               </button>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default StudentList;


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, UserPlus, Edit, Trash2 } from 'lucide-react';
import api from '../../api/api.js';
import './StudentList.css';

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await api.get('/student/');
      setStudents(response.data);
    } catch (error) {
      console.error('Error al buscar estudiantes:', error);
    }
  };

  const deleteStudent = async (id) => {
    try {
      await api.delete(`/student/${id}/`);
      fetchStudents();
    } catch (error) {
      console.error('Error eliminando estudiante:', error);
    }
  };

  const handleBack = () => {
    navigate('/home'); 
  };

  return (
    <div className="student-list-page">
      <div className="student-list-container">
        <h1 className="student-list-title">Estudiantes</h1>
        <div className="button-container">
          <button className="back-button" onClick={handleBack}>
            <ArrowLeft className="button-icon" />
            Atrás
          </button>
          <button className="add-button" onClick={() => navigate('/createstudent')}>
            <UserPlus className="button-icon" />
            Añadir estudiante
          </button>
        </div>
        <ul className="student-list">
          {students.map(student => (
            <li key={student.id} className="student-item">
              <div className="student-info">
                <span className="student-name">{student.full_name}</span>
                <span className="student-grade">{student.grade}</span>
              </div>
              <div className="action-buttons">
                <button className="edit-button" onClick={() => navigate(`/updatestudent/${student.id}`)}>
                  <Edit className="button-icon" />
                  Editar
                </button>
                <button className="delete-button" onClick={() => deleteStudent(student.id)}>
                  <Trash2 className="button-icon" />
                  Eliminar
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StudentList;












