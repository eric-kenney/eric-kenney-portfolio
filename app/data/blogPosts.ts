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

AI is getting very good at the translation part. The decision-making part is a different story.

## Product Marketing Is Really Two Kinds of Work

Most product marketing work falls into two broad categories: **judgment and production**.

### Judgment work

Judgment is deciding what's true about your product, your market, and your buyer, then deciding what matters.

Who should we actually sell this to? Which problem is painful enough that someone will pay to solve it? What makes our product meaningfully different? Which three benefits matter and which seven should we leave out? Is the problem weak positioning or a weak product? Should we lead with the AI capability or the business outcome it creates? Should this feature be included, packaged separately, or used to move customers into a higher tier?

These aren't writing problems. They're decision problems.

Good answers require customer conversations, market knowledge, competitive context, data, experience, and sometimes intuition. The inputs are often incomplete or contradictory. Two smart people can look at the same evidence and reach different conclusions. That's where product marketers create value.

### Production work

Production begins after those decisions have been made.

Turn the positioning into a messaging framework. Turn the messaging framework into a launch deck. Turn the launch deck into a sales battlecard. Turn the battlecard into enablement. Turn the messaging into a webpage. Turn the webpage into emails. Then rewrite half of it for a different segment, persona, channel, or sales motion.

This work takes an enormous amount of time. It also happens to be exactly the kind of work generative AI is becoming very good at. That's the part of product marketing I expect to change dramatically.

## What Product Marketing Work Will AI Automate?

The obvious answer is writing, but I think that's too narrow.

AI will increasingly handle entire production workflows.

Give an AI system an approved positioning and messaging framework and it can create a first draft of a sales battlecard. It can adapt the same messaging into webpage copy. It can create persona-specific versions. It can turn launch strategy into enablement materials. It can summarize competitive changes and identify what changed since the last review.

The important development isn't that AI can write a paragraph. We've had that for a while.

The important development is that **AI can take one strategic decision and propagate it across an entire go-to-market system.**

That's where the economics of product marketing start to change.

Consider a typical launch. A product marketer spends Tuesday finalizing the positioning. Wednesday through Friday goes into writing and rewriting the launch deck. The following week, that material gets adapted for sales. Then it gets rewritten for the website. Then someone creates a battlecard. Then another team needs an email. Then sales wants a version for a specific industry.

Each asset becomes another production cycle. Worse, each rewrite creates an opportunity for the original strategy to drift.

Now imagine a different workflow. The product marketer spends Tuesday getting the positioning right. On Wednesday morning, the approved strategy becomes the source of truth for a messaging framework, sales battlecard, webpage, enablement deck, and launch content.

They don't have to be published untouched. They probably shouldn't be. But the first 80 percent of the production work is done, and every asset starts from the same strategic foundation.

The marketer's job shifts from **creating every artifact** to **making the decisions that govern the artifacts**.

That's a much bigger change than using ChatGPT to write faster.

## What Shouldn't AI Own?

There's a temptation to look at everything AI can produce and assume it can therefore make the decisions behind that production. I wouldn't make that leap.

AI can analyze customer interviews. It shouldn't automatically decide which customer problem your company should build its strategy around.

AI can summarize competitors. It shouldn't decide which competitor matters most or where your company should position against them.

AI can generate five positioning options in seconds. It doesn't know which one your organization can actually deliver on.

AI can recommend pricing structures. It doesn't sit in the room with Product, Finance, Sales, and customers while everyone argues about the tradeoffs.

And AI can create a very convincing explanation for a bad strategic decision. That's the danger.

If the source strategy is generic, poorly researched, or simply wrong, AI doesn't fix the problem. It scales it. A weak messaging framework used to result in a weak messaging document. Now it can result in a weak messaging document, webpage, sales deck, battlecard, email sequence, campaign, and ten persona variations before lunch.

**AI makes good judgment more scalable. It also makes bad judgment more scalable.**

That makes the quality of the upstream decision more important, not less.

## What an AI-Native Product Marketing Workflow Looks Like

I've been experimenting with this idea by building AI systems for product marketing. One of them is a launch system that starts with a relatively small set of strategic inputs about the product, buyer, market, positioning, and go-to-market strategy.

That becomes the source of truth.

From there, the system can generate downstream assets such as a messaging framework, sales battlecard, and product webpage while maintaining the same positioning across each one.

