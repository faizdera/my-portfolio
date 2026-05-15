export interface Experience {
  id: string;
  role: string;
  org: string;
  period: string;
  type: "Research" | "Team" | "Internship" | "Teaching";
  description: string;
}

export const experiences: Experience[] = [
  {
    id: "1",
    role: "Research Assistant",
    org: "Aerodynamics Lab, ITB",
    period: "2024 – Present",
    type: "Research",
    description:
      "Supporting CFD research on low-Reynolds number airfoil flows and Lattice Boltzmann Method solver development.",
  },
  {
    id: "2",
    role: "UAV Team Member",
    org: "ITB Aerospace Team",
    period: "2023 – 2024",
    type: "Team",
    description:
      "Contributed to aerodynamic design, structural analysis, and flight testing for competition UAV.",
  },
  {
    id: "3",
    role: "Engineering Intern",
    org: "Aerospace Company",
    period: "2023",
    type: "Internship",
    description:
      "Supported engineering analysis and technical documentation in an aerospace-adjacent environment.",
  },
  {
    id: "4",
    role: "Teaching Assistant",
    org: "Fluid Mechanics, ITB",
    period: "2024",
    type: "Teaching",
    description:
      "Assisted in laboratory sessions and grading for the undergraduate Fluid Mechanics course.",
  },
];
