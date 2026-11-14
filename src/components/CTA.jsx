// import { Link } from 'react-router-dom';
// import Reveal from './Reveal';
// export default function CTA() {
//   return (
//     <section className="dark"><div className="wrap" style={{ textAlign: 'center' }}><Reveal>
//       <div className="eyebrow" style={{ justifyContent: 'center' }}>Get started</div>
//       <h2>Your land ownership journey <span className="gold">starts here.</span></h2>
//       <p style={{ fontWeight: 300, maxWidth: 560, margin: '0 auto 30px' }}>Connect with Goldenacres to explore the project, understand ownership documentation and learn about the gold reward programme.</p>
//       <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
//         <Link className="btn" to="/contact">Schedule a consultation</Link>
//         <Link className="btn ghost" to="/about">About Goldenacres</Link>
//       </div>
//     </Reveal></div></section>
//   );
// }

import { Link } from 'react-router-dom';
import Reveal from './Reveal';
export default function CTA() {
  return (
    <section className="dark"><div className="wrap" style={{ textAlign: 'center' }}><Reveal>
      <div className="eyebrow" style={{ justifyContent: 'center' }}>Get started</div>
      <h2>Your land ownership journey <span className="gold">starts here.</span></h2>
      <p style={{ fontWeight: 300, maxWidth: 560, margin: '0 auto 30px' }}>Connect with Goldenacres to explore the project, understand ownership documentation and learn about the gold reward programme.</p>
      <div className="cta-btns">
        <Link className="btn" to="/contact">Schedule a consultation</Link>
        <Link className="btn ghost" to="/about">About Goldenacres</Link>
      </div>
    </Reveal></div></section>
  );
}