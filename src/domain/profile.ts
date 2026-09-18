export const CAREER_START_YEAR = 2013;

export function getYearsOfExperience(): number {
  return new Date().getFullYear() - CAREER_START_YEAR;
}

export function getExperienceTag(): string {
  return `${getYearsOfExperience()}+ Years Exp`;
}

export function getBioSummary(): string {
  const years = getYearsOfExperience();
  return `${years}+ years of engineering experience building scalable web services, high-performance distributed systems, and robust CI/CD environments.`;
}

export const PROFILE = {
  name: "Javier García González",
  shortName: "Javier García",
  title: "Senior Full Stack Engineer",
  roleHeadline: "TypeScript & Node.js Specialist",
  location: "Seville, Spain",
  workMode: "Remote (Spain)",
  email: "javier@garciagon.com",
  socials: {
    github: "https://github.com/javiergarciagonzalez",
    linkedin: "https://www.linkedin.com/in/javiergarciagon/",
  },
  currentRole: {
    company: "Autodesk",
    team: "Fusion360, CI Team",
    title: "Sr. Full Stack Engineer",
    since: "May 2023",
  },
} as const;
