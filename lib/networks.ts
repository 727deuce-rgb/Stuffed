export const SUPPORTED_NETWORKS = {
  baseSepolia: {
    id: 84532,
    name: "Base Sepolia",
    environment: "testnet",
    nativeCurrency: "ETH",
    explorer: "https://sepolia.basescan.org",
  },
  solanaDevnet: {
    id: "solana-devnet",
    name: "Solana Devnet",
    environment: "testnet",
    nativeCurrency: "SOL",
    explorer: "https://explorer.solana.com/?cluster=devnet",
  },
} as const;

export type SupportedNetwork = keyof typeof SUPPORTED_NETWORKS;