The interesting part isn't that AI can write a webpage. Anyone can open an AI tool and ask it to write a webpage.

The interesting part is the architecture.

**Make the strategic decisions once. Make them available to the system. Then let AI handle more of the repetitive work required to carry those decisions across the go-to-market motion.**

That is a very different model from asking a chatbot to create one asset at a time. And it's where I think product marketing is headed.

## What This Means for Product Marketing Teams

If this happens at scale, the implications go beyond individual productivity.

Today, PMM capacity is often constrained by production. A team might know it needs better competitive intelligence, more customer research, stronger segmentation, deeper win/loss analysis, or a rethink of its positioning. But there's a launch coming, sales needs a deck, the website needs updating, and somebody has to finish the battlecard.

Production wins because production has deadlines.

AI changes that equation.

If a team can remove a meaningful portion of the production burden, the question becomes what it does with the capacity it gets back.

The bad answer is: **produce even more stuff.** More decks. More content. More versions. More assets nobody asked for.

The better answer is to move product marketers upstream. Spend more time with customers. Spend more time understanding why deals are won and lost. Spend more time with Product shaping what gets built and how it gets packaged. Spend more time identifying market shifts before they show up in a quarterly pipeline review. Spend more time making the positioning better before turning it into 20 assets.

AI should not give product marketing organizations permission to become content factories at greater scale. It should give them permission to stop being content factories.

## The Product Marketer AI Makes More Valuable

This also changes what makes someone good at product marketing.

For years, part of being a strong PMM has been the ability to turn strategy into polished output quickly. That's still useful, but I don't think it will remain nearly as valuable.

The scarce skill will move upstream.

Can you identify the real buyer problem? Can you tell when the market is giving you evidence that your positioning isn't working? Can you separate meaningful differentiation from feature noise? Can you turn customer evidence into a point of view? Can you make a decision when the data is incomplete? Can you persuade Product, Sales, Finance, and executives to align around that decision? Can you recognize when the AI output is confidently wrong?

Those are much harder capabilities to automate.

I also don't think the future belongs to whoever becomes the best prompt engineer on the marketing team. Prompting will matter less as AI systems become better at understanding context and workflows become increasingly automated.

Knowing what question to ask is useful. **Knowing whether the answer makes sense is more valuable.**

## Product Marketing After the Production Bottleneck

For most of product marketing's history, there has been a significant cost between deciding what to say and actually getting that message into the market. Someone had to create everything.

That cost is collapsing.

I don't think that makes product marketing less important. I think it exposes which parts of product marketing were valuable all along.

The job was never the deck. It wasn't the battlecard, the launch page, or the perfectly formatted messaging framework either. Those were outputs of the job.

The job is understanding the market, making the right strategic choices, and ensuring those choices survive the trip from product strategy to what a buyer actually sees.

AI is stripping away a lot of the work we've confused with product marketing.

When producing the deck takes minutes instead of days, the value of the marketer isn't how quickly they can make the deck. It's whether they made the right decision about what should go in it.

**The production work gets cheaper. The judgment gets more valuable.**`
  },
  {
    id: '2',
    slug: 'ai-what-to-automate-what-not',
    title: 'AI Product Marketing Framework: What to Automate, Assist, and Own',
    excerpt: 'AI is already changing product marketing. The question isn\'t whether product marketers should use it. It\'s where.',
    category: 'AI',
    content: `AI is already changing product marketing. The question isn't whether product marketers should use it. It's where.

Some product marketing work should be almost entirely automated. Some should use AI to accelerate research and analysis. And some should remain firmly owned by the product marketer.

I use a simple **AI product marketing framework** to draw those boundaries:

**Automate.** Production work that follows a strategic decision.
**Assist.** Work where AI can accelerate research and analysis, but a product marketer still needs to interpret what it means.
**Own.** Decisions that require strategic judgment, tradeoffs, and accountability.

The goal isn't to use AI everywhere. It's to use AI where it creates leverage without outsourcing the judgment that makes product marketing valuable.

## What Is an AI Product Marketing Framework?

An AI product marketing framework defines where AI should play a role across research, positioning, messaging, launches, sales enablement, competitive intelligence, and optimization.

For every workflow, the framework asks a simple question: Should AI produce the work, help inform the decision, or make the decision?

