/* eslint-disable react/no-unknown-property */

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useLayoutEffect, useState } from "react";
import { useGLTF, Stage } from "@react-three/drei";

import { motion, useScroll, useTransform } from "framer-motion";

// وارد کردن مدل‌های سه‌بعدی
import teleIcon3D from "../assets/3d/tele.glb";
import instaIcon3D from "../assets/3d/insta.glb";
import inIcon3D from "../assets/3d/in.glb";
// import whatsIcon3D from "../assets/3d/whats.glb";
// import gitIcon3D from "../assets/3d/git.glb";
import gitIcon3D from "../assets/3d/git.glb";

//---------------------
const SpinningSphere = ({ size }) => {
  const meshRef = useRef();

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta / 2; // چرخش در محور y
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[size, 16, 16]} />
      <meshNormalMaterial wireframe />
    </mesh>
  );
};

//------------------
const StaticModel = ({
  position,
  size,
  modelPath,
  rotationSpeed,
  color,
  onClick,
  scale,
}) => {
  const meshRef2 = useRef();
  const { scene } = useGLTF(modelPath);
  // تغییر رنگ مدل
  useLayoutEffect(() => {
    if (scene) {
      scene.traverse((child) => {
        if (child.isMesh) {
          child.material.color.set(color); // تغییر رنگ مدل
        }
      });
    }
  }, [scene, color]);

  useFrame((_, delta) => {
    if (meshRef2.current) {
      meshRef2.current.rotation.y += delta * rotationSpeed;
    }
  });

  return (
    <primitive
      ref={meshRef2}
      object={scene}
      position={position}
      scale={scale}
      onClick={onClick}
    />
  );
};

//------------------
const ContactMe = () => {
  const [size, setSize] = useState(1);
  const [positions, setPositions] = useState([
    [3, 0, 0],
    [-3, 0, 0],
    [0, 3, 0],
    [0, -3, 0],
  ]);

  const models = [gitIcon3D, instaIcon3D, inIcon3D, teleIcon3D];
  const rotationSpeeds = [0.5, 0.7, 0.9, 0.6]; // سرعت چرخش برای هر آیکون
  const colors = [null, "#C13584", null, null]; // رنگ‌های مختلف برای هر مدل
  const links = [
    "https://github.com/Fer-Feri",
    "https://www.instagram.com/far._.shad_/",
    "https://www.linkedin.com/in/farshad-bahari-7809b5327",
    "https://t.me/Witcher33",
  ];

  useLayoutEffect(() => {
    const handleResize = () => {
      const newSize = window.innerWidth < 600 ? 0.5 : 1;
      setSize(newSize);

      const newPositions =
        window.innerWidth < 600
          ? [
              [1.3, 0, 0],
              [-1.3, 0, 0],
              [0, 1.5, 0],
              [0, -1.5, 0],
            ]
          : [
              [3, 0, 0],
              [-3, 0, 0],
              [0, 3, 0],
              [0, -3, 0],
            ];
      setPositions(newPositions);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ---------------------------
  const { scrollYProgress } = useScroll();
  const scaleText = useTransform(scrollYProgress, [0.1, 0.9], [0.9, 1]);

  return (
    <div className="bg-red h-screen w-full" id="contact">
      {/* //!title */}
      <div className="mb-[20rem] mt-20 max-lg:mb-[22rem] max-md:mb-[1rem]">
        <div className="relative flex justify-center py-24 font-poppinsB max-2xl:py-14 max-lg:py-16 max-md:py-12 max-sm:py-12 max-[400px]:py-8">
          <motion.p
            style={{ scale: scaleText }}
            className="strokeText absolute top-[85%] text-[13rem] text-transparent dark:stroke-mainYellow max-md:top-[92%] max-md:text-[9rem] max-sm:top-[95%] max-sm:text-[7rem]"
          >
            Contact
          </motion.p>
          <h2 className="absolute top-full text-[11rem] text-neutral-900 dark:text-mainYellow max-md:text-[8rem] max-sm:text-[6rem]">
            Contact
          </h2>
        </div>
      </div>

      <Canvas shadows>
        <Stage>
          <SpinningSphere size={size} />
          {positions.map((pos, index) => (
            <StaticModel
              key={index}
              position={pos}
              size={size}
              modelPath={models[index]}
              rotationSpeed={rotationSpeeds[index]} // تنظیم سرعت چرخش
              color={colors[index]} // ارسال رنگ به مدل
              scale={
                index === 0
                  ? [size / 2, size / 2, size / 2]
                  : [size / 3, size / 3, size / 3]
              } // تغییر مقیاس
              onClick={() => window.open(links[index], "_blank")}
            />
          ))}
        </Stage>
      </Canvas>
    </div>
  );
};

export default ContactMe;
