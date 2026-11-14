import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
export default function Counter({ to, prefix = '' }) {
  const ref = useRef(null);
  const seen = useInView(ref, { once: true });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!seen) return;
    let start = null, id;
    const tick = t => { start ??= t; const p = Math.min((t - start) / 1400, 1); setN(+(to * p).toFixed(1)); if (p < 1) id = requestAnimationFrame(tick); };
    id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [seen, to]);
  return <span ref={ref}>{prefix}{to > 1000 ? Math.round(n).toLocaleString('en-IN') : n}</span>;
}
