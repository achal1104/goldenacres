// Connect your existing backend: set VITE_API_URL in .env
export async function submitLead(data) {
  const url = import.meta.env.VITE_API_URL;
  if (!url) { await new Promise(r => setTimeout(r, 1000)); return { ok: true }; } // demo mode
  const res = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
  if (!res.ok) throw new Error('Request failed');
  return res.json().catch(() => ({ ok: true }));
}
