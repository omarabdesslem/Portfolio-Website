export type ProjectSource = {
  label: string;
  href: string;
  external?: boolean;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  description: string;
  context: string;
  tags: string[];
  visual: "performance" | "forecast" | "depth" | "security" | "solar" | "robotics" | "physics" | "representation";
  featured: boolean;
  challenge: string;
  approach: string[];
  contribution?: string;
  outcome: string;
  caveat?: string;
  metric?: { value: string; label: string; note: string };
  sources: ProjectSource[];
  // Keep the original source-link fields available for existing consumers.
  href: string;
  linkLabel: string;
  external?: boolean;
};

const fastgatr: Project = {
  slug: "fastgatr",
  title: "FastGATr",
  category: "Efficient computing",
  summary: "Making geometric transformers faster by making their algebra explicit.",
  description:
    "A team project translating six core Geometric Algebra Transformer operations into specialized C++ kernels, then improving their memory layout and vectorizing them with ARM NEON.",
  context: "Team research project · ETH Zürich",
  tags: ["C++", "ARM NEON", "Geometric deep learning"],
  visual: "performance",
  featured: true,
  challenge:
    "GATr represents geometric data as 16-component multivectors. Its reference implementation expresses the underlying operations as dense tensor contractions, even though the algebra fixes most tensor entries to zero. That makes a mathematically structured model do a great deal of unnecessary work.",
  approach: [
    "Replace dense contractions with specialized operations that evaluate only nonzero terms. EquiLinear, for example, needs 24 interactions rather than 2,304 dense tensor terms.",
    "Use independent accumulators, scalar replacement, and fusion to reduce dependencies and intermediate memory traffic.",
    "Profile the remaining bottlenecks, repack EquiLinear weights in the order the inner loop consumes them, and map suitable computations to four-lane ARM NEON instructions.",
    "Validate every implementation against the PyTorch reference, then benchmark after warm-up runs across seven input configurations on an Apple M1.",
  ],
  contribution:
    "I co-implemented baseline geometric-attention, join, and product kernels; specialized RMS normalization; worked on contiguous weight layouts and EquiLinear vectorization; and used Xcode Instruments with a teammate to investigate bottlenecks.",
  outcome:
    "The team's vectorized implementation ran 1.7–4.5× faster than the optimized PyTorch reference in the tested configurations. End-to-end mean absolute percentage error remained below 0.1% against the reference across all tested sizes. The main lesson was to exploit the algebraic structure first, then optimize the work that remains.",
  caveat:
    "These are single-core Apple M1 measurements for the report's seven configurations, with a fixed internal width and batch size. They are not a claim about all GATr workloads or other hardware. The specialized kernels assume GATr's fixed 16-component projective geometric algebra.",
  metric: {
    value: "1.7–4.5×",
    label: "faster than optimized PyTorch",
    note: "Apple M1 · tested configurations · team result",
  },
  sources: [{ label: "Read the technical report", href: "/PDFs/asl_report.pdf" }],
  href: "/PDFs/asl_report.pdf",
  linkLabel: "Read report",
};

const forecasting: Project = {
  slug: "power-grid-load-forecasting",
  title: "Power Grid Load Forecasting",
  category: "Applied machine learning",
  summary: "Connecting weather, seasonality, and machine learning to forecast Swiss electricity demand.",
  description:
    "A thesis exploring Swiss electricity-load forecasting through time-series methods and machine learning, with weather and seasonality as additional context.",
  context: "Thesis project · Swiss electricity demand",
  tags: ["Time series", "Machine learning", "Energy"],
  visual: "forecast",
  featured: true,
  challenge:
    "Electricity demand changes over time and is shaped by more than its recent history. A useful forecast needs to account for recurring seasonal patterns and weather conditions while remaining open to diagnostic evaluation.",
  approach: [
    "Study historical Swiss electricity-load time series and their seasonal structure.",
    "Include exogenous weather data alongside temporal information when modelling demand.",
    "Compare time-series and machine-learning approaches through forecast evaluation and diagnostics.",
    "Present the project through a dedicated website so the forecasting work can be explored beyond a résumé description.",
  ],
  outcome:
    "The project brings load history, seasonality, and weather together in a data-driven forecasting workflow. The dedicated project website is the place to explore the work in more detail.",
  caveat:
    "The diagram here explains the modelling inputs; it is not a plot of measured forecasts. No accuracy or operational-performance claim is made on this page.",
  sources: [{ label: "Explore the project website", href: "https://energy-forecasts.netlify.app", external: true }],
  href: "https://energy-forecasts.netlify.app",
  linkLabel: "Project website",
  external: true,
};

