export type Project = {
  title: string;
  summary: string;
  description: string;
  href: string;
  linkLabel: string;
  external?: boolean;
};

export const selectedProjects: Project[] = [
  {
    title: "Power Grid Load Forecasting",
    summary: "Machine-learning forecasts for Swiss electricity load, enriched with weather and seasonality data.",
    description:
      "A data-driven thesis modelling Swiss electricity load with time-series methods and machine learning. Forecasts incorporate seasonality and exogenous weather data, with rigorous diagnostics and evaluation.",
    href: "https://energy-forecasts.netlify.app",
    linkLabel: "Project website",
    external: true,
  },
  {
    title: "SOC Log Anomaly Detection",
    summary: "An in-house LLM pipeline for real-time security-log analysis and anomaly detection.",
    description:
      "Customized and deployed an in-house LLM for real-time security-log analysis during a SecuLabs internship. The work included prompt and output normalization, Phi-4 severity ratings, and a Streamlit monitoring dashboard.",
    href: "https://polimo.netlify.app",
    linkLabel: "More info",
    external: true,
  },
  {
    title: "Monocular Depth Estimation",
    summary: "Global-context augmentation and geometric regularization for monocular depth estimation.",
    description:
      "Investigated lightweight global-context augmentation and geometric self-consistency regularization for monocular depth estimation, improving contextual reasoning while preserving geometric consistency.",
    href: "/PDFs/CIL_monodepth_estimation.pdf",
    linkLabel: "Read report",
  },
  {
    title: "FastGATr Optimisation",
    summary: "High-performance C++ and ARM NEON kernels for geometric algebra transformers.",
    description:
      "Reimplemented and optimized six core Geometric Algebra Transformer kernels in C++. Sparse specialisation, memory-layout improvements, and ARM NEON vectorization substantially reduce runtime on Apple silicon.",
    href: "/PDFs/asl_report.pdf",
    linkLabel: "Read report",
  },
];

export const swissgridProject: Project = {
  title: "Swissgrid: PV Installation-Angle Prediction",
  summary: "Winning Energy Data Hackdays project for estimating PV installation angles across Switzerland.",
  description:
    "Winning Energy Data Hackdays project for estimating PV installation angles across Switzerland.",
  href: "https://energydata.bb.dribdat.cc",
  linkLabel: "Challenge link",
  external: true,
};

export const additionalProjects: Project[] = [
  {
    title: "UR5 Conditional Flow",
    summary: "Conditional flow matching for robot movement estimation with UR5 trajectories.",
    description:
      "Robot movement estimation using conditional flow matching for UR5 trajectories.",
    href: "https://github.com/omarabdesslem/UR5-Conditional-Flow",
    linkLabel: "View on GitHub",
    external: true,
  },
  {
    title: "PINN Darcy Flow",
    summary: "Physics-informed neural networks for Darcy flow below a water reservoir.",
    description:
      "Physics-informed neural networks applied to Darcy flow below a water reservoir.",
    href: "https://github.com/omarabdesslem/PINN-Darcy-Flow",
    linkLabel: "View on GitHub",
    external: true,
  },
  {
    title: "Industrial VAE",
    summary: "Learning compact representations of industrial imagery with a convolutional VAE.",
    description:
      "Learning compact representations of industrial imagery with a convolutional variational autoencoder.",
    href: "https://github.com/omarabdesslem/Industrial-VAE",
    linkLabel: "View on GitHub",
    external: true,
  },
];
