import React from "react";
import { TbWorldWww } from "react-icons/tb";
import { CiMobile3 } from "react-icons/ci";
import { RiComputerLine } from "react-icons/ri";
import { IoMdHappy } from "react-icons/io";
import { IoPulseOutline } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import { motion } from "framer-motion";

// داده‌ها با عناوین فارسی
const ServicesData = [
    {
        id: 1,
        title: "طراحی وب‌سایت",
        link: "#",
        icon: <TbWorldWww />,
        delay: 0.2,
    },
    {
        id: 2,
        title: "اپلیکیشن موبایل",
        link: "#",
        icon: <CiMobile3 />,
        delay: 0.3,
    },
    {
        id: 3,
        title: "نرم‌افزارهای سفارشی",
        link: "#",
        icon: <RiComputerLine />,
        delay: 0.3,
    },
    {
        id: 4,
        title: "رضایت مشتریان",
        link: "#",
        icon: <IoMdHappy />,
        delay: 0.5,
    },
    {
        id: 5,
        title: "بهینه‌سازی سئو",
        link: "#",
        icon: <IoPulseOutline />,
        delay: 0.6,
    },
    {
        id: 6,
        title: "پشتیبانی ۲۴ ساعته",
        link: "#",
        icon: <BiSupport />,
        delay: 0.7,
    },
];

// انیمیشن
const SlideLeft = (delay) => {
    return {
        initial: {
            opacity: 0,
            x: 50,
        },
        animate: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.3,
                delay: delay,
                ease: "easeInOut",
            },
        },
    };
};

const Services = () => {
    return (
        <section dir="rtl" className="bg-light dark:bg-dark transition-colors duration-300 font-vazir">
            <div className="container pb-14 pt-16">
                {/* عنوان بخش */}
                <h1 className="text-4xl font-bold pb-10 text-right text-dark dark:text-light">
                    خدماتی که ارائه می‌دهیم
                </h1>

                {/* لیست خدمات */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
                    {ServicesData.map((service) => (
                        <motion.div
                            key={service.id}
                            variants={SlideLeft(service.delay)}
                            initial="initial"
                            whileInView={"animate"}
                            viewport={{ once: true }}
                            className="bg-[#f4f4f4] dark:bg-dark rounded-2xl flex flex-col duration-300 gap-4 items-center p-5 py-7 hover:bg-white dark:hover:bg-gray-700 hover:scale-105 hover:shadow-lg"
                        >
                            <div className="text-4xl text-dark dark:text-light mb-4">
                                {service.icon}
                            </div>
                            <h1 className="text-lg font-semibold text-center text-dark dark:text-light">
                                {service.title}
                            </h1>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