const depth: Project = {
  slug: "monocular-depth-estimation",
  title: "Monocular Depth Estimation",
  category: "Computer vision",
  summary: "Teaching a depth model to use wider context and stay consistent with scene geometry.",
  description:
    "A team study of lightweight global-context augmentation and geometric self-consistency regularization for predicting depth from a single image.",
  context: "Team research project · ETH Zürich · 2026",
  tags: ["Computer vision", "PyTorch", "Geometric regularization"],
  visual: "depth",
  featured: true,
  challenge:
    "A single image does not uniquely determine a scene's depth. Models need both local detail and broader context, but a low prediction loss alone does not ensure that their output behaves consistently under camera transformations.",
  approach: [
    "Augment pretrained CNN backbones with parallel dilated-convolution and spatial-attention branches, preserving the pretrained path at initialization.",
    "Construct direct and two-step synthetic views from a predicted depth map, and penalize disagreement between those views.",
    "Ablate architectural additions, knowledge distillation, and self-consistency separately, reporting variability across five random seeds.",
  ],
  contribution:
    "This was an equal-contribution team project. The report documents the shared model design, experimental protocol, ablations, and interpretation of results.",
  outcome:
    "The complete model reduced mean test SILog-RMSE from 0.572 to 0.537 compared with the plain ResNet-18 U-Net baseline. Geometric self-consistency achieved gains comparable to knowledge distillation without needing a teacher model. Attention did not outperform the dilation-only variant, a useful reminder to test additional complexity rather than assume it helps.",
  caveat:
    "Reported test values are 0.572 ± 0.011 for the baseline and 0.537 ± 0.004 for the complete model across five seeds. Lower is better. The view-synthesis regularizer uses simplifying assumptions and does not explicitly model occlusion, disocclusion, or reflections.",
  metric: {
    value: "0.572 → 0.537",
    label: "test SILog-RMSE",
    note: "Mean across five seeds · lower is better · team result",
  },
  sources: [{ label: "Read the research report", href: "/PDFs/CIL_monodepth_estimation.pdf" }],
  href: "/PDFs/CIL_monodepth_estimation.pdf",
  linkLabel: "Read report",
};

const security: Project = {
  slug: "soc-log-anomaly-detection",
  title: "SOC Log Anomaly Detection",
  category: "AI & cybersecurity",
  summary: "From security-log sequences to anomaly predictions and analyst-oriented explanations.",
  description:
    "An internship project adapting LogLLM into a security-log analysis pipeline, with normalized classification outputs, Phi-4 interpretation, and a Streamlit SOC prototype.",
  context: "Internship project · SecuLabs · 2025",
  tags: ["LLMs", "Cybersecurity", "Streamlit"],
  visual: "security",
  featured: false,
  challenge:
    "Security logs contain useful evidence of attacks, but their volume makes manual review difficult. An automated pipeline needs consistent classification outputs and explanations that help an analyst decide what to investigate.",
  approach: [
    "Adapt a hybrid BERT encoder and Llama-family language model for log-sequence classification, with a task-specific prompt and normalized binary outputs.",
    "Add a separate Phi-4 interpretation stage to summarize anomalous sequences, estimate severity, and suggest actions.",
    "Integrate the pipeline into a Streamlit prototype and evaluate classification on HDFS_v1 and CIC_UNSW_NB15.",
  ],
  outcome:
    "The evaluated pipeline achieved F1-scores of 99.61% on HDFS_v1 and 95.17% on CIC_UNSW_NB15. The report also records lower recall on the more heterogeneous UNSW data, and identifies sequence-length cost and human evaluation of explanations as areas for further work.",
  caveat:
    "The public website is a simulated demonstration of the workflow. The benchmark results above belong to the evaluated pipeline described in the internship report; they are not measurements of the public demo. Generated explanations and severity ratings still require human evaluation.",
  sources: [
    { label: "Open the simulated demo", href: "https://polimo.netlify.app", external: true },
    { label: "Read the internship report", href: "/PDFs/Seculabs_Internship_Report.pdf" },
  ],
  href: "https://polimo.netlify.app",
  linkLabel: "Simulated demo",
  external: true,
};

export const selectedProjects: Project[] = [fastgatr, forecasting, depth, security];
export const featuredProjects: Project[] = selectedProjects.filter((project) => project.featured);

