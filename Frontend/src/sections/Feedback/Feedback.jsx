import FeedbackContent from "./FeedbackContent";
import FeedbackForm from "./FeedbackForm";

function Feedback() {
  return (
    <section
      id="feedback"
      className="relative overflow-hidden bg-black py-24"
    >
      {/* Glow */}
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-orange-500/10 blur-[140px]" />
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-blue-500/10 blur-[140px]" />

      <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 lg:flex-row lg:justify-between">

        <FeedbackContent />

        <FeedbackForm />

      </div>
    </section>
  );
}

export default Feedback;