import React from "react";
import { FaBell } from "react-icons/fa";
import BgImage from "../../assets/bg.png";
import { motion } from "framer-motion";

const bgStyle = {
    backgroundImage: `url(${BgImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    direction: "rtl",
};

const Subscribe = () => {
    return (
        <section className="bg-[#f7f7f7] dark:bg-[#272727]">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                style={bgStyle}
                className="container py-24 md:py-48"
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="flex flex-col justify-center"
                >
                    <div
                        className="text-center space-y-4 lg:max-w-[600px] mx-auto
            text-black dark:text-white rtl"
                    >
                        <h1 className="text-4xl font-bold !leading-snug">
                            بیش از ۴۵۰ هزار دانش‌آموز با ما در حال یادگیری‌اند
                        </h1>
                        <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
                            شما می‌توانید پس‌زمینه عکس‌ها را حذف کنید، رنگ آن را سفید یا مشکی قرار دهید، و همچنین امضای PNG خود را به پس‌زمینه شفاف تبدیل کنید.
                        </p>
                        <div className="flex justify-center">
                            <a
                                className="primary-btn !mt-8 inline-flex items-center gap-4 group
              text-white bg-primary hover:bg-primary-dark
              py-3 px-6 rounded-full duration-300"
                                href="/" aria-disabled="true"
                            >
                                عضویت
                                <FaBell
                                    className="group-hover:animate-bounce group-hover:text-lg duration-300"
                                />
                            </a>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Subscribe;
