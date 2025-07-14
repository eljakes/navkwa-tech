import React from "react";

function App() {
  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-2xl font-extrabold text-blue-600">Navkwa Tech</h1>
          <nav className="space-x-6 text-sm font-medium">
            <a href="#services" className="hover:text-blue-600">Services</a>
            <a href="#portfolio" className="hover:text-blue-600">Projects</a>
            <a href="#process" className="hover:text-blue-600">Process</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-blue-50 py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-blue-600 mb-6">
            Future-Ready Software & IT Solutions
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 mb-8">
            We help businesses thrive with world-class web, mobile, and enterprise systems.
          </p>
          <a
            href="#contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold shadow hover:bg-blue-700 transition"
          >
            Start a Project
          </a>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-12">What We Offer</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
            {[
              {
                title: "Website Development",
                desc: "Custom websites, portals, and web platforms tailored for your business goals.",
              },
              {
                title: "Mobile App Development",
                desc: "iOS & Android apps designed for performance, engagement, and user experience.",
              },
              {
                title: "USSD & SMS Systems",
                desc: "Reach customers offline through mobile-based menus & SMS platforms.",
              },
              {
                title: "ERP & Internal Tools",
                desc: "Power your business with automation, analytics, and centralized management.",
              },
              {
                title: "IT Support & Consulting",
                desc: "Tech advice, infrastructure setup, maintenance, and optimization services.",
              },
              {
                title: "Custom Software Projects",
                desc: "Got an idea? We'll help you design, build, and launch it successfully.",
              },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
                <h4 className="text-xl font-semibold mb-2 text-blue-700">{title}</h4>
                <p className="text-gray-700">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="bg-gray-100 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-12">Featured Project</h3>
          <div className="bg-white rounded-xl shadow p-6 text-left">
            <h4 className="text-2xl font-bold text-blue-600 mb-2">FixAm Mobile App</h4>
            <p className="text-gray-700 mb-4">
              A modern marketplace app connecting clients to artisans for repairs, services, and purchases. Built using React Native, Firebase, and advanced UX techniques.
            </p>
            <a
              href="#"
              className="inline-block text-blue-600 font-semibold hover:underline"
            >
              Learn more
            </a>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-12">How We Work</h3>
          <ol className="space-y-6 text-left">
            {[
              "Discover: We meet and understand your goals.",
              "Design: Our team maps out a beautiful, functional solution.",
              "Develop: We build your software using best practices.",
              "Deploy: Your product goes live — secure, fast, and polished.",
              "Support: We help you maintain and grow."
            ].map((step, i) => (
              <li key={i} className="relative pl-10">
                <span className="absolute left-0 top-0 h-6 w-6 rounded-full bg-blue-600 text-white text-sm flex items-center justify-center">
                  {i + 1}
                </span>
                <span className="text-gray-800 font-medium">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-blue-600 text-white py-20 px-6">
        <div className="max-w-xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">Let's Work Together</h3>
          <p className="mb-6">Reach out to us for a quote, consultation, or partnership inquiry.</p>
          <form className="space-y-4 text-left">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-md text-black"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-md text-black"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-3 rounded-md text-black h-32"
            />
            <button
              type="submit"
              className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-md shadow hover:bg-gray-100"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-6 text-center text-sm">
        © {new Date().getFullYear()} Navkwa Group Ltd. All rights reserved.
      </footer>
    </div>
  );
}

export default App;