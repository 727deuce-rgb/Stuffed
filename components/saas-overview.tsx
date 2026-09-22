"use client";

import { useState } from "react";
import { Database, GitBranch, Rocket, Sparkles } from "lucide-react";
import { SupabaseStatus } from "@/components/supabase-status";

export function SaaSOverview() {
  const [created, setCreated] = useState(false);
  return <div className="saas-overview"><div className="saas-copy"><span className="eyebrow">FULL-STACK WORKSPACE</span><h2>From prompt to production.</h2><p>Forgecloud combines Git workflows, instant Next.js environments, Supabase data, and Base44-style natural-language app scaffolding in one focused workspace.</p><div className="saas-actions"><button className="primary-button" onClick={() => setCreated(true)}><Sparkles size={15} /> {created ? "Starter app created" : "Create from a prompt"}</button><span>{created ? "Your local starter is ready for the next step." : "No code execution happens without an isolated runtime."}</span></div></div><div className="saas-stack"><div><GitBranch size={17} /><span><strong>Git-native</strong><small>Branches, reviews, commits</small></span></div><div><Database size={17} /><span><strong>Supabase-backed</strong><small>Auth, Postgres, storage</small></span></div><div><Rocket size={17} /><span><strong>Preview deploys</strong><small>Ship every branch safely</small></span></div></div><SupabaseStatus /></div>;
}
