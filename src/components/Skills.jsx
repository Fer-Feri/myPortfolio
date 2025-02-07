import React, { useContext, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ReactApexChart from "react-apexcharts";
import { ThemeContext } from "../ThemeContext";

const ApexChart = ({ percentage, label, fillLight, fillDark }) => {
  const { isDarkMode } = useContext(ThemeContext);
  const { ref, inView } = useInView({ triggerOnce: true });

  const getFillColor = () => (isDarkMode ? fillDark : fillLight);
  const getTextColor = () => (isDarkMode ? "#FFFFFF" : "#333333");

  const [state, setState] = useState({
    series: [0], // مقدار اولیه صفر است و بعداً مقداردهی می‌شود
    options: {
      chart: {
        height: 150,
        type: "radialBar",
        offsetY: -10,
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 135,
          dataLabels: {
            name: {
              fontSize: "16px",
              color: getTextColor(),
              offsetY: 120,
            },
            value: {
              offsetY: 76,
              fontSize: "22px",
              color: getFillColor(),
              formatter: (val) => `${val}%`,
            },
          },
        },
      },
      fill: {
        colors: [getFillColor()],
      },
      stroke: {
        dashArray: 4,
      },
      labels: [label],
    },
  });

  useEffect(() => {
    if (inView) {
      setState((prevState) => ({
        ...prevState,
        series: [percentage], // وقتی به ویو رسید، مقدار اصلی تنظیم شود
        options: {
          ...prevState.options,
          plotOptions: {
            ...prevState.options.plotOptions,
            radialBar: {
              ...prevState.options.plotOptions.radialBar,
              dataLabels: {
                name: {
                  ...prevState.options.plotOptions.radialBar.dataLabels.name,
                  color: getTextColor(),
                },
                value: {
                  ...prevState.options.plotOptions.radialBar.dataLabels.value,
                  color: getFillColor(),
                },
              },
            },
          },
          fill: {
            colors: [getFillColor()],
          },
        },
      }));
    }
  }, [inView, isDarkMode]);

  return (
    <div ref={ref} id="chart">
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="radialBar"
        height={350}
      />
    </div>
  );
};

const Skills = () => {
  const { scrollYProgress } = useScroll();
  const scaleText = useTransform(scrollYProgress, [0.1, 0.9], [0.9, 1.2]);

  return (
    <div className="mb-12" id="skills">
      {/* //!title */}
      <div className="mb-[26rem] mt-20 max-2xl:mb-[22rem] max-xl:mb-[17rem] max-lg:mb-[20rem] max-md:mb-[16rem] max-sm:mb-[15rem] max-[400px]:mb-[12rem]">
        <div className="relative flex justify-center py-24 font-poppinsB max-2xl:py-14 max-lg:py-16 max-md:py-12 max-sm:py-12 max-[400px]:py-8">
          <motion.p
            style={{ scale: scaleText }}
            className="strokeText absolute top-[85%] text-[13rem] text-transparent dark:stroke-mainYellow max-md:top-[92%] max-md:text-[9rem] max-sm:top-[95%] max-sm:text-[7rem]"
          >
            Skills
          </motion.p>
          <h2 className="absolute top-full text-[11rem] text-neutral-900 dark:text-mainYellow max-md:text-[8rem] max-sm:text-[6rem]">
            Skills
          </h2>
        </div>
      </div>

      {/* //!circular Progress */}
      <div className="mt-10 grid grid-cols-2 items-center justify-center gap-y-9 max-[400px]:grid-cols-1 md:grid-cols-3">
        <ApexChart
          percentage={90}
          label="JavaScript"
          fillLight="orange"
          fillDark="#F2613F"
        />
        <ApexChart
          percentage={92}
          label="React"
          fillLight="blue"
          fillDark="#F7418F"
        />
        <ApexChart
          percentage={60}
          label="Next"
          fillLight="red"
          fillDark="purple"
        />
        <ApexChart
          percentage={95}
          label="Tailwind"
          fillLight="#574964"
          fillDark="#5D8736"
        />
        <ApexChart
          percentage={88}
          label="Framer Motion"
          fillLight="#5B913B"
          fillDark="#8E1616"
        />
        <ApexChart
          percentage={70}
          label="ThreeJS"
          fillLight="#780C28"
          fillDark="#3B6790"
        />
      </div>
    </div>
  );
};

export default Skills;
