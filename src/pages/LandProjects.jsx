import { useState } from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import { LandDetail } from './Details';
import { GALLERY, DETAILS } from '../data';

export function Gallery() {
  const [open, setOpen] = useState(null);
  return (
    <section className="beige">
      <div className="wrap">
        <Reveal>
          <div className="eyebrow">Land projects</div>
          <h2>The land,<br /><span className="gold">as it truly is.</span></h2>
          <p style={{ fontSize: 14, color: 'var(--mut)' }}>Illustrative visuals – actual project photographs will replace these.</p>
        </Reveal>
        <div className="gal">
          {GALLERY.map(g => <div key={g[0]} style={{ '--bg': g[1] }} onClick={() => setOpen(g)}><span>{g[0]}</span></div>)}
        </div>
      </div>
      {open && <div className="lb" onClick={() => setOpen(null)} style={{ '--bg': open[1] }}><div><span>{open[0]} · tap to close</span></div></div>}
    </section>
  );
}

export default function LandProjects() {
  return (
    <main className="pg">
      <Gallery />
      <section><div className="wrap"><Reveal>
        <div className="eyebrow">Land ownership details</div>
        <h2>Verified information, <span className="gold">only</span></h2>
        <div className="det">{DETAILS.map(x => <div key={x[0]}><span>{x[0]}</span><em>{x[1]}</em></div>)}</div>
        <Link className="btn" to="/contact">Request project details</Link>
      </Reveal></div></section>
      <LandDetail />
    </main>
  );
}
