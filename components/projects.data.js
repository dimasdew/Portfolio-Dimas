// Edit this file to update projects.
const projects = [
  {
    id: 1,
    slug: 'firee',
    name: 'Firee, Decentralized Marketplace',
    desc: 'End to end design and development of a decentralized marketplace for Web3 builders. Smart contract escrow, USDC payments on Base, instant delivery.',
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
      stack: ['Next.js 14', 'Tailwind CSS', 'USDC on Base', 'Smart Contract Escrow'],
      overview:
        'Firee is a decentralized marketplace where Web3 builders buy and sell smart contracts, DApp templates, UI kits, and developer tools. Payments run in USDC on Base through smart contract escrow. No middlemen, a flat 3% fee, and instant file delivery.',
      problem:
        'Digital marketplaces for developers like Gumroad and ThemeForest take 10 to 30 percent in fees, hold payouts for weeks, and lock sellers into Web2 payment rails. Crypto native builders had no trusted place to sell code artifacts where payment and delivery are both verifiable.',
      research: [
        'Benchmarked Gumroad, ThemeForest, and OpenSea flows to map where trust breaks: fee opacity, payout delays, and no proof of delivery.',
        'Talked with Web3 builders in Telegram and Discord communities. The biggest objection to buying code from strangers was "how do I know I get the files after paying?"',
        'Mapped the escrow flow first, before any UI: payment locked, then files released via signed URL, then escrow settles. The UI had to make this state machine legible to non technical buyers.',
      ],
      decisions: [
        {
          title: 'Escrow status as the visual centerpiece',
          detail:
            'Instead of hiding blockchain mechanics, each order shows a plain language escrow timeline: Paid, Locked, Delivered, Settled. Trust comes from visibility, not from hiding complexity.',
        },
        {
          title: 'Web2 onboarding, Web3 settlement',
          detail:
            'Users sign up with email or Google first. Wallet connection is only required at the moment of buying or selling. This ordering removed the biggest drop off point, which is forcing wallet connect on landing.',
        },
        {
          title: 'Dark, minimal UI with a single accent',
          detail:
            'Marketplace listings are dense. A restrained dark palette with one accent color keeps product cards scannable and pushes visual weight to product thumbnails and prices, not chrome.',
        },
        {
          title: 'Signed download URLs over public links',
          detail:
            'Product files live in private buckets, and only paying buyers receive time limited signed URLs. The UX challenge was communicating "your file is safe and only yours" without jargon, solved with a delivery receipt pattern.',
        },
      ],
      outcome:
        'Shipped a full marketplace flow covering browse, buy, escrow, instant delivery, and a seller dashboard as a solo designer and developer. The escrow timeline pattern tested well with non crypto users: all five testers could correctly explain where their money was at each step.',
      learnings:
        'Trust UX in Web3 is a sequencing problem: ask for the wallet as late as possible, and show on chain state in human language. I also learned to design the state machine before the screens. Every screen after that became an obvious projection of one state.',
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
