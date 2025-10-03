// فقط اضافه کردم dir="rtl" و کلاس text-right جایی که لازم بود
import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar/Navbar";
import { FaCode, FaGlobeAmericas, FaClock } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AnimatedNumber = ({ target, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1200;
    const stepTime = 20;
    const increment = Math.ceil(target / (duration / stepTime));

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(timer);
      }
      setCount(start);
    }, stepTime);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
};

const services = [
  {
    title: "توسعه وب",
    description:
      "ما وب‌سایت‌هایی واکنش‌گرا و مدرن مطابق نیاز شما طراحی می‌کنیم.",
  },
  {
    title: "طراحی رابط و تجربه کاربری",
    description: "طراحی رابط‌های کاربرپسند با تمرکز بر تجربه کاربری.",
  },
  {
    title: "بهینه‌سازی موتور جستجو (SEO)",
    description: "افزایش بازدید و رتبه در نتایج گوگل و سایر موتورهای جستجو.",
  },
];

const stats = [
  { label: "پروژه‌های انجام‌شده", value: 120, icon: <FaCode size={36} /> },
  {
    label: "مشتریان در سراسر جهان",
    value: 80,
    icon: <FaGlobeAmericas size={36} />,
  },
  { label: "سال تجربه", value: 2, icon: <FaClock size={36} /> },
];

const skills = [
  { title: "React.js", level: 90 },
  { title: "Tailwind CSS", level: 85 },
  { title: "Javascript", level: 80 },
  { title: " Typescript", level: 70 },
];

const Services = () => {
  const { darkMode } = useContext(ThemeContext);

  const bgColor = darkMode ? "bg-dark text-light" : "bg-light text-dark";

  return (
    <div className={`${bgColor} min-h-screen font-vazir`} dir="rtl">
      <Navbar />

      {/* Header */}
      <motion.div
        className="px-4 md:px-10 py-16 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          خدمات ما
        </h1>
        <p className="text-lg max-w-2xl mx-auto text-center">
          ما راه‌حل‌های مدرن و حرفه‌ای برای رشد کسب‌و‌کار شما ارائه می‌دهیم.
        </p>
      </motion.div>

      {/* Services Cards */}
      <div className="flex flex-wrap justify-center gap-8 px-6 md:px-12 pb-20">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.05 }}
            className={`
            w-72 rounded-2xl border transition duration-300
            shadow-md hover:shadow-xl cursor-pointer p-6 text-center
            bg-white dark:bg-[#1f1f1f]
            hover:bg-gradient-to-br hover:from-primary hover:to-indigo-600
            hover:text-white dark:hover:text-white
            border-gray-200 dark:border-gray-700
          `}
          >
            <h3 className="text-xl font-bold mb-2 text-right">
              {service.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-right">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Our Skills Section */}
      <div className="bg-gray-100 dark:bg-[#1b1b1b] py-16 px-6 md:px-12 mt-10 rounded-xl shadow-inner">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary dark:text-light">
          مهارت‌های ما
        </h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="space-y-2"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-lg font-semibold text-gray-800 dark:text-gray-200">
                  <span className="text-2xl">{skill.icon}</span>
                  {skill.title}
                </div>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  {skill.level}%
                </span>
              </div>
              <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-4">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: i * 0.3 }}
                  className="h-4 rounded-full bg-gradient-to-r from-primary to-indigo-500 dark:from-secondary dark:to-indigo-400"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative mb-5 text-dark dark:text-white py-20 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto grid gap-12 sm:grid-cols-2 md:grid-cols-3 place-items-center">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.2, type: "spring" }}
              viewport={{ once: true }}
              className={`w-64 h-64 rounded-full flex flex-col justify-center items-center
        backdrop-blur-xl
        bg-white/10 dark:bg-white/5
        border border-white/20 dark:border-white/10
        shadow-[0_0_25px_4px_rgba(59,130,246,0.25)]
        hover:shadow-[0_0_35px_8px_rgba(59,130,246,0.45)]
        transition-all duration-300 text-center`}
            >
              <div className="mb-2 text-secondary dark:text-blue-400">
                {stat.icon}
              </div>
              <motion.h3
                className="text-4xl font-bold text-dark dark:text-white"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 + i * 0.3 }}
              >
                <AnimatedNumber target={stat.value} suffix="+" />
              </motion.h3>
              <p className="mt-1 text-base text-dark/80 dark:text-white/80">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="px-6 md:px-10 py-16 text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-4 text-center"
        >
          آماده همکاری با ما هستید؟
        </motion.h2>
        <p className="mb-6 text-center">
          همین حالا با تیم ما تماس بگیرید و پروژه‌تان را آغاز کنید.
        </p>
        <Link to="/contact" className="primary-btn">
          تماس با ما
        </Link>
      </div>
    </div>
  );
};

export default Services;
