// // Polished 3D gold ingots: bevelled top, engraved stamp, moving shine, sparkles.
// const TOP = 'M32 0 H228 L260 58 H0 Z';
// const FRONT = 'M0 58 H260 L248 132 H12 Z';

// function Bar({ id, x, y, s, delay = 0, shadow = true }) {
//   return (
//     <g transform={`translate(${x} ${y}) scale(${s})`}>
//       {shadow && <ellipse cx="130" cy="138" rx="150" ry="15" fill="#4a3a0c" opacity=".3" filter="url(#blur)" />}
//       <clipPath id={`c${id}`}><path d={TOP} /><path d={FRONT} /></clipPath>
//       <path d={FRONT} fill="url(#front)" />
//       <path d="M0 58 H260 L257 76 H3 Z" fill="#fff3bf" opacity=".28" />
//       <path d="M12 132 H248 L249 138 H11 Z" fill="#6b4e12" opacity=".55" />
//       <path d={TOP} fill="url(#top)" />
//       <path d="M58 11 H202 L226 48 H34 Z" fill="url(#panel)" />
//       <path d="M58 11 H202" stroke="#8d6a1a" strokeWidth="2" opacity=".55" />
//       <path d="M34 48 H226" stroke="#fff6cc" strokeWidth="1.6" opacity=".85" />
//       <path d="M0 58 H260" stroke="#fff6cc" strokeWidth="1.8" opacity=".9" />
//       <path d="M32 0 H228" stroke="#fffbe0" strokeWidth="1.4" opacity=".8" />
//       <g textAnchor="middle" fontFamily="Cormorant Garamond, serif" fontWeight="600">
//         <text x="130" y="86.2" fontSize="10" letterSpacing="5" fill="#fff0b0" opacity=".8">GOLDENACRES</text>
//         <text x="130" y="85" fontSize="10" letterSpacing="5" fill="#6d5214">GOLDENACRES</text>
//         <text x="130" y="118.4" fontSize="36" letterSpacing="9" fill="#fff0b0" opacity=".8">999.9</text>
//         <text x="130" y="117" fontSize="36" letterSpacing="9" fill="#6d5214">999.9</text>
//       </g>
//       <g clipPath={`url(#c${id})`}>
//         <rect className="shine" x="0" y="-10" width="70" height="160" fill="url(#shineG)" style={{ animationDelay: `${delay}s` }} />
//       </g>
//     </g>
//   );
// }

// function Spark({ x, y, s, d }) {
//   return (
//     <g transform={`translate(${x} ${y}) scale(${s})`}>
//       <path className="spark" style={{ animationDelay: `${d}s` }} fill="#fff8d6" d="M0-14 C2-4 4-2 14 0 C4 2 2 4 0 14 C-2 4 -4 2 -14 0 C-4-2 -2-4 0-14Z" />
//     </g>
//   );
// }

// export default function GoldBars() {
//   return (
//     <div className="bars">
//       <svg viewBox="0 110 520 350" role="img" aria-label="Stacked gold bars">
//         <defs>
//           <linearGradient id="top" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#fff0a8" /><stop offset=".55" stopColor="#f0cd65" /><stop offset="1" stopColor="#d4a53a" /></linearGradient>
//           <linearGradient id="panel" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#d7ab3d" /><stop offset="1" stopColor="#f6dd8a" /></linearGradient>
//           <linearGradient id="front" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#f3d878" /><stop offset=".4" stopColor="#d9ac38" /><stop offset=".8" stopColor="#b5861f" /><stop offset="1" stopColor="#8a6416" /></linearGradient>
//           <linearGradient id="shineG" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#fff" stopOpacity="0" /><stop offset=".5" stopColor="#fff" stopOpacity=".6" /><stop offset="1" stopColor="#fff" stopOpacity="0" /></linearGradient>
//           <radialGradient id="glow"><stop offset="0" stopColor="#f2cf6a" stopOpacity=".55" /><stop offset="1" stopColor="#f2cf6a" stopOpacity="0" /></radialGradient>
//           <filter id="blur" x="-20%" y="-100%" width="140%" height="300%"><feGaussianBlur stdDeviation="6" /></filter>
//         </defs>
//         <ellipse cx="260" cy="320" rx="270" ry="170" fill="url(#glow)" />
//         <Bar id={1} x={30} y={300} s={0.8} delay={0} />
//         <Bar id={2} x={282} y={300} s={0.8} delay={1.2} />
//         <Bar id={3} x={156} y={214} s={0.8} delay={2.4} shadow={false} />
//         <Bar id={4} x={182} y={160} s={0.6} delay={3.4} shadow={false} />
//         <Spark x={44} y={310} s={1.1} d={0} />
//         <Spark x={478} y={320} s={0.9} d={1} />
//         <Spark x={338} y={226} s={0.8} d={2} />
//         <Spark x={202} y={170} s={0.7} d={0.6} />
//         <Spark x={330} y={160} s={1} d={1.7} />
//       </svg>
//     </div>
//   );
// }

