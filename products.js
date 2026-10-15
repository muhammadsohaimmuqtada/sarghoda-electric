// Commercial Catalog Dataset - Sarghoda Electric and Electronics
// Serious Trade & Retail Inventory Specification

const catalogProducts = [
  {
    id: "SE-WIR-01",
    sku: "WIR-CU-729",
    title: "Pure Copper Single Core Cable (7/29)",
    category: "wiring",
    categoryName: "Cables & Conductor",
    brand: "Pakistan Cables / Standard Grade",
    image: "images/unnamed16.jpg",
    description: "High-conductivity annealed pure electrolytic copper (99.9% purity) with flame-retardant PVC insulation. Engineered for primary residential and commercial circuit wiring.",
    specs: {
      "Conductor": "99.9% Electrolytic Copper",
      "Gauge / Strands": "7/0.029 Inch (7/29)",
      "Standard": "BSS-2004 / IEC 60227",
      "Coil Length": "90 Meters Coil",
      "Voltage Rating": "450 / 750V"
    },
    tradeNotice: "Certified 99.9% Pure Copper",
    availability: "In Stock (Wholesale Rolls)"
  },
  {
    id: "SE-WIR-02",
    sku: "WIR-CU-329",
    title: "Pure Copper Sub-Circuit Cable (3/29)",
    category: "wiring",
    categoryName: "Cables & Conductor",
    brand: "Certified Standard Wire",
    image: "images/unnamed16.jpg",
    description: "Multi-strand pure copper conductor insulated with high-grade PVC. Ideal for lighting sub-circuits, ceiling fans, and low-load branch distribution.",
    specs: {
      "Conductor": "Annealed Bare Copper",
      "Gauge / Strands": "3/0.029 Inch (3/29)",
      "Insulation": "Heat-Resistant Lead-Free PVC",
      "Standard": "PS:3528 / BS-6004",
      "Packaging": "90M Factory Sealed Coil"
    },
    tradeNotice: "Original Factory Seal",
    availability: "In Stock"
  },
  {
    id: "SE-BRK-01",
    sku: "MCB-DP-63A",
    title: "Double Pole MCB Circuit Breaker (63A)",
    category: "breakers",
    categoryName: "Distribution & Switchgear",
    brand: "Schneider / Terasaki Standard",
    image: "images/unnamed17.jpg",
    description: "Calibrated thermal-magnetic trip mechanism for short-circuit and overcurrent protection. Standard DIN-rail mount design for distribution boards.",
    specs: {
      "Current Rating": "63 Amperes",
      "Poles": "2-Pole (Double Pole)",
      "Breaking Capacity": "6kA / 10kA Rated",
      "Tripping Curve": "Type C (General Power)",
      "Mounting": "35mm Standard DIN Rail"
    },
    tradeNotice: "Type-Tested Industrial Safety",
    availability: "Immediate Counter Pickup"
  },
  {
    id: "SE-BRK-02",
    sku: "SW-CHG-63A",
    title: "Heavy Duty 4-Pole Manual Changeover Switch (63A)",
    category: "breakers",
    categoryName: "Distribution & Switchgear",
    brand: "Industrial Switchgear Corp",
    image: "images/unnamed17.jpg",
    description: "Rugged transfer switch with heavy phosphor bronze contact terminals. Safe dual-source switching between WAPDA grid and Solar/Generator backup.",
    specs: {
      "Current Capacity": "63 Amp Continuous",
      "Configuration": "4-Pole (3-Phase + Neutral)",
      "Contact Material": "High-Grade Brass / Copper",
      "Enclosure": "Sheet Steel Powder-Coated",
      "Operation": "Break-Before-Make"
    },
    tradeNotice: "Essential Power Backup Switchgear",
    availability: "In Stock"
  },
  {
    id: "SE-FAN-01",
    sku: "FAN-BLDC-56",
    title: "BLDC Inverter Energy-Saver Ceiling Fan (56\")",
    category: "fans",
    categoryName: "Fans & Air Movement",
    brand: "Pak Fan / Royal / Prince Series",
    image: "images/unnamed1.jpg",
    description: "Brushless DC motor delivering high CFM air delivery at 30W-35W total consumption. Operates smoothly on low voltage (140V) and direct solar systems.",
    specs: {
      "Sweep Diameter": "1400mm (56 Inch)",
      "Power Rating": "32W - 35W (Low Wattage)",
      "Input Voltage": "140V - 260V AC / 12V DC compatible",
      "Motor Winding": "100% Electrolytic Copper",
      "Control": "RF Remote + Multi-Speed"
    },
    tradeNotice: "Saves ~60% Electricity vs Standard",
    availability: "Factory Box Sealed"
  },
  {
    id: "SE-FAN-02",
    sku: "FAN-EXH-12",
    title: "Heavy-Gauge Louvered Metal Exhaust Fan (12\" / 14\")",
    category: "fans",
    categoryName: "Fans & Air Movement",
    brand: "Industrial Commercial Series",
    image: "images/unnamed18.jpg",
    description: "Heavy metal aerodynamic blades with automatic gravity-shutter louvers. Built for ventilation of kitchens, commercial basements, and workshops.",
    specs: {
      "Blade Size": "300mm / 350mm (12\" / 14\")",
      "Motor Type": "High RPM Ball-Bearing Copper Motor",
      "Shutter Mechanism": "Auto Gravity Backdraft Shutters",
      "Finish": "Corrosion-Proof Powder Coated",
      "Duty Cycle": "Continuous Commercial Rated"
    },
    tradeNotice: "Heavy Gauge Metal Body",
    availability: "In Stock"
  },
  {
    id: "SE-SOL-01",
    sku: "INV-HYB-42",
    title: "Hybrid Pure Sine Wave Solar Inverter (3.2kVA / 4.2kW)",
    category: "solar",
    categoryName: "Solar & Power Systems",
    brand: "Inverex / Crown Engineering Class",
    image: "images/unnamed12.jpg",
    description: "Pure sine wave solar inverter integrated with high-voltage MPPT solar charge controller. Supports battery-less operation, solar priority, and grid-sharing.",
    specs: {
      "Rated Power": "3200VA / 4200VA",
      "MPPT Range": "120V - 450V DC",
      "Max PV Array": "4500W - 6000W",
      "Waveform": "Pure Sine Wave (<3% THD)",
      "Battery System": "24V DC Deep Cycle"
    },
    tradeNotice: "Official Warranty Authorized",
    availability: "Direct Warehouse Dispatch"
  },
  {
    id: "SE-SOL-02",
    sku: "BAT-TUB-220",
    title: "Deep Cycle Heavy Tubular Battery (220Ah)",
    category: "solar",
    categoryName: "Solar & Power Systems",
    brand: "Phoenix / Osaka Certified Series",
    image: "images/unnamed12.jpg",
    description: "Spine-cast tall tubular positive plate battery engineered for deep cyclic discharge during prolonged load shedding and off-grid solar operations.",
    specs: {
      "Nominal Capacity": "220 Ah @ C20",
      "Technology": "Tall Tubular Deep Cycle",
      "Electrolyte": "Low Maintenance Lead-Acid",
      "Cycle Life": "1200+ Cycles @ 80% DoD",
      "Warranty": "1-Year Manufacturer Replacement"
    },
    tradeNotice: "Long Backup Cyclic Chemistry",
    availability: "Fresh Stock with Acid/Charged"
  },
  {
    id: "SE-LGT-01",
    sku: "LED-SMD-12",
    title: "Concealed Aluminum Ceiling SMD Downlight (7W / 12W)",
    category: "lighting",
    categoryName: "Commercial & Architectural Lighting",
    brand: "Diamond / Philips Certified Line",
    image: "images/unnamed14.jpg",
    description: "Die-cast aluminum thermal sink with diffused non-glare optics and isolated constant-current driver. Available in Warm White (3000K) and Daylight (6500K).",
    specs: {
      "Wattage": "7 Watt / 12 Watt",
      "Housing": "Die-Cast Powder Coated Aluminum",
      "Driver": "Isolated Constant Current IC Driver",
      "Power Factor": "> 0.90",
      "Lifespan": "30,000 Rated Hours"
    },
    tradeNotice: "Wholesale Carton Rates Available",
    availability: "Bulk Quantity In Stock"
  },
  {
    id: "SE-LGT-02",
    sku: "LGT-FLD-150",
    title: "IP66 Heavy Waterproof Outdoor LED Floodlight (100W/150W)",
    category: "lighting",
    categoryName: "Commercial & Architectural Lighting",
    brand: "Commercial Industrial",
    image: "images/unnamed2.jpg",
    description: "High-lumen outdoor floodlight with toughened safety glass and 4kV surge suppression. Designed for building exterior illumination, farm yards, and security perimeters.",
    specs: {
      "Power": "100W / 150W High Lumen",
      "Ingress Protection": "IP66 Certified Waterproof / Dustproof",
      "Luminous Flux": "130-140 Lumens per Watt",
      "Surge Protection": "Integrated 4kV Varistor",
      "Bracket": "180° Heavy Steel Mounting Yoke"
    },
    tradeNotice: "Industrial Weatherproof Spec",
    availability: "In Stock"
  },
  {
    id: "SE-SWT-01",
    sku: "MOD-PLT-8G",
    title: "Polycarbonate Modular Switch Plates & Accessories",
    category: "switches",
    categoryName: "Wiring Accessories & Plates",
    brand: "Clipsal / Orange Grade",
    image: "images/unnamed11.jpg",
    description: "Flame-retardant virgin polycarbonate gang plates with heavy silver-nickel alloy switch contacts. Resistant to arcing, UV discoloration, and mechanical wear.",
    specs: {
      "Configuration": "1-Gang to 8-Gang Modular Plates",
      "Contact Material": "Silver-Nickel Alloy (Anti-Weld)",
      "Rated Current": "10AX / 16A Sockets with Safety Shutter",
      "Flammability": "UL94 V-0 Self-Extinguishing",
      "Finish": "Scratch-Resistant Matte & Gloss"
    },
    tradeNotice: "Complete Building Accessories Range",
    availability: "Full Range On Counter"
  },
  {
    id: "SE-APP-01",
    sku: "APP-PMP-1HP",
    title: "Single Phase Monoblock Water Pump (1.0 HP)",
    category: "appliances",
    categoryName: "Pumps & Appliances",
    brand: "Golden / Diamond Engineering",
    image: "images/unnamed12.jpg",
    description: "Heavy cast-iron volute monoblock water pump wound with 100% pure electrolytic copper wire. Delivers high head pressure and flow rate for residential overhead tanks.",
    specs: {
      "Motor Rating": "1.0 Horsepower (750W)",
      "Winding": "Class F 100% Copper Winding",
      "Shaft": "Stainless Steel Anti-Corrosion Shaft",
      "Head Range": "15 to 30 Meters",
      "Protection": "Built-in Thermal Overload Protector"
    },
    tradeNotice: "100% Copper Stator Tested",
    availability: "Bench Tested & Ready"
  }
];