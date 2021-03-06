import "./assets/css/bootstrap.css";
import Experiences from "./components/Experiences/Experiences";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Portfolios from "./components/Porfolios/Portfolios";
import Services from "./components/Services/Services";
import SideProjects from "./components/SideProjects/SideProjects";

function App() {
  document.title = "Ferdian's Portfolio";

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services />
      <Portfolios />
      <SideProjects />
      <Experiences />
      <Footer />
    </div>
  );
}

export default App;
