import AlertButton from "./AlertButton";
function StudentCard({ name, grade }) {
  const message = `Student ${name} - Grade: ${grade} `;
  return (
    <>
<div className="StudentCard">
      <h2>{name}</h2>
      <p>Grade:{grade}</p>
      <p>
        {grade >= 85 ? <h5>Excellent Student</h5> : <h5> Needs Improvement</h5>}
      </p>
      <AlertButton message={message} />
      </div>
    </>
  );
}
export default StudentCard;
