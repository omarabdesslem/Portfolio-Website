import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader, SiteFooter } from "./components/site-header";
import { ProjectVisual } from "./components/project-visual";
import { allProjects, featuredProjects } from "./projects/project-data";
import { notes } from "./notes/note-data";

export const metadata: Metadata = {
  title: { absolute: "Omar Abdesslem — Machine learning, vision & efficient computing" },
  alternates: { canonical: "/" },
};

const experience = [
  {
    organization: "Paul Scherrer Institute",
    role: "Research Intern · Computer Vision",
    period: "Jun 2026 – present",
    description: "Machine learning and computer vision for proton therapy. Working where visual understanding meets scientific applications.",
    href: "https://www.psi.ch/en",
  },
  {
    organization: "SecuLabs",
    role: "AI Intern · Cybersecurity",
    period: "Jun – Sep 2025",
    description: "Built on-premises pipelines for security-log analysis and anomaly detection, and fine-tuned and benchmarked enterprise LLMs.",
    href: "https://seculabs.ch",
  },
  {
    organization: "SLRLAB, University of Hong Kong",
    role: "Software Engineering Intern",
    period: "Jan – Feb 2024",
    description: "Built Vue.js learning tools for Cantonese and Mandarin, collaborating with developers and educators.",
    href: "https://slrlab.edu.hku.hk/about-us/",
  },
  {
    organization: "Futurekids",
    role: "Programming Instructor",
    period: "2022 – 2023 · 2025",
    description: "Taught programming fundamentals, Python and Unreal Engine to students aged 14 to 19.",
    href: "https://www.futurekids.io",
  },
];

