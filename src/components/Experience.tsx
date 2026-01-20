import Image from "next/image";
import { Highlight } from "@/utilities/highlight";
import { LINKS } from "@/utilities/constants";

export default function Experience() {
  return (
    <section id="experience" className="bg-white pt-16 pb-20">
      <div className="container mx-auto px-8">
        {/* Section heading */}
        <div className="mb-12">
          <p className="mb-2 text-sm font-medium uppercase tracking-wide text-gray-500">
            Experience
          </p>
          <h2 className="text-3xl font-bold text-gray-900">
            Where I&apos;ve worked
          </h2>
        </div>

        {/* Timeline */}
        <div className="space-y-16 md:border-l md:border-gray-200 md:pl-6">
          {/* Oracle */}
          <div className="relative">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <a
                href={LINKS.ORACLE}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:underline underline-offset-4"
              >
                <Image
                  src="/oracle_logo.jpg"
                  alt="Oracle logo"
                  width={28}
                  height={28}
                  className="opacity-100"
                />
                <h3 className="text-lg font-semibold text-gray-900">
                  Associate Consultant - Oracle
                </h3>
              </a>

              <span className="text-sm text-gray-500">
                Jul 2023 – Present · <span className="italic">2 yr 6 mos</span>
              </span>
            </div>

            <p className="mt-2 text-sm text-gray-600 max-w-3xl">
              Part of the core product team developing a CRM platform for
              telecom companies, working closely with clients, product managers,
              and internal teams.
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-700 max-w-3xl">
              <li>
                Part of the core product team developing a{" "}
                <Highlight>CRM</Highlight> software for telecom companies.
              </li>

              <li>
                Engaged in <Highlight>client demos</Highlight>, contributing to
                a <Highlight>60–70%</Highlight> conversion rate by customizing
                and showcasing tailored solutions.
              </li>

              <li>
                Developed new features and{" "}
                <Highlight>customized existing ones</Highlight> to meet
                client-specific requirements.
              </li>

              <li>
                Worked across the{" "}
                <Highlight>full development lifecycle</Highlight>, handling{" "}
                <Highlight>frontend</Highlight> and{" "}
                <Highlight>backend</Highlight> tasks from implementation to
                delivery and post-release support.
              </li>

              <li>
                Led the <Highlight>migration</Highlight> of the application from{" "}
                <Highlight>PHP</Highlight> to <Highlight>Node.js</Highlight>,
                significantly improving <Highlight>performance</Highlight> and
                reducing latency. Optimized request handling, reducing API
                response time by <Highlight>60%</Highlight> and increasing
                concurrent request capacity by <Highlight>3×</Highlight>.
              </li>

              <li>
                Implemented <Highlight>encryption</Highlight>,{" "}
                <Highlight>obfuscation</Highlight>, and{" "}
                <Highlight>minification</Highlight> techniques to secure the
                application’s business logic.
              </li>

              <li>
                Enhanced product flexibility by developing a{" "}
                <Highlight>pick-and-place</Highlight> functionality that enabled{" "}
                <Highlight>modular configurations</Highlight>, reducing
                development hours by <Highlight>40%</Highlight> and lowering
                customization costs for new clients.
              </li>
            </ul>
          </div>

          {/* Internship */}
          <div className="relative">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <a
                href={LINKS.E_YANTRA}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:underline underline-offset-4"
              >
                <Image
                  src="/e_yantra_logo.jpg"
                  alt="IIT Bombay logo"
                  width={28}
                  height={28}
                  className="opacity-80"
                />
                <h3 className="text-lg font-semibold text-gray-900">
                  Web Development Intern - e-Yantra, IIT Bombay
                </h3>
              </a>

              <span className="text-sm text-gray-500">Jun 2022 – Jul 2022</span>
            </div>

            <p className="mt-2 text-sm text-gray-600 max-w-3xl">
              Worked on a data-driven analytics platform for a large-scale
              national robotics competition.
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-700 max-w-3xl">
              <li>
                Developed a <Highlight>Django</Highlight>-based analytics
                dashboard to visualize competition data and participant
                performance metrics.
              </li>

              <li>
                Designed backend logic to aggregate, process, and serve{" "}
                <Highlight>real-time</Highlight> competition statistics using{" "}
                <Highlight>Django</Highlight> views and{" "}
                <Highlight>ORM</Highlight>.
              </li>

              <li>
                Implemented interactive UI components to present insights
                clearly to organizers and mentors for evaluation and
                decision-making.
              </li>

              <li>
                Collaborated with the team to analyze competition requirements
                and translate them into <Highlight>scalable</Highlight>{" "}
                dashboard features.
              </li>

              <li>
                Improved data accessibility and reporting efficiency for a{" "}
                <Highlight>national-level</Highlight> robotics competition.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
