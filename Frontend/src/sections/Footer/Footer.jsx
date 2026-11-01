import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
  FaFileAlt,
  FaStar,
} from "react-icons/fa";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-black border-t border-gray-800 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-14">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center">
                <FaFileAlt size={22} />
              </div>

              <h2 className="text-2xl font-bold">
                Path<span className="text-orange-500">2</span>Hire
              </h2>
            </div>

            <p className="text-gray-400 text-sm leading-7 max-w-md">
              Build a stronger resume. Discover your potential. 
              Get one step closer to your dream career with 
              AI-powered resume analysis.
            </p>

            {/* AI Badge */}
            <div className="inline-flex items-center gap-2 mt-5 px-4 py-2 rounded-full border border-gray-800 bg-gray-900/60">
              
              <span className="text-sm text-gray-300">
                AI Powered Resume Analysis
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li>
                <a
                  href="#home"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#analyze"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                >
                  Analyze Resume
                </a>
              </li>

              <li>
                <a
                  href="#stories"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                >
                  Success Stories
                </a>
              </li>

              <li>
                <a
                  href="#feedback"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                >
                  Feedback
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-white font-semibold mb-5">
              Connect With Us
            </h3>

            <p className="text-gray-400 text-sm leading-6 mb-5">
              Have a question or suggestion? We'd love to hear from you.
            </p>

            <div className="flex items-center gap-3">

              {/* GitHub */}
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-orange-500 hover:border-orange-500 transition-all duration-300"
                aria-label="GitHub"
              >
                <FaGithub size={19} />
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-orange-500 hover:border-orange-500 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={19} />
              </a>

              {/* Email */}
              <a
                href="mailto:path2hire@gmail.com"
                className="w-10 h-10 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-orange-500 hover:border-orange-500 transition-all duration-300"
                aria-label="Email"
              >
                <FaEnvelope size={19} />
              </a>

            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-12 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">

            <p className="text-gray-500 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Path2Hire. All rights reserved.
            </p>

            <div className="flex items-center gap-6 text-sm">
              <a
                href="#"
                className="text-gray-500 hover:text-orange-500 transition-colors"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="text-gray-500 hover:text-orange-500 transition-colors"
              >
                Terms of Service
              </a>

              {/* Back to Top */}
              <button
                onClick={scrollToTop}
                className="w-9 h-9 rounded-lg bg-orange-500 hover:bg-orange-400 text-black flex items-center justify-center transition-all duration-300"
                aria-label="Back to top"
              >
                <FaArrowUp size={18} />
              </button>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;