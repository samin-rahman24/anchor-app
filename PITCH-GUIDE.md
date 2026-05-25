# ⚓ Anchor — Hackathon Pitch Guide
**Problem 6: Considering the Relocation Investment in People, Beyond Arrival**
**5-min presentation + 5-min live demo | Total: 10 mins**
> ⚡ Updated with REAL TasNetworks data from Cost of Recruitment.docx, Recruitment Data.docx, Data Requested.docx & Benefits Guide

---

## 🎯 THE WINNING FORMULA

Every judge has either moved city or knows someone who has.
Your job is to make them *feel* it before you show them the tech.

---

## 📊 REAL DATA YOU MUST USE (from TasNetworks docs)

### Recruitment & Cost Data (Cost of Recruitment.docx + Data Requested.docx)
| Metric | Real Figure |
|--------|-------------|
| Average TasNetworks salary | **$150,000 p.a.** |
| Total employment cost (+ super/leave/tax) | **$187,500 p.a.** |
| Relocation assistance range | **$5,000 – $40,000** |
| Visa sponsorship cost | **$15,000 – $21,000** |
| Time to fill — local/interstate | **8–12 weeks average** |
| Time to fill — international | **up to 6 months** |
| Recruitment process cost (staff time) | **~$5,000** |
| Vacancy cost (10 weeks @ $187.5K/yr) | **~$36,000** |
| **TOTAL cost of one early relocator exit** | **$61,000 – $122,000** |

### Headcount Data (Recruitment Data.docx)
| Metric | Real Figure |
|--------|-------------|
| Total hires since March 2025 | **371** |
| Interstate + international hires | **37 (10%)** |
| Biggest interstate source | **VIC — 11 (Melbourne)** |
| Queensland hires | **7** |
| International hires | **4** |
| Early exits last year (<12 months) | **26 of 116 total exits** |

### ROI Calculation (USE THIS IN YOUR PITCH)
```
Conservative: 5 early exits prevented × $81K avg = $405K saved
Realistic:    8 early exits prevented × $95K avg = $760K saved
Anchor cost:  ~$22K/year
ROI:          18× – 35× return
```
**The line:** *"Prevent 5 of the 26 early exits — just 5 — and Anchor saves TasNetworks $405,000. That's 18 times Anchor's cost."*

---

## 📋 SLIDE-BY-SLIDE (5 minutes, ~6 slides)

---

### SLIDE 1 — The Hook (45 seconds)
**Open with this — say it slowly:**

> *"Finding a GP. Getting a licence. Feeling safe. Having someone to call."*
> *"That's the brief. In TasNetworks' own words. And it hit us hard."*
> *"Because that silence after Day 1? That's where six-figure investments walk out the door."*

**On the slide:**
- The exact quote from the Problem Pack: *"Finding a GP. Getting a licence. Feeling safe. Having someone to call."*
- **26 of 116 people** who left TasNetworks last year had less than 12 months of service
- **37 interstate and international** employees hired since March 2025 alone

**Do NOT open with your solution name. Open with the human cost.**

---

### SLIDE 2 — The Real Cost (45 seconds)
**Say:**
> *"Let's talk about what an early exit actually costs TasNetworks."*

**On the slide — use REAL numbers:**

| What it costs to lose a relocated employee | Amount |
|---|---|
| Relocation assistance paid | $5,000 – $40,000 |
| Visa sponsorship (if international) | $15,000 – $21,000 |
| 8-12 weeks to rehire (local/interstate) | ~$36,000 in vacancy cost |
| Up to 6 months to recruit internationally | $60,000+ in vacancy cost |
| **Total cost of one early exit** | **$61,000 – $122,000** |

> *"That's real money. From TasNetworks' own recruitment data. And the problem isn't the flight or the visa — it's the silence after Day 1."*

---

### SLIDE 3 — The Gap (45 seconds)
**Say:**
> *"The onboarding checklist tells new hires what to do at work. Nobody tells them how to actually live in Tasmania."*

**Two columns on slide:**
| Current onboarding checklist | What's missing |
|---|---|
| IT equipment setup | How to find a GP |
| Site induction | Converting your licence |
| Leader-assigned buddy (informal) | Having someone who's BEEN you |
| HR checklist ends at Month 3 | The hardest months are 1–3 |

**Key insight:** *"The existing program is leader-led and work-focused. Anchor is peer-led and life-focused — and it starts before Day 1."*

---

### SLIDE 4 — The Solution (60 seconds)

**Three pillars:**

**1. 🎯 Smart Buddy Matching — powered by Amazon Bedrock**
- New relocator fills a 2-min form (family, origin, hobbies, needs)
- AI matches them against all settled TasNetworks employees
- The first message they get in Hobart is from a real colleague — not a portal
- *"James moved from Melbourne 8 months ago. He's got kids in the same schools, loves hiking, already knows the best GP near the office."*

