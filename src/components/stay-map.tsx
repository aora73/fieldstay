import { useEffect, useRef, useState } from "react";
import type { Circle, CircleMarker, FeatureGroup, Map as LeafletMap, Marker } from "leaflet";
import { type CategoryId, type Stay } from "@/data/catalog";

import "leaflet/dist/leaflet.css";

const COLOR: Record<CategoryId, string> = {
  hotel: "#001838",
  resort: "#C83F28",
  camping: "#1E4D3C",
  "tourist-park": "#3E6484",
};

type LeafletNs = typeof import("leaflet");

export function categoryColor(id: CategoryId) {
  return COLOR[id];
}

export function StayMap({
  stays,
  focusSlug,
  focusTick,
}: {
  stays: Stay[];
  focusSlug: string;
  focusTick: number;
}) {
  const frame = useRef<HTMLDivElement>(null);
  const mapRef = useRef<LeafletMap | null>(null);
  const leafletRef = useRef<LeafletNs | null>(null);
  const groupRef = useRef<FeatureGroup | null>(null);
  const markersRef = useRef<Marker[]>([]);
  const userRef = useRef<CircleMarker | null>(null);
  const accuracyRef = useRef<Circle | null>(null);
  const [ready, setReady] = useState(false);
  const [narrow, setNarrow] = useState(false);
  const [locateMsg, setLocateMsg] = useState("");

  useEffect(() => {
    const el = frame.current;
    if (!el) return;
    let cancelled = false;
    let map: LeafletMap | null = null;

    void import("leaflet").then((L) => {
      if (cancelled) return;
      leafletRef.current = L;
      map = L.map(el, {
        scrollWheelZoom: true,
        zoomControl: true,
        minZoom: 4,
        maxZoom: 18,
      });
      L.tileLayer(
        "https://services.ga.gov.au/gis/rest/services/NationalBaseMap/MapServer/tile/{z}/{y}/{x}",
        {
          attribution:
            '&copy; <a href="https://www.ga.gov.au/">Commonwealth of Australia (Geoscience Australia)</a>, <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>. Includes &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
          maxNativeZoom: 16,
          maxZoom: 18,
        },
      ).addTo(map);
      L.control.scale({ imperial: false, position: "bottomleft" }).addTo(map);
      groupRef.current = L.featureGroup().addTo(map);
      mapRef.current = map;
      map.setView([-27.5, 149.5], 5);
      setNarrow(el.clientWidth > 0 && el.clientWidth < 640);
      setReady(true);
      requestAnimationFrame(() => map?.invalidateSize());
    });

    const onResize = () => {
      const current = mapRef.current;
      const frameEl = frame.current;
      if (!current || !frameEl) return;
      current.invalidateSize();
      setNarrow(frameEl.clientWidth > 0 && frameEl.clientWidth < 640);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelled = true;
      window.removeEventListener("resize", onResize);
      map?.remove();
      mapRef.current = null;
      groupRef.current = null;
      markersRef.current = [];
      userRef.current = null;
      accuracyRef.current = null;
      setReady(false);
    };
  }, []);

  const stayKey = stays.map((stay) => stay.slug).join("|");
  const seen = useRef({ key: "", focus: "", tick: -1 });

  useEffect(() => {
    const L = leafletRef.current;
    const map = mapRef.current;
    const group = groupRef.current;
    if (!ready || !L || !map || !group) return;

    const layoutKey = `${stayKey}:${narrow ? "narrow" : "wide"}`;
    const keyChanged = seen.current.key !== layoutKey;
    const focusChanged = seen.current.focus !== focusSlug || seen.current.tick !== focusTick;
    const first = seen.current.tick === -1;
    seen.current = { key: layoutKey, focus: focusSlug, tick: focusTick };

    if (keyChanged || focusChanged || first) {
      group.clearLayers();
      markersRef.current = stays.map((stay) => {
        const marker = L.marker([stay.lat, stay.lng], {
          icon: labelIcon(L, stay, stay.slug === focusSlug, narrow),
          title: stay.name,
          keyboard: true,
          zIndexOffset: stay.slug === focusSlug ? 500 : 0,
        });
        marker.addTo(group);
        return marker;
      });
    }

    const focus = stays.find((stay) => stay.slug === focusSlug);
    if (focus && (focusChanged || first)) {
      map.setView([focus.lat, focus.lng], 13);
      return;
    }
    if ((keyChanged || first) && stays.length > 0) {
      if (stays.length === 1) {
        const only = stays[0];
        if (only) map.setView([only.lat, only.lng], 12);
      } else {
        map.fitBounds(group.getBounds(), {
          padding: narrow ? [36, 28] : [64, 48],
          maxZoom: 10,
        });
      }
    }
  }, [ready, stayKey, focusSlug, focusTick, stays, narrow]);

  function centreOnMe() {
    const map = mapRef.current;
    const L = leafletRef.current;
    if (!map || !L) return;
    if (!navigator.geolocation) {
      setLocateMsg("This browser cannot read a position.");
      return;
    }
    setLocateMsg("Finding your position…");
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude, accuracy } = position.coords;
        map.setView([latitude, longitude], 13);
        userRef.current?.remove();
        accuracyRef.current?.remove();
        userRef.current = L.circleMarker([latitude, longitude], {
          radius: 8,
          color: "#C83F28",
          weight: 3,
          fillColor: "#fffaf8",
          fillOpacity: 1,
        }).addTo(map);
        accuracyRef.current = L.circle([latitude, longitude], {
          radius: Math.max(accuracy, 20),
          color: "#C83F28",
          weight: 1,
          fillColor: "#C83F28",
          fillOpacity: 0.08,
        }).addTo(map);
        const metres = Math.round(accuracy);
        setLocateMsg(
          metres < 1000
            ? `Centred on your position, about ${metres} m.`
            : `Centred on an approximate position, about ${Math.round(metres / 1000)} km.`,
        );
      },
      () => setLocateMsg("Location was blocked or is unavailable."),
      { enableHighAccuracy: true, timeout: 12000, maximumAge: 20000 },
    );
  }

  function fitShown() {
    const map = mapRef.current;
    const group = groupRef.current;
    if (!map || !group || group.getLayers().length === 0) return;
    map.fitBounds(group.getBounds(), { padding: [64, 48], maxZoom: 12 });
  }

  return (
    <div>
      <div className="mb-3 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={centreOnMe}
          className="inline-flex min-h-11 items-center rounded-full bg-ink px-4 text-sm font-medium text-paper"
        >
          Centre on my position
        </button>
        <button
          type="button"
          onClick={fitShown}
          className="inline-flex min-h-11 items-center rounded-full border border-line bg-card px-4 text-sm font-medium"
        >
          Fit the stays shown
        </button>
      </div>
      {locateMsg ? <p className="mb-3 text-sm text-muted">{locateMsg}</p> : null}
      <div className="fieldstay-map overflow-hidden rounded-lg border border-line">
        <div ref={frame} className="h-[min(52vh,420px)] w-full bg-ember-soft sm:h-[min(72vh,720px)]" />
      </div>
    </div>
  );
}

