import { useState } from 'react';
import Reveal from '../components/Reveal';
import CTA from '../components/CTA';
import { FAQ } from '../data';

export function FaqsSection() {
  const [open, setOpen] = useState(0);
  return (
    <>
      <section className="beige">
        <div className="wrap">
          <Reveal><div className="eyebrow">FAQs</div><h2>Your questions, <span className="gold">answered</span></h2></Reveal>
          <div className="faq">
            {FAQ.map((q, i) => (
              <div key={i} className={'q ' + (open === i ? 'open' : '')}>
                <button aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}>{q[0]}<span>+</span></button>
                <div className="ans"><p>{q[1]}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default function Faqs() {
  return <main className="pg"><FaqsSection /><CTA /></main>;
}
