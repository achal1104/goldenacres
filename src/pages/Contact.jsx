import { useState } from 'react';
import Reveal from '../components/Reveal';
import { ContactInfo } from './Details';
import { submitLead } from '../api';

const empty = { name: '', mobile: '', email: '', city: '', pref: 'Phone call', msg: '' };

export default function Contact() {
  const [f, setF] = useState(empty);
  const [e, setE] = useState({});
  const [st, setSt] = useState('');
  const up = k => ev => setF({ ...f, [k]: ev.target.value });

  const submit = async ev => {
    ev.preventDefault();
    const x = {};
    if (f.name.trim().length < 2) x.name = 'Enter your full name';
    if (!/^[6-9]\d{9}$/.test(f.mobile)) x.mobile = 'Enter a valid 10-digit mobile number';
    if (!/^\S+@\S+\.\S+$/.test(f.email)) x.email = 'Enter a valid email';
    if (!f.city.trim()) x.city = 'Enter your city';
    setE(x);
    if (Object.keys(x).length) return;
    setSt('load');
    try { await submitLead(f); setSt('ok'); } catch { setSt('err'); }
  };

  const field = (k, label, type = 'text') => (
    <div className="f"><label>{label}</label><input type={type} value={f[k]} onChange={up(k)} /><span className="err">{e[k] || ''}</span></div>
  );

  return (
    <main className="pg">
      <section className="dark">
        <div className="wrap" style={{ maxWidth: 900 }}>
          <Reveal>
            <div className="eyebrow">Contact</div>
            <h2>Your land ownership journey <span className="gold">starts here.</span></h2>
            <p style={{ fontWeight: 300 }}>Connect with Goldenacres to explore the project, understand ownership documentation and learn about the gold reward programme.</p>
            {st === 'ok' ? (
              <div className="ok"><h3 className="serif" style={{ fontSize: 30 }}>Thank you.</h3><p>Our team will contact you shortly.</p></div>
            ) : (
              <form onSubmit={submit} noValidate>
                {field('name', 'Full name')}{field('mobile', 'Mobile number', 'tel')}{field('email', 'Email address', 'email')}{field('city', 'City')}
                <div className="f"><label>Preferred contact method</label>
                  <select value={f.pref} onChange={up('pref')}><option>Phone call</option><option>WhatsApp</option><option>Email</option></select>
                </div>
                <div className="full"><label>Message</label><textarea rows="3" value={f.msg} onChange={up('msg')} /></div>
                <div className="full">
                  <button className="btn" disabled={st === 'load'}>{st === 'load' ? 'Sending…' : 'Schedule a consultation'}</button>
                  {st === 'err' && <span className="err">Something went wrong. Please try again.</span>}
                </div>
              </form>
            )}
          </Reveal>
        </div>
      </section>
      <ContactInfo />
    </main>
  );
}
