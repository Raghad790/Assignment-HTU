import StudentCard from "./StudentCard";
function StudentList({students}){
const studentCard=students.map((s)=>(<
    StudentCard
    key={s.id} name={s.name} grade={s.grade}
    
    />))
    return(<>
    <div className="StudentList">{studentCard}</div></>)
}
export default StudentList;