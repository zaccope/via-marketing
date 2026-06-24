/**
 * content.ts is the single source of truth for all copy and numbers on the
 * VIA marketing site.
 *
 * Copy rules (from the brand voice): plain, confident, specific. Sell outcomes,
 * not features. No hype words. No em-dashes or en-dashes anywhere. For ranges
 * use the word "to". Numbers are honest and only those we can defend. We do not
 * invent traction, partners, or testimonials.
 *
 * IB = International Baccalaureate. IBDP = International Baccalaureate Diploma
 * Programme. Spell out on first visible use, then abbreviate.
 */

export const brand = {
  name: "VIA",
  fullName: "Virtual Interactive Academy",
  tagline: "Learn better. Together.",
  oneLiner:
    "VIA is the verified global community for International Baccalaureate students, licensed by schools.",
  email: "hello@via-academy.com",
  ctaLabel: "Request a demo",
} as const;

/* Sticky nav links. Anchor ids match the section components. */
export const nav = {
  links: [
    { id: "why", label: "Why VIA" },
    { id: "how", label: "How it works" },
    { id: "schools", label: "For schools" },
    { id: "different", label: "What makes it different" },
  ],
} as const;

/* Hero */
export const hero = {
  eyebrow: "For International Baccalaureate schools",
  headlinePre: "Belong to a network,",
  headlineEm: "not just a school.",
  sub: "Connect your verified IB students with peers worldwide. Real study partners, real friendships, fully safe and licensed by the school.",
  primary: "Request a demo",
  secondary: "See how it works",
  // honest market context, clearly framed as the world IB students live in, not VIA traction
  contextLabel: "The world your students already belong to",
  stats: [
    { value: "450K", label: "active IB Diploma students worldwide" },
    { value: "3,800", label: "IB Diploma schools across the globe" },
    { value: "150+", label: "countries running the programme" },
  ],
} as const;

/* The problem (the isolation paradox, the emotional spine). */
export const problem = {
  eyebrow: "The isolation paradox",
  heading: "A global programme, lived alone.",
  body: "The IB is one of the most international qualifications in the world. Yet almost every student lives it inside one building, in one city, with few peers who share their exact subjects. The result is a heavy, lonely two years inside a programme that is global on paper and local in practice.",
  points: [
    {
      title: "A heavy curriculum, few peers",
      body: "The workload is intense and the subject mixes are narrow, so students grind through it largely on their own.",
    },
    {
      title: "Global on paper, local in practice",
      body: "Students belong to a worldwide programme but rarely meet a single IB peer in another country.",
    },
    {
      title: "Wellbeing under real pressure",
      body: "Schools are judged on student wellbeing and international-mindedness, with few honest tools to move either.",
    },
  ],
} as const;

/* How it works: Connect, Collaborate, Belong. */
export const how = {
  eyebrow: "How it works",
  heading: "One private network for your whole cohort.",
  sub: "A school licenses VIA, every student is verified, and the cohort joins one safe global community built around three things.",
  pillars: [
    {
      key: "Connect",
      title: "Connect with the right peers",
      body: "Cross-border matching pairs students on subjects, language, and time zone. Never anonymous strangers, always verified IB peers.",
    },
    {
      key: "Collaborate",
      title: "Collaborate across time zones",
      body: "Subject spaces, study rooms, and shared work let students teach and learn from each other, wherever they are.",
    },
    {
      key: "Belong",
      title: "Belong to something bigger",
      body: "Debates, shared interests, and real friendships turn a lonely two years into a network that lasts beyond graduation.",
    },
  ],
  surfaces: ["Home feed", "Subject spaces", "Study rooms", "Debates", "International Match"],
} as const;

