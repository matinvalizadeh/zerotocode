import React from "react";
import BannerSvg from "../../assets/banner.png";
import { GrUserExpert } from "react-icons/gr";
import { MdOutlineAccessTime } from "react-icons/md";
import { FaBookReader } from "react-icons/fa";
import { FadeUp } from "../Hero/Hero";
import { motion } from "framer-motion";

const Banner = () => {
    return (
        <section className="bg-white dark:bg-[#272727] font-vazir" dir="rtl">
            <div
                className="container py-14 md:py-24 grid grid-cols-1
            md:grid-cols-2 gap-8 space-y-6 md:space-y-0"
            >
                {/* متن بنر */}
                <div className="flex flex-col justify-center order-2 md:order-1">
                    <div className="text-center md:text-right space-y-12">
                        <motion.h1
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="text-3xl md:text-4xl font-bold leading-snug text-black dark:text-white"
                        >
                            پیشروترین پلتفرم آموزش آنلاین جهان
                        </motion.h1>

                        <div className="flex flex-col gap-6">
                            {/* ویژگی ۱ */}
                            <motion.div
                                variants={FadeUp(0.2)}
                                initial="initial"
                                whileInView={"animate"}
                                viewport={{ once: true }}
                                className="flex items-center gap-4 p-6
                                    bg-gray-100 dark:bg-[#1f1f1f]
                                    text-black dark:text-white
                                    rounded-2xl hover:bg-white dark:hover:bg-gray-800
                                    duration-300 hover:shadow-2xl"
                            >
                                <FaBookReader className="text-3xl" />
                                <p className="text-lg font-semibold">۱۰٬۰۰۰ دوره آموزشی</p>
                            </motion.div>

                            {/* ویژگی ۲ */}
                            <motion.div
                                variants={FadeUp(0.4)}
                                initial="initial"
                                whileInView={"animate"}
                                viewport={{ once: true }}
                                className="flex items-center gap-4 p-6
                                    bg-gray-100 dark:bg-[#1f1f1f]
                                    text-black dark:text-white
                                    rounded-2xl hover:bg-white dark:hover:bg-gray-800
                                    duration-300 hover:shadow-2xl"
                            >
                                <GrUserExpert className="text-3xl" />
                                <p className="text-lg font-semibold">آموزش توسط متخصصین</p>
                            </motion.div>

                            {/* ویژگی ۳ */}
                            <motion.div
                                variants={FadeUp(0.6)}
                                initial="initial"
                                whileInView={"animate"}
                                viewport={{ once: true }}
                                className="flex items-center gap-4 p-6
                                    bg-gray-100 dark:bg-[#1f1f1f]
                                    text-black dark:text-white
                                    rounded-2xl hover:bg-white dark:hover:bg-gray-800
                                    duration-300 hover:shadow-2xl"
                            >
                                <MdOutlineAccessTime className="text-3xl" />
                                <p className="text-lg font-semibold">دسترسی مادام‌العمر</p>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* تصویر بنر */}
                <div className="flex justify-center items-center order-1 md:order-2">
                    <motion.img
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        src={BannerSvg}
                        title="بنر"
                        alt="بنر"
                        className="w-[550px] md:max-w-[850px] object-cover drop-shadow"
                    />
                </div>
            </div>
        </section>
    );
};

export default Banner;
