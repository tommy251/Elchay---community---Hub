export const PROGRAMS = [
  { slug: "assessment", title: "Assessment & Diagnosis", summary: "Compassionate developmental screening and clinical assessment so families have answers and a clear path forward.", details: "Our multidisciplinary team conducts standardized developmental screenings (M-CHAT, ADOS-informed observations), feeding and sensory assessments, and parent interviews. Each family leaves with a written report, a plain-language explanation, and a tailored next-step plan." },
  { slug: "therapy", title: "Therapy Services", summary: "Evidence-based therapy: speech, occupational, behavioural and social skills, delivered with warmth.", details: "Speech-language therapy, occupational therapy, ABA-informed behavioural therapy, social-skills groups, and parent-coaching sessions. Sliding-scale pricing and full scholarships available." },
  { slug: "education", title: "Inclusive Education", summary: "Specialized learning support and teacher training so every child can thrive in school.", details: "We run a small inclusive learning hub, train mainstream teachers in inclusive classroom strategies, and develop individualized education plans (IEPs) in partnership with schools." },
  { slug: "family-support", title: "Family Support", summary: "Parent groups, sibling workshops, respite, and one-on-one navigation.", details: "Monthly parent support circles, sibling workshops, home-visit coaching, mental-health check-ins for caregivers, and a peer mentor network." },
  { slug: "advocacy", title: "Advocacy & Awareness", summary: "Changing the narrative around autism through evidence and dignified storytelling.", details: "We run public awareness campaigns, train healthcare workers and faith leaders, and partner with policymakers on inclusive education and disability rights." },
  { slug: "scholarships", title: "Scholarships & Grants", summary: "No family is turned away because of cost.", details: "Our scholarship fund covers assessment, therapy blocks, assistive devices, and school fees for families who face financial barriers." },
  { slug: "academic-reintegration", title: "Academic Re-integration", summary: "Bridging children back into mainstream and inclusive classrooms after therapy.", details: "A structured pathway that prepares children — and their schools — for a successful return to academic life. We pair therapy graduates with shadow teachers, run IEP handover meetings with school leadership, and coach mainstream teachers on day-to-day support." },
  { slug: "1000-voices", title: "1,000 Voices for Inclusion", summary: "A national campaign to surface 1,000 stories of autistic Nigerians and their families.", details: "Through storytelling films, school visits, faith-leader roundtables and a growing digital library, the 1,000 Voices campaign builds public understanding and pushes for inclusive policy in education and healthcare." },
  { slug: "digital-learning", title: "Digital Learning & E-Library", summary: "Free online courses, webinars and a parent e-library — accessible anywhere in Nigeria.", details: "A growing on-demand library of autism guides, therapy explainers, parent webinars and downloadable worksheets — so families outside our physical centre can still get evidence-based support." },
] as const;

export const STORIES = [
  { slug: "couldnt-afford-therapy", name: "A Mother in Lagos", category: "Could not afford therapy", quote: "We received the diagnosis, but the therapy fees were beyond what we could ever afford.", body: "After an assessment confirmed her son was autistic, this family was given a clear therapy plan — but the weekly cost was simply out of reach on a single income. They went home with hope but no way to act on it. Stories like hers are exactly why our scholarship fund exists: so a diagnosis is never the end of the road." },
  { slug: "started-but-stopped", name: "The Bello Family", category: "Started therapy but had to stop", quote: "He was making real progress. Then the money ran out and we had to stop coming.", body: "Their son began speech and occupational therapy and started using single words within weeks. After four months the family could no longer sustain the fees and sessions stopped. Donor support allows us to keep families like the Bellos in care — without interruption — because consistency is what changes a child's trajectory." },
  { slug: "completed-and-thriving", name: "Tunde, age 6", category: "Completed therapy — positive outcome", quote: "He said my name for the first time after 9 months of speech therapy.", body: "When Tunde first came to Elchay, he was non-verbal and easily overwhelmed in groups. With nine months of consistent speech therapy, a sensory-friendly classroom, and a dedicated parent coach, Tunde now uses 40+ words and attends an inclusive primary school." },
] as const;

