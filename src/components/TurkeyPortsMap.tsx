type Port = {
  name: string
  x: number
  y: number
}

const PORTS: Port[] = [
  { name: "İstanbul",    x: 20, y: 20 },
  { name: "Kocaeli",     x: 24, y: 23 },
  { name: "Tekirdağ",   x: 13, y: 21 },
  { name: "Bandırma",   x: 14, y: 30 },
  { name: "Çanakkale",  x:  7, y: 31 },
  { name: "Aliağa",     x: 10, y: 53 },
  { name: "İzmir",      x: 10, y: 58 },
  { name: "Bodrum",      x: 14, y: 84 },
  { name: "Antalya",     x: 29, y: 86 },
  { name: "Mersin",      x: 43, y: 86 },
  { name: "İskenderun", x: 55, y: 85 },
  { name: "Zonguldak",   x: 33, y: 17 },
  { name: "Sinop",       x: 49, y: 11 },
  { name: "Samsun",      x: 54, y: 17 },
  { name: "Trabzon",     x: 72, y: 23 },
  { name: "Hopa",        x: 83, y: 16 },
]

export function TurkeyPortsMap() {
  return (
    <div
      className="relative mx-auto w-full"
      style={{ aspectRatio: "1000 / 422", maxWidth: "1000px" }}
    >
      <img
        src="/turkey-map.svg"
        alt="Türkiye haritası — limanlar"
        className="absolute inset-0 h-full w-full object-contain"
      />

      {/* Port markers */}
      <div className="absolute inset-0">
        {PORTS.map((port) => (
          <div
            key={port.name}
            className="group absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${port.x}%`, top: `${port.y}%` }}
          >
            <span className="relative flex h-3 w-3 items-center justify-center">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-60" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-brand ring-2 ring-navy" />
            </span>
            <span className="pointer-events-none absolute left-1/2 top-full mt-1 -translate-x-1/2 whitespace-nowrap rounded-md bg-brand px-2 py-0.5 text-[10px] font-bold text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
              {port.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
