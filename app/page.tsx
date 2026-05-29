"use client";
<link rel="canonical" href="https://omar-abdesslem.ch/" />

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function HomePage() {
  const [verified, setVerified] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const router = useRouter();
  const [showBackToTop, setShowBackToTop] = useState(false);
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [tooBig, setTooBig] = useState(false);
  const [tooSmall, setTooSmall] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      if (window.innerWidth >= 1920) {
        setTooBig(true);
      } else {
        setTooBig(false);
      }

      if (window.innerWidth <= 720) {
        setTooSmall(true);
      } else {
        setTooSmall(false);
      }

    };

    checkScreen(); // run once at start
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);


  }, []);

    useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const onScroll = () => {
      // Show after scrolling down a bit inside the <main> scroller
      setShowBackToTop(el.scrollTop > 200);
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // initialize once
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
  const handleScroll = () => {
    const education = document.getElementById("education");
    if (!education) return;

    const rect = education.getBoundingClientRect();
    const middleOfSection = rect.top + rect.height / 2;
    const scrollY = window.scrollY + window.innerHeight / 2;

    setShowBackToTop(scrollY > education.offsetTop + rect.height / 2);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  useEffect(() => {
    // Check if the user has already been verified (via cookies/localStorage)
    /* removed these 2 lines to disable Turnstile (line 1)
    if (document.cookie.includes("verified=true")) {*/
      setVerified(true);
      /* removed these 2 lines to disable Turnstile (line 2)
    }*/
  }, []);

  const handleVerify = async (token: string) => {
    const response = await fetch("/api/verify-turnstile", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ response: token }),
    });

    const data = await response.json();
    if (data.success) {
      document.cookie = "verified=true; path=/"; // Store verification status
      router.refresh(); // Refresh the page to display content
    } else {
      alert("Verification failed. Please try again.");
    }
  };


  return (
<main       ref={scrollerRef}
className="h-dvh w-full overflow-y-auto
          snap-none lg:snap-y lg:snap-mandatory scroll-smooth
          bg-white text-black
          flex flex-col items-center
          scroll-pt-8 sm:scroll-pt-12"
>


      <>
<section id="about" className="min-h-dvh w-full max-w-4xl lg:snap-start lg:snap-always px-6 sm:px-8 lg:px-10 xl:px-0 pt-16 pb-12 sm:pt-20 sm:pb-16 lg:py-16">
  <div className="flex flex-col mb-8 sm:mb-12 lg:mb-10"></div>
  <header className="mb-12 text-center sm:mb-14 lg:mb-12">
    {/* Circular Image */}
    <div className="flex flex-col items-center mb-4">
  <Image
    src="/images/profile_picture.jpg"
    alt="Omar Abdesslem"
    width={150}
    height={150}
	    className="rounded-full border-4 border-gray-300 w-32 h-32 sm:w-36 sm:h-36 lg:w-36 lg:h-36"
    loading="eager"
    onLoad={() => setIsImageLoaded(true)}
  />    {/*  */}
      <div className="mt-4">
	        <h1 className="text-3xl sm:text-4xl lg:text-4xl font-bold">Omar Abdesslem</h1>
	        <p className="text-lg sm:text-xl lg:text-lg">
          {/* AI Intern @SecuLabs | Msc AI @ETHZ */}
          Computer Vision @PSI | Msc @ETH
        </p>
	        <p className="text-base sm:text-lg lg:text-base">Geneva, Switzerland</p>
      </div>
    </div>
  </header>
  
  <nav className="mb-16 sm:mb-20 lg:mb-12">
    <ul className="flex flex-wrap justify-center gap-x-6 gap-y-4 text-base sm:text-lg lg:text-base">
      <li>
        <a
    href="#"
    className="text-blue-900 hover:underline"
    onClick={(e) => e.preventDefault()}
  >
          ABOUT
        </a>
      </li>
              <li className="text-center">
  <a href="#education" className="text-blue-900 hover:underline">EDUCATION</a>
      </li>
          <li>
  <a href="#projects" className="text-blue-900 hover:underline">PROJECTS</a>
      </li>

      <li className="text-center">
  <a href="#experiences" className="text-blue-900 hover:underline">EXPERIENCES</a>
        </li>
          <li className="text-center">
  <a href="#activities" className="text-blue-900 hover:underline">ACTIVITIES</a>
      </li>
    </ul>
  </nav>
  {/* About Section */}
  <div className="w-full bg-white p-8 lg:p-6 rounded-lg shadow-lg">
    <h3 className="text-xl sm:text-2xl lg:text-xl font-semibold mb-6 lg:mb-4">ABOUT</h3>
    <p className="mb-6 text-lg sm:text-xl lg:mb-4 lg:text-base leading-relaxed">
      Hi there! I&#39;m Omar, a master&#39;s student at the&nbsp;
      <a
        href="https://www.ethz.ch"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#003366] hover:underline"
      >
        Polytechnikum Zürich
      </a>
      &nbsp;(ETH Zürich).
    </p>

<p className="hidden sm:block sm:text-lg lg:text-base">
        I strive for clean and sustainable code. I like neat design and Deep Learning. 
    </p>
    <div className="mt-6 flex justify-center gap-6 lg:mt-4 lg:gap-4">
      <a
        href="https://github.com/omarabdesslem"
        target="_blank"
        rel="noopener noreferrer"
	        className="inline-flex items-center px-5 py-2 sm:px-6 bg-gray-800 text-white text-sm sm:text-base lg:text-sm font-medium rounded-md hover:bg-gray-700"
      >
        <svg
          className="w-4 h-4 mr-2"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.1.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.17-1.1-1.49-1.1-1.49-.9-.62.07-.6.07-.6 1 .07 1.53 1.04 1.53 1.04.9 1.53 2.34 1.09 2.91.84.09-.66.35-1.1.64-1.35-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.7-.1-.26-.45-1.28.1-2.66 0 0 .84-.27 2.75 1.03A9.61 9.61 0 0112 6.8c.85.003 1.71.115 2.52.337 1.9-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.4.1 2.66.64.71 1.03 1.61 1.03 2.7 0 3.86-2.34 4.7-4.57 4.95.36.31.69.92.69 1.85v2.75c0 .27.18.58.69.48A10.004 10.004 0 0022 12c0-5.52-4.48-10-10-10z"
            clipRule="evenodd"
          />
        </svg>
        GitHub
      </a>
      <a
        href="https://www.linkedin.com/in/omarff/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-5 py-2 sm:px-6 bg-blue-900 text-white text-sm sm:text-base lg:text-sm font-medium rounded-md hover:bg-blue-600"
      >
        <svg
          className="w-4 h-4 mr-2"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.5c-1 0-1.8-.82-1.8-1.8s.8-1.8 1.8-1.8 1.8.82 1.8 1.8-.8 1.8-1.8 1.8zm13.5 11.5h-3v-5.5c0-3.03-3.5-2.79-3.5 0v5.5h-3v-10h3v1.32c1.4-2.58 7-2.77 7 2.47v6.21z" />
        </svg>
        LinkedIn
      </a>
    </div>
  </div>
</section>

      {/* Back to top button */}
      <button
        onClick={() =>
          scrollerRef.current?.scrollTo({ top: 0, behavior: "smooth" })
        }
        className={`hidden sm:flex fixed bottom-6 left-6 z-40 w-8 h-8 rounded-full bg-black text-white shadow-lg items-center justify-center hover:bg-gray-800 transition-opacity duration-700 ${
          showBackToTop ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-label="Back to top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
      </button>

<section id="education" className="w-full max-w-4xl lg:snap-start lg:snap-always px-6 sm:px-8 lg:px-10 xl:px-0 py-12 sm:py-16 lg:py-20">
  <h2 className="text-2xl font-bold mb-4">EDUCATION</h2>
    <div className="bg-white p-6 rounded-lg shadow-lg mb-6 flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:gap-6">
    <div className="flex-shrink-0 w-[5.4rem] h-[5.4rem] sm:w-[7.2rem] sm:h-[7.2rem] mx-auto sm:mx-0">
      <a
        href="https://www.ethz.ch"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/images/eth.svg"
          alt="ETHZ Logo"
          width={150}
          height={150}
          className="rounded-full"
          loading="eager"
        />
      </a>
    </div>
    <div className="flex-1">
      <h3 className="text-xl font-semibold">ETH Zürich
      </h3>
      <p>Msc, Machine Intelligence & Cybersecurity</p>
      <p>Sep 2025 - June 2027</p>
<p></p>


<p className="inline">
  <span className="hidden sm:inline">   Courses: Computational Intelligence Lab, Advanced Systems Lab, Large Language Models, Big Data, Network Security, Artificial Intelligence</span>
</p>
    </div>
  </div> 
 

  <div className="bg-white p-6 rounded-lg shadow-lg mb-6 flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:gap-6">
    <div className="flex-shrink-0 w-[5.4rem] h-[5.4rem] sm:w-[7.2rem] sm:h-[7.2rem] mx-auto sm:mx-0">
      <a
        href="https://www.unige.ch"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/images/unige_logo.svg"
          alt="Université de Genève Logo"
          width={150}
          height={150}
          className="rounded-full"
          loading="eager"
        />
      </a>
    </div>
    <div className="flex-1">
      <h3 className="text-xl font-semibold">University of Geneva</h3>
      <p>Bachelor&#39;s degree, Computer Science</p>
      <p>Sep 2021 - June 2025</p>
      <p>
        Studied core subjects including Cryptography, Semantics, Networks
        along with Mathematics and Physics.
      </p>
    </div>
  </div>

  <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:gap-6">
    <div className="flex-shrink-0 w-[5.4rem] h-[5.4rem] sm:w-[7.2rem] sm:h-[7.2rem] mx-auto sm:mx-0">
      <a
        href="https://www.hku.hk"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/images/hku_logo.jpg"
          alt="The University of Hong Kong Logo"
          width={150}
          height={150}
          className="rounded-full"
          loading="eager"
        />
      </a>
    </div>
    <div className="flex-1">
      <h3 className="text-xl font-semibold">
        The University of Hong Kong
      </h3>
      <p>Exchange Student - Faculty of Engineering</p>
      <p>Sep 2023 - June 2024</p>
      <p>
        Swiss-International Mobility program, engaged in advanced studies
        and practical applications in Software Engineering, Data Mining,
        AI, Networks & Computer Vision.
      </p>
    </div>
  </div>
</section>


<section id="projects" className="w-full max-w-4xl lg:snap-start lg:snap-always px-6 sm:px-8 lg:px-10 xl:px-0 py-12 sm:py-16 lg:py-20">
  <h2 className="text-2xl font-bold mb-4">SELECTED PROJECTS</h2>
  <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
    <h3 className="text-xl font-semibold">
      Power Grid Load Forecasting using Machine Learning
    </h3>
    <p>
      A data-driven thesis modeling Swiss electricity load using Time Series and Machine Learning. Forecasts were informed by seasonality and enriched with exogenous weather data. The project applied rigorous time series diagnostics and evaluation metrics.
    </p>
<div className="mt-4 flex flex-wrap justify-center gap-4 items-center">
  <a
    href="https://energy-forecasts.netlify.app"
    target="_blank"
    rel="noopener noreferrer"
		    className="inline-flex h-8 min-w-[7.5rem] items-center justify-center px-3 bg-black text-white text-xs font-medium rounded-md hover:bg-gray-800 transition"
  >
    Project Website
  </a>
</div>

  </div>

	    <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
      <h3 className="text-xl font-semibold">
      AI-based Log Anomaly / Cyber-attack Detection for SOCs
      </h3>
  <p className="text-md">
    During half of my summer internship, I customized and deployed an inhouse trained LLM for real-time Security log analysis.
    <span className="hidden sm:inline">
      {" "}Modified prompts and output normalization; added Phi-4 severity ratings; built Streamlit dashboard for real-time monitoring. Achieved up to 99.98% accuracy; end-to-end inference on 10k logs in ~2 minutes with minimal resource overhead; near real-time processing on a single GPU.
    </span>
  </p>
       
      <div className="mt-4 flex flex-wrap justify-center gap-4 items-center">
        <a
          href="/PDFs/Seculabs_Internship_Report.pdf"
          target="_blank"
          rel="noopener noreferrer"
		          className="inline-flex h-8 min-w-[7.5rem] items-center justify-center px-3 bg-black text-white text-xs font-medium rounded-md hover:bg-gray-800 transition"
        >
          Full Report
        </a>
      </div>
    
  </div>
	    <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
    <h3 className="text-xl font-semibold">
      SwissGrid: Prediction of PV installation angles
    </h3>
    <p>
      Winner team for the Swissgrid Challenge for{" "}
      <a
        href="https://energydatahackdays.ch"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-900 hover:underline"
      >
        Energy Data Hackdays, Aargau.
      </a>{" "}
    </p>{" "}
  <p>
    For this project, we used Databricks and Python to predict installation angles for 233k+ PV plants in Switzerland.
    <span className="hidden sm:inline">
      {" "}We applied geospatial clustering and predictive modeling to estimate missing data and improve renewable energy forecasts.

    </span>
  </p>
        <div className="mt-4 flex flex-wrap justify-center gap-4 items-center">
  <a
    href="https://energydata.bb.dribdat.cc"
    target="_blank"
    rel="noopener noreferrer"
		    className="inline-flex h-8 min-w-[7.5rem] items-center justify-center px-3 bg-black text-white text-xs font-medium rounded-md hover:bg-gray-800 transition"
  >
    Challenge Link
  </a>
</div>
  </div>
</section>

<section id="experiences" className="w-full max-w-4xl lg:snap-start lg:snap-always px-6 sm:px-8 lg:px-10 xl:px-0 pt-8 pb-12 sm:pt-10 sm:pb-16 lg:pt-12 lg:pb-20">
  <h2 className="text-2xl font-bold mb-4">WORK EXPERIENCES</h2>
   <div className="bg-white p-6 rounded-lg shadow-lg mb-6 flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:gap-6">
    <div className="flex-shrink-0 w-[5.4rem] h-[5.4rem] sm:w-[7.2rem] sm:h-[7.2rem] mx-auto sm:mx-0">
      <a
        href="https://www.psi.ch/en"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/images/paul_scherrer_institut_logo.jpeg"
          alt="Paul Scherrer Institute Logo"
          width={150}
          height={150}
          className="rounded-full"
          loading="eager"
        />
      </a>
    </div>
    <div className="flex-1">
      <h3 className="text-xl font-semibold">
        Research Intern
      </h3>
      <p>
        Paul Scherrer Institute,
        June 2026 - Current, Villigen, Switzerland
      </p>
            <p className="text-md hidden sm:block">
        Machine learning, diffusion models, and computer vision for proton therapy at PSI.
      </p>
    </div>
  </div> 

   <div className="bg-white p-6 rounded-lg shadow-lg mb-6 flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:gap-6">
    <div className="flex-shrink-0 w-[5.4rem] h-[5.4rem] sm:w-[7.2rem] sm:h-[7.2rem] mx-auto sm:mx-0">
      <a
        href="http://seculabs.ch"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/images/SecuLabs.png"
          alt="SecuLabs Logo"
          width={150}
          height={150}
          className="rounded-full"
          loading="eager"
        />
      </a>
    </div>
    <div className="flex-1">
      <h3 className="text-xl font-semibold">
        AI Intern
      </h3>
      <p>
        SecuLabs,
        June 2025 - Sep 2025, Lausanne, Switzerland
      </p>
            <p className="text-md hidden sm:block">
Delivered privacy-preserving, on-prem SOC ML/DL pipelines using anonymized logs for anomaly detection and
incident forecasting, fine-tuned and benchmarked local enterprise LLMs.</p>
    </div>
  </div> 
   
  

  <div className="bg-white p-6 rounded-lg shadow-lg mb-6 flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:gap-6">
    <div className="flex-shrink-0 w-[5.4rem] h-[5.4rem] sm:w-[7.2rem] sm:h-[7.2rem] mx-auto sm:mx-0">
      <a
        href="https://slrlab.edu.hku.hk/about-us/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/images/hku_logo.jpg"
          alt="SRLAB Logo"
          width={150}
          height={150}
          className="rounded-full"
          loading="eager"
        />
      </a>
    </div>
    <div className="flex-1">
      <h3 className="text-xl font-semibold">
        Software Engineer - Intern
      </h3>
      <p>
        SLRLAB, The University of Hong Kong (HKU),
        Jan 2024 - Feb 2024, Hong Kong
      </p>
            <p className="text-md hidden sm:block">
        Built and refined Vue.js learning tools for Cantonese and Mandarin language acquisition, working with developers and educators in a Git-based workflow.
      </p>
    </div>
  </div>

  <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:gap-6">
    <div className="flex-shrink-0 w-[5.4rem] h-[5.4rem] sm:w-[7.2rem] sm:h-[7.2rem] mx-auto sm:mx-0">
      <a
        href="https://www.futurekids.io"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/images/futurekids_logo_1.png"
          alt="Futurekids Logo"
          width={150}
          height={150}
          className="rounded-full"
          loading="eager"
        />
      </a>
    </div>

	    <div className="flex-1">
	      <h3 className="text-xl font-semibold">Programming Instructor</h3>
	      <p>
	        Futurekids, Sept. 2022 - Aug. 2023 and March 2025 - May 2025, Geneva, Switzerland
	      </p>
	      <p className="text-md hidden sm:block">
	        Taught programming fundamentals, Python, and Unreal Engine to students aged 14 to 19.
	      </p>


    </div>
  </div>
</section>


<section id="activities" className="w-full max-w-4xl lg:snap-start lg:snap-always px-6 sm:px-8 lg:px-10 xl:px-0 py-12 sm:py-16 lg:py-20">
  <h2 className="text-2xl font-bold mb-4">ACTIVITIES</h2>
  <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-6">
    {/* Hackathon */}
    <div className="w-full">
      <a
        href="https://www.datascience.ch/event/sdsc-hackathons-ord-for-the-sciences"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/images/ORD-for-the-sciences-epfl.jpg"
          alt="ORD-for-the-sciences"
          width={1300}
          height={1000}
	          className="aspect-[5/3] w-full rounded-lg object-cover"
          loading="eager"
        />
      </a>
      <h3 className="text-xl font-semibold mt-2">
        Hackathon: ORD for the Sciences, EPFL
      </h3>
      <p>{/* Energy Hackathon */}</p>
    </div>
    {/* Hackathon */}
    <div className="w-full">
      <a
        href="https://energydatahackdays.ch"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/images/energy-hackadays.jpg"
          alt="Energy Hackathon"
          width={1300}
          height={1000}
	          className="aspect-[5/3] w-full rounded-lg object-cover"
          loading="eager"
        />
      </a>
      <h3 className="text-xl font-semibold mt-2">
        Energy Data Hackadays 2024, Aargau
      </h3>
      <p>{/* Energy Data Hackadays 2024, Aargau */}</p>
    </div>

    {/* Hackathon */}
    <div className="w-full">
      <a
        href="https://opendata.ch/events/glamhack24/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/images/opendata-glamhack.jpg"
          alt="Swiss Open Cultural Data Hackathon, Luzern"
          width={1300}
          height={1000}
	          className="aspect-[5/3] w-full rounded-lg object-cover"
          loading="eager"
        />
      </a>
      <h3 className="text-xl font-semibold mt-2">
        Swiss Open Cultural Data Hackathon, Luzern
      </h3>
      <p>{/* Swiss Open Cultural Data Hackathon, Luzern */}</p>
    </div>

    {/* French Society */}
    <div className="w-full">
      <a
        href="https://www.instagram.com/hkufrancais/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/images/french_soc_log.jpeg"
          alt="Activity Logo"
          width={1300}
          height={1000}
	          className="aspect-[5/3] w-full rounded-lg object-cover"
          loading="eager"
        />
      </a>
      <h3 className="text-xl font-semibold mt-2">
        French Society, HKU, 2023-2024
      </h3>
      <p>{/* French Society, HKU, 2023-2024 */}</p>
    </div>
  </div>
</section>

<footer className="w-full text-center py-10 text-sm mt-8">
  <p>Omar Abdesslem</p>
  <p>Built by hand using React</p>
  <p>MIT License, {new Date().getFullYear()}</p>
  </footer>
        </>


    </main>
  );
}
