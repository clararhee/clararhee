---
title: "I'm Leaving Roblox"
description: "Two games shipped, both killed, and a platform I'm walking away from. What made the decision, and what I'm taking with me."
pubDate: 2026-08-03
tags: ["solo-dev", "roblox", "ai", "reflection"]
series: "round-1"
order: 5
draft: false
---

I'm leaving Roblox.

Not because the four months failed, though the numbers say they did. I shipped two games, killed both, spent about $929 and earned 66 cents. I'd do all of it again.

The decision came out of two moments, months apart. One I saw coming. The other caught me off guard, and that's the one that settled it.

(This is the fifth post in a series about building two Roblox games solo with AI in four months. [The first post](/blog/two-games-four-months-66-cents/) is the data retrospective.)

## The problem I could put a number on

This one happened during Yeet Arena, and I've [written about it in detail](/blog/solo-multiplayer-qa-hell/) already, so I'll keep it short.

I'd find a multiplayer bug. I'd fix it. I'd test again, and it would still be there, or a different one would be standing where it had been. Not because the fix was wrong. Because I couldn't reproduce the conditions that produced the bug in the first place. Two clients on my own machine are not two players on two machines with two different network paths.

The realization wasn't "this bug is hard." It was that the entire category was out of reach. I was one person, and the thing I needed was a second person, in real conditions, repeatedly, on demand. No amount of tooling gets you that. I built a 364-scenario test harness trying and it didn't get me that either.

That one I could describe on a whiteboard. It's a resourcing problem, and resourcing problems have obvious solutions: get a team, get testers, get funding. None of those were things I wanted right now, which meant multiplayer was going to keep costing me weeks I didn't have.

I filed that away as a constraint. It wasn't yet a reason to leave.

## The feature list I didn't want to build

The second one happened months later, at my desk, designing features for Game Rental Simulator.

Roblox games are multiplayer by default. Not by rule, but by gravity: it's how the platform works, how players expect games to feel, and how anything gets discovered. So there I was, working through the social layer. Let players visit each other's stores. Let them show off a rare cartridge they'd pulled. Give them a reason to care what someone else's shop looked like.

They're reasonable features. I'd have approved them in a heartbeat if someone on a team I was producing had brought them to me.

And I sat there not wanting to build any of them.

They weren't hard to build. They just weren't the game. The thing I liked about Game Rental was the quiet part: the store, the shelves, the loop of renting and cleaning and restocking. That's what I'd sunk hundreds of hours into as a player in other people's simulators, and it's what I wanted to make. The social layer was coming from the platform rather than from the game, and I was working backwards from a requirement to features I didn't care about. It felt like fitting pieces into a shape someone else had drawn.

The first problem was about resources. This one wasn't. Even with a team and a budget, I still wouldn't have wanted to build it.

## The part I couldn't fix by trying harder

There's a third thing under both of those, and it took me longer to admit.

I'm thirty-three, and Roblox's players are mostly kids. That on its own isn't the problem. Plenty of people make good games for an audience they aren't part of, and I'd done it before.

What made Roblox specific is why players go there in the first place. It isn't the same reason someone opens Steam. They're there to hang out with friends, and to be in on whatever is funny right now. The catalogue turns over constantly, formats spread the way memes spread, and a game can be huge for three weeks because it landed on the right joke at the right moment. Reading that is its own skill.

I don't have it. I don't use TikTok. I was watching the same charts everyone else was, but the instinct underneath them, the sense of what's about to be funny to a twelve-year-old, isn't something I could pick up by reading analytics. If I had a kid in elementary school I'd probably have absorbed it by osmosis. I don't have that either.

So I could tell you exactly where retention dropped. I couldn't tell you what would have made them stay.

## What I'm actually keeping

Here's the thing that makes leaving feel like a step forward rather than a retreat.

The thing I was testing was never Roblox itself.

What I set out to find in February was whether one person with AI could take something from an empty folder to real players, repeatedly, fast. The answer is yes, and I have receipts: two games, four months, real players, real bugs, real money spent and a tiny amount earned. I built an AI workflow I trust. I learned what AI can't do (debug, test multiplayer, understand a platform's moderation classifier, replace taste) with a specificity I could not have gotten from reading.

None of that is platform-specific. All of it moves with me.

## What's next

I've been building the next thing for about six weeks now: a 2D cozy game, aimed at Steam.

<figure>
  <img src="/images/next-game-peek.png" alt="A soft illustrated scene from the new game: a weekly pill organiser, a small bottle labelled hangover relief, and a handwritten note reading love you, mom, take care, on a sunlit wooden table." />
  <figcaption>A corner of it. That's all I'm showing for now.</figcaption>
</figure>

It's single-player, it's a genre I actually play, and the audience is people like me. After four months of guessing at what a twelve-year-old wants, that difference is enormous. I'm having more fun making this than I had making either Roblox game.

The speed held up, too. Six weeks in I have a vertical slice, a small polished section of the game that plays the way the finished thing should. Steam is a longer road than Roblox, so this one won't ship in a month. But the workflow came with me, and most of what I learned on Roblox is doing real work here.

I don't regret going solo. There are hard parts, and I'll write about those as they come.

The series doesn't stop with Roblox leaving the picture. This was round one, and round two gets documented the same way, with the same real numbers even when they're small and embarrassing, because that version of the story is the one I couldn't find when I went looking for it in February.

If you're somewhere in the middle of your own version of this, I hope some of it was useful. Four months and two dead games sounds like a loss written down, and I don't think it was. I tried something, it didn't work, and I came out knowing things I couldn't have learned any other way. That's the part you keep, and it's what makes the next attempt possible. I'd rather do that again than not have tried.
