import { securityStudyNotes } from "./security-study-notes";
import { visionStudyNotes } from "./vision-study-notes";
import { swissgridStudyNote } from "./swissgrid-study-note";

export type Note = {
  slug: string;
  title: string;
  summary: string;
  topic: string;
  readingTime: string;
  sections: { heading: string; paragraphs: string[] }[];
  sources: { label: string; href: string; external?: boolean }[];
  kind?: "Project note" | "Reading note" | "Research sketch";
  provenance?: string;
  projectSlug?: string;
  projectTitle?: string;
};

const projectNotes: Note[] = [
  {
    slug: "algebra-before-vectorization",
    title: "The algebra is part of the optimization",
    summary: "What FastGATr illustrates about removing unnecessary work before tuning the work that remains.",
    topic: "Efficient computing",
    readingTime: "2 min read",
    projectSlug: "fastgatr",
    projectTitle: "FastGATr",
    sections: [
      {
        heading: "Start with the mathematical structure",
        paragraphs: [
          "FastGATr began with a structured computation expressed through dense tensor operations. Geometric Algebra Transformers represent data as 16-component multivectors, but the algebra fixes many of the interactions between those components to zero. A dense formulation can hide that fact from an implementation.",
          "EquiLinear gives a concrete example from our team report: its dense expression contains 2,304 tensor terms, while the specialized formulation evaluates 24 nonzero interactions. That is 96 times fewer algebraic terms in this representation. It describes the structure of the operation; the runtime improvement still has to be measured.",
        ],
      },
      {
        heading: "Optimize the remaining computation",
        paragraphs: [
          "After specializing the operations, the next questions become more concrete. Which values can stay in registers? Are intermediate results written to memory unnecessarily? Does the inner loop consume weights in the order they are stored? Can independent accumulators reduce dependencies?",
          "The project addressed those questions through scalar replacement, fusion, weight-layout changes and four-lane ARM NEON instructions. Profiling helped direct the later work toward the remaining bottlenecks. The sequence matters: algebraic specialization changes which computations are worth optimizing at all.",
        ],
      },
      {
        heading: "Keep the result attached to its conditions",
        paragraphs: [
          "Across the report’s tested configurations, the vectorized implementation achieved an end-to-end speedup of 1.7–4.5× over the optimized PyTorch reference on a single Apple M1 core. Mean absolute percentage error against the reference remained below 0.1% across the tested sizes.",
          "The range belongs to those configurations and that hardware. It also measures a different thing from the reduction in algebraic terms: full execution includes dependencies, memory access and other operations. Keeping both quantities explicit makes the optimization easier to understand and the result easier to assess.",
        ],
      },
      {
        heading: "A useful order of questions",
        paragraphs: [
          "First ask which work the mathematics requires. Then ask how to arrange that work for the machine. Finally, check correctness and measure the full path. FastGATr is a concrete example of how that order can turn mathematical structure into an implementation advantage.",
        ],
      },
    ],
    sources: [{ label: "FastGATr technical report", href: "/PDFs/asl_report.pdf" }],
  },
  {
    slug: "evaluating-model-complexity",
    title: "Testing the value of another model component",
    summary: "A depth-estimation project and the value of separating an appealing architectural idea from its measured contribution.",
    topic: "Computer vision",
    readingTime: "2 min read",
    projectSlug: "monocular-depth-estimation",
    projectTitle: "Monocular Depth Estimation",
    sections: [
      {
        heading: "Give each addition a question to answer",
        paragraphs: [
          "Our monocular depth-estimation project explored two connected problems: giving a model wider visual context and encouraging predictions that stay consistent with scene geometry. Those goals led to several possible additions, including dilated convolutions, spatial attention, knowledge distillation and geometric self-consistency.",
          "Each addition has an intuitive explanation. An experiment still needs to establish whether it helps in this setup. The report therefore studies components separately through ablations, alongside a complete model, and reports variability across five random seeds.",
        ],
      },
      {
        heading: "Read the complete-model result carefully",
        paragraphs: [
          "The plain ResNet-18 U-Net baseline achieved a mean test SILog-RMSE of 0.572 ± 0.011. The complete model achieved 0.537 ± 0.004. Lower is better for this metric, so the complete configuration improved the measured result across the reported experiments.",
          "That comparison establishes the performance of the configurations being compared. The ablations answer the narrower question of what each component contributes. In particular, spatial attention did not outperform the dilation-only variant. An improvement in the full model cannot be assigned automatically to every component inside it.",
        ],
      },
      {
        heading: "Let geometry provide another learning signal",
        paragraphs: [
          "The geometric self-consistency approach constructs direct and two-step synthetic views from a predicted depth map, then penalizes disagreement between them. It asks the prediction to behave consistently under camera transformations, adding a constraint beyond the supervised prediction loss.",
          "In the report, self-consistency produced gains comparable to knowledge distillation while avoiding a teacher model. Its view-synthesis assumptions also define its limits: occlusion, disocclusion and reflections are not explicitly modelled. Those limitations belong alongside the result because they help explain where the method may be less reliable.",
        ],
      },
      {
        heading: "Make complexity earn its place",
        paragraphs: [
          "A useful architectural addition should have both a reason to exist and evidence for its contribution. Here, the complete-model comparison, the component ablations and the variability across seeds answer different questions. Reading them together gives a stronger basis for choosing a model than selecting the most elaborate configuration by default.",
        ],
      },
    ],
    sources: [{ label: "Monocular depth-estimation research report", href: "/PDFs/CIL_monodepth_estimation.pdf" }],
  },
  {
    slug: "evaluating-security-ml",
    title: "Evaluating a security model beyond the interface",
    summary: "Classification quality, analyst explanations and a public demonstration each require a different kind of evidence.",
    topic: "AI & cybersecurity",
    readingTime: "2 min read",
    projectSlug: "soc-log-anomaly-detection",
    projectTitle: "SOC Log Anomaly Detection",
    sections: [
      {
        heading: "Separate the questions the pipeline answers",
        paragraphs: [
          "The SOC log-analysis project combines classification with interpretation. A hybrid BERT encoder and Llama-family language model classify log sequences. A separate Phi-4 stage summarizes anomalous sequences, estimates severity and suggests actions for an analyst.",
          "These stages answer different questions. Classification asks whether a sequence should be flagged. Interpretation asks whether the explanation helps someone investigate it. A result for one stage provides evidence about that stage; evaluating the combined workflow requires attention to both.",
        ],
      },
      {
        heading: "Read the classification results with the data",
        paragraphs: [
          "The evaluated pipeline achieved F1-scores of 99.61% on HDFS_v1 and 95.17% on CIC_UNSW_NB15. The internship report also records lower recall on the more heterogeneous UNSW data. That difference matters when the task includes finding anomalous sequences that would otherwise be missed.",
          "The named datasets and evaluation setup are part of the result. They make it possible to interpret the reported scores without treating a benchmark outcome as a guarantee about every future stream of security logs. The report also identifies the computational cost of longer sequences as an area for further work.",
        ],
      },
      {
        heading: "Evaluate the explanation as an explanation",
        paragraphs: [
          "Normalizing classification outputs makes the model’s decisions easier to consume consistently. The generated summaries, severity ratings and suggested actions introduce a separate evaluation problem: whether they are useful and accurate enough for the analyst’s task.",
          "The report identifies human evaluation of those explanations as further work. A polished dashboard does not complete that evaluation. A useful next study would examine the explanations directly, with people judging their quality, while preserving the distinction between the classifier’s benchmark scores and the interpretation stage’s evidence.",
        ],
      },
      {
        heading: "Give the demonstration a clear role",
        paragraphs: [
          "The public website is a simulated demonstration of the workflow. Its role is to make the interaction understandable. The classification measurements come from the evaluated pipeline documented in the report. Presenting those roles clearly helps visitors explore the interface and still see exactly what has been measured.",
        ],
      },
    ],
    sources: [
      { label: "SecuLabs internship report", href: "/PDFs/Seculabs_Internship_Report.pdf" },
      { label: "Simulated public demonstration", href: "https://polimo.netlify.app", external: true },
    ],
  },
];

export const notes: Note[] = [
  ...visionStudyNotes,
  ...securityStudyNotes,
  swissgridStudyNote,
  ...projectNotes,
];
