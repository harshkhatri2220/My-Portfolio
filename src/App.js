import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import Contact from "./components/Contact";

function App() {
  return (
    <>
    <NavBar />
    <Home />
    <About/>
    <Projects/>
    <Technologies/>
    <Contact/>
    <SocialLinks/>
    </>
  );
}

export default App;
