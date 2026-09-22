"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, FolderOpen, FlaskConical, Plus } from "lucide-react";
import { readProjects, type Project } from "@/lib/workspace";

export default function DashboardPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  useEffect(() => setProjects(readProjects()), []);
  return <main><nav className="nav shell"><Link className="brand" href="/"><span className="brand-mark">S</span><span>Stuffed</span></Link><div className="dashboard-user"><Link href="/lab">Tokenomics Lab</Link><span className="avatar">T</span></div></nav><section className="dashboard shell"><div className="dashboard-heading"><div><span className="eyebrow">YOUR WORKSPACE</span><h1>Build with intention.</h1><p className="lead">Your projects and scenarios stay in this browser during the MVP.</p></div><Link className="button" href="/">New project <Plus size={16} /></Link></div><div className="dashboard-notice"><span>TESTNET MODE</span><p>Nothing here sells tokens, stores keys, or handles real-money transactions.</p></div><div className="dashboard-grid"><section className="project-panel"><div className="panel-heading"><h2>Your projects</h2><span>{projects.length} saved</span></div>{projects.length === 0 ? <div className="empty-state"><FolderOpen size={28} /><h3>Your first project starts here.</h3><p>Describe an idea on the home page, then stress-test it in the lab.</p><Link className="text-link" href="/">Create a project →</Link></div> : projects.map((project) => <article className="project-row" key={project.id}><div className="project-symbol">{project.name.charAt(0)}</div><div className="project-info"><strong>{project.name}</strong><span>{project.network} · Saved {new Date(project.updatedAt).toLocaleDateString()}</span><div className="project-progress"><i style={{ width: project.scenario ? "68%" : "34%" }} /></div></div><Link className="arrow" href="/lab" aria-label={`Open ${project.name}`}><ArrowRight size={18} /></Link></article>)}</section><aside className="next-panel"><FlaskConical size={24} color="var(--mint)" /><h2>Break your model.</h2><p>Change allocations, holder counts, and burn assumptions to see what needs attention.</p><Link className="text-link" href="/lab">Open Tokenomics Lab →</Link></aside></div></section></main>;
}
