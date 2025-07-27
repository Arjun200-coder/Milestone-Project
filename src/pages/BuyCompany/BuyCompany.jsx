

const BuyCompanyPage = () => {
  return (
    <section className="min-h-screen px-6 md:px-20 py-16 bg-gray-50">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Buy a Mortgage Company</h1>
        <p className="text-gray-600 text-lg">
          Whether you're expanding or entering the market, we'll help you acquire the right mortgage company with full support.
        </p>
        <a
          href="/contact"
          className="mt-6 inline-block px-6 py-3 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition"
        >
          Book a Free Consultation
        </a>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-20">
        {[
          {
            title: "Ready-to-Operate Business",
            desc: "No need to start from scratch. Step into a functioning system with team & licenses in place.",
          },
          {
            title: "Faster Market Entry",
            desc: "Buying an existing company gives you instant presence and credibility in the mortgage market.",
          },
          {
            title: "Profit Potential",
            desc: "Established customer base and revenue streams can accelerate your ROI.",
          },
        ].map((item, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">How Buying Works</h2>
        <div className="grid md:grid-cols-4 gap-6 text-center">
          {[
            "Schedule Discovery Call",
            "Get Matching Listings",
            "Review & Due Diligence",
            "Close the Acquisition",
          ].map((step, i) => (
            <div key={i} className="bg-white p-5 rounded-lg shadow hover:shadow-lg transition">
              <div className="text-4xl font-bold text-blue-700 mb-2">{i + 1}</div>
              <p className="text-gray-700 font-medium">{step}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-blue-100 rounded-xl p-10 text-center max-w-3xl mx-auto">
        <h3 className="text-2xl font-bold mb-3 text-gray-800">
          Want to Buy a Mortgage Company?
        </h3>
        <p className="text-gray-700 mb-6">
          Let our acquisition experts help you find the right match and close the deal efficiently.
        </p>
        <a
          href="/contact"
          className="px-6 py-3 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition"
        >
          Contact Us Now
        </a>
      </div>
    </section>
  );
};

export default BuyCompanyPage;
