import { useScroll, useTransform, motion } from "framer-motion";
import co2WebImg from "../assets/co2-website.png";
import musicAppWebImg from "../assets/musicApp.png";
import AjilWebImg from "../assets/ajilWeb.png";

import cssIcon from "../assets/icons/css.png";
import htmlIcon from "../assets/icons/html.png";
import jsIcon from "../assets/icons/js.png";
import eyeIcon from "../assets/icons/eye.png";
import rapidIcon from "../assets/icons/rapidapi.svg";
import reactIcon from "../assets/icons/react.png";
import sassIcon from "../assets/icons/sass.png";
import { useEffect, useState } from "react";

const ProjectsSection = () => {
  const { scrollYProgress } = useScroll();

  const translateY1 = useTransform(scrollYProgress, [0, 0.93], [0, -100]);
  const opacity1 = useTransform(scrollYProgress, [0, 0.9, 1], [1, 0.9, 0]);

  const translateY2 = useTransform(scrollYProgress, [0.3, 0.96], [100, -100]);
  const opacity2 = useTransform(scrollYProgress, [0.33, 0.6, 1], [0, 1, 1]);

  const translateY3 = useTransform(scrollYProgress, [0.33, 0.97], [100, 0]);
  const opacity3 = useTransform(scrollYProgress, [0.33, 0.7, 1], [0, 1, 1]);

  const progressBarWidth = useTransform(
    scrollYProgress,
    [0.5, 1],
    ["0%", "100%"],
  );

  const progressBarOpacity = useTransform(scrollYProgress, [0.95, 1], [1, 0]);

  const scaleText = useTransform(scrollYProgress, [0.1, 0.9], [0.9, 1.2]);

  return (
    <>
      {/* //!title */}
      <div
        className="mb-[20rem] max-lg:mb-[22rem] max-md:mb-[15rem] max-sm:mb-[12rem] max-[400px]:mb-[12rem]"
        id="projects"
      >
        <div className="relative flex justify-center py-24 font-poppinsB max-2xl:py-14 max-lg:py-16 max-md:py-12 max-sm:py-12 max-[400px]:py-8">
          <motion.p
            style={{ scale: scaleText }}
            className="strokeText absolute top-[85%] text-[13rem] text-transparent dark:stroke-mainYellow max-md:top-[92%] max-md:text-[9rem] max-sm:top-[95%] max-sm:text-[7rem]"
          >
            Projects
          </motion.p>
          <h2 className="absolute top-full text-[11rem] text-neutral-900 dark:text-mainYellow max-md:text-[8rem] max-sm:text-[6rem]">
            Projects
          </h2>
        </div>
      </div>
      <motion.div
        style={{ width: progressBarWidth, opacity: progressBarOpacity }}
        className="mb-30 sticky left-6 top-0 z-50 h-3 w-full bg-mainYellow max-[1004px]:mb-20 max-[540px]:mb-40 max-[400px]:mb-36"
      />

      <div className="relative">
        <div className="flex flex-col items-center justify-center px-6 text-white">
          {/*//! پروژه 1 */}
          <motion.div
            style={{ opacity: opacity1, y: translateY1 }}
            className="sticky top-0 z-10 mb-48 flex h-screen w-full flex-wrap items-center justify-center gap-6 bg-[#efefe9] dark:bg-[#0c0c0c]"
          >
            {/* img */}
            <div className="flex max-w-[600px] grow items-center justify-center">
              <img src={co2WebImg} className="rounded-xl" alt="co2-website" />
            </div>
            {/* content */}
            <div className="flex grow flex-col items-center justify-center gap-20">
              <div className="flex flex-col gap-12">
                <h3
                  className="text-6xl text-neutral-900 dark:text-white"
                  dir="rtl"
                >
                  لندینگ پیج CO-2
                </h3>
                <p className="text-center text-2xl text-gray-400" dir="rtl">
                  CO-2 Landing Page{" "}
                </p>
              </div>
              {/* //!badges */}
              <div className="flex flex-wrap items-center gap-6">
                {/* //*Badge-1 */}
                <div className="bgGlassesLight flex w-fit items-center gap-3 rounded-full px-6 py-4 text-neutral-900 dark:bg-[#019961] max-[800px]:px-5 max-[800px]:py-4">
                  <img
                    src={htmlIcon}
                    className="w-[35px] !cursor-default max-[640px]:w-[27px]"
                    alt="tailwind-Logo"
                  />
                  <span className="font-poppins text-4xl tracking-wide max-lg:text-3xl max-[800px]:text-2xl max-[640px]:text-xl">
                    Html
                  </span>
                </div>
                {/* //*Badge-2 */}
                <div className="bgGlassesLight flex w-fit items-center gap-3 rounded-full px-6 py-4 text-neutral-900 dark:bg-[#019961] max-[800px]:px-5 max-[800px]:py-4">
                  <img
                    src={cssIcon}
                    className="w-[35px] !cursor-default max-[640px]:w-[27px]"
                    alt="tailwind-Logo"
                  />
                  <span className="font-poppins text-4xl tracking-wide max-lg:text-3xl max-[800px]:text-2xl max-[640px]:text-xl">
                    Css
                  </span>
                </div>
                {/* //*Badge-3 */}
                <div className="bgGlassesLight flex w-fit items-center gap-3 rounded-full px-6 py-4 text-neutral-900 dark:bg-[#019961] max-[800px]:px-5 max-[800px]:py-4">
                  <img
                    src={jsIcon}
                    className="w-[35px] !cursor-default max-[640px]:w-[27px]"
                    alt="tailwind-Logo"
                  />
                  <span className="font-poppins text-4xl tracking-wide max-lg:text-3xl max-[800px]:text-2xl max-[640px]:text-xl">
                    Js
                  </span>
                </div>
              </div>
              {/* //*button */}
              <a
                href="https://fer-feri.github.io/landing-co2-website/"
                target="_blank"
                className="flex cursor-pointer items-center gap-3 rounded-full bg-[#019945] px-9 py-8 text-4xl transition-all hover:bg-[#019945ae] max-md:px-6 max-md:py-6 max-md:text-3xl"
              >
                مشاهده دمو
                <img src={eyeIcon} className="w-10" alt="eye-icon" />
              </a>
            </div>
          </motion.div>
          {/*//! پروژه 2 */}
          <motion.div
            style={{ opacity: opacity2, y: translateY2 }}
            className="sticky top-0 z-10 flex h-screen w-full flex-wrap items-center justify-center gap-6 bg-[#efefe9] dark:bg-[#0c0c0c]"
          >
            {/* img */}
            <div className="flex max-w-[600px] grow items-center justify-center">
              <img
                src={musicAppWebImg}
                className="rounded-xl"
                alt="music-app-website"
              />
            </div>
            {/* content */}
            <div className="flex grow flex-col items-center justify-center gap-20">
              <div className="flex flex-col gap-12">
                <h3
                  className="text-6xl text-neutral-900 dark:text-white"
                  dir="rtl"
                >
                  اپ موزیک
                </h3>
                <p className="text-center text-2xl text-gray-400" dir="rtl">
                  Music App
                  <span className="pb-12 text-xl text-red-500">
                    {" "}
                    (Turn on VPN)
                  </span>
                </p>
              </div>
              {/* //!badges */}
              <div className="flex flex-wrap items-center gap-6">
                {/* //*Badge-1 */}
                <div className="bgGlassesLight flex w-fit items-center gap-3 rounded-full px-6 py-4 text-[#3c183b] dark:bg-[#3c183b] dark:text-white max-[800px]:px-5 max-[800px]:py-4">
                  <img
                    src={reactIcon}
                    className="w-[35px] !cursor-default max-[640px]:w-[27px]"
                    alt="tailwind-Logo"
                  />
                  <span className="font-poppins text-4xl tracking-wide max-lg:text-3xl max-[800px]:text-2xl max-[640px]:text-xl">
                    React
                  </span>
                </div>
                {/* //*Badge-2 */}
                <div className="bgGlassesLight dark:ext-white flex w-fit items-center gap-3 rounded-full px-6 py-4 text-[#3c183b] dark:bg-[#3c183b] dark:text-white max-[800px]:px-5 max-[800px]:py-4">
                  <img
                    src={sassIcon}
                    className="w-[35px] !cursor-default max-[640px]:w-[27px]"
                    alt="tailwind-Logo"
                  />
                  <span className="font-poppins text-4xl tracking-wide max-lg:text-3xl max-[800px]:text-2xl max-[640px]:text-xl">
                    Sass
                  </span>
                </div>
                {/* //*Badge-3 */}
                <div className="bgGlassesLight flex w-fit items-center gap-3 rounded-full px-6 py-4 text-[#3c183b] dark:bg-[#3c183b] dark:text-white max-[800px]:px-5 max-[800px]:py-4">
                  <img
                    src={rapidIcon}
                    className="w-[35px] !cursor-default max-[640px]:w-[27px]"
                    alt="tailwind-Logo"
                  />
                  <span className="font-poppins text-4xl tracking-wide max-lg:text-3xl max-[800px]:text-2xl max-[640px]:text-xl">
                    Rapid API
                  </span>
                </div>
              </div>
              {/* //*button */}
              <a
                href="https://music-app-pink-iota.vercel.app/"
                target="_blank"
                className="flex cursor-pointer items-center gap-3 rounded-full bg-[#3c183b] px-9 py-8 text-4xl transition-all hover:bg-[#6a2968] max-md:px-6 max-md:py-6 max-md:text-3xl"
              >
                مشاهده دمو
                <img src={eyeIcon} className="w-10" alt="eye-icon" />
              </a>
            </div>
          </motion.div>
          {/*//! پروژه 3 */}
          <motion.div
            style={{ opacity: opacity3, y: translateY3 }}
            className="sticky top-0 z-10 flex h-screen w-full flex-wrap items-center justify-center gap-6 bg-[#efefe9] dark:bg-[#0c0c0c]"
          >
            {/* img */}
            <div className="flex max-w-[600px] grow items-center justify-center">
              <img
                src={AjilWebImg}
                className="rounded-xl"
                alt="waffy-website"
              />
            </div>
            {/* content */}
            <div className="flex grow flex-col items-center justify-center gap-20">
              <div className="flex flex-col gap-12">
                <h3
                  className="text-6xl text-neutral-900 dark:text-white"
                  dir="rtl"
                >
                  فروشگاه آجیل
                </h3>
                <p className="text-center text-2xl text-gray-400" dir="rtl">
                  Waffy Shop
                </p>
              </div>
              {/* //!badges */}
              <div className="flex flex-wrap items-center gap-6">
                {/* //*Badge-1 */}
                <div className="bgGlassesLight flex w-fit items-center gap-3 rounded-full px-6 py-4 text-neutral-900 dark:bg-[#182950] dark:text-white max-[800px]:px-5 max-[800px]:py-4">
                  <img
                    src={htmlIcon}
                    className="w-[35px] !cursor-default max-[640px]:w-[27px]"
                    alt="tailwind-Logo"
                  />
                  <span className="font-poppins text-4xl tracking-wide max-lg:text-3xl max-[800px]:text-2xl max-[640px]:text-xl">
                    Html
                  </span>
                </div>
                {/* //*Badge-2 */}
                <div className="bgGlassesLight flex w-fit items-center gap-3 rounded-full px-6 py-4 text-neutral-900 dark:bg-[#182950] dark:text-white max-[800px]:px-5 max-[800px]:py-4">
                  <img
                    src={cssIcon}
                    className="w-[35px] !cursor-default max-[640px]:w-[27px]"
                    alt="tailwind-Logo"
                  />
                  <span className="font-poppins text-4xl tracking-wide max-lg:text-3xl max-[800px]:text-2xl max-[640px]:text-xl">
                    Css
                  </span>
                </div>
                {/* //*Badge-3 */}
                <div className="bgGlassesLight flex w-fit items-center gap-3 rounded-full px-6 py-4 text-neutral-900 dark:bg-[#182950] dark:text-white max-[800px]:px-5 max-[800px]:py-4">
                  <img
                    src={jsIcon}
                    className="w-[35px] !cursor-default max-[640px]:w-[27px]"
                    alt="tailwind-Logo"
                  />
                  <span className="font-poppins text-4xl tracking-wide max-lg:text-3xl max-[800px]:text-2xl max-[640px]:text-xl">
                    Js
                  </span>
                </div>
              </div>
              {/* //*button */}
              <a
                href="https://waffy-nine.vercel.app/"
                target="_blank"
                className="flex cursor-pointer items-center gap-3 rounded-full bg-[#182950] px-9 py-8 text-4xl transition-all hover:bg-[#284589] max-md:px-6 max-md:py-6 max-md:text-3xl"
              >
                مشاهده دمو
                <img src={eyeIcon} className="w-10" alt="eye-icon" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ProjectsSection;
