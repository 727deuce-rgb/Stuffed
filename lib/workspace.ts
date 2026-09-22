export const WORKSPACE_KEY = "stuffed-workspace";

export type Project = {
  id: string;
  name: string;
  utility: string;
  network: "Base Sepolia" | "Solana Devnet";
  updatedAt: string;
  scenario?: Scenario;
};

export type Scenario = {
  supply: number;
  treasury: number;
  team: number;
  burn: number;
  holders: number;
};

export function readProjects(): Project[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(WORKSPACE_KEY) || "[]") as Project[];
  } catch {
    return [];
  }
}

export function writeProjects(projects: Project[]) {
  localStorage.setItem(WORKSPACE_KEY, JSON.stringify(projects));
}
