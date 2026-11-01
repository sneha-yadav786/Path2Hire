
function AnalysisResult({ result }) {
  if (!result) {
    return null;
  }

  return (
    <div className="mt-10">

      {/* Heading */}
      <h2 className="text-2xl font-semibold">
        Resume Analysis
      </h2>

      {/* Result Card */}
      <div
        className="
          mt-6
          rounded-2xl
          border
          border-white/10
          bg-white/5
          p-6
          shadow-xl
        "
      >

        

        {/* Resume Match */}
        <div className="flex items-center justify-between border-b border-white/10 py-5">
          <span className="text-gray-400">
            Resume Match
          </span>

          <span className="text-lg font-medium text-white">
            {result.resume_match}%
          </span>
        </div>

        {/* Skills Found */}
        <div className="border-b border-white/10 py-5">
          <p className="text-gray-400">
            Skills Found
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            {result.found_skills?.map((skill, index) => (
              <span
                key={index}
                className="
                  rounded-full
                  border
                  border-green-500/20
                  bg-green-500/10
                  px-3
                  py-1
                  text-sm
                  text-green-400
                "
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Missing Skills */}
        <div className="border-b border-white/10 py-5">
          <p className="text-gray-400">
            Missing Skills
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            {result.missing_skills?.map((skill, index) => (
              <span
                key={index}
                className="
                  rounded-full
                  border
                  border-red-500/20
                  bg-red-500/10
                  px-3
                  py-1
                  text-sm
                  text-red-400
                "
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Recommendation */}
        <div className="pt-5">
          <p className="text-gray-400">
            Recommendation
          </p>

          <p className="mt-3 text-sm leading-6 text-gray-300">
            {result.recommendation}
          </p>
        </div>

      </div>

    </div>
  );
}

export default AnalysisResult;
