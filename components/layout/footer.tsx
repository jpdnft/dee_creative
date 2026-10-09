import { navigation, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <a className="wordmark" href="/">dee creative<span>DESIGN + BUILD · PORTLAND, OREGON</span></a>
        <nav aria-label="Footer navigation">{navigation.map(item => <a key={item.href} href={item.href}>{item.label}</a>)}<a href="/start-a-project">Start a Project</a><a href={site.phoneHref}>{site.phone}</a><a href="/privacy">Privacy</a></nav>
      </div>
      <div className="footer-bottom"><p>© {new Date().getFullYear()} {site.legalName}</p><p>Oregon Residential General Contractor · CCB #{site.ccb}</p></div>
    </footer>
  );
}
