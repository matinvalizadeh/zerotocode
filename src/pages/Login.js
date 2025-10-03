import React, { useContext, useState } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar/Navbar";

const Login = () => {
    const { darkMode } = useContext(ThemeContext);
    const [isRegistering, setIsRegistering] = useState(false);

    const bgColor = darkMode ? "bg-[#121212] text-white" : "bg-gray-50 text-gray-900";
    const inputBg = darkMode ? "bg-[#1f1f1f] border-gray-600" : "bg-white border-gray-300";

    const formVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -50 },
    };

    return (
        <div className={`${bgColor} min-h-screen font-vazir`} dir="rtl">
            <Navbar />
            <div className="flex justify-center items-center px-4 py-20">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className={`w-full max-w-md p-8 rounded-xl shadow-xl border ${inputBg}`}
                >
                    <AnimatePresence mode="wait">
                        {!isRegistering ? (
                            <motion.div
                                key="login"
                                variants={formVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                transition={{ duration: 0.4 }}
                            >
                                <h2 className="text-3xl font-bold text-center mb-6">ورود</h2>
                                <form className="space-y-6">
                                    <div>
                                        <label className="block mb-1 text-sm font-medium">ایمیل</label>
                                        <input
                                            type="email"
                                            placeholder="you@example.com"
                                            className={`w-full px-4 py-2 rounded-lg border ${inputBg} focus:outline-none focus:ring-2 focus:ring-primary`}
                                        />
                                    </div>

                                    <div>
                                        <label className="block mb-1 text-sm font-medium">رمز عبور</label>
                                        <input
                                            type="password"
                                            placeholder="••••••••"
                                            className={`w-full px-4 py-2 rounded-lg border ${inputBg} focus:outline-none focus:ring-2 focus:ring-primary`}
                                        />
                                    </div>

                                    <div className="flex justify-between items-center text-sm">
                                        <label className="flex items-center gap-2">
                                            <input type="checkbox" />
                                            مرا به خاطر بسپار
                                        </label>
                                        <a href="/" aria-disabled="true" className="text-primary hover:underline">فراموشی رمز عبور؟</a>
                                    </div>

                                    <button type="submit" className="w-full primary-btn mt-4">
                                        ورود
                                    </button>
                                </form>

                                <p className="text-center text-sm mt-6">
                                    حساب کاربری ندارید؟{" "}
                                    <button onClick={() => setIsRegistering(true)} className="text-primary hover:underline">
                                        ثبت‌نام
                                    </button>
                                </p>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="register"
                                variants={formVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                transition={{ duration: 0.4 }}
                            >
                                <h2 className="text-3xl font-bold text-center mb-6">ثبت‌نام</h2>
                                <form className="space-y-6">
                                    <div>
                                        <label className="block mb-1 text-sm font-medium">نام کامل</label>
                                        <input
                                            type="text"
                                            placeholder="علی رضایی"
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
                                        <label className="block mb-1 text-sm font-medium">رمز عبور</label>
                                        <input
                                            type="password"
                                            placeholder="••••••••"
                                            className={`w-full px-4 py-2 rounded-lg border ${inputBg} focus:outline-none focus:ring-2 focus:ring-primary`}
                                        />
                                    </div>

                                    <button type="submit" className="w-full primary-btn mt-4">
                                        ایجاد حساب کاربری
                                    </button>
                                </form>

                                <p className="text-center text-sm mt-6">
                                    قبلاً حساب ساخته‌اید؟{" "}
                                    <button onClick={() => setIsRegistering(false)} className="text-primary hover:underline">
                                        ورود
                                    </button>
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    );
};

export default Login;
