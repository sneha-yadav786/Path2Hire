import { MessageSquare, ShieldCheck, Sparkles } from "lucide-react";
import { features } from "./feedbackData";

function FeedbackContent() {
  return (
    <div className="max-w-xl">

      <span className="rounded-full border border-orange-500 px-4 py-2 text-xs font-semibold text-orange-400">
        User Feedback
      </span>

      <h2 className="mt-8 text-5xl font-bold leading-tight text-white">

        We'd Love
        <br />

        <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
          Your Feedback
        </span>

      </h2>

      <p className="mt-6 leading-8 text-gray-400">

        Help us improve Resume Analyzer by sharing your
        experience. Your feedback helps us build better AI
        powered tools for students and professionals.

      </p>

      <div className="mt-10 space-y-5">

        {features.map((item) => (
          <div
            key={item.title}
            className="flex items-center gap-4"
          >
            <div className="rounded-xl bg-white/5 p-3">

              <item.icon className="text-orange-400" />

            </div>

            <div>

              <h4 className="text-white">

                {item.title}

              </h4>

              <p className="text-sm text-gray-400">

                {item.description}

              </p>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default FeedbackContent;