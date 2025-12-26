export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center">
      <div>
        <h1 className="text-4xl md:text-6xl font-bold">
          Hi, I'm <span className="text-blue-600">Pavan M G</span>
        </h1>
        <p className="mt-4 text-xl">
          Full-Stack Developer | Python & Machine Learning Enthusiast
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <a href="#projects" className="bg-blue-600 text-white px-6 py-2 rounded">
            View Projects
          </a>
          <a href="/Pavan_Resume.pdf" className="border px-6 py-2 rounded">
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
