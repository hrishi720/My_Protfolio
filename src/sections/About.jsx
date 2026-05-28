import { motion } from "framer-motion";
import { FaBrain, FaCode, FaLaptopCode } from "react-icons/fa";

const About = () => {
    return (
        <section
            id="about"
            className="relative py-28 px-6 md:px-16 overflow-hidden"
        >

            {/* Glow */}
            <div className="absolute right-0 bottom-0 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full"></div>

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

                {/* LEFT SIDE */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >

                    <p className="text-sm uppercase tracking-[5px] text-blue-500 font-medium">
                        About
                    </p>

                    <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">

                        Passionate About
                        <span className="text-blue-500">
                            {" "}AI & Modern Technology
                        </span>

                    </h2>

                    <p className="mt-6 text-gray-600 dark:text-gray-400 leading-relaxed text-lg">

                        I’m Hrishikesh Choudhury, an AI/ML enthusiast and developer
                        focused on building intelligent systems, scalable applications,
                        and modern digital experiences.

                    </p>

                    <p className="mt-5 text-gray-600 dark:text-gray-400 leading-relaxed">

                        My work combines machine learning, computer vision,
                        full-stack development, and problem-solving to create impactful solutions.

                    </p>

                    {/* Stats */}
                    <div className="mt-10 grid grid-cols-2 gap-6">

                        <div className="rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#0f172a] p-6 shadow-lg">

                            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                                6+
                            </h3>

                            <p className="mt-2 text-gray-600 dark:text-gray-400">
                                Major Projects
                            </p>

                        </div>

                        <div className="rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#0f172a] p-6 shadow-lg">

                            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                                200+
                            </h3>

                            <p className="mt-2 text-gray-600 dark:text-gray-400">
                                DSA Problems
                            </p>

                        </div>

                    </div>

                </motion.div>

                {/* RIGHT SIDE */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="grid gap-6"
                >

                    {/* Card 1 */}
                    <div className="rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#0f172a] p-8 shadow-xl">

                        <div className="text-4xl text-blue-500">
                            <FaBrain />
                        </div>

                        <h3 className="mt-5 text-2xl font-bold text-gray-900 dark:text-white">
                            Machine Learning
                        </h3>

                        <p className="mt-3 text-gray-600 dark:text-gray-400 leading-relaxed">

                            Building intelligent systems using deep learning,
                            computer vision, and data-driven approaches.

                        </p>

                    </div>

                    {/* Card 2 */}
                    <div className="rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#0f172a] p-8 shadow-xl">

                        <div className="text-4xl text-blue-500">
                            <FaLaptopCode />
                        </div>

                        <h3 className="mt-5 text-2xl font-bold text-gray-900 dark:text-white">
                            Full Stack Development
                        </h3>

                        <p className="mt-3 text-gray-600 dark:text-gray-400 leading-relaxed">

                            Creating responsive and scalable modern applications
                            with clean UI/UX experiences.

                        </p>

                    </div>

                    {/* Card 3 */}
                    <div className="rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#0f172a] p-8 shadow-xl">

                        <div className="text-4xl text-blue-500">
                            <FaCode />
                        </div>

                        <h3 className="mt-5 text-2xl font-bold text-gray-900 dark:text-white">
                            Problem Solving
                        </h3>

                        <p className="mt-3 text-gray-600 dark:text-gray-400 leading-relaxed">

                            Strong foundation in algorithms, data structures,
                            and software engineering principles.

                        </p>

                    </div>

                </motion.div>

            </div>

        </section>
    );
};

export default About;