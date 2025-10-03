import React, { useContext } from "react";
import Navbar from "../components/Navbar/Navbar";
import { ThemeContext } from "../Context/ThemeContext";
import { motion } from "framer-motion";
import {
  FaUsers,
  FaEye,
  FaHandshake,
  FaCogs,
  FaQuoteLeft,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

const team = [
  { name: "متین ولی زاده", role: "توسعه‌دهنده فرانت‌اند" },
  { name: "متین ولی زاده", role: "توسعه‌دهنده فرانت‌اند" },
  { name: "متین ولی زاده", role: "توسعه‌دهنده فرانت‌اند" },
];

const testimonials = [
  {
    name: "سارا جکسون",
    title: "مدیرعامل، تکنولوژی‌کورپ",
    feedback:
      "این تیم واقعاً شگفت‌انگیز است. طراحی و مهارت‌های توسعه آنها بی‌نظیر است.",
  },
  {
    name: "جیمز اسمیت",
    title: "مدیر محصول، استارتاپ ایکس",
    feedback: "کار کردن با آنها بی‌دردسر بود. همیشه به موقع و با کیفیت عالی.",
  },
  {
    name: "لیندا لی",
    title: "بنیان‌گذار، دیزاینلی",
    feedback: "دقت و خلاقیت آنها فوق‌العاده است. شدیداً توصیه می‌کنم!",
  },
];

const About = () => {
  const { darkMode } = useContext(ThemeContext);
  const bgColor = darkMode
    ? "bg-[#0d1117] text-white"
    : "bg-white text-gray-900";
  const cardBg = darkMode
    ? "bg-[#161b22] text-white"
    : "bg-gray-50 text-gray-900";

  return (
    <div
      dir="rtl" // فعال کردن راست‌چین
      className={`${bgColor} min-h-screen font-vazir`} // اگر فونت فارسی اضافه کردی میتونی اینجا بذاری
    >
      <Navbar />

      {/* Header */}
      <motion.div
        className="text-center px-6 py-16"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">درباره ما</h1>
        <p className="text-lg max-w-2xl mx-auto">
          بیشتر درباره داستان، ارزش‌ها و تیم فوق‌العاده پشت صحنه ما بدانید.
        </p>
      </motion.div>

      {/* Vision and Mission */}
      <div className="grid md:grid-cols-2 gap-10 px-8 py-12 max-w-6xl mx-auto">
        <motion.div
          className={`p-8 rounded-xl shadow-xl ${cardBg}`}
          initial={{ opacity: 0, x: 50 }} // سمت راست به چپ در RTL
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <FaEye className="text-3xl mb-4 text-primary" />
          <h2 className="text-2xl font-semibold mb-2">چشم‌انداز ما</h2>
          <p>
            تبدیل شدن به ارائه‌دهنده پیشرو راه‌حل‌های وب با خلق تجربه‌های
            دیجیتال زیبا و موثر.
          </p>
        </motion.div>

        <motion.div
          className={`p-8 rounded-xl shadow-xl ${cardBg}`}
          initial={{ opacity: 0, x: -50 }} // سمت چپ به راست در RTL
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <FaHandshake className="text-3xl mb-4 text-primary" />
          <h2 className="text-2xl font-semibold mb-2">ماموریت ما</h2>
          <p>
            ارائه راه‌حل‌های نوآورانه، مقیاس‌پذیر و متمرکز بر کاربر که
            کسب‌وکارها را توانمند می‌سازد.
          </p>
        </motion.div>
      </div>

      {/* Why Choose Us */}
      <motion.div
        className="text-center px-6 py-16 text-dark dark:text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-6">چرا ما را انتخاب کنید؟</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="p-6 rounded-xl bg-white/10 backdrop-blur border border-dark/20 dark:border-white/20">
            <FaUsers className="text-3xl mx-auto mb-3 text-primary dark:text-blue-400" />
            <h4 className="font-semibold mb-2 text-dark dark:text-white">
              تیم باتجربه
            </h4>
            <p className="text-dark/80 dark:text-white/80">
              سال‌ها تجربه در صنعت و ارائه پروژه‌های با کیفیت.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-white/10 backdrop-blur border border-dark/20 dark:border-white/20">
            <FaCogs className="text-3xl mx-auto mb-3 text-primary dark:text-blue-400" />
            <h4 className="font-semibold mb-2 text-dark dark:text-white">
              راه‌حل‌های نوآورانه
            </h4>
            <p className="text-dark/80 dark:text-white/80">
              ساخت محصولات دیجیتال سفارشی، مقیاس‌پذیر و مدرن.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-white/10 backdrop-blur border border-dark/20 dark:border-white/20">
            <FaHandshake className="text-3xl mx-auto mb-3 text-primary dark:text-blue-400" />
            <h4 className="font-semibold mb-2 text-dark dark:text-white">
              مشتری‌مداری
            </h4>
            <p className="text-dark/80 dark:text-white/80">
              همکاری نزدیک و تضمین رضایت مشتری در هر مرحله.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Team Section */}
      <div className="px-8 py-16 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">اعضای تیم ما</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className={`p-6 rounded-xl shadow-xl text-center ${cardBg}`}
            >
              <h4 className="text-xl font-semibold mb-1">{member.name}</h4>
              <p className="text-sm text-gray-500 dark:text-gray-300">
                {member.role}
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
          className="text-3xl font-bold mb-4"
        >
          تمایل به همکاری با ما دارید؟
        </motion.h2>
        <p className="mb-6">
          بیایید با هم چیزی بزرگ بسازیم. همین حالا تماس بگیرید!
        </p>
        <Link to="/contact" className="primary-btn">
          تماس با ما
        </Link>
      </div>

      {/* Testimonials Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-20 px-6 md:px-20 bg-light dark:bg-[#0e0e0e]"
      >
        <h2 className="text-3xl font-bold text-center mb-12 text-dark dark:text-light">
          نظرات مشتریان ما
        </h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          loop
          className="max-w-4xl mx-auto"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white/30 dark:bg-white/10 backdrop-blur-md border border-gray-300 dark:border-gray-700 rounded-3xl p-10 md:p-12 shadow-xl hover:shadow-2xl transition duration-300 text-center max-w-2xl mx-auto">
                <FaQuoteLeft className="text-3xl text-primary mb-6 mx-auto" />

                <p className="text-gray-800 dark:text-gray-200 text-lg mb-6 leading-relaxed italic">
                  “{t.feedback}”
                </p>

                <div className="mt-4">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-white text-xl font-bold shadow-md">
                    {t.name.split("")[0]}
                  </div>
                  <h4 className="font-semibold text-xl text-dark dark:text-light">
                    {t.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {t.title}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.section>
    </div>
  );
};

export default About;
