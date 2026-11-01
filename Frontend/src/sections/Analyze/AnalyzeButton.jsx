
import { ArrowRight, Sparkles } from "lucide-react";

function AnalyzeButton({ onAnalyze, loading }) {
  return (
    <button
      onClick={onAnalyze}
      disabled={loading}
      className="
        group
        relative
        w-full
        overflow-hidden
        rounded-2xl
        bg-gradient-to-r
        from-orange-500
        to-amber-500
        px-8
        py-5
        text-lg
        font-semibold
        text-white
        transition-all
        duration-300
        hover:shadow-[0_0_35px_rgba(249,115,22,0.35)]
        hover:-translate-y-1
        active:scale-[0.98]
        disabled:cursor-not-allowed
        disabled:opacity-60
      "
    >
      {/* Glow */}
      <div
        className="
          absolute
          inset-0
          bg-white/10
          opacity-0
          group-hover:opacity-100
          transition
          duration-300
        "
      />

      <span className="relative flex items-center justify-center gap-3">

        <Sparkles size={20} />

        {loading ? "Analyzing..." : "Analyze Resume"}

        <ArrowRight
          size={20}
          className="
            transition-transform
            duration-300
            group-hover:translate-x-1
          "
        />

      </span>
    </button>
  );
}

export default AnalyzeButton;
