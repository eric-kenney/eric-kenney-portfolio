export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'ai-replace-product-marketers',
    title: "AI Won't Replace Product Marketers. But It Will Replace a Lot of Product Marketing Work.",
    excerpt: 'AI is making the production side of product marketing dramatically cheaper. That makes the judgment behind it more valuable.',
    category: 'AI',
    content: `The conversation about AI and product marketing usually goes to extremes...`
  },
  {
    id: '2',
    slug: 'ai-what-to-automate-what-not',
    title: 'AI for Product Marketing: What to Automate, What Not to Automate',
    excerpt: 'AI can do a surprising amount of product marketing work. The question isn\'t whether it can—it\'s whether it should.',
    category: 'AI',
    content: `AI can do a surprising amount of product marketing work now...`
  },
  {
    id: '3',
    slug: 'how-i-built-ai-product-marketing-launch-system',
    title: 'How I Built an AI Product Marketing Launch System',
    excerpt: 'I\'m a product marketer, not a software engineer. But I built a working system that turns product strategy into go-to-market assets. Here\'s what I learned.',
    category: 'AI',
    content: `I'm a product marketer, not a software engineer...`
  },
  {
    id: '4',
    slug: 'go-to-market-strategy-7-decisions',
    title: 'Go-to-Market Strategy: The 7 Decisions Every GTM Plan Needs',
    excerpt: 'Most go-to-market strategies aren\'t strategies. They\'re launch plans filled with dates, deliverables, and tasks. Until you\'ve made seven core decisions, you don\'t have a strategy—you have a project plan.',
    category: 'GTM',
    content: `Most go-to-market strategies aren't strategies...`
  },
  {
    id: '5',
    slug: 'positioning-is-a-decision-not-messaging-exercise',
    title: 'Positioning Is a Decision, Not a Messaging Exercise',
    excerpt: 'A lot of positioning work starts too late. Companies try to solve positioning problems by rewriting copy. The problem usually isn\'t the words—it\'s that the strategic decisions haven\'t been made.',
    category: 'Positioning',
    content: `A lot of positioning work starts too late.

Someone opens a document and starts writing value propositions. The team debates whether a headline is punchy enough. Someone wants to change "simplify" to "streamline." Three meetings later, everyone is still arguing about words.

The problem usually isn't the words.

Positioning is a set of strategic decisions about who your product is for, what problem you want to own, what you're competing against, and why a buyer should choose you.

Make those decisions first. The messaging gets a lot easier.

## Positioning Isn't What You Say

Positioning and messaging are related, but they aren't the same thing.

**Positioning determines what you want the market to understand. Messaging determines how you communicate it.**

That's an important distinction because companies often try to solve positioning problems by rewriting copy.

If the team can't agree on the homepage headline, the problem might not be the headline. Sales, Product, and Marketing may have fundamentally different ideas about who the product is for or why someone should buy it.

No copywriter can solve that.

Before you write the messaging, I think you need to make five decisions.

## 1. Who Is This For?

The broader the answer, the weaker the positioning usually gets.

"Our product is for businesses that want to improve productivity" gives you almost nothing to work with. Neither does "enterprise IT leaders."

Good positioning requires choosing a customer for whom your product is especially relevant.

What kind of company? Which buyer? In what situation? What has happened that makes them care about this now?

You may eventually sell to a much larger market. That doesn't mean your positioning has to speak equally to everyone in it.

Trying to be relevant to everyone is one of the fastest ways to sound relevant to no one.

## 2. What Problem Do We Want to Own?

Most products solve more than one problem.

That's where positioning gets difficult.

Your product may save time, reduce costs, improve visibility, automate manual work, reduce risk, and make employees happier. Put all six on the homepage and you've made the buyer do the prioritization for you.

Positioning requires choosing what leads.

Which problem is painful enough to create action? Which one gives you the strongest connection between what the buyer needs and what your product does particularly well?

The other benefits don't disappear. They become supporting evidence instead of competing for attention.

## 3. What Are We Really Competing Against?

The obvious answer is usually a list of competitors.

That's often incomplete.

A buyer might be comparing you with another software company. They might also be comparing you with a spreadsheet, an internal process, a cheaper tool they already own, building something themselves, or doing nothing.

Those alternatives matter because positioning only makes sense relative to what the buyer would otherwise do.

If the real competitor is the status quo, telling customers you're easier to use than Competitor X may not matter. You first have to convince them that changing anything is worth the effort.

You can't establish meaningful differentiation until you know what you're differentiating from.

## 4. Why Should They Choose Us?

This is where positioning often turns into a feature comparison.

We have AI. They don't.

We have 200 integrations. They have 150.

We're easier to use.

We're more secure.

Maybe those things matter. Maybe they don't.

Differentiation only matters when it connects something you do differently to something the buyer values.

The question isn't simply, "What's unique about our product?"

It's:

**What can we credibly claim that gives this buyer a meaningful reason to choose us over the alternatives?**

That word "credibly" matters. If your positioning depends on a claim the product can't consistently deliver, you haven't created differentiation. You've created a future credibility problem.

## 5. What Are We Willing Not to Say?

This may be the hardest decision.

Companies want every feature represented. Every stakeholder wants their priority included. Every audience seems too valuable to leave out.

Eventually the positioning becomes a collection of compromises.

Strong positioning requires subtraction.

Choosing one problem means another problem gets less emphasis. Prioritizing one buyer means another buyer isn't at the center of the story. Leading with one differentiator means five features don't make the headline.

That's not a failure of the positioning process.

That's the positioning process.

If nothing was excluded, you probably didn't make many decisions.

## Then You Can Write the Messaging

Once those five choices are clear, messaging becomes much more straightforward.

You know who you're talking to. You know the problem you're leading with. You know what the buyer might do instead. You know why your approach is different. You know what you're deliberately not trying to communicate.

Now you can decide how to express it.

That's where headlines, value propositions, messaging pillars, proof points, sales talk tracks, and product narratives come in.

There will still be debate. Words matter.

But now you're debating **how to communicate the strategy**, not using a copywriting exercise to figure out what the strategy is.

## Make the Decisions Before You Open the Document

When positioning gets stuck, I'd spend less time asking whether the messaging is good and more time asking whether the underlying decisions have actually been made.

Can everyone answer these five questions the same way?

**Who is this for?**

**What problem do we want to own?**

**What are we really competing against?**

**Why should they choose us?**

**What are we willing not to say?**

If the answers aren't clear, another round of copy probably won't help.

Make the decisions first.

Then write the words.`
  }
];

export const getBlogPostBySlug = (slug: string) => {
  return blogPosts.find(post => post.slug === slug);
};