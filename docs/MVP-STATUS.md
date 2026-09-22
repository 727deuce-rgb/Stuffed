# Next milestone: a connected local MVP

The home builder now validates names and utility, saves a project to browser local storage, and routes users to the Tokenomics Lab and workspace. The dashboard reads those saved projects and clearly labels the data as local MVP data.

## What is intentionally not enabled

Authentication, cloud persistence, payments, AI API keys, wallet signing, mainnet, custody, token sales, lending, and yield remain disabled. This keeps the app demonstrable without pretending it is a regulated financial product.

## Try the flow

1. Open `/` and create a project.
2. Continue through the risk review.
3. Open `/lab` to stress-test assumptions.
4. Open `/dashboard` to see the saved project.

## Next technical boundary

The next production-quality step is replacing browser storage with authenticated persistence and adding automated tests. Wallet and payment integrations should remain behind feature flags until reviewed.
