import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import FloatingNav from "./Components/FloatingNav";
import A from "./Components/Vector/A.svg";

function App() {
  return (
    <div className="relative overflow-hidden">
      <div className="mx-auto max-w-4xl px-6 py-12 border-x border-border">
        <Navbar />

        <main className="flex flex-col gap-20 py-12">
          <Hero />
          <About />
          <Projects />
        </main>

        <Footer />
      </div>

      <FloatingNav />

      <img
        src={A}
        alt=""
        className="absolute -right-24 bottom-0 w-200 opacity-[0.03] pointer-events-none select-none -z-1"
      />
    </div>
  );
}

export default App;
