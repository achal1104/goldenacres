import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import { JourneyFlow } from './Details';
import { GLANCE, VALUES, WHY } from '../data';

export default function About() {
  return (
    <main>
      <header className="ab"><div className="wrap"><Reveal>
        <div className="eyebrow">About Goldenacres</div>
        <h1>Land ownership,<br /><span className="gold">rewarded in gold.</span></h1>
        <p style={{ maxWidth: 620, fontWeight: 300, fontSize: 19, color: 'var(--mut)' }}>Goldenacres brings together premium land ownership, a monthly gold bonus and a structured referral programme in one transparent experience.</p>
      </Reveal></div></header>

      <section style={{ paddingTop: 30 }}><div className="wrap"><div className="two">
        <Reveal>
          <div className="eyebrow">Our concept</div>
          <h2 style={{ fontSize: 'clamp(30px,4vw,48px)' }}>A new way to own land</h2>
          <p>Goldenacres introduces an opportunity where customers can purchase land and receive additional gold benefits.</p>
          <p>Any eligible individual can purchase 1 Guntha of land for ₹2,00,000 and become eligible for gold rewards for the next six months, according to programme terms.</p>
          <p>Every customer also receives a unique Referral ID to share with friends, family and business contacts.</p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="glance"><h3>Programme at a glance</h3>
            {GLANCE.map(x => <div className="row" key={x[0]}><span style={{ opacity: 0.8 }}>{x[0]}</span><b style={{ textAlign: 'right' }}>{x[1]}</b></div>)}
          </div>
        </Reveal>
      </div></div></section>

      <section className="beige"><div className="wrap">
        <Reveal><div className="eyebrow">What we stand for</div><h2>Built on <span className="gold">clear principles</span></h2></Reveal>
        <div className="feat">
          {VALUES.map(([Icon, t, d], i) => (
            <Reveal key={t} delay={i * 0.1}><div><Icon size={34} strokeWidth={1.2} color="#c9a24a" /><h3>{t}</h3><p style={{ fontWeight: 300, color: 'var(--mut)', marginTop: 8 }}>{d}</p></div></Reveal>
          ))}
        </div>
      </div></section>

      <section><div className="wrap">
        <Reveal><div className="eyebrow">Why Goldenacres</div><h2>Clarity at <span className="gold">every step</span></h2></Reveal>
        <div className="feat">
          {WHY.map(([Icon, t], i) => <Reveal key={t} delay={i * 0.07}><div><Icon size={34} strokeWidth={1.2} color="#c9a24a" /><h3>{t}</h3></div></Reveal>)}
        </div>
      </div></section>

      <section className="beige"><div className="wrap"><Reveal>
        <div className="eyebrow">Customers</div><h2>Verified <span className="gold">feedback</span></h2>
        <div className="tst">
          {[1, 2, 3].map(i => <div key={i}><b className="serif" style={{ fontSize: 22 }}>Placeholder – Customer {i}</b><p style={{ marginTop: 10, fontSize: 14 }}>Genuine testimonial, name, location and photo (with permission) will appear here.</p></div>)}
        </div>
      </Reveal></div></section>

      <section><div className="wrap"><Reveal>
        <div className="eyebrow">Company details</div><h2>Verified information, <span className="gold">only</span></h2>
        <div className="det">
          {[['Registered name', 'To be added'], ['Registered office', 'To be added'], ['Registration / licence details', 'To be added'], ['Customer support', 'To be added']].map(x => <div key={x[0]}><span>{x[0]}</span><em>{x[1]}</em></div>)}
        </div>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <Link className="btn" to="/contact">Request project details</Link>
          <Link className="btn ghost" to="/">Back to home</Link>
        </div>
      </Reveal></div></section>
      <JourneyFlow />
    </main>
  );
}
