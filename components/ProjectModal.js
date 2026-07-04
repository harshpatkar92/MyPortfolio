"use client";

export default function ProjectModal({
  project,
  onClose,
}) {
  if (!project) return null;

  return (
    <div
      className="
        fixed
        inset-0
        bg-black/80
        z-[99999]
        flex
        items-center
        justify-center
        p-6
      "
      onClick={onClose}
    >
      <div
        className="
          bg-[#111]
          border
          border-[#00ff87]/20
          max-w-2xl
          w-full
          p-8
          relative
        "
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="
            absolute
            top-4
            right-4
            z-50
            text-4xl
            text-white
            hover:text-[#00ff87]
            transition
          "
        >
          ×
        </button>

        <h2
          className="
            text-5xl
            font-black
            text-[#00ff87]
            mb-6
          "
        >
          {project.title}
        </h2>

        <p
          className="
            text-gray-400
            leading-8
            text-lg
            mb-8
          "
        >
          {project.description}
        </p>

        <div className="flex flex-wrap gap-3">
          {project.tech.map((item, index) => (
            <span
              key={index}
              className="
                px-4
                py-2
                border
                border-[#00ff87]/20
                bg-[#00ff87]/10
                text-sm
              "
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}