AI can create enormous leverage in the first two. The third is where product marketers need to be careful.

Here's how I think about some common PMM work:

| Product Marketing Work | AI Role | PMM Role |
|---|---|---|
| Customer research synthesis | Assist | Interpret |
| Competitive intelligence | Assist | Determine implications |
| Win/loss analysis | Assist | Diagnose |
| Sales conversation analysis | Assist | Interpret |
| Positioning | Own | Decide |
| Messaging strategy | Own | Decide |
| Pricing and packaging | Assist | Decide |
| Launch strategy | Own | Decide |
| Asset creation | Automate | Review |
| Sales enablement production | Automate | Review |
| Content adaptation | Automate | Review |
| Post-launch analysis | Assist | Decide what changes |

The boundaries aren't absolute. But the principle is useful.

## Automate: Work That Follows the Decision

This is where AI can remove a lot of production work from a product marketer's plate.

Once positioning and messaging are approved, AI can turn that strategy into first drafts of webpages, sales decks, battlecards, FAQs, campaign briefs, enablement materials, emails, and other launch assets.

It can also adapt approved messaging for different audiences, formats, and channels. A core value proposition can become a sales talk track, an executive message, a campaign concept, or webpage copy without starting from scratch each time.

The important phrase is **once the decision has been made**. AI is strongest when the strategic context already exists and the task is to transform, adapt, summarize, or produce something from it. That's production work. Automate as much of it as you responsibly can.

## Assist: Work That Informs the Decision

This may be where AI creates the most interesting leverage for product marketers.

PMMs consume enormous amounts of information: customer interviews, sales conversations, CRM data, win/loss research, support tickets, product feedback, analyst research, competitor websites, usage data, and market research.

Historically, the limitation has often been our ability to process all of it.

AI can analyze large volumes of customer conversations for recurring problems. It can identify patterns across lost deals, monitor competitors for meaningful changes, cluster customer feedback, surface recurring objections, and compare themes across segments.

Instead of manually reviewing 20 sales calls, conversation intelligence can help analyze thousands. Instead of periodically checking a competitor's website, AI can continuously identify changes that might matter.

But finding a pattern isn't the same as deciding what the pattern means.

Suppose AI finds that implementation complexity appears frequently in lost enterprise deals. That's useful evidence. A product marketer still has to determine whether the underlying issue is the product, positioning, sales process, competitive environment, target segment, or something else.

Use AI to make the evidence easier to see and the patterns easier to find. Keep the interpretation human.

## Own: Work That Requires Judgment

AI can generate a positioning statement in seconds. That doesn't mean AI should decide your positioning.

Positioning requires choosing which customer matters most, which problem you want to own, what you're competing against, where your differentiation is credible, and what you're deliberately going to leave out. Those are business decisions.

The same applies to messaging strategy, segmentation, launch strategy, major pricing and packaging choices, and the fundamental decisions behind a go-to-market motion.

AI can absolutely participate in that work. Ask it to challenge an assumption. Have it develop alternative hypotheses. Use it to find contradictory evidence. Ask it to pressure-test your reasoning.

But there's a difference between using AI **inside the decision process** and letting AI **own the decision**.

A product marketer needs to weigh conflicting evidence, understand the business context, make the tradeoff, and be accountable for what happens next. That's judgment work.

## What This Looks Like Across a Product Launch

The role of AI should change as work moves from insight to strategy to execution.

During **customer and market research**, AI assists. It synthesizes information, analyzes conversations, and helps identify patterns.

During **positioning, messaging, and GTM strategy**, the PMM owns the decisions. AI can surface evidence and challenge assumptions, but the marketer decides what the company will do.

During **launch production**, AI can automate much more. Once the strategy is approved, it can help generate messaging frameworks, webpages, battlecards, sales enablement, campaign briefs, and other assets from the same strategic source of truth.

After launch, AI moves back into an **assist** role. It can analyze sales conversations, customer feedback, adoption, competitive activity, and performance data to identify what's happening. Then the product marketer decides what needs to change.

The AI-native product marketing workflow becomes:

**AI assists → PMM decides → AI produces → PMM approves → AI analyzes → PMM decides again.**

## AI Needs a Source of Truth

There's one requirement underneath this entire AI product marketing framework: the system needs to know what it's allowed to believe.

