import { Link } from "react-router-dom";
import { TYPE_META, formatDate } from "../lib/atlas";

const TypeBadge = ({ type }) => {
  const meta = TYPE_META[type];

  return (
    <span
      className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.16em]"
      style={{ color: meta.color }}
    >
      <span
        className="inline-block size-1.5"
        style={{ background: meta.color }}
        aria-hidden
      />
      {meta.label}
    </span>
  );
};

const RecordCard = ({ record }) => {
  const meta = TYPE_META[record.type];

  const to =
    record.type === "note"
      ? `/notes/${record.slug}`
      : record.type === "guide"
      ? `/guides/${record.slug}`
      : `/work?focus=${record.slug}`;

  const inner = (
    <article className="group relative h-full border border-border bg-card/60 p-5 transition-colors hover:bg-card">
      <span
        className="absolute inset-y-0 left-0 w-px opacity-60 transition-all group-hover:w-[3px] group-hover:opacity-100"
        style={{ background: meta.color }}
        aria-hidden
      />

      <div className="flex items-center justify-between gap-3">
        <TypeBadge type={record.type} />

        <time className="label" dateTime={record.date}>
          {formatDate(record.date)}
        </time>
      </div>

      <h3 className="mt-3 text-lg leading-snug text-foreground">
        {record.title}
      </h3>

      <p className="mt-2 text-[0.82rem] leading-relaxed text-muted-foreground">
        {record.summary}
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1.5">
        {(record.stack.length ? record.stack : record.tags)
          .slice(0, 4)
          .map((item) => (
            <span key={item} className="label text-[10px]">
              {item}
            </span>
          ))}
      </div>
    </article>
  );

  return (
    <Link to={to} className="block h-full">
      {inner}
    </Link>
  );
};

export { RecordCard, TypeBadge };