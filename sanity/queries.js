import { groq } from "next-sanity";

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0]{
    "resumeUrl": resumeFile.asset->url,
    "transcriptUrl": transcriptFile.asset->url,
    meetingLink,
    aboutText
  }
`;

export const socialLinksQuery = groq`
  *[_type == "socialLink"] | order(order asc){
    title,
    url,
    iconName
  }
`;

export const experiencesQuery = groq`
  *[_type == "experience"] | order(order asc){
    title,
    companyName,
    icon,
    iconBg,
    dateRange,
    points
  }
`;

export const projectsQuery = groq`
  *[_type == "project"] | order(order asc){
    name,
    description,
    tags,
    image,
    sourceCodeLink,
    demoLink
  }
`;
