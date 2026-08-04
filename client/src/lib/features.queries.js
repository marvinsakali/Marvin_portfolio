import { queryOptions } from "@tanstack/react-query";

// Sample data
export const sampleFeatures = [
  // =========================
  // GEOSPATIAL PROJECTS
  // =========================

  {
    id: "p-burnscar",
    type: "project",
    domain: "Geospatial",
    title: "Burn Scar Index",
    slug: "burn-scar-index",
    summary:
      "Pipeline for detecting wildfire burn scars from Sentinel-2 imagery using the Normalized Burn Ratio (NBR), with automated raster processing and spatial analysis.",
    body_path: null,
    date: "2025-03-27",
    tags: ["remote sensing", "satellite", "raster"],
    stack: ["Python", "GDAL", "GeoPandas", "PostGIS"],
    link: "https://github.com/",
    lng: 149.13,
    lat: -35.2809,
  },

  {
    id: "p-fieldkit",
    type: "project",
    domain: "Geospatial",
    title: "FieldKit",
    slug: "fieldkit",
    summary:
      "Offline-first field data collection application supporting geometry capture, synchronization and conflict resolution for survey teams.",
    body_path: null,
    date: "2024-12-11",
    tags: ["survey", "offline", "mobile"],
    stack: ["React", "IndexedDB", "Postgres", "Turf.js"],
    link: "https://github.com/",
    lng: -149.4937,
    lat: 64.2008,
  },

  {
    id: "p-gauge",
    type: "project",
    domain: "Geospatial",
    title: "Gauge Network",
    slug: "gauge-network",
    summary:
      "Interactive explorer for river gauge stations with nearest station search, spatial queries and historical measurements.",
    body_path: null,
    date: "2024-09-05",
    tags: ["hydrology", "search", "spatial"],
    stack: ["PostGIS", "React", "TanStack Query"],
    link: "https://github.com/",
    lng: -0.1276,
    lat: 51.5072,
  },

  // =========================
  // SOFTWARE ENGINEERING
  // =========================

  {
    id: "p-resume-builder",
    type: "project",
    domain: "Software Engineering",
    title: "AI Resume Builder",
    slug: "ai-resume-builder",
    summary:
      "Full-stack resume builder that generates ATS-friendly resumes with AI-assisted content enhancement, PDF export and resume management.",
    body_path: null,
    date: "2026-08-01",
    tags: ["ai", "resume", "ats"],
    stack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Hugging Face",
    ],
    link: "https://github.com/",
    lng: 36.8219,
    lat: -1.2921,
  },

  {
    id: "p-portfolio",
    type: "project",
    domain: "Software Engineering",
    title: "Atlas Portfolio",
    slug: "atlas-portfolio",
    summary:
      "Interactive portfolio inspired by an atlas, combining maps, projects, guides and field notes into a unified geospatial storytelling experience.",
    body_path: null,
    date: "2026-08-04",
    tags: ["portfolio", "map", "react"],
    stack: ["React", "MapLibre", "Tailwind CSS"],
    link: "https://github.com/",
    lng: 36.8219,
    lat: -1.2921,
  },

  {
    id: "p-news",
    type: "project",
    domain: "Software Engineering",
    title: "Morning News Automation",
    slug: "morning-news-automation",
    summary:
      "Automated workflow that aggregates technology news from RSS feeds, removes duplicates and delivers formatted daily email digests.",
    body_path: null,
    date: "2026-07-15",
    tags: ["automation", "rss", "email"],
    stack: ["Python", "n8n", "SMTP"],
    link: "https://github.com/",
    lng: 36.8219,
    lat: -1.2921,
  },

  // =========================
  // FIELD NOTES
  // =========================

  {
    id: "n-srid",
    type: "note",
    title: "The projection you pick is a decision, not a detail",
    slug: "projection-is-a-decision",
    summary:
      "Web Mercator is fine for tiles and wrong for area. A short field note on when to reproject and when to leave the data alone.",
    body_path: "notes/projection-is-a-decision",
    date: "2026-01-22",
    tags: ["srid", "cartography", "fundamentals"],
    stack: [],
    link: null,
    lng: 4.8952,
    lat: 52.3702,
  },

  {
    id: "n-index",
    type: "note",
    title: "A GiST index will not save a bad query",
    slug: "gist-index-bad-query",
    summary:
      "Notes from making a slow spatial join fast and understanding why indexes alone don't fix poor query design.",
    body_path: "notes/gist-index-bad-query",
    date: "2025-12-08",
    tags: ["postgis", "performance", "sql"],
    stack: [],
    link: null,
    lng: -122.4194,
    lat: 37.7749,
  },

  {
    id: "n-tiles",
    type: "note",
    title: "Do not build a tile pipeline yet",
    slug: "do-not-build-a-tile-pipeline-yet",
    summary:
      "Vector tiling is a significant engineering investment. Here's how to know when you actually need it.",
    body_path: "notes/do-not-build-a-tile-pipeline-yet",
    date: "2025-07-30",
    tags: ["tiles", "maplibre", "architecture"],
    stack: [],
    link: null,
    lng: -79.3832,
    lat: 43.6532,
  },

  {
    id: "n-onetable",
    type: "note",
    title: "One table, three kinds of record",
    slug: "one-table-three-records",
    summary:
      "Why this portfolio keeps projects, guides and notes in one table instead of maintaining three disconnected systems.",
    body_path: "notes/one-table-three-records",
    date: "2025-10-14",
    tags: ["architecture", "postgres", "design"],
    stack: [],
    link: null,
    lng: 13.405,
    lat: 52.52,
  },

  // =========================
  // GUIDES
  // =========================

  {
    id: "g-postgis",
    type: "guide",
    title: "PostGIS from Zero",
    slug: "postgis-from-zero",
    summary:
      "Learn PostGIS from installation through your first spatial query, including indexes and nearest-neighbour searches.",
    body_path: "guides/postgis-from-zero",
    date: "2026-02-10",
    tags: ["postgis", "sql", "beginner"],
    stack: ["Postgres", "PostGIS"],
    link: null,
    lng: 2.3522,
    lat: 48.8566,
  },

  {
    id: "g-maplibre",
    type: "guide",
    title: "MapLibre without the Boilerplate",
    slug: "maplibre-without-the-boilerplate",
    summary:
      "Building performant React maps while keeping state outside the render loop.",
    body_path: "guides/maplibre-without-the-boilerplate",
    date: "2025-11-18",
    tags: ["maplibre", "react"],
    stack: ["React", "MapLibre GL"],
    link: null,
    lng: -3.7038,
    lat: 40.4168,
  },

  {
    id: "g-geojson",
    type: "guide",
    title: "Designing a GeoJSON API that Stays Fast",
    slug: "geojson-api-that-stays-fast",
    summary:
      "Designing scalable GeoJSON APIs with filtering, pagination and performance considerations.",
    body_path: "guides/geojson-api-that-stays-fast",
    date: "2025-09-01",
    tags: ["api", "geojson", "performance"],
    stack: ["Node.js", "Express", "PostGIS"],
    link: null,
    lng: 139.6917,
    lat: 35.6895,
  },
];
// Fetch all features or filter by type
const fetchFeatures = async (type) => {
  await new Promise((resolve) => setTimeout(resolve, 500)); // simulate API delay

  if (!type) {
    return sampleFeatures;
  }

  return sampleFeatures.filter((feature) => feature.type === type);
};

// Query for all features
export const featuresQuery = (type) =>
  queryOptions({
    queryKey: ["features", type || "all"],
    queryFn: () => fetchFeatures(type),
    staleTime: 5 * 60 * 1000,
  });

// Query for a single feature by slug
export const featureBySlugQuery = (type, slug) =>
  queryOptions({
    queryKey: ["feature", type, slug],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));

      return (
        sampleFeatures.find(
          (feature) =>
            feature.type === type && feature.slug === slug
        ) || null
      );
    },
    staleTime: 5 * 60 * 1000,
  });