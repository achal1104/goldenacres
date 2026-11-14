import Reveal from './Reveal';
import { WHY } from '../data';
export default function Why() {
  return (
    <section><div className="wrap">
      <Reveal><div className="eyebrow">Why Goldenacres</div><h2>Clarity at <span className="gold">every step</span></h2></Reveal>
      <div className="feat">
        {WHY.map(([Icon, t], i) => <Reveal key={t} delay={i * 0.07}><div><Icon size={34} strokeWidth={1.2} color="#c9a24a" /><h3>{t}</h3></div></Reveal>)}
      </div>
    </div></section>
  );
}
