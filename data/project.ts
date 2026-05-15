export type ProjectCategory =
  | "CFD & Aerodynamics"
  | "UAV Systems"
  | "Hypersonics"
  | "Machine Learning"
  | "Experimental";

export type ProjectStatus = "Completed" | "In Progress" | "Research";

export interface Project {
  id: string;
  slug: string;
  title: string;
  summary: string;
  category: ProjectCategory;
  tags: string[];
  year: string;
  status: ProjectStatus;
  featured: boolean;
  coverImage?: string;
  role: string;
  details: {
    overview: string;
    motivation: string;
    myRole: string;
    technicalDetails: string;
    challenges: string;
    results: string;
  };
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "lbm-airfoil-simulation",
    title: "LBM Airfoil Flow Simulation",
    summary:
      "Lattice Boltzmann Method simulation of flow over NACA 0012 at various angles of attack. Implemented D2Q9 solver from scratch to study boundary layer behavior and vortex shedding.",
    category: "CFD & Aerodynamics",
    tags: ["LBM", "CFD", "Python", "NumPy"],
    year: "2024",
    status: "Completed",
    featured: true,
    role: "Solo Researcher",
    details: {
      overview:
        "A computational study of laminar and transitional flow over a NACA 0012 airfoil using the Lattice Boltzmann Method (LBM). The solver was built entirely from scratch to gain deep understanding of the mesoscale physics.",
      motivation:
        "Standard RANS-based CFD approaches carry assumptions that break down at low Reynolds numbers. LBM offers a physically transparent alternative with natural parallelism. I wanted to understand the method end-to-end, not just run a black-box solver.",
      myRole:
        "Wrote the entire D2Q9 LBM solver in Python/NumPy. Implemented BGK collision operator, bounce-back boundary conditions, and second-order accurate curved wall treatment. Designed post-processing pipeline for flow visualization.",
      technicalDetails:
        "D2Q9 lattice with BGK collision (τ = 0.6). Grid resolution: 400×200 nodes. Implemented Zou-He boundary conditions for inlet/outlet. Reynolds numbers studied: 100, 500, 1000, 3000. Measured lift/drag by momentum exchange method.",
      challenges:
        "Stability issues appeared above Re = 1000 requiring careful tuning of relaxation parameter. Implementing curved boundary conditions accurately without introducing numerical artifacts took several iterations.",
      results:
        "Successfully captured vortex shedding at Re = 1000 with Strouhal number within 2% of published DNS data. Lift coefficient matched Xfoil predictions within 3% for attached flow. Identified laminar separation bubble at α = 8°.",
    },
  },
  {
    id: "2",
    slug: "fixed-wing-uav-design",
    title: "Fixed-Wing UAV Design & Build",
    summary:
      "End-to-end development of a custom fixed-wing UAV for aerial survey missions — from aerodynamic design and CFD analysis through fabrication and first flight.",
    category: "UAV Systems",
    tags: ["UAV", "OpenFOAM", "CAD", "Aerodynamics"],
    year: "2024",
    status: "In Progress",
    featured: true,
    role: "Lead Designer",
    details: {
      overview:
        "A complete fixed-wing UAV designed for long-endurance aerial mapping. Designed for 45-minute endurance carrying a 200g payload at cruise. The goal was to understand the full design cycle from first principles.",
      motivation:
        "Commercial platforms are expensive and offer limited insight into the engineering tradeoffs involved. I wanted to own the full design loop — choosing airfoil, sizing the wing, analyzing structural loads, and validating against flight data.",
      myRole:
        "Led aerodynamic design, wing sizing, CFD validation, and structural layout. Supervised foam cutting and composite layup. Programmed flight controller and tuned PID gains.",
      technicalDetails:
        "Airfoil: NACA 2412. Wingspan: 1.4 m. AR = 7.2. MTOW: 1.8 kg. Cruise: 65 km/h at 4° AoA. OpenFOAM RANS (k-ω SST) for wing-body junction analysis. Carbon fiber spar, foam core wing.",
      challenges:
        "Wing-body junction flow separation caused unexpected yaw instability. Balancing structural rigidity against weight budget required three design iterations on the spar sizing.",
      results:
        "Successful first flight achieved. Measured L/D of 14.2 at cruise matches CFD prediction within 5%. Currently optimizing junction fairing to reduce interference drag by an estimated 8%.",
    },
  },
  {
    id: "3",
    slug: "hypersonic-inlet-analysis",
    title: "Hypersonic Inlet Aerothermodynamics",
    summary:
      "Analytical and computational study of a mixed-compression scramjet inlet at Mach 6. Focused on shock-boundary layer interaction and thermal load distribution.",
    category: "Hypersonics",
    tags: ["Hypersonics", "CFD", "Python", "Shock Physics"],
    year: "2024",
    status: "Research",
    featured: true,
    role: "Researcher",
    details: {
      overview:
        "Computational analysis of a 2D mixed-compression scramjet inlet operating at Mach 6 freestream. Studied pressure recovery, shock structure, and aerodynamic heating along the cowl and forebody.",
      motivation:
        "Hypersonic propulsion is arguably the hardest open problem in aerospace. The inlet is the most critical component — poor design kills efficiency before the combustor even sees the flow. I wanted to understand the physics deeply.",
      myRole:
        "Performed oblique shock analysis using method of characteristics for initial design. Set up viscous CFD with appropriate turbulence closure. Analyzed pressure recovery and heat flux distributions. Wrote post-processing code.",
      technicalDetails:
        "Mach 6 freestream at 25 km altitude. Two-ramp forebody (6°/10°). k-ω SST turbulence model with compressibility correction. Wall temperature: 1000 K (radiative equilibrium). Structured mesh, ~400k cells.",
      challenges:
        "Shock-boundary layer interaction at second ramp caused significant flow separation and total pressure loss. Cowl leading edge heating exceeded assumed material limit — required TPS redesign.",
      results:
        "Achieved 82% total pressure recovery at design point. Identified critical heating zones (peak: 1.8 MW/m²) for TPS sizing. Separation bubble reduced inlet capture area by ~12% — flagged for redesign.",
    },
  },
  {
    id: "4",
    slug: "ml-drag-prediction",
    title: "ML Surrogate for Aerodynamic Drag",
    summary:
      "CNN-based surrogate model trained on XFOIL data to predict airfoil drag coefficients 10,000× faster than CFD, enabling rapid design space exploration.",
    category: "Machine Learning",
    tags: ["Machine Learning", "Python", "TensorFlow", "CFD"],
    year: "2023",
    status: "Completed",
    featured: false,
    role: "Developer & Researcher",
    details: {
      overview:
        "A convolutional neural network surrogate model that takes airfoil geometry as input and predicts Cl, Cd across a range of Re and α. Enables design optimization loops that are infeasible with full CFD.",
      motivation:
        "Multi-objective airfoil optimization requires thousands of function evaluations. High-fidelity CFD is too slow. A well-validated surrogate enables real-time design exploration.",
      myRole:
        "Generated 2,200 CFD training cases using XFOIL. Designed CNN architecture, implemented training pipeline in TensorFlow, performed hyperparameter search, validated against independent CFD data.",
      technicalDetails:
        "Input: signed distance field of airfoil (128×64 grid). CNN: 6 conv layers + 2 FC layers. Training set: 1,800 cases. Re range: 50k–1M. Trained with AdamW, cosine LR schedule, 100 epochs.",
      challenges:
        "Model overfit on sparse high-Re data. Predictions showed non-physical discontinuities near stall. Addressed with physics-informed regularization and data augmentation.",
      results:
        "RMSE of 0.003 on Cd, 0.015 on Cl. 10,000× speedup vs XFOIL. Successfully used for Pareto-optimal airfoil search across 50,000 candidate geometries.",
    },
  },
  {
    id: "5",
    slug: "wind-tunnel-wing-testing",
    title: "Wind Tunnel Wing Testing",
    summary:
      "Experimental aerodynamic characterization of a tapered wing with and without winglets. Custom force balance, 3D-printed models, systematic test campaign.",
    category: "Experimental",
    tags: ["Experimental", "Aerodynamics", "CAD", "Instrumentation"],
    year: "2023",
    status: "Completed",
    featured: false,
    role: "Experimentalist",
    details: {
      overview:
        "Wind tunnel study of winglet effectiveness on induced drag reduction for a low-AR tapered wing. Goal was to quantify the L/D improvement and compare against vortex lattice predictions.",
      motivation:
        "Winglets are textbook knowledge but actually measuring their effect at low Re is non-trivial. I wanted to close the loop between theory and experiment.",
      myRole:
        "Designed test models in CAD, 3D-printed and post-processed them. Built a 3-component strain gauge force balance. Ran systematic angle-of-attack sweeps, processed raw strain data into aerodynamic coefficients.",
      technicalDetails:
        "Test section: 30 × 30 cm. Re range: 50,000–180,000. Three-component balance (normal, axial, pitching moment). Winglet cant angle sweep: 0°, 15°, 30°, 45°.",
      challenges:
        "Sting interference contributed ~5% error to drag measurement. Temperature drift in strain gauges required active compensation. Model surface finish significantly affected transition location.",
      results:
        "15% reduction in induced drag with 30° cant winglet. L/D improved from 11.2 to 12.8 at cruise AoA. Optimal cant angle matched XFLR5 VLM prediction within 3°.",
    },
  },
  {
    id: "6",
    slug: "openfoam-turbulence-study",
    title: "Turbulence Model Benchmarking in OpenFOAM",
    summary:
      "Systematic comparison of k-ε, k-ω SST, and Spalart-Allmaras turbulence models for internal pipe flow against DNS reference data.",
    category: "CFD & Aerodynamics",
    tags: ["CFD", "OpenFOAM", "Turbulence", "Python"],
    year: "2023",
    status: "Completed",
    featured: false,
    role: "Solo Researcher",
    details: {
      overview:
        "Benchmarking study of three RANS turbulence models for fully-developed turbulent pipe flow at Re = 44,000. Compared velocity profiles, turbulent kinetic energy, and wall shear stress against Kim & Moin DNS data.",
      motivation:
        "Turbulence model selection is one of the most important and least understood decisions in applied CFD. I wanted concrete data on where each model succeeds and fails, not just textbook descriptions.",
      myRole:
        "Set up all simulations independently. Generated structured meshes with y+ < 1. Wrote Python post-processing scripts. Wrote the comparative analysis report.",
      technicalDetails:
        "Re = 44,000. Pipe diameter D = 0.1 m. Structured O-grid mesh. Three mesh densities for convergence study. y+ < 1 for SA and k-ω SST; y+ ≈ 30 for k-ε with wall functions.",
      challenges:
        "Achieving proper periodically-developed inlet conditions without introducing noise. Mesh convergence was slow for k-ε model near the wall.",
      results:
        "k-ω SST gave best overall agreement with DNS (max velocity error < 2%). k-ε overestimated mixing near wall by 15%. SA showed best performance in log-law region but failed near centerline.",
    },
  },
];

export const CATEGORIES = [
  "All",
  "CFD & Aerodynamics",
  "UAV Systems",
  "Hypersonics",
  "Machine Learning",
  "Experimental",
] as const;

export type Category = (typeof CATEGORIES)[number];