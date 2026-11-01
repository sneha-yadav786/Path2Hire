import StoryCard from "./StoryCard";
import stories from "./storiesData";

function StoriesGrid() {
  return (
    <div>

      {/* Section Heading */}

      <div className="mb-12 text-center">

        <h3 className="text-3xl font-bold text-white">
          What Our Users Say
        </h3>

        <p className="mt-4 max-w-2xl mx-auto text-gray-400 leading-7">
          Real experiences from students and professionals
          who improved their resumes and increased interview
          opportunities using Resume Analyzer.
        </p>

      </div>

      {/* Cards */}

      <div
        className="
          grid
          gap-8
          md:grid-cols-2
          xl:grid-cols-3
        "
      >
        {stories.map((story) => (
          <StoryCard
            key={story.id}
            story={story}
          />
        ))}
      </div>

    </div>
  );
}

export default StoriesGrid;