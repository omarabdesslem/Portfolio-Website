import type { Note } from "./note-data";

export const visionStudyNotes: Note[] = [
  {
    slug: "contour-conditioned-imaging",
    title: "What should a contour-conditioned imaging objective preserve?",
    summary: "An early sketch for separating agreement with a contour from agreement with a reference CT image.",
    topic: "Computer vision",
    kind: "Research sketch",
    provenance: "Developed from my handwritten contour-conditioning sketch. This is a proposed research direction; it contains no experimental results.",
    readingTime: "2 min read",
    sources: [],
    sections: [
      {
        heading: "Start with what the condition specifies",
        paragraphs: [
          "My sketch starts with a contour or mask as a condition and groups contour agreement with a reference-CT structure term in a training objective. The drawing is an idea about what a model should preserve. It does not yet specify a model architecture, a dataset, or a validated imaging pipeline.",
          "The first question I want to make precise is what information the contour supplies. A boundary constrains part of the geometry, while the reference image supplies other information. An experiment should state which structure the input identifies and which details the model must infer.",
        ],
      },
      {
        heading: "Make each loss answer a separate question",
        paragraphs: [
          "I would first define a contour-consistency term and a reference-image or structure term separately. Each needs an explicit target, scale and interpretation before their weighted sum becomes meaningful. A low total loss can hide a trade-off if one component improves while another deteriorates.",
          "A useful first comparison would keep the model and data fixed, then evaluate the contour term alone, the reference term alone, and their combination. I would report the components separately alongside a boundary-agreement measure chosen for the task, rather than infer geometric correctness from visual similarity alone.",
        ],
      },
      {
        heading: "Test the assumptions in the input",
        paragraphs: [
          "The proposed evaluation should include incomplete or perturbed contours and a clear split between training and held-out cases. That would help separate dependence on a particular annotation from a model’s ability to use the intended structure.",
          "These are questions for a future experiment. The sketch does not establish image quality, robustness, or clinical usefulness. Its value at this stage is to turn a drawing of a joint objective into a set of comparisons that could support or reject the idea.",
        ],
      },
    ],
  },
  {
    slug: "data-and-losses-in-hand-reconstruction",
    title: "Separating data scale from loss design in hand reconstruction",
    summary: "A HaMeR reading question: how should we attribute a model’s improvement when training data, capacity and supervision all matter?",
    topic: "Computer vision",
    kind: "Reading note",
    provenance: "Adapted from my handwritten HaMeR reading note. This is a question about published work, not a reproduction or a result of my own.",
    readingTime: "2 min read",
    sources: [
      { label: "Pavlakos et al. — Reconstructing Hands in 3D with Transformers", href: "https://arxiv.org/abs/2312.05251", external: true },
      { label: "HaMeR authors’ code and project resources", href: "https://github.com/geopavlakos/hamer", external: true },
    ],
    sections: [
      {
        heading: "The question in my reading notes",
        paragraphs: [
          "HaMeR reconstructs a 3D hand from monocular input using a transformer-based model. Pavlakos and colleagues emphasize scaling both the training data and network capacity, combining datasets with 2D or 3D hand annotations. My handwritten note focuses on a narrower question: how should I distinguish the contribution of data from the contribution of the training objective?",
          "The note mentions pose and shape prediction, separate supervision terms and an adversarial loss. Those observations are a starting point for reading the method and its ablations. They do not establish that one loss caused an improvement, or that a larger dataset explains the entire result.",
        ],
      },
      {
        heading: "Compare factors under controlled conditions",
        paragraphs: [
          "A comparison I would like to study would hold architecture and evaluation fixed while changing the data mixture and loss configuration. Training schedules and compute budgets also need to be recorded, so that a change in one factor is not silently accompanied by a larger optimization budget.",
          "That means asking several distinct questions: what changes with more annotated examples, what changes with the supervision mixture, and whether a loss term still helps when the available data changes. It is an experimental design question, not a claim that the published work omitted these comparisons.",
        ],
      },
      {
        heading: "Keep the evaluation target explicit",
        paragraphs: [
          "I would also separate image-plane agreement from 3D reconstruction quality, and examine which settings the evaluation covers. The model predicts a 3D representation; a useful interpretation of a score has to state which part of that prediction the measurement tests.",
          "For now, this is a reading interest in attribution and evaluation. The paper and the authors’ resources provide the method and reported results. My next step would be to trace the relevant ablations before choosing any experiment of my own.",
        ],
      },
    ],
  },
];
