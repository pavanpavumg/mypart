import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Send, FileText } from "lucide-react";

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        if (!import.meta.env.VITE_EMAILJS_SERVICE_ID || !import.meta.env.VITE_EMAILJS_PUBLIC_KEY) {
            alert("⚠️ EmailJS Configuration Missing! Please set VITE_EMAILJS_SERVICE_ID and VITE_EMAILJS_PUBLIC_KEY in your .env file.");
            return;
        }

        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                form.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            .then(
                () => {
                    alert("Message sent successfully! 🚀");
                    form.current.reset();
                },
                (error) => {
                    alert("Failed to send message: " + error.text);
                    console.error(error.text);
                }
            );
    };

    const contactInfo = [
        {
            icon: <Mail className="text-blue-500" size={24} />,
            title: "Email",
            value: "pavanmg9964@gmail.com",
            link: "mailto:pavanmg9964@gmail.com",
        },
        {
            icon: <Phone className="text-green-500" size={24} />,
            title: "Phone",
            value: "+91 6360270028",
            link: "tel:+916360270028",
        },
        {
            icon: <MapPin className="text-red-500" size={24} />,
            title: "Location",
            value: "Bengaluru, India",
            link: null,
        },
    ];

    return (
        <section id="contact" className="w-full bg-slate-950 text-gray-200 py-24">
            <div className="container-custom max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 gap-16 items-start"
                >
                    {/* Left Column: Contact Info */}
                    <div className="space-y-10">
                        <div>
                            <h2 className="text-4xl font-bold text-white mb-6">
                                Get in Touch 📬
                            </h2>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                Interested in hiring me for an internship or project? I’d love to
                                hear from you. Fill out the form or reach out directly.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {contactInfo.map((item, index) => (
                                <div key={index} className="flex items-center gap-5 p-4 bg-slate-900/50 rounded-xl border border-slate-800 hover:border-blue-500/50 transition duration-300">
                                    <div className="p-3 bg-slate-800 rounded-lg">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 font-medium">{item.title}</p>
                                        {item.link ? (
                                            <a
                                                href={item.link}
                                                className="text-lg font-semibold text-white hover:text-blue-400 transition"
                                            >
                                                {item.value}
                                            </a>
                                        ) : (
                                            <p className="text-lg font-semibold text-white">{item.value}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Social links & Resume */}
                        <div className="flex gap-4 pt-4 flex-wrap">
                            <a
                                href="https://github.com/pavanpavumg"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-2 p-3 bg-slate-900 rounded-lg hover:bg-slate-800 hover:text-blue-500 transition border border-slate-800"
                            >
                                <Github size={24} />
                                <span className="font-semibold">GitHub</span>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/pavan-m-g"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-2 p-3 bg-slate-900 rounded-lg hover:bg-slate-800 hover:text-blue-500 transition border border-slate-800"
                            >
                                <Linkedin size={24} />
                                <span className="font-semibold">LinkedIn</span>
                            </a>
                            <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 p-3 bg-blue-600 rounded-lg hover:bg-blue-700 text-white transition shadow-lg shadow-blue-600/20"
                            >
                                <FileText size={24} />
                                <span className="font-semibold">Resume</span>
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-slate-900 p-8 md:p-10 rounded-2xl border border-slate-800 shadow-xl"
                    >
                        <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                            Send a Message <Send size={20} className="text-blue-500" />
                        </h3>
                        <form ref={form} onSubmit={sendEmail} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="John Doe"
                                    required
                                    className="w-full p-4 bg-slate-950 text-white rounded-lg border border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition placeholder-gray-600"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="john@example.com"
                                    required
                                    className="w-full p-4 bg-slate-950 text-white rounded-lg border border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition placeholder-gray-600"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    rows="5"
                                    placeholder="Tell me about your project..."
                                    required
                                    className="w-full p-4 bg-slate-950 text-white rounded-lg border border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition placeholder-gray-600 resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-bold text-lg transition shadow-lg shadow-blue-600/20 active:scale-[0.98]"
                            >
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
