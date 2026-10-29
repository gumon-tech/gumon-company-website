export type NetworkEntry = {
  name: string;
  country: string;
  website: string;
  logo: string;
  // The mark was supplied gold-on-black; a dark tile keeps it legible without touching its colours.
  darkTile?: boolean;
};

// One network: partners and clients are shown together (owner, 2026-10-29: everyone here works on
// research with Gumon, several are both). Brand names and countries are not translated, matching
// the original partner list. Client logo sources are in docs/client-logos.md.
export const partnerNetwork: NetworkEntry[] = [
  { name: "Asia Connect Corporation", country: "Thailand", website: "https://www.asiaconnectth.com", logo: "/assets/partners/asia-connect.png" },
  { name: "AC Academys", country: "Thailand", website: "https://acacademys.com", logo: "/assets/partners/ac-academys.png" },
  { name: "C2 TECH", country: "Thailand", website: "https://c2tech.app/", logo: "/assets/partners/c2tech.png" },
  { name: "Olufy-X", country: "Thailand", website: "https://olufy.com", logo: "/assets/partners/olufy-x.png" },
  { name: "Taitam-D", country: "United Kingdom", website: "https://taitam-d.com", logo: "/assets/partners/taitam-d.png" },
  { name: "Taitam-D Academy London", country: "United Kingdom", website: "https://academy.taitam-d.com/", logo: "/assets/clients/taitam-d-academy-london.png" },
  { name: "Pure Essentials London", country: "United Kingdom", website: "https://www.pureessentialslondon.com", logo: "/assets/clients/pure-essentials-london.png" },
  { name: "Sri Siam Thai Therapy & Wellness", country: "United Kingdom", website: "https://www.srisiamthaitherapyandwellness.co.uk/", logo: "/assets/clients/sri-siam-thai-therapy-wellness.png" },
  { name: "Vera-D", country: "United Kingdom", website: "https://vera-d.gumon.io/", logo: "/assets/clients/vera-d.webp" },
  {
    name: "Siam Cruise & Hotel Academy",
    country: "Finland",
    // No website yet; the academy's Facebook page is its public home.
    website: "https://www.facebook.com/siamcruiseandhotelacademy",
    logo: "/assets/clients/siam-cruise-hotel-academy.webp",
    darkTile: true,
  },
];

export const partnerCountLabel = `${partnerNetwork.length}+`;
export const operatingCountryCount = String(new Set(partnerNetwork.map((item) => item.country)).size);
