export default function AdmissionCTA() {
  return (
    <section className="py-24 bg-green-900 text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Join the Chegato Family
        </h2>

        <p className="max-w-3xl mx-auto text-lg text-green-100 mb-10">
          Applications are now open for prospective students.
          Become part of a tradition of academic excellence,
          discipline and leadership.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <button className="bg-yellow-600 hover:bg-yellow-700 px-8 py-4 rounded-lg font-semibold transition">
            Apply Online
          </button>

          <button className="border-2 border-white hover:bg-white hover:text-green-900 px-8 py-4 rounded-lg font-semibold transition">
            Download Prospectus
          </button>
        </div>
      </div>
    </section>
  );
}