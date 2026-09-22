# Stuffed

Stuffed is a testnet-first, non-custodial workspace for creating, documenting, and deploying utility-token contracts on Base and Solana. The current repository is an intentionally safe MVP scaffold: it does not custody assets, call a wallet, sell tokens, or provide financial products.

## Product principles

- **User-signed transactions:** Stuffed prepares transactions; the connected wallet signs them.
- **Testnet first:** Base Sepolia and Solana Devnet precede any mainnet workflow.
- **No promises:** Utility, access, or credits must not be marketed as guaranteed returns.
- **Transparent controls:** Minting, pausing, upgradeability, fees, allocations, and admin keys are visible before signing.
- **AI with review:** AI outputs are drafts, never legal, tax, financial, or security advice.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Planned milestones

1. Product and legal review; threat model and jurisdiction matrix.
2. Base Sepolia wallet connection and transaction preview.
3. Audited fixed-supply Solidity templates and source verification.
4. White-paper and tokenomics generation behind a server-side provider with moderation and human approval.
5. Solana Devnet adapter and separately reviewed SPL templates.
6. Mainnet only after counsel, security audit, KYC/AML, payments, and consumer-protection workstreams are complete.

Never commit secrets, private keys, customer data, or confidential legal advice.
