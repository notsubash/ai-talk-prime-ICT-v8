# Presenter runbook

ICT Meetup v8.0 · Prime College, Khusibun · Saturday 5 September 2026

**AI in Nepal: Where We Stand and Where We’re Headed**
Subash Pandey · AI/ML Engineer

21 slides. Dark 16:9 keynote. Local fonts. No network required for the deck.

---

## Before the room

- Serve from the **repo root**, not from `slides/`. Relative assets break if the server root is the slides folder.

```bash
python -m http.server 8080
# open http://127.0.0.1:8080/slides/index.html
```

Any static server from the repo root is fine.


## Beat sheet

The quoted line is the answer already on the slide. Do not rewrite it. Add only what the glass cannot say.

### 1 · Title

Let the title own the frame. “AI in Nepal” is the subject. Then your name is on the rail. One breath, then advance.

### 2 · Intro

**On the glass:** Subash Pandey. AI/ML Engineer from Kathmandu. Scopic. Exeter.

**Say:** I build AI systems for a living: chat, voice, evaluation, the product around them. I am not here to teach you the chatbot. I am here to talk about where Nepal actually is, and what a job in this field is.

Do not list every employer. Do not make the UK photos the story.

### 3 · Agenda

Six discussion areas. Promise named systems, not vibes. Then go.

### 4 · Where does Nepal stand?

**Answer:** Uneven. Everyone uses chatbots. We sell expertise and man hours. We own very few AI products. The paperwork got loud. That is not an AI industry yet.

This is the thesis slide. Spend time here.

Hit in this order:

1. Adoption: this room, ICT Meetup v7 already AI-themed in Jan 2024. Banks 71%, factories 23%. Chat is not an industry.
2. What we sell: labelling (how we entered), export SWE (the bench), a few product companies, a lab, a trial. Point at **ChestGuru** as the thin product line.
3. What the state did: Policy Aug 2025, Centre Nov 2025 (you could not find what it does), NRB rules Dec 2025, compute centre May 2026 budgeted not built.
4. What you will not fake: startup count, state-owned AI computers, AI share of IT exports. There is no register, no count, nobody measures it.

Close on the strip: **strong on people, thin on products, loud on paper.**

Trap: do not defend the 2,400 / $12.3M figures as a census. They are the public blink numbers on the glass. If challenged, say they are the listed figures, not a government register.

### 5 · Global place and speed

**Answer:** 106 of 195. Chat spread fast. Working systems and agents that do a job are still rare.

India 27, Bangladesh 75, Pakistan 81, Nepal 106. Neighbour ranking is the sting. Then the company bars: 88% use AI somewhere, ≤10% have agents that run a job.

Nepal’s strongest Oxford bar is rules written down. Weakest: government using AI, and building and spreading it. That sets up everything after.

Do not spend time explaining the scorecard methodology. If asked in Q&A: Oxford Insights Government AI Readiness, January 2026.

### 6 · Milestones

**Answer:** People working since 2010. Paperwork since 2025. Products we own are still the thin line.

Read **rows**, not cells. People row: CloudFactory → Fusemachines → rice maps (satellite, not chat) → bank RAG → FUSE / ChestGuru / Lamina. Paper row: ETA 2006 is still the digital law; AI paper is 2025. Campus row: this event was already AI-themed a year before the policy.

Lamina: Nepali founders, company in SF. Say that once. It is a pride line and a location line.

### 7 · What is actually running

**Answer:** Named systems you can look up. Five you can point at. Two that are still a test.

Live: RiceMapEngine (21 Terai, MoALD × ICIMOD). Saathi / eVA / Sid at NIC Asia, eSewa, Siddhartha. Guardsix / Trident export. The SWE benches. Ginger at Naulo Pulchowk.

Not a product yet: ChestGuru / Second Eye (TUTH, Dec 2025). SAFE-RISCCS (disaster pilot).

The move: **live vs trial vs export**. Export shops are real work and they are not Nepal-owned products. Do not blur that.

### 8 · Where AI is missing