Ask AI to create a battlecard without approved positioning and it may create its own differentiation. Ask it to write a webpage without clear product evidence and it may turn an implication into a claim. Ask it to create messaging without a defined buyer and it may quietly choose one for you.

The output can look excellent while containing strategic decisions nobody actually made.

That's why AI-native product marketing requires a strong source of truth. Approved positioning should be clear. Messaging should be structured. Product capabilities and claims should be grounded in evidence. Customer insights should be distinguishable from assumptions.

The stronger that strategic context becomes, the more production work AI can safely handle.

**The first job of an AI product marketing system isn't generating content. It's knowing what it's allowed to believe.**

## "Human in the Loop" Isn't Specific Enough

Most discussions about using AI in product marketing eventually say there should be a human in the loop. That's true, but it doesn't tell us much.

Where is the human? If AI researches the market, decides the positioning, writes the messaging, generates the assets, and then asks a PMM to approve the final webpage, there's technically a human in the loop. But the most important decisions have already been made.

The better question is **where human judgment belongs in the workflow**.

For product marketing, I'd put it around interpretation, decisions, and approval. AI can help find the signal and produce from the decision. The PMM owns what the signal means, what the business should do about it, and whether the resulting work is ready for the market.

That's a much more useful boundary than simply requiring human review at the end.

## AI Should Give PMMs More Time to Be PMMs

The promise of AI for product marketing isn't that we can create ten times as many assets. Nobody needs ten times as many battlecards.

The opportunity is to spend less time manually processing information and producing repetitive deliverables, and more time understanding customers, shaping strategy, working with Product and Sales, making better decisions, and measuring whether those decisions worked.

That's what **Automate, Assist, Own** is ultimately designed to do.

For every product marketing workflow, ask three questions:

- Can AI automate this because the strategic decision has already been made?
- Can AI assist by finding patterns, synthesizing information, or accelerating analysis?
- Does this require a decision that a product marketer should own?

Use AI aggressively in the first two categories. Protect the third.

