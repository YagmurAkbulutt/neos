import Image from "next/image";

type LabelPos =
  | "top" | "bottom" | "left" | "right"
  | "bottom-right" | "bottom-left" | "top-right" | "top-left";

type Port = { name: string; x: number; y: number; label?: LabelPos };

const PORTS: Port[] = [
  { name: "İstanbul",   x: 20, y: 20, label: "top" },
  { name: "Kocaeli",    x: 24, y: 23, label: "right" },
  { name: "Tekirdağ",   x: 13, y: 21, label: "left" },
  { name: "Bandırma",   x: 14, y: 30, label: "bottom-right" },
  { name: "Çanakkale",  x: 7,  y: 31, label: "left" },
  { name: "Aliağa",     x: 10, y: 53, label: "left" },
  { name: "İzmir",      x: 10, y: 58, label: "left" },
  { name: "Bodrum",     x: 14, y: 84, label: "bottom" },
  { name: "Antalya",    x: 29, y: 86, label: "bottom" },
  { name: "Mersin",     x: 43, y: 86, label: "bottom" },
  { name: "İskenderun", x: 55, y: 85, label: "bottom" },
  { name: "Zonguldak",  x: 33, y: 17, label: "top" },
  { name: "Sinop",      x: 49, y: 11, label: "top" },
  { name: "Samsun",     x: 54, y: 17, label: "top" },
  { name: "Trabzon",    x: 72, y: 23, label: "top" },
  { name: "Hopa",       x: 83, y: 16, label: "top" },
];

const LABEL_POS_CLASSES: Record<LabelPos, string> = {
  top:            "left-1/2 bottom-full mb-1.5 -translate-x-1/2",
  bottom:         "left-1/2 top-full mt-1.5 -translate-x-1/2",
  left:           "right-full top-1/2 mr-1.5 -translate-y-1/2",
  right:          "left-full top-1/2 ml-1.5 -translate-y-1/2",
  "bottom-right": "left-full top-full ml-1 mt-1",
  "bottom-left":  "right-full top-full mr-1 mt-1",
  "top-right":    "left-full bottom-full ml-1 mb-1",
  "top-left":     "right-full bottom-full mr-1 mb-1",
};

export function TurkeyPortsMap() {
  return (
    <div
      className="relative mx-auto w-full"
      style={{ maxWidth: "1100px", aspectRatio: "1000 / 422" }}
    >
      <Image
        src="/turkey-map.svg"
        alt="Türkiye haritası — limanlar"
        fill
        sizes="(min-width: 1280px) 1100px, 100vw"
        className="absolute inset-0 h-full w-full object-contain"
      />

      <div className="absolute inset-0">
        {PORTS.map((port) => (
          <div
            key={port.name}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${port.x}%`, top: `${port.y}%` }}
          >
            <span className="relative flex h-3 w-3 items-center justify-center">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#fc5000] opacity-60" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-[#fc5000] ring-2 ring-white shadow-[0_0_12px_rgba(252,80,0,0.8)]" />
            </span>
            <span
              className={`pointer-events-none absolute ${LABEL_POS_CLASSES[port.label ?? "bottom"]} whitespace-nowrap rounded-md bg-[#0a1628] px-2 py-0.5 text-[10px] font-medium text-white shadow`}
            >
              {port.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
