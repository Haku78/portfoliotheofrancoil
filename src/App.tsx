import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Creative from "./components/sections/Creative";
import Skills from "./components/sections/Skills";
import Contact from "./components/sections/Contact";
import './App.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Projects />
        <Creative />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
