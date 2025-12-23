import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="w-full bg-slate-950 text-gray-200 py-20">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-semibold mb-10">About Me</h2>
                    <p className="text-gray-400 max-w-2xl leading-relaxed">
                        I am an MCA student at Atria Institute of Technology, Bengaluru (CGPA 8.41),
                        with hands-on experience in Full-Stack Development and Machine Learning.
                        I enjoy building real-world applications using React, Python, Flask/FastAPI,
                        and AI libraries like TensorFlow and PyTorch.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
