import { Link } from "react-router-dom";
import { TYPE_META, formatCoords, formatDate } from "../lib/atlas";
import { loadContent } from "../lib/content";


const ArticlePage = ({ record }) => {
  const meta = TYPE_META[record.type];
  const doc = loadContent(record.body_path);

  const backTo = record.type === "note" ? "/notes" : "/guides";

  return (
    <main className="flex-1">
      <article className="mx-auto max-w-[1400px] px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-10 py-12 lg:grid-cols-[1fr_260px] lg:py-16">
          <div className="max-w-2xl">
            <Link to={backTo} className="label hover:text-foreground">
              ← {meta.plural}
            </Link>

            <p
              className="mt-8 text-[10px] uppercase tracking-[0.16em]"
              style={{ color: meta.color }}
            >
              {meta.label}
            </p>

            <h1 className="mt-3 font-display text-3xl font-semibold leading-[1.15] sm:text-4xl">
              {record.title}
            </h1>

            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {record.summary}
            </p>

            <hr className="my-8 border-border" />

            {doc ? (
              <div
                className="prose-field"
                dangerouslySetInnerHTML={{ __html: doc.html }}
              />
            ) : (
              <p className="text-sm text-muted-foreground">
                This record has no long-form body yet.
              </p>
            )}
          </div>

          {/* Record metadata */}
          <aside className="lg:sticky lg:top-20 lg:self-start">
            <div className="border border-border bg-card/50 p-5">
              <span className="label">Record</span>

              <dl className="mt-4 flex flex-col gap-4 text-[11px]">
                <div>
                  <dt className="label">Date</dt>
                  <dd className="mt-1 text-foreground">
                    {formatDate(record.date)}
                  </dd>
                </div>

                <div>
                  <dt className="label">Coordinates</dt>
                  <dd className="mt-1 text-foreground">
                    {formatCoords(record.lng, record.lat)}
                  </dd>
                </div>

                {doc && (
                  <div>
                    <dt className="label">Reading</dt>
                    <dd className="mt-1 text-foreground">
                      {doc.readingMinutes} min
                    </dd>
                  </div>
                )}

                {record.tags.length > 0 && (
                  <div>
                    <dt className="label">Tags</dt>

                    <dd className="mt-1.5 flex flex-wrap gap-1.5">
                      {record.tags.map((tag) => (
                        <span
                          key={tag}
                          className="border border-border px-2 py-0.5 text-[10px] text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </dd>
                  </div>
                )}

                <div>
                  <dt className="label">Slug</dt>

                  <dd className="mt-1 break-all text-muted-foreground">
                    {record.slug}
                  </dd>
                </div>
              </dl>

              <Link
                to={`/work?focus=${record.slug}`}
                className="mt-5 inline-block border border-border px-3 py-2 text-[10px] uppercase tracking-[0.14em] transition-colors hover:bg-surface"
              >
                Show on the Atlas →
              </Link>
            </div>
          </aside>
        </div>
      </article>
    </main>
  );
};

export default ArticlePage;