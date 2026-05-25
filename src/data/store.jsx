import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function useAppState() {
  return useContext(AppContext);
}

export function AppProvider({ children }) {
  const [form, setForm] = useState({
    name: 'Sarah',
    origin: 'Melbourne',
    country: '',
    family: 'family',
    hobbies: ['hiking', 'food'],
    needs: ['gp', 'schools', 'community'],
  });

  const [loginName, setLoginName] = useState('Sarah Mitchell');
  const [loginEmail, setLoginEmail] = useState('sarah.mitchell@tasnetworks.com.au');

  const updateForm = (updates) => setForm((prev) => ({ ...prev, ...updates }));

  const toggleHobby = (id) => {
    setForm((prev) => ({
      ...prev,
      hobbies: prev.hobbies.includes(id)
        ? prev.hobbies.filter((h) => h !== id)
        : [...prev.hobbies, id],
    }));
  };

  const toggleNeed = (id) => {
    setForm((prev) => ({
      ...prev,
      needs: prev.needs.includes(id)
        ? prev.needs.filter((n) => n !== id)
        : [...prev.needs, id],
    }));
  };

  const familyLabel = () => {
    return form.family === 'family'
      ? 'family with children'
      : form.family === 'couple'
        ? 'couple'
        : 'solo mover';
  };

  const getBestBuddies = () => {
    const { origin, family, needs } = form;
    const isOverseas = origin === 'Overseas (International)' || origin === 'Overseas';
    return buddyProfiles
      .map((b) => {
        let score = 0;
        if (isOverseas && b.from === 'Overseas') score += 50;
        else if (!isOverseas && b.from === origin) score += 50;
        else score += 5;
        if (b.family === family) score += 30;
        score += needs.filter((n) => b.needs.includes(n)).length * 20;
        return { ...b, score };
      })
      .sort((a, b) => b.score - a.score)
      .slice(0, 3);
  };

  const getBestBuddy = () => getBestBuddies()[0] || buddyProfiles[0];
  const communityBuddies = () => getBestBuddies().slice(1);

  const buddyLatestMsg = () => {
    const b = getBestBuddy();
    const { needs } = form;
    if (needs.includes('gp'))
      return `"Hey! I know a great GP 5 min from the office — Sonic Health Plus on Elizabeth St, ask for the bulk-billing option. Want me to send the number? 😊" — ${b.name}`;
    if (needs.includes('schools'))
      return `"School waitlists move fast here — I can connect you with the right parents group for the CBD suburbs. When do you need enrolment by?" — ${b.name}`;
    if (needs.includes('housing'))
      return `"Happy to share the suburb shortlist I wish I'd had. Some great spots near the waterfront that aren't too far from the office." — ${b.name}`;
    return `"Hey! Hope Week 2 is going okay. Hobart surprises people — give it a month and you'll start to love it. What's been the hardest part so far?" — ${b.name}`;
  };

  const getTailoredJourney = () => {
    const items = [
      { id: 1, done: true, active: false, label: 'Transport from Hobart Airport arranged ✓', when: 'Before Day 1', tag: 'logistics' },
      { id: 2, done: true, active: false, label: 'TasNetworks digital employee card issued ✓', when: 'Day 1', tag: 'admin' },
      { id: 3, done: true, active: false, label: 'Anchor community matched — meet your buddy + 2 others ✓', when: 'Day 1', tag: 'people' },
      { id: 4, done: true, active: false, label: 'Office induction & site tour completed ✓', when: 'Week 1', tag: 'work' },
    ];
    if (form.needs.includes('gp'))
      items.push({ id: 5, done: false, active: true, label: 'Register with a GP — Sonic Health Plus recommended (200 Elizabeth St)', when: '⬅ do this now', tag: 'health' });
    if (form.needs.includes('schools'))
      items.push({ id: 6, done: false, active: false, label: 'School / childcare enrolment — popular schools have waitlists, start ASAP', when: 'Week 2', tag: 'family' });
    if (form.needs.includes('licence'))
      items.push({ id: 7, done: false, active: false, label: "Convert interstate driver's licence — Service Tasmania, 134 Macquarie St", when: 'Week 3', tag: 'admin' });
    if (form.needs.includes('housing'))
      items.push({ id: 8, done: false, active: false, label: 'Secure long-term accommodation — colleague housing tips in Life Map', when: 'Month 1', tag: 'logistics' });
    if (form.needs.includes('community'))
      items.push({ id: 9, done: false, active: false, label: 'Join Hobart Walking Club — next Sunday 8am, 12 TasNetworks members', when: 'Month 1', tag: 'community' });
    if (form.needs.includes('safety'))
      items.push({ id: 10, done: false, active: false, label: 'Connect with peer support network & save emergency contacts', when: 'Week 1', tag: 'wellbeing' });
    items.push({ id: 20, done: false, active: false, label: 'Complete first Anchor pulse check', when: 'Fortnight 1', tag: 'wellbeing' });
    items.push({ id: 21, done: false, active: false, label: 'Claim your $250 health & wellbeing rebate (via Concur in SAP)', when: 'Month 1', tag: 'benefits' });
    items.push({ id: 22, done: false, active: false, label: 'Contribute to the Life Map — share your tips with the next person', when: 'Month 3', tag: 'community' });
    return items;
  };

  const value = {
    form, updateForm, loginName, setLoginName, loginEmail, setLoginEmail,
    toggleHobby, toggleNeed, familyLabel,
    getBestBuddy, getBestBuddies, communityBuddies, buddyLatestMsg,
    getTailoredJourney,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export const buddyProfiles = [
  { id: 1, name: 'James Chen', role: 'Field Engineer', from: 'Melbourne', family: 'family', avatar: '👨‍💼', months: 8, needs: ['gp', 'schools'], bio: "Moving from Melbourne with the family? The school waitlists nearly broke me — but I sorted it. Ask me anything.", tag: '🏡 Family' },
  { id: 2, name: 'Priya Nair', role: 'Business Analyst', from: 'Sydney', family: 'couple', avatar: '👩‍💼', months: 5, needs: ['community', 'licence'], bio: "Came with my partner. Took 6 weeks to feel like we really belonged. Now we love it more than Sydney ever. Happy to chat.", tag: '👫 Couple' },
  { id: 3, name: 'Kofi Mensah', role: 'Network Technician', from: 'Brisbane', family: 'single', avatar: '👨‍🔧', months: 12, needs: ['housing', 'community'], bio: "Moved solo from Brisbane. Joined the hiking club week 2 — best decision I made. DM me anytime.", tag: '🧑 Solo' },
  { id: 4, name: 'Amara Singh', role: 'Project Manager', from: 'Perth', family: 'family', avatar: '👩‍🔬', months: 10, needs: ['schools', 'gp'], bio: "Three kids, big move, zero meltdowns (almost!). I have a suburb-by-school shortlist ready for you.", tag: '🏡 Family' },
  { id: 5, name: 'Luca Moretti', role: 'Electrical Engineer', from: 'Auckland', family: 'couple', avatar: '👨‍💻', months: 6, needs: ['housing', 'licence'], bio: "NZ to Tassie is surprisingly easy culturally. Licence conversion took 45 min. Happy to walk you through it.", tag: '👫 Couple' },
  { id: 6, name: 'Mei-Lin Wu', role: 'HR Advisor', from: 'Melbourne', family: 'single', avatar: '👩‍💼', months: 9, needs: ['community', 'safety'], bio: "Solo move from Melbourne. The culture and food scene here is genuinely great — took me a month to find it. I'll share the shortlist.", tag: '🧑 Solo' },
  { id: 7, name: 'Wei Zhang', role: 'Systems Engineer', from: 'Overseas', family: 'family', avatar: '👨‍💻', months: 14, needs: ['schools', 'gp'], bio: "From Shanghai — the visa process was thorough but TasNetworks were great throughout. Happy to help international families.", tag: '🌏 International' },
  { id: 8, name: 'Fatima Al-Hassan', role: 'Data Analyst', from: 'Overseas', family: 'single', avatar: '👩‍🔬', months: 7, needs: ['community', 'safety'], bio: "From Dubai. Finding your people here takes a bit longer — but the community is genuinely warm. Reach out.", tag: '🌏 International' },
  { id: 9, name: 'Raj Patel', role: 'Asset Manager', from: 'Overseas', family: 'family', avatar: '👨‍🔧', months: 11, needs: ['schools', 'housing'], bio: "From Mumbai — the adjustment is real but Tasmania is beautiful. Happy to share what helped our family most.", tag: '🌏 International' },
  { id: 10, name: 'Sophie Laurent', role: 'Graduate Engineer', from: 'Adelaide', family: 'single', avatar: '👩‍💼', months: 3, needs: ['community', 'licence'], bio: "Fresh from Adelaide and still finding my feet! Perfect for connecting with other recent starters — we can figure it out together.", tag: '🧑 Solo' },
];

export const hobbies = [
  { id: 'hiking', e: '🥾', l: 'Hiking' }, { id: 'food', e: '🍜', l: 'Food' },
  { id: 'photo', e: '📸', l: 'Photography' }, { id: 'sports', e: '⚽', l: 'Sports' },
  { id: 'arts', e: '🎨', l: 'Arts' }, { id: 'music', e: '🎵', l: 'Music' },
  { id: 'fitness', e: '🏋️', l: 'Fitness' }, { id: 'outdoors', e: '🌲', l: 'Outdoors' },
];

export const needs = [
  { id: 'gp', e: '🏥', l: 'Finding a GP', d: 'Register with a local doctor' },
  { id: 'licence', e: '🚗', l: "Driver's licence", d: 'Get your Tasmanian licence' },
  { id: 'community', e: '🤝', l: 'Meeting people', d: 'Social groups & activities' },
  { id: 'schools', e: '🏫', l: 'Schools & childcare', d: 'For your children' },
  { id: 'housing', e: '🏠', l: 'Finding housing', d: 'Long-term suburb & rental info' },
  { id: 'safety', e: '🔒', l: 'Feeling safe & secure', d: 'Emergency contacts, peer support' },
];

export const lifeMapCats = [
  { id: 'essentials', e: '✅', l: 'Essentials' },
  { id: 'community', e: '🤝', l: 'Community' },
  { id: 'food', e: '🍜', l: 'Food & Fun' },
  { id: 'family', e: '👨‍👩‍👧', l: 'Family' },
  { id: 'transport', e: '🚌', l: 'Getting Around' },
];

export const lifeMapData = {
  essentials: [
    { id: 1, e: '🏥', t: 'Sonic Health Plus — TasNetworks preferred GP', d: '200 Elizabeth St, Hobart. (03) 6281 4000. Show employee card — TasNetworks covers skin checks here.', r: 4.8, v: 134 },
    { id: 2, e: '💚', t: 'Your $250 Wellbeing Rebate', d: 'Spend on gym, yoga at The Studio, hiking gear — your choice every year. Claim via Concur in SAP. Most people forget this exists!', r: 4.9, v: 198 },
    { id: 3, e: '🧘', t: 'Free EAP Counselling — AccessEAP', d: 'Up to 3 confidential sessions. Call 1800 818 728. Covers you AND your family. Zero cost. Zero judgment.', r: 4.9, v: 156 },
    { id: 4, e: '🚗', t: 'Convert your interstate licence', d: 'Service Tasmania, 134 Macquarie St. Book online — 45 min. Bring ID + current licence. Do this by Week 3.', r: 4.5, v: 89 },
    { id: 5, e: '🏋️', t: 'Onsite Gym — Maria St HQ', d: 'Free at Maria St, Cambridge & Rocherlea. Family 18+ in your household also get access. Fill the Gym Induction Form.', r: 4.7, v: 112 },
    { id: 6, e: '🏦', t: 'MyState Bank — No-fee account', d: 'Open a Glide account with no monthly fees + lower home loan rates. Call Roseann McIntee: 0428 172 589.', r: 4.3, v: 67 },
    { id: 7, e: '💉', t: 'Free flu vax for the whole family', d: "TasNetworks covers flu vaccinations for you AND your immediate family. Contact be@tasnetworks.com.au — great for kids' first Tassie winter.", r: 4.8, v: 89 },
  ],
  community: [
    { id: 8, e: '🥾', t: 'Hobart Walking Club', d: 'Sunday mornings at kunanyi/Mt Wellington. 12 TasNetworks members. Uber-welcoming. Ask James to introduce you.', r: 4.9, v: 203 },
    { id: 9, e: '🌏', t: 'New to Hobart Facebook Group', d: '8,500+ members. Join the day you arrive — gold for local tips, buy/sell, event invites.', r: 4.7, v: 156 },
    { id: 10, e: '⚽', t: 'Southern Football League', d: 'Multiple skill levels, register for the season. Great way to make real friends fast.', r: 4.4, v: 78 },
  ],
  food: [
    { id: 11, e: '🍔', t: 'Pub Banc Group — 20% OFF with your lanyard', d: 'Show TasNetworks lanyard at Cargo Bar Pizza, Franklin Wharf, Jack Greene Bar, Post Street Social, Republic Bar & Cafe. 20% off food & drinks.', r: 4.9, v: 187 },
    { id: 12, e: '🧘', t: 'The Studio — $10/class first month', d: 'Yoga, Pilates, Barrecode, Cycle. 17 Gladstone St. TasNetworks exclusive: $30 orientation then $10/class. Call 03 6223 7553.', r: 4.7, v: 143 },
    { id: 13, e: '🍜', t: 'Ramen Yuki', d: '"Best ramen south of Melbourne" per 5 TasNetworks staff. 74 Liverpool St. Get the tonkotsu.', r: 4.9, v: 187 },
    { id: 14, e: '🛒', t: 'Farm Gate Market', d: 'Sunday 9am–1pm, Bathurst St. Incredible local produce. Bring cash and a bag.', r: 4.8, v: 245 },
    { id: 15, e: '☕', t: 'Pilgrim Coffee', d: '5 min walk from office. Best flat white in Hobart — "the unofficial second office".', r: 4.7, v: 198 },
    { id: 16, e: '🍕', t: 'Cuppa Cafeteria — Maria Street HQ', d: 'Admin 1. 7:30am–2:30pm Mon–Fri. Hot food ends 2pm. Your canteen from Day 1.', r: 4.5, v: 134 },
  ],
  family: [
    { id: 17, e: '🏫', t: 'School enrolment — start NOW', d: 'Apply via education.tas.gov.au. Popular schools have waitlists — start the day you arrive. James can recommend suburbs.', r: 4.3, v: 45 },
    { id: 18, e: '🧸', t: 'MacKillop Childcare Centre', d: '10 min from office. CCS-subsidised. Call to join waitlist immediately.', r: 4.6, v: 62 },
    { id: 19, e: '🌳', t: 'Queens Domain Playground', d: 'Huge free playground, 5 min from CBD. TasNetworks families meet here every Sunday morning.', r: 4.9, v: 134 },
  ],
  transport: [
    { id: 20, e: '🚌', t: 'Metro Tasmania App', d: "Download 'Metro Tasmania'. Get a greenCard for discounts. CBD to suburbs ~30 min.", r: 4.1, v: 89 },
    { id: 21, e: '🚗', t: 'TasNetworks Carpooling', d: 'Check #carpool on Slack. 8 colleagues share rides from Northern suburbs to office daily.', r: 4.5, v: 112 },
    { id: 22, e: '🚲', t: 'Hobart City Bikes', d: 'Share bikes across CBD. $5/day. Great for first few weeks before your car arrives.', r: 4.2, v: 67 },
  ],
};

export const services = [
  { id: 1, e: '💳', t: 'Employee Card', d: 'Digital ID active Day 1 — unlocks all services' },
  { id: 2, e: '🏥', t: 'Medical Services', d: 'GP finder + EAP counselling (1800 818 728)' },
  { id: 3, e: '🚗', t: 'Licence & Driving', d: 'Convert licence, book driving lessons' },
  { id: 4, e: '💚', t: '$250 Wellbeing Rebate', d: 'Gym, yoga, hiking gear — your choice' },
  { id: 5, e: '🏋️', t: 'Onsite Gym Access', d: 'Maria St, Cambridge & Rocherlea · free' },
  { id: 6, e: '🏠', t: 'Housing Guide', d: 'Suburb info & rental market crowdsourced' },
  { id: 7, e: '🚌', t: 'Carpooling', d: 'Match with TasNetworks colleagues near you' },
  { id: 8, e: '🍔', t: 'Dining Discounts', d: '20% off at 5 Pub Banc Group venues' },
  { id: 9, e: '🏫', t: 'Schools & Childcare', d: 'Enrolment guides, waitlist tips' },
  { id: 10, e: '📋', t: 'Paperwork Support', d: 'Visa docs, licence conversion, gov forms' },
  { id: 11, e: '🏦', t: 'MyState Bank', d: 'No-fee accounts, lower home loan rates' },
  { id: 12, e: '🌏', t: 'Cultural Programs', d: 'Cultural & spiritual community support' },
  { id: 13, e: '💻', t: 'IT Support', d: 'Tech help for new starters (JIRA portal)' },
  { id: 14, e: '📝', t: 'Submit a Form', d: 'Complaints, resource requests, feedback' },
  { id: 15, e: '⚖️', t: 'Residency Support', d: 'PR pathway for 3+ year employees' },
  { id: 16, e: '🧘', t: 'Free Counselling', d: 'AccessEAP · 3 sessions · 1800 818 728' },
];

export const hrEmps = [
  { id: 1, name: 'Sarah Mitchell', origin: 'Melbourne, VIC', weeks: 2, buddy: true, pulse: 8.5, risk: 'low' },
  { id: 2, name: 'Marcus Osei', origin: 'Brisbane, QLD', weeks: 4, buddy: true, pulse: 4.2, risk: 'hi' },
  { id: 3, name: 'Priya Sharma', origin: 'Mumbai, India', weeks: 6, buddy: true, pulse: 6.1, risk: 'mid' },
  { id: 4, name: 'Tom Williams', origin: 'Auckland, NZ', weeks: 1, buddy: true, pulse: null, risk: 'mid' },
  { id: 5, name: 'Aisha Al-Rashid', origin: 'Dubai, UAE', weeks: 8, buddy: true, pulse: 3.8, risk: 'hi' },
  { id: 6, name: 'James Park', origin: 'Sydney, NSW', weeks: 12, buddy: true, pulse: 8.9, risk: 'low' },
  { id: 7, name: 'Emma Kowalski', origin: 'Perth, WA', weeks: 5, buddy: true, pulse: 7.2, risk: 'low' },
  { id: 8, name: 'David Nguyen', origin: 'Ho Chi Minh City', weeks: 3, buddy: true, pulse: 6.8, risk: 'mid' },
];

export const awsArch = [
  { s: 'Amazon Bedrock', d: 'Claude — AI buddy matching, pulse chatbot, sentiment & at-risk scoring', bg: 'bg-orange-50', tc: 'text-orange-600' },
  { s: 'AWS Lambda', d: 'Serverless API — matching engine, privacy-compliant, HR alerts', bg: 'bg-yellow-50', tc: 'text-yellow-600' },
  { s: 'DynamoDB', d: 'Employee profiles, pulse scores, Life Map entries (consent-gated)', bg: 'bg-blue-50', tc: 'text-blue-600' },
  { s: 'EventBridge', d: 'Fortnightly pulse scheduler — fires 14 days post-arrival per employee', bg: 'bg-purple-50', tc: 'text-purple-600' },
  { s: 'Amazon SNS', d: 'Push notifications + at-risk HR alerts in real time', bg: 'bg-pink-50', tc: 'text-pink-600' },
  { s: 'SAP Integration', d: 'Reads new-starter records from TasNetworks SAP → auto-triggers onboarding', bg: 'bg-teal-50', tc: 'text-teal-600' },
  { s: 'AWS Amplify', d: 'Frontend hosting + CI/CD + Cognito SSO with TasNetworks Active Directory', bg: 'bg-green-50', tc: 'text-green-600' },
  { s: 'QuickSight', d: 'HR retention dashboard — pulse trends, ROI, churn risk', bg: 'bg-indigo-50', tc: 'text-indigo-600' },
];
