import Aboutus from "./components/Aboutus";
import Contact from "./components/Contact";
import Header from "./components/Header";
import HowItWorks from "./components/Howitworks";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <HowItWorks />
      <Aboutus />
      <Services />
      <Contact />
    </div>
  );
}

export default App;