As AI makes production cheaper and analysis faster, the quality of the decisions behind that work becomes more important, not less.`
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

The result is a working AI product marketing system that takes approved launch strategy and turns it into multiple go-to-market assets built from the same source of truth. It then independently checks those assets against the original strategy before a human approves them.

The application works. The code is public on GitHub. But what I learned building it turned out to be more interesting than the application itself.

## I Wanted to Automate Production, Not Product Marketing

The idea came from a distinction I've been thinking about for a while.

Product marketing has two broad kinds of work. There's **judgment work**: understanding the buyer, interpreting the market, choosing positioning, deciding what matters, evaluating differentiation, making pricing and packaging decisions, and figuring out how a product should go to market.

Then there's **production work**: turning those decisions into the dozens of artifacts required to actually launch and sell something.

AI is getting very good at the second category. I don't want it owning the first.

That became the basic design principle for the system:

**Humans make the strategic decisions. AI propagates those decisions through the production layer. Humans review the result.**

That sounds simple. Building it forced me to think much harder about what it actually means.

## The Hardest Problem Wasn't the Code

The obvious way to build an AI marketing tool is to start with the output. Ask AI to write a sales battlecard for this product, or create a product webpage, or build a messaging framework.

The model will happily do all three. The problem is that you've quietly delegated a lot more than writing.

If the model doesn't know exactly who the buyer is, it has to infer one. If the problem isn't clearly defined, it has to decide what matters. If the differentiation isn't established, it has to invent a reason the product is different. If the evidence isn't provided, it can turn something plausible into something that sounds like a fact.

You can get an impressive-looking output that contains strategic decisions nobody actually made.

That led to what became the most important principle in the project:

**The first job of an AI product marketing system isn't generating content. It's knowing what it's allowed to believe.**

## Strategy Has to Be the Source of Truth

The system starts with three structured inputs:

**Product Brief** - What the product is, what it does, who it's for, and the relevant product facts.

**Launch Strategy** - The buyer, problem, positioning, differentiation, competitive context, proof, and strategic choices behind the launch.

**Launch Plan** - How the product will go to market, including the audiences, motion, priorities, and execution plan.

Those inputs become a shared launch context. From there, the system can generate three different deliverables:

**Messaging Framework** - Positioning, messaging pillars, audience-specific messaging, differentiation, message hierarchy, claims, and guardrails.

**Sales Battlecard** - Discovery questions, talk tracks, objections, competitive positioning, qualification guidance, proof points, and seller guardrails.

**Product Webpage** - The hero, problem narrative, value proposition, benefits, product experience, differentiation, audience messaging, enterprise story, and calls to action.

The important part isn't that AI can create these three things. It can.

The important part is that all three begin with the same approved strategy.

## One Strategy. Every Asset.

I could have built three separate generators. One prompt creates a messaging framework. Another creates a battlecard. A third creates a webpage. That would have been easier.

It also would have recreated one of the problems I was trying to solve. If each asset starts independently, each model invocation has another opportunity to reinterpret the strategy. The messaging framework might emphasize one buyer problem. The battlecard could emphasize another. The webpage could decide a particular feature is the differentiator.

Everything might sound good individually while telling three subtly different stories. That's already a problem in human-built go-to-market organizations. The messaging deck says one thing. Sales has another version. The website has evolved into something else. Demand generation emphasizes whichever benefit performed best in the last campaign.

I didn't want AI to accelerate message drift. I wanted it to reduce it.

So instead of treating every asset as a new creative exercise, the architecture separates three things:

**Strategy defines what is true.**

**Shared product marketing standards define how the system should reason and write.**

**Asset-specific instructions define what needs to be produced.**

That means a new deliverable can eventually be added without reinventing the strategy underneath it. One strategy. Every asset.

## Generation Was Only Half the Problem

Then I ran into another issue. A generated asset can look excellent and still be wrong.

This may be one of the most dangerous things about using AI for product marketing. Bad output isn't always obviously bad. The model can take a narrowly supported product claim and make it broader. It can introduce customer behavior that sounds completely reasonable but isn't supported by research. It can turn an implication into a fact.

And it can do all of that in polished, confident language.

So I added another layer to the system: independent validation. After an asset is generated, a separate validator compares it against the original launch materials. It reviews the work for strategic alignment, factual accuracy, messaging consistency, and guardrail compliance.

If something doesn't match, it gets flagged for human review before it's shown as an option.

The system can generate very quickly. It can't make the strategic judgment about whether the output is worth using.

## An Unexpected Lesson

Building this taught me something I didn't expect: AI tools are changing who can build things.

Not because AI is doing the building for you (though it is), but because the distance between identifying a useful workflow and building a working version is collapsing.

I didn't become a software engineer. I used an AI coding assistant to think through architecture, write the implementation, debug issues, and deploy working code.

Historically, a product marketer with an idea for an internal tool had a few options. Put it in a spreadsheet. Build a rough no-code version. Write requirements and try to get engineering resources. Or don't build it.

AI changes that calculation. Increasingly, the distance between "I think this workflow should exist" and "here's a working version" is getting very short.

That has implications well beyond this particular project.

## Building It Was Messier Than the Architecture Diagram

The finished system looks clean in a diagram. Building it wasn't.

Some of the lessons were technical. A seemingly simple interaction took multiple approaches before the simplest architecture won. Dynamic routing that looked straightforward introduced constraints I hadn't anticipated. Deploying working code surfaced problems that didn't appear locally.

But the broader lesson was familiar from product work:

**Shipping reveals things planning doesn't.**

It was tempting to keep perfecting pieces locally. Putting the work into a real environment forced actual decisions. Does this workflow make sense? Is this output useful? What happens when the model doesn't have enough information? Where does the user need feedback? What should happen when validation fails?

Those aren't hypothetical questions once the thing actually works.

## Five Things Building It Taught Me

### 1. Context matters more than clever prompts

There's a lot of attention on prompt engineering. Prompts matter. But I came away thinking the quality and structure of the context matters more.

A brilliant prompt can't compensate for a system that doesn't know the buyer, positioning, evidence, or product truth. If you want better AI-generated product marketing, start by improving what the system knows.

### 2. Strategy has to become structured

A lot of product marketing strategy lives in people's heads, scattered documents, Slack threads, PowerPoint decks, and half-updated messaging frameworks.

Humans can navigate that mess because we carry context with us. Software can't reliably do that.

If we want AI systems to operationalize product marketing strategy, we need to become better at defining and structuring the strategy itself. What's approved? What's evidence? What's an assumption? What's positioning? Which claims can be made? Which claims can't?

That discipline makes the AI better. I suspect it makes the humans better too.

### 3. Consistency may be more valuable than speed

I started the project thinking primarily about productivity. Could AI turn hours or days of production into minutes? It can.

But consistency became just as interesting. A shared strategic context means every asset begins with the same product truth, buyer, positioning, and differentiation. Change the strategy and you have a system capable of carrying that change downstream.

That's a different value proposition from "AI writes faster." It's an operating model.

### 4. AI changes what product marketers can build

This was the lesson I didn't fully expect.

AI doesn't just give PMMs another way to create marketing content. It gives us a way to create tools. A product marketer can build a competitive intelligence agent. An interactive ROI calculator. A research synthesis workflow. A launch orchestration system. A custom sales utility.

The line between identifying a useful workflow and prototyping the workflow yourself is becoming much thinner.

I don't think every product marketer needs to become a software engineer. I do think the product marketers who can recognize a problem, design a solution, and use AI to build a working version are going to have an unusual amount of leverage.

### 5. AI output needs an approval architecture

"Human in the loop" is easy to say. Building the validator made the phrase more concrete for me.

Where exactly is the human? What are they reviewing? Against what source? What happens when something fails? What is AI allowed to change on its own?

A production system needs answers to those questions. Simply adding "have a human review it" to the end of an AI workflow isn't much of a control system. The workflow itself has to preserve the information the human needs to make the decision.

## What This Could Mean for Product Marketing

The first wave of AI in product marketing has mostly been about individual productivity. Write this faster. Summarize this. Create a first draft. Give me ten headlines. Useful, but incremental.

The more interesting opportunity is systems.

Today, a product marketer makes a strategic decision and humans carry that decision through a chain of artifacts, teams, and channels. Every step costs time. Every handoff introduces another opportunity for the strategy to change.

An AI-native model could look different:

**Human judgment → structured source of truth → AI production → independent validation → human approval**

The PMM spends more time making and reviewing the decisions. The system handles more of the work required to operationalize them. And AI is simultaneously making it easier for product marketers to build those systems themselves.

That's where I think this gets much bigger than writing faster.

## The System Can Scale the Decision

I started this project because I wanted to see how much of the product marketing production layer AI could automate.

I ended up learning something broader.

AI isn't just changing how product marketers produce the work. It's changing what product marketers are capable of building themselves. I didn't need to become a software engineer before I could turn an idea about product marketing into working software.

And the software didn't need to take over the strategy to make the workflow dramatically more efficient.

Humans make the decisions. AI helped me build the system. The system scales the decisions.

That's the model I'm increasingly convinced is coming to product marketing.

**The system can scale the decision. It can't make the decision worth scaling.**

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

That's a much higher bar. A product can solve ten problems, but that doesn't mean all ten deserve equal weight in the go-to-market strategy. Choose the problem that creates urgency and gives the product a reason to exist.

## 3. How Will We Position It?

Once you know the buyer and the problem, you have to decide what the product means to them. What category are you competing in? What alternatives will the buyer compare you against? Why are you meaningfully different? What do you want someone to remember after they forget the feature list?

Positioning isn't a tagline. It's the strategic choice that determines how the rest of the organization talks about the product. If you don't make that choice deliberately, every team will make it for you.

## 4. What Is the Offer?

A good product doesn't automatically create a good offer. You still have to decide exactly what the customer can buy, what's included, how it's packaged, what it costs, and what proof reduces the risk of buying it.

Is it a standalone product, an add-on, a bundle, or part of a larger platform? Does the packaging reinforce the value you're trying to communicate or make it harder for customers to understand?

I've seen changes to pricing and packaging create more business impact than another round of messaging ever could. GTM isn't just how you market the product. It's how you turn the product into something the market can buy.

## 5. What Is the Motion?

How will the product actually get sold? A $15 self-service product and a $250,000 enterprise platform don't need the same go-to-market motion.

Will customers discover and buy the product themselves? Will sales create and close demand? Will partners play a role? Is the strategy to land small and expand? Are you selling a new product to existing customers or acquiring an entirely new audience?

The answers determine what you need from marketing, sales, customer success, and the product itself. You can't separate GTM strategy from how the customer buys.

## 6. How Will We Reach the Buyer?

Now we can talk about channels: content, paid media, events, outbound sales, partners, product-led acquisition, customer marketing, analyst relations, and everything else available to the GTM team.

The mistake is starting here. "Let's run a webinar" isn't a strategy, and neither is "We're launching at our annual conference."

Channels should follow the decisions you've already made about the buyer, problem, position, offer, and motion. The question isn't which channels are available. It's which ones give you the best chance of reaching this buyer at the moment they're likely to care.

## 7. How Will We Know It's Working?

Launch day is not the finish line. Before you launch, decide what evidence would tell you the strategy is working or failing.

That might include pipeline, conversion, win rate, product adoption, time to value, expansion, retention, or revenue. The right metrics depend on the motion, but the more important question is what you'll do when the numbers aren't what you expected.

If adoption is high but conversion is low, that's a different problem from strong pipeline and a terrible win rate. Metrics shouldn't just report what happened. They should help you diagnose which GTM decision might have been wrong.

## Everything Else Is the Launch Plan

Once these seven decisions are made, you can build the machinery around them: the launch calendar, webpage, sales deck, battlecard, campaign, enablement, emails, and events.

Those things matter enormously. But they're execution of the strategy, not the strategy itself.

That distinction is becoming even more important as AI makes execution cheaper. AI can already help turn a defined strategy into messaging, webpages, battlecards, enablement, campaign briefs, and other launch assets. What it can't do nearly as reliably is decide which market you should pursue, which problem you should own, what tradeoffs you should make, or which GTM motion gives you the best chance of winning.

The bottleneck is moving upstream. That's why I think the best GTM teams will spend less time asking, "What do we need to create for launch?" and more time making sure they've answered seven harder questions:

Who are we trying to win? What problem are we solving? How will we position it? What are we selling? How will customers buy it? How will we reach them? How will we know if it's working?

Answer those first. Then build the launch plan.`
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
  },
  {
    id: '6',
    slug: 'how-to-know-if-your-product-messaging-is-working',
    title: 'How to Know If Your Product Messaging Is Working',
    excerpt: 'Product messaging is one of those things companies spend weeks creating and surprisingly little time measuring. The better way to evaluate it is to look for evidence across four things: understand, care, believe, act.',
    category: 'Messaging',
    content: `Product messaging is one of those things companies spend weeks creating and surprisingly little time measuring. The messaging framework gets approved. The website gets updated. Sales gets a new deck. Campaigns go live. Then everyone moves on.

But how do you know if the messaging is actually working?

You can't answer that with one metric. A higher click-through rate might mean you wrote a better headline. A higher win rate might have nothing to do with messaging at all.

I think the better way to evaluate product messaging is to look for evidence that it's doing four things:

**Understand. Care. Believe. Act.**

If buyers understand your message, care about what you're saying, believe your claims, and ultimately act differently because of it, your messaging is probably doing its job.

## 1. Understand: Do Buyers Get It?

Start with the most basic test. Can someone in your target market quickly explain what your product does, who it's for, and what problem it solves?

Not after a 30-minute demo or after a salesperson explains it. After encountering the message on its own.

This is where internal teams are particularly bad judges. We've spent months or years around the product, so we automatically fill in information that isn't actually in the message.

Put your messaging in front of people who match your target buyer and ask them to explain it back to you. Don't ask, "Was that clear?" Most people will say yes.

Ask:

- What do you think this product does?
- Who do you think it's for?
- What problem do you think it solves?

If their answers consistently differ from yours, you have a messaging problem.

## 2. Care: Does the Message Make the Problem Matter?

Clarity isn't enough. I can understand exactly what a product does and still have absolutely no interest in buying it.

That's why the next question is whether the message connects the product to something the buyer actually cares about.

Listen carefully to how customers react.

- Do they recognize the problem immediately?
- Do they expand on it?
- Do they tell you how they're dealing with it today?
- Does the conversation move naturally toward the consequences of not solving it?

Those reactions tell you far more than asking someone whether your value proposition "resonates."

You can also see evidence further down the funnel. If people understand what you're offering but aren't clicking, responding, requesting demos, or moving forward, you may not have a clarity problem. You may have a relevance problem.

That distinction matters because rewriting the same value proposition with different words won't make an unimportant problem important.

## 3. Believe: Do Buyers Accept the Story?

A buyer can understand your message and care deeply about the problem but still not believe you can solve it.

This is where messaging has to move beyond a compelling value proposition. Can you prove it?

Customer results, product demonstrations, specific capabilities, credible data, testimonials, competitive evidence, and other proof points all help turn a marketing claim into something a buyer can believe.

This is also where differentiation gets tested. If buyers hear your message and respond with, "Doesn't everyone do that?" you have a problem. You may have described the category clearly without giving them a reason to choose you.

Ask customers and prospects what they think is different about your approach. Better yet, listen to how your champions describe that difference when you're not feeding them the answer.

If customers repeat your differentiation back to you in their own words, that's strong evidence your messaging is taking hold.

## 4. Act: Does the Message Change Behavior?

Eventually, messaging has to do more than test well in an interview. It has to change what people do.

That's where quantitative evidence becomes useful. Depending on the business, that could mean changes in conversion, demo requests, campaign engagement, pipeline progression, win rate, product adoption, expansion, or another behavior tied to the message you're testing.

The important thing is not to confuse correlation with causation. If you launch new messaging and win rate increases, great. But maybe Sales improved, the product changed, pricing changed, or a competitor stumbled.

Look for multiple signals pointing in the same direction. If customers understand the new message more consistently, Sales says it's creating better conversations, prospects repeat the language back, conversion improves, and win/loss interviews show stronger differentiation, you have a much more convincing case.

**Messaging effectiveness is usually a body of evidence, not a single dashboard number.**

## Test the Message, Not Just the Copy

There's another distinction worth making. A/B testing two homepage headlines can tell you which headline performs better. It doesn't necessarily tell you whether the underlying message is right. That's copy testing.

If version A says "Automate your workflow" and version B says "Work smarter with AI," you're testing two expressions of an idea. You haven't necessarily tested whether workflow automation is the problem your buyer cares about.

Start upstream. Test the problem. Test the value. Test the differentiation. Test the proof.

Once you're confident in those things, optimize how they're expressed. Otherwise, you risk getting very good at communicating the wrong message.

## Sales Is One of Your Best Messaging Research Channels

Product marketers sometimes treat Sales as the audience for messaging rather than a source of evidence about it. That's a mistake.

Your sales team runs messaging tests every day. They hear which problem statements get prospects talking, which claims create skepticism, which differentiators competitors neutralize, and which proof points move conversations forward.

Don't just ask Sales, "Is the messaging working?" Ask what they're hearing.

- Which part of the story gets the strongest reaction?
- Where do prospects push back?
- What language are customers using instead of ours?
- Which claims require explanation?
- What gets repeated later in the sales cycle?

AI-powered conversation intelligence makes it possible to answer those questions at scale. Instead of listening to a handful of calls or relying on anecdotal feedback, product marketers can analyze large volumes of customer conversations for specific messages, themes, objections, competitor mentions, and buyer reactions.

That creates an interesting opportunity for product marketing. A new message doesn't have to disappear into the field after enablement. You can establish a baseline, introduce the message, measure whether sellers are actually using it, analyze how buyers respond, and look for patterns across won and lost deals.

Imagine introducing a new differentiation message and being able to answer:

- How often is Sales using it?
- Which buyers respond to it?
- What objections follow it?
- Does it appear more frequently in successful deals?
- Are customers repeating the same idea back later in the sales cycle?

Conversation intelligence won't prove that a particular message caused a deal to close. But it can turn thousands of sales conversations into a messaging research dataset rather than leaving all that customer evidence trapped inside individual calls.

Combine that with direct sales feedback, customer research, win/loss analysis, and performance data, and you have a much stronger signal of whether your messaging is actually working.

## Messaging Is Never Really Finished

Messaging frameworks often feel like finished deliverables. In reality, they're hypotheses.

You're making a bet that a particular buyer cares about a particular problem, will value a particular outcome, and will believe a particular reason for choosing you.

The market tells you whether you were right.

That's why I'd worry less about whether everyone internally loves the messaging and more about whether you're seeing evidence across four questions:

**Do buyers understand it? Do they care? Do they believe it? Do they act?**

If the answer is yes across all four, don't rewrite the messaging because someone has a new idea for the homepage. If the answer is no, figure out where the chain breaks.

That's the real value of measuring messaging. It doesn't just tell you that something isn't working. It tells you what to fix.`
  }
];

export const getBlogPostBySlug = (slug: string) => {
  return blogPosts.find(post => post.slug === slug);
};