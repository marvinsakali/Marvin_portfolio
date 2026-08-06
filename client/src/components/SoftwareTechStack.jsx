const stack = [
  {
    category: "FRONTEND",
    name: "React",
    description:
      "Component-based interfaces for building  interactive web apps.",
  },
  {
    category: "STYLING",
    name: "Tailwind CSS",
    description:
      "Framework for building fast, responsive, and consistent interfaces.",
  },
  {
    category: "BACKEND",
    name: "Django / FastAPI",
    description:
      "Python frameworks for building scalable APIs.",
  },
  {
    category: "BACKEND",
    name: "Express.js",
    description:
      "Framework for building fast, event-driven backend services.",
  },
  {
    category: "DATABASE",
    name: "PostgreSQL",
    description:
      "Reliable relational database for structured data.",
  },
//   {
//     category: "ORM",
//     name: "Prisma",
//     description:
//       "Type-safe database toolkit for managing application data and queries.",
//   },
  {
    category: "API",
    name: "REST APIs",
    description:
      "Interfaces for communication between applications and services.",
  },
  {
    category: "AUTHENTICATION",
    name: "JWT ",
    description:
      "Secure authentication and authorization patterns for modern applications.",
  },
  {
    category: "LANGUAGE",
    name: "Python",
    description:
      "backend development, automation, data processing, and AI workflows.",
  },
  {
    category: "LANGUAGE",
    name: "JavaScript / TypeScript",
    description:
      "Frontend and backend applications with modern web technologies.",
  },
  {
    category: "AI",
    name: "LLM APIs",
    description:
      "Integrating AI capabilities into applications using modern language models.",
  },
//   {
//     category: "DEVOPS",
//     name: "Docker",
//     description:
//       "Containerizing applications for consistent development and deployment.",
//   },
  {
    category: "CLOUD",
    name: "AWS / Vercel",
    description:
      "Deploying and scaling applications using modern cloud platforms.",
  },
  {
    category: "VERSION CONTROL",
    name: "Git & GitHub",
    description:
      "Managing code, collaboration, ",
  },
];

export default function SoftwareTechStack() {
  return (
    <section className="mx-auto max-w-8xl px-6 py-24">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-muted-foreground">
          THE STACK
        </p>

        <h2 className="mt-4 text-4xl font-bold tracking-tight">
          Modern software engineering stack.
        </h2>

        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          The languages, frameworks, databases, and platforms I use to design
          and build reliable digital systems.
        </p>
      </div>

      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {stack.map((item) => (
          <article
            key={item.name}
            className="group flex flex-col gap-2 border-[0.12px] bg-card px-4 py-5.5 transition-all duration-300 hover:border-primary"
          >
            <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              {item.category}
            </span>

            <h3 className="text-sm font-semibold">
              {item.name}
            </h3>

            <p className="text-sm leading-6 text-muted-foreground">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}