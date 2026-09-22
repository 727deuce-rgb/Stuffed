# MVP architecture

## Trust boundaries

1. **Browser:** collects a project brief and displays drafts. It must never receive a server secret or private key.
2. **Stuffed API (future):** validates input, applies moderation, generates drafts, and records explicit consent. It does not sign blockchain transactions.
3. **Wallet provider:** owns the user session and signs an explicitly displayed transaction.
4. **Blockchain:** is the final execution environment. Deployment is irreversible once confirmed.
5. **Compliance providers (future):** perform KYC, sanctions, and transaction screening where the business model requires it.

## Deployment flow

- Select Base Sepolia or Solana Devnet.
- Validate and moderate the name and project description.
- Generate white-paper and tokenomics drafts with a visible AI-generated label.
- Display contract permissions, supply, fees, admin controls, and network.
- Simulate the transaction and show the result where supported.
- Require the user to acknowledge total-loss and rug-pull risks.
- Request a user signature from the connected wallet.
- Record the transaction hash and source-verification status.

## Never do these things

- Store seed phrases or private keys.
- Sign or broadcast silently.
- Hide fees in a transfer tax.
- Claim a token is safe because it passed a screen.
- Treat an entertainment disclaimer as a substitute for legal compliance.
- Enable mainnet, token sales, custody, lending, or a USD-backed token without separate legal and security sign-off.
