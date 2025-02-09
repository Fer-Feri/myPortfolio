/** @format */

import NavMenu from "./Nav";

import hiImg from "../assets/icons/hi.svg";
import bgVector from "../assets/bg-vector.svg";
// import person from "../assets/person.png";
import person from "../assets/person-1.png";
import download from "../assets/icons/download.svg";

import tailwindIcon from "../assets/icons/tailwind.svg";
import reactIcon from "../assets/icons/react.svg";
import threeIcon from "../assets/icons/threejs.svg";
import jsIcon from "../assets/icons/js.svg";
import nextIcon from "../assets/icons/nextjs.svg";
import framerIcon from "../assets/icons/framer.svg";

import { motion } from "framer-motion";

// ------------------------------
const textVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};
// ------------------------------
const btnVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1.05,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};
// ------------------------------
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.5 } },
};

const itemVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};
// ------------------------------
const HeroSection = () => {
  return (
    <div className="relative h-auto w-full pt-14 max-2xl:px-3 max-md:px-6">
      <div className="relative w-full">
        {/*//? BG VECTOR */}
        <img
          className="absolute left-1/2 top-[30%] z-0 -translate-x-1/2 scale-105 transform !cursor-default opacity-20 dark:opacity-90"
          src={bgVector}
          alt="bg-vector"
        />

        <NavMenu />

        {/*//? title hero section */}
        <motion.div
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          className="relative z-10 mt-36 flex w-full justify-center max-md:mt-24"
        >
          <div className="bgGlassesLight dark:bgGlasses flex w-fit items-center justify-center gap-8 px-10 py-6 max-sm:gap-4 max-sm:px-6">
            <motion.img
              initial={{ rotate: "0deg" }}
              animate={{
                rotate: ["0deg", "30deg", "0deg"],
                transition: {
                  duration: 4,
                  times: [0, 0.5, 1],
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              src={hiImg}
              alt="Hi-Icon"
              className="max-sm:w-10"
            />
            <p className="text-5xl text-neutral-900 dark:text-white max-sm:text-4xl max-[490px]:text-3xl">
              سلام! من{" "}
              <span className="text-[#EB5B00] dark:text-mainYellow">
                فرشاد بهاری
              </span>{" "}
              هستم
            </p>
          </div>
        </motion.div>

        {/*//? text hero section */}
        <div className="relative z-20 mt-16 text-center">
          <h1 className="font-iranB text-8xl leading-[9rem] text-neutral-900 dark:text-mainYellow max-lg:text-7xl max-lg:leading-[7rem] max-md:text-6xl max-md:leading-[6rem] max-sm:text-5xl max-sm:leading-[5rem] max-[490px]:text-4xl max-[490px]:leading-[4rem] max-[375px]:text-3xl max-[375px]:leading-[3rem]">
            طراحی حرفه‌ای وب
            <span className="text-mainYellow dark:text-white"> & </span> توسعه
            فرانت‌اند <br />
            <span className="text-mainYellow dark:text-white">با</span>
            <span className="text-mainYellow dark:text-white">
              تمرکز بر
            </span>{" "}
            خلاقیت و کیفیت
          </h1>
        </div>

        <div
          className="relative z-10 mt-16 text-center text-3xl text-neutral-900 dark:text-white max-sm:text-2xl max-[490px]:text-xl"
          style={{ direction: "rtl" }}
        >
          <p className="leading-10">
            توسعه‌دهنده فرانت‌اند با تجربه{" "}
            <span className="bgGlassesLight dark:bgText px-6 font-iranB text-neutral-900 dark:text-mainYellow">
              +2 سال
            </span>{" "}
            در زمینه{" "}
            <span className="bgGlassesLight dark:bgText px-6 font-iranB text-neutral-900 dark:text-mainYellow">
              ReactJS
            </span>
          </p>
        </div>

        {/* //?button */}
        <motion.div
          variants={btnVariants}
          initial="hidden"
          whileInView="visible"
          className="relative z-10 mt-24 flex items-center justify-center gap-6 text-4xl max-sm:text-3xl max-[390px]:text-2xl"
        >
          <a
            href="/myPortfolio/resume.pdf"
            download="resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bgBtnHover dark:bgGlasses group flex items-center gap-5 rounded-full px-12 py-6 text-neutral-900 transition-all hover:bg-neutral-900 hover:text-mainYellow dark:text-mainYellow dark:hover:bg-mainYellow dark:hover:text-neutral-900 max-sm:px-9 max-sm:py-5"
          >
            <motion.img
              initial={{ y: 0 }}
              animate={{
                y: [0, 5, 0],
                transition: {
                  times: [0, 0.5, 1],
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="filterBlack dark:filterYellow group-hover:filterYellow group-hover:dark:filterBlack w-11 transition-all max-md:w-9 max-[490px]:w-8"
              src={download}
              alt="Download Icon"
            />
            دانلود رزومه
          </a>
          <button
            className="bgBtn hover:bgBtnHover dark:hover:bgGlasses rounded-full px-12 py-6 text-neutral-900 transition-all hover:text-mainYellow dark:hover:text-mainYellow max-sm:px-9 max-sm:py-5"
            onClick={() => {
              const section = document.getElementById("contact");
              if (section) section.scrollIntoView({ behavior: "smooth" });
            }}
          >
            شروع همکاری
          </button>
        </motion.div>

        {/*//? person img - badge */}
        <div className="mt-32 flex items-end justify-center max-sm:mt-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="relative w-[500px] max-[800px]:w-[400px] max-[620px]:w-[300px] max-[470px]:w-[270px] max-[420px]:w-[240px] max-[370px]:w-[225px]"
          >
            <img className="rounded-full" src={person} alt="Farshad" />
            {/* //!Badge-1 */}
            <motion.div
              variants={itemVariants}
              className="bgGlassesLight dark:bgBadge absolute -right-[33%] top-0 flex w-fit items-center gap-6 rounded-full px-9 py-4 text-neutral-900 max-lg:-right-[15%] max-[800px]:-right-[18%] max-[800px]:top-[5%] max-[800px]:gap-3 max-[800px]:px-5 max-[800px]:py-4"
            >
              <img
                src={tailwindIcon}
                className="w-[35px] !cursor-default max-[640px]:w-[27px]"
                alt="tailwind-Logo"
              />
              <span className="font-poppins text-4xl tracking-wide max-lg:text-3xl max-[800px]:text-2xl max-[640px]:text-xl">
                Tailwind
              </span>
            </motion.div>
            {/* //!Badge-2 */}
            <motion.div
              variants={itemVariants}
              className="bgGlassesLight dark:bgBadge absolute -right-[50%] top-[40%] flex w-fit items-center gap-6 rounded-full px-9 py-4 text-neutral-900 max-lg:-right-[26%] max-[800px]:gap-3 max-[800px]:px-5 max-[800px]:py-4"
            >
              <img
                src={jsIcon}
                className="w-[35px] !cursor-default max-[640px]:w-[27px]"
                alt="tailwind-Logo"
              />
              <span className="font-poppins text-4xl tracking-wide max-lg:text-3xl max-[800px]:text-2xl max-[640px]:text-xl">
                JavaScript
              </span>
            </motion.div>
            {/* //!Badge-3 */}
            <motion.div
              variants={itemVariants}
              className="bgGlassesLight dark:bgBadge absolute -right-[50%] bottom-[10%] flex w-fit items-center gap-6 rounded-full px-9 py-4 text-neutral-900 max-lg:-right-[25%] max-[800px]:-right-[20%] max-[800px]:gap-3 max-[800px]:px-5"
            >
              <img
                src={framerIcon}
                className="w-[35px] !cursor-default max-lg:w-[25px]"
                alt="tailwind-Logo"
              />
              <span className="font-poppins text-4xl tracking-wide max-lg:text-3xl max-[800px]:text-2xl max-[640px]:text-xl">
                Framer Motion
              </span>
            </motion.div>
            {/* //!Badge-4*/}
            <motion.div
              variants={itemVariants}
              className="bgGlassesLight dark:bgBadge absolute -left-[33%] top-0 flex w-fit items-center gap-6 rounded-full px-9 py-4 text-neutral-900 max-lg:-left-[15%] max-[800px]:-left-[18%] max-[800px]:top-[5%] max-[800px]:gap-3 max-[800px]:px-5 max-[800px]:py-4"
            >
              <img
                src={reactIcon}
                className="w-[35px] !cursor-default max-[640px]:w-[27px]"
                alt="tailwind-Logo"
              />
              <span className="font-poppins text-4xl tracking-wide max-lg:text-3xl max-[800px]:text-2xl max-[640px]:text-xl">
                ReactJS
              </span>
            </motion.div>
            {/* //!Badge-5 */}
            <motion.div
              variants={itemVariants}
              className="bgGlassesLight dark:bgBadge absolute -left-[50%] top-[40%] flex w-fit items-center gap-6 rounded-full px-9 py-4 text-neutral-900 max-lg:-left-[26%] max-[800px]:gap-3 max-[800px]:px-5 max-[800px]:py-4"
            >
              <img
                src={threeIcon}
                className="w-[35px] !cursor-default max-[640px]:w-[27px]"
                alt="tailwind-Logo"
              />
              <span className="font-poppins text-4xl tracking-wide max-lg:text-3xl max-[800px]:text-2xl max-[640px]:text-xl">
                ThreeJs
              </span>
            </motion.div>
            {/* //!Badge-6 */}
            <motion.div
              variants={itemVariants}
              className="bgGlassesLight dark:bgBadge absolute -left-[33%] bottom-[10%] flex w-fit items-center gap-6 rounded-full px-9 py-4 text-neutral-900 max-lg:-left-[25%] max-[800px]:-left-[10%] max-[800px]:gap-3 max-[800px]:px-5 max-[800px]:py-4"
            >
              <img
                src={nextIcon}
                className="w-[35px] !cursor-default max-lg:w-[30px] max-[640px]:w-[27px]"
                alt="tailwind-Logo"
              />
              <span className="font-poppins text-4xl tracking-wide max-lg:text-3xl max-[800px]:text-2xl max-[640px]:text-xl">
                NextJS
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
