import "./App.css";
import Card from "./Card/Card";
import Header from "./Header";
import Content from "./Content";
import Food from "./Food";
import Footer from "./Footer";
function App() {
  return (
    <>
      <Header />
      <Card name="Raghad" disc="Full Stack Developer" age={24} isStaff={true} />
      <Card />
      <Food />
      <Content />
      <Footer />
    </>
  );
}

export default App;
