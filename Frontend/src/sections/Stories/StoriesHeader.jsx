import { ArrowRight } from "lucide-react";

function StoriesHeader() {
  return (
    <div className="max-w-xl">

      {/* Badge */}
      <div
        className="
          inline-flex
          items-center
          rounded-full
          border
          border-orange-500/50
          px-4
          py-2
          text-sm
          font-medium
          text-orange-400
          mb-6
        "
      >
        Success Stories
      </div>

      {/* Heading */}

      <h2
        className="
          text-4xl
          md:text-5xl
          font-bold
          leading-tight
          tracking-tight
          text-white
        "
      >
        Trusted By
        <br />

        <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
          Thousands of
        </span>

        <br />

        Job Seekers
      </h2>

      {/* Description */}

      <p
        className="
          mt-6
          text-gray-400
          leading-8
          text-lg
        "
      >
        From students applying for internships to experienced
        professionals targeting top companies, Resume Analyzer
        has helped users improve ATS scores, identify missing
        skills, and build resumes that stand out in competitive
        hiring processes.
      </p>

      {/* Highlights */}

      <div className="mt-8 space-y-4">

        {[
          "Improved ATS scores with AI-driven analysis",
          "Personalized resume suggestions for every role",
          "Trusted by students, freshers, and professionals",
        ].map((item) => (
          <div
            key={item}
            className="flex items-center gap-3"
          >
            <div
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-lg
                bg-orange-500/10
                text-orange-400
              "
            >
              →
            </div>

            <p className="text-gray-300">
              {item}
            </p>
          </div>
        ))}

      </div>

      {/* Button */}

      <button
        className="
          mt-10
          inline-flex
          items-center
          gap-2
          rounded-xl
          bg-orange-500
          px-6
          py-3
          font-medium
          text-white
          transition-all
          duration-300
          hover:bg-orange-400
          hover:shadow-lg
          hover:shadow-orange-500/30
        "
      >
        View Success Stories

        <ArrowRight size={18} />
      </button>

    </div>
  );
}

export default StoriesHeader;