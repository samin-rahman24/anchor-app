# ⚓ Anchor — TasNetworks Relocation Companion

**TasNetworks Open Innovation Hackathon 2026 | Problem 6**
*UTAS × TasNetworks × AWS*

---

## 🚀 Running the Demo

**No install needed. Just open:**

```bash
open index.html
```

Or drag `index.html` into any browser (Chrome recommended).

The app is entirely self-contained — no server, no npm, no setup.

---

## 🎯 Demo Flow (for judges)

1. **Splash** → Click "I'm joining TasNetworks"
2. **Onboarding** → Fill form (name, origin, family, hobbies, needs) → "Find My Buddy"
3. **AI Matching** → Watch Bedrock analyse profiles → Buddy revealed (94% match)
4. **Dashboard** → 90-day journey, buddy card, quick actions
5. **Pulse Check** → Tap 💚 → 2-question AI check-in → See at-risk flow
6. **HR Portal** → At-risk alerts, employee table, ROI panel, AWS architecture

---

## 📁 Files

| File | Purpose |
|------|---------|
| `index.html` | Full interactive prototype — open this |
| `PITCH-GUIDE.md` | Slide-by-slide script + judge Q&A answers |
| `README.md` | This file |

---

## ☁️ AWS Architecture

| Service | Role |
|---------|------|
| **Amazon Bedrock (Claude)** | Buddy-match AI, pulse chatbot, sentiment & at-risk detection |
| **AWS Lambda** | Serverless API — matching engine, fortnightly triggers, HR alerts |
| **Amazon DynamoDB** | Employee profiles, pulse scores, buddy matches, Life Map |
| **Amazon EventBridge** | Auto-fires pulse check 14 days post-arrival (and every 14 days after) |
| **Amazon SNS** | Push notifications to employees + real-time at-risk HR alerts |
| **AWS Amplify + Cognito** | Frontend hosting, CI/CD, authentication |
| **Amazon QuickSight** | HR retention dashboard — pulse trends, ROI, churn risk |
| **Amazon S3** | Life Map content store — crowdsourced tips, media, documents |

---

## 💡 The Three Pillars

### 1. 🎯 Smart Buddy Matching
- Employee fills 2-min profile form
- **Amazon Bedrock** matches across 847 employee profiles on: origin city, family situation, hobbies, stated relocation needs
- Match delivered **before Day 1** — first contact is a peer, not a portal

### 2. 🗺️ 90-Day Life Map
- Crowdsourced by settled employees
- Personalised to profile (family, hobbies, origin)
- Categories: Essentials, Community, Food & Fun, Family, Getting Around
- Gets smarter with every person who settles well

### 3. 💚 Fortnightly Pulse Check
- 2 questions, 60 seconds, **Amazon Bedrock** chatbot
- Scores below threshold → automatic HR alert via **SNS**
- Sentiment analysis catches what a number doesn't
- Flags at-risk people **before** disengagement becomes an exit conversation

---

## 💰 ROI Story

| Metric | Number |
|--------|--------|
| Early exits last year (Problem Brief) | 26 of 116 leavers |
| Avg relocation + replacement cost | ~$45,000 |
| Annual risk exposure | **$1.17M** |
| Prevent 5 exits | $225,000 saved |
| Anchor annual platform cost | ~$22,000 |
| **Return on Investment** | **10× minimum** |

---

## 🛣️ Pilot Roadmap

| Phase | Timeline | Tools |
|-------|----------|-------|
| Zero-code pilot | Week 1 | Typeform + Notion + Slack |
| Prove ROI with data | Month 3 | Pulse analytics, retention delta |
| Full AWS platform | Month 6 | This app + full AWS stack |

*"You can prove it works before you build it."*

---

## 📞 All Services in Anchor

- ✈️ Airport Welcome & First-Day Office Drop-Off (automated)
- 💳 Employee Card (Day 1 digital access)
- 🏥 Medical Services (GP, mental health, specialists)
- 🚗 Licence & Driving (conversion + lessons booking)
- 🏠 Housing Guide
- 🚌 Carpooling (colleague matching)
- 📋 Paperwork Support (visa, gov forms, ID)
- 🔒 Safety & Security
- 🏫 Schools & Childcare
- 🧘 Counselling (6 free sessions)
- 🎪 Events (TasNetworks + community)
- 🌏 Cultural & Spiritual Programs
- 💻 IT Support
- 📝 Form Submission (complaints, requests)
- ⚖️ Residency Support (3+ year employees → PR pathway)
- 📞 Human Support Line (8am–8pm AEST, real person)
