import React from "react";
import { FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="py-28 bg-[#f7f7f7] dark:bg-[#0f0f0f] text-black dark:text-white"
      dir="rtl"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="container"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-10">
          {/* First section */}
          <div className="space-y-4 max-w-[300px]">
            <h1 className="text-2xl font-bold">سفر برنامه‌نویسی</h1>
            <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
              شما می‌توانید عکس‌ها را برش دهید و پس‌زمینه محصولات را برای
              فروشگاه‌های آنلاین به رنگ سفید یا مشکی تغییر دهید. همچنین
              می‌توانید امضای PNG با پس‌زمینه غیرشفاف را شفاف کنید.
            </p>
          </div>

          {/* Second section */}
          <div className="grid grid-cols-2 gap-10">
            <div className="space-y-4">
              <h1 className="text-2xl font-bold">دوره‌ها</h1>
              <ul className="space-y-2 text-lg text-gray-700 dark:text-gray-300">
                {[
                  "توسعه وب",
                  "توسعه نرم‌افزار",
                  "برنامه‌نویسی موبایل",
                  "آموزش الکترونیکی",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="cursor-pointer hover:text-primary duration-200"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-2 text-lg text-gray-700 dark:text-gray-300 list-none">
              {["خانه", "خدمات", "درباره ما", "تماس با ما"].map(
                (item, index) => {
                  const pathMap = {
                    خانه: "/",
                    خدمات: "/services",
                    "درباره ما": "/about",
                    "تماس با ما": "/contact",
                  };
                  return (
                    <li
                      key={index}
                      className="cursor-pointer hover:text-primary duration-200"
                    >
                      <Link to={pathMap[item]}>{item}</Link>
                    </li>
                  );
                }
              )}
            </div>
          </div>

          {/* Third section */}
          <div className="space-y-6 max-w-[300px]">
            <h1 className="text-2xl font-bold">با ما در تماس باشید</h1>
            <div className="flex items-center flex-row-reverse">
              <input
                type="text"
                placeholder="ایمیل خود را وارد کنید"
                className="p-3 rounded-e-xl bg-white dark:bg-gray-800 text-black dark:text-white w-full py-4
                focus:ring-0 focus:outline-none placeholder:text-gray-500 dark:placeholder:text-gray-400"
              />
              <button
                className="bg-primary hover:bg-primary-dark text-white font-semibold
              py-4 px-6 rounded-s-xl transition-colors duration-300"
              >
                ارسال
              </button>
            </div>

            {/* Social icons */}
            <div className="flex flex-row-reverse gap-6 pt-2">
              {[FaWhatsapp, FaInstagram, FaYoutube, TbWorldWww].map(
                (Icon, index) => (
                  <a href="/" aria-disabled="true" key={index}>
                    <Icon className="cursor-pointer hover:text-primary hover:scale-105 duration-200 text-3xl md:text-4xl" />
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
