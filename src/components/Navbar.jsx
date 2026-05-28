import { useState } from "react";
import { motion } from "framer-motion";

import {
    FaGithub,
    FaLinkedin,
    FaMoon,
    FaSun,
    FaBars,
    FaTimes,
} from "react-icons/fa";

const Navbar = ({ darkMode, setDarkMode }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/70 dark:bg-[#07111f]/70 border-b border-gray-200 dark:border-white/10">

            <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">

                {/* LEFT */}
                <div className="flex items-center gap-4">

                    {/* Animated Logo */}
                    <motion.div
                        animate={{
                            y: [0, -3, 0],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="relative flex items-center justify-center"
                    >

                        {/* Glow */}
                        <div className="absolute w-14 h-14 rounded-full bg-blue-500/20 blur-2xl"></div>

                        {/* Main Circle */}
                        <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-[#142f8f] via-[#0b5ed7] to-[#06b6d4] border border-blue-500/20 flex items-center justify-center overflow-hidden shadow-lg">

                            {/* Shine */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_40%)]"></div>

                            {/* Face */}
                            <div className="relative w-7 h-5 rounded-2xl bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 flex items-center justify-center">

                                {/* Left Eye */}
                                <motion.div
                                    animate={{
                                        scaleY: [1, 1, 0.1, 1, 1],
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        times: [0, 0.45, 0.5, 0.55, 1],
                                    }}
                                    className="absolute left-1 top-1 w-1.5 h-1.5 bg-[#18348f] rounded-full"
                                />

                                {/* Right Eye */}
                                <motion.div
                                    animate={{
                                        scaleY: [1, 1, 0.1, 1, 1],
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        times: [0, 0.45, 0.5, 0.55, 1],
                                    }}
                                    className="absolute right-1 top-1 w-1.5 h-1.5 bg-[#18348f] rounded-full"
                                />

                                {/* Nose */}
                                <div className="w-2 h-1.5 bg-[#18348f] rounded-full"></div>

                            </div>

                        </div>

                    </motion.div>

                    {/* Name */}
                    <h2 className="hidden md:block text-lg font-semibold text-gray-800 dark:text-white">

                        Hrishikesh

                    </h2>

                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-10">

                    <a
                        href="#about"
                        className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition duration-300"
                    >
                        About
                    </a>

                    <a
                        href="#skills"
                        className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition duration-300"
                    >
                        Skills
                    </a>

                    <a
                        href="#projects"
                        className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition duration-300"
                    >
                        Projects
                    </a>

                    <a
                        href="#experience"
                        className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition duration-300"
                    >
                        Experience
                    </a>

                    <a
                        href="#contact"
                        className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition duration-300"
                    >
                        Contact
                    </a>

                </div>

                {/* Right Icons */}
                <div className="hidden md:flex items-center gap-5">

                    {/* GitHub */}
                    <a
                        href="https://github.com/hrishi720"
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition duration-300 text-lg"
                    >

                        <FaGithub />

                    </a>

                    {/* LinkedIn */}
                    <a
                        href="https://linkedin.com/in/hrishikesh-choudhury"
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition duration-300 text-lg"
                    >

                        <FaLinkedin />

                    </a>

                    {/* Theme Toggle */}
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="w-10 h-10 rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-[#111827] flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-blue-500 transition duration-300"
                    >

                        {darkMode ? <FaSun /> : <FaMoon />}

                    </button>

                </div>

                {/* Mobile Button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden text-2xl text-gray-800 dark:text-white"
                >

                    {menuOpen ? <FaTimes /> : <FaBars />}

                </button>

            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden px-6 pb-6 pt-2 bg-white dark:bg-[#07111f] border-t border-gray-200 dark:border-white/10">

                    <div className="flex flex-col gap-5">

                        <a
                            href="#about"
                            className="text-gray-700 dark:text-gray-300"
                        >
                            About
                        </a>

                        <a
                            href="#skills"
                            className="text-gray-700 dark:text-gray-300"
                        >
                            Skills
                        </a>

                        <a
                            href="#projects"
                            className="text-gray-700 dark:text-gray-300"
                        >
                            Projects
                        </a>

                        <a
                            href="#experience"
                            className="text-gray-700 dark:text-gray-300"
                        >
                            Experience
                        </a>

                        <a
                            href="#contact"
                            className="text-gray-700 dark:text-gray-300"
                        >
                            Contact
                        </a>

                        {/* Mobile Icons */}
                        <div className="flex items-center gap-5 pt-3">

                            <a
                                href="https://github.com/hrishi720"
                                target="_blank"
                                rel="noreferrer"
                                className="text-xl text-gray-700 dark:text-gray-300"
                            >

                                <FaGithub />

                            </a>

                            <a
                                href="https://linkedin.com/in/hrishikesh-choudhury"
                                target="_blank"
                                rel="noreferrer"
                                className="text-xl text-gray-700 dark:text-gray-300"
                            >

                                <FaLinkedin />

                            </a>

                            <button
                                onClick={() => setDarkMode(!darkMode)}
                                className="w-10 h-10 rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-[#111827] flex items-center justify-center text-gray-700 dark:text-gray-300"
                            >

                                {darkMode ? <FaSun /> : <FaMoon />}

                            </button>

                        </div>

                    </div>

                </div>
            )}

        </nav>
    );
};

export default Navbar;