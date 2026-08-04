export const TYPE_META = {
  project: {
    label: "Project",
    plural: "Atlas",
    color: "var(--color-project)",
    route: "/work",
  },
  note: {
    label: "Field Note",
    plural: "Field Notes",
    color: "var(--color-note)",
    route: "/notes",
  },
  guide: {
    label: "Field Guide",
    plural: "Field Guides",
    color: "var(--color-guide)",
    route: "/guides",
  },
};

export const formatCoords = (lng, lat) => {
  const ns = lat >= 0 ? "N" : "S";
  const ew = lng >= 0 ? "E" : "W";

  return `${Math.abs(lat).toFixed(4)}° ${ns}, ${Math.abs(lng).toFixed(4)}° ${ew}`;
};

export const formatDate = (date) => {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
};