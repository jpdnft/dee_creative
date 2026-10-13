"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { navigation } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const button = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setOpen(false); button.current?.focus(); }
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <header className="site-header">
      <a className="wordmark" href="/" aria-label="Dee Creative homepage">dee creative<span>ARCHITECTURAL INTERIORS<i className="brand-separator" aria-hidden="true"> · </i><b className="brand-capability">DESIGN + BUILD</b></span></a>
      <button ref={button} className="menu-toggle" aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen(!open)}>{open ? "Close" : "Menu"}</button>
      <nav id="primary-navigation" className={open ? "navigation is-open" : "navigation"} aria-label="Main navigation">
        {navigation.map(item => <a key={item.href} href={item.href} aria-current={pathname === item.href || pathname.startsWith(`${item.href}/`) ? "page" : undefined} onClick={() => setOpen(false)}>{item.label}</a>)}
        <a href="/start-a-project" className="header-cta" onClick={() => setOpen(false)}>Start a Project</a>
      </nav>
    </header>
  );
}
