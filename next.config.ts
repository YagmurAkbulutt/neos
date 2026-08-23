import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    qualities: [75, 80, 85, 90],
  },
  async redirects() {
    return [
      { source: '/iletisim', destination: '/contact', permanent: true },
      { source: '/biz-kimiz', destination: '/who-we-are/about-us', permanent: true },
      { source: '/biz-kimiz/hakkimizda', destination: '/who-we-are/about-us', permanent: true },
      { source: '/biz-kimiz/vizyon', destination: '/who-we-are/vision', permanent: true },
      { source: '/biz-kimiz/misyon', destination: '/who-we-are/mission', permanent: true },
      { source: '/biz-kimiz/degerlerimiz', destination: '/who-we-are/values', permanent: true },
      { source: '/hizmetler', destination: '/#services', permanent: true },
      { source: '/hizmetler/liman-acenteligi', destination: '/services/port-agency', permanent: true },
      { source: '/hizmetler/bogaz-acenteligi', destination: '/services/straits-agency', permanent: true },
      { source: '/hizmetler/tersane-acenteligi', destination: '/services/shipyard-agency', permanent: true },
      { source: '/hizmetler/husbandry-acenteligi', destination: '/services/husbandry-agency', permanent: true },
      { source: '/hizmetler/koruyucu-acentelik', destination: '/services/protecting-agency', permanent: true },
      {
        source: '/hizmetler/lsd-isleri-ve-malzeme-tedarigi',
        destination: '/services/lsd-work-materials-supply',
        permanent: true,
      },
    ]
  },
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
