import { Quote, Star } from "lucide-react";

function StoryCard({ story }) {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-zinc-800
        bg-[#111111]
        p-8
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-orange-400
        hover:bg-[#151515]
        hover:shadow-2xl
        hover:shadow-orange-500/10
      "
    >
      {/* Top Glow */}
      <div
        className="
          absolute
          inset-x-0
          top-0
          h-1
          origin-left
          scale-x-0
          bg-gradient-to-r
          from-orange-500
          to-yellow-400
          transition-transform
          duration-300
          group-hover:scale-x-100
        "
      />

      {/* Quote Icon */}
      <div
        className="
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-xl
          bg-orange-500/10
          text-orange-400
        "
      >
        <Quote size={22} />
      </div>

      {/* Rating */}

      <div className="mt-6 flex gap-1">
        {[...Array(story.rating)].map((_, index) => (
          <Star
            key={index}
            size={16}
            className="fill-orange-400 text-orange-400"
          />
        ))}
      </div>

      {/* Review */}

      <p
        className="
          mt-6
          text-gray-300
          leading-8
        "
      >
        "{story.review}"
      </p>

      {/* User */}

      <div className="mt-8 flex items-center gap-4">

        {/* Avatar */}

        <div
          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-full
            bg-gradient-to-br
            from-orange-500
            to-yellow-500
            text-lg
            font-bold
            text-white
          "
        >
          {story.avatar}
        </div>

        <div>

          <h4 className="font-semibold text-white">
            {story.name}
          </h4>

          <p className="text-sm text-gray-400">
            {story.role}
          </p>

          <span className="text-xs text-orange-400">
            {story.company}
          </span>

        </div>

      </div>

    </div>
  );
}

export default StoryCard;