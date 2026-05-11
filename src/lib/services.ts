export type SlideImage = { src: string; alt: string }

export type ServiceItem = {
  slug: string
  title: string
  tagline: string
  heroImage: string
  images: SlideImage[]
  overview: string
  highlights: string[]
  included: { label: string; desc: string }[]
  process: { step: string; title: string; desc: string }[]
  related: string[]
}

export const services: ServiceItem[] = [
  {
    slug: 'ship-agency',
    title: 'Ship Agency',
    tagline: 'Your single point of contact for every Turkish port call.',
    heroImage: '/gg.jpeg',
    images: [
      { src: '/gg.jpeg',          alt: 'Container vessel underway' },
      { src: '/ggg.jpeg',         alt: 'Aerial view of vessel at sea' },
      { src: '/gggg.jpeg',        alt: 'Container port operations at dusk' },
      { src: '/port-aerial.jpeg', alt: 'Aerial view of container port' },
      { src: '/ship-hero.jpeg',   alt: 'Container ship at sea' },
    ],
    overview:
      'NEOS Maritime provides comprehensive ship agency services for vessels of all types and sizes across every Turkish port, terminal, and shipyard. From pre-arrival coordination to final departure, our experienced team manages every formality, liaison, and operational requirement — so your vessel moves efficiently and on schedule.',
    highlights: [
      'Serving 80+ Turkish ports & terminals',
      '24/7 on-call operations team',
      'Direct relationships with port authorities',
      'Transparent disbursement accounts',
    ],
    included: [
      {
        label: 'Pre-Arrival Coordination',
        desc: 'Port authority notifications, berth scheduling, and arrival clearance paperwork handled in advance.',
      },
      {
        label: 'Arrival & Departure Formalities',
        desc: 'Full management of customs, immigration, health, and port authority arrival and departure formalities.',
      },
      {
        label: 'Port Authority Liaison',
        desc: 'Direct communication with harbour masters, port operators, and all relevant official bodies.',
      },
      {
        label: 'Cargo Operations Support',
        desc: 'Coordination with stevedores, terminal operators, and cargo inspectors throughout the port call.',
      },
      {
        label: 'Disbursement Accounts',
        desc: 'Detailed, transparent DA (disbursement account) preparation and reconciliation for all port costs.',
      },
      {
        label: 'Real-Time Updates',
        desc: 'Continuous status reporting to owners and operators throughout the entire port call.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Pre-Arrival',
        desc: 'We receive vessel details, coordinate berth booking, prepare all documentation, and notify all relevant authorities.',
      },
      {
        step: '02',
        title: 'Arrival',
        desc: 'Our team meets the vessel, manages all formalities, and coordinates the smooth start of port operations.',
      },
      {
        step: '03',
        title: 'In-Port Operations',
        desc: 'Continuous on-ground support: cargo monitoring, authority liaisons, husbandry, and any ad-hoc requirements.',
      },
      {
        step: '04',
        title: 'Departure & DA',
        desc: 'Departure clearance handled promptly, followed by a detailed and transparent disbursement account.',
      },
    ],
    related: ['husbandry', 'port-dues', 'customs-clearance'],
  },
  {
    slug: 'husbandry',
    title: 'Husbandry Services',
    tagline: 'Everything your vessel needs while in port — handled.',
    heroImage: '/ggg.jpeg',
    images: [
      { src: '/g.jpeg',           alt: 'Navigation bridge operations' },
      { src: '/ship-crane.jpeg',  alt: 'Port crane and vessel operations' },
      { src: '/ship-tanker.jpeg', alt: 'Vessel receiving assistance at sea' },
      { src: '/gg.jpeg',          alt: 'Vessel underway' },
      { src: '/ggg.jpeg',         alt: 'Aerial vessel view' },
    ],
    overview:
      'Our husbandry division handles all non-commercial vessel requirements during a port call. Whether it is a critical spare part, a technical repair, a medical emergency, or routine maintenance coordination, NEOS Maritime acts as the vessel\'s trusted shoreside operator — fast, reliable, and always available.',
    highlights: [
      'Spares & technical logistics on demand',
      'Medical and crew welfare services',
      'Trusted repair yard contacts across Turkey',
      '24/7 emergency response capability',
    ],
    included: [
      {
        label: 'Spare Parts Logistics',
        desc: 'Customs clearance, collection, and secure delivery of vessel spares to the berth or anchorage.',
      },
      {
        label: 'Repair Coordination',
        desc: 'Sourcing and managing approved repair contractors, surveyors, and classification society inspectors.',
      },
      {
        label: 'Medical Assistance',
        desc: 'Emergency medical coordination, crew hospital transfers, and liaison with port health authorities.',
      },
      {
        label: 'Fresh Water Supply',
        desc: 'Arranging fresh water supply at berth or by water barge for all Turkish ports.',
      },
      {
        label: 'Cash & Mail Delivery',
        desc: 'Secure cash advances to the master and reliable delivery of crew mail and parcels.',
      },
      {
        label: 'Waste & Slop Disposal',
        desc: 'Compliant garbage, bilge water, and slop disposal arrangements in line with MARPOL regulations.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Requirement Identified',
        desc: 'Master or owner contacts our 24/7 ops team with the husbandry request — by phone, email, or WhatsApp.',
      },
      {
        step: '02',
        title: 'Rapid Sourcing',
        desc: 'We identify and mobilise the right contractor, supplier, or authority using our established local network.',
      },
      {
        step: '03',
        title: 'Execution On Board',
        desc: 'Service is delivered to the vessel — on berth, at anchorage, or at the dry dock — with full supervision.',
      },
      {
        step: '04',
        title: 'Reporting & Billing',
        desc: 'A detailed report and cost breakdown is provided to owner or manager after each husbandry job.',
      },
    ],
    related: ['ship-agency', 'crew-services', 'bunkering'],
  },
  {
    slug: 'crew-services',
    title: 'Crew Services',
    tagline: 'Seamless crew changes and welfare at every Turkish port.',
    heroImage: '/g.jpeg',
    images: [
      { src: '/g.jpeg',           alt: "Ship officer at vessel's navigation console" },
      { src: '/gg.jpeg',          alt: 'Vessel at sea' },
      { src: '/ggg.jpeg',         alt: 'Aerial view of vessel underway' },
      { src: '/port-aerial.jpeg', alt: 'Port where crew changes take place' },
      { src: '/ship-hero.jpeg',   alt: 'Container ship' },
    ],
    overview:
      'NEOS Maritime manages the complete lifecycle of crew changes and welfare at Turkish ports. From the moment a seafarer lands in Turkey to their safe departure, we coordinate every step — visa applications, airport transfers, hotel accommodation, and immigration formalities — minimising vessel delay and protecting crew welfare.',
    highlights: [
      'Crew changes at all major Turkish airports',
      'Visa and immigration expertise',
      'Trusted hotel and transport partners',
      'On-call crew welfare coordination',
    ],
    included: [
      {
        label: 'Crew Change Coordination',
        desc: 'Full end-to-end management of joining and departing crew, from flight confirmation to gangway.',
      },
      {
        label: 'Visa & Immigration Assistance',
        desc: 'Seafarer visa applications, transit visa support, and liaisons with Turkish immigration authorities.',
      },
      {
        label: 'Airport Transfers',
        desc: 'Reliable door-to-door transport between Istanbul, Izmir, Mersin, Samsun airports and the vessel.',
      },
      {
        label: 'Hotel Accommodation',
        desc: 'Booking and management of crew hotels near the port, at competitive rates with trusted partners.',
      },
      {
        label: 'Crew Repatriation',
        desc: 'Repatriation arrangements for sick, injured, or sign-off crew — managed compassionately and promptly.',
      },
      {
        label: 'Medical Referrals',
        desc: 'Coordination with approved maritime medical clinics for PEME exams and onboard medical emergencies.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Crew Details Received',
        desc: 'Owner or operator sends crew joining/leaving lists with flight details and visa requirements.',
      },
      {
        step: '02',
        title: 'Documentation & Logistics',
        desc: 'We apply for necessary permits, book hotels and transfers, and prepare all shore passes.',
      },
      {
        step: '03',
        title: 'Airport to Gangway',
        desc: 'Our representative meets arriving crew, handles immigration, and escorts them to the vessel.',
      },
      {
        step: '04',
        title: 'Departure & Reporting',
        desc: 'Departing crew are transferred to the airport with all sign-off documents completed and certified.',
      },
    ],
    related: ['husbandry', 'ship-agency', 'customs-clearance'],
  },
  {
    slug: 'customs-clearance',
    title: 'Customs Clearance',
    tagline: 'Fast, compliant customs handling for vessels and cargo.',
    heroImage: '/gggg.jpeg',
    images: [
      { src: '/gggg.jpeg',        alt: 'Container terminal at dusk' },
      { src: '/port-top.jpeg',    alt: 'Aerial container port logistics' },
      { src: '/ship-crane.jpeg',  alt: 'Terminal crane and vessel' },
      { src: '/port-aerial.jpeg', alt: 'Port logistics operations' },
      { src: '/ggg.jpeg',         alt: 'Vessel at sea' },
    ],
    overview:
      'Turkish customs regulations are detailed and time-sensitive. NEOS Maritime\'s licensed customs team ensures that vessel spares, ship stores, crew effects, and cargo are cleared swiftly and in full compliance — eliminating delays, fines, and bureaucratic friction that can cost ship operators significant time and money.',
    highlights: [
      'Licensed customs brokers on staff',
      'Ship stores & spares clearance experts',
      'Strong relationships with Turkish customs directorates',
      'Rapid turnaround on urgent shipments',
    ],
    included: [
      {
        label: 'Ship Stores Clearance',
        desc: 'Clearance of provisions, consumables, and bonded stores — domestic and imported — at all Turkish ports.',
      },
      {
        label: 'Spare Parts Import',
        desc: 'Temporary or permanent import of vessel spare parts under customs supervision, with full documentation.',
      },
      {
        label: 'Crew Personal Effects',
        desc: 'Management of crew personal belongings, duty-free allowances, and restricted item declarations.',
      },
      {
        label: 'Cargo Documentation',
        desc: 'Preparation and submission of all required manifests, bills of lading, and cargo declarations.',
      },
      {
        label: 'Bonded Warehouse Services',
        desc: 'Temporary storage of goods under customs bond at approved warehouses near Turkish ports.',
      },
      {
        label: 'Dangerous Goods Handling',
        desc: 'Customs processing and port authority notifications for IMDG-classified dangerous goods.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Documents Received',
        desc: 'We receive packing lists, invoices, and airway bills — usually 24 hours before vessel or cargo arrival.',
      },
      {
        step: '02',
        title: 'Customs Declaration',
        desc: 'Our brokers prepare and submit the customs declaration via Turkey\'s BILGE/BİLGE system.',
      },
      {
        step: '03',
        title: 'Inspection & Release',
        desc: 'We represent the vessel during any customs inspection and expedite release of the goods.',
      },
      {
        step: '04',
        title: 'Delivery to Vessel',
        desc: 'Cleared items are transported to the berth and delivered to the vessel under our supervision.',
      },
    ],
    related: ['ship-agency', 'husbandry', 'port-dues'],
  },
  {
    slug: 'port-dues',
    title: 'Port Dues & Tariffs',
    tagline: 'All port costs managed, disbursed, and accounted for.',
    heroImage: '/ggg.jpeg',
    images: [
      { src: '/gggg.jpeg',        alt: 'Port at dusk with cranes' },
      { src: '/ggg.jpeg',         alt: 'Vessel navigating at sea' },
      { src: '/ship-hero.jpeg',   alt: 'Container vessel' },
      { src: '/port-top.jpeg',    alt: 'Port from above' },
      { src: '/port-aerial.jpeg', alt: 'Aerial port view' },
    ],
    overview:
      'Port costs in Turkey encompass a wide range of dues — from pilotage and towage to lighthouse fees and berth tariffs. NEOS Maritime manages the full disbursement of all port-related charges on behalf of owners and operators, providing accurate proforma estimates, advance funding management, and fully documented final accounts.',
    highlights: [
      'Accurate proforma DA on request',
      'Advance payment management',
      'Full Turkish port tariff expertise',
      'Transparent final disbursement accounts',
    ],
    included: [
      {
        label: 'Pilotage Fees',
        desc: 'Management and disbursement of mandatory pilotage charges at all compulsory Turkish pilotage ports.',
      },
      {
        label: 'Towage & Tugboat Fees',
        desc: 'Booking and payment of tug services for berthing and unberthing manoeuvres across Turkish ports.',
      },
      {
        label: 'Berth Hire & Port Dues',
        desc: 'Payment of all berth fees, port dues, and terminal charges levied by the port administration.',
      },
      {
        label: 'Lighthouse & Navigation Dues',
        desc: 'Payment of lighthouse dues, coastal safety fees, and navigational aid charges to relevant authorities.',
      },
      {
        label: 'Port Health & Quarantine',
        desc: 'Payment of port health authority fees, free pratique, and quarantine inspection charges.',
      },
      {
        label: 'Proforma & Final DA',
        desc: 'Pre-arrival proforma disbursement account and fully documented final DA with all supporting invoices.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Proforma Estimate',
        desc: 'Before arrival, we provide a detailed proforma DA with all expected port costs and fees.',
      },
      {
        step: '02',
        title: 'Advance Funds',
        desc: 'We receive advance funds from owner/operator and manage all port payments in-port.',
      },
      {
        step: '03',
        title: 'Disbursement',
        desc: 'All dues are paid to the relevant authorities promptly, with every receipt obtained and filed.',
      },
      {
        step: '04',
        title: 'Final Account',
        desc: 'A complete final DA is issued with supporting documentation within an agreed timeframe post-departure.',
      },
    ],
    related: ['ship-agency', 'customs-clearance', 'husbandry'],
  },
  {
    slug: 'bunkering',
    title: 'Bunkering & Provisions',
    tagline: 'Quality fuel and provisions supply at every Turkish port.',
    heroImage: '/gg.jpeg',
    images: [
      { src: '/gg.jpeg',          alt: 'Vessel underway at sea' },
      { src: '/ship-tanker.jpeg', alt: 'Tanker receiving provisions' },
      { src: '/ggg.jpeg',         alt: 'Aerial view of vessel' },
      { src: '/ship-hero.jpeg',   alt: 'Container ship at sea' },
      { src: '/gggg.jpeg',        alt: 'Port operations at dusk' },
    ],
    overview:
      'NEOS Maritime coordinates bunkering and vessel provisioning across all Turkish ports through established relationships with approved suppliers and bunker traders. We manage quantity, quality, and timing — ensuring your vessel is fuelled, stocked, and ready for sea with minimum delay and maximum reliability.',
    highlights: [
      'Access to all Turkish bunker suppliers',
      'MARPOL-compliant bunkering procedures',
      'Full provisions & chandling network',
      'On-site bunkering supervision on request',
    ],
    included: [
      {
        label: 'Marine Fuel Supply (HFO/VLSFO/MGO)',
        desc: 'Sourcing and coordination of all marine fuel grades at competitive prices from approved Turkish suppliers.',
      },
      {
        label: 'Lubricant Supply',
        desc: 'Marine lubricant sourcing and delivery for main engines, auxiliaries, and deck equipment.',
      },
      {
        label: 'Quantity & Quality Supervision',
        desc: 'Appointed independent surveyors to witness bunkering operations and verify delivered quantities.',
      },
      {
        label: 'Ship Provisions & Stores',
        desc: 'Sourcing and delivery of all food provisions, deck stores, cabin stores, and bonded goods.',
      },
      {
        label: 'Fresh Water Supply',
        desc: 'Potable and technical fresh water supply at berth or by water barge at all Turkish ports.',
      },
      {
        label: 'Safety & Deck Equipment',
        desc: 'Supply of safety equipment, ropes, mooring lines, paint, and general deck consumables.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Requirement & Enquiry',
        desc: 'Owner or master provides fuel quantity, grade, and delivery window — we obtain competitive quotes.',
      },
      {
        step: '02',
        title: 'Supplier Nomination',
        desc: 'Best-value, MARPOL-compliant supplier is nominated and confirmed with all relevant documentation.',
      },
      {
        step: '03',
        title: 'Bunkering Operation',
        desc: 'Bunkering proceeds under our supervision with independent quantity/quality survey if requested.',
      },
      {
        step: '04',
        title: 'BDR & Documentation',
        desc: 'Bunker delivery receipt, MARPOL annex VI declarations, and all documents dispatched to owner.',
      },
    ],
    related: ['husbandry', 'ship-agency', 'port-dues'],
  },
]

export function getService(slug: string): ServiceItem | undefined {
  return services.find((s) => s.slug === slug)
}

export function getRelatedServices(slugs: string[]): ServiceItem[] {
  return services.filter((s) => slugs.includes(s.slug))
}