export const EVENTS = [
  { slug: "autism-awareness-week-2026", title: "Autism Awareness Week 2026", date: "April 2 – 8, 2026", location: "Lagos & Online", type: "Campaign", body: "A full week of community sensitization, free screenings, parent workshops, and storytelling. Open to everyone." },
  { slug: "parent-training-march", title: "Parent Coaching Cohort", date: "March 15, 2026", location: "Elchay Centre, Lagos", type: "Training", body: "A 6-week parent-coaching cohort covering communication, behaviour, sensory regulation and self-care for caregivers." },
  { slug: "inclusive-teachers-workshop", title: "Inclusive Teachers Workshop", date: "February 22, 2026", location: "Online", type: "Workshop", body: "Practical, classroom-tested strategies for teachers supporting neurodivergent learners. Certificate of completion included." },
  { slug: "community-walk", title: "Community Walk for Inclusion", date: "May 18, 2026", location: "Lekki Conservation Centre", type: "Event", body: "A family-friendly walk, picnic and sensory-friendly play area to celebrate inclusion in our community." },
] as const;

export const RESOURCES = [
  { slug: "what-is-autism", title: "What is Autism? — A plain-language guide", type: "Guide", body: "Autism is a developmental difference that affects how a person communicates, learns and experiences the world. It is a spectrum — no two autistic people are alike. This guide walks parents through early signs, what to do next, and what NOT to worry about." },
  { slug: "early-signs-checklist", title: "Early Signs Checklist (0–3 years)", type: "Worksheet", body: "A printable checklist of developmental milestones and possible early signs of autism, with guidance on when to seek an assessment." },
  { slug: "sensory-strategies", title: "Sensory Strategies at Home", type: "Therapy Guide", body: "Practical, low-cost sensory strategies parents can try at home — calming spaces, sensory diets, and how to recognize overload." },
  { slug: "school-advocacy", title: "Advocating for Your Child at School", type: "Parent Training", body: "Scripts, sample letters, and a meeting-prep worksheet to help you partner effectively with your child's school." },
  { slug: "communication-cards", title: "Visual Communication Cards (printable)", type: "Worksheet", body: "A printable set of high-contrast visual cards to support non-speaking and minimally-speaking children." },
  { slug: "caregiver-wellbeing", title: "Caregiver Wellbeing Workbook", type: "Workbook", body: "A six-week reflective workbook to help caregivers protect their own mental health while supporting their child." },
] as const;

export const POSTS = [
  { slug: "barrier-to-dreams", title: "Barrier to Dreams", date: "Nov 4, 2025", body: "The dreams of becoming something, but without a specialized learning environment, are enough to cause individuals with neurodivergent conditions to fall behind. Here is what we are doing about it." },
  { slug: "three-ways-to-support", title: "3 Ways to Support Neurological Health Today", date: "Oct 18, 2025", body: "Donate, partner with us, and share dignified stories. Small acts move the needle for thousands of families." },
  { slug: "and-were-just-getting-started", title: "And We're Just Getting Started", date: "Sept 30, 2025", body: "You have been changing the narrative around autism with us since day one. Here is our vision for 2026." },
] as const;

export const PARTNERS = [
  "Lagos State Ministry of Health", "UNICEF Nigeria", "Special Needs Initiative",
  "Bright Future Schools", "Carecorp Hospitals", "First Bank Foundation",
  "Zeebah Foundation", "Ike Foundation for Autism",
] as const;

export const COMMUNITY_PULSE = [
  { id: 1, type: "event", tag: "Upcoming Event", title: "Parent Coaching Cohort starts March 15", body: "A 6-week community cohort for caregivers. Limited spaces — register now.", time: "2 days ago", location: "Elchay Centre, Lagos" },
  { id: 2, type: "story", tag: "New Story", title: "Tunde said 'mummy' for the first time", body: "After 9 months of speech therapy, Tunde's family shared their milestone with the community.", time: "5 days ago" },
  { id: 3, type: "resource", tag: "New Resource", title: "Sensory Strategies at Home — updated guide", body: "Our clinical team added new low-cost strategies for small spaces. Free download.", time: "1 week ago" },
  { id: 4, type: "campaign", tag: "Campaign Update", title: "1,000 Voices hits 132 recordings", body: "We have recorded 132 stories across 9 states. Help us reach all 36 by April 2026.", time: "1 week ago" },
  { id: 5, type: "training", tag: "Training", title: "Inclusive Teachers Workshop — February 22", body: "Free online workshop for teachers. Certificate included. Open to all Nigerian schools.", time: "2 weeks ago", location: "Online" },
  { id: 6, type: "event", tag: "Community Walk", title: "Community Walk for Inclusion — May 18", body: "A family-friendly walk and picnic at Lekki Conservation Centre. Save the date!", time: "3 weeks ago", location: "Lekki Conservation Centre" },
] as const;