// Polished 3D gold ingots: bevelled top, engraved stamp, moving shine, sparkles.
const TOP = 'M32 0 H228 L260 58 H0 Z';
const FRONT = 'M0 58 H260 L248 132 H12 Z';

function Bar({ id, x, y, s, delay = 0, shadow = true }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      {shadow && <ellipse cx="130" cy="138" rx="150" ry="15" fill="#4a3a0c" opacity=".3" filter="url(#blur)" />}
      <clipPath id={`c${id}`}><path d={TOP} /><path d={FRONT} /></clipPath>
      <path d={FRONT} fill="url(#front)" />
      <path d="M0 58 H260 L257 76 H3 Z" fill="#fff3bf" opacity=".28" />
      <path d="M12 132 H248 L249 138 H11 Z" fill="#6b4e12" opacity=".55" />
      <path d={TOP} fill="url(#top)" />
      <path d="M58 11 H202 L226 48 H34 Z" fill="url(#panel)" />
      <path d="M58 11 H202" stroke="#8d6a1a" strokeWidth="2" opacity=".55" />
      <path d="M34 48 H226" stroke="#fff6cc" strokeWidth="1.6" opacity=".85" />
      <path d="M0 58 H260" stroke="#fff6cc" strokeWidth="1.8" opacity=".9" />
      <path d="M32 0 H228" stroke="#fffbe0" strokeWidth="1.4" opacity=".8" />
      <g textAnchor="middle" fontFamily="Cormorant Garamond, serif" fontWeight="600">
        <text x="130" y="86.2" fontSize="10" letterSpacing="5" fill="#fff0b0" opacity=".8">GOLDENACRES</text>
        <text x="130" y="85" fontSize="10" letterSpacing="5" fill="#6d5214">GOLDENACRES</text>
        <text x="130" y="118.4" fontSize="36" letterSpacing="9" fill="#fff0b0" opacity=".8">999.9</text>
        <text x="130" y="117" fontSize="36" letterSpacing="9" fill="#6d5214">999.9</text>
      </g>
      <g clipPath={`url(#c${id})`}>
        <rect className="shine" x="0" y="-10" width="70" height="160" fill="url(#shineG)" style={{ animationDelay: `${delay}s` }} />
      </g>
    </g>
  );
}

function Spark({ x, y, s, d }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <path className="spark" style={{ animationDelay: `${d}s` }} fill="#fff8d6" d="M0-14 C2-4 4-2 14 0 C4 2 2 4 0 14 C-2 4 -4 2 -14 0 C-4-2 -2-4 0-14Z" />
    </g>
  );
}

export default function GoldBars() {
  return (
    <div className="bars">
      <svg viewBox="0 110 520 350" role="img" aria-label="Stacked gold bars">
        <defs>
          <linearGradient id="top" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#fff0a8" /><stop offset=".55" stopColor="#f0cd65" /><stop offset="1" stopColor="#d4a53a" /></linearGradient>
          <linearGradient id="panel" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#d7ab3d" /><stop offset="1" stopColor="#f6dd8a" /></linearGradient>
          <linearGradient id="front" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#f3d878" /><stop offset=".4" stopColor="#d9ac38" /><stop offset=".8" stopColor="#b5861f" /><stop offset="1" stopColor="#8a6416" /></linearGradient>
          <linearGradient id="shineG" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#fff" stopOpacity="0" /><stop offset=".5" stopColor="#fff" stopOpacity=".6" /><stop offset="1" stopColor="#fff" stopOpacity="0" /></linearGradient>
          <radialGradient id="glow"><stop offset="0" stopColor="#f2cf6a" stopOpacity=".55" /><stop offset="1" stopColor="#f2cf6a" stopOpacity="0" /></radialGradient>
          <filter id="blur" x="-20%" y="-100%" width="140%" height="300%"><feGaussianBlur stdDeviation="6" /></filter>
        </defs>
        <ellipse cx="260" cy="320" rx="270" ry="170" fill="url(#glow)" />
        <Bar id={1} x={30} y={300} s={0.8} delay={0} />
        <Bar id={2} x={282} y={300} s={0.8} delay={1.2} />
        <Bar id={3} x={156} y={214} s={0.8} delay={2.4} shadow={false} />
        <Bar id={4} x={182} y={160} s={0.6} delay={3.4} shadow={false} />
        <Spark x={44} y={310} s={1.1} d={0} />
        <Spark x={478} y={320} s={0.9} d={1} />
        <Spark x={338} y={226} s={0.8} d={2} />
        <Spark x={202} y={170} s={0.7} d={0.6} />
        <Spark x={330} y={160} s={1} d={1.7} />
      </svg>
    </div>
  );
}