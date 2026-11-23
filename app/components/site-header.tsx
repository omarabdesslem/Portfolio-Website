import Link from "next/link";

export function SiteHeader({ home = false }: { home?: boolean }) {
  const prefix = home ? "" : "/";
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header">
        <div className="page-container header-inner">
          <nav className="site-nav" aria-label="Main navigation">
            <a href={`${prefix}#intro`}>Intro</a>
            <a href={`${prefix}#work`}>Work</a>
            <a href={`${prefix}#research`}>Research</a>
            <Link href="/notes">Notes</Link>
            <a href={`${prefix}#about`}>About</a>
            <a href={`${prefix}#contact`}>Contact</a>
          </nav>
        </div>
      </header>
    </>
  );
}

export function SiteFooter() {
  return <footer className="site-footer page-container"><Link href="/" className="footer-name">Omar Abdesslem</Link><div><a href="https://github.com/omarabdesslem" target="_blank" rel="noopener noreferrer">GitHub</a><a href="https://www.linkedin.com/in/omarff/" target="_blank" rel="noopener noreferrer">LinkedIn</a><a href="#top">Back to top</a></div><p>© {new Date().getFullYear()} · Switzerland</p></footer>;
}
