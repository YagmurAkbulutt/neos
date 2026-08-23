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

const portAgencyImages: SlideImage[] = [
  { src: '/images/services/port-agency/01.jpg', alt: 'Port agency operations at Turkish port' },
  { src: '/images/services/port-agency/02.jpg', alt: 'Vessel port call coordination' },
  { src: '/images/services/port-agency/03.jpg', alt: 'Ship alongside during port agency service' },
  { src: '/images/services/port-agency/04.jpg', alt: 'Harbour operation for port agency service' },
  { src: '/images/services/port-agency/05.jpg', alt: 'Port terminal and vessel operations' },
  { src: '/images/services/port-agency/06.jpg', alt: 'Port agency field operation' },
]

const straitsAgencyImages: SlideImage[] = [
  { src: '/images/services/straits-agency/01.jpg', alt: 'Straits agency transit coordination' },
  { src: '/images/services/straits-agency/02.jpg', alt: 'Vessel transit through Turkish Straits' },
  { src: '/images/services/straits-agency/03.jpg', alt: 'Turkish Straits passage operation' },
  { src: '/images/services/straits-agency/04.jpg', alt: 'Ship passing through the strait' },
  { src: '/images/services/straits-agency/05.jpg', alt: 'Bosphorus transit agency support' },
  { src: '/images/services/straits-agency/06.jpg', alt: 'Strait navigation support service' },
  { src: '/images/services/straits-agency/07.jpg', alt: 'Vessel underway in Turkish Straits' },
  { src: '/images/services/straits-agency/08.jpg', alt: 'Straits agency vessel monitoring' },
]

const shipyardAgencyImages: SlideImage[] = [
  { src: '/images/services/shipyard-agency/01.jpg', alt: 'Vessel repair and maintenance at Turkish shipyard' },
  { src: '/images/services/shipyard-agency/02.jpg', alt: 'Ship drydocking operation' },
  { src: '/images/services/shipyard-agency/03.jpg', alt: 'Propeller and rudder shipyard work' },
  { src: '/images/services/shipyard-agency/04.jpg', alt: 'Vessel hull cleaning and painting' },
  { src: '/images/services/shipyard-agency/05.jpg', alt: 'Shipyard crane and docking support' },
  { src: '/images/services/shipyard-agency/06.jpg', alt: 'Technical service at shipyard' },
  { src: '/images/services/shipyard-agency/07.jpg', alt: 'Shipyard conversion and repair project' },
]

const husbandryAgencyImages: SlideImage[] = [
  { src: '/images/services/husbandry-agency/01.jpg', alt: 'Crew change and logistics coordination' },
  { src: '/images/services/husbandry-agency/02.jpg', alt: 'Fresh provisions and food supply delivery' },
  { src: '/images/services/husbandry-agency/03.jpg', alt: 'Ship spare parts transportation and logistics' },
  { src: '/images/services/husbandry-agency/04.jpg', alt: 'Launch boat service boat at anchor' },
  { src: '/images/services/husbandry-agency/05.jpg', alt: 'Vessel husbanding and master assistance ashore' },
]

const protectingAgencyImages: SlideImage[] = [
  { src: '/images/services/protecting-agency/01.jpg', alt: 'Owner protecting agency supervision' },
  { src: '/images/services/protecting-agency/02.jpg', alt: 'Independent port operations monitoring' },
  { src: '/images/services/protecting-agency/03.jpg', alt: 'Lighthouse safety representation' },
  { src: '/images/services/protecting-agency/04.jpg', alt: 'Vessel port cost auditing and control' },
]

