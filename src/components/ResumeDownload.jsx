import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Modal from "react-modal";
import { Code2, Brain, Eye, Download } from "lucide-react";
import { QRCodeCanvas } from "qrcode.react";

Modal.setAppElement("#root");

export default function ResumeDownload({ isOpen, onClose }) {
    const [selectedResume, setSelectedResume] = useState(null);
    const [highlight, setHighlight] = useState(null);

    const resumes = [
        {
            id: "fullstack",
            title: "Full-Stack Developer Resume",
            file: "/resumes/Pavan_FullStack_Resume.pdf",
            desc: "React, APIs, Databases, Web Applications",
            icon: <Code2 size={26} className="text-blue-500" />,
        },
        {
            id: "ml",
            title: "Machine Learning Resume",
            file: "/resumes/Pavan_ML_Resume.pdf",
            desc: "Python, AI, ML, NLP, Computer Vision",
            icon: <Brain size={26} className="text-purple-500" />,
        },
    ];

    /* 🔹 Auto-detect role from URL */
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const role = params.get("role");
        if (role) setHighlight(role);
    }, []);

    /* 🔹 Track download count (local analytics) */
    const trackDownload = (id) => {
        const count = localStorage.getItem(id) || 0;
        localStorage.setItem(id, Number(count) + 1);
    };

    /* 🔹 Reset selection when modal closes */
    useEffect(() => {
        if (!isOpen) {
            setSelectedResume(null);
        }
    }, [isOpen]);

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            className="bg-slate-900 border border-slate-700 w-full max-w-4xl mx-auto rounded-xl outline-none p-6 max-h-[90vh] overflow-y-auto relative shadow-2xl shadow-blue-900/20"
            overlayClassName="fixed inset-0 bg-black/80 z-[60] flex justify-center items-center p-4 backdrop-blur-sm"
        >
            {/* Close Button */}
            <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>

            {selectedResume ? (
                /* PREVIEW MODE */
                <div className="animate-in fade-in zoom-in duration-300">
                    <div className="flex justify-between items-center mb-4">
                        <button
                            onClick={() => setSelectedResume(null)}
                            className="text-blue-400 hover:text-blue-300 flex items-center gap-1 font-medium"
                        >
                            ← Back to Selection
                        </button>
                        <h2 className="text-lg font-semibold text-white truncate max-w-[200px] md:max-w-md">
                            {selectedResume.title}
                        </h2>
                        <div className="w-6"></div> {/* Spacer for centering */}
                    </div>

                    <iframe
                        src={selectedResume.file}
                        className="w-full h-[60vh] rounded bg-white shadow-lg"
                        title="Resume Preview"
                    />

                    <div className="flex justify-end gap-3 mt-4">
                        <button
                            onClick={() => setSelectedResume(null)}
                            className="px-4 py-2 rounded text-gray-300 hover:bg-slate-800 transition"
                        >
                            Back
                        </button>
                        <a
                            href={selectedResume.file}
                            download
                            onClick={() => trackDownload(selectedResume.id)}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-semibold transition flex items-center gap-2"
                        >
                            <Download size={18} /> Download PDF
                        </a>
                    </div>
                </div>
            ) : (
                /* SELECTION MODE */
                <div className="text-gray-200 py-4">
                    <h2 className="text-3xl font-bold text-center mb-2">
                        Select Resume 📄
                    </h2>
                    <p className="text-center text-gray-400 mb-8">
                        Choose the version that fits your needs
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                        {resumes.map((r) => (
                            <motion.div
                                key={r.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className={`border rounded-xl p-6 text-center transition hover:bg-slate-800/50
                  ${highlight === r.id
                                        ? "border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.5)] bg-slate-800/30"
                                        : "border-slate-700 bg-slate-900/60"
                                    }`}
                            >
                                <div className="flex justify-center mb-4">{r.icon}</div>
                                <h3 className="text-lg font-semibold mb-2">{r.title}</h3>
                                <p className="text-gray-400 text-sm mb-6 h-10">{r.desc}</p>

                                <div className="flex justify-center gap-3 mb-6">
                                    <button
                                        onClick={() => setSelectedResume(r)}
                                        className="flex items-center gap-1 border border-slate-600 px-3 py-1.5 rounded hover:border-blue-400 hover:text-blue-400 transition"
                                    >
                                        <Eye size={16} /> Preview
                                    </button>

                                    <a
                                        href={r.file}
                                        download
                                        onClick={() => trackDownload(r.id)}
                                        className="flex items-center gap-1 bg-blue-600 px-3 py-1.5 rounded text-white hover:bg-blue-700 transition"
                                    >
                                        <Download size={16} /> Download
                                    </a>
                                </div>

                                {/* QR Code */}
                                <div className="flex flex-col items-center">
                                    <div className="bg-white p-2 rounded-lg">
                                        <QRCodeCanvas value={window.location.origin + r.file} size={100} />
                                    </div>
                                    <p className="text-[10px] text-gray-500 mt-2 uppercase tracking-wider">Scan to download</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            )}
        </Modal>
    );
}
