import { motion, useSpring, useTransform, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { Volleyball, Medal, Users, Trophy } from "lucide-react";

// Custom Counter Component using Framer Motion
function Counter({ value }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const springValue = useSpring(0, { duration: 3000 }); // 3s duration-ish
    const displayValue = useTransform(springValue, (current) =>
        Math.round(current)
    );

    useEffect(() => {
        if (isInView) {
            springValue.set(value);
        }
    }, [isInView, value, springValue]);

    return <motion.span ref={ref}>{displayValue}</motion.span>;
}

export default function Achievements() {
    const achievementsData = [
        {
            year: "2023 - 2024",
            icon: <Volleyball size={32} className="text-blue-500" />,
            count: 2,
            unit: "Runner-up",
            title: "Volleyball Team – Two-Time Runners-up",
            desc: "Led the sports team in inter-college tournaments with strong coordination and execution.",
        },
        {
            year: "2024",
            icon: <Medal size={32} className="text-yellow-500" />,
            count: 1,
            unit: "Champion",
            title: "Ball Badminton – 1 Time Champion",
            desc: "Won regional-level title demonstrating teamwork, discipline, and consistency.",
        },
        {
            year: "2024",
            icon: <Users size={32} className="text-green-500" />,
            count: 5,
            unit: "+ Events",
            title: "Best Volunteer – Espoire Club",
            desc: "Recognized for leadership, event management, and community outreach initiatives.",
        },
        {
            year: "2025",
            icon: <Trophy size={32} className="text-purple-500" />,
            count: 24,
            unit: "Hr Hackathon",
            title: "CICADA 2025 Hackathon Participant",
            desc: "Developed solutions under pressure showcasing problem-solving and collaboration.",
        },
    ];

    return (
        <section id="achievements" className="w-full bg-slate-950 py-20 text-gray-200">
            <div className="max-w-5xl mx-auto px-6">
                {/* Header */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-center mb-10"
                >
                    Achievements & Milestones 🏆
                </motion.h2>

                <div className="relative border-l-4 border-blue-500 pl-8 space-y-12">
                    {achievementsData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="bg-slate-900/80 border border-slate-700 rounded-xl p-6 shadow-lg hover:border-blue-500 transition flex flex-col gap-3"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute -left-5 h-4 w-4 bg-blue-500 rounded-full border-2 border-white"></div>

                            <div className="flex items-center gap-4">
                                {item.icon}
                                <h3 className="text-xl font-semibold">{item.title}</h3>
                            </div>

                            <p className="text-gray-400">{item.desc}</p>

                            {/* Counter */}
                            <div className="text-3xl font-bold text-blue-400 mt-3">
                                <Counter value={item.count} />{" "}
                                <span className="text-gray-400 text-xl">{item.unit}</span>
                            </div>

                            <span className="text-sm text-gray-500 italic">{item.year}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
