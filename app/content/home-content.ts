export type ResearchQuestion = {
  question: string;
  context: string;
  approach: string;
  href: string;
  linkLabel: string;
};

export type AchievedResult = {
  value: string;
  label: string;
  context: string;
  href: string;
};

export const researchQuestions: ResearchQuestion[] = [
  {
    question: "How can a single-image depth model stay consistent as the viewpoint changes?",
    context:
      "In our depth-estimation study, geometric self-consistency improved results alongside knowledge distillation. The regularizer still approximates target-view depth and does not explicitly handle occlusions, reflections, or scale inconsistencies. My open question is how to relax those assumptions without making training substantially more expensive.",
    approach:
      "A next experiment would compare stronger view synthesis and explicit visibility handling, with separate ablations to measure geometric consistency, prediction error, and training cost.",
    href: "/projects/monocular-depth-estimation",
    linkLabel: "Read the depth-estimation study",
  },
  {
    question: "What speeds up geometric ML after memory traffic becomes the bottleneck?",
    context:
      "FastGATr removed redundant arithmetic with sparse specialization, then used weight packing and NEON. At larger workloads, attention and other streaming operations limited further gains. My open question is how much cross-operator data reuse can reduce movement between memory and compute once additional vectorization offers diminishing returns.",
    approach:
      "A next experiment would test blocking and additional fusion across operators, measuring end-to-end runtime and estimated memory traffic rather than isolated kernel speedups.",
    href: "/projects/fastgatr",
    linkLabel: "Explore the FastGATr results",
  },
  {
    question: "Which rare attacks are missed when the security-log distribution changes?",
    context:
      "The evaluated log classifier reached 91.60% recall on CIC_UNSW_NB15, below its HDFS_v1 recall. The report points to heterogeneous attacks and class imbalance. My open question is whether aggregate scores hide missed incident types, and how recall changes on logs from an environment outside those evaluated datasets.",
    approach:
      "A next evaluation would separate recall by incident type and rarity, then test additional log sources with held-out environments and explicit false-negative review.",
    href: "/projects/soc-log-anomaly-detection",
    linkLabel: "Read the log-analysis evaluation",
  },
  {
    question: "How do we evaluate an LLM’s explanation separately from its prediction?",
    context:
      "The SOC prototype separates binary anomaly classification from Phi-4 summaries, severity ratings, and suggested actions. A correct classification does not establish that the explanation is faithful or useful. The report leaves systematic human evaluation unresolved; I’m interested in what evidence would let an analyst trust each generated claim.",
    approach:
      "A next evaluation would ask analysts to check explanations against source logs, score unsupported claims and severity judgments, and compare usefulness independently of classification accuracy.",
    href: "/projects/soc-log-anomaly-detection",
    linkLabel: "Explore the classification and interpretation pipeline",
  },
];

export const achievedResults: AchievedResult[] = [
  {
    value: "1.7–4.5×",
    label: "FastGATr speedup over optimized PyTorch",
    context:
      "Team result on Apple M1 across seven tested configurations, compared with EzGATr. Single-core setup; the speedup depends on the workload.",
    href: "/projects/fastgatr",
  },
  {
    value: "0.572 → 0.537",
    label: "Test depth error · SILog-RMSE",
    context:
      "Team result across five seeds: ResNet-18 baseline 0.572 ± 0.011; complete model 0.537 ± 0.004. Lower is better.",
    href: "/projects/monocular-depth-estimation",
  },
  {
    value: "95.17%",
    label: "F1-score on CIC_UNSW_NB15",
    context:
      "Evaluated pipeline from the SecuLabs internship report; HDFS_v1 F1 was 99.61%. These are benchmark results for the evaluated model. The public website is a simulated demo.",
    href: "/projects/soc-log-anomaly-detection",
  },
];