export default function HomePage() {
  return (
    <div className="site-shell" id="top">
      <SiteHeader home />
      <main id="main-content">
        <section className="hero page-container" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="section-label">Machine learning · Computer vision · Efficient computing</p>
            <h1 className="serif-heading" id="hero-title">Ideas into models.<br />Models into <em>practice.</em></h1>
            <p className="hero-intro">Hi, I’m Omar. I explore how machine learning can make sense of the world — and how to make it work efficiently.</p>
            <p className="hero-context">I’m a computer science master’s student at ETH Zürich, working on computer vision for proton therapy at the Paul Scherrer Institute.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore my work</a>
              <a className="text-link" href="#contact">Get in touch</a>
            </div>
          </div>
          <figure className="hero-portrait">
            <div className="portrait-frame">
              <Image src="/images/profile_picture.jpg" alt="Omar Abdesslem smiling outdoors" width={855} height={855} priority sizes="(max-width: 680px) 75vw, 310px" />
              <span className="portrait-mark" aria-hidden="true">oa.</span>
            </div>
            <figcaption><span>Omar Abdesslem</span><span>Zürich, Switzerland</span></figcaption>
          </figure>
        </section>

        <div className="affiliation-strip page-container" aria-label="Academic and research background">
          <p>Learning, building & researching at</p>
          <div><span>ETH <i>Zürich</i></span><span>Paul Scherrer Institut</span><span>Université de Genève</span><span>The University of Hong Kong</span></div>
        </div>

        <section className="section page-container" id="work" aria-labelledby="work-title">
          <span id="projects" className="anchor-alias" />
          <div className="section-heading">
            <div><p className="section-label">Selected work</p><h2 className="serif-heading" id="work-title">From the question to the implementation.</h2></div>
            <Link className="text-link" href="/projects">All projects <span className="link-count">{allProjects.length}</span></Link>
          </div>
          <div className="project-grid">
            {featuredProjects.map((project) => (
              <article className="project-card" key={project.slug}>
                <Link href={`/projects/${project.slug}`} className="project-visual-link" aria-label={`Explore ${project.title}`}>
                  <ProjectVisual kind={project.visual} compact />
                </Link>
                <div className="project-card-copy">
                  <p className="section-label">{project.category}</p>
                  <h3><Link href={`/projects/${project.slug}`}>{project.title}</Link></h3>
                  <p className="muted">{project.summary}</p>
                  <ul className="tags" aria-label="Technologies">{project.tags.slice(0, 3).map((tag) => <li key={tag}>{tag}</li>)}</ul>
                  <Link href={`/projects/${project.slug}`} className="text-link">Read case study</Link>
                </div>
              </article>
            ))}
          </div>
          <div className="work-footnote"><span>Also exploring AI for cybersecurity</span><Link href="/projects/soc-log-anomaly-detection" className="text-link">SOC Log Anomaly Detection</Link></div>
        </section>

        <section className="research-section" id="research" aria-labelledby="research-title">
          <div className="page-container research-layout">
            <div className="research-intro"><p className="section-label">Research & curiosity</p><h2 className="serif-heading" id="research-title">The questions<br />behind the code.</h2><p className="muted">My projects sit between learning from data, understanding geometry and making computation practical.</p></div>
            <div className="research-questions">
              <details open><summary>How can models understand the physical world?</summary><div><p>Computer vision connects pixels to structure. My work spans monocular depth estimation and vision for proton therapy, where geometry and the application both matter.</p><Link href="/projects/monocular-depth-estimation" className="text-link">Explore the depth-estimation project</Link></div></details>
              <details><summary>What makes a model efficient in practice?</summary><div><p>A model’s implementation matters alongside its architecture. FastGATr explores sparse computation, memory layout and vectorization to make geometric algebra operations run faster.</p><Link href="/projects/fastgatr" className="text-link">Inside FastGATr</Link></div></details>
              <details><summary>How do we evaluate ML beyond a demo?</summary><div><p>Forecasting and security-log analysis bring different constraints: seasonality, external data, privacy and evaluation. The case studies explain the approach and distinguish demonstrated results from illustrative interfaces.</p><Link href="/projects/power-grid-load-forecasting" className="text-link">Explore the forecasting project</Link></div></details>
            </div>
          </div>
        </section>

        <section className="section page-container home-notes" id="notes" aria-labelledby="notes-title">
          <div className="section-heading">
            <div><p className="section-label">Notes from the work</p><h2 className="serif-heading" id="notes-title">A closer look at the decisions.</h2></div>
            <Link className="text-link" href="/notes">All notes</Link>
          </div>
          <div className="note-list">
            {notes.map((note) => (
              <article className="note-preview" key={note.slug}>
                <div className="note-preview-meta"><p className="section-label">{note.topic}</p><span>{note.readingTime}</span></div>
                <div><h3><Link href={`/notes/${note.slug}`}>{note.title}</Link></h3><p className="muted">{note.summary}</p></div>
                <Link className="text-link" href={`/notes/${note.slug}`} aria-label={`Read ${note.title}`}>Read note</Link>
              </article>
            ))}
          </div>
        </section>

        <section className="section page-container experience-section" id="experience" aria-labelledby="experience-title">
          <span id="experiences" className="anchor-alias" />
          <div className="section-heading"><div><p className="section-label">In practice</p><h2 className="serif-heading" id="experience-title">Different settings. A shared curiosity.</h2></div><a href="https://www.linkedin.com/in/omarff/" className="text-link" target="_blank" rel="noopener noreferrer">Full background on LinkedIn</a></div>
          <div className="experience-list">{experience.map((item) => <article className="experience-row" key={item.organization}><p className="experience-date">{item.period}</p><div><h3><a href={item.href} target="_blank" rel="noopener noreferrer">{item.organization}</a></h3><p className="experience-role">{item.role}</p></div><p className="muted">{item.description}</p></article>)}</div>
        </section>

        <section className="about-section page-container" id="about" aria-labelledby="about-title">
          <div className="about-copy"><p className="section-label">A little about me</p><h2 className="serif-heading" id="about-title">Learning across<br />disciplines. And places.</h2><p>From Geneva to Hong Kong to Zürich, my studies and projects have taken me across computer science, research and teaching.</p><p className="muted">I care about clean code, thoughtful design, and secure, reliable systems. I also enjoy building with people: at hackathons, in research teams, and in the classroom.</p><div className="education-list" id="education"><h3>Education</h3><p><strong>ETH Zürich</strong><span>MSc · Machine Intelligence & Cybersecurity · 2025–2027</span></p><p><strong>University of Geneva</strong><span>BSc · Computer Science · 2021–2025</span></p><p><strong>University of Hong Kong</strong><span>Engineering exchange · 2023–2024</span></p></div></div>
          <div className="about-aside" id="activities"><figure className="hackathon-photo"><Image src="/images/energy-hackadays.jpg" alt="Energy Data Hackdays event graphic with interconnecting power cables" width={4096} height={2804} sizes="(max-width: 680px) 100vw, 500px" /><figcaption>Energy Data Hackdays · Aargau, 2024</figcaption></figure><div className="beyond-code"><p className="section-label">Beyond the coursework</p><Link href="/projects/swissgrid-pv-installation-angle-prediction">Energy Data Hackdays <span>Solar energy & open data</span></Link><a href="https://www.datascience.ch/event/sdsc-hackathons-ord-for-the-sciences" target="_blank" rel="noopener noreferrer">ORD for the Sciences, EPFL <span>Building with open research data</span></a><a href="https://opendata.ch/events/glamhack24/" target="_blank" rel="noopener noreferrer">GLAMhack, Luzern <span>Culture meets technology</span></a><a href="https://www.instagram.com/hkufrancais/" target="_blank" rel="noopener noreferrer">French Society, HKU <span>A connection across cultures</span></a></div></div>
        </section>

        <section className="contact-section page-container" id="contact" aria-labelledby="contact-title"><div><p className="section-label">Let’s connect</p><h2 className="serif-heading" id="contact-title">Good work starts<br />with a conversation.</h2><p className="muted">Research, engineering, or an interesting problem — I’d be happy to hear from you.</p></div><div className="contact-links"><a className="button button-primary" href="mailto:oabdesslem@student.ethz.ch">Email me</a><a className="text-link contact-email" href="mailto:oabdesslem@student.ethz.ch">oabdesslem@student.ethz.ch</a><a className="text-link" href="https://www.linkedin.com/in/omarff/" target="_blank" rel="noopener noreferrer">Connect on LinkedIn</a></div></section>
      </main>
      <SiteFooter />
    </div>
  );
}
