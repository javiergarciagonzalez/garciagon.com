export const CAREER_START_YEAR = 2013;

export function getYearsOfExperience(): number {
  return new Date().getFullYear() - CAREER_START_YEAR;
}

export function getExperienceTag(): string {
  return `${getYearsOfExperience()}+ Years Exp`;
}

export function getBioSummary(): string {
  const years = getYearsOfExperience();
  return `${years}+ years of engineering experience building scalable systems, high-performance web applications, and robust CI/CD pipelines.`;
}
