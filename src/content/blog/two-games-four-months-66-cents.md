---
title: "Two Roblox Games, Four Months, $929 to Earn 66 Cents"
description: "Four months building two Roblox games solo with AI: about $929 spent, 66 cents earned, and what the honest small numbers actually mean."
pubDate: 2026-06-10
tags: ["recap", "roblox", "ai", "solo-dev"]
draft: false
series: "round-1"
order: 1
---

I spent $929 to earn 66 cents.

That's four months of solo development on Roblox, right after I left a producer job at [Krafton](https://www.krafton.com), the studio behind [PUBG](https://pubg.com), at the end of January 2026. Two games shipped. Two games dead. Total revenue across both: 188 Robux, about 66 cents at Roblox's developer exchange rate.

<figure>
  <img src="/images/roblox-profile.png" alt="Roblox experience cards for Game Rental Simulator and Yeet Arena Deathmatch" />
  <figcaption>The two games on my Roblox profile</figcaption>
</figure>

Here's what that 66 cents leaves out. I shipped two games by myself, in four months, with no team, no one handing me a spec, and no safety net. That part I'm proud of, and it's why I'm writing this down. The version of this story I usually see online doesn't sound like mine. *"$130k in twenty minutes."* *"My one-person AI studio is hiring."* Those exist, but they're rarer in reality than they appear online. Mine is closer to what most solo developers actually live through, and it's the version I want to share, for anyone out there looking for the courage to start their own journey.

<figure>
  <img src="/images/timeline.png" alt="Timeline from February to June 2026: built and launched Yeet Arena on March 10, killed it March 18, built and launched Game Rental Simulator on May 12, killed it May 24." />
  <figcaption>Four months, start to finish.</figcaption>
</figure>

## Why I left my corporate job

