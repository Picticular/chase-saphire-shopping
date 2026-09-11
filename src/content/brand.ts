/**
 * Everything brand-specific lives here. Swap this file to rebrand the site.
 */
export const brand = {
  /** Product name used in headings and copy. */
  product: 'Chase Sapphire Shopping',
  /** Short name for tight spaces (nav, footer). */
  shortName: 'Sapphire Shopping',
  /** Issuer named in "from Chase" style copy. */
  issuer: 'Chase',
  /** Where the header logo links. */
  homeUrl: 'https://www.chase.com/',
  /** Browser extension install link. Placeholder until the extension is listed. */
  installUrl: '#',
  /** Contact link in the header. */
  contactUrl: 'https://www.chase.com/digital/customer-service',
  /** Where the extension was built, used in the "built with love" line. */
  builtIn: 'Austin, Texas',
  stats: {
    savedLastYear: '$800 million',
    shoppers: '7,000,000+',
  },
  /** Retailers named in the rewards copy. */
  rewardRetailers: ['Walmart', 'eBay'],
  footerLinks: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Help Center', href: '#' },
    { label: 'Trending Deals', href: '#' },
  ],
  legal:
    'Rewards are subject to terms and conditions. Savings may vary. Sample results shown. All trademarks are the property of their respective owners.',
  copyrightHolder: 'Chase Sapphire Shopping',
} as const;
