import Link from "next/link";

const projects = [
  { name: "Community Garden", status: "Draft", network: "Base Sepolia", progress: 34 },
  { name: "Creator Credits", status: "Risk review", network: "Solana Devnet", progress: 68 },
];

export default function DashboardPage() {
  return <main><nav className="nav shell"><Link className="brand" href="/"><span className="brand-mark">S</span><span>Stuffed</span></Link><div className="dashboard-user">Test workspace <span className="avatar">T</span></div></nav><section className="dashboard shell"><div className="dashboard-heading"><div><span className="eyebrow">YOUR WORKSPACE</span><h1>Build with intention.</h1><p className="lead">Create a project brief, model its supply, and review the risks before any wallet signature.</p></div><Link className="button" href="/">New project</Link></div><div className="dashboard-notice"><span>TESTNET MODE</span><p>Real-money purchases, mainnet deployments, custody, lending, and yield are disabled in this MVP.</p></div><div className="dashboard-grid"><section className="project-panel"><div className="panel-heading"><h2>Your projects</h2><span>2 projects</span></div>{projects.map((project) => <article className="project-row" key={project.name}><div className="project-symbol">{project.name.charAt(0)}</div><div className="project-info"><strong>{project.name}</strong><span>{project.network} · {project.status}</span><div className="project-progress"><i style={{ width: `${project.progress}%` }} /></div></div><span className="arrow">→</span></article>)}</section><aside className="next-panel"><span className="eyebrow">NEXT BEST STEP</span><h2>Finish your project brief</h2><p>Describe what your token does without promising price appreciation or returns.</p><Link className="text-link" href="/">Open builder →</Link></aside></div></section></main>;
}
