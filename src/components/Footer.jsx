import { Link } from 'react-router-dom';
import { NAV } from '../data';
export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="fg">
          <div>
            <Link className="logo" to="/">GOLDENACRES</Link>
            <p style={{ fontWeight: 300, opacity: 0.8, marginTop: 14, maxWidth: 340 }}>Premium land ownership with a defined monthly gold reward programme and structured referral benefits.</p>
          </div>
          <div><h4>EXPLORE</h4>{NAV.map(([l, to]) => <Link key={to} to={to}>{l}</Link>)}</div>
          <div><h4>CONTACT</h4><a>Phone: to be added</a><a>Email: to be added</a><a>Instagram · Facebook · YouTube</a><a>Privacy Policy</a><a>Terms &amp; Conditions</a><a>Disclaimer</a></div>
        </div>
        <div className="gl" />
        <p style={{ fontSize: 12, opacity: 0.6 }}>© 2026 Goldenacres. Reward eligibility, timing and fulfilment are subject to official programme terms. Calculations are illustrative.</p>
      </div>
    </footer>
  );
}
