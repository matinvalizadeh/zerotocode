import React, { useContext, useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { FaMoon, FaSun } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeContext } from "../../Context/ThemeContext";
import { Link } from "react-router-dom";

const NavbarMenu = [
  { id: 1, name: "خانه", link: "/" },
  { id: 2, name: "خدمات", link: "/services" },
  { id: 3, name: "درباره ما", link: "/about" },
  { id: 4, name: "تیم ما", link: "/team" },
  { id: 5, name: "تماس با ما", link: "/contact" },
];

const Navbar = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav
      className="relative z-20 bg-light dark:bg-dark text-dark dark:text-light transition duration-300 font-iransans"
      dir="rtl"
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="container py-6 flex justify-between items-center"
      >
        {/* منوی دسکتاپ */}
        <div className="hidden lg:flex items-center gap-6">
          <button
            onClick={toggleTheme}
            className="ml-4 text-xl p-2 rounded-full hover:text-primary transition"
            aria-label="تغییر حالت تیره"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          <Link to="/login" className="primary-btn ml-4">
            ورود
          </Link>

          <ul className="flex items-center gap-4">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <Link
                  to={menu.link}
                  className="inline-block py-2 px-3 hover:text-secondary relative group font-semibold"
                >
                  <div className="w-2 h-2 bg-secondary absolute mt-3 right-1/2 translate-x-1/2 top-1/2 bottom-0 group-hover:block rounded-full hidden"></div>
                  {menu.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* لوگو */}
        <div className="font-bold text-2xl">
          <Link to="/">
            <h1>از صفر تا کد</h1>
          </Link>
        </div>

        {/* آیکون موبایل */}
        <div className="lg:hidden flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="text-xl p-2 rounded-full hover:text-primary transition"
            aria-label="تغییر حالت تیره"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
          <button onClick={toggleMobileMenu} aria-label="باز/بستن منو">
            {isMobileMenuOpen ? (
              <IoMdClose className="text-4xl" />
            ) : (
              <IoMdMenu className="text-4xl" />
            )}
          </button>
        </div>
      </motion.div>

      {/* منوی موبایل */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-light dark:bg-dark px-6 pb-6"
          >
            <ul className="space-y-4">
              {NavbarMenu.map((menu) => (
                <li key={menu.id}>
                  <Link
                    to={menu.link}
                    className="block py-2 px-3 text-lg font-medium hover:text-secondary"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {menu.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-col gap-3">
              <Link to="/login" className="primary-btn w-full">
                ورود
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
