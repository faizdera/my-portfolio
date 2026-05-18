export interface Experience {
  id: string;
  role: string;
  org: string;
  period: string;
  type: "Research" | "Team" | "Internship" | "Teaching";
  description: string;
  typeColor?: "blue" | "ember";
}

export const experiences: Experience[] = [
  {
    id: "1",
    type: "Research",
    role: "Research Assistant",
    org: "Aerodynamics Lab, ITB",
    period: "2024 — PRESENT",
    description:
      "Computational studies of low-Re airfoil performance using OpenFOAM and custom LBM solvers.",
    typeColor: "blue",
  },
  {
    id: "2",
    type: "Team",
    role: "UAV Team Member",
    org: "ITB Aerospace Team",
    period: "2023 — 2024",
    description:
      "Aerodynamic sizing, CFD validation, and integration support for fixed-wing platforms.",
    typeColor: "blue",
  },
  {
    id: "3",
    type: "Internship",
    role: "Engineering Intern",
    org: "Aerospace Company",
    period: "2023",
    description:
      "Worked on structural analysis pipelines and surrogate modeling for fatigue prediction.",
    typeColor: "ember",
  },
  {
    id: "4",
    type: "Teaching",
    role: "Teaching Assistant",
    org: "Fluid Mechanics, ITB",
    period: "2024",
    description:
      "Led problem-solving sessions for ~40 sophomore students on incompressible flow fundamentals.",
    typeColor: "blue",
  },
];
