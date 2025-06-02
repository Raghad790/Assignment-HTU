function AlertButton({ message }) {
  const handleClick = (e) => {
    alert(message);
    e.target.textContent = "Details Shown";
  };

  return (
    <button onClick={(event) => handleClick(event)}>
      Show Student Details
    </button>
  );
}

export default AlertButton;
