import { ArrowRight, Sparkles } from "lucide-react";
import HeroDashboard from "./HeroDashboard";
import HeroBackground from "./HeroBackground";

function Hero() {
  return (
    <section  id="home" className="relative overflow-hidden bg-black py-10">
      {/* Background Effects */}
      <HeroBackground />

      <div className="mx-auto flex min-h-screen max-w-7xl items-center px-6 py-20 lg:px-8">

        {/* Left Side */}
        <div className="w-full lg:w-1/2">

          {/* Badge */}

          <div
            className="
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-orange-300
            bg-zinc-900
            px-4
            py-2
            text-sm
            font-medium
            text-white
            "
          >
          

            AI Powered Resume Analysis
          </div>

          {/* Heading */}

          <h1
            className="
            mt-8
            text-3xl
            font-bold
            leading-tight
            tracking-tight
            text-white
            lg:text-5xl
            "
          >
            Beat ATS Filters

            <span className="block bg-gradient-to-r from-orange-400  to-amber-400 bg-clip-text text-transparent">
               Impress Recruiters
            </span>
          </h1>

          {/* Description */}

          <p
            className="
            mt-8
            max-w-xl
            text-lg
            leading-8
            text-gray-400
            "
          >
            Upload your resume, compare it with any Job Description,
            discover missing skills, improve ATS score, and receive
            AI-powered recruiter suggestions to land more interviews.
          </p>

          {/* Buttons */}

          <div className="mt-10 flex flex-wrap gap-4">

            <button
              className="
              flex
              items-center
              gap-2
              rounded-xl
              bg-orange-400
              px-7
              py-4
              text-white
              font-semibold
              transition
              hover:bg-orange-500
              "
            >
              Get Started

              <ArrowRight size={18} />
            </button>

            
           
          </div>

          {/* Bottom Features */}

          <div className="mt-12 flex flex-wrap gap-6 text-sm font-medium text-gray-500">

            <span>✓ ATS Score</span>

            <span>✓ JD Matching</span>

            <span>✓ AI Suggestions</span>

          </div>

        </div>

        {/* Right Side */}

        <div className="hidden lg:flex w-1/2 justify-end">
          <HeroDashboard />
        </div>

      </div>

    </section>
  );
}

export default Hero;