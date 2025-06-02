function Buttons() {
  // const handleClick = () => console.log("Click");
  const handleCkick2 = (e) => (e.target.textContent = "Good Job");
  return <button onClick={(event) => handleCkick2(event)}>Click Me</button>;
}
export default Buttons;
