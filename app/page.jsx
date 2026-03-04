import { getAllPortfolioData } from "@/sanity/fetch";
import HomePage from "@/src/components/HomePage";

export const revalidate = 60;

export default async function Page() {
  let cmsData = null;
  try {
    cmsData = await getAllPortfolioData();
  } catch {
    // Sanity not configured yet — falls back to hardcoded constants
  }

  return <HomePage cmsData={cmsData} />;
}
