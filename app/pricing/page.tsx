import Link from "next/link";

const plans = [
  {
    name: "Explorer",
    price: "$0",
    note: "Start on testnet",
    features: ["Base Sepolia and Solana Devnet workspace", "Basic project brief", "Risk education and deployment checklist", "No mainnet or real-money features"],
    cta: "Start free",
    featured: false,
  },
  {
    name: "Builder",
    price: "$29",
    note: "per month",
    features: ["Everything in Explorer", "White-paper draft exports", "Tokenomics and burn-model scenarios", "Saved projects and version history"],
    cta: "Choose Builder",
    featured: true,
  },
  {
    name: "Studio",
    price: "$99",
    note: "per month",
    features: ["Everything in Builder", "Team collaboration", "Contract-permission review reports", "Hosted project documentation"],
    cta: "Choose Studio",
    featured: false,
  },
];

export default function PricingPage() {
  return (
    <main>
      <nav className="nav shell"><Link className="brand" href="/"><span className="brand-mark">S</span><span>Stuffed</span></Link><Link className="text-link" href="/">Back to home</Link></nav>
      <section className="pricing-hero shell"><span className="eyebrow">SIMPLE SOFTWARE PRICING</span><h1>Pay for clarity.<br /><em>Not speculation.</em></h1><p className="lead">Stuffed sells creator tools, documentation, and safety workflows—not tokens, returns, custody, or financial promises.</p></section>
      <section className="pricing-grid shell">{plans.map((plan) => <article className={`price-card ${plan.featured ? "price-card-featured" : ""}`} key={plan.name}>{plan.featured && <span className="popular">MOST POPULAR</span>}<h2>{plan.name}</h2><div className="price">{plan.price}<small>{plan.note}</small></div><ul>{plan.features.map((feature) => <li key={feature}>✓ {feature}</li>)}</ul><button className="button">{plan.cta}</button></article>)}</section>
      <section className="pricing-note shell"><strong>What you are buying:</strong> access to software that helps organize a token project. You are not buying an investment, a token, a profit opportunity, an audit, legal advice, liquidity, or a guarantee that any project will succeed.</section>
    </main>
  );
}
