import Image from "next/image";

const topSkills = [
  { name: "JavaScript", logo: "/logos/javascript.svg" },
  { name: "TypeScript", logo: "/logos/typescript.svg" },
  { name: "Node.js", logo: "/logos/nodejs.svg" },
  { name: "React", logo: "/logos/react.svg" },
  { name: "C++", logo: "/logos/c-plus-plus.svg" },
  { name: "MongoDB", logo: "/logos/mongodb.svg" },
  { name: "Kafka", logo: "/logos/kafka.svg" },
  { name: "Docker", logo: "/logos/docker.svg" },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-white px-8 pt-16 pb-20">
      <h2 className="text-2xl font-semibold">Skills</h2>

      {/* Top Skills Row */}
      <div className="mt-8 grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-6 items-center">
        {topSkills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center gap-2 text-sm text-gray-700"
          >
            <Image
              src={skill.logo}
              alt={skill.name}
              width={36}
              height={36}
              className="transition"
            />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>

      {/* Skill Breakdown */}
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <div>
          <h3 className="font-medium">Languages</h3>
          <p className="text-gray-700 mt-1">
            JavaScript, TypeScript
          </p>
        </div>

        <div>
          <h3 className="font-medium">Backend</h3>
          <p className="text-gray-700 mt-1">
            Node.js, Express, REST APIs, Authentication, Encryption
          </p>
        </div>

        <div>
          <h3 className="font-medium">Frontend</h3>
          <p className="text-gray-700 mt-1">
            React, Next.js, Tailwind CSS
          </p>
        </div>

        <div>
          <h3 className="font-medium">Databases</h3>
          <p className="text-gray-700 mt-1">
            MongoDB
          </p>
        </div>

        <div>
          <h3 className="font-medium">Messaging & Caching</h3>
          <p className="text-gray-700 mt-1">
            Kafka, Redis
          </p>
        </div>

        <div>
          <h3 className="font-medium">DevOps & Infra</h3>
          <p className="text-gray-700 mt-1">
            Docker, CI/CD basics
          </p>
        </div>

        <div>
          <h3 className="font-medium">System Design</h3>
          <p className="text-gray-700 mt-1">
            OOP, SOLID principles, Microservices fundamentals
          </p>
        </div>
      </div>
    </section>
  );
}
