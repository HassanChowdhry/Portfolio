import { client } from "./client";
import {
  siteSettingsQuery,
  socialLinksQuery,
  experiencesQuery,
  projectsQuery,
  publicationsQuery,
} from "./queries";

export async function getSiteSettings() {
  return client.fetch(siteSettingsQuery);
}

export async function getSocialLinks() {
  return client.fetch(socialLinksQuery);
}

export async function getExperiences() {
  return client.fetch(experiencesQuery);
}

export async function getProjects() {
  return client.fetch(projectsQuery);
}

export async function getPublications() {
  return client.fetch(publicationsQuery);
}

export async function getAllPortfolioData() {
  const [settings, socialLinks, experiences, projects, publications] =
    await Promise.all([
      getSiteSettings(),
      getSocialLinks(),
      getExperiences(),
      getProjects(),
      getPublications(),
    ]);

  return { settings, socialLinks, experiences, projects, publications };
}
