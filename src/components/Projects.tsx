import { Github, ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "FlowOps",
      subtitle: "Workflow & Inventory Management System",
      tech: "Node.js · MongoDB · Kafka · Redis · Docker",
      tags: ["Backend", "Distributed Systems"],
      image: null,
      github: "https://github.com/mk-singhal/flowops-platform", // optional
      live: null, // internal project → no live link
      points: [
        "Designed a scalable backend system for inventory and workflow management",
        "Implemented event-driven architecture using Kafka",
        "Improved performance and reduced database load using Redis caching",
        "Dockerized services for consistent deployments",
      ],
    },
    {
      title: "Shatranj",
      subtitle: "2-Player Chess Game (HLD & LLD Focused)",
      tech: "OOP · HLD · LLD · Design Patterns",
      tags: ["HLD", "LLD", "OOP"],
      image: null,
      github: "https://github.com/mk-singhal/shatranj",
      live: null,
      points: [
        "Designed a 2-player offline chess application with strong HLD and LLD focus",
        "Modeled core entities like Board, Piece, Player, Move, and GameEngine",
        "Applied OOP principles for clean separation of concerns",
        "Designed for extensibility to support AI or online play",
      ],
    },
    {
      title: "Supreme Trading",
      subtitle: "Business Portfolio & Inventory Website",
      tech: "HTML · CSS · JavaScript",
      tags: ["Frontend", "Business"],
      image: "supreme-trading.png",
      // github: "https://github.com/mk-singhal/supreme-trading",
      live: "https://supremetrading.store",
      points: [
        "Built a static website to showcase products and inventory",
        "Designed a clean and responsive UI for product listings",
        "Improved digital presence for a small trading business",
      ],
    },
  ];

  return (
    <section id="projects" className="px-8 py-24">
      <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className={`group relative
              ${index === 2 ? "md:col-span-2 md:flex md:justify-center" : ""}
            `}
          >
            <div
              className={`rounded-2xl bg-white/70 p-6 shadow-sm ring-1 ring-gray-200
                transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-gray-300
                ${index === 2 ? "w-full md:max-w-[calc(50%-1rem)]" : ""}`}
            >
              {/* Image */}
              {project.image && (
                <div className="mb-4 overflow-hidden rounded-xl bg-gray-50 p-2">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full"
                  />
                </div>
              )}

              <h3 className="text-lg font-medium leading-tight">
                {project.title}
                <span className="mt-1 block text-sm font-normal text-gray-500">
                  {project.subtitle}
                </span>
              </h3>

              <div className="mt-3 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-gray-100 px-3 py-0.5 text-xs text-gray-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="mt-3 text-xs uppercase tracking-wide text-gray-400">
                {project.tech}
              </p>

              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                {project.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gray-400" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Links */}
              {(project.github || project.live) && (
                <div className="mt-5 flex gap-4 text-sm">
                  {(project.github || project.live) && (
                    <div className="mt-5 flex gap-5 text-sm">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/link inline-flex items-center gap-1.5 text-gray-600 hover:text-gray-900"
                        >
                          <Github
                            size={16}
                            className="opacity-70 group-hover/link:opacity-100"
                          />
                          <span className="underline-offset-4 group-hover/link:underline">
                            GitHub
                          </span>
                        </a>
                      )}

                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/link inline-flex items-center gap-1.5 text-gray-600 hover:text-gray-900"
                        >
                          <ExternalLink
                            size={16}
                            className="opacity-70 group-hover/link:opacity-100"
                          />
                          <span className="underline-offset-4 group-hover/link:underline">
                            Live
                          </span>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
