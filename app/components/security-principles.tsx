import Image from "next/image";

export function SecurityPrinciples() {
  return (
    <section className="page-container systems-section" id="systems" aria-labelledby="systems-title">
      <div className="security-principles">
        <Image src="/images/cia-triad.svg" alt="Confidentiality, Integrity and Availability" width={320} height={220} className="security-mark" />
        <div>
          <h2 className="security-principles-title serif-heading" id="systems-title">Secure and resilient systems</h2>
          <p className="security-principles-intro">I like to create and work on secure and resilient systems.</p>
          <a className="security-principles-definition" href="https://csrc.nist.gov/glossary/term/confidentiality_integrity_availability" target="_blank" rel="noopener noreferrer">Confidentiality · Integrity · Availability<span className="sr-only"> — NIST definition (opens in a new tab)</span></a>
          <p className="security-principles-context">A design lens for data privacy, integrity and dependable access.</p>
        </div>
      </div>
    </section>
  );
}
