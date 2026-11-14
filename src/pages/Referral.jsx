// import { useState } from 'react';
// import Reveal from '../components/Reveal';
// import { ReferralDetail } from './Details';

// export function ReferralSection() {
//   const [n, setN] = useState(3);
//   const monthly = 2.5 + n;
//   return (
//     <>
//       <section>
//         <div className="wrap">
//           <Reveal>
//             <div className="eyebrow">Referral programme</div>
//             <h2>Share the opportunity.<br /><span className="gold">Earn more gold.</span></h2>
//             <p style={{ maxWidth: 640, fontWeight: 300 }}>Refer friends, family and business associates who successfully complete an eligible land purchase and earn additional gold rewards.</p>
//           </Reveal>
//           <div className="stats" style={{ gridTemplateColumns: 'repeat(3,1fr)' }}>
//             {[['Your successful referral', '1 person'], ['Additional gold reward', '1 g / month'], ['Reward period', '6 months']].map(s => (
//               <div className="stat" key={s[0]}><small>{s[0].toUpperCase()}</small><b>{s[1]}</b></div>
//             ))}
//           </div>
//           <div className="flow"><span>You</span><em>→</em><span>Share referral ID</span><em>→</em><span>Friend purchases land</span><em>→</em><span>You earn gold rewards</span></div>
//           <div className="calc">
//             <div>
//               <label style={{ color: 'var(--mut)' }}>Successful referrals</label>
//               <div className="serif" style={{ fontSize: 56 }}>{n}</div>
//               <input type="range" min="0" max="10" value={n} onChange={e => setN(+e.target.value)} aria-label="Number of successful referrals" />
//               <p style={{ fontSize: 13, color: 'var(--mut)' }}>Illustrative calculation only. Actual rewards are subject to programme eligibility, timing and terms.</p>
//             </div>
//             <div className="res">
//               <div className="row"><span>Personal monthly gold</span><b>2.5 g</b></div>
//               <div className="row"><span>Referral monthly gold</span><b>{n} g</b></div>
//               <div className="row"><span>Total monthly gold</span><b>{monthly} g</b></div>
//               <div style={{ marginTop: 20, fontSize: 12, letterSpacing: '.3em', color: 'var(--ch)' }}>SIX-MONTH GOLD</div>
//               <div className="big gold">{monthly * 6} g</div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default function Referral() {
//   return <main className="pg"><ReferralSection /><ReferralDetail /></main>;
// }

import { useState } from 'react';
import Reveal from '../components/Reveal';
import { ReferralDetail } from './Details';

export function ReferralSection() {
  const [n, setN] = useState(3);
  const monthly = 2.5 + n;
  return (
    <>
      <section>
        <div className="wrap">
          <Reveal>
            <div className="eyebrow">Referral programme</div>
            <h2>Share the opportunity.<br /><span className="gold">Earn more gold.</span></h2>
            <p style={{ maxWidth: 640, fontWeight: 300 }}>Refer friends, family and business associates who successfully complete an eligible land purchase and earn additional gold rewards.</p>
          </Reveal>
          <div className="stats stats3">
            {[['Your successful referral', '1 person'], ['Additional gold reward', '1 g / month'], ['Reward period', '6 months']].map(s => (
              <div className="stat" key={s[0]}><small>{s[0].toUpperCase()}</small><b>{s[1]}</b></div>
            ))}
          </div>
          <div className="flow"><span>You</span><em>→</em><span>Share referral ID</span><em>→</em><span>Friend purchases land</span><em>→</em><span>You earn gold rewards</span></div>
          <div className="calc">
            <div>
              <label style={{ color: 'var(--mut)' }}>Successful referrals</label>
              <div className="serif" style={{ fontSize: 56 }}>{n}</div>
              <input type="range" min="0" max="10" value={n} onChange={e => setN(+e.target.value)} aria-label="Number of successful referrals" />
              <p style={{ fontSize: 13, color: 'var(--mut)' }}>Illustrative calculation only. Actual rewards are subject to programme eligibility, timing and terms.</p>
            </div>
            <div className="res">
              <div className="row"><span>Personal monthly gold</span><b>2.5 g</b></div>
              <div className="row"><span>Referral monthly gold</span><b>{n} g</b></div>
              <div className="row"><span>Total monthly gold</span><b>{monthly} g</b></div>
              <div style={{ marginTop: 20, fontSize: 12, letterSpacing: '.3em', color: 'var(--ch)' }}>SIX-MONTH GOLD</div>
              <div className="big gold">{monthly * 6} g</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default function Referral() {
  return <main className="pg"><ReferralSection /><ReferralDetail /></main>;
}