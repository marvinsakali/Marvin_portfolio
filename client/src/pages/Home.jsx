import { Link } from "react-router-dom";
import { RecordCard } from "../components/RecordCard";
import { TYPE_META, formatDate } from "../lib/atlas";
import { sampleFeatures } from "../lib/features.queries";
import StartHereSection from "../components/StartHereSection";
import GisTechStack from "../components/GisTechStack";
import SoftwareTechStack from "../components/SoftwareTechStack";
import { ArrowRight } from "lucide-react";

const Home = () => {
  const records = sampleFeatures;

  const TRACKS = [
  {
    to: "/work",
    key: "project",
    name: "The Atlas",
    body: "Case studies as map pins. Spatial pipelines, dashboards and the systems underneath them.",
  },
  {
    to: "/notes",
    key: "note",
    name: "Field Notes",
    body: "Short writing from the work projections, query plans, and decisions I had to defend.",
  },
  {
    to: "/guides",
    key: "guide",
    name: "Field Guides",
    body: "Tutorials that assume you have a terminal open. PostGIS, MapLibre, GeoJSON APIs.",
  },
];


const STACK = [
  ["Frontend", ["React", "JavaScript", "Tailwind"]],
  ["Spatial", ["PostGIS", "MapLibre GL", "Leaflet", "Python", "QGIS"]],
  ["Backend", ["Node", "Express" , "Django", "DjangoREST", "Postgres", "MySql" ]],
  ["Machine Learning", ["Tensorflow", "Sckit-learn" , ]],
];


//   if (isLoading) return <p>Loading...</p>;
//   if (error) return <p>Something went wrong.</p>;

  const counts = {
    project: records.filter((r) => r.type === "project").length,
    note: records.filter((r) => r.type === "note").length,
    guide: records.filter((r) => r.type === "guide").length,
  };

  const latest = records
    .filter((r) => r.type !== "project")
    .slice(0, 3);

  const projects = records
    .filter((r) => r.type === "project")
    .slice(0, 3);

  return (
      <main>
      {/* Hero */}
      <section className="border-b border-border ">
        <div className="mx-auto max-w-[1400px] px-4 py-20 sm:px-6 sm:py-28">
          <p className="label">
            Fullstack developer / Geospatial systems / 1.2868° S, 36.8172° E
          </p>
          <h1 className="mt-6 max-w-4xl font-display text-4xl leading-[1.05] font-semibold text-balance sm:text-6xl">
            I build systems that are{" "}
            <span className="text-primary">safe and seamless</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-sm md:text-lg font-medium leading-relaxed text-muted-foreground">
            This site is one of them. Every project, note and guide below is a
            row in a single PostGIS table. The map, the lists and the search
            are three views of the same <span className="text-lg text-primary bg-accent-foreground font-bold "> {records.length} </span> records, not three
            content systems drifting apart.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link
              to="/work"
              className="border rounded-xl bg-primary px-5 py-3 text-[13px] tracking-[0.16em] text-primary-foreground uppercase transition-opacity hover:opacity-85"
            >
              Open the Atlas
            </Link>
            <Link
              to="/notes"
              className="border rounded-xl px-5 py-3 text-[13px] tracking-[0.16em] text-foreground  uppercase transition-colors hover:bg-surface"
            >
              Read field notes
            </Link>
          </div>
        </div>
      </section>

      {/* Tracks */}
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 md:grid-cols-3">
          {TRACKS.map((track, i) => {
            const meta = TYPE_META[track.key];
            return (
              <Link
                key={track.key}
                to={track.to}
                className={`group relative p-6 transition-colors hover:bg-card sm:p-8  ${
                  i > 0 ? "border-t border-border md:border-t-0 md:border-l" : ""
                }`}
              >
                <span
                  className="absolute top-0 left-0 h-px w-0 transition-all duration-300 group-hover:w-full"
                  style={{ background: meta.color }}
                  aria-hidden
                />
                <div className="flex items-center justify-between">
                  <span
                    className="text-[10px] tracking-[0.16em] uppercase"
                    style={{ color: meta.color }}
                  >
                    {meta.plural}
                  </span>
                  <span className="label">
                    {String(counts[track.key]).padStart(2, "0")}
                  </span>
                </div>
                <h2 className="mt-4 text-2xl">{track.name}</h2>
                <p className="mt-3 text-[1rem] leading-relaxed text-muted-foreground">
                  {track.body}
                </p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Selected work */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6">
          <div className="flex items-baseline justify-between">
            <h2 className="text-2xl">Selected work</h2>
            <Link to="/work" className="label hover:text-foreground">
              All on the map →
            </Link>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
            {projects.map((r) => (
              <RecordCard key={r.id} record={r} />
            ))}
          </div>
        </div>
      </section>


       <StartHereSection/> 
       <GisTechStack/>
       <SoftwareTechStack/>    
      {/* Stack + latest writing */}
      <section className="border-b border-border">
  <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6">
    <div className="max-w-2xl">
      <p className="label">LATEST WRITING</p>

      <h2 className="mt-3 text-3xl font-semibold">
        Notes from the field.
      </h2>

      <p className="mt-4 text-muted-foreground">
        Technical guides, engineering notes, and observations from building
        systems that bridge the digital and physical worlds.
      </p>
    </div>

    <div className="mt-12 grid gap-6 lg:grid-cols-2">
      {latest.map((post, index) => {
        const href =
          post.type === "note"
            ? `/notes/${post.slug}`
            : `/guides/${post.slug}`;

        return (
          <Link
            key={post.id}
            to={href}
            params={{ slug: post.slug }}
            className={`group overflow-hidden border border-border transition-all duration-300 hover:border-primary hover:-translate-y-1 ${
              index === 0
                ? "flex flex-col lg:row-span-2"
                : "flex flex-col sm:flex-row"
            }`}
          >
            <img
              src={post.coverImage}
              alt={post.title}
              className={`object-cover ${
                index === 0
                  ? "h-64 w-full"
                  : "h-52 w-full sm:h-auto sm:w-60"
              }`}
            />

            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-center gap-3 text-xs uppercase tracking-wider text-muted-foreground">
                <span>{formatDate(post.date)}</span>

                <span className="h-1 w-1 rounded-full bg-border" />

                <span>{TYPE_META[post.type].label}</span>
              </div>

              <h3 className="mt-4 text-xl font-semibold group-hover:text-primary">
                {post.title}
              </h3>

              {post.excerpt && (
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted-foreground">
                  {post.excerpt}
                </p>
              )}

              <div className="mt-auto pt-6">
                <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                  Read article
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </Link>
        );
      })}
    </div>

    <div className="mt-10 flex justify-center">
      <Link
        to="/writing"
        className="rounded-full border border-border px-6 py-2 text-sm transition-colors hover:bg-card"
      >
        View all writing
      </Link>
    </div>
  </div>
</section>

      {/* Now / contact */}
      <section>
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2">
          <div>
            <h2 className="label">Now</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Working on tide and gauge data pipelines, and writing up the parts
              that were harder than they should have been. Reading about
              generalisation algorithms. Open to consulting on spatial data
              modelling and map-heavy product work.
            </p>
            <p className="mt-4 text-[11px] tracking-[0.14em] text-muted-foreground uppercase">
              Status: available — Q2
            </p>
          </div>
          <div>
            <h2 className="label">Contact</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Plain email is best. Tell me what the data looks like and what you
              need it to answer.
            </p>
            <a
              href="mailto:hello@atlas.example"
              className="mt-4 inline-block border-b border-primary pb-0.5 text-sm text-primary"
            >
              marvinsakali09@gmail.com
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}


export default Home;