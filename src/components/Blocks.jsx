import Reveal from './Reveal';

export function Sec({ cls = '', eyebrow, title, gold, children }) {
  return (
    <section className={cls}><div className="wrap">
      <Reveal><div className="eyebrow">{eyebrow}</div><h2>{title} <span className="gold">{gold}</span></h2></Reveal>
      {children}
    </div></section>
  );
}

export function Table({ head, rows, total }) {
  return (
    <div style={{ overflowX: 'auto' }}>
      <table className="tbl">
        <thead><tr>{head.map(h => <th key={h}>{h}</th>)}</tr></thead>
        <tbody>
          {rows.map((r, i) => <tr key={i}>{r.map((c, j) => <td key={j}>{c}</td>)}</tr>)}
          {total && <tr className="tot">{total.map((c, j) => <td key={j}>{c}</td>)}</tr>}
        </tbody>
      </table>
    </div>
  );
}

export function Timeline({ items }) {
  return (
    <div className="tl">
      {items.map((x, i) => <Reveal key={i} delay={i * 0.07}><div><b>{x[0]}</b><p>{x[1]}</p></div></Reveal>)}
    </div>
  );
}

export function Boxes({ items }) {
  return (
    <div className="cols">
      {items.map((x, i) => <div key={i}><Reveal delay={i * 0.08}><div className="box"><h3>{x[0]}</h3><p>{x[1]}</p></div></Reveal></div>)}
    </div>
  );
}