const lsdWorkMaterialsSupplyImages: SlideImage[] = [
  { src: '/images/services/lsd-work-materials-supply/01.jpg', alt: 'Lashing securing and dunnaging operation' },
  { src: '/images/services/lsd-work-materials-supply/02.jpg', alt: 'Cargo securing work on vessel' },
  { src: '/images/services/lsd-work-materials-supply/03.jpg', alt: 'Dunnaging and cargo preparation service' },
  { src: '/images/services/lsd-work-materials-supply/04.jpg', alt: 'Lashing work for cargo safety' },
  { src: '/images/services/lsd-work-materials-supply/05.jpg', alt: 'Securing materials prepared for cargo operation' },
  { src: '/images/services/lsd-work-materials-supply/06.jpg', alt: 'Cargo lashing equipment and field work' },
  { src: '/images/services/lsd-work-materials-supply/07.jpg', alt: 'Lashing and securing service at port' },
  { src: '/images/services/lsd-work-materials-supply/08.jpg', alt: 'Cargo support and dunnaging application' },
  { src: '/images/services/lsd-work-materials-supply/09.jpg', alt: 'Lashing service for heavy cargo' },
  { src: '/images/services/lsd-work-materials-supply/10.jpg', alt: 'Securing work performed on cargo' },
  { src: '/images/services/lsd-work-materials-supply/11.jpg', alt: 'Dunnaging materials and cargo handling support' },
  { src: '/images/services/lsd-work-materials-supply/12.jpg', alt: 'Cargo securing operation detail' },
  { src: '/images/services/lsd-work-materials-supply/13.jpg', alt: 'Lashing team cargo safety work' },
  { src: '/images/services/lsd-work-materials-supply/14.jpg', alt: 'Cargo fastening and securing service' },
  { src: '/images/services/lsd-work-materials-supply/15.jpg', alt: 'Port cargo lashing operation' },
  { src: '/images/services/lsd-work-materials-supply/16.jpg', alt: 'Lashing equipment application' },
  { src: '/images/services/lsd-work-materials-supply/17.jpg', alt: 'Secured cargo on vessel deck' },
  { src: '/images/services/lsd-work-materials-supply/18.jpg', alt: 'Dunnaging and lashing field operation' },
  { src: '/images/services/lsd-work-materials-supply/19.jpg', alt: 'Completed lashing securing and dunnaging work' },
  { src: '/images/services/lsd-work-materials-supply/materials-supply-01.jpg', alt: 'Materials supply for vessel operations' },
  { src: '/images/services/lsd-work-materials-supply/materials-supply-02.jpg', alt: 'Ship materials supply service' },
  { src: '/images/services/lsd-work-materials-supply/materials-supply-03.jpg', alt: 'Delivered materials for maritime service' },
]

