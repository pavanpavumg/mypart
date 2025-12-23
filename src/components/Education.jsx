import { motion } from "framer-motion";

export default function Education() {
    return (
        <section id="education" className="w-full bg-slate-900 text-gray-200 py-20">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-center">Education</h2>

                    <div className="border-l-4 border-blue-500 pl-6 space-y-6 max-w-4xl mx-auto">
                        <div className="relative">
                            <h3 className="text-xl font-semibold">
                                Master of Computer Applications (MCA)
                            </h3>
                            <p className="text-gray-400">
                                Atria Institute of Technology, Bengaluru
                            </p>
                            <p className="text-sm text-gray-400">
                                2023 – 2025 | CGPA: 8.41
                            </p>
                        </div>

                        <div className="relative">
                            <h3 className="text-xl font-semibold">
                                Bachelor of Science (Physics & Computer Science)
                            </h3>
                            <p className="text-gray-400">
                                Tumkur University, Karnataka
                            </p>
                            <p className="text-sm text-gray-400">
                                2021 – 2024 | CGPA: 7.81
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