**Answer:** Education has users, not products. Government has servers, not models. Whole industries have no named system. That gap is a company, if you can name a buyer.

Education: ChatGPT in class is literacy. It is already in this room. It is not a ministry product.

Government: 927 VMs for 359 offices (Jul 2026) is hosting. Nagarik App: you will not stand behind an AI feature.

Empty: tourism, factories, logistics, media, courts, telecom. Pause. “If you can name the buyer, that is a company.” Then leave.

### 9 · Startups, here vs there

**Answer:** Two markets. Here: a hole in the money, and a ranked list that is mostly wallets and tutorials. There: labs, products, services, a campus path.

Here: gov Rs 2.5m, seed Rs 1–5m, **hole Rs 5–100m**, funds Rs 100m+. The hole is the story. StartupBlink Sep 2026: #101 world, #5 South Asia, 109 listed. Say they are not an AI register.

There: frontier labs train what you rent. **Application products** (Cursor, Perplexity, Harvey, Notion) are the honest global bet: a buyer, a price, a test. Services titles you can actually search. Campus path is internships and labs, not “I use ChatGPT”.

Trap: do not tell this room to found a foundation-model lab.

### 10 · Generative AI, what changed

**Answer:** Not the model. We rent that. The job is the harness.

Walk 1–7 as verbs: spec, retrieve, bind, act, loop, guard, trace. One sentence each. Stop on **loop** (budget) and **trace** (eval). Without a trace you have a demo.

OSWorld: ~12% last year, 66.3% now, still misses about one in three. Agents in regular use: ≤10% of functions, 24% in tech software. This is not the office running itself.

If you only remember one teaching beat: **a tool with no contract is a toy.**

### 11 · See it: chatbots guess

**Answer:** One Nepal question, three behaviours. Chat sounds certain. The same model over a file shows its page or admits it does not know. A test turns that into a number.

Read the shared prompt out loud:

> How many computers does Nepal’s National AI Centre have?

Then point, do not rush:

1. Chat invents **47 NVIDIA units in a hall at Singha Durbar**. Clean paragraph. No source. If it is wrong you find out from a customer, in public.
2. Same model, given the file: not in this document. Centre opened Nov 2025, small room, no computer count. **Sourced, or refused.**
3. Ten questions. Pass = seven sourced + three honest refusals. 9/10, miss logged. Run it again when you change the prompt.

This is the only “demo”. The three panes are the demo. You do not need a live API.

If someone asks you to try ChatGPT live: decline. Wifi, rate limits, and a model that might get it right today and invent 47 tomorrow. The point is the filter, not the lottery.

Wifi death: `assets/demo/offline-demo.html`. Same argument, three stills. Corpus is `assets/demo/corpus/public-facts.txt` (policy date, Centre opening, budget speech). Public facts only. No client data.

Gold answer in the corpus: **NO RELIABLE DATA** on a public GPU count. Centre ≠ Syuchatar budget sentence (29 May 2026).

### 12 · “AI will replace those who don’t learn to use it”

**Answer:** Half true. Using it is the floor. Owning the loop is the job.

Three floors: **Use it** (this room, unpaid as a specialty). **Run it** (the job the market is short of: test, miss, blame, fix). **Build it** (fewer seats, mostly senior or abroad, later).

Stanford extra output: software 26%, support 14–15%, marketing 50%. Then the 300 million / two-thirds / 14% block. Do not lead with the 300 million. Lead with the three floors. The macros are context, not the ask.

### 13 · Career pathways

**Answer:** Web froze into four seats. AI is eight doors that overlap. Search these titles, not the word “AI”.

Stand on this slide. Use `1`–`8` to light a door when you name it.

The bold title in each door is the one to search. Forward Deployed Engineer, Data Engineer, Data Scientist, MLOps, ML Engineer, Research Scientist, Domain Specialist, AI Product Manager.

Strip line: **“Prompt engineer” is a skill inside all eight.** Pick a pathway for depth.

If the room is students: tell them Apps + Data is the honest on-ramp in Kathmandu. Modelling and Research without a software base is a stall.

### 14 · Will it settle like web?

