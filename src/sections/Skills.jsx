import {
    SiPython,
    SiCplusplus,
    SiTensorflow,
    SiPytorch,
    SiOpencv,
    SiReact,
    SiMysql,
    SiGit,
} from "react-icons/si";

import { motion } from "framer-motion";

const skills = [
    {
        name: "Python",
        icon: <SiPython />,
    },
    {
        name: "C++",
        icon: <SiCplusplus />,
    },
    {
        name: "TensorFlow",
        icon: <SiTensorflow />,
    },
    {
        name: "PyTorch",
        icon: <SiPytorch />,
    },
    {
        name: "OpenCV",
        icon: <SiOpencv />,
    },
    {
        name: "React",
        icon: <SiReact />,
    },
    {
        name: "SQL",
        icon: <SiMysql />,
    },
    {
        name: "Git",
        icon: <SiGit />,
    },
];

const Skills = () => {
    return (
        <section
            id="skills"
            className="relative py-28 px-6 md:px-16 overflow-hidden"
        >

            {/* Background Glow */}
            <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>

            <div className="max-w-6xl mx-auto">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-center"
                >

                    <p className="text-sm uppercase tracking-[5px] text-blue-500 font-medium">
                        Skills
                    </p>

                    <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                        Technologies I Use
                    </h2>

                    <p className="mt-5 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Building intelligent systems and modern applications
                        using powerful technologies and scalable frameworks.
                    </p>

                </motion.div>

                {/* Skills Grid */}
                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">

                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 35 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.07,
                            }}
                            viewport={{ once: true }}
                            whileHover={{
                                y: -6,
                            }}
                            className="group relative rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#0f172a] p-8 shadow-lg transition duration-300 hover:shadow-2xl"
                        >

                            {/* Hover Glow */}
                            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-300 bg-blue-500/5"></div>

                            {/* Icon */}
                            <div className="relative flex justify-center">

                                <div className="text-5xl text-blue-500">

                                    {skill.icon}

                                </div>

                            </div>

                            {/* Skill Name */}
                            <h3 className="relative mt-6 text-center text-lg font-semibold text-gray-800 dark:text-gray-200">

                                {skill.name}

                            </h3>

                        </motion.div>
                    ))}

                </div>

            </div>

        </section>
    );
};

export default Skills;