import { Sparkles } from "lucide-react";

function AnalyzeHeader() {
  return (
    <div className="text-center max-w-3xl mx-auto">

      {/* Badge */}

      <div
        className="
        inline-flex
        items-center
        gap-2
        rounded-full
        border
        border-orange-500/40
        bg-orange-500/10
        px-5
        py-2
        text-sm
        text-orange-400
        font-medium
        "
      >
        <Sparkles size={16} />

        AI Resume Analysis

      </div>

      {/* Heading */}

      <h2
        className="
        mt-6
        text-4xl
        md:text-5xl
        font-bold
        leading-tight
        "
      >
        Analyze Your Resume
        <br />

        <span className="block bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
          Like a Professional Recruiter
        </span>

      </h2>

      {/* Description */}

      <p
        className="
        mt-6
        text-gray-400
        text-lg
        leading-8
        "
      >
        Upload your resume and receive an instant ATS score,
        missing skills analysis, keyword optimization,
        AI-powered recommendations, and job matching insights—
        all in seconds.
      </p>

    </div>
  );
}

export default AnalyzeHeader;