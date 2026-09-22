"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { BatteryCharging, BookOpen, ChevronRight, Clock3, Pickaxe, ShieldCheck, Sparkles, Zap } from "lucide-react";

const MAX_SUPPLY = 50_000_000_000;
const upgrades = [
  { name: "Survey Drone", cost: 250, multiplier: 1.25, level: "MK-I", description: "Maps a small resource zone.", color: "green" },
  { name: "Deep Core Rig", cost: 900, multiplier: 1.8, level: "MK-II", description: "Reaches deeper simulated deposits.", color: "blue" },
  { name: "Autonomous Fleet", cost: 2_500, multiplier: 3.2, level: "MK-III", description: "Runs several simulated extractors.", color: "gold" },
];

const clues = [
  { tag: "ARCHIVE 01", title: "The calendar anomaly", text: "A recovered observatory log labels the current cycle 6999. Is the public year 100 a cover story, a translation error, or something else?" },
  { tag: "FIELD NOTE", title: "Not just metal", text: "The basin returns traces of food cultures, elements, and fragments of a vanished infrastructure. Keep digging to separate evidence from legend." },
  { tag: "LOCKED FILE", title: "The quiet century", text: "Someone edited the public timeline. The archive does not yet say who—or why. This is an in-world mystery, not a claim about the real world." },
];

export default function ExtraktorPage() {
  const [credits, setCredits] = useState(1_000);
  const [speed, setSpeed] = useState(1);
  const [notice, setNotice] = useState("Simulation ready");
  const [selectedClue, setSelectedClue] = useState(0);

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
    <section className="extraktor-hero shell"><div><span className="eyebrow">OMNIEXTRAKTOR · FICTIONAL DISCOVERY SIMULATION</span><h1>Dig beneath<br /><em>the official story.</em></h1><p className="lead">In this fictional mystery, explorers find clues that the public calendar may be wrong: the world says year 100, while buried records point toward year 6999. Extract metals, elements, food relics, and secrets—but decide for yourself what the evidence means.</p><div className="extraktor-badges"><span><ShieldCheck size={14} /> Fictional world-building</span><span><BatteryCharging size={14} /> Energy-aware model</span><span><Pickaxe size={14} /> Virtual resources only</span></div></div><div className="supply-panel"><span className="eyebrow">PROPOSED OMNICOIN SUPPLY</span><strong>{MAX_SUPPLY.toLocaleString()}</strong><small>Fixed design target · not an offer or investment</small></div></section>
    <section className="extractor-grid shell"><div className="mine-panel"><div className="panel-top"><div><span className="eyebrow">ACTIVE ZONE</span><h2>Redstone Basin</h2></div><span className="live-pill"><i /> LIVE SIM</span></div><div className="mine-visual"><div className="mine-core"><Pickaxe size={35} /><strong>{output}</strong><small>units / minute</small></div><span className="ore ore-one">Cu</span><span className="ore ore-two">Fe</span><span className="ore ore-three">Li</span><span className="ore ore-four">Au</span><span className="ore ore-five">FOOD</span><span className="ore ore-six">6999?</span></div><div className="mine-stats"><div><span>Energy draw</span><strong>{Math.round(speed * 7)} kWh</strong></div><div><span>Virtual yield</span><strong>{(output * 0.8).toFixed(1)} u</strong></div><div><span>Zone health</span><strong>{Math.max(55, 100 - Math.round(speed * 2))}%</strong></div></div><p className="simulation-note"><Sparkles size={14} /> Every output on this page is fictional simulation data. It cannot be redeemed, sold, withdrawn, or represented as a mineral reserve.</p></div><aside className="upgrade-panel"><div className="panel-top"><div><span className="eyebrow">UPGRADE BAY</span><h2>Faster extractors</h2></div><Zap size={20} /></div><div className="credit-balance"><span>Simulation credits</span><strong>{credits.toLocaleString()}</strong><small>Earned through play · no monetary value</small></div><div className="upgrade-list">{upgrades.map((upgrade) => <button className={`upgrade ${upgrade.color}`} key={upgrade.name} onClick={() => buy(upgrade.cost, upgrade.multiplier, upgrade.name)}><span className="upgrade-icon"><Zap size={15} /></span><span><strong>{upgrade.level} · {upgrade.name}</strong><small>{upgrade.description}</small></span><b>{upgrade.cost.toLocaleString()} cr</b></button>)}</div><p className="upgrade-notice">{notice}</p></aside></section>
    <section className="clue-section shell"><div className="clue-heading"><div><span className="eyebrow">THE BURIED ARCHIVE</span><h2>Every extraction reveals<br /><em>another question.</em></h2></div><p>Follow the story as fiction. The year-6999 theory is a game mystery, not a statement about real history or current events.</p></div><div className="clue-layout"><div className="clue-tabs">{clues.map((clue, index) => <button className={selectedClue === index ? "selected" : ""} key={clue.tag} onClick={() => setSelectedClue(index)}><span>{clue.tag}</span><strong>{clue.title}</strong><ChevronRight size={16} /></button>)}</div><article className="clue-card"><div className="clue-card-icon"><BookOpen size={20} /></div><span className="eyebrow">{clues[selectedClue].tag}</span><h3>{clues[selectedClue].title}</h3><p>{clues[selectedClue].text}</p><div className="clue-meta"><Clock3 size={14} /> Fragment recovered · redstone sector</div></article></div></section>
    <section className="extraktor-footer shell"><div><span className="eyebrow">IMPORTANT BOUNDARY</span><h2>Omni does not currently sell mining equipment, commodities, tokens, or financial products.</h2></div><Link className="text-link" href="/terms">Read product boundaries →</Link></section>
  </main>;
}