For some context: I worked at Krafton for five years. I started on a four-person team, where I shipped multiple Roblox titles including a tycoon game called [*Mega Hotel Tycoon*](https://www.roblox.com/games/6679028787/Mega-Hotel-Tycoon) that grew to 2.5 million monthly active users. After that, I moved into project management of new titles in the company, including [The Callisto Protocol](https://store.steampowered.com/app/1544020/The_Callisto_Protocol/) and [Moonbreaker](https://store.steampowered.com/app/845890/Moonbreaker/). During that time, I had a craving to get back into game development and feel the thrill of creating something with my own hands. So I joined a new, ambitious project as a producer and game designer, and stayed for two and a half years. From there, I moved to PUBG Studios to produce a new PUBG mode.

PUBG is a battle royale game with 700,000 to 800,000 peak daily players globally on PC. Working on it was, by most measures, a great job. The team was talented. The product had real impact. But a few months inside a live-service game of that scale, I started feeling two things at once:

1. **I wanted to push myself to use AI in depth.** Krafton actively encouraged AI use across the company, but what I owned in my role was naturally limited. I wasn't writing code or creating assets. And with a steady paycheck and a team of specialists around me, there was no real pressure to innovate how I worked. To force myself to integrate AI deeply into my daily routine, I wanted to be hands-on, building something from 0 to 1.
2. **I wanted to ship something that was solely my own blood, sweat, and tears.** I'd had that feeling before, and it was the reason I'd moved from project management into production in the first place. I missed that drive, the excitement of watching players play a game I'd made. Joining the PUBG team eight years into its life, the product never felt like *my* baby.

In the end the decision I made was: leave, build something myself, see how far I can get with AI as a solo developer.

I left on January 31, 2026.

<figure>
  <img src="/images/pubg-badge.jpg" alt="A PUBG Studios employee badge reading Clara Yongeun Rhee, Producer, Krafton, on a lanyard with a green crochet clover charm." style="display:block;width:50%;margin:0 auto" />
  <figcaption>My producer badge at PUBG Studios, Krafton.</figcaption>
</figure>

## Why a game, and why Roblox

When I decided to build solo with AI, working on games was the natural next step. I did consider making an indie game and publishing on Steam, but I turned to Roblox for the reasons below.

1. **The user base.** Roblox has 132 million daily users, and they're more open to trying new games because Roblox doesn't require players to install anything. They click play and the game runs in the Roblox client on any platform (PC, mobile, console). Being able to actually meet your users is a huge advantage. A lot of games and apps die without ever meeting one in the red ocean of software, even more so now that vibe coding became a thing.
2. **The publishing pipeline.** Roblox handles publishing, ad delivery, server management, and analytics. I could ship an update whenever I wanted. No review process, no paperwork, no waiting on anyone. The feedback loop with players is usually short too. Push an update, and the analytics start moving the same hour. I can also join my own game, watch how players actually play, and chat with them in-game.

## The plan: one game a month, killed if it fails

One month per game. Ship. If it doesn't retain, kill it. Move to the next one.

Five years ago I had shipped multiple Roblox games in a similar window with a small team. With AI doing the work multiple people used to do, the same one-month window felt right even working alone. Big studios can't iterate this way (too many people, too much process, too much already shipped). A solo developer can. Agility was the only real advantage I had, so I wanted to leverage it.

## Game 1: Yeet Arena

<figure>
  <video src="/images/yeet-arena.mp4" controls preload="metadata"></video>
  <figcaption>About a minute of Yeet Arena: rolling a snowball, launching it, knocking other players off the platform</figcaption>
</figure>

### Picking a fast, familiar idea

For the first game, the goal was speed, not novelty. I wanted to validate that working solo with AI on Roblox was possible at all. I went to the Roblox top charts and looked for something I could build solo in a month. I narrowed to three criteria:

1. **Already validated.** Something in or near the top charts, so I wasn't testing whether the format itself worked.
2. **Within scope.** A game I could plausibly ship alone in 30 days with AI.
3. **Fun for me.** Otherwise I wouldn't iterate well during development.

I combined two games and landed on Yeet Arena. The first inspiration was [*Knockout!*](https://www.roblox.com/games/136764190843219/Knockout), a Roblox last-man-standing round-based game where penguins on a platform aim and fire themselves at each other. The second was a small snowball game on [itch.io](https://itch.io) (an indie game marketplace) where you roll a snowball that grows as it picks up snow, then fire it at people. In Yeet Arena, you roll your snowball larger by pushing it on the ground, then launch it at other players to knock them off the platform. Last one standing wins.

### Launch day and the ad campaign

Building it was its own kind of war. Connecting [Cursor](https://cursor.com) to the Roblox Studio workflow took longer than I expected. The information I needed was scattered, half-outdated, or just not written down anywhere I could find. Thank god for the [Rojo](https://rojo.space/) plugin, which is what makes the connection possible at all. There's a separate post coming on what I eventually figured out about the workflow. There's another one on multiplayer QA, which turned out to be its own particular nightmare when you're one person trying to test a game built for many.

I launched Yeet Arena on March 10, 2026, about a month after I left my job.

<figure>
  <img src="/images/yeet-banner.jpg" alt="Yeet Arena promo art: snowy cabin arena where players roll giant snowballs and launch them at each other, with the Yeet Arena logo and a Play Now button." />
  <figcaption>The Yeet Arena thumbnail</figcaption>
</figure>

A note on ads before the numbers. Roblox has a built-in advertising system that's straightforward to use: set targeting, set a budget, and it serves ads inside the Roblox client. Without ads, a new game is almost impossible to discover (there are too many). So I turned ads on right after launch. I wasn't nervous about the money. What I felt was excitement. Real players were about to play my game. I wanted to see how they moved through it, what they did first, what they ignored. The ad spend was the cost of meeting them.

### The numbers: a spike and low retention

- **Cumulative plays:** 24,300
- **Peak DAU:** 6,568 on March 14 (the first weekend after launch)
- **CTR:** 2.46% (over 2% is considered good, which meant my thumbnail was working)
- **Average session:** 6 minutes (10 to 15 minutes is considered good for a Roblox game)
- **Day-1 retention:** 1.8%
- **Revenue:** 20 Robux (~$0.07)
- **Ad spend:** $58.00 over 8 days (March 10 to March 17)
- **Time from launch to kill:** 8 days

<figure>
  <img src="/images/yeet-dau.png" alt="Yeet Arena daily active users chart, March 9 to March 20, 2026, peak around 6,500 on March 14" />
  <figcaption>Yeet Arena DAU, launched March 10, peaked during the weekend, ad stopped March 17</figcaption>
</figure>

Peak DAU climbed to 6,568 by the first weekend after launch. I could have been excited, but I wasn't. Day-1 retention was 1.8%. We were losing them as fast as we were getting them. For context, a healthy Roblox arena game wants something around 10%, and the top of the genre is closer to 20%+. 1.8% is unworkable. Whatever you pour in pours straight back out.

The revenue stung too. Developers on Roblox make money two ways:

1. [Creator Rewards](https://create.roblox.com/docs/creator-rewards), paid automatically by Roblox when paying users engage with your game.
2. In-game purchases: the items, passes, and currency players buy directly in your game. This one requires people to actually want to spend.

Yeet Arena earned 20 Robux. Seven cents. Across 24,300 plays, Creator Rewards gave me seven cents. Not a single player bought anything in-game, even though I had items they could buy. Zero paying users.

I want to dwell on these numbers. After a month of solo development, people did show up, thanks to $58 of ads. Roblox's ad system worked, the thumbnail worked, but none of the players stayed and none of them paid.

I joined my own game to see what was happening. The mode I'd built was last-man-standing: when you got knocked off, you waited for the round to end before joining the next one. The waiting was long enough that people just left during it. The fun of the game was knocking other players off the platform, and the game was rationing access to that fun.

I brainstormed with [Gemini](https://gemini.google.com) and shipped one update: the round now had a time limit, and whoever got the most kills won. Day-1 retention more than doubled, from 1.8% to 3.73%. Still well short of the 10% goal. I sat with Gemini and went through the data once more. The verdict was the same. I cut the ads after eight days.

<figure>
  <img src="/images/yeet-snowball.jpg" alt="In-game Yeet Arena deathmatch: a snowy arena with another player, a kills counter and timer in the HUD." />
  <figcaption>The deathmatch mode in-game: a time limit, most kills wins. (Another player's name blurred.)</figcaption>
</figure>

The decision to kill it stung in a quiet way. I'd known the game wasn't carefully designed, and games that aren't carefully designed don't tend to retain. The result wasn't surprising, but that doesn't mean it didn't hurt.

I learned how Roblox publishing works. I learned how to ship a Roblox game with AI in 38 days. I learned that the ship-and-test approach was correct. Taking those painful learnings, I moved on to the second game.

## Game 2: Game Rental Simulator

<figure>
  <img src="/images/game-rental-banner.jpg" alt="Game Rental Simulator banner: a character holding a retro game cartridge in a neon-lit rental store." />
  <figcaption>Game Rental Simulator: run the store, rent out cartridges, restock the shelves.</figcaption>
</figure>

### Picking a game based on market data

For the second game I changed the question. Game 1 was about *can I ship.* Game 2 was about *how do I pick something players would actually like.*

I built a small Python tool to help me decide. I called it the opportunity crawler. After years in production, looking at market data before a decision was just my reflex. The crawler itself was simple. It pulled data on Roblox genres like simulator, tycoon, obby, and roleplay: concurrents, ratings, visits, likes, dislikes. From those it derived rough scores for retention and satisfaction. The goal was to find genres where the average game's polish was within reach of one person working with AI.

It pointed at two genres: simulators, and co-op extraction games. I picked simulators. I'm a simulator fan to the core (hundreds of hours in [Supermarket Simulator](https://store.steampowered.com/app/2670630/Supermarket_Simulator/), the [House Flipper](https://store.steampowered.com/app/613100/House_Flipper/) series, [Gas Station Simulator](https://store.steampowered.com/app/1149620/Gas_Station_Simulator/), and more). I know exactly where the fun in a simulator comes from.

I picked a game cartridge rental concept, inspired by [*Retro Rewind*](https://store.steampowered.com/app/3552140/Retro_Rewind__Video_Store_Simulator/): players run a store, rent out game cartridges, clean them on return, and restock the shelves.

<figure>
  <video src="/images/game-rental.mp4" controls preload="metadata"></video>
  <figcaption>About a minute of Game Rental Simulator: renting cartridges and restocking the shelves</figcaption>
</figure>

### Launch, and a $10,000 economy bug

It took two months instead of one. I gave myself a week to explore new AI tools and trends, then spent another two weeks on [scope creep](https://en.wikipedia.org/wiki/Scope_creep). Working with AI encourages scope creep. It keeps offering, *shall I add this? shall I refine that?* By six weeks in, I sat down with my feature list and started crossing things off. Nothing more. Ship.

The launch itself didn't go cleanly. The day I shipped, I joined my own game on mobile to see how it ran. The starting cash was wrong. I'd meant to give players 200 to start. They were starting with 10,000. I'd been sure I had this fixed, but I hadn't. The whole economy was broken on the spot. With that much cash up front, players had no reason to grind or actually run a shop.

<figure>
  <img src="/images/game-rental-10000.jpg" alt="Game Rental Simulator in-game: a store interior with 10,000 dollars shown in the register." />
  <figcaption>$10,000 in the register on launch. I'd meant to start players with 200. (This shot is from my dev account, but it's the same number that greeted every new player.)</figcaption>
</figure>

I went from the couch to my desk in about four seconds. Killed the ads. Pushed a fix. Republished. Turned the ads back on. While doing so, I also made the decision to wipe everyone's progress rather than leave the whole economy broken. I also offered them a promo code they could use as a sorry gift.

After that, finally, the launch ran clean (-ish. It had a lot of bugs that I'll write about in detail in later posts).

### The numbers: less traffic, better signals

- **Cumulative plays:** 4,107
- **Typical DAU:** ~200
- **CTR:** 0.83% (PC-only targeting, which lowers base CTR)
- **Average session:** 10.4 minutes
- **Day-1 retention:** 4.11%
- **Revenue:** 168 Robux from two in-app purchases by two different players (~$0.59)
- **Ad spend:** $51.80
- **Time from launch to kill:** 12 days

<figure>
  <img src="/images/game-rental-dau.png" alt="Game Rental Simulator daily active users chart, May 11 to May 24, 2026, with two ad cycles" />
  <figcaption>Game Rental Simulator DAU, two ad cycles around the store overlap bug fix</figcaption>
</figure>

Compared to the first game: about one-sixth the traffic, but more than double the retention, almost ten times the revenue (well, it was tiny to begin with), and sessions 73% longer.

<figure>
<svg style="display:block;width:100%;height:auto" viewBox="0 0 680 372" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparison of Yeet Arena and Game Rental across plays, peak DAU, day-1 retention, average session, revenue, and paying users.">
    <line x1="0" y1="1" x2="680" y2="1" stroke="#d8d4c8" stroke-width="1"/>
    <text x="430" y="42" text-anchor="end" font-family="'Spectral',Georgia,serif" font-size="17" font-weight="600" fill="#1a1a1a">Yeet Arena</text>
    <text x="652" y="42" text-anchor="end" font-family="'Spectral',Georgia,serif" font-size="17" font-weight="600" fill="#1a1a1a">Game Rental</text>
    <line x1="28" y1="58" x2="652" y2="58" stroke="#d8d4c8" stroke-width="1"/>
    <text x="28" y="96" font-family="'Spectral',Georgia,serif" font-size="15" fill="#555">Cumulative plays</text>
    <text x="430" y="96" text-anchor="end" font-family="'JetBrains Mono',monospace" font-size="15" fill="#1a1a1a">24,300</text>
    <text x="652" y="96" text-anchor="end" font-family="'JetBrains Mono',monospace" font-size="15" fill="#1a1a1a">4,107</text>
    <line x1="28" y1="115" x2="652" y2="115" stroke="#ebe6da" stroke-width="1"/>
    <text x="28" y="138" font-family="'Spectral',Georgia,serif" font-size="15" fill="#555">Peak DAU</text>
    <text x="430" y="138" text-anchor="end" font-family="'JetBrains Mono',monospace" font-size="15" fill="#1a1a1a">6,568</text>
    <text x="652" y="138" text-anchor="end" font-family="'JetBrains Mono',monospace" font-size="15" fill="#1a1a1a">~200</text>
    <line x1="28" y1="157" x2="652" y2="157" stroke="#ebe6da" stroke-width="1"/>
    <text x="28" y="180" font-family="'Spectral',Georgia,serif" font-size="15" fill="#555">Day-1 retention</text>
    <text x="430" y="180" text-anchor="end" font-family="'JetBrains Mono',monospace" font-size="15" fill="#1a1a1a">1.8%</text>
    <text x="652" y="180" text-anchor="end" font-family="'JetBrains Mono',monospace" font-size="15" fill="#1a1a1a">4.11%</text>
    <line x1="28" y1="199" x2="652" y2="199" stroke="#ebe6da" stroke-width="1"/>
    <text x="28" y="222" font-family="'Spectral',Georgia,serif" font-size="15" fill="#555">Average session</text>
    <text x="430" y="222" text-anchor="end" font-family="'JetBrains Mono',monospace" font-size="15" fill="#1a1a1a">6 min</text>
    <text x="652" y="222" text-anchor="end" font-family="'JetBrains Mono',monospace" font-size="15" fill="#1a1a1a">10.4 min</text>
    <line x1="28" y1="241" x2="652" y2="241" stroke="#ebe6da" stroke-width="1"/>
    <text x="28" y="264" font-family="'Spectral',Georgia,serif" font-size="15" fill="#555">Revenue</text>
    <text x="430" y="264" text-anchor="end" font-family="'JetBrains Mono',monospace" font-size="15" fill="#1a1a1a">20 Robux</text>
    <text x="652" y="264" text-anchor="end" font-family="'JetBrains Mono',monospace" font-size="15" fill="#1a1a1a">168 Robux</text>
    <line x1="28" y1="283" x2="652" y2="283" stroke="#ebe6da" stroke-width="1"/>
    <text x="28" y="306" font-family="'Spectral',Georgia,serif" font-size="15" fill="#555">Paying users</text>
    <text x="430" y="306" text-anchor="end" font-family="'JetBrains Mono',monospace" font-size="15" fill="#1a1a1a">0</text>
    <text x="652" y="306" text-anchor="end" font-family="'JetBrains Mono',monospace" font-size="15" fill="#1a1a1a">2</text>
    <line x1="28" y1="330" x2="652" y2="330" stroke="#d8d4c8" stroke-width="1"/>
    <text x="340" y="356" text-anchor="middle" font-family="'JetBrains Mono',monospace" font-size="12" fill="#888">Less traffic, but better on nearly every signal that mattered.</text>
    <line x1="0" y1="371" x2="680" y2="371" stroke="#d8d4c8" stroke-width="1"/>
  </svg>
</figure>

The biggest difference: two actual people decided to spend money in Game Rental. Yeet Arena had zero paying users in 24,300 plays. But for this game, two people felt the game was worth their money, and that is HUGE.

I did eventually kill Game Rental Simulator too. 4.11% retention still wasn't enough to sustain it. The players the ads brought were slipping through my fingers like sand. After a week of watching the numbers stay flat even after critical bug fixes, I killed the ads.

## What this cost

<figure>
<svg style="display:block;width:100%;height:auto" viewBox="0 0 680 213" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Scoreboard: four months, two games. Spent about 929 dollars, earned 66 cents.">
    <line x1="0" y1="1" x2="680" y2="1" stroke="#d8d4c8" stroke-width="1"/>
    <text x="340" y="36" text-anchor="middle" font-family="'JetBrains Mono',monospace" font-size="12" letter-spacing="2.5" fill="#888">FOUR MONTHS · TWO GAMES · ONE PERSON</text>
    <line x1="340" y1="64" x2="340" y2="190" stroke="#d8d4c8" stroke-width="1"/>
    <text x="180" y="88" text-anchor="middle" font-family="'JetBrains Mono',monospace" font-size="13" letter-spacing="2.5" fill="#3A4A2C">SPENT</text>
    <text x="180" y="152" text-anchor="middle" font-family="'Spectral',Georgia,serif" font-size="60" font-weight="600" fill="#1a1a1a">$929</text>
    <text x="180" y="184" text-anchor="middle" font-family="'JetBrains Mono',monospace" font-size="11.5" fill="#555">$109.80 ads · ~$819 AI tools</text>
    <text x="500" y="88" text-anchor="middle" font-family="'JetBrains Mono',monospace" font-size="13" letter-spacing="2.5" fill="#3A4A2C">EARNED</text>
    <text x="500" y="152" text-anchor="middle" font-family="'Spectral',Georgia,serif" font-size="60" font-weight="600" fill="#1a1a1a">$0.66</text>
    <text x="500" y="184" text-anchor="middle" font-family="'JetBrains Mono',monospace" font-size="11.5" fill="#555">188 Robux</text>
    <line x1="0" y1="212" x2="680" y2="212" stroke="#d8d4c8" stroke-width="1"/>
  </svg>
</figure>

Spend:

- **Roblox ads:** $109.80
- **AI tooling subscriptions over four months:** ~$819 Cursor (~$400, two months on the Ultra plan), [Claude Code](https://claude.com/product/claude-code) Max 5x (~$220), Gemini Pro (~$85), [Leonardo](https://leonardo.ai) (~$52), [Meshy](https://www.meshy.ai) (~$40), [Suno](https://suno.com) (~$22)
- **Total:** ~$929

Revenue:

- **188 Robux ≈ $0.66**

A thousand dollars for sixty-six cents. I'd known I was spending money, but I hadn't actually added the column up until I sat down to write this post. The ratio was more dramatic than it felt at the time.

But it's better than I expected. I didn't think I'd be making any revenue at all. I was happy that there were people who were willing to spend money in my game. The things I learned in those four months I couldn't have learned by reading.

What I have now isn't money. It's the ability to take a game from idea to shipped, alone, in a month. Over four months of building solo with AI, I gained conviction and courage. The conviction that I can ship a game by myself, without a team of specialists or a big marketing budget. The courage that I can go beyond my comfort zone, with AI at my back.

## What's next

Upcoming posts cover the details of this journey: the AI workflow I built, what multiplayer QA looks like with one person, what working with AI-generated art was really like, the pros and cons of solo development, and why I'm leaving Roblox after all of this.

If you're thinking about quitting your job to build solo with AI, I hope something in here helps. If what I learned the hard way helps someone else build something that works, that would be enough.
