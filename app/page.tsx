"use client";

import { useState, useEffect } from "react";
import Turnstile from "react-turnstile";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function HomePage() {
  const [verified, setVerified] = useState(false);
  const router = useRouter();

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
      setVerified(true);
      router.refresh(); // Refresh the page to display content
    } else {
      alert("Verification failed. Please try again.");
    }
  };

  return (
    <main className="flex flex-col items-center p-12 bg-gray-100 text-black">
      {/* Show Turnstile until verified */}
      {!verified ? (
        <div className="flex items-center justify-center min-h-screen">
          <Turnstile
            sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
            onVerify={handleVerify}
            theme="light"
          />
        </div>
      ) : (
        // Once verified, display the CV content
        <>
<header className="mb-12 text-center sm:mb-12">
  {/* Circular Image */}
  <div className="flex flex-col items-center mb-4">
    <Image
      src="/images/profile_picture.jpg"
      alt="Omar Abdesslem"
      width={150}
      height={150}
      className="rounded-full border-4 border-gray-300"
      loading="eager"
    />
    {/*  */}
    <div className="mt-4">
      <h1 className="text-4xl font-bold">Omar Abdesslem</h1>
      <p className="text-lg">
        {/* AI Intern @SecuLabs | Msc AI @ETHZ */}
        Software Engineer | Student at the University of Geneva & HKU
      </p>
      <p className="text-md">Geneva, Switzerland</p>
    </div>
  </div>
</header>
<nav className="mb-12">
  <ul className="flex flex-wrap justify-center space-x-4">
    <li>
      <a href="#about" className="text-blue-900 hover:underline">
        ABOUT
      </a>
    </li>
    <li>
      <a href="#projects" className="text-blue-900 hover:underline">
        PROJECTS
      </a>
    </li>
    <li>
      <a href="#experiences" className="text-blue-900 hover:underline">
        EXPERIENCES
      </a>
    </li>
    <li className="text-center">
      <a href="#education" className="text-blue-900 hover:underline">
        EDUCATION
      </a>
    </li>
    <li className="text-center">
      <a href="#activities" className="text-blue-900 hover:underline">
        ACTIVITIES
      </a>
    </li>
  </ul>
</nav>
{/* <section id="about" className="w-full max-w-4xl mb-40">
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <h3 className="text-xl font-semibold mb-4">ABOUT</h3>
    <p className="mb-4">
      Hi there! I&#39;m Omar, an upcoming master&#39;s student at the&nbsp;
      <a
        href="https://www.ethz.ch"
        target="_blank"
        rel="noopener noreferrer"
        className="text-black-800 hover:underline"
      >
        Swiss Federal Institute of Technology
      </a>
      &nbsp;(ETH Zürich), Switzerland.
    </p>*/}
<section id="about" className="w-full max-w-4xl mb-40">
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <h3 className="text-xl font-semibold mb-4">ABOUT</h3>
    <p className="mb-4">
      Hi there! I&#39;m Omar, an undergraduate student pursuing Computer Science at&nbsp;
      <a
        href="https://www.unige.ch"
        target="_blank"
        rel="noopener noreferrer"
        className="text-red-800 hover:underline"
      >
        University of Geneva
      </a>
      &nbsp;(UNIGE), Switzerland.
    </p>


    <p>
      I strive for ingenuity and skill refinement in software engineering,
      data mining, cryptography, and web development.
    </p>
    <div className="mt-4 flex justify-center space-x-4">
      <a
        href="https://github.com/omarabdesslem"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-4 py-2 bg-gray-800 text-white text-sm font-medium rounded-md hover:bg-gray-700"
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
        className="inline-flex items-center px-4 py-2 bg-blue-900 text-white text-sm font-medium rounded-md hover:bg-blue-600"
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

<section id="projects" className="w-full max-w-4xl mb-40">
  <h2 className="text-2xl font-bold mb-4">PROJECTS</h2>

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
      {" "}
      For this project, we used Databricks and Python to predict
      photovoltaic (PV) installation angles (orientation and tilt) for
      over 233,000 PV plants in Switzerland. By integrating data from
      sonnendach.ch, which provided roof information, with the Pronovo AG
      database, we employed minimum distance clustering to match PV plants
      to the nearest buildings. We used KMeans clustering to group plants
      and buildings based on geographic proximity. Our predictive models
      estimated installation angles to fill in missing data, enhancing
      forecast accuracy for renewable energy generation. Through this
      project, we gained experience in geospatial data clustering,
      handling big data with Databricks, and applying predictive modeling
      for energy forecasting.
    </p>
  </div>

  <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
    <h3 className="text-xl font-semibold">
      EduAssess: Interactive Lab Feedback System
    </h3>
    <p>
      Over the span of a semestre, I developed EduAssess, a software
      application aimed at helping students better understand the
      expectations of their lab assignments in the Operating Systems
      course at UNIGE. Supervised by my professor, Chanel Guillaume, this
      tool provides instant and autonomous feedback by running rigorous
      Python tests that simulate the evaluation criteria set by the
      professor. The system minimizes the use of external libraries and is
      designed to handle execution differences across different
      environments.
    </p>
  </div>

  <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
    <h3 className="text-xl font-semibold">
      Predicting Box Office Success: Analyzing Film Industry Data
    </h3>
    <p>
      Along with my classmates, I Participated in the{" "}
      <a
        href="https://www.kaggle.com/competitions/tmdb-box-office-prediction/overview"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-900 hover:underline"
      >
        TMDB Box Office Prediction
      </a>{" "}
      Big Data competition on Kaggle.
    </p>
    <p>
      {" "}
      Our goal was to use Machine Learning to predict a film&#39;s sucess
      based on the movie&#39;s metadata from imdb. We focused on
      preprocessing by removing unnecessary information and converting
      certain features into boolean values. We also applied multiclass hot
      encoding to genres and counted occurrences in production countries,
      spoken languages, keywords, cast, and crew. Various models were
      tried, and the best fitting model was selected based on performance.
      This was in the context of our Data Mining course Project. Final
      score was 1.5
    </p>
  </div>
</section>
<section id="experiences" className="w-full max-w-4xl mb-40">
  <h2 className="text-2xl font-bold mb-4">WORK EXPERIENCES</h2>
  {/* <div className="bg-white p-6 rounded-lg shadow-lg mb-6 flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
    <div className="flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32 mx-auto sm:mx-0">
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
      <p>
      SecuLabs SA is a Swiss cybersecurity company that provides its clients with top-level expertise. It offers a personalized, close-at-hand service in the areas of technical security, governance, and compliance.
</p>
    </div>
  </div>  */}
   
  

  <div className="bg-white p-6 rounded-lg shadow-lg mb-6 flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
    <div className="flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32 mx-auto sm:mx-0">
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
        Front-end Developer Intern
      </h3>
      <p>
        SLRLAB, Faculty of Education, The University of Hong Kong (HKU),
        Jan 2024 - Feb 2024, Hong Kong
      </p>
      <p>
        Assisted in designing and refining interactive web-based tools
        aimed at enhancing Cantonese and Mandarin language acquisition for
        specially-abled children. Worked closely
        with a team of developers, educators, and language specialists,
        acquiring essential skills in software engineering principles,
        version control, collaborative development with Git, and CI/CD
        practices. Gained in-depth knowledge and practical experience with
        the Vue.js ecosystem, including tools like Vue Router and Vuex.
      </p>
    </div>
  </div>

  <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
    <div className="flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32 mx-auto sm:mx-0">
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
      <h3 className="text-xl font-semibold">Programming Teacher</h3>
      <p>Futurekids, Sep 2022 - Aug 2023, Geneva, Switzerland</p>
      <p>
        Taught various programming languages and tools to children aged 5
        to 14, including Scratch for beginners, LEGO NXT for intermediate
        robotics projects, and Unreal Engine for advanced students.
        Enhanced communication skills, managed diverse classes, and
        collaborated with other educators to deliver engaging programming
        curricula.
      </p>
    </div>
  </div>
</section>

<section id="education" className="w-full max-w-4xl mb-40">
  <h2 className="text-2xl font-bold mb-4">EDUCATION</h2>
  {/*   <div className="bg-white p-6 rounded-lg shadow-lg mb-6 flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
    <div className="flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32 mx-auto sm:mx-0">
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
      <p>Msc, Machine Intelligence & Data Science</p>
      <p>Sep 2025 - June 2027</p>
      <p>
      Participating in cutting-edge 
projects and collaborations within ETH Zurich&#39;s renowned academic environment.
      </p>
    </div>
  </div> 
 
*/}

  <div className="bg-white p-6 rounded-lg shadow-lg mb-6 flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
    <div className="flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32 mx-auto sm:mx-0">
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

  <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
    <div className="flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32 mx-auto sm:mx-0">
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

<section id="activities" className="w-full max-w-4xl mb-12">
  <h2 className="text-2xl font-bold mb-4">ACTIVITIES</h2>
  <div className="flex flex-wrap -mx-3">
    {/* Hackathon */}
    <div className="w-full md:w-1/2 px-3 mb-6">
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
          className="w-[500px] h-[300px] rounded-lg object-cover"
          loading="eager"
        />
      </a>
      <h3 className="text-xl font-semibold mt-2">
        Hackathon: ORD for the Sciences, EPFL
      </h3>
      <p>{/* Energy Hackathon */}</p>
    </div>
    {/* Hackathon */}
    <div className="w-full md:w-1/2 px-3 mb-6">
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
          className="w-[500px] h-[300px] rounded-lg object-cover"
          loading="eager"
        />
      </a>
      <h3 className="text-xl font-semibold mt-2">
        Energy Data Hackadays 2024, Aargau
      </h3>
      <p>{/* Energy Data Hackadays 2024, Aargau */}</p>
    </div>

    {/* Hackathon */}
    <div className="w-full md:w-1/2 px-3 mb-6">
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
          className="w-[500px] h-[300px] rounded-lg object-cover"
          loading="eager"
        />
      </a>
      <h3 className="text-xl font-semibold mt-2">
        Swiss Open Cultural Data Hackathon, Luzern
      </h3>
      <p>{/* Swiss Open Cultural Data Hackathon, Luzern */}</p>
    </div>

    {/* French Society */}
    <div className="w-full md:w-1/2 px-3 mb-6">
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
          className="w-[500px] h-[300px] rounded-lg object-cover"
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

<footer className="w-full text-center mt-12">
  <p>Omar Abdesslem</p>
  <p>Built by hand using React</p>
  <p>MIT License, {new Date().getFullYear()}</p>
  </footer>
        </>
      )}
    </main>
  );
}
