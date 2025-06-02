import "./App.css";
import List from "./List";
import TableData from "./TableData";
import Button from "@mui/material/Button";
import Buttons from "./Buttons";

function App() {
  const food = [
    { id: 1, name: "Orange", type: "fruits" },
    { id: 2, name: "Banana", type: "fruits" },
    { id: 3, name: "Apple", type: "fruits" },
  ];
  const vegatables = [
    { id: 4, name: "Potatoes" },
    { id: 5, name: "Corns" },
  ];
  const col = [
    { key: "id", lable: "Id" },
    { key: "name", lable: "Name" },
    { key: "email", lable: "Email" },
    { key: "provider", lable: "Provider" },
  ];

  const users = [
    {
      id: 1,
      name: "Hussam",
      email: "test@test.com",
      provider: "Google",
    },
    { id: 2, name: "Ali", email: "Ali@test.com", provider: "Google" },
  ];
  const col2 = [
    { key: "id", lable: "Id" },
    { key: "name", lable: "Name" },
  ];
  const courses = [
    { id: 1, name: "HTML" },
    { id: 1, name: "CSS" },
  ];
  return (
    <>
      <List items={food} />
      <List items={vegatables} />
      <TableData col={col} data={users} />
      <TableData col={col2} data={courses} />
      <Button variant="text">Text</Button>
      <Button variant="contained" color="primary">
        Success
      </Button>
      <Buttons />
    </>
  );
}

export default App;
