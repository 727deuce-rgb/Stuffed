"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, FileText, ShieldCheck, Sparkles, WalletCards } from "lucide-react";

const steps = ["Describe utility", "Tokenomics", "Review risks", "Connect wallet"];

export default function Home() {
  const [network, setNetwork] = useState<"Base Sepolia" | "Solana Devnet">("Base Sepolia");
  const [step, setStep] = useState(0);
  const [name, setName] = useState("");
  const [utility, setUtility] = useState("");

  const next = () => setStep((current) => Math.min(current + 1, steps.length - 1));

  return (
    <main>
      <nav className="nav shell">
        <div className="brand"><span className="brand-mark">S</span><span>Stuffed</span></div>
        <div className="nav-links"><a href="#how">How it works</a><a href="#safety">Safety</a><a href="#docs">Docs</a></div>
        <button className="button button-small button-outline">Connect wallet</button>
      </nav>

      <section className="hero shell">
        <div className="hero-copy">
          <div className="eyebrow"><span className="pulse" /> Testnet-first token tooling</div>
          <h1>Make utility.<br /><em>Not promises.</em></h1>
          <p className="lead">Stuffed helps people create, document, and deploy utility tokens on Base and Solana—with transparent risks, user-signed transactions, and no custody.</p>
          <div className="hero-actions"><button className="button" onClick={() => document.getElementById("builder")?.scrollIntoView({ behavior: "smooth" })}>Start building <ArrowRight size={17} /></button><a className="text-link" href="#safety">Read our safety principles</a></div>
          <div className="trust-row"><span><CheckCircle2 size={15} /> Non-custodial by design</span><span><CheckCircle2 size={15} /> Testnet first</span><span><CheckCircle2 size={15} /> No return promises</span></div>
        </div>
        <div className="hero-card">
          <div className="card-top"><span>BUILD PREVIEW</span><span className="status-dot">LIVE</span></div>
          <div className="preview-icon"><Sparkles size={24} /></div>
          <h3>Your token workspace</h3>
          <p>AI-assisted documentation and transparent tokenomics, reviewed before you sign.</p>
          <div className="mini-progress"><span style={{ width: "58%" }} /></div><small>2 of 4 steps complete</small>
          <div className="preview-list"><span><FileText size={15} /> White paper draft</span><span><ShieldCheck size={15} /> Risk review</span><span><WalletCards size={15} /> Wallet signature required</span></div>
        </div>
      </section>

      <section id="builder" className="builder-section shell">
        <div className="section-heading"><div><span className="eyebrow">THE BUILDER</span><h2>A responsible launch, step by step.</h2></div><div className="network-switch"><span>Network</span><select value={network} onChange={(e) => setNetwork(e.target.value as typeof network)}><option>Base Sepolia</option><option>Solana Devnet</option></select></div></div>
        <div className="stepper">{steps.map((item, index) => <div className={`step ${index <= step ? "active" : ""}`} key={item}><span>{index + 1}</span>{item}</div>)}</div>
        <div className="builder-card">
          {step === 0 && <><label>What is your project called?</label><input value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Community Garden" maxLength={40} /><label>What utility will the token provide?</label><textarea value={utility} onChange={(e) => setUtility(e.target.value)} placeholder="Describe access, credits, or features. Avoid investment or profit language." rows={4} /><p className="helper">Stuffed screens vulgar, hateful, impersonating, and deceptive names before deployment.</p></>}
          {step === 1 && <><h3>Tokenomics draft</h3><div className="metric-grid"><div><span>Suggested max supply</span><strong>2,000,000,000</strong></div><div><span>Launch network</span><strong>{network}</strong></div><div><span>AI burn model</span><strong>Draft only</strong></div></div><p className="notice">The tokenomics pillar will produce a transparent supply, allocation, vesting, consumption, and burn model. It will not predict price or guarantee scarcity.</p></>}
          {step === 2 && <><h3>Before you deploy</h3><div className="warning"><ShieldCheck size={22} /><div><strong>Rug-pull and total-loss warning</strong><p>Tokens can lose all value. Developers can abandon projects, liquidity can disappear, and smart contracts can contain bugs or privileged controls. A disclaimer does not make a misleading product legal.</p></div></div><label className="checkbox"><input type="checkbox" /> I understand deployment is irreversible and I have reviewed the generated risks.</label></>}
          {step === 3 && <><h3>Ready for a user-signed transaction</h3><p>Stuffed will prepare the deployment transaction for <strong>{network}</strong>. Your wallet signs it; Stuffed never receives or stores your private key.</p><div className="connect-placeholder"><WalletCards size={28} /><span>Wallet connection will be enabled in the next MVP milestone.</span></div></>}
          <div className="builder-footer"><span>Step {step + 1} of {steps.length}</span>{step < 3 ? <button className="button" onClick={next}>Continue <ArrowRight size={16} /></button> : <button className="button" disabled>Connect wallet (coming soon)</button>}</div>
        </div>
      </section>

      <section id="how" className="feature-section shell"><span className="eyebrow">WHY STUFFED</span><h2>Powerful enough to build.<br />Careful enough to trust.</h2><div className="feature-grid"><Feature icon={<Sparkles />} title="Two AI pillars" text="Generate a reviewable white paper and a plain-English tokenomics model from one structured brief." /><Feature icon={<ShieldCheck />} title="Safety in the flow" text="Contract permissions, admin controls, fees, and rug-pull risks are shown before a user signs." /><Feature icon={<WalletCards />} title="You stay in control" text="Non-custodial architecture means the user signs every deployment transaction from their own wallet." /></div></section>
      <section id="safety" className="safety-band"><div className="shell safety-inner"><div><span className="eyebrow">SAFETY PRINCIPLE</span><h2>There is no legal loophole for deception.</h2></div><p>Stuffed is designed as a software and education layer. We do not promise returns, custody assets, hide fees, or call a token “utility” to avoid the facts. Mainnet, payments, and financial products require jurisdiction-specific legal review.</p></div></section>
      <footer id="docs" className="footer shell"><div className="brand"><span className="brand-mark">S</span><span>Stuffed</span></div><p>MVP scaffold · Base + Solana · Testnet first</p><p>© 2026 Stuffed. Not legal, financial, or tax advice.</p></footer>
    </main>
  );
}

function Feature({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) { return <article className="feature"><div className="feature-icon">{icon}</div><h3>{title}</h3><p>{text}</p></article>; }
