import { Send } from "lucide-react";
import FeedbackInput from "./FeedbackInput";

function FeedbackForm() {
  return (
    <div className="w-full max-w-lg rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">

      <h3 className="mb-8 text-2xl font-bold text-white">
        Send Feedback
      </h3>

      <form className="space-y-5">

        <FeedbackInput
          label="Name"
          placeholder="Your name"
        />

        <FeedbackInput
          label="Email"
          type="email"
          placeholder="example@gmail.com"
        />

        {/* Rating */}

        <div>

          <label className="mb-3 block text-gray-300">

            Rating

          </label>

          <div className="flex gap-3">

            {[1,2,3,4,5].map((star)=>(
                <button
                key={star}
                type="button"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xl text-orange-400 transition hover:scale-105 hover:border-orange-400"
                >
                    ★
                </button>
            ))}

          </div>

        </div>

        <FeedbackInput
          label="Message"
          textarea
          placeholder="Write your feedback..."
        />

        <button
          className="flex w-full items-center justify-center gap-2 rounded-2xl bg-orange-500 py-4 font-semibold text-white transition hover:bg-orange-600"
        >
          Send Feedback
          <Send size={18} />
        </button>

      </form>

    </div>
  );
}

export default FeedbackForm;