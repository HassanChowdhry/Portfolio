import { defineField, defineType } from "sanity";
import { CaseIcon } from "@sanity/icons";

export default defineType({
  name: "experience",
  title: "Experience",
  type: "document",
  icon: CaseIcon,
  fields: [
    defineField({
      name: "title",
      title: "Job Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "companyName",
      title: "Company Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "icon",
      title: "Company Logo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "iconBg",
      title: "Icon Background Color",
      type: "string",
      initialValue: "#E6DEDD",
    }),
    defineField({
      name: "dateRange",
      title: "Date Range",
      type: "string",
      description: 'e.g. "Jan 2025 - May 2025"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "points",
      title: "Description Points",
      type: "array",
      of: [{ type: "string" }],
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
    select: { title: "title", subtitle: "companyName", media: "icon" },
  },
});
