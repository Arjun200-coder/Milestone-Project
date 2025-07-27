

const AboutUsPage = () => {
  return (
    <section className="min-h-screen px-6 md:px-20 py-16 bg-gray-50">
      <div className="flex flex-col lg:flex-row items-center gap-10 mb-16">
        <img
          src="https://static.toiimg.com/thumb/imgsize-23456,msid-92037952,width-600,resizemode-4/92037952.jpg"
          alt="My Photo"
          className="w-40 h-40 rounded-full shadow-lg object-cover"
        />
        <div className="text-center lg:text-left">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Hi, I'm Arjun Kumar</h2>
          <p className="text-gray-600 text-lg">
            A passionate Full Stack Developer focused on building responsive web apps,
            clean UI, and seamless user experience. I love solving real-world problems
            through elegant code and modern technologies.
          </p>
          <a
            href="/resume.pdf"
            download
            className="inline-block mt-4 px-6 py-2 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition"
          >
            Download Resume
          </a>
        </div>
      </div>

      <div className="mb-16">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Tech Skills</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="bg-white p-4 rounded shadow">HTML</div>
          <div className="bg-white p-4 rounded shadow">CSS</div>
          <div className="bg-white p-4 rounded shadow">JavaScript</div>
          <div className="bg-white p-4 rounded shadow">React</div>
          <div className="bg-white p-4 rounded shadow">Tailwind CSS</div>
          <div className="bg-white p-4 rounded shadow">Node.js</div>
          <div className="bg-white p-4 rounded shadow">MongoDB</div>
          <div className="bg-white p-4 rounded shadow">Git & GitHub</div>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">My Journey</h3>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow">
            <h4 className="font-bold text-xl mb-1">Coding Bootcamp</h4>
            <p className="text-sm text-gray-500 mb-2">2024 – Present</p>
            <p className="text-gray-600">Learning advanced web development including React, Tailwind, Git, and APIs.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h4 className="font-bold text-xl mb-1">UP Board Student – 12th Grade</h4>
            <p className="text-sm text-gray-500 mb-2">Science Stream – Physics, Math</p>
            <p className="text-gray-600">Focused on foundational knowledge of Physics and Mathematics with passion for coding.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsPage;
