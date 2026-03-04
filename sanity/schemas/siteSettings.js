import { defineField, defineType } from "sanity";
import { CogIcon } from "@sanity/icons";

export default defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  icon: CogIcon,
  fields: [
    defineField({
      name: "resumeFile",
      title: "Resume (PDF)",
      type: "file",
      options: { accept: ".pdf" },
    }),
    defineField({
      name: "transcriptFile",
      title: "Transcript (PDF)",
      type: "file",
      options: { accept: ".pdf" },
    }),
    defineField({
      name: "meetingLink",
      title: "Meeting Scheduler Link",
      type: "url",
    }),
    defineField({
      name: "aboutText",
      title: "About / Overview Text",
      type: "text",
      rows: 5,
    }),
  ],
  preview: {
    prepare() {
      return { title: "Site Settings" };
    },
  },
});
