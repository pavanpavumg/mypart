import { motion } from "framer-motion";

const skills = {
    Frontend: ["HTML5", "Tailwind CSS", "JavaScript", "React native", "Bootstrap"],
    Backend: ["Python", "Flask", "Java", "FastAPI", "Node.js"],
    Database: ["MySQL", "MongoDB", "SQLite"],
    "AI / ML": ["NumPy", "Pandas", "OpenCV", "TensorFlow", "PyTorch"],
    Tools: ["Git", "GitHub", "Postman", "VS Code"]
};

export default function Skills() {
    return (
        <section id="skills" className="w-full bg-slate-900 text-gray-200 py-20">
            <div className="container-custom">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-4xl font-semibold mb-10 text-center"
                >
                    Skills
                </motion.h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {Object.keys(skills).map((key, index) => (
                        <motion.div
                            key={key}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-slate-800/80 border border-slate-700 rounded-xl p-6 hover:border-blue-500 transition"
                        >
                            <h3 className="font-semibold mb-2 text-blue-400">{key}</h3>
                            <ul className="list-disc list-inside text-gray-400">
                                {skills[key].map(skill => <li key={skill}>{skill}</li>)}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