const LEFT_LABEL = new Set([
  "gootchie-creek",
  "kinkuna",
  "scarness-caravan-park",
  "jamieson-hotel",
  "queanbeyan-riverside",
  "ramada-shoal-bay",
  "habitat-noosa",
]);

/** Vertical nudge so nearby Fraser Coast names do not sit on the same line. */
const LABEL_DY: Record<string, number> = {
  "woodgate-beach": -26,
  "burrum-point": 28,
  "park-lane-north-shore": 22,
};

function labelIcon(L: LeafletNs, stay: Stay, selected: boolean, narrow: boolean) {
  const dot = `<span class="stay-pin-dot" style="background:${COLOR[stay.category]}"></span>`;
  if (narrow) {
    return L.divIcon({
      className: "stay-marker",
      html: `<a class="stay-pin stay-pin-compact${selected ? " is-on" : ""}" href="/stays/${stay.slug}" aria-label="${escapeHtml(stay.name)}">${dot}</a>`,
      iconSize: [28, 28],
      iconAnchor: [14, 14],
    });
  }
  const side = LEFT_LABEL.has(stay.slug) ? "left" : "right";
  const dy = LABEL_DY[stay.slug] ?? 0;
  const textWidth = Math.ceil(stay.name.length * 7.6) + 22;
  const width = 22 + 8 + textWidth;
  const height = 44;
  const name = `<span class="stay-pin-name">${escapeHtml(stay.name)}</span>`;
  return L.divIcon({
    className: "stay-marker",
    html: `<a class="stay-pin${selected ? " is-on" : ""}" href="/stays/${stay.slug}">${
      side === "left" ? name + dot : dot + name
    }</a>`,
    iconSize: [width, height],
    iconAnchor: [side === "left" ? width - 11 : 11, height / 2 - dy],
  });
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "\u0026amp;")
    .replaceAll("<", "\u0026lt;")
    .replaceAll(">", "\u0026gt;")
    .replaceAll('"', "\u0026quot;");
}
