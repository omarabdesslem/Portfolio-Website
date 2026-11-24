import type { Metadata } from "next";
import "./styles.css";

export const metadata: Metadata = {
  title: "Omar Abdesslem",
  description:
    "Personal academic landing page for Omar Abdesslem, MSc student at ETH Zurich and Student Researcher at Paul Scherrer Institute.",
};

export default function HomePage() {
  return (
    <main className="page">
      <header className="profile">
        <div>
          <h1>Omar Abdesslem</h1>
          <p>Student Researcher</p>
          <p>
            <a
              href="https://www.psi.ch/en"
              target="_blank"
              rel="noopener noreferrer"
            >
              Paul Scherrer Institute
            </a>
          </p>
          <p>
            MSc Computer Science,{" "}
            <a
              href="https://ethz.ch/en.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              ETH Zurich
            </a>
          </p>
          <p>
            <a href="mailto:omar.abdesslem@mail.ch">omar.abdesslem@mail.ch</a>
          </p>

          <nav className="links" aria-label="Profile links">
            <a
              href="https://linkedin.com/in/omarabdesslem"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/omarabdesslem"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://omar-abdesslem.ch"
              target="_blank"
              rel="noopener noreferrer"
            >
              Portfolio
            </a>
          </nav>
        </div>
      </header>

      <section aria-labelledby="about">
        <h2 id="about">About Me</h2>
        <p>
          I am an MSc Computer Science student at ETH Zurich and a Student
          Researcher at the Paul Scherrer Institute. My work focuses on machine
          intelligence, computer vision, cybersecurity, and reliable ML systems.
        </p>
        <p>
          I am interested in clean, reproducible, and efficient systems that
          connect research with practical applications.
        </p>
      </section>

      <hr />

      <section aria-labelledby="experience">
        <h2 id="experience">Experience</h2>

        <article className="entry">
          <h3>
            Student Researcher,{" "}
            <a
              href="https://www.psi.ch/en"
              target="_blank"
              rel="noopener noreferrer"
            >
              Paul Scherrer Institute
            </a>
          </h3>
          <p className="meta">Current</p>
          <p>
            Working on on-policy distillation for multi-modal flow matching and
            diffusion models in proton therapy, achieving 4–8× faster student
            models with up to 95% fidelity without external datasets.
          </p>
        </article>

        <article className="entry">
          <h3>
            AI &amp; Cybersecurity Intern,{" "}
            <a
              href="https://seculabs.ch/"
              target="_blank"
              rel="noopener noreferrer"
            >
              SecuLabs
            </a>
          </h3>
          <p className="meta">June 2025 – September 2025</p>
          <p>
            Delivered a privacy-preserving, on-premise intrusion detection
            pipeline using anonymized logs and fine-tuned stacked transformers,
            achieving a 99.7% F1 score in enterprise infrastructure.
          </p>
        </article>

        <article className="entry">
          <h3>
            Software Engineer,{" "}
            <a
              href="https://www.hku.edu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              The University of Hong Kong
            </a>
          </h3>
          <p className="meta">January 2024 – February 2024</p>
          <p>
            Helped refine web tools for Cantonese acquisition using Vue.js, Git
            workflows, and CI/CD practices.
          </p>
        </article>
      </section>

      <hr />

      <section aria-labelledby="projects">
        <h2 id="projects">Projects</h2>

        <article className="entry">
          <h3>
            <a
              href="https://energy-forecasts.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Power Grid Load Forecasting
            </a>
          </h3>
          <p className="meta">Machine Learning · Time Series</p>
          <p>
            Bachelor thesis modelling Swiss electricity load with time series,
            machine learning, seasonality, and exogenous weather features,
            achieving a 20% MAPE improvement over the baseline model.
          </p>
        </article>

        <article className="entry">
          <h3>
            <a
              href="https://omar-abdesslem.ch/PDFs/CIL_monodepth_estimation.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Monocular Depth Estimation
            </a>
          </h3>
          <p className="meta">Computer Vision · Deep Learning</p>
          <p>
            Improved monocular depth estimation through lightweight
            global-context augmentation and geometric self-consistency
            regularisation for CNN-based depth models.
          </p>
        </article>

        <article className="entry">
          <h3>
            <a
              href="https://github.com/omarabdesslem/Industrial-VAE"
              target="_blank"
              rel="noopener noreferrer"
            >
              Industrial VAE
            </a>
          </h3>
          <p className="meta">Computer Vision · Representation Learning</p>
          <p>
            Convolutional variational autoencoder for learning compact latent
            representations of industrial imagery.
          </p>
        </article>

        <article className="entry">
          <h3>
            <a
              href="https://github.com/omarabdesslem/FAST-GATr"
              target="_blank"
              rel="noopener noreferrer"
            >
              FAST-GATr
            </a>
          </h3>
          <p className="meta">Machine Learning Systems · Performance Optimisation</p>
          <p>
            Implemented C/C++ extension modules for core Geometric Algebra
            Transformer operations (building on EzGATr), achieving up to 4×
            speedup over PyTorch and 400× over the initial C++ baseline.
          </p>
        </article>

        <article className="entry">
          <h3>
            <a
              href="https://github.com/omarabdesslem/PINN-Darcy-Flow"
              target="_blank"
              rel="noopener noreferrer"
            >
              PINN Darcy Flow
            </a>
          </h3>
          <p className="meta">Scientific Machine Learning · Physics-Informed AI</p>
          <p>
            Physics-informed neural network for modelling Darcy flow below a
            water reservoir while incorporating physical constraints directly
            into training.
          </p>
        </article>

        <article className="entry">
          <h3>
            <a
              href="https://github.com/omarabdesslem/UR5-Conditional-Flow"
              target="_blank"
              rel="noopener noreferrer"
            >
              UR5 Conditional Flow
            </a>
          </h3>
          <p className="meta">Robotics · Generative Modelling</p>
          <p>
            Robot movement estimation with conditional flow matching for UR5
            trajectories.
          </p>
        </article>

        <article className="entry">
          <h3>Swissgrid PV Angle Challenge</h3>
          <p className="meta">Data Science · Renewable Energy</p>
          <p>
            Co-winning project at the{" "}
            <a
              href="https://www.energydatahackdays.ch"
              target="_blank"
              rel="noopener noreferrer"
            >
              Energy Data Hackdays
            </a>{" "}
            using Databricks and geospatial clustering to estimate orientation
            and tilt for 233,000+ Swiss PV plants, improving RMSE by 30% over
            Swissgrid&apos;s state-of-the-art model.
          </p>
        </article>
      </section>

      <hr />

      <section aria-labelledby="education">
        <h2 id="education">Education</h2>

        <p>
          <a
            href="https://ethz.ch/en.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            ETH Zurich
          </a>
          , MSc Computer Science
        </p>

        <p>
          <a
            href="https://www.unige.ch/en/"
            target="_blank"
            rel="noopener noreferrer"
          >
            University of Geneva
          </a>
          , BSc Computer Science
        </p>

        <p>
          <a
            href="https://www.hku.edu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            The University of Hong Kong
          </a>
          , Swiss-International Mobility Programme
        </p>
      </section>
    </main>
  );
}