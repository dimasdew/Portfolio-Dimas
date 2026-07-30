// Edit this file to update projects.
const projects = [
  {
    id: 1,
    slug: 'firee',
    name: 'Firee, Decentralized Marketplace',
    desc: 'End to end design and development of a decentralized marketplace for physical goods. Smart contract escrow, USDC payments on Base, shipping and delivery confirmation on chain.',
    tags: ['Next.js', 'Tailwind CSS', 'Web3'],
    featured: true,
    accent: true,
    href: '/work/firee',
    liveUrl: 'https://mp-firee.vercel.app/',
    bgText: '01',
    bgTextColor: 'rgba(130,80,255,0.15)',
    caseStudy: {
      role: 'Product Designer & Frontend Developer',
      timeline: 'Solo project, design to production',
      stack: ['Next.js 14', 'Tailwind CSS', 'Solidity', 'USDC on Base', 'Smart Contract Escrow', 'Supabase'],
      overview:
        'Firee is a decentralized marketplace for physical goods. Buyers pay in USDC on Base, but the money never goes straight to the seller: it sits in a smart contract escrow until the item ships, arrives, and the buyer confirms delivery. A flat 3% fee, automatic refunds if the seller never ships, and every order state verifiable on chain.',
      problem:
        'Buying physical goods from a stranger with crypto is a trust problem with no referee. Pay first and the seller can vanish; ship first and the buyer can. Marketplaces that tried this before, like OpenBazaar, solved the payment rail but died because the experience was built for crypto natives, not shoppers. The interesting problem was not the escrow contract. It was making an escrow state machine feel like a normal online store.',
      research: [
        'Started from a simple question: what would Amazon look like if the trust layer were a smart contract instead of a corporation?',
        'Studied why OpenBazaar failed despite proving demand: crypto native onboarding, no familiar checkout, and no clear answer to "what happens if my package never arrives."',
        'Designed the escrow state machine before any screen: Paid, then Shipped with a tracking number, then Delivered on buyer confirmation, with timeout branches for refunds and disputes. Every screen after that is a projection of one state.',
      ],
      decisions: [
        {
          title: 'The order timeline is the product',
          detail:
            'Each order shows a plain language status: Awaiting Shipment, Shipped with tracking number, Delivered. The same state machine drives the buyer view, the seller view, and the contract. Trust comes from visibility, not from hiding blockchain mechanics.',
        },
        {
          title: 'Deadlines instead of customer support',
          detail:
            'If the seller never ships within 14 days, the buyer claims a full refund directly from the contract. If the buyer goes silent after delivery, funds auto release to the seller after 30 days. Both failure modes resolve without a human in the loop, and the UI states the rules up front instead of burying them in terms.',
        },
        {
          title: 'Web2 onboarding, Web3 settlement',
          detail:
            'Users sign up with email or Google and enter a normal shipping address at checkout. The wallet only appears at the moment of payment. This is the direct answer to why OpenBazaar style marketplaces lost mainstream buyers at the front door.',
        },
        {
          title: 'Confirm Delivery as a deliberate action',
          detail:
            'Releasing payment is the highest stakes tap in the product, so it is an explicit button on the order, never automatic on a courier scan. The buyer decides when the deal is done, and the copy makes the consequence clear: confirming pays the seller.',
        },
      ],
      outcome:
        'Shipped the full physical goods flow as a solo designer and developer: checkout with shipping address, escrow payment, a seller order dashboard with Mark as Shipped and tracking input, buyer side delivery confirmation, and a Solidity escrow contract with timeout based refunds and auto release. It reads like a familiar Web2 store while every payment step stays verifiable on chain.',
      learnings:
        'Firee started as a digital goods marketplace with instant file delivery. Pivoting to physical goods forced a rebuild of the trust model, because an escrow that settles on instant download makes no sense when delivery takes two weeks. The lesson: design the state machine first, and when the fulfillment model changes, expect the contract, the database, and the UI to change together. Screens are cheap; states are architecture.',
    },
  },
  {
    id: 2,
    slug: 'amana-protocol',
    name: 'Amana Protocol, Decentralized Exchange',
    desc: 'A full DeFi interface with token swaps, staking, lending with health factor monitoring, and concentrated liquidity. Built with Next.js, wagmi v2, and viem.',
    tags: ['Next.js', 'DEX', 'Web3'],
    featured: false,
    accent: false,
    href: '/work/amana-protocol',
    liveUrl: 'https://amana-protocol.vercel.app/',
    bgText: '02',
    bgTextColor: 'rgba(200,240,74,0.15)',
    caseStudy: {
      role: 'Product Designer & Frontend Developer',
      timeline: 'Solo project, design to production',
      stack: ['Next.js 14', 'wagmi v2', 'viem', 'RainbowKit', 'TanStack Query', 'Zustand', 'Recharts'],
      overview:
        'Amana Protocol is a decentralized exchange interface covering four DeFi primitives in one product: smart routed swaps, flexible staking, lend and borrow with live health factor monitoring, and concentrated liquidity provision.',
      problem:
        'Most DEX interfaces are built for power users and feel like a Bloomberg terminal from 2015. Dense tables, unexplained numbers, and liquidation risk buried in tooltips. New DeFi users get liquidated because the UI never made risk visible.',
      research: [
        'Audited Uniswap, Aave, and GMX flows and catalogued every number shown without explanation: slippage, price impact, health factor, APR versus APY.',
        'Identified liquidation as the highest stakes moment. On most platforms, health factor is a small decimal in a corner, and users do not act on numbers they do not understand.',
        'Defined a hierarchy rule before designing: risk information always outranks reward information on any screen where both appear.',
      ],
      decisions: [
        {
          title: 'Health Factor as a first class UI element',
          detail:
            'The lending module surfaces health factor as a large, color coded indicator with plain language states like safe and at risk, not a decimal in a corner. Risk visibility drives the layout, not yield numbers.',
        },
        {
          title: 'Preview before signature, always',
          detail:
            'Every action, whether swap, stake, borrow, or LP, shows slippage, fees, and price impact before the wallet signature request. No transaction is ever a surprise, which is the core trust contract of the product.',
        },
        {
          title: 'Four modules, one interaction grammar',
          detail:
            'Swap, stake, lend, and LP screens share the same card anatomy: input, computed outcome, risk line, action. Learning one module teaches all four, which flattens the DeFi learning curve.',
        },
        {
          title: 'In range indicator for concentrated liquidity',
          detail:
            'LP positions show a live In Range or Out of Range state with unclaimed fees front and center, turning the most confusing concept in Uniswap v3 into a glanceable status.',
        },
      ],
      outcome:
        'Shipped a production grade DeFi interface with full type safety through TypeScript and viem, plus wallet support via RainbowKit. The unified card grammar means the complete four module product ships with one design system and minimal bespoke UI.',
      learnings:
        'DeFi UX is risk communication design. The best performing pattern was the pre signature preview: users trust interfaces that commit to no surprises more than interfaces that promise high yields.',
    },
  },
  {
    id: 3,
    slug: 'risklens',
    name: 'RiskLens, Token Risk Scanner',
    desc: 'Automated token risk scanner for Solana and EVM chains. Turns raw on chain signals into plain language risk reports with score, warnings, and recommendations.',
    tags: ['Next.js', 'Web3', 'Security'],
    featured: false,
    accent: false,
    href: '/work/risklens',
    liveUrl: 'https://risklens-labs.vercel.app/',
    bgText: '03',
    bgTextColor: 'rgba(100,100,200,0.2)',
    caseStudy: {
      role: 'Product Designer & Frontend Developer',
      timeline: 'Solo project, design to production',
      stack: ['Next.js', 'Solana and EVM data sources', 'USDC payments on Base'],
      overview:
        'RiskLens scans any token on Solana, Ethereum, Base, or BNB Chain and turns six or more raw on chain data sources into a plain language risk report: a score from 0 to 100, specific warnings, and what to do next. Free, no wallet connection, no sign up.',
      problem:
        'Existing token checkers like GoPlus, RugCheck, and DexScreener output raw flags such as "mint authority: true" or "top10: 61%" that only experienced traders can interpret. Retail traders, the group most exposed to rug pulls, are exactly the group these tools fail.',
      research: [
        'Ran a competitive audit of GoPlus, RugCheck, and DexScreener. All three assume the user already knows what a mint authority or LP lock means, and none explain impact or give a recommendation.',
        'Analyzed real rug pull post mortems to rank which signals actually preceded losses: holder concentration, active owner privileges, honeypot taxes, and thin or young liquidity topped the list.',
        'Defined the target user as the person about to ape into a token from a Telegram call: 30 seconds of attention, zero tolerance for jargon.',
      ],
      decisions: [
        {
          title: 'Plain language over raw flags',
          detail:
            'Every finding is written as impact plus action, for example "Owner can still mint new tokens, so supply can be diluted at any time" instead of "mintAuthority: active". The report reads like an analyst note, not an API response.',
        },
        {
          title: 'No wallet connection required',
          detail:
            'A security tool that asks you to connect a wallet undermines its own premise. A paste an address input with zero sign up became the core differentiator, and it removed the biggest onboarding barrier.',
        },
        {
          title: 'One score, then the evidence',
          detail:
            'A single score from 0 to 100 with a severity label answers the question in one glance, while the detailed findings below let skeptics verify. Progressive disclosure for two very different reader types.',
        },
        {
          title: 'Shareable report URLs',
          detail:
            'Every scan generates a unique URL designed to be dropped into group chats. Distribution is built into the product: the report itself is the growth loop.',
        },
      ],
      outcome:
        'Shipped a working scanner covering four chains and six or more data sources per scan, with a free tier of 50 scans per day and a Pro tier paid in USDC on Base. A complete product with pricing, not just a demo.',
      learnings:
        'The hardest design work was editorial, not visual: compressing security analysis into sentences a non technical trader acts on. Writing is interface design in security tooling.',
    },
  },
]

export default projects
