import Aboutus from "./components/Aboutus";
import Header from "./components/Header";
import HowItWorks from "./components/Howitworks";
import Navbar from "./components/Navbar";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <HowItWorks />
      <Aboutus />
    </div>
  );
}

export default App;
