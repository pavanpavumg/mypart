export default function Projects() {
  return (
    <section id="projects" className="py-16 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="border p-4 rounded">
          <h3 className="font-semibold text-xl">
            AI-Driven Personalized Fitness Coach
          </h3>
          <p className="mt-2">
            Real-time pose detection using OpenCV & MediaPipe with workout form validation.
          </p>
          <p className="text-sm mt-1">Python | OpenCV | MediaPipe</p>
        </div>

        <div className="border p-4 rounded">
          <h3 className="font-semibold text-xl">
            Receipt & Bill Analyzer (OCR)
          </h3>
          <p className="mt-2">
            Upload receipts and extract structured data with spending analysis.
          </p>
          <p className="text-sm mt-1">Python | Streamlit | SQLite | OCR</p>
        </div>
      </div>
    </section>
  );
}
