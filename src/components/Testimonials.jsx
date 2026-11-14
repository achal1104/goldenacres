import Reveal from './Reveal';
export default function Testimonials() {
  return (
    <section><div className="wrap"><Reveal>
      <div className="eyebrow">Customers</div><h2>Verified <span className="gold">feedback</span></h2>
      <div className="tst">
        {[1, 2, 3].map(i => <div key={i}><b className="serif" style={{ fontSize: 22 }}>Placeholder – Customer {i}</b><p style={{ marginTop: 10, fontSize: 14 }}>Genuine testimonial, name, location and photo (with permission) will appear here.</p></div>)}
      </div>
    </Reveal></div></section>
  );
}
