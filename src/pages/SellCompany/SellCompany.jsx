

const SellCompanyPage = () => {
  return (
    <section className="bg-gray-50 min-h-screen px-6 md:px-20 py-16">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Sell Your Mortgage Company With Confidence
        </h1>
        <p className="text-gray-600 text-lg">
          We make it easy for mortgage company owners to exit smoothly, maximize value, and find the right buyer who continues their legacy.
        </p>
        <a
          href="/contact"
          className="mt-6 inline-block px-6 py-3 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition"
        >
          Get a Free Consultation
        </a>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-20">
        {[
          {
            title: "Confidential Process",
            desc: "Your business details are safe with us — we ensure 100% confidentiality during evaluation & deal making.",
          },
          {
            title: "Maximize Company Value",
            desc: "Get fair valuation and better negotiation through our expert advisors.",
          },
          {
            title: "Qualified Buyers Network",
            desc: "We have a large pool of vetted buyers interested in acquiring mortgage companies.",
          },
        ].map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">How the Process Works</h2>
        <div className="grid md:grid-cols-4 gap-6 text-center">
          {[
            "Book a Call",
            "Get Company Valuation",
            "Meet Buyers",
            "Close the Deal",
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
          Ready to Sell Your Company?
        </h3>
        <p className="text-gray-700 mb-6">
          Let our experts help you make the transition smooth, profitable, and stress-free.
        </p>
        <a
          href="/contact"
          className="px-6 py-3 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition"
        >
          Contact Us Today
        </a>
      </div>
    </section>
  );
};

export default SellCompanyPage;
