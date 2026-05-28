import { motion } from "framer-motion";

import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
} from "react-icons/fa";

const Contact = () => {
    return (
        <section
            id="contact"
            className="relative py-28 px-6 md:px-16 overflow-hidden"
        >

            {/* Glow */}
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full"></div>

            <div className="max-w-5xl mx-auto">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="rounded-[40px] border border-gray-200 dark:border-white/10 bg-white dark:bg-[#0f172a] p-10 md:p-16 shadow-2xl text-center"
                >

                    {/* Heading */}
                    <p className="text-sm uppercase tracking-[5px] text-blue-500 font-medium">
                        Contact
                    </p>

                    <h2 className="mt-5 text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                        Let’s Build Something Great
                    </h2>

                    <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Interested in AI, machine learning, software development,
                        or collaboration opportunities? Let’s connect.
                    </p>

                    {/* Email Button */}
                    <div className="mt-10">

                        <a
                            href="mailto:hrishi720s@gmail.com"
                            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/30"
                        >

                            <FaEnvelope />

                            hrishi720s@gmail.com

                        </a>

                    </div>

                    {/* Social Icons */}
                    <div className="mt-10 flex justify-center gap-6">

                        <a
                            href="https://github.com/hrishi720"
                            target="_blank"
                            rel="noreferrer"
                            className="w-14 h-14 rounded-full border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-[#111827] flex items-center justify-center text-2xl text-gray-700 dark:text-gray-300 hover:text-blue-500 hover:border-blue-500 transition duration-300"
                        >

                            <FaGithub />

                        </a>

                        <a
                            href="https://linkedin.com/in/hrishikesh-choudhury"
                            target="_blank"
                            rel="noreferrer"
                            className="w-14 h-14 rounded-full border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-[#111827] flex items-center justify-center text-2xl text-gray-700 dark:text-gray-300 hover:text-blue-500 hover:border-blue-500 transition duration-300"
                        >

                            <FaLinkedin />

                        </a>

                    </div>

                </motion.div>

                {/* Footer */}
                <div className="mt-10 text-center">

                    <p className="text-gray-500 dark:text-gray-500">
                        © 2026 Hrishikesh Choudhury. All rights reserved.
                    </p>

                </div>

            </div>

        </section>
    );
};

export default Contact;