export const swissgridProject: Project = {
  slug: "swissgrid-pv-installation-angle-prediction",
  title: "Swissgrid: PV Installation Angles",
  category: "Energy & geospatial data",
  summary: "Matching photovoltaic plants to roof geometry to estimate their tilt and orientation.",
  description:
    "An Energy Data Hackdays team project connecting PV-plant records with building and roof geometry, then estimating plausible installation angles.",
  context: "Team hackathon project · Energy Data Hackdays",
  tags: ["Geospatial data", "PostgreSQL", "Solar energy"],
  visual: "solar",
  featured: false,
  challenge:
    "The challenge starts with three unknowns: which building a PV plant belongs to, which roof is most plausible, and what tilt and orientation the panels likely have.",
  approach: [
    "Cluster roof geometries into buildings and match the resulting groups to PV plants using a PostgreSQL database.",
    "Rank candidate roofs using a cost function incorporating energy efficiency, size, roof class, and inclination.",
    "Apply explicit tilt and orientation rules for flat or unusually steep roofs, with defaults for unmatched plants.",
  ],
  outcome:
    "The team produced a workflow mapping PV plant IDs to selected roof information and estimated installation angles. The presentation documents the matching logic, roof-selection criteria, and adjustment rules.",
  caveat:
    "The outputs are estimates based on geometry and heuristic rules. The presentation does not establish a measured prediction accuracy against verified panel installations.",
  sources: [{ label: "Read the team presentation", href: "/PDFs/Swissgrid-Challenge_%20PV%20Installation%20Angles.pdf" }],
  href: "/PDFs/Swissgrid-Challenge_%20PV%20Installation%20Angles.pdf",
  linkLabel: "Team presentation",
};

export const additionalProjects: Project[] = [
  {
    slug: "ur5-conditional-flow",
    title: "UR5 Conditional Flow",
    category: "Robotics",
    summary: "Exploring conditional flow matching for UR5 robot movement estimation.",
    description: "A robot movement-estimation project using conditional flow matching with UR5 trajectories.",
    context: "Code project · Robot trajectories",
    tags: ["Conditional flow matching", "Robotics"],
    visual: "robotics",
    featured: false,
    challenge: "Explore how a conditional generative method can represent robot movement using UR5 trajectory data.",
    approach: ["Use conditional flow matching to study movement estimation with UR5 trajectories.", "Keep the implementation available in a dedicated repository for inspection."],
    outcome: "The repository contains the conditional flow-matching implementation and project context for exploring movement estimation with UR5 trajectories.",
    sources: [{ label: "Explore the repository", href: "https://github.com/omarabdesslem/UR5-Conditional-Flow", external: true }],
    href: "https://github.com/omarabdesslem/UR5-Conditional-Flow",
    linkLabel: "View on GitHub",
    external: true,
  },
  {
    slug: "pinn-darcy-flow",
    title: "PINN Darcy Flow",
    category: "Scientific machine learning",
    summary: "Using physics-informed neural networks to explore flow below a water reservoir.",
    description: "Physics-informed neural networks applied to Darcy flow below a water reservoir.",
    context: "Code project · Physics-informed learning",
    tags: ["PINNs", "Darcy flow", "Scientific computing"],
    visual: "physics",
    featured: false,
    challenge: "Investigate Darcy flow below a water reservoir using a learning method informed by the governing physics.",
    approach: ["Apply a physics-informed neural network to the Darcy-flow problem.", "Make the implementation available for readers who want to examine the modelling approach."],
    outcome: "The repository provides the physics-informed neural-network implementation for readers who want to examine the Darcy-flow modelling approach.",
    sources: [{ label: "Explore the repository", href: "https://github.com/omarabdesslem/PINN-Darcy-Flow", external: true }],
    href: "https://github.com/omarabdesslem/PINN-Darcy-Flow",
    linkLabel: "View on GitHub",
    external: true,
  },
  {
    slug: "industrial-vae",
    title: "Industrial VAE",
    category: "Representation learning",
    summary: "Learning compact representations of industrial imagery with a convolutional VAE.",
    description: "A convolutional variational autoencoder for learning compact representations of industrial images.",
    context: "Code project · Image representations",
    tags: ["Variational autoencoders", "Computer vision"],
    visual: "representation",
    featured: false,
    challenge: "Explore how a compact latent representation can capture information in industrial imagery.",
    approach: ["Use a convolutional variational autoencoder to learn image representations.", "Keep the model implementation available in a dedicated repository."],
    outcome: "The repository provides the convolutional VAE implementation for readers interested in how the model represents industrial images.",
    sources: [{ label: "Explore the repository", href: "https://github.com/omarabdesslem/Industrial-VAE", external: true }],
    href: "https://github.com/omarabdesslem/Industrial-VAE",
    linkLabel: "View on GitHub",
    external: true,
  },
];

export const allProjects: Project[] = [...selectedProjects, swissgridProject, ...additionalProjects];
