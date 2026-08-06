import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import AtlasMap from "../components/AtlasMap";

import { TYPE_META, formatCoords, formatDate } from "../lib/atlas";
import { sampleFeatures } from "../lib/features.queries";

const ALL_TYPES = ["project", "note", "guide"];

const Work = () => {
  const records = sampleFeatures;

  const [active, setActive] = useState(ALL_TYPES);
  const [query, setQuery] = useState("");
  const [cursor, setCursor] = useState(null);
  const [selectedSlug, setSelectedSlug] = useState(null);
  const [playing, setPlaying] = useState(false);

  const years = records.map((r) => Number(r.date.slice(0, 4)));
    
  const minYear = years.length ? Math.min(...years) : 2024;
  const maxYear = years.length ? Math.max(...years) : new Date().getFullYear();

  const [timelineYear, setTimelineYear] = useState(minYear);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();

    return records.filter((r) => {
      if (!active.includes(r.type)) return false;

      const year = Number(r.date.slice(0, 4));
      

      if (year > timelineYear) return false;

      if (!q) return true;

      return (
        r.title.toLowerCase().includes(q) ||
        r.summary.toLowerCase().includes(q) ||
        r.tags.some((t) => t.toLowerCase().includes(q)) ||
        r.stack.some((t) => t.toLowerCase().includes(q))
      );
    });
  }, [records, active, timelineYear, query]);

  const selected = visible.find((r) => r.slug === selectedSlug) || null;

  const toggle = (type) => {
    setActive((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type],
    );
  };
  useEffect(() => {
    if (!playing) return;

    const timer = setInterval(() => {
      setTimelineYear((year) => {
        if (year >= maxYear) {
          setPlaying(false);
          return maxYear;
        }

        return year + 1;
      });
    }, 1200);

    return () => clearInterval(timer);
  }, [playing, maxYear]);

  return (
    <main className="flex flex-1 flex-col">
      <div className="grid grid-cols-1 lg:h-[calc(100vh-3.5rem)] lg:grid-cols-[320px_1fr] lg:grid-rows-1 lg:overflow-hidden">
        {/* Sidebar */}
        <aside className="flex flex-col border-b border-border lg:min-h-0 lg:border-r lg:border-b-0">
          {/* Layers */}
          <div className="border-b border-border p-4">
            <h1 className="label">Layers</h1>

            <div className="mt-3 space-y-1">
              {ALL_TYPES.map((type) => {
                const meta = TYPE_META[type];
                const on = active.includes(type);
                const count = records.filter((r) => r.type === type).length;

                return (
                  <button
                    key={type}
                    onClick={() => toggle(type)}
                    className="flex items-center justify-between px-2 py-2 text-left transition-colors hover:bg-surface"
                  >
                    <span className="flex items-center gap-2.5">
                      <span
                        className="size-2.5 border"
                        style={{
                          background: on ? meta.color : "transparent",
                          borderColor: meta.color,
                        }}
                      />

                      <span
                        className={`text-[11px] tracking-[0.12em] uppercase ${
                          on ? "text-foreground" : "text-muted-foreground"
                        }`}
                      >
                        {meta.plural}
                      </span>
                    </span>

                    <span className="label ">
                      {String(count).padStart(2, "0")}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Search */}
          <div className="border-b border-border p-4">
            <>
              <label htmlFor="atlas-search" className="label">
                Search
              </label>

              <input
                id="atlas-search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="title, tag, stack…"
                className="mt-2 w-full border border-input bg-surface px-3 py-2 font-mono text-xs text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none"
              />
            </>
          </div>

          {/* Timeline */}
          <div className="border-b border-border p-4">
            <div className="flex items-center justify-between">
              <span className="label">Timeline</span>
              <span className="label text-foreground">{timelineYear}</span>
            </div>

            <input
              type="range"
              min={minYear}
              max={maxYear}
              step={1}
              value={timelineYear}
              onChange={(e) => setTimelineYear(Number(e.target.value))}
              className="mt-3 w-full accent-[var(--color-primary)]"
            />

            <div className="mt-2 flex justify-between text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
              <span>{minYear}</span>
              <span>{maxYear}</span>
            </div>
            <div className="mt-4 flex gap-2">
              <button
                onClick={() => {
                  setTimelineYear(minYear);
                  setPlaying(true);
                }}
                className="label rounded border border-border px-3 py-1 hover:bg-card"
              >
                ▶ Play
              </button>

              <button
                onClick={() => {
                  setPlaying(false);
                  setTimelineYear(maxYear);
                }}
                className="label rounded border border-border px-3 py-1 hover:bg-card"
              >
                Reset
              </button>
            </div>
          </div>

          {/* Results */}
          <div className="max-h-[40vh] flex-1 overflow-y-auto lg:max-h-none lg:min-h-0">
            {visible.length === 0 && (
              <p className="p-4 text-xs text-muted-foreground">
                No records match this filter.
              </p>
            )}

            {visible.map((r) => (
              <button
                key={r.id}
                onClick={() =>
                  setSelectedSlug(selectedSlug === r.slug ? null : r.slug)
                }
                className={`flex w-full flex-col gap-1 border-b border-border p-4 text-left transition-colors hover:bg-card  ${
                  selectedSlug === r.slug ? "bg-card" : ""
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span
                    className="text-[10px] tracking-[0.16em] uppercase"
                    style={{ color: TYPE_META[r.type].color }}
                  >
                    {TYPE_META[r.type].label}
                  </span>

                  <span className="label">{r.date.slice(0, 4)}</span>
                </div>

                <h3 className="text-[0.85rem] leading-snug text-foreground">
                  {r.title}
                </h3>

                <p className="label normal-case">
                  {formatCoords(r.lng, r.lat)}
                </p>
              </button>
            ))}
          </div>
        </aside>

        {/* Map */}
        <div className="relative h-[65vh] bg-background lg:h-full">
          <AtlasMap
            records={visible}
            selectedSlug={selectedSlug}
            onSelect={setSelectedSlug}
            onCursor={setCursor}
          />

          {/* Legend */}
          <div className="pointer-events-none absolute top-4 left-4 flex flex-col gap-1.5 border border-border bg-background/85 px-3 py-2.5 backdrop-blur">
            {ALL_TYPES.map((type) => (
              <div key={type} className="flex items-center gap-2">
                <span className="flex items-center gap-2">
                  <span
                    className="size-2 rounded-full"
                    style={{ background: TYPE_META[type].color }}
                  />
                  <span className="text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
                    {TYPE_META[type].plural}
                  </span>
                </span>
              </div>
            ))}
          </div>

          {/* Coordinates */}
          <div className="pointer-events-none absolute right-4 bottom-8 border border-border bg-background/85 px-3 py-1.5 backdrop-blur">
            <span className="text-[10px] tracking-[0.14em] text-muted-foreground">
              {cursor
                ? formatCoords(cursor[0], cursor[1])
                : `${timelineYear} ${visible.length} of ${records.length} records`}
            </span>
          </div>

          {/* Selected Card */}
          {selected && (
            <div className="absolute right-4 bottom-20 left-4 max-w-md border border-border bg-background/95 p-5 backdrop-blur sm:left-auto">
              <div className="flex items-start justify-between gap-4">
                <span
                  className="text-[10px] tracking-[0.16em] uppercase"
                  style={{ color: TYPE_META[selected.type].color }}
                >
                  {TYPE_META[selected.type].label}
                </span>
                <span
                  className="text-[10px] tracking-[0.16em] uppercase"
                  style={{ color: TYPE_META[selected.type].color }}
                >
                  {selected.domain}
                </span>

                <button
                  onClick={() => setSelectedSlug(null)}
                  className="label hover:text-foreground"
                >
                  Close ✕
                </button>
              </div>

              <h2 className="mt-2 text-lg leading-snug">{selected.title}</h2>

              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                {selected.summary}
              </p>

              <dl className="mt-4 grid grid-cols-2 gap-2 text-[10px] tracking-[0.12em] uppercase text-muted-foreground">
                <div>
                  <dt className="opacity-60 text-sm">Date</dt>
                  <dd className="text-foreground text-sm">
                    {formatDate(selected.date)}
                  </dd>
                </div>

                <div>
                  <dt className="opacity-60 text-sm">Coordinates</dt>
                  <dd className="text-foreground normal-case text-sm">
                    {formatCoords(selected.lng, selected.lat)}
                  </dd>
                </div>
                <div>
                  <dt className="opacity-60 text-sm">Stack</dt>
                  <div className="flex flex-wrap gap-2">
                    {selected.stack.map((r, index) => (
                      <span
                        key={index}
                        className="rounded-md border px-2 py-1 text-sm"
                      >
                        {r}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <dt className="opacity-60 text-sm">Tags</dt>
                  <div className="flex flex-wrap gap-2">
                    {selected.tags.map((r, index) => (
                      <span
                        key={index}
                        className="rounded-md border px-2 py-1 text-sm"
                      >
                        {r}
                      </span>
                    ))}
                  </div>
                </div>
              </dl>

              <div className="mt-4 flex flex-wrap items-center gap-4">
                {selected.type !== "project" && (
                  <Link
                    to={
                      selected.type === "note"
                        ? `/notes/${selected.slug}`
                        : `/guides/${selected.slug}`
                    }
                    className="text-[11px] tracking-[0.14em] uppercase text-primary"
                  >
                    Read →
                  </Link>
                )}

                {selected.link && (
                  <a href={selected.link} target="_blank" rel="noreferrer">
                    Source ↗
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Work;
