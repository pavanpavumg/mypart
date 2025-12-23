import { motion } from "framer-motion";

export default function Projects() {
    return (
        <section id="projects" className="w-full bg-slate-950 text-gray-200 py-20">
            <div className="container-custom">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-semibold mb-10 text-center"
                >
                    Projects
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="bg-slate-800/80 border border-slate-700 rounded-xl p-6 hover:border-blue-500 transition"
                    >
                        <h3 className="font-semibold text-xl text-blue-400">
                            AI-Driven Personalized Fitness Coach
                        </h3>
                        <p className="mt-2 text-gray-400">
                            Real-time pose detection using OpenCV & MediaPipe with workout form validation.
                        </p>
                        <p className="text-sm mt-1 text-gray-400">Python | OpenCV | MediaPipe</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="bg-slate-800/80 border border-slate-700 rounded-xl p-6 hover:border-blue-500 transition"
                    >
                        <h3 className="font-semibold text-xl text-blue-400">
                            Receipt & Bill Analyzer (OCR)
                        </h3>
                        <p className="mt-2 text-gray-400">
                            Upload receipts and extract structured data with spending analysis.
                        </p>
                        <p className="text-sm mt-1 text-gray-400">Python | Streamlit | SQLite | OCR</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
