/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Service, Project, Testimonial, TimelineEvent } from './types';

// Local image imports — Vite handles hashing and bundling correctly
import heroBgImg from './assets/images/cairo_hero_construction_1781467890616.jpg';
import engineersImg from './assets/images/engineers_site_blueprints_1781467904814.jpg';
import luxuryVillaImg from './assets/images/luxury_villa_complex_1781467918202.jpg';
import infrastructureImg from './assets/images/infrastructure_drone_shot_1781467933127.jpg';
import handshakeImg from './assets/images/construction_handshake_1781467946926.jpg';
import steelConcreteImg from './assets/images/steel_concrete_structure_1781467962830.jpg';

export const CONTACT_INFO = {
  phone: '012 81447691',
  phoneCall: '+201281447691',
  email: 'creatorsgroupegypt@yahoo.com',
  address: '16 شارع محمد كامل الحاروني, القاهرة, القاهرة, مصر, Cairo, Egypt.',
  addressEng: '16 Mohamed Kamel El-Harouni St., Nasr City, Cairo, Egypt',
  mapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.8252277457813!2d31.332349776262447!3d30.061937917877227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583e7428c92a69%3A0xc6cb5dae163467c6!2zMTYgTW9oYW1lZCBLYW1lbCBFbGhhcm91bmksIE5hc3IgQ2l0eSwgQ2Fpcm8gR292ZXJub3JhdGUsIEVneXB0!5e0!3m2!1sen!2seg!4v1781467900000!5m2!1sen!2seg',
  workingHours: [
    { days: 'Sunday - Thursday', hours: '08:00 AM - 05:00 PM' },
    { days: 'Saturday', hours: '09:00 AM - 03:00 PM' },
    { days: 'Friday', hours: 'Closed (Weekend)' }
  ]
};

export const IMAGES = {
  heroBg: heroBgImg,
  engineers: engineersImg,
  luxuryVilla: luxuryVillaImg,
  infrastructure: infrastructureImg,
  handshake: handshakeImg,
  steelConcrete: steelConcreteImg,
  
  // High quality complementary Unsplash images for full coverage (Projects 4, 5, 6 etc.)
  commercialTower: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop', // Beautiful finished glazed modern curtainwall commercial tower
  smartSchool: 'https://images.unsplash.com/photo-1541829019-2131560db152?q=80&w=1000&auto=format&fit=crop', // Modern luxury school campus
  coastalRoad: 'https://images.unsplash.com/photo-1590069261209-f8e9b8642343?q=80&w=1000&auto=format&fit=crop', // Modern seaside highway / road development
};

export const STATS = [
  { id: 'years', label: 'Years of Excellence', value: 13, suffix: '' },
  { id: 'projects', label: 'Projects Completed', value: 150, suffix: '+' },
  { id: 'engineers', label: 'Expert Engineers', value: 45, suffix: '+' }
];

