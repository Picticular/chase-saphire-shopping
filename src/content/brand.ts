/**
 * Everything brand-specific lives here. Swap this file to rebrand the site.
 * Copy is a rough-in of the real offer; the client still has to sign off on wording.
 */
export const brand = {
  /** Page name used in the header and meta tags. */
  product: 'Chase Sapphire Shopping',
  /** Short name for tight spaces (nav, footer). */
  shortName: 'Sapphire Shopping',
  /** Issuer named in "from Chase" style copy. */
  issuer: 'Chase',
  /** The app the offers live in. */
  partner: 'Picticular',
  partnerUrl: 'https://picticular.com',
  /** Where the header "Get the app" link goes. */
  appUrl: 'https://picticular.com',
  /** Store listings, as linked from picticular.com. */
  appStoreUrl: 'https://apps.apple.com/us/app/picticular/id1490417069',
  playStoreUrl: 'https://play.google.com/store/apps/details?id=com.innovatorm.picticulardev2',
  /** Where the header logo links. */
  homeUrl: 'https://www.chase.com/',
  /** Contact link in the header. */
  contactUrl: 'https://www.chase.com/digital/customer-service',
  offer: {
    /** Off the first purchase in the app with a new Chase Sapphire credit card. */
    welcome: '$50',
    welcomeCard: 'Chase Sapphire credit card',
    /** Off a movie ticket bought in the app with any Chase credit card. */
    ticket: '$10',
    ticketCard: 'Chase credit card',
  },
  stats: {
    /** From picticular.com. */
    titles: '1.5 million',
  },
  footerLinks: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Help Center', href: '#' },
    { label: 'Picticular', href: 'https://picticular.com' },
  ],
  legal:
    'Offers are subject to terms and conditions. The $50 welcome offer applies to your first purchase in Picticular with a new Chase Sapphire credit card. The $10 ticket offer applies to movie tickets bought in Picticular with a Chase credit card. Sample results shown. All trademarks are the property of their respective owners.',
  /** Shown in the fixed footer under the product photos. */
  trademarkNotice:
    'Product images and logos are trademarks of their respective owners, shown for illustration only. Sample results shown.',
  copyrightHolder: 'Chase Sapphire Shopping',
} as const;
