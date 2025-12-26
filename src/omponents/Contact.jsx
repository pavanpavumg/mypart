export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <p className="mb-6">
          Interested in hiring me for an internship or project? Let’s connect.
        </p>

        <div className="space-y-2">
          <p>📧 pavanmg99649@gmail.com</p>
          <p>📞 +91 6360270028</p>
          <p>📍 Bengaluru, India</p>
        </div>

        <div className="flex justify-center gap-6 mt-6">
          <a
            href="https://github.com/yourusername"
            className="text-blue-600 font-semibold"
            target="_blank"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            className="text-blue-600 font-semibold"
            target="_blank"
          >
            LinkedIn
          </a>
          <a
            href="/Pavan_Resume.pdf"
            className="text-blue-600 font-semibold"
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}
