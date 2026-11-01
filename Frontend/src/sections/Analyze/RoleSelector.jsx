
import { BriefcaseBusiness, ChevronDown } from "lucide-react";

function RoleSelector({ selectedRole, onRoleChange }) {
  return (
    <div
      className="
        bg-zinc-950
        border
        border-zinc-800
        rounded-2xl
        p-6
        hover:border-orange-500/60
        transition-all
        duration-300
      "
    >
      {/* Label */}
      <label
        htmlFor="targetRole"
        className="
          text-sm
          text-gray-400
          mb-3
          flex
          items-center
          gap-2
        "
      >
        <BriefcaseBusiness size={16} />
        Select Target Role
      </label>

      {/* Select */}
      <div className="relative">
        <select
          id="targetRole"
          value={selectedRole}
          onChange={(e) => onRoleChange(e.target.value)}
          className="
            w-full
            appearance-none
            bg-zinc-900
            border
            border-zinc-700
            rounded-xl
            px-5
            py-4
            text-white
            outline-none
            focus:border-orange-500
            transition
          "
        >
          <option value="Frontend Developer">
            Frontend Developer
          </option>

          <option value="Backend Developer">
            Backend Developer
          </option>

          <option value="Full Stack Developer">
            Full Stack Developer
          </option>

          <option value="Python Developer">
            Python Developer
          </option>

          <option value="Java Developer">
            Java Developer
          </option>

          <option value="Cloud Engineer">
            Cloud Engineer
          </option>

          <option value="DevOps Engineer">
            DevOps Engineer
          </option>

          <option value="Data Analyst">
            Data Analyst
          </option>

          <option value="UI / UX Designer">
            UI / UX Designer
          </option>

          <option value="AI / ML Engineer">
            AI / ML Engineer
          </option>
        </select>

        <ChevronDown
          size={18}
          className="
            absolute
            right-5
            top-1/2
            -translate-y-1/2
            text-gray-400
            pointer-events-none
          "
        />
      </div>
    </div>
  );
}

export default RoleSelector;
