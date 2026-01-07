import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import profilePic from '../assets/profile.jpg';

export default function Hero({ setShowResume }) {
    const [text] = useTypewriter({
        words: [
            "Full-Stack Developer",
            "Python Developer",
            "Machine Learning enthusiast",
        ],
        loop: true,
        delaySpeed: 1500,
    });

    return (
        <section className="relative min-h-screen pt-20 flex items-center justify-center 
      animated-gradient overflow-hidden">

            {/* Centered Glow Background (Fixed) */}
            <div className="absolute inset-0 flex justify-center items-center overflow-hidden pointer-events-none">
                <div className="w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl"></div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 w-full container-custom grid md:grid-cols-2 gap-10 items-center"
            >
                {/* LEFT: Image */}
                <div className="flex justify-center">
                    <motion.div
                        animate={{ y: [0, -15, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-blue-500/40 rounded-full blur-xl"></div>
                        <img
                            src={profilePic}
                            alt="Pavan M G"
                            className="relative w-48 h-48 rounded-full border-4 border-blue-500 object-cover"
                        />
                    </motion.div>
                </div>

                {/* RIGHT: Text */}
                <div className="text-center md:text-left text-white">
                    <h1 className="text-4xl md:text-5xl font-bold">
                        Hi, I’m{" "}
                        <span className="text-blue-500 drop-shadow-[0_0_12px_rgba(59,130,246,0.8)]">
                            Pavan M G
                        </span>
                    </h1>

                    <h2 className="mt-3 text-xl text-gray-300">
                        {text}
                        <Cursor cursorStyle="|" />
                    </h2>

                    <p className="mt-4 text-gray-400 max-w-xl">
                        I build scalable web applications and AI-driven solutions using
                        React, Python, Flask/FastAPI, and modern machine learning tools.
                    </p>

                    <div className="mt-6 flex gap-4 justify-center md:justify-start">
                        <a
                            href="#projects"
                            className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded text-white"
                        >
                            View Projects
                        </a>
                        <button
                            onClick={() => setShowResume(true)}
                            className="border border-blue-500 px-6 py-2 rounded text-blue-400 hover:bg-blue-500 hover:text-white transition"
                        >
                            View Resume
                        </button>

                    </div>
                </div>
            </motion.div>
        </section>
    );
}