export const services: ServiceItem[] = [
  {
    slug: 'port-agency',
    title: 'Port Agency Service',
    tagline: 'Your single point of contact for every Turkish port call.',
    heroImage: '/images/services/port-agency/01.jpg',
    images: portAgencyImages,
    overview:
      'NEOS Maritime provides comprehensive port agency services for vessels of all types and sizes across Turkish ports and terminals. From pre-arrival coordination to final departure, our experienced team manages every formality, liaison, and operational requirement so your vessel moves efficiently and on schedule.',
    highlights: [
      'Serving Turkish ports and terminals',
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
    related: ['straits-agency', 'husbandry-agency', 'protecting-agency'],
  },
  {
    slug: 'straits-agency',
    title: 'Straits Agency Service',
    tagline: 'Reliable transit coordination for the Turkish Straits.',
    heroImage: '/images/services/straits-agency/01.jpg',
    images: straitsAgencyImages,
    overview:
      'NEOS Maritime coordinates Bosphorus and Dardanelles strait transits with close attention to timing, documentation, authority communication, and operational updates. Our team keeps owners, operators, and masters informed throughout the passage and remains available around the clock for any change in schedule or requirement.',
    highlights: [
      'Bosphorus and Dardanelles transit support',
      '24/7 monitoring and status updates',
      'Authority and traffic control coordination',
      'Fast response to schedule changes',
    ],
    included: [
      {
        label: 'Transit Planning',
        desc: 'Pre-arrival checks, transit timing, and coordination of required strait passage arrangements.',
      },
      {
        label: 'Authority Liaison',
        desc: 'Communication with relevant Turkish authorities, traffic services, and local stakeholders.',
      },
      {
        label: 'Documentation Support',
        desc: 'Review and coordination of transit-related documents, declarations, and notifications.',
      },
      {
        label: 'Real-Time Reporting',
        desc: 'Prompt updates to owners, operators, and masters before, during, and after the passage.',
      },
      {
        label: 'Anchorage Assistance',
        desc: 'Support for waiting, anchorage, launch boat, crew, or supply requirements connected to transit.',
      },
      {
        label: 'Emergency Coordination',
        desc: 'Rapid local support if transit plans change or the vessel requires urgent assistance.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Transit Details',
        desc: 'We receive vessel details, ETA, destination, cargo status, and operational requirements.',
      },
      {
        step: '02',
        title: 'Pre-Transit Coordination',
        desc: 'Required notifications, timing, and authority communication are managed before arrival.',
      },
      {
        step: '03',
        title: 'Passage Monitoring',
        desc: 'The transit is followed closely and all parties receive practical operational updates.',
      },
      {
        step: '04',
        title: 'Completion',
        desc: 'Final transit status and related documentation are shared once the passage is completed.',
      },
    ],
    related: ['port-agency', 'protecting-agency', 'husbandry-agency'],
  },
  {
    slug: 'shipyard-agency',
    title: 'Shipyard Agency Service',
    tagline: 'Dedicated agency support for Turkish shipyard calls.',
    heroImage: '/images/services/shipyard-agency/01.jpg',
    images: shipyardAgencyImages,
    overview:
      'NEOS Maritime supports vessels calling Turkish shipyards for repair, maintenance, docking, conversion, or technical attendance. We coordinate the local agency requirements around the yard stay, helping owners and managers keep communication, permissions, crew matters, deliveries, and service providers under control.',
    highlights: [
      'Agency support for repair and docking calls',
      'Shipyard and contractor coordination',
      'Crew, spares, stores, and logistics support',
      'Clear communication during the yard stay',
    ],
    included: [
      {
        label: 'Yard Call Coordination',
        desc: 'Local coordination before arrival, during the yard period, and up to final departure.',
      },
      {
        label: 'Authority Formalities',
        desc: 'Management of port, immigration, customs, and other local formalities connected to the call.',
      },
      {
        label: 'Crew Logistics',
        desc: 'Crew change, hotel, transport, medical, and welfare arrangements during the shipyard period.',
      },
      {
        label: 'Spares & Materials',
        desc: 'Coordination of spare parts, stores, equipment, and materials delivery to the vessel or yard.',
      },
      {
        label: 'Service Providers',
        desc: 'Support with surveyors, technicians, workshops, suppliers, and other local service providers.',
      },
      {
        label: 'Cost Tracking',
        desc: 'Transparent local expense monitoring and reporting throughout the shipyard operation.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Yard Scope',
        desc: 'We receive the vessel schedule, yard plan, and expected local support requirements.',
      },
      {
        step: '02',
        title: 'Local Setup',
        desc: 'Formalities, contact points, suppliers, and communication routines are established before arrival.',
      },
      {
        step: '03',
        title: 'Yard Attendance',
        desc: 'We support daily operational needs and coordinate local actions during the yard stay.',
      },
      {
        step: '04',
        title: 'Sailing & Account',
        desc: 'Departure formalities and final account documentation are completed after the yard call.',
      },
    ],
    related: ['husbandry-agency', 'port-agency', 'lsd-work-materials-supply'],
  },
  {
    slug: 'husbandry-agency',
    title: 'Husbandry Agency Service',
    tagline: 'Everything your vessel needs while in port, handled.',
    heroImage: '/images/services/husbandry-agency/01.jpg',
    images: husbandryAgencyImages,
    overview:
      'Our husbandry agency service handles the vessel\'s non-commercial requirements during port, anchorage, strait, or shipyard calls. Whether the request is crew change, medical support, spare parts, provisions, cash-to-master, technical attendance, or urgent local assistance, NEOS Maritime acts as the vessel\'s trusted shoreside operator.',
    highlights: [
      'Crew and welfare support',
      'Spares, stores, and technical logistics',
      'Medical and emergency coordination',
      '24/7 response for vessel requirements',
    ],
    included: [
      {
        label: 'Crew Change Coordination',
        desc: 'Joining and departing crew arrangements, transfers, hotel bookings, and immigration support.',
      },
      {
        label: 'Spare Parts Logistics',
        desc: 'Customs coordination, collection, transport, and delivery of vessel spares to berth, yard, or anchorage.',
      },
      {
        label: 'Medical Assistance',
        desc: 'Emergency medical coordination, hospital transfers, and liaison with port health authorities.',
      },
      {
        label: 'Cash to Master',
        desc: 'Secure cash delivery to the master according to owner or manager instructions.',
      },
      {
        label: 'Stores & Provisions',
        desc: 'Fresh provisions, bonded stores, cabin stores, deck stores, and daily vessel supplies.',
      },
      {
        label: 'Waste & Slop Disposal',
        desc: 'Compliant garbage, bilge water, and slop disposal arrangements in line with local rules.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Request Received',
        desc: 'The master, owner, or manager sends the requirement to our operations team.',
      },
      {
        step: '02',
        title: 'Local Coordination',
        desc: 'We identify the right supplier, contractor, authority, or logistics route for the request.',
      },
      {
        step: '03',
        title: 'Delivery',
        desc: 'The service or material is delivered to the vessel with local supervision where required.',
      },
      {
        step: '04',
        title: 'Reporting',
        desc: 'Completion updates, supporting documents, and cost details are shared with the client.',
      },
    ],
    related: ['port-agency', 'shipyard-agency', 'lsd-work-materials-supply'],
  },
  {
    slug: 'protecting-agency',
    title: 'Protecting Agency Service',
    tagline: 'Independent representation for owners and charterers.',
    heroImage: '/images/services/protecting-agency/01.jpg',
    images: protectingAgencyImages,
    overview:
      'At NEOS Maritime & Shipping Agency, we offer comprehensive Protecting Agency Services to safeguard the interests of shipowners and operators during port calls across Turkey. Acting as your trusted local partner, we ensure your vessel\'s operations run smoothly, efficiently, and in full compliance with regulations. With our deep local expertise and commitment to excellence, NEOS Maritime & Shipping Agency is dedicated to delivering reliable and efficient Protecting Agency Services that give you peace of mind.',
    highlights: [
      'Close monitoring of all port activities',
      'Transparent reporting and cost control to minimize unexpected expenses',
      'Coordination with stakeholders to ensure seamless operations',
      'Supervision of cargo handling, crew changes, and port formalities',
      'Proactive communication and updates at every stage',
    ],
    included: [
      {
        label: 'Close Monitoring',
        desc: 'Close monitoring of all port activities to protect your interests.',
      },
      {
        label: 'Reporting & Cost Control',
        desc: 'Transparent reporting and cost control to minimize unexpected expenses.',
      },
      {
        label: 'Stakeholder Coordination',
        desc: 'Coordination with stakeholders to ensure seamless operations.',
      },
      {
        label: 'Cargo & Crew Supervision',
        desc: 'Supervision of cargo handling, crew changes, and port formalities.',
      },
      {
        label: 'Proactive Updates',
        desc: 'Proactive communication and updates to keep you informed at every stage.',
      },
      {
        label: 'Reliable Local Expertise',
        desc: 'Deep local expertise and a commitment to excellence that give you peace of mind.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Scope Confirmed',
        desc: 'We define the protecting agency scope and the client\'s reporting expectations.',
      },
      {
        step: '02',
        title: 'Operation Monitored',
        desc: 'Local developments, costs, and key milestones are followed in real time.',
      },
      {
        step: '03',
        title: 'Issues Escalated',
        desc: 'Risks, delays, or irregular cost items are flagged early with practical recommendations.',
      },
      {
        step: '04',
        title: 'Final Review',
        desc: 'We review the outcome, documentation, and final cost picture after completion.',
      },
    ],
    related: ['port-agency', 'straits-agency', 'shipyard-agency'],
  },
  {
    slug: 'lsd-work-materials-supply',
    title: 'L/S/D Work and Materials Supply',
    tagline: 'Lashing, securing, dunnaging, and certified cargo support.',
    heroImage: '/images/services/lsd-work-materials-supply/01.jpg',
    images: lsdWorkMaterialsSupplyImages,
    overview:
      'At NEOS Maritime & Shipping Agency, we provide comprehensive Lashing, Securing, and Dunnaging (L/S/D) solutions to ensure the safe handling and transport of your cargo. Partnering with the most experienced and certified teams, we deliver top-quality services tailored to all cargo types at ports across Turkey.',
    highlights: [
      'Comprehensive Lashing, Securing, and Dunnaging solutions',
      'Experienced and certified teams',
      'Services tailored to all cargo types',
      'Available at ports across Turkey',
    ],
    included: [
      {
        label: 'Lashing & Unlashing',
        desc: 'Expertly securing and releasing cargo for safe and efficient operations.',
      },
      {
        label: 'Welding & Unwelding',
        desc: 'Professional welding solutions to meet the specific requirements of your cargo.',
      },
      {
        label: 'Lashing Equipment Supply',
        desc: 'A full range of high-quality lashing materials to support your operations.',
      },
      {
        label: 'Lashing Certifications',
        desc: 'Issuing authorized certifications to ensure compliance with international standards.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Requirement',
        desc: 'The client shares the material list, work scope, deadline, and delivery location.',
      },
      {
        step: '02',
        title: 'Sourcing',
        desc: 'We check local availability, supplier options, work feasibility, timing, and cost.',
      },
      {
        step: '03',
        title: 'Execution',
        desc: 'The work or delivery is coordinated locally with progress updates to the client.',
      },
      {
        step: '04',
        title: 'Close-Out',
        desc: 'Completion evidence, service notes, delivery documents, and cost details are shared.',
      },
    ],
    related: ['shipyard-agency', 'husbandry-agency', 'port-agency'],
  },
]

export function getService(slug: string): ServiceItem | undefined {
  return services.find((s) => s.slug === slug)
}

export function getRelatedServices(slugs: string[]): ServiceItem[] {
  return services.filter((s) => slugs.includes(s.slug))
}
