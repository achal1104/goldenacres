import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import Counter from '../components/Counter';
import GoldBars from '../components/GoldBars';
import { STEPS, FAQ } from '../data';
import { ReferralSection } from './Referral';
import { GoldRewardsSection } from './GoldRewards';
import { Gallery } from './LandProjects';
import CTA from '../components/CTA';
import Why from '../components/Why';
import Testimonials from '../components/Testimonials';

function Hero() {
  return (
    <header className="hero">
      {[8, 22, 35, 52, 68, 81, 92].map((l, i) => <i key={i} className="dot" style={{ left: l + '%', top: 12 + i * 11 + '%', animationDelay: i * 0.6 + 's' }} />)}
      <div className="wrap hgrid">
        <div>
          <div className="eyebrow">A new way to own land</div>
          <h1>Own your land.<br /><span className="gold">Grow your wealth.</span><br />Earn gold.</h1>
          <div className="line" />
          <p className="sub" style={{ marginTop: 28 }}>Discover an exclusive land ownership opportunity with monthly gold rewards and additional benefits through successful referrals.</p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link className="btn" to="/contact">Explore the opportunity</Link>
            <Link className="btn ghost" to="/#how">How it works</Link>
          </div>
        </div>
        <GoldBars />
      </div>
      <div className="scroll" />
    </header>
  );
}

function Offer() {
  const stats = [['Land ownership', <Counter to={1} />, 'Guntha'], ['Land price', <Counter to={200000} prefix="₹" />, ''], ['Monthly gold bonus', <Counter to={2.5} />, 'grams'], ['Reward duration', <Counter to={6} />, 'months']];
  return (
    <section id="offer">
      <div className="wrap">
        <Reveal>
          <div className="eyebrow">The offer</div>
          <h2>More than land.<br /><span className="gold">A rewarding ownership experience.</span></h2>
        </Reveal>
        <Reveal>
          <div className="stats">
            {stats.map(s => (
              <div className="stat" key={s[0]}>
                <small>{s[0].toUpperCase()}</small><b>{s[1]}</b>
                <span style={{ fontSize: 13, letterSpacing: '.2em', textTransform: 'uppercase' }}>{s[2]}</span>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal>
          <div className="offer">
            <h3>Your own land.<br /><span className="gold">15 grams of gold rewards.</span></h3>
            <p style={{ fontWeight: 300 }}>Own 1 Guntha of land and become eligible for 2.5 grams of gold every month for six months, subject to programme terms.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function How() {
  const [a, setA] = useState(0);
  useEffect(() => { const t = setInterval(() => setA(x => (x + 1) % 4), 3200); return () => clearInterval(t); }, []);
  return (
    <section id="how" className="dark">
      <div className="wrap">
        <Reveal><div className="eyebrow">How it works</div><h2>Four steps to <span className="gold">ownership</span></h2></Reveal>
        <div className="steps">
          {STEPS.map((s, i) => (
            <Reveal key={i} delay={i * 0.12}>
              <div className={'step ' + (a === i ? 'on' : '')} onClick={() => setA(i)}>
                <i>0{i + 1}</i><h3>{s[0]}</h3><p>{s[1]}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function More({ to, label, cls = '' }) {
  return <div className={'more ' + cls}><div className="wrap"><Link className="btn ghost" to={to}>{label} →</Link></div></div>;
}

function FaqMini() {
  const [o, setO] = useState(0);
  return (
    <section className="beige"><div className="wrap">
      <Reveal><div className="eyebrow">FAQs</div><h2>Quick <span className="gold">answers</span></h2></Reveal>
      <div className="faq">
        {FAQ.slice(0, 5).map((q, i) => (
          <div key={i} className={'q ' + (o === i ? 'open' : '')}>
            <button aria-expanded={o === i} onClick={() => setO(o === i ? -1 : i)}>{q[0]}<span>+</span></button>
            <div className="ans"><p>{q[1]}</p></div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 30 }}><Link className="btn ghost" to="/faqs">View all FAQs →</Link></div>
    </div></section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Offer />
      <How />
      <ReferralSection />
      <More to="/referral-programme" label="Explore the referral programme" />
      <GoldRewardsSection />
      <More to="/gold-rewards" label="View all gold rewards" cls="dark" />
      <Gallery />
      <More to="/land-projects" label="See land projects & details" cls="beige" />
      <Why />
      <FaqMini />
      <Testimonials />
      <CTA />
    </>
  );
}
