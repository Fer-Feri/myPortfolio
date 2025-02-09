/** @format */
import HeroSection from "./components/HeroSection";
import { ThemeProvider } from "./ThemeContext";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <ThemeProvider>
      <div className="relative mx-auto w-full max-w-[144rem]">
        {/* بخش اول */}
        <HeroSection />
        {/* بخش دوم */}
        <AboutMe />
        {/* بخش سوم */}
        <Skills />
        {/* بخش چهارم */}
        <Projects />
        {/* بخش پنجم */}
        <Contact />
      </div>
    </ThemeProvider>
  );
};

export default App;
