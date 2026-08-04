import { useEffect, useRef } from "react";
import * as maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

const COLORS = {
  project: "#c99a2e",
  note: "#4a8f8a",
  guide: "#c15a3c",
};

const toGeoJSON = (records) => ({
  type: "FeatureCollection",
  features: records.map((record) => ({
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [record.lng, record.lat],
    },
    properties: {
      slug: record.slug,
      type: record.type,
      title: record.title,
    },
  })),
});

const AtlasMap = ({
  records,
  selectedSlug,
  onSelect,
  onCursor,
}) => {
  const containerRef = useRef(null);
  const mapRef = useRef(null);
  const readyRef = useRef(false);

  const handlersRef = useRef({
    onSelect,
    onCursor,
  });

  handlersRef.current = {
    onSelect,
    onCursor,
  };

  const dataRef = useRef(records);
  dataRef.current = records;

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const map = new maplibregl.Map({
      container: containerRef.current,
      style: "https://demotiles.maplibre.org/style.json",
      center: [8, 30],
      zoom: 1.35,
      attributionControl: {
        compact: true,
      },
    });

    mapRef.current = map;

    map.addControl(
      new maplibregl.NavigationControl({
        showCompass: false,
      })
    );

    map.on("load", () => {
      // Recolour the basemap
      (map.getStyle().layers || []).forEach((layer) => {
        if (layer.type === "background") {
          map.setPaintProperty(
            layer.id,
            "background-color",
            "#0c1420"
          );
        } else if (layer.type === "fill") {
          map.setPaintProperty(
            layer.id,
            "fill-color",
            "#131f2e"
          );

          map.setPaintProperty(
            layer.id,
            "fill-outline-color",
            "#243447"
          );
        } else if (layer.type === "line") {
          map.setPaintProperty(
            layer.id,
            "line-color",
            "#243447"
          );
        } else if (layer.type === "symbol") {
          map.setLayoutProperty(
            layer.id,
            "visibility",
            "none"
          );
        }
      });

      map.addSource("features", {
        type: "geojson",
        data: toGeoJSON(dataRef.current),
      });

      map.addLayer({
        id: "feature-halo",
        type: "circle",
        source: "features",
        paint: {
          "circle-radius": [
            "interpolate",
            ["linear"],
            ["zoom"],
            1,
            10,
            8,
            22,
          ],

          "circle-color": [
            "match",
            ["get", "type"],
            "project",
            COLORS.project,
            "note",
            COLORS.note,
            "guide",
            COLORS.guide,
            "#e7e4d8",
          ],

          "circle-opacity": 0.12,
        },
      });

      map.addLayer({
        id: "feature-points",
        type: "circle",
        source: "features",
        paint: {
          "circle-radius": [
            "interpolate",
            ["linear"],
            ["zoom"],
            1,
            4.5,
            8,
            8,
          ],

          "circle-color": [
            "match",
            ["get", "type"],
            "project",
            COLORS.project,
            "note",
            COLORS.note,
            "guide",
            COLORS.guide,
            "#e7e4d8",
          ],

          "circle-stroke-width": 1.25,
          "circle-stroke-color": "#0c1420",
        },
      });

      readyRef.current = true;
    });

    const onClick = (e) => {
      const slug = e.features?.[0]?.properties?.slug;

      if (slug) {
        handlersRef.current.onSelect(slug);
      }
    };

    const onEnter = () => {
      map.getCanvas().style.cursor = "pointer";
    };

    const onLeave = () => {
      map.getCanvas().style.cursor = "";
    };

    const onMove = (e) => {
      handlersRef.current.onCursor([
        e.lngLat.lng,
        e.lngLat.lat,
      ]);
    };

    const onOut = () => {
      handlersRef.current.onCursor(null);
    };

    map.on("click", "feature-points", onClick);
    map.on("mouseenter", "feature-points", onEnter);
    map.on("mouseleave", "feature-points", onLeave);
    map.on("mousemove", onMove);
    map.on("mouseout", onOut);

    return () => {
      readyRef.current = false;
      map.remove();
      mapRef.current = null;
    };
  }, []);

  // Update source when records change
  useEffect(() => {
    const map = mapRef.current;

    if (!map) return;

    const apply = () => {
      const source = map.getSource("features");

      if (source) {
        source.setData(toGeoJSON(records));
      }
    };

    if (readyRef.current) {
      apply();
    } else {
      map.once("idle", apply);
    }
  }, [records]);

  // Fly to selected record
  useEffect(() => {
    const map = mapRef.current;

    if (!map || !selectedSlug) return;

    const record = records.find(
      (r) => r.slug === selectedSlug
    );

    if (!record) return;

    map.easeTo({
      center: [record.lng, record.lat],
      zoom: Math.max(map.getZoom(), 4),
      duration: 900,
    });
  }, [selectedSlug, records]);

  return <div ref={containerRef} className="size-full" />;
};

export default AtlasMap;