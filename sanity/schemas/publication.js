import { defineField, defineType } from "sanity";
import { DocumentTextIcon } from "@sanity/icons";

export default defineType({
  name: "publication",
  title: "Publication",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: "title",
      title: "Paper Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "authors",
      title: "Authors",
      type: "string",
      description: 'e.g. "H. Chowdhry, J. Smith, A. Lee"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "venue",
      title: "Venue / Conference / Journal",
      type: "string",
      description: 'e.g. "NeurIPS 2025", "IEEE Access"',
    }),
    defineField({
      name: "year",
      title: "Year",
      type: "number",
      validation: (Rule) => Rule.required().min(1900).max(2100),
    }),
    defineField({
      name: "abstract",
      title: "Short Abstract",
      type: "text",
      rows: 4,
      description: "A brief summary (2-3 sentences) shown on the card.",
    }),
    defineField({
      name: "url",
      title: "Paper URL",
      type: "url",
      description: "Link to arXiv, DOI, or PDF.",
    }),
    defineField({
      name: "citation",
      title: "BibTeX Citation",
      type: "text",
      rows: 8,
      description: "Paste the full BibTeX entry here. Users can copy it from the Cite button.",
    }),
    defineField({
      name: "tags",
      title: "Topics",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "name", title: "Tag", type: "string" }),
            defineField({
              name: "color",
              title: "Color Class",
              type: "string",
              initialValue: "blue-text-gradient",
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "order",
      title: "Display Order (lower = first)",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    }),
  ],
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "title", subtitle: "venue" },
  },
});
