/** @format */

import { useScroll, useTransform, motion } from "framer-motion";
import HeroSection from "./components/HeroSection";
import { ThemeProvider } from "./ThemeContext";
import AboutMe from "./components/AboutMe";
import CustomizedTimeline from "./components/Timeline";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  const { scrollYProgress } = useScroll();

  // کنترل شفافیت و حرکت بخش دوم
  // const opacitySecond = useTransform(scrollYProgress, [0, 0.02], [0, 1]);
  // const translateYSecond = useTransform(scrollYProgress, [0, 0.1], [100, 0]);

  // کنترل شفافیت و حرکت بخش سوم
  const opacityThird = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  const translateYThird = useTransform(scrollYProgress, [0.3, 0.6], [100, 0]);

  // کنترل شفافیت و حرکت بخش چهارم
  const opacityFourth = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);
  const translateYFourth = useTransform(scrollYProgress, [0.6, 0.8], [100, 0]);

  // تغییر عرض بخش part 1 و part 2
  const widthPart1 = useTransform(
    scrollYProgress,
    [0.8, 0.85, 1],
    ["100%", "100%", "0%"],
  );
  const widthPart2 = useTransform(scrollYProgress, [0.85, 1], ["0%", "100%"]);
  const opacityPart2 = useTransform(
    scrollYProgress,
    [0.9, 0.95, 1],
    [0, 0.95, 1],
  );

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

        {/* <motion.div
          style={{ width: widthPart1 }}
          className="flex items-center justify-center bg-red-600"
        >
          <h1>part 1</h1>
        </motion.div> */}

        {/* <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 30, transition: { duration: 2, delay: 1 } }}
          className="pointer-events-none sticky top-0 z-20 my-32 flex w-full items-center justify-center overflow-hidden max-md:my-20"
        >
          <CustomizedTimeline />
        </motion.div> */}

        {/* <motion.div
          style={{ opacity: opacityFourth, y: translateYFourth }}
          className="sticky top-0 z-30 flex h-screen w-full items-center justify-center overflow-hidden bg-blue-500 text-[60px] text-white"
        >
          <motion.div
            style={{ width: widthPart1 }}
            className="flex h-screen w-full items-center justify-center bg-red-600"
          >
            <h1>part 1</h1>
          </motion.div>
          <motion.div
            style={{ width: widthPart2, opacity: opacityPart2 }}
            className="flex h-screen items-center justify-center bg-yellow-500"
          >
            <h1>part 2</h1>
          </motion.div>
        </motion.div> */}
      </div>
    </ThemeProvider>
  );
};

export default App;