export const SERVICES: Service[] = [
  {
    id: 'residential-commercial',
    title: 'Residential & Commercial Buildings',
    icon: 'Building2',
    description: 'Constructing high-end luxury residential towers, corporate office blocks, and vibrant commercial centers with global structural standards.',
    expandableDetails: [
      'State-of-the-art structural concrete frames exceeding standard wind & seismic calculations.',
      'Premium curtain walls, building insulation, thermal optimization, and energy-saving designs.',
      'Premium mixed-use development solutions with high architectural flexibility.',
      'Comprehensive safety and environmental certifications throughout construction.'
    ]
  },
  {
    id: 'bridges-infrastructure',
    title: 'Bridges & Infrastructure',
    icon: 'Milestone',
    description: 'Delivering mega-scale highway designs, structural bridges, heavy transport links, and vital urban expansion corridor works across Egypt.',
    expandableDetails: [
      'Advanced post-tensioning bridge systems and modular modern concrete precasting.',
      'Integrated water drainage, retaining walls, and underground utility networks.',
      'Heavy-load capacity grading, sub-base preparation, and wear-resistant polymer asphalt paving.',
      'Sustainably designed roundabouts and visual architectural structural pillars.'
    ]
  },
  {
    id: 'finishing-cladding',
    title: 'Finishing & Cladding',
    icon: 'Layers',
    description: 'Providing world-class interior finishing, natural Egyptian stone cladding, luxury marbles, and bespoke modern facade designs.',
    expandableDetails: [
      'Flawless marble, premium Egyptian granite, and limestone exterior wall cladding installation.',
      'Precision gypsum boards, integrated indirect profile lighting, and modern thermal panels.',
      'High-performance fire-retardant drywalls and acoustic insulation.',
      'Bespoke luxury double-glazed slim sliding windows and specialized architectural features.'
    ]
  },
  {
    id: 'electro-mechanical',
    title: 'Electro-Mechanical Works',
    icon: 'Cpu',
    description: 'Supervising professional HVAC setups, comprehensive fire-fighting systems, power distribution, and automated Building Management Systems (BMS).',
    expandableDetails: [
      'Smart VRF central air conditioning, ventilation ducting, and air purifier arrays.',
      'Fully automated fire detection, smart smoke exhaust, addressable alarms, and clean-agent suppression.',
      'Medium and low-voltage electrical switchgear, robust backup generators, and structured data cabling.',
      'Precision integration of automated elevators and building smart lighting systems.'
    ]
  },
  {
    id: 'project-management',
    title: 'Project Management',
    icon: 'Briefcase',
    description: 'Managing end-to-end execution, strict timeline monitoring, material logistics and procurement, and global cost-control methodologies.',
    expandableDetails: [
      'Strict Primavera P6 schedule integration and resource loading checks.',
      'Rigorous cost estimation, cash-flow monitoring, and monthly earn-value reports.',
      'Proactive value engineering to reduce costs without compromising safety or aesthetic intent.',
      'Unwavering Quality Control / Quality Assurance (QA/QC) with systematic material testing logs.'
    ]
  },
  {
    id: 'consultancy-design',
    title: 'Consultancy & Design',
    icon: 'Compass',
    description: 'Delivering architectural draft plans, structural engineering approvals, detailed BIM model files, and expert site consultations.',
    expandableDetails: [
      'Full building BIM (Building Information Modeling) Revit files for strict clash detection.',
      'High-fidelity interior design rendering, space-planning, and structural calculations.',
      'Permit procurement support and liaison with Egyptian official municipal engineering boards.',
      'Sustainable design development focusing on LEED metrics and eco-friendly concrete mixes.'
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'proj-1',
    title: 'The El-Gouna Grand Villa',
    description: 'A luxurious custom-designed modern seaside villa sprawling over 1,200 sqm, incorporating elegant clean glass lines, local sandstone, and automated smart systems.',
    category: 'Residential',
    location: 'El-Gouna, Hurghada, Egypt',
    image: IMAGES.luxuryVilla,
    client: 'Private Executive Client',
    year: '2024',
    highlights: ['1,200 sqm of premium marble finish', 'Overhanging infinity pool structural engineering', 'Smart-home integration', 'Bespoke thermal glass facade']
  },
  {
    id: 'proj-2',
    title: 'Nile Breeze Corporate Tower',
    description: 'A 24-storey high-tech commercial tower under construction on the Nile waterfront, serving as a futuristic business hub with high-end safety ratings.',
    category: 'Commercial',
    location: 'Maadi Corniche, Cairo, Egypt',
    image: IMAGES.heroBg,
    client: 'Breeze Cairo Assets',
    year: '2025 (In Progress)',
    highlights: ['24 floors of executive offices', 'Smart LED media facade structure', 'Four-level underground automatic parking garage', 'Vibration dampening and high-seismic rating']
  },
  {
    id: 'proj-3',
    title: 'New Capital East Highway Hub',
    description: 'A critical multi-lane high-speed flyover interchange and bridge network facilitating rapid transport into the smart New Administrative Capital.',
    category: 'Infrastructure',
    location: 'New Administrative Capital, Cairo, Egypt',
    image: IMAGES.infrastructure,
    client: 'Ministry of Housing, Utilities & Urban Communities',
    year: '2023',
    highlights: ['6-lane flyover post-tensioned bridge decks', 'Seismic elastomeric bridge bearings', 'Advanced rainwater run-off systems', 'Expressway high-density standard tarmac']
  },
  {
    id: 'proj-4',
    title: 'Elite Capital Knowledge Academy',
    description: 'An expansive modern educational campus combining lecture halls, athletic pavilions, and high-performance laboratory structures designed by global partners.',
    category: 'Commercial',
    location: 'New Cairo, Egypt',
    image: IMAGES.smartSchool,
    client: 'International Knowledge Builders Egypt',
    year: '2022',
    highlights: ['15,000 sqm campus footprint', 'Acoustically sound lecture theaters', 'State-of-the-art structural steel auditorium spans', 'Green-building double-glazing envelope']
  },
  {
    id: 'proj-5',
    title: 'El-Galala Express Road Link',
    description: 'A remarkable coastal corridor cutting through intense mountain terrain, designed to secure resilient tourism routes with heavy-duty rock stabilization shields.',
    category: 'Infrastructure',
    location: 'El-Galala Plateau, Suez Governorate, Egypt',
    image: IMAGES.coastalRoad,
    client: 'Engineering Authority of Egyptian Armed Forces',
    year: '2021',
    highlights: ['12km mountain bypass highway', 'Extreme rockfall protective steel mesh barriers', 'High-performance light-reflecting polymer line markings', '24-hour smart solar lampposts network']
  },
  {
    id: 'proj-6',
    title: 'Nile Delta Industrial Logistics Depot',
    description: 'A monolithic structural warehouse and steel framework complex acting as a vital sorting node for Cairo\'s importing logistics industry.',
    category: 'Commercial',
    location: '10th of Ramadan City, Cairo, Egypt',
    image: IMAGES.steelConcrete,
    client: 'Global Gateway Logistics Egypt',
    year: '2024',
    highlights: ['High-flatness industrial concrete flooring (FF50)', '35-meter clear-span structural steel trusses', 'Automated dock lever loading systems', 'Integrated water fire sprinkler tanks (300k Liters)']
  }
];

export const TIMELINE: TimelineEvent[] = [
  {
    year: '2012',
    title: 'Founding with Egyptian Heritage',
    description: 'Established "Creators Group Egypt" in Cairo as a high-quality civil masonry and elite finishing contractor, fast becoming known for precise executions.'
  },
  {
    year: '2016',
    title: 'Commercial Diversification',
    description: 'Expanded capabilities into structural reinforced concrete works and technical electro-mechanical fitouts, securing larger private development clients.'
  },
  {
    year: '2019',
    title: 'ISO Certifications & Public Works',
    description: 'Achieved Integrated Management System certifications (ISO 9001, 14001, 45001), enabling the company to win major public infrastructure contracts.'
  },
  {
    year: '2022',
    title: 'Mega-Project Deployments',
    description: 'Successfully joined consortia for massive works in the New Administrative Capital, positioning Creators Group as a premier tier-1 engineering partner.'
  },
  {
    year: '2025',
    title: 'Global Vision of Construction Solidity',
    description: 'Celebrating over a decade of prestigious engineering works. Solidifying our place in the market by mixing global standards of delivery with Egyptian roots.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    author: 'Eng. Tareq El-Sayed',
    role: 'Vice President of Development',
    company: 'Capital Smart Assets Egypt',
    quote: 'Creators Group Egypt has proven to be a truly world-class contracting partner. Their commitment to structural safety standards and precise schedule tracking during the Maadi High-Rise project has set a new benchmark in Cairo.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop'
  },
  {
    id: 'test-2',
    author: 'Dr. Mona Abdel-Rahman',
    role: 'Chief Infrastructure Consultant',
    company: 'Cairo Urban Authority',
    quote: 'Their work on the highway bridges and drainage culverts demonstrates high technical capability and precise understanding of intense soil properties. Highly reliable and exceptionally skilled engineers.',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop'
  },
  {
    id: 'test-3',
    author: 'Mr. Sherif Mansour',
    role: 'Private Developer & Investor',
    company: 'Gouna Estates Luxury Group',
    quote: 'For our custom modern villas, we needed flawless finishes and exquisite marble work. Creators Group Egypt executed the architectural cladding to a global luxury tier that rivals anything in Monaco or Dubai.',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=150&auto=format&fit=crop'
  }
];

export const VALUES = [
  {
    id: 'integrity',
    title: 'Unyielding Integrity',
    description: 'We adhere to absolute structural safety, premium material specifications, and honest, transparent billing schedules. We build trust first.'
  },
  {
    id: 'engineering',
    title: 'Elite Engineering',
    description: 'Every weld, load calculation, and elevation level is cross-verified by our elite Egyptian engineers using global criteria and high-end software.'
  },
  {
    id: 'sustainability',
    title: 'Resilient Future',
    description: 'We integrate energy-efficient smart building envelopes and eco-friendly concrete mixes to build sustainable urban development in Egypt.'
  }
];
