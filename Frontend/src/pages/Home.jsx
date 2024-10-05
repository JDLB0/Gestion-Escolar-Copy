// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Home.css';  // Este archivo CSS lo crearemos más adelante para estilizar el dashboard

// const Dashboard = () => {
//   return (
//     <div className="dashboard-container">
//       <h1>Gestor escolar</h1>
//       <div className="dashboard-options">
//         <Link to="/teacherlist" className="dashboard-card">
//           <h3>Administar profesores</h3>
//           <p>Agregar, editar, y eliminar profesores.</p>
//         </Link>
//         <Link to="/students" className="dashboard-card">
//           <h3>Administrar estudiantes</h3>
//           <p>Agregar, editar, y eliminar estudiantes.</p>
//         </Link>
//         <Link to="/course" className="dashboard-card">
//           <h3>Administrar cursos</h3>
//           <p>Crear y admistrar cursos.</p>
//         </Link>
//         <Link to="/grades" className="dashboard-card">
//           <h3>Asignar notas</h3>
//           <p>Asignar y actualizar notas estudiantes.</p>
//         </Link>
//         <Link to="/reports" className="dashboard-card">
//           <h3>Generar Reportes</h3>
//           <p>Generar y descargar reporte de notas en PDF.</p>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Asegúrate de que el nombre del archivo CSS coincida
import { Book, Users, GraduationCap, PenTool, FileText } from 'lucide-react';

const DashboardCard = ({ to, title, description, icon: Icon }) => (
  <Link to={to} className="dashboard-card">
    <Icon className="dashboard-card-icon" />
    <h3 className="dashboard-card-title">{title}</h3>
    <p className="dashboard-card-description">{description}</p>
  </Link>
);

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Gestor Escolar</h1>
      <div className="dashboard-options">
        <DashboardCard
          to="/teacherlist"
          title="Administrar Profesores"
          description="Agregar, editar y eliminar profesores."
          icon={Users}
        />
        <DashboardCard
          to="/studentlist"
          title="Administrar Estudiantes"
          description="Agregar, editar y eliminar estudiantes."
          icon={GraduationCap}
        />
        <DashboardCard
          to="/course"
          title="Administrar Cursos"
          description="Crear y administrar cursos."
          icon={Book}
        />
        <DashboardCard
          to="/grades"
          title="Asignar Notas"
          description="Asignar y actualizar notas de estudiantes."
          icon={PenTool}
        />
        <DashboardCard
          to="/reports"
          title="Generar Reportes"
          description="Generar y descargar reporte de notas en PDF."
          icon={FileText}
        />
      </div>
    </div>
  );
};

export default Dashboard;





// import React from 'react';
// import { Link } from 'react-router-dom';

// const HomePage = () => {
//   return (
//     <div className="home-page">
//       <h1>Welcome to the School Management System</h1>
//       <ul>
//         <li><Link to="/course">List Courses</Link></li>
//         <li><Link to="/course/create">Create a Course</Link></li>
//         <li><Link to="/courses/enroll">Enroll Students</Link></li>
//       </ul>
//     </div>
//   );
// };

// export default HomePage;
