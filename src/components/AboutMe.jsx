import { motion, useScroll, useTransform } from "framer-motion";

import loveImg from "../assets/love-img.jpg";
import animeImg from "../assets/icons/anime.png";
import foodImg from "../assets/icons/food.png";
import footballImg from "../assets/icons/football.png";
import musicImg from "../assets/icons/music.png";
import codeImg from "../assets/icons/code.png";
import gameImg from "../assets/icons/game.png";
import travelingImg from "../assets/icons/traveling.png";

const AboutMe = () => {
  const { scrollYProgress } = useScroll();

  const scaleText = useTransform(scrollYProgress, [0.1, 0.2], [1.1, 1]);
  const scrollXBadge = useTransform(scrollYProgress, [0.05, 0.5], [0, -1000]);
  const scrollXCard = useTransform(scrollYProgress, [0.05, 0.4], [-600, 1000]);

  return (
    <motion.div className="z-10 mt-14 w-full" id="about-me">
      {/* //?title */}
      <div className="mb-[26rem] max-2xl:mb-[22rem] max-xl:mb-[17rem] max-lg:mb-[20rem] max-md:mb-[16rem] max-sm:mb-[15rem] max-[400px]:mb-[12rem]">
        <div className="relative flex justify-center py-24 font-poppinsB max-2xl:py-14 max-lg:py-16 max-md:py-12 max-sm:py-12 max-[400px]:py-8">
          <motion.p
            style={{ scale: scaleText }}
            className="strokeText absolute top-[85%] text-[13rem] text-transparent dark:stroke-mainYellow max-md:top-[92%] max-md:text-[9rem] max-sm:top-[95%] max-sm:text-[7rem]"
          >
            About Me
          </motion.p>
          <h2 className="absolute top-full text-[11rem] text-neutral-900 dark:text-mainYellow max-md:text-[8rem] max-sm:text-[6rem]">
            About Me
          </h2>
        </div>
      </div>

      {/* //?content */}
      {/* //!section-1 */}
      <div className="flex flex-col justify-between gap-20 overflow-x-hidden px-4">
        {/* //!1 */}
        <div className="flex grow flex-col flex-wrap gap-20 max-md:gap-9">
          {/* love */}
          <div className="flex items-center gap-9">
            <div className="w-28 rounded-full border border-mainYellow p-2 max-md:w-24 max-sm:w-20">
              <img src={loveImg} alt="about-me" className="rounded-full" />
            </div>
            {/*  */}
            <div className="flex">
              <p className="relative font-poppinsB text-7xl text-neutral-900 dark:text-mainYellow max-md:text-6xl max-sm:text-5xl">
                I Love
                <motion.span
                  style={{ scale: scaleText }}
                  className="strokeText absolute left-[-10%] top-[-20%] w-[200px] text-8xl text-transparent dark:stroke-mainYellow max-md:text-7xl max-sm:text-6xl"
                >
                  I Love
                </motion.span>
              </p>
            </div>
          </div>
          {/* badge */}
          <div className="relative overflow-hidden">
            <div
              // style={{ x: scrollXBadge }}
              className="flex items-center gap-9 overflow-x-auto"
            >
              {/* //!Badge-2 */}
              <div className="bg-natural-900 flex w-fit items-center justify-center gap-6 rounded-full bg-neutral-700 px-12 py-4 text-white dark:bg-white dark:text-neutral-900">
                <img
                  src={foodImg}
                  className="w-[35px] !cursor-default max-[640px]:w-[27px]"
                  alt="tailwind-Logo"
                />
                <span className="whitespace-nowrap font-poppinsB text-4xl tracking-wide max-lg:text-3xl max-[800px]:text-3xl">
                  Eating Food
                </span>
              </div>
              {/* //!Badge-1 */}
              <div className="bg-natural-900 flex w-fit items-center justify-center gap-6 rounded-full bg-neutral-700 px-12 py-4 text-white dark:bg-white dark:text-neutral-900">
                <img
                  src={animeImg}
                  className="w-[35px] !cursor-default max-[640px]:w-[27px]"
                  alt="tailwind-Logo"
                />
                <span className="whitespace-nowrap font-poppinsB text-4xl tracking-wide max-lg:text-3xl max-[800px]:text-3xl">
                  Watch Anime
                </span>
              </div>

              {/* //!Badge-3 */}
              <div className="bg-natural-900 flex w-fit items-center justify-center gap-6 rounded-full bg-neutral-700 px-12 py-4 text-white dark:bg-white dark:text-neutral-900">
                <img
                  src={footballImg}
                  className="w-[35px] !cursor-default max-[640px]:w-[27px]"
                  alt="tailwind-Logo"
                />
                <span className="whitespace-nowrap font-poppinsB text-4xl tracking-wide max-lg:text-3xl max-[800px]:text-3xl">
                  Playing Football
                </span>
              </div>
              {/* //!Badge-4 */}
              <div className="bg-natural-900 flex w-fit items-center justify-center gap-6 rounded-full bg-neutral-700 px-12 py-4 text-white dark:bg-white dark:text-neutral-900">
                <img
                  src={musicImg}
                  className="w-[35px] !cursor-default max-[640px]:w-[27px]"
                  alt="tailwind-Logo"
                />
                <span className="whitespace-nowrap font-poppinsB text-4xl tracking-wide max-lg:text-3xl max-[800px]:text-3xl">
                  Instrumental
                </span>
              </div>
              {/* //!Badge-5 */}
              <div className="bg-natural-900 flex w-fit items-center justify-center gap-6 rounded-full bg-neutral-700 px-12 py-4 text-white dark:bg-white dark:text-neutral-900">
                <img
                  src={gameImg}
                  className="w-[35px] !cursor-default max-[640px]:w-[27px]"
                  alt="tailwind-Logo"
                />
                <span className="whitespace-nowrap font-poppinsB text-4xl tracking-wide max-lg:text-3xl max-[800px]:text-3xl">
                  Playing Game
                </span>
              </div>
              {/* //!Badge-6 */}
              <div className="bg-natural-900 flex w-fit items-center justify-center gap-6 rounded-full bg-neutral-700 px-12 py-4 text-white dark:bg-white dark:text-neutral-900">
                <img
                  src={codeImg}
                  className="w-[35px] !cursor-default max-[640px]:w-[27px]"
                  alt="tailwind-Logo"
                />
                <span className="whitespace-nowrap font-poppinsB text-4xl tracking-wide max-lg:text-3xl max-[800px]:text-3xl">
                  Coding
                </span>
              </div>
              {/* //!Badge-7 */}
              <div className="bg-natural-900 flex w-fit items-center justify-center gap-6 rounded-full bg-neutral-700 px-12 py-4 text-white dark:bg-white dark:text-neutral-900">
                <img
                  src={travelingImg}
                  className="w-[35px] !cursor-default max-[640px]:w-[27px]"
                  alt="tailwind-Logo"
                />
                <span className="whitespace-nowrap font-poppinsB text-4xl tracking-wide max-lg:text-3xl max-[800px]:text-3xl">
                  Traveling
                </span>
              </div>
            </div>
          </div>
        </div>
        {/*//! 2 */}
        <div className="relative flex items-center overflow-hidden">
          <div
            // style={{ x: scrollXCard }}
            className="flex items-center justify-between gap-3 font-iranB text-6xl text-white max-md:text-4xl"
          >
            {/*  */}
            <div className="bgCard flex grow flex-col items-center justify-center gap-6 px-32 py-12 max-lg:px-16 max-lg:py-8 max-sm:px-12 max-sm:py-6">
              <p className="textGradient whitespace-nowrap text-6xl max-lg:text-4xl max-sm:text-3xl">
                Passionate
              </p>
              <p className="whitespace-nowrap text-5xl max-lg:text-3xl max-sm:text-2xl">
                Web Developer
              </p>
            </div>
            {/*  */}
            <div className="bgCard dark:bgCardDark flex grow flex-col items-center justify-center gap-6 px-32 py-12 max-lg:px-16 max-lg:py-8 max-sm:px-12 max-sm:py-6">
              <p className="textGradient whitespace-nowrap text-6xl max-lg:text-4xl max-sm:text-3xl">
                Creating Modern &
              </p>
              <p className="whitespace-nowrap text-5xl max-lg:text-3xl max-sm:text-2xl">
                Responsive Websites
              </p>
            </div>
            {/*  */}
            <div className="bgCard flex grow flex-col items-center justify-center gap-6 px-32 py-12 max-lg:px-16 max-lg:py-8 max-sm:px-12 max-sm:py-6">
              <p className="textGradient whitespace-nowrap text-6xl max-lg:text-4xl max-sm:text-3xl">
                Turning Ideas
              </p>
              <p className="whitespace-nowrap text-5xl max-lg:text-3xl max-sm:text-2xl">
                into Digital Reality
              </p>
            </div>
            {/*  */}
            <div className="bgCard flex grow flex-col items-center justify-center gap-6 px-32 py-12 max-lg:px-16 max-lg:py-8 max-sm:px-12 max-sm:py-6">
              <p className="textGradient whitespace-nowrap text-6xl max-lg:text-4xl max-sm:text-3xl">
                Simplifying
              </p>
              <p className="whitespace-nowrap text-5xl max-lg:text-3xl max-sm:text-2xl">
                Complex Designs
              </p>
            </div>
            {/*  */}
            <div className="bgCard flex grow flex-col items-center justify-center gap-6 px-32 py-12 max-lg:px-16 max-lg:py-8 max-sm:px-12 max-sm:py-6">
              <p className="textGradient whitespace-nowrap text-6xl max-lg:text-4xl max-sm:text-3xl">
                Building Websites
              </p>
              <p className="whitespace-nowrap text-5xl max-lg:text-3xl max-sm:text-2xl">
                That Inspire
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* //!section-2 */}
      <div className="flex flex-col px-4">
        <motion.div
          dir="rtl"
          className="dark:bgGlassesLight mt-28 overflow-x-hidden rounded-[50px] bg-neutral-700 p-12 text-3xl leading-[4.2rem] text-gray-200 dark:text-gray-300 max-lg:text-2xl max-lg:leading-[3.5rem] max-md:leading-[3.5rem] max-md:text-[1.35]"
        >
          <motion.p
            className="mb-9"
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            من یک توسعه‌دهنده فرانت‌اند با بیش از 2 سال تجربه در طراحی و توسعه
            وب هستم. مهارت‌های من شامل کار با تکنولوژی‌های مدرن مانند ReactJS،
            NextJS، Redux و کتابخانه‌های رابط کاربری مثل Material UI، Tailwind
            CSS، SCSS و Framer Motion می‌شود. تمرکز من بر طراحی رابط‌های کاربری
            زیبا، واکنش‌گرا و ساختارمند است که تجربه‌ای کاربری جذاب و
            منحصربه‌فرد ارائه می‌دهد.
          </motion.p>
        </motion.div>
        <div></div>
      </div>
    </motion.div>
  );
};

export default AboutMe;
