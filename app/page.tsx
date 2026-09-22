"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, CheckCircle2, FileText, ShieldCheck, Sparkles, WalletCards } from "lucide-react";
import { checkTokenName } from "@/lib/guardrails";
import { readProjects, writeProjects, type Project } from "@/lib/workspace";

const steps = ["Describe utility", "Tokenomics", "Review risks", "Connect wallet"];

export default function Home() {
  const [network, setNetwork] = useState<"Base Sepolia" | "Solana Devnet">("Base Sepolia");
  const [step, setStep] = useState(0);
  const [name, setName] = useState("");
  const [utility, setUtility] = useState("");
  const [message, setMessage] = useState("");

  const next = () => {
    if (step === 0) {
      const result = checkTokenName(name);
      if (!result.allowed) { setMessage(result.reason); return; }
      if (utility.trim().length < 12) { setMessage("Describe at least 12 characters of real utility."); return; }
      const existing = readProjects();
      const project: Project = { id: crypto.randomUUID(), name: result.normalized, utility: utility.trim(), network, updatedAt: new Date().toISOString() };
      writeProjects([project, ...existing]);
      setMessage("Project saved locally. Continue to model it.");
    }
    setStep((current) => Math.min(current + 1, steps.length - 1));
  };

  return <main>
    <nav className="nav shell"><Link className="brand" href="/"><span className="brand-mark">S</span><span>Stuffed</span></Link><div className="nav-links"><Link href="/start">How it works</Link><Link href="/lab">Tokenomics Lab</Link><Link href="/pricing">Pricing</Link></div><Link className="button button-small button-outline" href="/dashboard">Open workspace</Link></nav>
    <section className="hero shell"><div className="hero-copy"><div className="eyebrow"><span className="pulse" /> Testnet-first token tooling</div><h1>Build it.<br /><em>Break it.</em></h1><p className="lead">Stuffed helps creators design, stress-test, document, and test token projects before real money is involved.</p><div className="hero-actions"><Link className="button" href="/start">Start building <ArrowRight size={17} /></Link><Link className="text-link" href="/lab">Try the Tokenomics Lab</Link></div><div className="trust-row"><span><CheckCircle2 size={15} /> Non-custodial by design</span><span><CheckCircle2 size={15} /> Testnet first</span><span><CheckCircle2 size={15} /> No return promises</span></div></div><div className="hero-card"><div className="card-top"><span>BUILD PREVIEW</span><span className="status-dot">LIVE</span></div><div className="preview-icon"><Sparkles size={24} /></div><h3>Your token workspace</h3><p>Turn an idea into a model, a risk review, and a testnet-ready project brief.</p><div className="mini-progress"><span style={{ width: "58%" }} /></div><small>Design · stress-test · document</small><div className="preview-list"><span><FileText size={15} /> White paper draft</span><span><ShieldCheck size={15} /> Risk review</span><span><WalletCards size={15} /> Wallet signature required</span></div></div></section>
    <section id="builder" className="builder-section shell"><div className="section-heading"><div><span className="eyebrow">QUICK START</span><h2>Make your first project.</h2></div><div className="network-switch"><span>Network</span><select value={network} onChange={(e) => setNetwork(e.target.value as typeof network)}><option>Base Sepolia</option><option>Solana Devnet</option></select></div></div><div className="stepper">{steps.map((item, index) => <div className={`step ${index <= step ? "active" : ""}`} key={item}><span>{index + 1}</span>{item}</div>)}</div><div className="builder-card">{step === 0 && <><label>What is your project called?</label><input value={name} onChange={(e) => { setName(e.target.value); setMessage(""); }} placeholder="e.g. Community Garden" maxLength={40} /><label>What utility will the token provide?</label><textarea value={utility} onChange={(e) => { setUtility(e.target.value); setMessage(""); }} placeholder="Describe access, credits, or features. Avoid investment or profit language." rows={4} /><p className="helper">Your draft is saved in this browser only. Stuffed does not store private keys.</p>{message && <p className="form-message">{message}</p>}</>}{step === 1 && <><h3>Tokenomics draft</h3><div className="metric-grid"><div><span>Suggested max supply</span><strong>2,000,000,000</strong></div><div><span>Launch network</span><strong>{network}</strong></div><div><span>AI model</span><strong>Draft only</strong></div></div><p className="notice">Open the Tokenomics Lab to adjust supply, allocation, holders, and consumption scenarios.</p></>}{step === 2 && <><h3>Before you deploy</h3><div className="warning"><ShieldCheck size={22} /><div><strong>Rug-pull and total-loss warning</strong><p>Tokens can lose all value. Developers can abandon projects, liquidity can disappear, and smart contracts can contain bugs or privileged controls.</p></div></div></>}{step === 3 && <><h3>Testnet-ready project</h3><p>Your project is saved locally. The future deployment flow will prepare a transaction for <strong>{network}</strong>; your wallet will sign it.</p><Link className="button" href="/lab">Open Tokenomics Lab <ArrowRight size={16} /></Link></>}<div className="builder-footer"><span>Step {step + 1} of {steps.length}</span>{step < 3 && <button className="button" onClick={next}>Continue <ArrowRight size={16} /></button>}</div></div></section>
    <section id="how" className="feature-section shell"><span className="eyebrow">WHY STUFFED</span><h2>Powerful enough to build.<br />Careful enough to trust.</h2><div className="feature-grid"><Feature icon={<Sparkles />} title="Two AI pillars" text="Generate a reviewable white paper and a plain-English tokenomics model from one structured brief." /><Feature icon={<ShieldCheck />} title="Safety in the flow" text="See admin controls, fees, concentration, and rug-pull risks before a user signs." /><Feature icon={<WalletCards />} title="You stay in control" text="Non-custodial architecture means the user signs every deployment transaction from their own wallet." /></div></section>
    <section id="safety" className="safety-band"><div className="shell safety-inner"><div><span className="eyebrow">SAFETY PRINCIPLE</span><h2>There is no legal loophole for deception.</h2></div><p>Stuffed is a software and education layer. It does not promise returns, custody assets, hide fees, or call a token utility to avoid the facts.</p></div></section><footer id="docs" className="footer shell"><div className="brand"><span className="brand-mark">S</span><span>Stuffed</span></div><p><Link href="/terms">Product notice</Link> · <Link href="/pricing">Pricing</Link> · Testnet first</p><p>© 2026 Stuffed. Not legal, financial, or tax advice.</p></footer>
  </main>;
}
function Feature({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) { return <article className="feature"><div className="feature-icon">{icon}</div><h3>{title}</h3><p>{text}</p></article>; }
