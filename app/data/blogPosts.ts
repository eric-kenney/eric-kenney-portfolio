export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'ai-replace-product-marketers',
    title: "AI Won't Replace Product Marketers. But It Will Replace a Lot of Product Marketing Work.",
    excerpt: 'The job was never the deck. It was deciding what the product means to a buyer, and holding that line across every surface. What\'s changing is how much of the week goes into turning that decision into artifacts.',
    category: 'AI',
    date: 'AUG 19, 2026',
    readTime: '8 MIN',
    content: `# AI Won't Replace Product Marketers. But It Will Replace a Lot of Product Marketing Work.

## The Real Question

The conversation about AI and product marketing usually goes to extremes. One side thinks AI will replace us entirely. The other says marketing is too strategic to automate. I think both arguments focus on the wrong question.

The job was never the deck. It was deciding what the product means to a buyer, and holding that line across every surface. What's changing is how much of the week goes into turning that decision into artifacts — and the honest answer is: most of it, and it's going away.

## Judgment vs. Production

Product marketing splits into two kinds of work:

- **Judgment work:** Deciding what's true about your product and what matters to buyers. This is hard. It requires domain knowledge, market research, and intuition. This doesn't get automated.

- **Production work:** Turning that judgment into launch pages, decks, one-pagers, sales battlecards, email sequences, website copy. This is time-consuming. This is exactly what AI is built for.

## What Changes

Right now, a marketer spends:
- Tuesday deciding positioning
- Wednesday through Friday writing and rewriting the deck
- The following week rewriting it for sales
- The following week rewriting it again for the website

AI flips that. You spend Tuesday on positioning. Wednesday morning, you have a deck, a battlecard, and webpage copy that all agree with each other because they came from one input.

What that frees up is time for the part that actually matters: deciding what's true.`
  },
  {
    id: '2',
    slug: 'position-product-crowded-market',
    title: 'How to Position a Product in a Crowded Market',
    excerpt: 'When every competitor claims the same benefits, positioning becomes your only leverage. Here\'s how to find what actually matters to your buyer.',
    category: 'Positioning',
    date: 'JUL 2026',
    readTime: '6 MIN',
    content: `# How to Position a Product in a Crowded Market

## The Problem

When every competitor claims the same benefits, positioning becomes your only leverage. You can't win on features—they're all using the same technology or have feature parity by month two.

Positioning is the difference between:
- "We're a CRM that integrates with everything"
- "We're built for teams that manage multiple customer relationships at once"

One is a feature. One is a position.

## Finding Your Position

Start by answering three questions:

### Who is your buyer, really?

Not "companies with 100+ employees." That's market size. Who *specifically* has the problem you solve?

Example: Not "SaaS companies" but "VP of Sales at series B SaaS companies who manage multiple sales motions."

### What problem do they have that nobody else is addressing?

This is where most positioning fails. You describe the problem everyone knows about. But there's usually a *secondary* problem that's more painful.

Example: Everyone knows contact centers are fragmented. But the real problem for SMBs is they don't need enterprise features—they need simplicity at their scale.

### Why should they believe you?

What's your unfair advantage? Why are you uniquely positioned to solve this?`
  },
  {
    id: '3',
    slug: 'battlecard-nobody-reads',
    title: 'The Battle Card Nobody Reads (And How to Fix It)',
    excerpt: 'Most battlecards are beautiful PDFs that never leave the inbox. The problem isn\'t the format—it\'s that they\'re built for you, not for your sales team.',
    category: 'GTM',
    date: 'JUN 2026',
    readTime: '7 MIN',
    content: `# The Battle Card Nobody Reads (And How to Fix It)

## Why Battlecards Fail

Most battlecards are beautiful PDFs that never leave the inbox. Marketers spend weeks perfecting them. Sales ignores them.

The problem isn't the format. It's that they're built for you, not for your sales team.

A typical battlecard has:
- Your positioning
- Competitive differentiation
- Proof points
- Objection handling

All of it is accurate. All of it is useless because it's organized the way *you* think, not the way a sales rep *needs* it.

## How Sales Actually Needs It

A sales rep doesn't need your positioning statement. They need:
- What's the single thing that's different about us?
- What do I say when they ask about [competitor]?
- What proof do I have that we're better?
- How do I handle the price objection?

That's it. Everything else is noise.

## The Fix

Rewrite your battlecard for the sales conversation, not for marketing credibility. Use questions as the structure:

- **What are we?**
- **What's different?**
- **Why should they care?**
- **What about [competitor]?**

Then under each one, write what a rep would actually say in a call.`
  },
  {
    id: '4',
    slug: 'launch-messaging-keeps-shifting',
    title: 'Why Your Launch Messaging Keeps Shifting',
    excerpt: 'It\'s not because your team lacks discipline. It\'s because you started without a source of truth. Here\'s how to fix that.',
    category: 'Messaging',
    date: 'MAY 2026',
    readTime: '5 MIN',
    content: `# Why Your Launch Messaging Keeps Shifting

## The Pattern

You nail your positioning in a strategy doc. Three weeks later, the website copy says something different. Two weeks after that, sales is pitching something else entirely.

By launch, nobody knows what the product actually means.

It's not because your team lacks discipline. It's because you started without a source of truth.

## What Happens

Week 1: Positioning doc says "We're the platform for distributed teams"

Week 2: Marketing starts the website. Copy says "We solve remote work complexity"

Week 3: Sales gets involved. They start saying "We integrate with your existing stack"

Week 4: PR says "We're redefining how teams collaborate"

Now you have four different messages, all written by smart people trying to do their job.

## The Fix

Create one source of truth. Not a positioning doc. Not a strategy. A **messaging framework** that everyone pulls from.

It should contain:
- Your core positioning (one sentence)
- The problem you solve (specific, not generic)
- Your value proposition
- How you're different
- Key proof points

Then everyone—sales, marketing, PR, product—uses that framework as their foundation and adapts it for their channel.

Same message. Different medium.`
  }
];

export const getBlogPostBySlug = (slug: string) => {
  return blogPosts.find(post => post.slug === slug);
};