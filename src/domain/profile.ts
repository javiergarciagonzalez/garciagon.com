export const CAREER_START_YEAR = 2013;

export function getYearsOfExperience(): number {
  return new Date().getFullYear() - CAREER_START_YEAR;
}

export function getExperienceTag(): string {
  return `${getYearsOfExperience()}+ Years Exp`;
}

export function getBioSummary(): string {
  const years = getYearsOfExperience();
  return `Senior Full Stack Engineer with ${years}+ years of experience. Rooted in frontend engineering and evolved across modern React, distributed Node.js services, and CI/CD build infrastructure.`;
}

export const PROFILE = {
  name: "Javier García González",
  shortName: "Javier García",
  title: "Senior Full Stack Engineer",
  roleHeadline: "TypeScript, React & Node.js",
  location: "Seville, Spain",
  workMode: "Remote (Spain)",
  email: "javier@garciagon.com",
  socials: {
    github: "https://github.com/javiergarciagonzalez",
    linkedin: "https://www.linkedin.com/in/javiergarciagon/",
  },
  currentRole: {
    company: "Autodesk",
    team: "Fusion, CI Team",
    title: "Sr. Full Stack Engineer",
    since: "May 2023",
  },
} as const;
