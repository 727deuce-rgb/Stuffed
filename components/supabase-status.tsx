"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

type Status = "checking" | "connected" | "missing" | "signed-out";

export function SupabaseStatus() {
  const [status, setStatus] = useState<Status>("checking");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const supabase = createClient();
    if (!supabase) { setStatus("missing"); return; }
    supabase.auth.getUser().then(({ data }) => { setEmail(data.user?.email || ""); setStatus(data.user ? "connected" : "signed-out"); });
  }, []);

  async function signIn() {
    const supabase = createClient();
    if (!supabase || !email) return;
    const { error } = await supabase.auth.signInWithOtp({ email, options: { emailRedirectTo: window.location.origin } });
    setMessage(error ? error.message : "Magic link sent. Check your email.");
  }

  if (status === "missing") return <div className="connection-card warning"><strong>Connect Supabase</strong><span>Add the public URL and anon key to .env.local to enable auth, projects, and data.</span></div>;
  if (status === "connected") return <div className="connection-card"><span className="status-dot" /><strong>{email}</strong><span>Supabase workspace connected</span></div>;
  return <div className="connection-card auth-card"><div><strong>Sign in to your workspace</strong><span>{message || "Use a magic link to sync projects across devices."}</span></div><div className="auth-row"><input aria-label="Email address" type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} /><button onClick={signIn}>Send magic link</button></div></div>;
}
