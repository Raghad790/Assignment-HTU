import "./App.css";
import StudentList from "./StudentList";
import Footer from "./Footer";

function App() {
  const students = [
    { id: 1, name: "Sarah Ali", grade: 95 },
    { id: 2, name: "Omar Tarek", grade: 82 },
    { id: 3, name: "Lina Haddad", grade: 76 },
  ];

  return (
    <>
      <StudentList students={students} />
      <Footer count={students.length} />
    </>
  );
}

export default App;
