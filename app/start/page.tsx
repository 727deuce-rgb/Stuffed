import Link from "next/link";

const steps = [
  ["01", "Name your idea", "Choose a project name and describe the real utility without promising returns."],
  ["02", "Model the economics", "Use the Tokenomics Lab to test supply, allocations, holders, and burn assumptions."],
  ["03", "Review the risks", "Read the plain-language warnings before anything reaches a wallet."],
  ["04", "Test on-chain", "When enabled, prepare a user-signed deployment on Base Sepolia or Solana Devnet."],
];

export default function StartPage() {
  return (
    <main className="start-page">
      <nav className="nav shell"><Link className="brand" href="/"><span className="brand-mark">S</span><span>Stuffed</span></Link><div className="start-nav"><Link href="/lab">Tokenomics Lab</Link><Link href="/pricing">Pricing</Link></div></nav>
      <section className="start-hero shell"><span className="eyebrow">WELCOME TO STUFFED</span><h1>Your idea is enough<br /><em>to get started.</em></h1><p className="lead">No wallet, token purchase, or technical background required. Build a model first, see what breaks, and decide what deserves a real launch later.</p><div className="start-actions"><Link className="button" href="/lab">Open Tokenomics Lab →</Link><Link className="text-link" href="/dashboard">View workspace</Link></div></section>
      <section className="start-steps shell"><div className="start-section-title"><span className="eyebrow">THE STUFFED LOOP</span><h2>From idea to informed decision.</h2></div><div className="steps-grid">{steps.map(([number, title, text]) => <article className="start-step" key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
      <section className="start-callout"><div className="shell start-callout-inner"><div><span className="eyebrow">WHY TEST FIRST?</span><h2>Real money should be the last step, not the first.</h2></div><p>Stuffed is designed to make token mechanics understandable before a project is marketed, funded, or deployed. The current experience is educational and testnet-first.</p></div></section>
    </main>
  );
}
