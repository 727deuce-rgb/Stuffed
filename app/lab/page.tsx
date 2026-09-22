"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { AlertTriangle, ArrowLeft, BarChart3, Flame, Gauge, Sparkles, Users } from "lucide-react";

export default function LabPage() {
  const [supply, setSupply] = useState(2_000_000_000);
  const [treasury, setTreasury] = useState(22);
  const [team, setTeam] = useState(12);
  const [burn, setBurn] = useState(1.5);
  const [holders, setHolders] = useState(1000);

  const circulating = 100 - treasury - team;
  const concentration = Math.max(18, Math.round((treasury + team) * 0.82));
  const runway = Math.max(4, Math.round((treasury / Math.max(burn, 0.2)) * 2));
  const score = Math.max(34, Math.min(96, 96 - concentration * 0.35 + Math.min(holders / 100, 12)));
  const formattedSupply = useMemo(() => new Intl.NumberFormat("en-US").format(supply), [supply]);

  return <main className="lab-page"><nav className="nav shell"><Link className="brand" href="/"><span className="brand-mark">S</span><span>Stuffed</span></Link><div className="lab-nav"><span><span className="live-dot" />Simulation mode</span><Link href="/dashboard">Workspace</Link><Link className="button button-small" href="/">Exit lab</Link></div></nav>
    <section className="lab-header shell"><div><span className="eyebrow">TOKENOMICS LAB · BASE SEPOLIA</span><h1>Build it.<br /><em>Break it.</em></h1><p className="lead">Explore the consequences of your token design before a wallet ever signs a transaction.</p></div><div className="lab-title-card"><Sparkles size={18} /><span>Project: Community Garden</span><small>Draft · no real value</small></div></section>
    <section className="lab-grid shell"><aside className="controls-card"><div className="card-heading"><div><span className="eyebrow">CONTROL ROOM</span><h2>Change the model</h2></div><Gauge size={22} /></div><Control label="Maximum supply" value={formattedSupply} min="1000000" max="10000000000" step="1000000" numeric={supply} onChange={setSupply} /><Control label="Treasury allocation" value={`${treasury}%`} min="5" max="50" step="1" numeric={treasury} onChange={setTreasury} /><Control label="Team allocation" value={`${team}%`} min="0" max="30" step="1" numeric={team} onChange={setTeam} /><Control label="Modeled monthly burn" value={`${burn}%`} min="0.2" max="10" step="0.1" numeric={burn} onChange={setBurn} /><Control label="Projected holders" value={holders.toLocaleString()} min="100" max="100000" step="100" numeric={holders} onChange={setHolders} /><button className="button lab-button">Save scenario <ArrowLeft size={15} className="flip" /></button></aside>
      <div className="lab-results"><div className="result-banner"><div><span className="eyebrow">LIVE MODEL OUTPUT</span><h2>Your design is <strong>{score >= 70 ? "promising" : "fragile"}.</strong></h2><p>This is an educational simulation, not a forecast or investment recommendation.</p></div><div className="score-ring"><strong>{Math.round(score)}</strong><span>design score</span></div></div><div className="metrics"><Metric icon={<BarChart3 />} label="Circulating at launch" value={`${circulating}%`} note={`${new Intl.NumberFormat("en-US", { notation: "compact" }).format(supply * circulating / 100)} tokens`} /><Metric icon={<Users />} label="Treasury runway" value={`${runway} mo`} note="at modeled burn rate" /><Metric icon={<Flame />} label="Monthly consumed" value={`${burn}%`} note="of treasury supply" /></div><div className="distribution-card"><div className="card-heading"><div><span className="eyebrow">SUPPLY MAP</span><h2>Where the tokens go</h2></div><span className="mono-label">{formattedSupply} total</span></div><div className="supply-bar"><span className="community" style={{ width: `${circulating}%` }} /><span className="treasury" style={{ width: `${treasury}%` }} /><span className="team" style={{ width: `${team}%` }} /></div><div className="legend"><span><i className="community" />Community {circulating}%</span><span><i className="treasury" />Treasury {treasury}%</span><span><i className="team" />Team {team}%</span></div></div><div className="alerts"><Alert title={concentration > 28 ? "Concentration needs attention" : "Allocation looks balanced"} text={`Treasury and team wallets control ${concentration}% of the modeled supply.`} severity={concentration > 28 ? "warn" : "good"} /><Alert title={runway < 12 ? "Burn rate may be aggressive" : "Burn model is reviewable"} text={`At ${burn}% monthly consumption, the modeled treasury lasts approximately ${runway} months.`} severity={runway < 12 ? "warn" : "good"} /></div></div></section>
    <section className="lab-footer shell"><span>Stuffed helps you find problems before your community does.</span><Link className="text-link" href="/">Generate the white paper →</Link></section>
  </main>;
}

function Control({ label, value, min, max, step, numeric, onChange }: { label: string; value: string; min: string; max: string; step: string; numeric: number; onChange: (value: number) => void }) { return <label className="control"><div><span>{label}</span><strong>{value}</strong></div><input type="range" min={min} max={max} step={step} value={numeric} onChange={(event) => onChange(Number(event.target.value))} /></label>; }
function Metric({ icon, label, value, note }: { icon: React.ReactNode; label: string; value: string; note: string }) { return <div className="metric"><div className="metric-icon">{icon}</div><span>{label}</span><strong>{value}</strong><small>{note}</small></div>; }
function Alert({ title, text, severity }: { title: string; text: string; severity: "warn" | "good" }) { return <div className={`alert ${severity}`}><span className="alert-mark">{severity === "warn" ? "!" : "✓"}</span><div><strong>{title}</strong><p>{text}</p></div></div>; }