/* The wedge: cross-border matching, shown as an A to B match. */
export const matching = {
  eyebrow: "The matching engine",
  heading: "The one thing no one else attempts.",
  body: "Academic matching is the utility that gets students in. Cross-border social matching is what makes them stay. VIA pairs students where their needs line up, in both directions.",
  factors: [
    { title: "Subject fit", body: "Pair a student who is weak in a subject with one who is strong in it, both ways." },
    { title: "Language", body: "Match on a shared language, or deliberately pair for cross-language practice." },
    { title: "Time zone", body: "Favour overlapping hours, so study sessions actually happen." },
  ],
  a: { label: "Mateo in Ecuador", strong: "Economics", needs: "Physics", lang: "Spanish, English", tz: "GMT-5" },
  b: { label: "Aiko in Japan", strong: "Physics", needs: "Economics", lang: "Japanese, English", tz: "GMT+9" },
  matchOn: ["Complementary subjects", "Shared language: English", "A workable overlap window"],
  note: "Illustrative example",
} as const;

/* For schools: the buyer value. */
export const schools = {
  eyebrow: "For schools",
  heading: "A measurable outcome, not another teen app.",
  body: "Schools do not buy a social network. They license a safe, school-controlled programme that produces evidence of international-mindedness and wellbeing, with almost no teacher workload.",
  benefits: [
    {
      title: "Evidence for authorisation and marketing",
      body: "The International-Mindedness Index turns student activity into a dashboard you can show parents, inspectors, and the IB.",
    },
    {
      title: "Safe and school-controlled",
      body: "Every student is verified. Moderation, data protection, and oversight are built for minors from day one.",
    },
    {
      title: "Near-zero teacher workload",
      body: "The product is student-driven. It runs in the background of school life rather than adding to a teacher's plate.",
    },
    {
      title: "Differentiation that recruits families",
      body: "A genuine global community is something families notice, and something competing schools cannot easily match.",
    },
  ],
  // IMI dashboard sample, clearly illustrative
  imiLabel: "International-Mindedness Index",
  imiNote: "Sample dashboard",
  imiPillars: [
    { name: "Intercultural understanding", value: 78 },
    { name: "Global engagement", value: 64 },
    { name: "Multilingualism", value: 52 },
  ],
} as const;

/* What makes it different (the three-part wedge). */
export const different = {
  eyebrow: "What makes it different",
  heading: "Three things together that nothing else combines.",
  body: "Plenty of tools do one of these. VIA is the only one built on all three at once.",
  pillars: [
    {
      title: "Verified identity",
      body: "Real, school-confirmed students only. The safety the free, anonymous communities can never offer minors.",
    },
    {
      title: "Bought by the school",
      body: "Licensed through the channel schools already trust, with the budgets and procurement rails already in place.",
    },
    {
      title: "Cross-border matching",
      body: "Structured pairing across countries, the engine that turns a directory of students into a living network.",
    },
  ],
  closing:
    "Admin platforms have the school but no community. Free communities have students but no safety and no school. VIA is the verified, school-bought, cross-border network in the middle.",
} as const;

/* Founder story (Lazaro). */
export const story = {
  eyebrow: "Why we built it",
  quote:
    "I was an IB student in Cuenca, Ecuador, surrounded by a global programme yet completely alone inside it. No one nearby really understood the work. VIA is the network I wished I had.",
  attribution: "Lazaro",
  role: "Founder, VIA",
  body: "VIA started as one student's answer to his own isolation. That is still the point. Every decision, from verified identity to cross-border matching, exists so the next student never has to feel that alone again.",
} as const;

/* Closing CTA. */
export const cta = {
  heading: "Bring a connected cohort to your school.",
  body: "Pilot VIA with your IB students and see the engagement and the International-Mindedness Index for yourself.",
  primary: "Request a demo",
  note: "We will get back to you within two school days.",
} as const;

export const footer = {
  tagline: "Learn better. Together.",
  blurb: "The verified global community for IB students, licensed by schools.",
  columns: [
    {
      title: "Product",
      links: [
        { id: "how", label: "How it works" },
        { id: "different", label: "What makes it different" },
        { id: "schools", label: "For schools" },
      ],
    },
    {
      title: "Company",
      links: [
        { id: "why", label: "Why VIA" },
        { id: "story", label: "Our story" },
        { id: "contact", label: "Contact" },
      ],
    },
  ],
} as const;
