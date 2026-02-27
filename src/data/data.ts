let data;

if (process.env.NEXT_PUBLIC_PORTFOLIO_DATA) {
  data = JSON.parse(process.env.NEXT_PUBLIC_PORTFOLIO_DATA);
} else {
  data = await import("./data.template");
}

export const personalInfo = data.personalInfo || {};
export const skills = data.skills || [];
export const experience = data.experience || [];
export const projects = data.projects || [];
export const competitiveProgramming = data.competitiveProgramming || [];
export const education = data.education || [];
export const certifications = data.certifications || [];