**2. 🗺️ The 90-Day Life Map**
- Beyond the checklist — GP, licence, schools, community, discounts
- **Surfaces real TasNetworks benefits** most employees don't know exist:
  - $250 wellbeing rebate → yoga at The Studio ($10/class)
  - 20% off food at Cargo Bar, Franklin Wharf, Jack Greene Bar
  - Free EAP counselling via AccessEAP (1800 818 728)
  - Free flu vax for the whole family
  - Onsite gym at Maria Street HQ
- Crowdsourced — gets smarter every time someone settles well

**3. 💚 Fortnightly Pulse Check — Amazon Bedrock AI**
- 2 questions, every 14 days, triggered automatically by EventBridge
- Sentiment analysis flags at-risk employees before disengagement → exit
- HR only gets notified when someone needs it — care, not surveillance
- *"That 3.8/10 score you see in the HR dashboard? Without Anchor, that person exits quietly in 6 weeks. With Anchor, HR knows today."*

---

### SLIDE 5 — AWS Architecture (45 seconds)

```
[New Starter in SAP] ──► [AWS Lambda] ──► triggers Anchor onboarding
                              │
                    ┌─────────┴──────────┐
              [Amazon Bedrock]      [Amazon DynamoDB]
              Claude AI:             Employee profiles
              • Buddy matching       Pulse scores
              • Pulse chatbot        Life Map entries
              • Sentiment analysis   Match history
                    │
              [EventBridge] ──► Fortnightly pulse trigger (Day 14, 28, 42...)
                    │
              [Amazon SNS] ──► Push notifications + HR at-risk alerts
                    │
              [Amazon QuickSight] ──► HR retention dashboard + ROI tracking
                    │
              [AWS Amplify + Cognito] ──► App hosting (SSO with TasNetworks SAP)
```

**Key points to hit:**
- **SAP Integration**: Anchor auto-triggers when SAP adds a new interstate/international starter — zero manual setup
- **Privacy-compliant**: Built to Privacy Act 1988 (Cth) + Tas PIP Act 2004 — employee consent required, data minimisation by design
- **Amazon Bedrock**: ALL AI in one service — matching, chatbot, sentiment — no custom ML required

---

### SLIDE 6 — ROI + Pilot Path (45 seconds)

**ROI (use real numbers):**
> *"Prevent just 5 of the 26 early exits. At an average replacement cost of $81,000 per relocated employee, that's $405,000 saved. Anchor costs $22,000 a year to run. That's an 18 times return."*

**Pilot path — starts this week, costs almost nothing:**
- **Week 1**: Typeform for matching + Notion Life Map + Slack cohort + fortnightly Typeform pulse
- **Month 3**: Measure pulse trends and buddy engagement — prove the delta
- **Month 6**: This app — full AWS stack, SAP integration, AI everything

*"You don't need to build the app to prove the concept works. You can run the pilot with tools TasNetworks already has."*

---

### SLIDE 7 — Close (30 seconds)

**Say:**
> *"TasNetworks has invested in getting these 37 people here. The flights, the visas, the temporary accommodation. That's done."*
> *"What isn't done — what hasn't existed until now — is someone to call on Day 1. Someone who found the GP, knows the good school, survived the first winter."*
> *"That's what Anchor gives them. And it gives TasNetworks an early warning system — not a surveillance system — built on real care."*

**Tagline on screen:**
> *"The relocation investment ends the moment the moving truck leaves. Anchor is where the real investment begins."*

---

## 🖥️ LIVE DEMO SCRIPT (5 minutes)

**Open browser with `index.html`. Narrate as you click.**

### Demo Flow:
1. **SPLASH (15s)** — "This is what a new starter sees. Notice the numbers — they're real. From TasNetworks' own data."

2. **ONBOARDING → MATCHING (90s)** — Click "I'm joining TasNetworks". Fill form (Melbourne, family, hiking). Click "Find My Buddy". *Watch AI matching animation.* "Amazon Bedrock is scanning employee profiles — matching on origin, family, interests, and what they said they need help with. Melbourne match, family with kids, hiking. All aligned."

3. **BUDDY REVEAL (30s)** — "94% compatibility. James moved from Melbourne 8 months ago. He has kids. He found the GP. He already sent a welcome message. This happens before Day 1."

4. **DASHBOARD (30s)** — Go to Home tab. "90-day journey — airport pickup, employee card, buddy intro: all done. GP registration: in progress. Pulse check is due today."

5. **LIFE MAP — ESSENTIALS (30s)** — Click Life Map tab. Show Essentials. "Real TasNetworks benefits surfaced here for the first time — the $250 wellbeing rebate, free EAP counselling, flu vax for the whole family. Most employees don't know these exist. Anchor puts them front and centre when people need them most."

