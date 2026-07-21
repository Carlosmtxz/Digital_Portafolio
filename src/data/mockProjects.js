// Real Fox Solutions installs (demo mode data).
// Mirrors the columns of supabase/schema.sql
export const MOCK_PROJECTS = [
  {
    id: "FSSPJF04242026",
    name: "Berlos Best — Sweet Potato Bagging Line",
    industry: "Fresh Produce",
    weigher_type: "NEWTEC 4009 XB2",
    bagger_config: "FSDWB Flat",
    stations: 2,
    bpm: 42,
    product: "Sweet potatoes, 5 lb bags",
    dwg_number: "FSSPJF04242026",
    year: 2026,
    notes:
      "Turnkey line running 40–44 bags/min on 5 lb sweet potatoes: " +
      "NEWTEC 4009 XB2 weigher with PCS 2CC-L-R distribution feeding a dual " +
      "wicketed bagger, with 24\"×14' infeed elevator, flat and incline " +
      "discharge conveyors, 60\"Ø pack table, and full service platform access.",
    model_url: null,
     video_url: "https://www.youtube.com/watch?v=tii3e8IRvGA",
    layout_image_url: "/layouts/berlos.png",
    is_public: true,
  },
  {
    id: "FSSPK10052023",
    name: "LaFrontera Cold Storage — Onion Netting Line",
    industry: "Fresh Produce",
    weigher_type: "NEWTEC 4014 XB1",
    bagger_config: "Giro UB-S50 Net Bagger",
    stations: 1,
    bpm: null, // unknown — card and specs show a dash
    product: "Onions, net bags",
    dwg_number: "FSSPK10052023",
    year: 2023,
    notes:
      "Full stainless netting line from bulk storage to accumulation: " +
      "6,000 lb storage bin and grader table feeding a NEWTEC 4014 XB1 with PCS, " +
      "Giro UB-S50 net bagger with Ilapak V2029 high-speed clipper, inline " +
      "QC90-2 checkweigher, and 5' rotary accumulator — integrated under a " +
      "single merging control system with PLC and inverters.",
    model_url: null,
    video_id: null,
    layout_image_url: "/layouts/lafrontera.png",
    is_public: true,
  },
];
