import { Outlet, Link } from "react-router-dom";


const NAV = [
  {
    to: "/work",
    label: "Atlas",
    color: "var(--color-project)",
  },
  {
    to: "/notes",
    label: "Field Notes",
    color: "var(--color-note)",
  },
  {
    to: "/guides",
    label: "Field Guides",
    color: "var(--color-guide)",
  },
];


const SiteHeader = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-[1400px] items-center justify-between px-4 sm:px-6">

        <Link to="/" className="flex items-baseline gap-2.5">
          <span className="font-display text-base font-semibold tracking-[0.2em]">
            ATLAS
          </span>

          <span className="hidden text-[10px] tracking-[0.16em] text-muted-foreground uppercase sm:inline">
            survey / index
          </span>
        </Link>


        <nav className="flex items-center gap-1">
          {NAV.map((item)=>(
            <Link
              key={item.to}
              to={item.to}
              className="flex items-center gap-2 px-3 py-2 text-[11px] uppercase tracking-wider text-muted-foreground hover:text-foreground"
            >

              <span
                className="size-1.5"
                style={{
                  background:item.color
                }}
              />

              {item.label}

            </Link>
          ))}
        </nav>

      </div>
    </header>
  );
};



const SiteFooter = () => {
  return (
    <footer className="mt-auto border-t border-border">
      <div className="mx-auto max-w-[1400px] px-4 py-6 text-xs text-muted-foreground">

        <span>
          Atlas — one dataset, three kinds of record
        </span>

        <span className="ml-4">
          EPSG:4326
        </span>

        <span className="ml-4">
          © {new Date().getFullYear()}
        </span>

      </div>
    </footer>
  );
};



const Layout = () => {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden">

     


      {/* Website content */}
      <div className="relative z-10 flex min-h-screen flex-col">

        <SiteHeader />

        <main className="flex-1">
          <Outlet />
        </main>

        <SiteFooter />

      </div>

    </div>
  );
};


export default Layout;