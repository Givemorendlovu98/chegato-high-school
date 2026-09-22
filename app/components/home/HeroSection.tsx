export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `
          linear-gradient(
            rgba(0, 45, 25, 0.75),
            rgba(0, 45, 25, 0.75)
          ),
          url('/images/hero-campus.png')
        `,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 min-h-screen flex items-center">
        <div className="max-w-3xl text-white">
          <div className="mb-4">
            <span className="text-yellow-400 uppercase tracking-widest">
              Mberengwa, Zimbabwe
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Excellence Through Education
          </h1>

          <p className="text-lg md:text-xl text-gray-100 mb-8">
            Building future leaders through quality education,
            discipline, innovation and character development.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-yellow-600 hover:bg-yellow-700 px-8 py-4 rounded-lg font-semibold transition">
              Apply Now
            </button>

            <button className="border-2 border-white hover:bg-white hover:text-green-900 px-8 py-4 rounded-lg font-semibold transition">
              Explore Campus
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}