import { motion } from "framer-motion";

import contactImg from "../assets/contact-img.png";
import callImg from "../assets/call.png";
import teleImg from "../assets/icons/telegram.png";
import githubImg from "../assets/icons/github.png";
import inImg from "../assets/icons/linkedin.png";
import instaImg from "../assets/icons/instagram.png";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

const Contact = () => {
  return (
    <div
      className="flex flex-col flex-wrap items-center justify-around gap-12 py-20"
      id="contact"
    >
      {/* //?title */}
      <div className="flex flex-col items-center gap-6">
        <img
          className="max-md:max-w-[300px]"
          src={contactImg}
          alt="contact person"
        />
        <p className="flex items-center gap-5 text-center text-4xl text-neutral-900 dark:text-white">
          Contact ME
          <img className="h-14 w-14" src={callImg} />
        </p>
      </div>

      {/* //?links */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-wrap gap-6 font-poppins text-4xl max-md:text-3xl"
      >
        {/* //!icon1 */}
        <div className="flex flex-wrap justify-center gap-6">
          {/* GitHub  */}
          <motion.a
            variants={itemVariants}
            href="https://github.com/Fer-Feri"
            target="_blank"
            className="group flex items-center gap-9 rounded-md border border-[#5C6BC0] px-6 py-5 text-neutral-900 transition-all hover:bg-[#5c6bc083] hover:text-white dark:text-white"
          >
            <img
              className="h-20 w-20 rounded-full border border-transparent transition-all group-hover:border-white max-md:h-16 max-md:w-16"
              src={githubImg}
              alt="github-icon"
            />
            <span>Github</span>
          </motion.a>
          {/* LinkedIn  */}
          <motion.a
            variants={itemVariants}
            href="https://www.linkedin.com/in/farshad-bahari-7809b5327"
            target="_blank"
            className="group flex items-center gap-9 rounded-md border border-[#0F4B9B] px-6 py-5 text-neutral-900 transition-all hover:bg-[#0f4c9b9f] hover:text-white dark:text-white"
          >
            <img
              className="h-20 w-20 rounded-2xl border border-transparent transition-all group-hover:border-white max-md:h-16 max-md:w-16"
              src={inImg}
              alt="telegram-icon"
            />
            <span>linkedin</span>
          </motion.a>
        </div>
        {/* //!icon2 */}
        <div className="flex flex-wrap justify-center gap-6">
          {/* Telegram  */}
          <motion.a
            variants={itemVariants}
            href="https://t.me/Witcher33"
            target="_blank"
            className="group flex items-center gap-9 rounded-md border border-[#1C8ADB] px-6 py-5 text-neutral-900 transition-all hover:bg-[#1c8bdba1] hover:text-white dark:text-white"
          >
            <img
              className="h-20 w-20 rounded-lg border border-transparent transition-all group-hover:border-white max-md:h-16 max-md:w-16"
              src={teleImg}
              alt="telegram-icon"
            />
            <span>Telegram</span>
          </motion.a>
          {/* Instagram  */}
          <motion.a
            variants={itemVariants}
            href="https://www.instagram.com/far._.shad_/"
            target="_blank"
            className="group flex items-center gap-9 rounded-md border border-[#D206AB] px-6 py-5 text-neutral-900 transition-all hover:bg-[#d206ad95] hover:text-white dark:text-white"
          >
            <img
              className="h-20 w-20 rounded-3xl transition-all max-md:h-16 max-md:w-16"
              src={instaImg}
              alt="Instagram-icon"
            />
            <span>Instagram</span>
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
