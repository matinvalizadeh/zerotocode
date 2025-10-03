import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io"; // برعکس آیکن
import Blob from "../../assets/blob.svg";
import HeroSvg from "../../assets/hero.svg";
import Navbar from "../Navbar/Navbar";
import { motion } from "framer-motion";

export const FadeUp = (delay) => {
  return {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.5,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};

const Hero = () => {
  return (
    <section
      dir="rtl"
      className="bg-light dark:bg-dark overflow-hidden relative transition-colors duration-500"
    >
      <Navbar />
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px]">
        <div className="flex flex-col justify-center py-14 md:py-0 relative z-20">
          <div className="text-center md:text-right space-y-10 lg:max-w-[400px]">
            <motion.h1
              variants={FadeUp(0.6)}
              initial="initial"
              animate="animate"
              className="text-3xl lg:text-5xl font-bold !leading-snug text-dark dark:text-light"
            >
              بیا یاد بگیریم که یک{" "}
              <span className="text-secondary">وب‌سایت</span> برای کسب‌و‌کارت
              بسازیم
            </motion.h1>
            <motion.div
              variants={FadeUp(0.8)}
              initial="initial"
              animate="animate"
              className="flex justify-center md:justify-end"
            >
              <button className="primary-btn flex gap-2 items-center group">
                <IoIosArrowRoundBack className="text-2xl group-hover:-translate-x-2 group-hover:rotate-45 duration-300" />
                شروع کن
              </button>
            </motion.div>
          </div>
        </div>

        {/* تصویر */}
        <div className="flex justify-center items-center relative">
          <motion.img
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
            src={HeroSvg}
            title="hero"
            className="w-[400px] xl:w-[600px] relative z-10 drop-shadow"
          />
          <motion.img
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
            src={Blob}
            title="blob"
            className="absolute -bottom-33 w-[800px] md:w-[1500px] z-[1] hidden md:block"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
