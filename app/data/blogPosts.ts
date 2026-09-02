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
    content: `The conversation about AI and product marketing usually goes to extremes. One side thinks AI will replace product marketers entirely. The other says product marketing is too strategic, too creative, or too dependent on human judgment to automate.

I think both arguments focus on the wrong question.

The job was never the deck. It was deciding what the product means to a buyer and holding that line across every surface. What's changing is how much of the week goes into turning that decision into artifacts. And the honest answer is: a lot of it.

## Will AI Replace Product Marketers?

No. But AI will replace a significant amount of the work product marketers do today. That's an important distinction.

Product marketing has accumulated an enormous production burden. We write messaging documents, build presentations, create battlecards, draft webpages, summarize research, prepare launch materials, adapt content for different audiences, and turn the same strategic decisions into dozens of different assets.

Those things are part of the job. But they aren't the reason the job exists.

Product marketing exists to understand markets and buyers, make strategic choices about how a product should compete, and translate those choices into a go-to-market motion that works.

AI is getting very good at the translation part. The decision-making part is a different story.`
  },
  {
    id: '2',
    slug: 'ai-what-to-automate-what-not',
    title: 'AI for Product Marketing: What to Automate, What Not to Automate',
    excerpt: 'AI can do a surprising amount of product marketing work. The question isn\'t whether it can—it\'s whether it should.',
    category: 'AI',
    content: `AI can do a surprising amount of product marketing work now.

It can analyze customer interviews, summarize competitors, draft positioning, write a launch page, create a sales battlecard, build an email sequence, and turn all of it into a presentation before you've finished your second cup of coffee.

The question isn't whether AI *can* do these things. It's whether it *should*.

I've been experimenting with AI across product marketing workflows, including building competitive research agents, ROI calculators, and a system that turns product and market inputs into launch assets. The more I've built, the more I've come back to one rule:

**Automate the work that follows a decision. Use AI to assist the work that informs a decision. Keep humans accountable for making the decision.**

That's the difference between using AI to make product marketing better and simply using it to make more marketing.

## What Should Product Marketers Automate With AI?

The best candidates for automation are tasks where the important strategic decisions have already been made.

Think about a sales battlecard. If you've already decided who the buyer is, which problem matters, how you're positioned, what differentiates you, and how you want to compete, creating the battlecard is mostly translation.

Positioning requires choosing a customer for whom your product is especially relevant. What kind of company? Which buyer? In what situation? What has happened that makes them care about this now?

Good answers require customer conversations, market knowledge, competitive context, data, experience, and sometimes intuition.

**Automate production. Accelerate analysis. Own the judgment.**`
  },
  {
    id: '3',
    slug: 'how-i-built-ai-product-marketing-launch-system',
    title: 'How I Built an AI Product Marketing Launch System',
    excerpt: 'I\'m a product marketer, not a software engineer. But I built a working system that turns product strategy into go-to-market assets. Here\'s what I learned.',
    category: 'AI',
    content: `I'm a product marketer, not a software engineer.

But I wanted to test an idea.

Product marketers spend a lot of time making strategic decisions about a launch: who the buyer is, which problem matters, how the product should be positioned, what makes it different, and how we're going to take it to market.

Then we spend even more time translating those decisions into things. Messaging frameworks. Battlecards. Product webpages. Sales decks. Enablement. Launch content.

What if we could make the strategic decisions once and build a system that carried them through the production layer?

So I opened Claude Code and started building.

The result is a working AI product marketing system that takes approved launch strategy and turns it into multiple go-to-market assets built from the same source of truth.

## I Wanted to Automate Production, Not Product Marketing

The idea came from a distinction I've been thinking about for a while.

Product marketing has two broad kinds of work. There's **judgment work**: understanding the buyer, interpreting the market, choosing positioning, deciding what matters, evaluating differentiation, making pricing and packaging decisions, and figuring out how a product should go to market.

Then there's **production work**: turning those decisions into the dozens of artifacts required to actually launch and sell something.

AI is getting very good at the second category. I don't want it owning the first.

That became the basic design principle for the system:

**Humans make the strategic decisions. AI propagates those decisions through the production layer. Humans review the result.**

Building an AI system for product marketing while *also* demonstrating that AI should automate production but not strategy was the deepest lesson. We proved it by doing it — the system takes strategic inputs and propagates them, but doesn't make the strategic decisions. That's the thesis, and the build embodied it.

See my [Github repo](https://github.com/eric-kenney/ai-marketing-lab) and [try the AI product marketing launch system](/system) for yourself.`
  },
  {
    id: '4',
    slug: 'go-to-market-strategy-7-decisions',
    title: 'Go-to-Market Strategy: The 7 Decisions Every GTM Plan Needs',
    excerpt: 'Most go-to-market strategies aren\'t strategies. They\'re launch plans filled with dates, deliverables, and tasks. Until you\'ve made seven core decisions, you don\'t have a strategy—you have a project plan.',
    category: 'GTM',
    content: `Most go-to-market strategies aren't strategies. They're launch plans filled with dates, deliverables, channels, campaigns, sales enablement, and a long list of things everyone needs to get done before launch day.

All of that matters, but none of it answers the most important questions. Who are we trying to win? What problem are we solving for them? Why should they choose us? What exactly are we asking them to buy? How will we sell it?

Those are strategic decisions. Until you've made them, you don't have a go-to-market strategy. You have a project plan.

## What Is a Go-to-Market Strategy?

A go-to-market strategy is the set of decisions that determines how a product will compete, reach its target customer, and generate revenue. For most B2B products, I think it comes down to seven decisions:

Who. Problem. Position. Offer. Motion. Reach. Measure.

Get those right and the launch plan becomes much easier to build. Get them wrong and perfect execution just gets you to the wrong destination faster.

## 1. Who Are We Trying to Win?

"Enterprise companies" isn't an answer. Neither is "IT leaders." A useful target defines the companies, buyers, and situations where you have the strongest reason to win.

Who has the problem? Who feels it most acutely? Who has the authority and budget to solve it? What makes this customer more attractive than everyone else who could theoretically use the product?

One of the easiest ways to weaken a launch is to make the target market so broad that nobody has to make a choice. Good GTM strategy requires deciding not only who you're going after, but who you're not.

## 2. What Problem Are We Solving?

Products have features. Buyers have problems. Your GTM strategy needs to connect the two.

The important question isn't "What does our product do?" It's what problem is important enough that this buyer will change what they're doing today?

That's a much higher bar. A product can solve ten problems, but that doesn't mean all ten deserve equal weight in the go-to-market strategy. Choose the problem that creates urgency and gives the product a reason to exist.`
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

The other benefits don't disappear. They become supporting evidence instead of competing for attention.`
  }
];

export const getBlogPostBySlug = (slug: string) => {
  return blogPosts.find(post => post.slug === slug);
};