6. **PULSE CHECK (60s)** — Tap Pulse. Start check-in. Drag slider to 4. Watch AI respond with empathy. Type "finding a GP is stressful". Watch AI acknowledge and mention James. "That score just triggered a flag in the HR portal."

7. **HR PORTAL (60s)** — Navigate to HR. Show at-risk alerts (Aisha, 3.8/10). "She needs a call today — not a month from now when she hands in her notice." Scroll to ROI panel. "Real numbers. Real recruitment data. Prevent 5 exits: $405K saved. 18 times Anchor's cost." Show AWS architecture with SAP integration. "Auto-triggers from SAP when a new interstate starter is added."

---

## 💬 JUDGE Q&A — READY ANSWERS

**"How is this different from the buddy program that already exists on the checklist?"**
> "Two things. First, the existing program says 'assign a buddy' — it's ad hoc, leader-dependent, and work-focused. Anchor matches on life context — same origin city, family situation, hobbies, shared needs. Second, the existing buddy is assigned informally. Anchor's match is AI-driven, happens before Day 1, and comes with a structured 90-day support framework — not just a name on a list."

**"What about privacy — can you actually use employee data for matching?"**
> "Yes, with consent — and we've read TasNetworks' Privacy Policy. The matching is opt-in, consent-gated, and built to Privacy Act 1988 (Cth) and the TAS Personal Information Protection Act 2004. The data minimisation principle applies — we only collect what's needed for matching, and employees can withdraw at any time. This is actually a design feature: it signals trust, not surveillance."

**"You said the HR system is SAP — how does Anchor integrate?"**
> "AWS Lambda reads the new-starter trigger from SAP when someone is added. That auto-starts the Anchor onboarding flow — no manual steps, no HR admin overhead. We've scoped this integration specifically because SAP is TasNetworks' confirmed HR platform."

**"Is this feasible to actually implement?"**
> "The pilot is running by Week 1 — Typeform, Notion, Slack. Zero new technology. The AWS app is a 6-month build with a clear, fundable scope. We're asking for 90 days to prove the ROI with real data before a single dollar goes to infrastructure."

**"What stops buddies from not engaging?"**
> "The buddy role is opt-in and we recommend formalising it — 2 hours per fortnight of protected time, recognised in performance conversations. The matching quality means buddies actually want to engage — James's opening message in the demo is genuine because the match is real, not random."

**"How do you know the 26 early exits include relocated employees?"**
> "We don't have the exact breakdown yet — and we've called that out in our data request. Even if only 30% of those 26 are relocating employees — 8 people — at $81,000 average replacement cost, that's $648,000 of annual risk. The pilot will give us the exact split within 90 days."

---

## 🎖️ SCORING AGAINST THE RUBRIC — MAX SCORE STRATEGY

| Criterion | Score target | How to nail it |
|---|---|---|
| **Problem understanding /5** | **5/5** | Quote the brief verbatim. Use REAL data: 26 exits, $150K avg salary, 37 interstate hires. Show you read the recruitment docs. |
| **Critical thinking /5** | **5/5** | Show WHY the checklist fails. Explain the three-pillar design logic. Acknowledge privacy constraints and show you've addressed them. |
| **Teamwork /5** | **4/5** | Brief different team members to own different sections of the demo. |
| **Architecture design /5** | **5/5** | SAP integration point is the killer detail — shows you understood their real systems. Name each AWS service and WHY. |
| **Prototype /5** | **5/5** | Live matching animation, real chatbot, HR dashboard with real numbers. |
| **Technical ambition /5** | **5/5** | Bedrock for matching + sentiment + chatbot. EventBridge scheduling. QuickSight analytics. SAP integration. Privacy-by-design. |
| **Problem relevance /5** | **5/5** | Every feature traces to a line in the brief. Show the benefits guide surfaced in the Life Map. |
| **Feasibility /5** | **5/5** | Zero-code pilot in Week 1. Real cost numbers. Privacy compliance covered. Constraints acknowledged. |
| **Presentation clarity /5** | **5/5** | Open with human story, not tech. Real numbers every slide. Non-technical judges will follow. |

**Target: 44–45 / 45**

---

## 🏆 THE LINES THAT WIN THE ROOM

> *"We spend $187,500 a year keeping someone. We spend up to $40,000 getting them here. The ROI killer isn't the flight or the visa — it's the silence after Day 1."*

> *"Prevent 5 of those 26 early exits. Just 5. That's $405,000 saved. Anchor costs $22,000 a year. That's 18 times your money back."*

> *"The existing checklist ends at Month 3. The hardest months — the ones where people quietly decide to leave — are Months 1 through 3. Anchor is designed for exactly that window."*

---

*Good luck. The data is on your side. ⚓*
