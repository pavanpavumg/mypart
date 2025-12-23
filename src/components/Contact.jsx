import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_bd9od0k", // Service ID provided by user
                "YOUR_TEMPLATE_ID", // TODO: Replace with your actual Template ID
                form.current,
                "YOUR_PUBLIC_KEY" // TODO: Replace with your actual Public Key
            )
            .then(
                () => {
                    alert("Message sent successfully!");
                    form.current.reset();
                },
                (error) => {
                    alert("Failed to send message: " + error.text);
                    console.error(error.text);
                }
            );
    };

    return (
        <section id="contact" className="w-full bg-slate-950 text-gray-200 py-20">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 gap-12 items-center"
                >
                    {/* Left Column: Contact Info */}
                    <div className="space-y-8">
                        <h2 className="text-3xl md:text-4xl font-semibold text-white">
                            Get in Touch
                        </h2>
                        <p className="text-gray-400 leading-relaxed">
                            Interested in hiring me for an internship or project? I’d love to
                            hear from you. Fill out the form or reach out directly.
                        </p>

                        <div className="space-y-4 text-gray-300">
                            <p className="flex items-center gap-3">
                                <span className="text-2xl">📧</span>
                                <a
                                    href="mailto:pavanmg9964@gmail.com"
                                    className="hover:text-blue-400 transition"
                                >
                                    pavanmg9964@gmail.com
                                </a>
                            </p>
                            <p className="flex items-center gap-3">
                                <span className="text-2xl">📞</span>
                                <span>+91 6360270028</span>
                            </p>
                            <p className="flex items-center gap-3">
                                <span className="text-2xl">📍</span>
                                <span>Bengaluru, India</span>
                            </p>
                        </div>

                        <div className="flex gap-6">
                            <a
                                href="https://github.com/pavanpavumg"
                                target="_blank"
                                rel="noreferrer"
                                className="text-white hover:text-blue-500 transition text-xl"
                            >
                                GitHub
                            </a>
                            <a
                                href="https://www.linkedin.com/in/pavan-m-g"
                                target="_blank"
                                rel="noreferrer"
                                className="text-white hover:text-blue-500 transition text-xl"
                            >
                                LinkedIn
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <form
                        ref={form}
                        onSubmit={sendEmail}
                        className="bg-slate-900 p-8 rounded-xl border border-slate-800 shadow-lg space-y-6"
                    >
                        <h3 className="text-2xl font-semibold text-white mb-2">
                            Send a Message
                        </h3>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name" // Matches {{name}} in template
                                placeholder="Your Name"
                                required
                                className="w-full p-3 bg-slate-800 text-white rounded border border-slate-700 focus:border-blue-500 outline-none transition"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email" // Matches {{email}} in template
                                placeholder="Your Email"
                                required
                                className="w-full p-3 bg-slate-800 text-white rounded border border-slate-700 focus:border-blue-500 outline-none transition"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">
                                Message
                            </label>
                            <textarea
                                name="message" // Matches {{message}} in template
                                rows="4"
                                placeholder="Your Message..."
                                required
                                className="w-full p-3 bg-slate-800 text-white rounded border border-slate-700 focus:border-blue-500 outline-none transition"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition shadow-lg shadow-blue-500/20"
                        >
                            Send Message
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
