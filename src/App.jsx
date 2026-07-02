import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import FloatingNav from "./Components/FloatingNav";

function App() {
  return (
    <div>
      <div className="mx-auto max-w-4xl px-6 py-12">
        <Navbar />

        <main className="flex flex-col gap-20 py-12">
          <Hero />
          <About />
          <Projects />
        </main>

        <Footer />
      </div>
      <FloatingNav />
    </div>
  );
}

export default App;
