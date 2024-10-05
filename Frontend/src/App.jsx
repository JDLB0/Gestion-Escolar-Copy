import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import TeacherDashboard from './pages/TeacherDashboard.jsx';
import StudentDashboard from './pages/StudentDashboard.jsx';
import CreateCourse from './components/Course/CreateCourse.jsx';
import Dashboard from './pages/Home.jsx';
import  CreateTeacher from './components/Teacher/CreateTeacher.jsx';
import  Teacherlist from './components/Teacher/Teacherlist.jsx';
import  TeacherForm from './components/Teacher/TeacherForm.jsx';
import CreateStudent from './components/Student/CreateStudent.jsx';
import Studentlist from './components/Student/Studentlist.jsx';
import StudentForm from './components/Student/StudentForm.jsx';
import ListCourses from './components/Course/CourseList.jsx';
import EnrollStudent from './components/Course/EnrollStudent.jsx';
import ViewCourse from './components/Course/ViewCourse.jsx';
import EditCourse from './components/Course/EditCourse.jsx';
import AsignarNotas from './components/Grades/AsignarNotas.jsx';
import EstudiantesDelCurso from './components/Grades/EstudiantesCurso.jsx';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />  {/* Redirige a /login */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/teacherinterface" element={<TeacherDashboard />} />
        <Route path="/studentinterface" element={<StudentDashboard />} />
        <Route path="/createcourse" element={<CreateCourse />} />
        <Route path="/home" element={<Dashboard />} />
        <Route path="/createteacher" element={< CreateTeacher/>} />
        <Route path="/teacherlist" element={< Teacherlist/>} />
        <Route path="/updateteacher/:id" element={< TeacherForm/>} />
        <Route path="/createstudent" element={< CreateStudent/>} />
        <Route path="/studentlist" element={< Studentlist/>} />
        <Route path="/updatestudent/:id" element={< StudentForm/>} />
        <Route path="/course" element={< ListCourses/>} />
        <Route path="/enrollstudent" element={< EnrollStudent/>} />
        <Route path="/viewcourse/:id" element={< ViewCourse/>} />
        <Route path="/editcourse/:id" element={< EditCourse/>} />
        <Route path="/asignarnotas" element={< AsignarNotas/>} />
        <Route path="/course/:cursoId/asignarnotas" element={< EstudiantesDelCurso/>} />
      </Routes>
    </div>
  );
};

export default App;

