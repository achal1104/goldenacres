import { Link } from 'react-router-dom';
import { Sec, Table, Timeline, Boxes } from '../components/Blocks';

const Cta = ({ to, label }) => <div style={{ marginTop: 20 }}><Link className="btn" to={to}>{label}</Link></div>;

export function RewardDetail() {
  return (
    <>
      <Sec eyebrow="The process" title="From payment to" gold="your first gold reward">
        <Timeline items={[
          ['Complete the payment', 'Pay ₹2,00,000 and purchase 1 Guntha of land.'],
          ['Documentation begins', 'Goldenacres initiates the land documentation and sale deed process.'],
          ['Sale deed scheduled', 'The sale deed is scheduled to be completed within 14 days, subject to title verification, documentation and registration requirements.'],
          ['Become eligible for gold', 'You become eligible for 2.5 grams of gold every month.'],
          ['Six consecutive months', 'The bonus continues for six consecutive months, according to the programme terms.'],
        ]} />
      </Sec>
      <Sec cls="beige" eyebrow="Reward schedule" title="Your gold bonus," gold="month by month">
        <Table head={['Month', 'Gold bonus']} rows={[1, 2, 3, 4, 5, 6].map(m => ['Month ' + m, '2.5 grams'])} total={['Total', '15 grams']} />
        <p className="note" style={{ color: 'var(--mut)' }}>2.5 grams × 6 months = 15 grams, subject to programme terms.</p>
      </Sec>
      <Sec eyebrow="Good to know" title="Terms &" gold="delivery">
        <Boxes items={[
          ['Eligibility', 'Reward eligibility follows the purchase payment and the documentation process, as defined in the official programme terms.'],
          ['Delivery schedule', 'To be confirmed by Goldenacres in the official programme terms.'],
          ['Gold purity and form', 'The programme describes the bonus as pure gold. Delivery form and fulfilment details: to be confirmed.'],
          ['Referral rewards', 'Each successful referral adds 1 gram of gold per month for six months. See the Referral Programme page.'],
        ]} />
        <Cta to="/contact" label="Request programme terms" />
      </Sec>
    </>
  );
}

export function ReferralDetail() {
  const rows = [0, 1, 2, 3, 5, 10].map(n => [n, 2.5 + n + ' g', (2.5 + n) * 6 + ' g']);
  const ex = [['Own purchase bonus', '2.5 g', 'per month'], ['Referral bonus', '3 g', 'per month'], ['Total monthly gold', '5.5 g', 'per month'], ['Gold in six months', '33 g', '15 g personal + 18 g referral']];
  return (
    <>
      <Sec eyebrow="Step by step" title="How a referral" gold="works">
        <Timeline items={[
          ['You purchase land', 'Customer A purchases land for ₹2,00,000.'],
          ['You receive a Referral ID', 'Every customer receives a unique Referral ID.'],
          ['You share it', 'Share your ID with friends, family members, business contacts and other potential land buyers.'],
          ['Your referral purchases', 'Customer B successfully purchases land using Customer A’s Referral ID.'],
          ['You earn gold', 'Customer A becomes eligible for an additional 1 gram of gold every month for six months for that successful referral. The same applies to every additional successful referral.'],
        ]} />
      </Sec>
      <Sec cls="beige" eyebrow="Example" title="Three referrals," gold="33 grams">
        <div className="stats">
          {ex.map(x => <div className="stat" key={x[0]}><small>{x[0].toUpperCase()}</small><b>{x[1]}</b><span style={{ fontSize: 13 }}>{x[2]}</span></div>)}
        </div>
        <p className="note" style={{ color: 'var(--mut)' }}>Assuming all rewards run concurrently for six months. Illustrative only; subject to programme terms.</p>
        <Table head={['Successful referrals', 'Monthly gold', 'Gold for 6 months']} rows={rows} />
      </Sec>
      <Sec eyebrow="Referral terms" title="What to" gold="know">
        <Boxes items={[
          ['Successful referral', 'A referral counts when the person successfully purchases land using your Referral ID.'],
          ['Your Referral ID', 'Unique to every customer. Share it with people you know.'],
          ['Limits and tracking', 'Any limits, tracking and payout timing: to be confirmed in the official programme terms.'],
          ['Reward period', '1 gram per month for six months, for each successful referral.'],
        ]} />
        <Cta to="/contact" label="Ask about the referral programme" />
      </Sec>
    </>
  );
}

export function LandDetail() {
  return (
    <>
      <Sec eyebrow="Ownership process" title="From purchase to" gold="registration">
        <Timeline items={[
          ['Purchase 1 Guntha', 'Complete the payment of ₹2,00,000 for 1 Guntha of land.'],
          ['Documentation', 'Goldenacres initiates the land documentation and sale deed process.'],
          ['Title verification', 'Title verification is completed before registration.'],
          ['Sale deed registration', 'Scheduled within 14 days (2 weeks) of payment, subject to title verification, documentation and registration requirements.'],
          ['Gold reward eligibility', 'You become eligible for 2.5 grams of gold every month for six months, per programme terms.'],
        ]} />
      </Sec>
      <Sec cls="beige" eyebrow="Summary" title="Land offer" gold="at a glance">
        <Table head={['Item', 'Detail']} rows={[['Land allocation', '1 Guntha'], ['Land price', '₹2,00,000'], ['Sale deed', 'Targeted within 14 days of payment'], ['Gold bonus', '2.5 g per month for 6 months'], ['Taxes and charges', 'To be confirmed'], ['Possession', 'To be confirmed']]} />
      </Sec>
      <Sec eyebrow="Before you decide" title="Documents &" gold="location">
        <Boxes items={[
          ['Measurement guide', 'A Guntha is commonly about 1,089 sq. ft. Please confirm the exact area in the project documents.'],
          ['Project location and map', 'Map and location details will be added once verified by Goldenacres.'],
          ['Survey number and plot details', 'To be provided by Goldenacres with the project documents.'],
          ['Ownership documents', 'Title documents, sale deed and related paperwork: to be provided by Goldenacres.'],
        ]} />
        <Cta to="/contact" label="Request project details" />
      </Sec>
    </>
  );
}

export function JourneyFlow() {
  return (
    <Sec cls="beige" eyebrow="Programme journey" title="How it all" gold="fits together">
      <Boxes items={[
        ['Customer · ₹2,00,000', 'Purchases 1 Guntha of land.'],
        ['Goldenacres', 'Land documentation and sale deed process.'],
        ['Customer benefit · 2.5 g / month', 'Gold bonus for 6 months.'],
        ['Referral programme · 1 g / month', 'For every successful referral, for 6 months. Customers share their unique Referral ID.'],
      ]} />
    </Sec>
  );
}

export function ContactInfo() {
  return (
    <>
      <Sec eyebrow="Reach us" title="Contact" gold="details">
        <Boxes items={[['Phone / WhatsApp', 'To be added'], ['Email', 'To be added'], ['Office address', 'To be added'], ['Working hours', 'To be added']]} />
      </Sec>
      <Sec cls="beige" eyebrow="After you enquire" title="What happens" gold="next">
        <Timeline items={[
          ['We get in touch', 'Our team contacts you by your preferred method.'],
          ['Project walkthrough', 'We explain the project, ownership documentation and the gold reward programme.'],
          ['You decide', 'Review the details and programme terms before making any decision.'],
        ]} />
      </Sec>
    </>
  );
}
