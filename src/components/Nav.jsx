/** @format */

// import logo from "../assets/logo-3.png";
import logo from "../assets/logo.png";
import sun from "../assets/icons/sun.svg";
import moon from "../assets/icons/moon.svg";
import iconMenu from "../assets/icons/menu.svg";

import { motion } from "framer-motion";

import { useContext, useState } from "react";
import { ThemeContext } from "../ThemeContext";

const menu = [
  { name: "About Me", id: "about-me" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

const NavMenu = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext); // Correct destructuring
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  return (
    <>
      <nav className="navBgLight dark:navBgDark relative z-50 flex w-full justify-between rounded-full p-4">
        {/* //?section-1 */}
        {/* logo */}
        <div className="flex items-center gap-3">
          <div className="h-32 w-32 rounded-full max-md:max-h-24 max-md:max-w-24">
            <img
              className="w-full scale-90 rounded-full"
              src={logo}
              alt="logo"
            />
          </div>
          <span className="font-iranM text-5xl tracking-[-.06em] text-bgColor max-sm:hidden">
            Farshad{" "}
            <span className="font-poppinsB tracking-wide text-[#e19c26] dark:text-mainYellow">
              Bahari
            </span>
          </span>
        </div>
        {/* //?section-2 */}
        {/* menu */}
        <div className="flex items-center gap-3">
          {/* moon & sun */}
          <div
            className="flex h-32 w-52 cursor-pointer items-center rounded-full bg-bgColor px-6 max-md:max-h-20 max-md:w-44"
            onClick={toggleTheme}
          >
            <motion.img
              className="w-18 max-md:w-12"
              src={isDarkMode ? `${moon}` : `${sun}`}
              alt="sun-icon"
              variants={{
                moon: {
                  x: 56,
                },
                sun: {
                  x: 0,
                },
              }}
              initial="sun"
              animate={isDarkMode ? "moon" : "sun"}
              exit="sun"
            />
          </div>
          {/* hamburger MENU */}
          <div className="relative flex h-32 max-w-80 items-center rounded-full bg-bgColor max-md:max-h-24 max-md:max-w-24 max-md:bg-mainYellow">
            <span className="ml-6 w-full font-poppins text-[2.8rem] max-md:hidden">
              Menu
            </span>
            {/* icon menu */}
            <div
              className="flex h-full cursor-pointer items-center justify-center rounded-[100%] bg-mainYellow p-9"
              onClick={() => setIsOpenMenu((open) => !open)}
            >
              <img
                className="flex max-md:scale-[2]"
                src={iconMenu}
                alt="icon-menu"
              />
            </div>
            {/* //!menu item */}
            <motion.div
              className="absolute right-0 top-full !z-50 mt-3 min-h-[100px] w-[20rem] rounded-xl bg-[#2e2d2d] px-12 py-9"
              variants={{
                open: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
                close: {
                  opacity: 0,
                  y: 20,
                  transition: {
                    staggerChildren: 0.1,
                    staggerDirection: -1,
                    delay: (menu.length - 2) * 0.15,
                  },
                },
              }}
              initial="close"
              animate={isOpenMenu ? "open" : "close"}
            >
              <motion.ul className="flex h-full w-full flex-col items-start divide-y divide-[#555555] font-poppins text-[1.7rem]">
                {menu.map((item, i) => (
                  <motion.li
                    className="w-full cursor-pointer rounded-md px-9 py-5 hover:bg-[#febb01c6]"
                    onClick={() => {
                      const section = document.getElementById(item.id);
                      if (section) {
                        section.scrollIntoView({ behavior: "smooth" });
                      }

                      setIsOpenMenu(false);
                    }}
                    key={i}
                    variants={{
                      open: {
                        opacity: 1,
                        x: 0,
                      },
                      close: {
                        opacity: 0,
                        x: -20,
                      },
                    }}
                  >
                    {item.name}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavMenu;
