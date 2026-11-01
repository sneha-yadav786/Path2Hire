import {
  CheckCircle2,
  Lightbulb,
  TrendingUp,
} from "lucide-react";


function AnalysisPreview() {
  return (
    <div
      className="
      relative
      rounded-3xl
      border
      border-zinc-800
      bg-zinc-950
      p-8
      overflow-hidden
      "
    >
      {/* Background Glow */}

      <div
        className="
        absolute
        -top-24
        -right-24
        h-52
        w-52
        rounded-full
        bg-orange-500/10
        blur-3xl
        "
      />

     
    </div>
  );
}

export default AnalysisPreview;