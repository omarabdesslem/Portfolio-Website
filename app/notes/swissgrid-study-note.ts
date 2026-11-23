import type { Note } from "./note-data";

export const swissgridStudyNote: Note = {
  slug: "roof-geometry-and-panel-orientation",
  title: "When roof geometry does not identify panel orientation",
  summary:
    "Why matching photovoltaic plants to roofs still leaves uncertainty about installation angles, especially on flat roofs.",
  topic: "Energy & geospatial data",
  kind: "Project note",
  provenance: "Based on my hackathon notes and the team presentation.",
  readingTime: "2 min read",
  projectSlug: "swissgrid-pv-installation-angle-prediction",
  projectTitle: "Swissgrid: PV Installation Angles",
  sections: [
    {
      heading: "A roof match leaves another question",
      paragraphs: [
        "The Swissgrid hackathon challenge involved matching photovoltaic plants to buildings, selecting plausible roofs, and estimating panel tilt and orientation. We clustered roof geometries into buildings and ranked candidate roofs using properties including size, energy efficiency, roof class, and inclination.",
        "My notes highlight a limit of that matching process: flat roofs do not provide a reliable panel direction. Selecting the correct roof therefore does not settle how the panels are mounted. Roof geometry supplies evidence about the surface; the installation angles still require assumptions.",
      ],
    },
    {
      heading: "Write down the fallback rules",
      paragraphs: [
        "The team presentation makes the adjustments explicit. For roofs with tilt below 5°, we used an 18° panel tilt and applied modulo 45° to the orientation. We capped unusually steep tilt estimates at 35°. An unmatched plant received a default tilt of 18°.",
        "Those rules describe the workflow we built. They do not establish that an individual installation has those angles. The flat-roof case makes the distinction particularly clear: a default fills a gap in the estimate without resolving the underlying uncertainty. The presentation reports no validation accuracy against verified panel angles.",
      ],
    },
    {
      heading: "When should the estimate stay unknown?",
      paragraphs: [
        "My open question is how to choose between a default and an explicit unknown. A next evaluation would separate matched, unmatched, and flat-roof cases, then compare their estimates against verified installation angles. That would help establish where a fallback is useful and where the workflow should abstain. It remains a proposed evaluation, rather than a result of this hackathon.",
      ],
    },
  ],
  sources: [
    {
      label: "Swissgrid challenge team presentation",
      href: "/PDFs/Swissgrid-Challenge_%20PV%20Installation%20Angles.pdf",
    },
  ],
};
