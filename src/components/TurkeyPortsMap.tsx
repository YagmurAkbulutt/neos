import Image from "next/image";

type LabelPos = "top" | "bottom" | "left" | "right" | "bottom-right" | "bottom-left" | "top-right" | "top-left";

type Port = {
  name: string;
  x: number; // % (0–100)
  y: number; // % (0–100)
  label?: LabelPos;
};

const PORTS: Port[] = [
  { name: "İstanbul", x: 20, y: 20, label: "top" },
  { name: "Kocaeli", x: 24, y: 23, label: "right" },
  { name: "Tekirdağ", x: 13, y: 21, label: "left" },
  { name: "Bandırma", x: 15.5, y: 30, label: "bottom-right" },
  { name: "Çanakkale", x: 7, y: 31, label: "bottom" },
  { name: "Aliağa", x: 10, y: 53, label: "left" },
  { name: "İzmir", x: 10, y: 58, label: "right" },
  { name: "Bodrum", x: 14, y: 84, label: "bottom" },
  { name: "Antalya", x: 29, y: 86, label: "bottom" },
  { name: "Mersin", x: 43, y: 86, label: "bottom" },
  { name: "İskenderun", x: 55, y: 85, label: "bottom" },
  { name: "Zonguldak", x: 33, y: 17, label: "top" },
  { name: "Sinop", x: 49, y: 11, label: "top" },
  { name: "Samsun", x: 54, y: 17, label: "top" },
  { name: "Trabzon", x: 72, y: 23, label: "top" },
  { name: "Hopa", x: 83, y: 16, label: "top" },
];

const LABEL_POS_CLASSES: Record<LabelPos, string> = {
  top: "left-1/2 bottom-full mb-1.5 -translate-x-1/2",
  bottom: "left-1/2 top-full mt-1.5 -translate-x-1/2",
  left: "right-full top-1/2 mr-1.5 -translate-y-1/2",
  right: "left-full top-1/2 ml-1.5 -translate-y-1/2",
  "bottom-right": "left-full top-full ml-1 mt-1",
  "bottom-left": "right-full top-full mr-1 mt-1",
  "top-right": "left-full bottom-full ml-1 mb-1",
  "top-left": "right-full bottom-full mr-1 mb-1",
};

const ROUTES: [string, string][] = [
  ["İstanbul", "Tekirdağ"],
  ["Tekirdağ", "Çanakkale"],
  ["Çanakkale", "Bandırma"],
  ["Bandırma", "Aliağa"],
  ["Aliağa", "İzmir"],
  ["İzmir", "Bodrum"],
  ["Bodrum", "Antalya"],
  ["Antalya", "Mersin"],
  ["Mersin", "İskenderun"],
  ["İstanbul", "Kocaeli"],
  ["Kocaeli", "Zonguldak"],
  ["Zonguldak", "Sinop"],
  ["Sinop", "Samsun"],
  ["Samsun", "Trabzon"],
  ["Trabzon", "Hopa"],
];

const MARQUEE_PORTS = PORTS.map((p) => p.name);
const PORT_MAP = Object.fromEntries(PORTS.map((p) => [p.name, p]));

function arcPath(a: Port, b: Port): string {
  const mx = (a.x + b.x) / 2;
  const my = (a.y + b.y) / 2;
  const lift = (a.y + b.y) / 2 < 50 ? -6 : 6;
  return `M ${a.x} ${a.y} Q ${mx} ${my + lift} ${b.x} ${b.y}`;
}

export function TurkeyPortsMap() {
  return (
    <div className="relative w-full">
      {/* HUD frame */}
      <div className="relative rounded-2xl border border-white/10 bg-[#06101e]/60 p-4 shadow-[0_0_60px_rgba(252,80,0,0.03)_inset] backdrop-blur-sm">
        {/* Corner brackets */}
        {[
          "top-1 left-1 border-l border-t",
          "top-1 right-1 border-r border-t",
          "bottom-1 left-1 border-l border-b",
          "bottom-1 right-1 border-r border-b",
        ].map((c) => (
          <span
            key={c}
            className={`pointer-events-none absolute ${c} h-4 w-4 border-[#fc5000]/80`}
          />
        ))}

        {/* HUD readouts */}
        <div className="pointer-events-none absolute right-4 top-4 z-20 font-mono text-[9px] uppercase tracking-widest text-slate-400/80 animate-hud-flicker">
          ◉ REC · {PORTS.length} NODES
        </div>
        <div className="pointer-events-none absolute left-4 bottom-4 z-20 font-mono text-[9px] uppercase tracking-widest text-slate-400/80">
          LAT 36–42°N · LON 26–45°E
        </div>
        <div className="pointer-events-none absolute right-4 bottom-4 z-20 font-mono text-[9px] uppercase tracking-widest text-[#fc5000]/90">
          STATUS · OPERATIONAL
        </div>

        <div
          className="relative mx-auto w-full overflow-hidden"
          style={{ aspectRatio: "1000 / 422" }}
        >
          {/* Inner grid */}
          <div
            className="pointer-events-none absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
          {/* Crosshair */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-0 h-full w-px bg-white/5" />
            <div className="absolute top-1/2 left-0 h-px w-full bg-white/5" />
          </div>

          {/* Turkey map silhouette */}
          <img
            src="/turkey-map.svg"
            alt="Türkiye haritası — limanlar"
            className="absolute inset-0 h-full w-full object-contain"
            style={{
              filter: "brightness(0) invert(1)",
              opacity: 0.12,
            }}
          />

          {/* Sea routes overlay */}
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="absolute inset-0 h-full w-full"
          >
            {ROUTES.map(([fromName, toName]) => {
              const a = PORT_MAP[fromName];
              const b = PORT_MAP[toName];
              if (!a || !b) return null;
              return (
                <path
                  key={`${fromName}-${toName}`}
                  d={arcPath(a, b)}
                  fill="none"
                  stroke="rgba(252,80,0,0.3)"
                  strokeWidth="0.25"
                  strokeDasharray="1.2 1"
                  vectorEffect="non-scaling-stroke"
                  className="animate-dash-flow"
                />
              );
            })}
          </svg>

          {/* Scanline */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div
              className="absolute left-0 right-0 h-[2px] animate-scanline"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(252,80,0,0.4), transparent)",
                boxShadow: "0 0 14px rgba(252,80,0,0.3)",
              }}
            />
          </div>

          {/* Port markers */}
          <div className="absolute inset-0">
            {PORTS.map((port, i) => (
              <div
                key={port.name}
                className="group absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${port.x}%`, top: `${port.y}%` }}
              >
                <span className="relative flex h-3 w-3 items-center justify-center">
                  <span
                    className="absolute inline-flex h-6 w-6 rounded-full border border-[#fc5000]/60 animate-ping"
                    style={{ animationDelay: `${(i % 6) * 0.25}s` }}
                  />
                  <span
                    className="absolute inline-flex h-3 w-3 rounded-full bg-[#fc5000]/30 animate-pulse"
                    style={{ animationDelay: `${(i % 4) * 0.3}s` }}
                  />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#fc5000] ring-2 ring-[#06101e] shadow-[0_0_12px_rgba(252,80,0,0.9)]" />
                </span>
                <span
                  className={`pointer-events-none absolute ${LABEL_POS_CLASSES[port.label ?? "bottom"]} whitespace-nowrap rounded-sm border border-white/10 bg-[#06101e]/85 px-1.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-slate-100 shadow-[0_0_8px_rgba(0,0,0,0.5)] backdrop-blur-sm`}
                >
                  {port.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}