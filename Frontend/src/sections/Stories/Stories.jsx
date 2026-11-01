import StoriesHeader from "./StoriesHeader";
import StoryStats from "./StoryStats";
import StoriesGrid from "./StoriesGrid";

function Stories() {
  return (
    <section
      id="stories"
      className="
        relative
        overflow-hidden
        bg-black
        py-24
        px-6
        lg:px-12
      "
    >
      {/* Left Top Glow */}
      <div
                className="
          absolute
          -top-24
          -left-24
          h-72
          w-72
          rounded-full
          bg-blue-100
          blur-[120px]
          opacity-50
        "
            />   

      

      <div className="max-w-7xl mx-auto">

        {/* Top Section */}
        <div
          className="
            grid
            gap-14
            lg:grid-cols-2
            items-center
          "
        >
          <StoriesHeader />

          <StoryStats />
        </div>

        {/* Stories */}
        <div className="mt-20">
          <StoriesGrid />
        </div>

      </div>
    </section>
  );
}

export default Stories;