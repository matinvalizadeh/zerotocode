import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar/Navbar";
import {
    FaLinkedin,
    FaGithub,
    FaTwitter,
    FaLightbulb,
    FaUsers,
    FaStar,
} from "react-icons/fa";

const teamMembers = [
    {
        name: "علی رضایی",
        role: "توسعه‌دهنده فرانت‌اند",
        img: "https://randomuser.me/api/portraits/men/32.jpg",
        linkedin: "#",
        github: "#",
        twitter: "#",
    },
    {
        name: "سارا احمدی",
        role: "طراح UI/UX",
        img: "https://randomuser.me/api/portraits/women/44.jpg",
        linkedin: "#",
        github: "#",
        twitter: "#",
    },
    {
        name: "رضا مرادی",
        role: "توسعه‌دهنده بک‌اند",
        img: "https://randomuser.me/api/portraits/men/55.jpg",
        linkedin: "#",
        github: "#",
        twitter: "#",
    },
];

const values = [
    {
        icon: <FaLightbulb size={24} />,
        title: "خلاقیت",
        text: "ما فراتر از قالب فکر می‌کنیم تا ایده‌های نو را به واقعیت تبدیل کنیم.",
    },
    {
        icon: <FaUsers size={24} />,
        title: "کار تیمی",
        text: "با هم بودن باعث موفقیت بیشتر می‌شود — ما به همکاری باور داریم.",
    },
    {
        icon: <FaStar size={24} />,
        title: "برتری",
        text: "ما تلاش می‌کنیم بهترین و باکیفیت‌ترین راه‌حل‌ها را ارائه دهیم.",
    },
];

const OurTeam = () => {
    const { darkMode } = useContext(ThemeContext);
    const bgColor = darkMode ? "bg-[#0f0f0f] text-white" : "bg-white text-gray-900";
    const cardBg = darkMode ? "bg-white/5" : "bg-white/80";

    return (
        <div className={`${bgColor} min-h-screen font-vazir`} dir="rtl">
            <Navbar />

            {/* بخش معرفی */}
            <section className="text-center pt-16 px-4">
                <motion.h2
                    className="text-4xl font-bold mb-4"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    تیم فوق‌العاده ما را بشناسید
                </motion.h2>
                <p className="text-gray-400 max-w-xl mx-auto text-sm">
                    ما گروهی از خالقان، توسعه‌دهندگان و طراحان مشتاق هستیم که با هم
                    در حال ساختن چیزهای عالی هستیم.
                </p>
            </section>

            {/* خط جداکننده */}
            <div className="my-12 flex justify-center">
                <div className="w-32 h-1 rounded-full bg-primary"></div>
            </div>

            {/* بخش اعضای تیم */}
            <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 px-6 pb-20 max-w-6xl mx-auto">
                {teamMembers.map((member, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        className={`rounded-2xl p-6 shadow-xl backdrop-blur-md ${cardBg} border border-white/20 transition-all duration-300`}
                    >
                        <img
                            src={member.img}
                            alt={member.name}
                            className="w-28 h-28 mx-auto rounded-full border-4 border-primary object-cover"
                        />
                        <h3 className="mt-6 text-xl font-semibold text-center">{member.name}</h3>
                        <p className="text-sm text-center text-gray-400">{member.role}</p>
                        <div className="flex justify-center mt-4 space-x-4 text-primary">
                            <a href={member.linkedin}><FaLinkedin size={20} /></a>
                            <a href={member.github}><FaGithub size={20} /></a>
                            <a href={member.twitter}><FaTwitter size={20} /></a>
                        </div>
                    </motion.div>
                ))}
            </section>

            {/* بخش ارزش‌ها */}
            <section className="bg-primary/10 py-16 px-4">
                <h3 className="text-2xl font-bold text-center mb-10">ارزش‌های کلیدی ما</h3>
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {values.map((val, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ scale: 1.03 }}
                            className="bg-white dark:bg-white/5 p-6 rounded-xl text-center shadow-md border border-gray-200 dark:border-gray-700"
                        >
                            <div className="text-primary mb-4 mx-auto">{val.icon}</div>
                            <h4 className="text-2xl font-semibold mb-2">{val.title}</h4>
                            <p className="text-lg text-gray-500 dark:text-gray-400">{val.text}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* بخش دعوت به همکاری */}
            <section className="text-center py-16 px-4">
                <h3 className="text-3xl font-bold mb-4">دوست دارید با ما کار کنید؟</h3>
                <p className="text-gray-400 mb-6">
                    ما همیشه به دنبال افراد با استعداد برای پیوستن به تیم‌مان هستیم.
                </p>
                <button className="primary-btn px-6 py-2">به تیم ما بپیوندید</button>
            </section>
        </div>
    );
};

export default OurTeam;
