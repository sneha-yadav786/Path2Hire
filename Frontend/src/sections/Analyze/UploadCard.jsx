
import { useRef, useState } from "react";
import { UploadCloud, FileText } from "lucide-react";

function UploadCard({ selectedFile, onFileSelect }) {
  
  const [error, setError] = useState("");

  const fileInputRef = useRef(null);

  const handleBrowseClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    // Clear previous error
    setError("");

    // Check PDF
    if (file.type !== "application/pdf") {
      setError("Please select a PDF file.");
      onFileSelect(null);

      // Reset input
      event.target.value = "";
      return;
    }

    // Check 5MB
    if (file.size > 5 * 1024 * 1024) {
      setError("File size must be less than 5MB.");
      onFileSelect(null);

      // Reset input
      event.target.value = "";
      return;
    }

    // Valid PDF
    onFileSelect(file);
    setError("");

    console.log("Selected Resume:", file);
    console.log("File Name:", file.name);
    console.log("File Size:", file.size);
    console.log("File Type:", file.type);
  };

  return (
    <div className="relative group rounded-3xl">

      {/* Glow */}
      <div
        className="
          absolute inset-0
          rounded-3xl
          bg-orange-500/5
          opacity-0
          group-hover:opacity-100
          transition-opacity duration-300
        "
      />

      <div className="relative flex flex-col items-center text-center">

        {/* Upload Icon */}
        <div
          className="
            h-20 w-20
            rounded-2xl
            bg-orange-500/10
            flex items-center justify-center
            text-orange-500
            mb-6
          "
        >
          <UploadCloud size={40} />
        </div>

        {/* Title */}
        <h3 className="text-2xl font-semibold">
          Upload Resume
        </h3>

        {/* Description */}
        <p className="text-gray-400 mt-3 leading-7 max-w-sm">
          Upload your resume in PDF format to analyze your
          skills, experience and ATS compatibility.
        </p>

        {/* Hidden File Input */}
        <input
          ref={fileInputRef}
          type="file"
          accept="application/pdf,.pdf"
          onChange={handleFileChange}
          className="hidden"
        />

        {/* Browse Button */}
        <button
          type="button"
          onClick={handleBrowseClick}
          className="
            mt-8
            px-6 py-3
            rounded-xl
            bg-orange-500
            hover:bg-orange-400
            transition
            font-medium
            text-black
          "
        >
          Browse PDF
        </button>

        {/* Selected File */}
        {selectedFile && !error && (
          <div
            className="
              mt-5
              px-4 py-2
              rounded-lg
              bg-green-500/10
              border border-green-500/20
              text-green-400
              text-sm
              break-all
            "
          >
            ✓ {selectedFile.name}
          </div>
        )}

        {/* Error */}
        {error && (
          <div
            className="
              mt-5
              px-4 py-2
              rounded-lg
              bg-red-500/10
              border border-red-500/20
              text-red-400
              text-sm
            "
          >
            {error}
          </div>
        )}

        {/* Footer */}
        <div
          className="
            flex items-center gap-3
            mt-8
            text-sm text-gray-500
          "
        >
          <FileText size={16} />

          <span>PDF only • Maximum 5MB</span>
        </div>

      </div>
    </div>
  );
}

export default UploadCard;
