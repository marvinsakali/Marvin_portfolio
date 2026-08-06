import {
  ArrowRight,
  Briefcase,
  Code2,
  Search,
  Users,
  FolderOpen,
} from "lucide-react";

const services = [
  {
    id: "01",
    label: "Consulting",
    title: "Technical Consulting",
    description:
      "Clarify requirements, review architecture, and define a roadmap for your geospatial project before development begins.",
    cta: "Book a consultation",
    icon: Briefcase,
  },
  {
    id: "02",
    label: "Engineering",
    title: "Software Engineering",
    description:
      "Design and build production-ready geospatial applications, APIs, dashboards, and spatial data platforms.",
    cta: "Discuss your project",
    icon: Code2,
  },
  {
    id: "03",
    label: "Reviews",
    title: "Technical Reviews",
    description:
      "Improve existing GIS workflows, PostGIS databases, and mapping applications with architecture and performance reviews.",
    cta: "Request a review",
    icon: Search,
  },
  {
    id: "04",
    label: "Collaboration",
    title: "Engineering Partnership",
    description:
      "Work together on research, startups, or long-term engineering initiatives as a technical partner.",
    cta: "Start collaborating",
    icon: Users,
  },
//   {
//     id: "05",
//     label: "Explore",
//     title: "Case Studies",
//     description:
//       "Browse projects and engineering notes to see how ideas become production-ready spatial systems.",
//     cta: "Explore the Atlas",
//     icon: FolderOpen,
//   },
];

export default function StartHereSection() {
  return (
    <section className="mx-auto max-w-8xl px-6 py-24">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-muted-foreground">
          START HERE
        </p>

        <h2 className="mt-4 text-4xl font-bold tracking-tight">
          Pick your next step
        </h2>

        <p className="mt-4 text-lg text-muted-foreground">
          Whether you need architectural guidance, production-ready geospatial
          software, or a long-term engineering partner, choose the engagement
          that fits your project.
        </p>
      </div>

      <div className="mt-14 grid gap-2 md:grid-cols-2 xl:grid-cols-4">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <article
              key={service.id}
              className="group flex flex-col w-80 h-90 rounded-xl border bg-background p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-xl"
            >
              <div className="flex  items-center justify-between">
                <span className="text-sm font-medium text-muted-foreground">
                  {service.id} · {service.label}
                </span>

                <Icon className="h-5 w-5 text-muted-foreground transition group-hover:text-primary" />
              </div>

              <h3 className="mt-8  ">{service.title}</h3>

              <p className="mt-4  text-[0.82rem] leading-relaxed text-muted-foreground">
                {service.description}
              </p>

              <button className="mt-auto inline-flex items-center gap-2 font-medium text-primary transition group-hover:gap-3">
                {service.cta}
                <ArrowRight className="h-4 w-4" />
              </button>
            </article>
          );
        })}
      </div>
    </section>
  );
}
