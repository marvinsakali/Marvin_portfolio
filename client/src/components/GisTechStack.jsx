const stack = [
{
  category: "BACKEND",
  name: "GeoDjango",
  description: "Spatial backend framework for building GIS applications with Django and PostGIS.",
},
//  {
//   category: "REMOTE SENSING",
//   name: "Google Earth Engine",
//   description: "Working with multispectral imagery, indices.",
// },
//   {
//     category: "FORMAT",
//     name: "GeoParquet",
//     description: "Columnar, cloud-native spatial data that works everywhere.",
//   },
  {
    category: "DATABASE",
    name: "PostGIS",
    description: "The foundation of modern spatial databases and analysis.",
  },
//   {
//     category: "DATABASE",
//     name: "DuckDB",
//     description: "Lightning-fast analytical SQL with built-in spatial support.",
//   },
//   {
//     category: "Python",
//     name: "Xarray",
//     description: "Distributed geospatial processing on Apache Spark.",
//   },
//   {
//   category: "DESKTOP",
//   name: "ArcGIS Pro",
//   description: "Desktop environments for spatial analysis, data management, and cartographic workflows.",
// },
  {
    category: "PYTHON",
    name: "GeoPandas",
    description: "The gateway to spatial data science in Python.",
  },
  {
    category: "RASTER",
    name: "Rasterio",
    description: "Read, write, and analyze raster datasets in Python.",
  },
//   {
//     category: "VISUALIZATION",
//     name: "deck.gl / Kepler.gl",
//     description: "Interactive visualization for millions of spatial features.",
//   },
  {
    category: "MAPS",
    name: "MapLibre / Mapbox",
    description: "Modern WebGL engines for interactive mapping.",
  },
  {
    category: "DESKTOP",
    name: "QGIS",
    description: "The industry's leading open-source desktop GIS.",
  },
];

export default function GisTechStack() {
  return (
    <section className="mx-auto max-w-8xl px-6 py-24">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-muted-foreground">
          THE STACK
        </p>

        <h2 className="mt-4 text-4xl font-bold tracking-tight">
          Modern geospatial engineering, not legacy GIS.
        </h2>

        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          These are the tools, databases, formats, and platforms behind the
          systems I build. Together they form a modern stack for cloud-native
          geospatial applications.
        </p>
      </div>

      <div className="mt-10 grid  w-auto  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {stack.map((item) => (
          <article
            key={item.name}
            className="group border-[0.12px] flex flex-col gap-2 py-5.5  w-auto h-auto bg-card px-4 transition-all duration-300 hover:border-primary"
          >
            <span className="text-xs  uppercase tracking-[0.25em] text-muted-foreground">
              {item.category}
            </span>

            <h3 className=" text-sm font-semibold">
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