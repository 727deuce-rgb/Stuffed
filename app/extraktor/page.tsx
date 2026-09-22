"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowLeft, BatteryCharging, Pickaxe, ShieldCheck, Sparkles, Zap } from "lucide-react";

const MAX_SUPPLY = 50_000_000_000;
const upgrades = [
  { name: "Survey Drone", cost: 250, multiplier: 1.25, description: "Maps a small resource zone." },
  { name: "Deep Core Rig", cost: 900, multiplier: 1.8, description: "Reaches deeper simulated deposits." },
  { name: "Autonomous Fleet", cost: 2_500, multiplier: 3.2, description: "Runs several simulated extractors." },
];

export default function ExtraktorPage() {
  const [credits, setCredits] = useState(1_000);
  const [speed, setSpeed] = useState(1);
  const [notice, setNotice] = useState("Simulation ready");

  const output = useMemo(() => Math.round(speed * 12), [speed]);
  const buy = (cost: number, multiplier: number, name: string) => {
    if (credits < cost) {
      setNotice("Not enough in-app credits. Credits have no cash value in this simulation.");
      return;
    }
    setCredits((value) => value - cost);
    setSpeed((value) => value * multiplier);
    setNotice(`${name} activated in the simulation.`);
  };

  return <main className="extraktor-page">
    <nav className="nav shell"><Link className="brand" href="/"><span className="brand-mark">O</span><span>Omni<span className="brand-muted">Ecosystem</span></span></Link><div className="extraktor-nav"><Link href="/">OmniHub</Link><Link href="/lab">Design Lab</Link><Link className="button button-small" href="/start">Workspace</Link></div></nav>
    <section className="extraktor-hero shell"><div><span className="eyebrow">OMNIEXTRAKTOR · RESOURCE SIMULATION</span><h1>Explore deeper.<br /><em>Build smarter.</em></h1><p className="lead">A game-like resource-planning experience where users model surveys, extraction rates, energy, and environmental tradeoffs. No real mining claims. No commodity ownership. No cash-out.</p><div className="extraktor-badges"><span><ShieldCheck size={14} /> Educational sandbox</span><span><BatteryCharging size={14} /> Energy-aware model</span><span><Pickaxe size={14} /> Virtual resources only</span></div></div><div className="supply-panel"><span className="eyebrow">PROPOSED OMNICOIN SUPPLY</span><strong>50,000,000,000</strong><small>Fixed design target · not an offer or investment</small></div></section>
    <section className="extractor-grid shell"><div className="mine-panel"><div className="panel-top"><div><span className="eyebrow">ACTIVE ZONE</span><h2>Redstone Basin</h2></div><span className="live-pill"><i /> LIVE SIM</span></div><div className="mine-visual"><div className="mine-core"><Pickaxe size={35} /><strong>{output}</strong><small>units / minute</small></div><span className="ore ore-one">Cu</span><span className="ore ore-two">Fe</span><span className="ore ore-three">Li</span><span className="ore ore-four">Au</span></div><div className="mine-stats"><div><span>Energy draw</span><strong>{Math.round(speed * 7)} kWh</strong></div><div><span>Virtual yield</span><strong>{(output * 0.8).toFixed(1)} u</strong></div><div><span>Zone health</span><strong>{Math.max(55, 100 - Math.round(speed * 2))}%</strong></div></div><p className="simulation-note"><Sparkles size={14} /> Every output on this page is fictional simulation data. It cannot be redeemed, sold, withdrawn, or represented as a mineral reserve.</p></div><aside className="upgrade-panel"><div className="panel-top"><div><span className="eyebrow">UPGRADE BAY</span><h2>Faster extractors</h2></div><Zap size={20} /></div><div className="credit-balance"><span>Simulation credits</span><strong>{credits.toLocaleString()}</strong><small>Earned through play · no monetary value</small></div><div className="upgrade-list">{upgrades.map((upgrade) => <button className="upgrade" key={upgrade.name} onClick={() => buy(upgrade.cost, upgrade.multiplier, upgrade.name)}><span className="upgrade-icon"><Zap size={15} /></span><span><strong>{upgrade.name}</strong><small>{upgrade.description}</small></span><b>{upgrade.cost.toLocaleString()} cr</b></button>)}</div><p className="upgrade-notice">{notice}</p></aside></section>
    <section className="extraktor-footer shell"><div><span className="eyebrow">IMPORTANT BOUNDARY</span><h2>Omni does not currently sell mining equipment, commodities, tokens, or financial products.</h2></div><Link className="text-link" href="/terms">Read product boundaries →</Link></section>
  </main>;
}
