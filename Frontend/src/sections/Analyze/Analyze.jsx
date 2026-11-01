import { useState } from "react";

import AnalyzeHeader from "./AnalyzeHeader";
import UploadCard from "./UploadCard";
import RoleSelector from "./RoleSelector";
import AnalyzeButton from "./AnalyzeButton";

import AnalyzeFeatures from "./AnalyzeFeatures";
import AnalysisResult from "./AnalysisResult";

function Analyze() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [analysisResult, setAnalysisResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedRole, setSelectedRole] = useState("Frontend Developer");

  const handleAnalyze = async () => {
    // Check resume
    if (!selectedFile) {
      setError("Please upload your resume first.");
      return;
    }

    // Check role
    if (!selectedRole) {
      setError("Please select a target role.");
      return;
    }

    setLoading(true);
    setError("");
    setAnalysisResult(null);

    try {
      // Create FormData only when Analyze is clicked
      const formData = new FormData();

      formData.append("resume", selectedFile);

      // IMPORTANT:
     
      formData.append("role", selectedRole);

      const response = await fetch(
        "http://127.0.0.1:8000/api/analyze/",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      console.log("Uploaded resume:", selectedFile.name);
      console.log("Selected role:", selectedRole);
      console.log("API response:", JSON.stringify(data, null, 2));


      if (!response.ok) {
        throw new Error(
          data.error || "Resume analysis failed."
        );
      }

      // Save backend result
      setAnalysisResult(data);

    } catch (error) {
      console.error("Analysis Error:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="analyze"
      className="
        relative
        overflow-hidden
        bg-black
        text-white
        py-24
        px-6
      "
    >
      {/* Background Glow */}
      <div
        className="
          absolute
          top-0
          left-1/2
          h-[350px]
          w-[350px]
          -translate-x-1/2
          rounded-full
          bg-blue-100/20
          blur-[120px]
          pointer-events-none
        "
      />

      <div className="max-w-7xl mx-auto">

        <AnalyzeHeader />

        <div className="mt-16 grid lg:grid-cols-2 gap-12 items-start">

          {/* LEFT SIDE */}
          <div className="space-y-6">

            <UploadCard
              selectedFile={selectedFile}
              onFileSelect={setSelectedFile}
            />

            <RoleSelector
              selectedRole={selectedRole}
              onRoleChange={setSelectedRole}
            />

            <AnalyzeButton
              onAnalyze={handleAnalyze}
              loading={loading}
            />

            {/* Error */}
            {error && (
              <div
                className="
                  mt-4
                  rounded-lg
                  border
                  border-red-500/20
                  bg-red-500/10
                  px-4
                  py-3
                  text-sm
                  text-red-400
                "
              >
                {error}
              </div>
            )}

          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-8">

            

            {/* Actual result */}
            {analysisResult && (
              <AnalysisResult
                result={analysisResult}
              />
            )}

          </div>

        </div>

        <AnalyzeFeatures />

      </div>
    </section>
  );
}

export default Analyze;