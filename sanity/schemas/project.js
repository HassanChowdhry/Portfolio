import { defineField, defineType } from "sanity";
import { ProjectsIcon } from "@sanity/icons";

export default defineType({
  name: "project",
  title: "Project",
  type: "document",
  icon: ProjectsIcon,
  fields: [
    defineField({
      name: "name",
      title: "Project Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tags",
      title: "Technology Tags",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "name",
              title: "Tag Name",
              type: "string",
            }),
            defineField({
              name: "color",
              title: "CSS Color Class",
              type: "string",
              description:
                'e.g. "blue-text-gradient", "green-text-gradient", "violet-text-gradient", "orange-text-gradient"',
              options: {
                list: [
                  { title: "Blue", value: "blue-text-gradient" },
                  { title: "Green", value: "green-text-gradient" },
                  { title: "Violet", value: "violet-text-gradient" },
                  { title: "Orange", value: "orange-text-gradient" },
                  { title: "Pink", value: "pink-text-gradient" },
                  { title: "Yellow", value: "yellow-text-gradient" },
                ],
              },
            }),
          ],
          preview: {
            select: { title: "name" },
          },
        },
      ],
    }),
    defineField({
      name: "image",
      title: "Project Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "sourceCodeLink",
      title: "Source Code URL",
      type: "url",
    }),
    defineField({
      name: "demoLink",
      title: "Live Demo URL",
      type: "url",
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
    select: { title: "name", media: "image" },
  },
});
