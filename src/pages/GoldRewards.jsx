import Reveal from '../components/Reveal';
import { RewardDetail } from './Details';

export function GoldRewardsSection() {
  return (
    <>
      <section className="dark">
        <div className="wrap">
          <Reveal>
            <div className="eyebrow">Gold rewards</div>
            <h2>Six months.<br />Six rewards.<br /><span className="gold">15 grams of gold.</span></h2>
          </Reveal>
          <div className="months">
            {[1, 2, 3, 4, 5, 6].map(m => (
              <Reveal key={m} delay={m * 0.08}>
                <div className="mc"><small>MONTH 0{m}</small><b>2.5 g</b><span style={{ fontSize: 13, opacity: 0.7 }}>Gold reward</span></div>
              </Reveal>
            ))}
          </div>
          <p className="note">Reward eligibility, delivery schedule and fulfilment are governed by the official Goldenacres programme terms.</p>
        </div>
      </section>
    </>
  );
}

export default function GoldRewards() {
  return <main className="pg"><GoldRewardsSection /><RewardDetail /></main>;
}
