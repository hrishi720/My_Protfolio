import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section className="relative min-h-screen overflow-hidden flex items-center justify-center px-6 md:px-16">

            {/* Background Glow */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>

            <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl"></div>

            <div className="max-w-7xl w-full grid md:grid-cols-2 gap-16 items-center">

                {/* LEFT CONTENT */}
                <div className="text-center md:text-left">

                    {/* Intro */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-blue-500 font-medium tracking-[4px] uppercase"
                    >
                        AI/ML Engineer • Developer
                    </motion.p>

                    {/* Name */}
                    <motion.h1
                        initial={{ opacity: 0, y: 35 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mt-5 text-5xl md:text-7xl font-bold leading-tight text-gray-900 dark:text-white"
                    >

                        Hrishikesh
                        <br />

                        <span className="text-blue-500">
                            Choudhury
                        </span>

                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 35 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="mt-7 text-lg leading-relaxed text-gray-600 dark:text-gray-400 max-w-xl"
                    >

                        Building intelligent AI systems, scalable software,
                        and futuristic digital experiences with modern technologies.

                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 35 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="mt-10 flex flex-wrap gap-4 justify-center md:justify-start"
                    >

                        <button className="px-7 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/30">

                            View Work

                        </button>

                        <button className="px-7 py-3 rounded-full border border-gray-300 dark:border-white/10 bg-white dark:bg-[#111827] text-gray-800 dark:text-gray-200 hover:border-blue-500 hover:text-blue-500 transition duration-300">

                            Resume

                        </button>

                    </motion.div>

                </div>

                {/* RIGHT SIDE */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="flex justify-center"
                >

                    <div className="relative flex items-center justify-center">

                        {/* Glow */}
                        <motion.div
                            animate={{
                                opacity: [0.3, 0.5, 0.3],
                                scale: [1, 1.05, 1],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="absolute w-[320px] h-[320px] md:w-[420px] md:h-[420px] rounded-full bg-blue-500/10 blur-3xl"
                        />

                        {/* Orbit Ring */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{
                                duration: 20,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                            className="absolute w-[320px] h-[320px] md:w-[420px] md:h-[420px] rounded-full border border-blue-500/10 border-dashed"
                        >


                        </motion.div>

                        {/* Floating Logo */}
                        <motion.div
                            animate={{
                                y: [0, -12, 0],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="relative"
                        >

                            {/* Main Circle */}
                            <div className="relative w-[260px] h-[260px] md:w-[340px] md:h-[340px] rounded-full bg-gradient-to-br from-[#142f8f] via-[#0b5ed7] to-[#06b6d4] border border-blue-500/20 shadow-[0_0_60px_rgba(59,130,246,0.25)] flex items-center justify-center overflow-hidden">

                                {/* Top Shine */}
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_40%)]"></div>

                                {/* Ears */}
                                <div className="absolute top-[72px] md:top-[95px] left-[72px] md:left-[98px] w-10 h-10 md:w-14 md:h-14 bg-gray-200 rounded-full"></div>

                                <div className="absolute top-[72px] md:top-[95px] right-[72px] md:right-[98px] w-10 h-10 md:w-14 md:h-14 bg-gray-200 rounded-full"></div>

                                {/* Antenna */}
                                <div className="absolute top-[96px] md:top-[126px] w-3 h-3 md:w-4 md:h-4 bg-gray-200 rounded-full"></div>

                                <div className="absolute top-[82px] md:top-[108px] w-2 h-5 md:w-3 md:h-7 bg-gray-200 clip-path-triangle"></div>

                                {/* Face */}
                                <div className="relative mt-10 w-[130px] h-[90px] md:w-[180px] md:h-[120px] rounded-[35px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 shadow-inner">

                                    {/* Face Glow */}
                                    <motion.div
                                        animate={{
                                            opacity: [0.3, 0.6, 0.3],
                                            scale: [1, 1.1, 1],
                                        }}
                                        transition={{
                                            duration: 4,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        }}
                                        className="absolute inset-0 bg-blue-400/10 blur-2xl"
                                    />

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
                                        className="absolute left-7 md:left-10 top-8 md:top-10 w-5 h-5 md:w-7 md:h-7 bg-[#18348f] rounded-full origin-center"
                                    >

                                        <div className="absolute top-1 left-1 w-2 h-2 md:w-3 md:h-3 bg-white rounded-full"></div>

                                    </motion.div>

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
                                        className="absolute right-7 md:right-10 top-8 md:top-10 w-5 h-5 md:w-7 md:h-7 bg-[#18348f] rounded-full origin-center"
                                    >

                                        <div className="absolute top-1 left-1 w-2 h-2 md:w-3 md:h-3 bg-white rounded-full"></div>

                                    </motion.div>

                                    {/* Nose */}
                                    <motion.div
                                        animate={{
                                            scale: [1, 1.08, 1],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        }}
                                        className="w-5 h-4 md:w-7 md:h-5 bg-[#18348f] rounded-full"
                                    />

                                    {/* Teeth */}
                                    <div className="absolute bottom-4 flex gap-2">

                                        <motion.div
                                            animate={{ opacity: [0.5, 1, 0.5] }}
                                            transition={{ duration: 1.5, repeat: Infinity }}
                                            className="w-1 h-5 md:w-1.5 md:h-7 bg-blue-500 rounded-full"
                                        />

                                        <motion.div
                                            animate={{ opacity: [1, 0.5, 1] }}
                                            transition={{ duration: 1.5, repeat: Infinity }}
                                            className="w-1 h-5 md:w-1.5 md:h-7 bg-blue-500 rounded-full"
                                        />

                                        <motion.div
                                            animate={{ opacity: [0.5, 1, 0.5] }}
                                            transition={{ duration: 1.5, repeat: Infinity }}
                                            className="w-1 h-5 md:w-1.5 md:h-7 bg-blue-500 rounded-full"
                                        />

                                    </div>

                                </div>

                            </div>

                        </motion.div>

                    </div>

                </motion.div>

            </div>

        </section>
    );
};

export default Hero;