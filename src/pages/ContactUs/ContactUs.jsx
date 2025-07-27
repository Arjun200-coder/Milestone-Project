

const ContactUsPage = () => {
  return (
    <section className="min-h-screen bg-gray-100 px-6 md:px-20 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">Contact Us</h2>
        <p className="text-gray-600 mt-2">
          We'd love to hear from you! Fill out the form below and we'll get back to you shortly.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        <form className="bg-white w-full lg:w-2/3 p-8 rounded-xl shadow-lg space-y-6">
          <div className="flex flex-col md:flex-row gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            rows="6"
            placeholder="Your Message"
            className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-md font-medium transition"
          >
            Send Message
          </button>
        </form>

        <div className="w-full lg:w-1/3 bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
          <p className="text-gray-600 mb-4">
            You can also reach out to us directly through the information below.
          </p>
          <div className="space-y-4 text-gray-700 text-sm">
            <p><strong>Phone:</strong> +91 9876543210</p>
            <p><strong>Email:</strong> contact@milestone.com</p>
            <p><strong>Address:</strong> Saharanpur, Uttar Pradesh, India</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsPage;
