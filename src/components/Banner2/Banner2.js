import React from "react";
import BannerSvg from "../../assets/banner2.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Banner2 = () => {
  return (
    <section
      className="bg-white dark:bg-[#272727] text-black dark:text-white"
      dir="rtl"
    >
      <div
        className="container py-14 md:py-24 grid grid-cols-1
        md:grid-cols-2 gap-8 space-y-6 md:space-y-0"
      >
        {/* Banner Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-center"
        >
          <div className="text-center md:text-right space-y-4 lg:max-w-[500px]">
            <h1 className="text-4xl font-bold !leading-snug">
              به جامعه ما بپیوندید و سفر یادگیری را آغاز کنید
            </h1>
            <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
              شما می‌توانید عکس‌ها را برش دهید و پس‌زمینه محصولات را برای
              فروشگاه‌های آنلاین خود به رنگ سفید یا مشکی تغییر دهید. همچنین
              می‌توانید امضای PNG با پس‌زمینه غیربشفاف را شفاف کنید.
            </p>
            <Link
              to="/login"
              className="primary-btn !mt-8 inline-block
  text-white bg-primary hover:bg-primary-dark
  py-3 px-6 rounded-full duration-300"
            >
              همین حالا عضو شوید
            </Link>
          </div>
        </motion.div>

        {/* Banner Image */}
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            src={BannerSvg}
            title="بنر"
            className="w-[450px] md:max-w-[700px] object-cover drop-shadow"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner2;
