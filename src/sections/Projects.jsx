import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
    {
        title: "AI Parking Detection",
        description:
            "Real-time parking space detection system using YOLOv8 and OpenCV.",
        tech: ["YOLOv8", "OpenCV", "Python"],
        image:
            "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?q=80&w=1200&auto=format&fit=crop",
    },

    {
        title: "TutorChain+",
        description:
            "AI tutor platform that generates summaries, quizzes, and flashcards from PDFs.",
        tech: ["LLaMA 3", "Streamlit", "Groq"],
        image:
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    },

    {
        title: "Stock Prediction System",
        description:
            "LSTM-based stock market prediction dashboard with interactive visualizations.",
        tech: ["TensorFlow", "LSTM", "React"],
        image:
            "https://images.unsplash.com/photo-1642790106117-e829e14a795f?q=80&w=1200&auto=format&fit=crop",
    },
];

const Projects = () => {
    return (
        <section
            id="projects"
            className="relative py-28 px-6 md:px-16 overflow-hidden"
        >

            {/* Background Glow */}
            <div className="absolute left-10 top-20 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full"></div>

            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-center"
                >

                    <p className="text-sm uppercase tracking-[5px] text-blue-500 font-medium">
                        Projects
                    </p>

                    <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                        Featured Work
                    </h2>

                    <p className="mt-5 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        A collection of AI, machine learning, and full-stack projects
                        focused on solving real-world problems.
                    </p>

                </motion.div>

                {/* Projects Grid */}
                <div className="mt-20 grid md:grid-cols-3 gap-8">

                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 35 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                            }}
                            viewport={{ once: true }}
                            whileHover={{
                                y: -8,
                            }}
                            className="group overflow-hidden rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#0f172a] shadow-xl transition duration-300 hover:shadow-2xl"
                        >

                            {/* Image */}
                            <div className="overflow-hidden">

                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                                />

                            </div>

                            {/* Content */}
                            <div className="p-7">

                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">

                                    {project.title}

                                </h3>

                                <p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed">

                                    {project.description}

                                </p>

                                {/* Tech Stack */}
                                <div className="mt-5 flex flex-wrap gap-3">

                                    {project.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-4 py-2 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-medium"
                                        >

                                            {tech}

                                        </span>
                                    ))}

                                </div>

                                {/* Buttons */}
                                <div className="mt-7 flex items-center gap-4">

                                    <button className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gray-900 dark:bg-white text-white dark:text-black font-medium transition duration-300 hover:scale-105">

                                        <FaGithub />

                                        GitHub

                                    </button>

                                    <button className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-300 dark:border-white/20 text-gray-800 dark:text-gray-200 font-medium transition duration-300 hover:bg-gray-100 dark:hover:bg-white/10">

                                        <FaExternalLinkAlt />

                                        Live

                                    </button>

                                </div>

                            </div>

                        </motion.div>
                    ))}

                </div>

            </div>

        </section>
    );
};

export default Projects;