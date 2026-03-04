"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { projectId, dataset } from "./sanity/env";
import { schema } from "./sanity/schema";

export default defineConfig({
  name: "portfolio",
  title: "Portfolio CMS",
  projectId,
  dataset,
  plugins: [structureTool()],
  schema,
});
