import aboutPdf from '../assets/AboutMePDF/Dunn-Joseph-Behavioral-Report.pdf';

export default function About() {
  return (
    <section className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          About Me
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Learn more about my background and professional journey
        </p>
      </div>

      {/* PDF Viewer Container */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
        <div className="w-full" style={{ height: '800px' }}>
          <iframe
            src={aboutPdf}
            className="w-full h-full rounded-lg border border-gray-300"
            title="About Me PDF"
          />
        </div>

        {/* Download Link */}
        <div className="mt-4 text-center">
          <a
            href={aboutPdf}
            download="Dunn-Joseph-Behavioral-Report.pdf"
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            <span>📥</span>
            <span>Download PDF</span>
          </a>
        </div>
      </div>
    </section>
  );
}
