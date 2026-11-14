import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV } from '../data';

export default function Navbar() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const f = () => setSolid(window.scrollY > 40);
    f(); window.addEventListener('scroll', f, { passive: true });
    return () => window.removeEventListener('scroll', f);
  }, []);
  return (
    <nav className={solid ? 'solid' : ''}>
      <div className="wrap">
        <Link className="logo" to="/">GOLDENACRES</Link>
        <div className={'links ' + (open ? 'open' : '')} onClick={() => setOpen(false)}>
          {NAV.map(([label, to]) => (
            <NavLink key={to} to={to} end={to === '/'} className={({ isActive }) => (isActive ? 'act' : '')}>{label}</NavLink>
          ))}
        </div>
        <Link className="btn nbtn" to="/contact" style={{ padding: '13px 26px' }}>Explore Opportunity</Link>
        <button className="burger" aria-label="Menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>
    </nav>
  );
}
