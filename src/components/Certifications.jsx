import { motion } from "framer-motion";
import { BookOpen, Brain, Code2, Award, MonitorCheck, Layers3 } from "lucide-react";

export default function Certifications() {

    const certs = [
        {
            icon: <Brain size={32} className="text-blue-500" />,
            title: "Artificial Intelligence in Real World",
            platform: "upGrad",
            issued: "Issued Dec 2025"
        },
        {
            icon: <Brain size={32} className="text-purple-500" />,
            title: "Deep Learning for Developers",
            platform: "Infosys Springboard",
            issued: "Issued Dec 2025"
        },
        {
            icon: <Code2 size={32} className="text-yellow-500" />,
            title: "Python for Data Science",
            platform: "Infosys Springboard",
            issued: "Issued Jul 2025"
        },
        {
            icon: <MonitorCheck size={32} className="text-green-500" />,
            title: "Power BI for Beginners",
            platform: "Simplilearn",
            issued: "Issued Dec 2025"
        },
        {
            icon: <Layers3 size={32} className="text-pink-500" />,
            title: "Hands-On Web Development with JavaScript",
            platform: "Infosys Springboard",
            issued: "Issued Jul 2025"
        },
        {
            icon: <BookOpen size={32} className="text-orange-500" />,
            title: "Master Course in Full Stack Development",
            platform: "Great Learning",
            issued: ""
        },
        {
            icon: <BookOpen size={32} className="text-red-500" />,
            title: "Adobe Graphic Designer",
            platform: "Academy of Media & Design, Tamil Nadu",
            issued: ""
        },
        {
            icon: <Award size={32} className="text-blue-300" />,
            title: "CICADA Hackathon (24 Hours)",
            platform: "Atria Institute of Technology (AIT)",
            issued: ""
        },
    ];

    return (
        <section id="certifications" className="w-full bg-slate-950 py-20 text-gray-200">
            <div className="max-w-6xl mx-auto px-6">

                <motion.h2
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-bold text-center mb-12"
                >
                    Certifications & Training 🎓
                </motion.h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certs.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="border border-slate-800 bg-slate-900/50 rounded-xl p-6 
                         hover:border-blue-500 hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]
                         transition cursor-pointer"
                        >
                            <div className="flex items-center gap-4 mb-3">
                                {item.icon}
                                <h3 className="text-lg font-semibold">{item.title}</h3>
                            </div>
                            <p className="text-gray-400 text-sm">{item.platform}</p>
                            {item.issued && (
                                <p className="text-gray-500 text-xs mt-1 italic">{item.issued}</p>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
