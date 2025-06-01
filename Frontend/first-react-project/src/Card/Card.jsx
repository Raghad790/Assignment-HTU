//importing the image
import profilePic from "../assets/profile pic.jpg";
//module styling
import styles from "./Card.module.css";
//to check values's propTypes
import PropTypes from "prop-types";
function Card({ name="Test", disc="test", age=30, isStaff=false }) {
  return (
    <div className={isStaff? styles.cardStaff: styles.card}>
      <img src={profilePic} alt="profile pic" />
      <h2>{name}</h2>
      <p>{disc}</p>
      <p>{age}</p>

      <p>{isStaff ? "Yes" : "No"}</p>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string,
  disc: PropTypes.string,
  age: PropTypes.number,
  isStaff: PropTypes.bool,
};
export default Card;
