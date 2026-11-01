import {
  FileText,
  Target,
  Star,
  TrendingUp,
} from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    value: "95%",
    label: "ATS Analysis Accuracy",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    icon: FileText,
    value: "5000+",
    label: "Resumes Analyzed",
    color: "text-orange-400",
    bg: "bg-orange-500/10",
  },
  {
    icon: Target,
    value: "50+",
    label: "Supported Job Roles",
    color: "text-green-400",
    bg: "bg-green-500/10",
  },
  {
    icon: Star,
    value: "4.9★",
    label: "Average User Rating",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
  },
];

function StoryStats() {
  return (
    <div className="grid grid-cols-2 gap-6">

      {stats.map((item, index) => {
        const Icon = item.icon;

        return (
          <div
            key={index}
            className="
              group
              rounded-3xl
              border
              border-zinc-800
              bg-[#111111]
              p-7
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-orange-400
              hover:shadow-xl
              hover:shadow-orange-500/10
            "
          >
            <div
              className={`
                ${item.bg}
                ${item.color}
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-xl
              `}
            >
              <Icon size={22} />
            </div>

            <h3 className="mt-6 text-4xl font-bold text-white">
              {item.value}
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-400">
              {item.label}
            </p>
          </div>
        );
      })}

    </div>
  );
}

export default StoryStats;