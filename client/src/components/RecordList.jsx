import React from 'react'
import { Link } from 'react-router-dom'
import { formatCoords, formatDate, TYPE_META } from '../lib/atlas';


const RecordList = ({ kind, title, intro, records }) => {
    const meta = TYPE_META[kind];
   const getLink = (record) => {
  switch (kind) {
    case "guide":
      return `/guides/${record.slug}`;
    case "note":
      return `/notes/${record.slug}`;
    default:
      return "/work";
  }
};
  return (
    <main className="flex-1">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <header className="border-b border-border py-14 sm:py-20">
          <span
            className="text-[10px] tracking-[0.16em] uppercase"
            style={{ color: meta.color }}
          >
            {String(records.length).padStart(2, "0")} records
          </span>
          <h1 className="mt-4 font-display text-4xl font-semibold sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            {intro}
          </p>
        </header>

        <ul className="divide-y divide-border">
          {records.map((r) => (
            <li key={r.id}>
              <Link
                to={getLink(r)}
                
                className="group grid grid-cols-1 gap-3 py-7 transition-colors hover:bg-card/50 sm:grid-cols-[130px_1fr] sm:gap-8"
              >
                <div className="flex flex-row items-center gap-3 sm:flex-col sm:items-start sm:gap-1.5">
                  <span className="label">{formatDate(r.date)}</span>
                  <span className="label normal-case opacity-70">
                    {formatCoords(r.lng, r.lat)}
                  </span>
                </div>
                <div className="max-w-3xl">
                  <h2 className="text-xl leading-snug text-foreground transition-colors group-hover:text-primary">
                    {r.title}
                  </h2>
                  <p className="mt-2 text-[0.85rem] leading-relaxed text-muted-foreground">
                    {r.summary}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1.5">
                    {r.tags.map((t) => (
                      <span key={t} className="label text-[10px]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <div className="py-12">
          <Link to="/work" className="label hover:text-foreground">
            See these as pins on the Atlas →
          </Link>
        </div>
      </div>
    </main>
  )
}

export default RecordList