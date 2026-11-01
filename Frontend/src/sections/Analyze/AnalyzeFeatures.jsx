import { features } from "./analysisData";

function AnalyzeFeatures() {
  return (
    <div className="mt-24">

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {features.map((feature) => {

          const Icon = feature.icon;

          return (
            <div
              key={feature.title}
              className="
              group
              rounded-2xl
              border
              border-zinc-800
              bg-zinc-950
              p-6
              transition-all
              duration-300
              hover:border-orange-500
              hover:-translate-y-2
              hover:shadow-[0_0_30px_rgba(249,115,22,0.15)]
              "
            >

              {/* Icon */}

              <div
                className="
                mb-5
                h-14
                w-14
                rounded-xl
                bg-orange-500/10
                flex
                items-center
                justify-center
                text-orange-500
                transition
                group-hover:bg-orange-500
                group-hover:text-white
                "
              >
                <Icon size={28} />
              </div>

              {/* Title */}

              <h3 className="text-xl font-semibold text-white">
                {feature.title}
              </h3>

              {/* Description */}

              <p className="mt-3 text-gray-400 leading-7">
                {feature.description}
              </p>

            </div>
          );
        })}

      </div>

    </div>
  );
}

export default AnalyzeFeatures;