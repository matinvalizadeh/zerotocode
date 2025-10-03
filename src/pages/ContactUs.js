import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar/Navbar";
import {
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
    FaTelegramPlane,
    FaLinkedin,
    FaInstagram,
} from "react-icons/fa";

const ContactUs = () => {
    const { darkMode } = useContext(ThemeContext);
    const bgColor = darkMode
        ? "bg-[#0d0d0d] text-white"
        : "bg-white text-gray-900";
    const inputBg = darkMode
        ? "bg-[#1f1f1f] border-gray-600 text-white"
        : "bg-white border-gray-300 text-black";

    return (
        <div className={`${bgColor} min-h-screen font-vazir`} dir="rtl">
            <Navbar />

            {/* Header */}
            <section className="text-center pt-16 px-4">
                <motion.h2
                    className="text-4xl font-bold mb-4"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    تماس با ما
                </motion.h2>
                <p className="text-gray-400 max-w-xl mx-auto text-sm">
                    خوشحال می‌شویم از شما بشنویم! فرم زیر را پر کنید تا با شما تماس
                    بگیریم.
                </p>
            </section>

            {/* Content */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto px-4 py-20">
                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="p-8 rounded-xl shadow-xl border border-gray-300 dark:border-white/10"
                >
                    <form className="space-y-6 text-right">
                        <div>
                            <label className="block mb-1 text-sm font-medium">نام</label>
                            <input
                                type="text"
                                placeholder="نام شما"
                                className={`w-full px-4 py-2 rounded-lg border ${inputBg} focus:outline-none focus:ring-2 focus:ring-primary`}
                            />
                        </div>

                        <div>
                            <label className="block mb-1 text-sm font-medium">ایمیل</label>
                            <input
                                type="email"
                                placeholder="you@example.com"
                                className={`w-full px-4 py-2 rounded-lg border ${inputBg} focus:outline-none focus:ring-2 focus:ring-primary`}
                            />
                        </div>

                        <div>
                            <label className="block mb-1 text-sm font-medium">پیام</label>
                            <textarea
                                rows="5"
                                placeholder="پیام خود را بنویسید..."
                                className={`w-full px-4 py-2 rounded-lg border ${inputBg} focus:outline-none focus:ring-2 focus:ring-primary`}
                            />
                        </div>

                        <button type="submit" className="primary-btn w-full">
                            ارسال پیام
                        </button>
                    </form>
                </motion.div>

                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col justify-center space-y-6 text-right"
                >
                    <div className="flex items-center gap-4 text-lg justify-end">
                        <span>تهران، ایران</span>
                        <FaMapMarkerAlt className="text-primary" />
                    </div>

                    <div className="flex items-center gap-4 text-lg justify-end">
                        <span>+98 912 345 6789</span>
                        <FaPhoneAlt className="text-primary" />
                    </div>

                    <div className="flex items-center gap-4 text-lg justify-end">
                        <span>contact@example.com</span>
                        <FaEnvelope className="text-primary" />
                    </div>

                    <div className="flex justify-end gap-4 mt-6 text-primary">
                        <a href="/" aria-disabled="true"><FaTelegramPlane size={22} /></a>
                        <a href="/" aria-disabled="true"><FaLinkedin size={22} /></a>
                        <a href="/" aria-disabled="true"><FaInstagram size={22} /></a>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default ContactUs;
