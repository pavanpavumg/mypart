import { useState } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { ChevronDown, ChevronUp, Search } from "lucide-react";

export default function Projects() {
    const [openIndex, setOpenIndex] = useState(null);
    const [filter, setFilter] = useState("All");
    const [search, setSearch] = useState("");

    const categories = ["All", "Web", "AI", "ML"];

    const projects = [
        // --- User's Original Projects ---
        {
            title: "AI-Driven Personalized Fitness Coach",
            intro: "Real-time pose analysis for fitness coaching.",
            desc: "Real-time pose detection using OpenCV & MediaPipe with workout form validation to ensure correct exercise techniques and provide instant feedback.",
            skills: "Python | OpenCV | MediaPipe",
            category: "AI",
        },
        {
            title: "Receipt & Bill Analyzer (OCR)",
            intro: "Automated receipt parsing and spending analysis.",
            desc: "Upload receipts and extract structured data with spending analysis. Uses OCR to convert physical bills into digital, actionable data.",
            skills: "Python | Streamlit | SQLite | OCR",
            category: "ML",
        },
        // --- New Projects ---
        {
            title: "Real-Time Web Data Integration System",
            intro: "Live data fetch without page reload.",
            desc: "AJAX + XMLHttpRequest used to fetch real-time data without refresh. Handles JSON dynamically on UI.",
            skills: "AJAX | JavaScript | API Integration",
            category: "Web",
        },
        {
            title: "AI Chatbot Using NLP Techniques",
            intro: "Conversational rule-based chatbot.",
            desc: "Intent recognition, keyword mapping, Python NLP fundamentals for intelligent chatbot responses.",
            skills: "Python | NLP | AI Chatbot",
            category: "AI",
        },
        {
            title: "AI-Based Image Scanner with OCR",
            intro: "OCR-driven document scanner system.",
            desc: "Built using OpenCV + OCR for text extraction, preprocessing & enhancement to produce machine-readable text.",
            skills: "Computer Vision | AI | OCR",
            category: "ML",
        },
        {
            title: "AI Business Innovation Solutions",
            intro: "Automation using AI workflows.",
            desc: "AI-driven automation & insight systems for business transformation and operational efficiency.",
            skills: "AI | Analytics | Innovation",
            category: "AI",
        },
    ];

    // 🔍 Search + Filter Logic
    const filteredProjects = projects.filter((project) => {
        const matchCategory = filter === "All" || project.category === filter;
        const matchSearch =
            project.title.toLowerCase().includes(search.toLowerCase()) ||
            project.intro.toLowerCase().includes(search.toLowerCase()) ||
            project.skills.toLowerCase().includes(search.toLowerCase());
        return matchCategory && matchSearch;
    });

    const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

    return (
        <section id="projects" className="w-full bg-slate-900 py-20 text-gray-100">
            <div className="max-w-6xl mx-auto px-6">

                <h2 className="text-4xl font-bold text-center mb-10">Projects 🚀</h2>

                {/* 🔍 Search Bar */}
                <div className="flex justify-center mb-6">
                    <div className="flex items-center bg-slate-800 border border-slate-700 rounded-full px-4 py-2 w-full md:w-2/3 gap-2 focus-within:border-blue-500 transition shadow-md">
                        <Search className="text-gray-400" size={20} />
                        <input
                            type="text"
                            placeholder="Search projects..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="bg-transparent outline-none w-full text-gray-200 placeholder-gray-500"
                        />
                    </div>
                </div>

                {/* 🏷️ Animated Tags / Filters */}
                <div className="flex justify-center gap-3 mb-10 flex-wrap">
                    {categories.map((cat) => (
                        <motion.button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            whileTap={{ scale: 0.9 }}
                            animate={{ scale: filter === cat ? 1.1 : 1 }}
                            className={`px-4 py-2 rounded-full border transition font-medium ${filter === cat
                                    ? "bg-blue-600 border-blue-500 text-white shadow-[0_0_12px_rgba(59,130,246,0.6)]"
                                    : "border-slate-600 text-gray-300 hover:border-blue-400 hover:text-white"
                                }`}
                        >
                            {cat}
                        </motion.button>
                    ))}
                </div>

                {/* 🗂️ Project Cards */}
                <div className="space-y-6">
                    {filteredProjects.length > 0 ? (
                        filteredProjects.map((project, i) => (
                            <Tilt glareEnable glareMaxOpacity={0.25} scale={1.02} key={i} className="rounded-xl">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.96 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4 }}
                                    className="border border-slate-700 bg-slate-800/50 rounded-xl p-5 
                             hover:border-blue-500 hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] transition"
                                >
                                    <button onClick={() => toggle(i)} className="w-full flex justify-between items-center text-left">
                                        <div>
                                            <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                                            <p className="text-gray-400 text-sm mt-1">{project.intro}</p>
                                            <p className="text-blue-400 text-xs mt-2 font-mono">{project.skills}</p>
                                        </div>
                                        {openIndex === i ? (
                                            <ChevronUp className="text-blue-400" />
                                        ) : (
                                            <ChevronDown className="text-gray-400" />
                                        )}
                                    </button>

                                    {openIndex === i && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            transition={{ duration: 0.3 }}
                                            className="mt-4 text-gray-300 border-t border-slate-700 pt-4 leading-relaxed"
                                        >
                                            {project.desc}
                                        </motion.div>
                                    )}
                                </motion.div>
                            </Tilt>
                        ))
                    ) : (
                        <p className="text-center text-gray-400 mt-10">No projects found reflecting your search.</p>
                    )}
                </div>
            </div>
        </section>
    );
}