**Answer:** The work will split. The stack will not freeze. New pathways will open.

Web: four spaces, HTML from 2015 still runs. AI: the bars overlap on purpose. Large teams still glue more than they specialise. Pick a path. Expect to work outside it.

### 15 · Jobs in Nepal vs globally

**Answer:** LinkedIn, keyword “AI”, last 30 days, this morning. Nepal is a short list. The Bay Area is a wall of agent titles.

Nepal: **n = 17 postings you opened**. Say the method. It is not the labour force. Data first, then a few applied titles, some HITL, one security.

Bay Area: 99+, Agent/Agentic 38, then ML / Applied / AI Engineer. Posted ranges about $150k–$400k.

Trap: do not turn SF pay into a promise. It is a different market, visa, and bar.

These counts were “this morning” relative to the deck. If you reuse the talk later, re-pull or say the date.

### 16 · First internship or job

**Answer:** Become a software or data person who can prove they can work end-to-end.

Five verbs: **Ship, Measure, Say it, Iterate, Apply.**

The crop-disease mock README is the teaching object: a real task, a line that says where it fails. A rubric with a miss count. The script: I built X, it failed at Y, I measured Z.

Apply: SWE / data / AI, talent pools, referrals, ask for mentorship. Do not wait for a title that contains “AI”.

### 17 · Skills, jobs, productivity, lifelong

**Answer:** A stack, a public trail, a finish habit, a loop that does not stop.

Read the first column as the order: **Software → Models → Ship.** Python, SQL, Git, DSA, APIs, tests before RAG theatre.

Jobs: make it public, then ask. Productivity: finish more than you start, copilot not autopilot. Lifelong: read, reproduce, stay on fundamentals.

Do not turn this into a resources dump. One order is enough.

### 18 · System and architecture

**Answer:** Pick any.

Two bands. What you ship: deterministic, classical ML, retrieval + generation, agents. How weights are made: pre-train, post-train, RL/preference, adaptation.

Tell this room the truth: most of you will live in **1–4 and 8**. Pre-training is frontier labs. LoRA on your data is the training you might actually touch. “Some of the best systems ever built stay deterministic.”

Books, in order: Kleppmann, then Huyen *Designing Machine Learning Systems*, then Huyen *AI Engineering*. Data plane, then ML factory, then foundation models as a product.

### 19 · Challenges and the data-center feud

**Answer:** The data center is sized for a factory, on monsoon watts NEA already dumps.

NEA FY 2025/26: installed 4,120 MW, peak 3,226, listed AI compute ~15–20 MW. Under 3% of surplus. Not Meta. Not AWS. 250 kW to 5 MW.

Four beats: scale, surplus (wet months spilled, dry months we still import), lights (two feeds, batteries, generators, market rate), contract (heat at this size is noise; blocking then complaining about jobs is the own-goal).

Stay on engineering scale. Do not run a party-political fight. If the room wants a feud, you have already stated the case.

### 20 · Ethics, privacy, governance

**Answer:** Four questions for any system. The law is thinner than the duty.

Privacy: what left the room, who stored the prompt. Fairness: who is in the data, who pays when it misses. Accountability: vendor, bank, ministry, you; if nobody owns it, it is not a system. Governance: who wrote the stop, who can audit the log.

Tie back to slide 11. The refusal and the log **are** the ethics. A vibe is not a policy.

ETA 2006 is still the digital law (slide 6). NRB has a short rulebook for banks. That is thinner than the duty you just named.

### 21 · Q&A

Let the line sit:

> Anyone can prompt. Very few people can make an AI system work. That is the career.

Then “questions.” Do not add a new thesis here.

---

## Files

| Path | What |
|---|---|
| `slides/index.html` | Deck |
| `slides/deck.js` | Keys, next-hint, 1–8 highlight |
| `slides/styles.css` | 1920×1080 stage, scaled to the window |
| `assets/demo/offline-demo.html` | Wifi-death stills, keys 1–2–3 |
| `assets/demo/corpus/public-facts.txt` | Public facts only. Policy date, Centre opening, budget speech, no GPU count |
