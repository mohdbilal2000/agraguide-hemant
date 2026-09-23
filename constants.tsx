import { Tour, Destination, Review, BlogPost, GuidePackage } from './types';

// Shown wherever a price appears. Prices are indicative starting points only —
// monument entry fees and optional add-ons are extra, and the final quote
// varies by group size and season. Keeps us from being held to a fixed number.
export const PRICE_DISCLAIMER =
  'Indicative starting price per person. Monument entry fees and optional add-ons are extra; the final price varies by group size and season. You’ll get an exact quote before you pay.';

export const PRICE_DISCLAIMER_SHORT = 'From price, per person · entry fees & add-ons extra';

export const GUIDE_PACKAGES: GuidePackage[] = [
  {
    id: 'guide-only',
    name: 'Guide Only',
    price: '$25',
    color: 'gray',
    features: ['Approved Govt. Guide', 'Monument History', 'Shopping Assistance', 'Local Hidden Gems'],
    icon: 'Users'
  },
  {
    id: 'guide-taxi',
    name: 'Guide + Taxi',
    price: '$65',
    color: 'blue',
    features: ['Private AC Vehicle', 'Professional Guide', 'Fuel & Parking Included', 'Hotel Pickup/Drop'],
    icon: 'Car'
  },
  {
    id: 'guide-taxi-meals',
    name: 'Guide + Taxi + Meals',
    price: '$85',
    color: 'amber',
    features: ['Everything in G+T', 'Authentic Indian Lunch', 'Bottled Mineral Water', 'Evening Tea/Coffee'],
    icon: 'Utensils'
  },
  {
    id: 'all-inclusive',
    name: 'All-Inclusive',
    price: '$120',
    color: 'maroon',
    features: ['Everything in G+T+M', 'Monument Entry Fees', 'Traditional Welcome', 'Personal Souvenir'],
    icon: 'Crown'
  }
];

export const TOURS: Tour[] = [
  // ─── SAME DAY TOURS ───
  {
    id: 'sunrise-taj-tour',
    title: 'Sunrise Taj Mahal Private Tour',
    description: 'Witness the breathtaking sunrise at the Taj Mahal. Depart from Delhi early morning and experience the iconic monument bathed in golden light, followed by a guided tour of Agra Fort.',
    duration: '12 Hours',
    price: 45,
    image: '/taj-mahal-reflection.webp',
    category: 'Same Day Tours',
    rating: 4.9,
    reviewsCount: 1420,
    highlights: ['Sunrise at Taj Mahal', 'Agra Fort guided visit', 'Private AC car from Delhi', 'Expert heritage guide'],
    itinerary: [
      { time: '03:00 AM', activity: 'Early morning pickup from Delhi hotel' },
      { time: '05:30 AM', activity: 'Arrive at Taj Mahal East Gate' },
      { time: '05:45 AM', activity: 'Sunrise viewing at Taj Mahal with guided tour' },
      { time: '08:30 AM', activity: 'Breakfast at local heritage restaurant' },
      { time: '09:30 AM', activity: 'Agra Fort historical exploration' },
      { time: '11:30 AM', activity: 'Visit Mehtab Bagh for panoramic Taj view' },
      { time: '12:30 PM', activity: 'Lunch at authentic Mughlai restaurant' },
      { time: '01:30 PM', activity: 'Departure for Delhi' },
      { time: '04:00 PM', activity: 'Drop-off at Delhi hotel or airport' }
    ],
    isMostBooked: true,
    overview: [
      'The Taj Mahal does not open at a fixed time. The Archaeological Survey of India opens the gates 30 minutes before sunrise and closes them 30 minutes before sunset, so the opening moves through the year — around 6:35am in December, as early as 4:55am in June. This tour is timed against that, not against a clock, which is why the pickup shifts with your travel month.',
      'The point of going at sunrise is not only the light. It is the first forty minutes, when the crowd inside is a few hundred rather than several thousand and the watercourse is still enough to hold a reflection. By nine in the morning the forecourt is full and the marble has gone flat and white.',
      'After the Taj you break for breakfast, take a guided visit to Agra Fort, and stop at Mehtab Bagh across the river for the view most day trippers never see. You are back in Delhi by late afternoon.'
    ],
    included: [
      'Private air-conditioned vehicle with a professional chauffeur, yours for the whole day — never a shared pickup',
      'Government-licensed heritage guide in Agra, holding a Ministry of Tourism regional licence',
      'Pre-dawn door-to-door pickup and drop at your Delhi hotel or the airport',
      'All tolls, parking, fuel and driver charges',
      'Monument tickets arranged in advance — which is the whole point at sunrise, when the counter queue costs you the light',
      'A female guide on request, at no extra charge, subject to availability on your date'
    ],
    notIncluded: [
      'Monument entry fees — we book them for you and confirm the exact amount in writing before you pay anything. A foreign adult Taj Mahal ticket is ₹1,300, SAARC ₹740 and Indian citizens ₹250',
      'Meals and drinks — breakfast and lunch stops are built into the day and you settle those bills there',
      'Camera and video fees charged at some monuments',
      'Tips and personal spending'
    ],
    goodToKnow: [
      {
        title: 'Your pickup time depends on the month you travel',
        text: 'Roughly 3:00am in winter and closer to 1:30am in summer, because the gate opens 30 minutes before sunrise. We time it so you reach the East Gate about twenty minutes before opening — security screening is the real bottleneck, and that queue position is the entire point of a sunrise tour. Between May and July we usually suggest the overnight version instead.'
      },
      {
        title: 'January fog is a real risk',
        text: 'Agra fog in December and January can hide the monument completely until around 10am. We will tell you honestly if your date carries that risk. It is the one thing about a sunrise tour nobody can guarantee, and we would rather say so before you book than after.'
      },
      {
        title: 'The Taj Mahal is closed every Friday',
        text: 'No exceptions, for congregational prayers at the mosque inside the complex. If your only free day is a Friday we shift the day to Agra Fort, Fatehpur Sikri and Mehtab Bagh.'
      },
      {
        title: 'Nothing is charged when you book',
        text: 'We confirm guide and vehicle availability for your date first, then send payment details on WhatsApp. Cash, UPI, bank transfer and card are accepted, and this tour needs no deposit. Free cancellation up to 24 hours before pickup.'
      }
    ],
    faqs: [
      {
        question: 'What time does the Taj Mahal open for sunrise?',
        answer:
          'Thirty minutes before sunrise, which moves through the year rather than sitting at a fixed time — roughly 6:35am in December and as early as 4:55am in June. Ticket counters open about an hour before sunrise. Because the gate time moves, we set your pickup against your actual travel date rather than quoting one time for the whole year.'
      },
      {
        question: 'How early is the pickup from Delhi for a sunrise Taj Mahal tour?',
        answer:
          'Around 3:00am in winter and closer to 1:30am in summer. The drive is three to three and a half hours on the Yamuna Expressway, and we aim to have you at the East Gate about twenty minutes before it opens. Between May and July the pickup gets early enough that we usually recommend the overnight version, where you sleep in Agra and walk to the gate.'
      },
      {
        question: 'Is sunrise better than sunset at the Taj Mahal?',
        answer:
          'For photographs and for crowds, yes. Sunrise gives the softest light, the fewest people in frame, and a chance at a reflection in the watercourse before the surface is disturbed. Sunset is warmer and more dramatic but considerably busier. Midday is the hardest light of the day — the marble goes flat and white under overhead sun.'
      },
      {
        question: 'Is the early start worth it?',
        answer:
          'For most people, yes, and the reason is the first forty minutes rather than the sunrise itself. Arriving at opening means a few hundred people inside instead of several thousand, which changes what the place feels like more than the light does. If you are travelling with young children or would rather not lose a night of sleep, the standard same-day tour by car leaves at 6am and still reaches Agra before the worst of the crowds.'
      },
      {
        question: 'What happens if it is foggy and we cannot see the Taj Mahal?',
        answer:
          'Winter fog in Agra can hide the monument until mid-morning, and nobody can predict it reliably more than a day or two ahead. Your ticket is valid for a three-hour visit from entry, so in practice the plan is to wait it out with your guide and reorder the day — Agra Fort first, the Taj once it clears. We will flag the risk before you book if your date falls in the December to January window.'
      }
    ]
  },
  {
    id: 'same-day-taj-car',
    title: 'Same Day Taj Mahal Tour by Car',
    description: 'A comfortable day trip to the Taj Mahal from Delhi by private AC car with an expert guide. Visit the Taj Mahal, Agra Fort, and enjoy local cuisine.',
    duration: '12 Hours',
    price: 45,
    image: '/taj-mahal-dawn.webp',
    category: 'Same Day Tours',
    rating: 4.8,
    reviewsCount: 980,
    highlights: ['Private AC car from Delhi', 'Taj Mahal & Agra Fort', 'Lunch at local restaurant', 'Flexible pickup time'],
    itinerary: [
      { time: '06:00 AM', activity: 'Pickup from Delhi hotel by private AC sedan' },
      { time: '09:30 AM', activity: 'Arrive in Agra, meet your heritage guide' },
      { time: '10:00 AM', activity: 'Guided tour of the Taj Mahal' },
      { time: '12:30 PM', activity: 'Authentic Mughlai lunch at local restaurant' },
      { time: '01:30 PM', activity: 'Agra Fort guided exploration' },
      { time: '03:00 PM', activity: 'Optional visit to Itimad-ud-Daulah (Baby Taj)' },
      { time: '04:00 PM', activity: 'Depart for Delhi' },
      { time: '07:30 PM', activity: 'Drop-off at Delhi hotel or airport' }
    ],
    overview: [
      'Agra sits about 230 km from Delhi on the Yamuna Expressway — three to three and a half hours each way in a private car, without the fixed departure and return times a train locks you into. That flexibility is the whole reason most people choose the car: you leave when it suits you, stop when you want to, and stay at the Taj as long as the light holds.',
      'This version starts at a civilised hour rather than before dawn. You reach Agra mid-morning, see the Taj Mahal with a licensed guide, break for lunch, and spend the afternoon at Agra Fort before the drive back. If you would rather have the monument close to empty and the soft early light, the sunrise version leaves Delhi around 3am instead.',
      'The day is long — roughly twelve hours door to door — but almost all of the effort is in the driving, and you are doing that in an air-conditioned car with a chauffeur rather than at the wheel.'
    ],
    included: [
      'Private air-conditioned vehicle with a professional chauffeur, yours for the whole day — never a shared pickup',
      'Government-licensed heritage guide in Agra, holding a Ministry of Tourism regional licence',
      'Door-to-door pickup and drop at your Delhi hotel or the airport',
      'All tolls, parking, fuel and driver charges on the Yamuna Expressway',
      'Monument tickets arranged in advance so you are not queuing at a counter',
      'A female guide on request, at no extra charge, subject to availability on your date'
    ],
    notIncluded: [
      'Monument entry fees — we book them for you and confirm the exact amount in writing before you pay anything. A foreign adult Taj Mahal ticket is ₹1,300, SAARC ₹740 and Indian citizens ₹250',
      'Meals and drinks — the day builds in a lunch stop at a restaurant we know, and you settle that bill there',
      'Camera and video fees charged at some monuments',
      'Tips and personal spending'
    ],
    goodToKnow: [
      {
        title: 'Nothing is charged when you book',
        text: 'We confirm guide and vehicle availability for your date first, then send payment details on WhatsApp. Cash, UPI, bank transfer and card are all accepted, and single-day tours like this one need no deposit.'
      },
      {
        title: 'The Taj Mahal is closed every Friday',
        text: 'With no exceptions, for congregational prayers at the mosque inside the complex. If your only free day is a Friday we shift the itinerary to Agra Fort, Fatehpur Sikri and Mehtab Bagh — which still gives you the classic view across the river.'
      },
      {
        title: 'No shopping stops, ever',
        text: 'Many cheap Agra day tours route you through a marble emporium or a handicraft showroom, because the operator earns commission on what you buy. We do not, which is also why our day fits in Itimad-ud-Daulah where others fit in a showroom.'
      },
      {
        title: 'Free cancellation up to 24 hours before',
        text: 'Cancel or move a confirmed booking at no charge up to 24 hours before pickup, subject to availability. Inside 24 hours, costs already committed to the driver or to monument tickets may apply.'
      }
    ],
    faqs: [
      {
        question: 'How long does it take to drive from Delhi to Agra?',
        answer:
          'Three to three and a half hours each way on the Yamuna Expressway, covering about 230 km. Leaving Delhi at 6am puts you in Agra by around 9:30am, comfortably before the midday heat and the largest crowds. Traffic getting out of Delhi is the variable — an hour later departure can add forty minutes to the same journey.'
      },
      {
        question: 'Is a same day Taj Mahal tour from Delhi worth it, or too rushed?',
        answer:
          'It works well when the day is planned properly. You get around two hours at the Taj Mahal and a full guided visit to Agra Fort, which is what most visitors want from Agra. What it does not leave room for is Fatehpur Sikri or a relaxed evening — if you want those, the overnight version gives you sunrise and sunset in Agra without the pre-dawn drive.'
      },
      {
        question: 'Car or the Gatimaan Express train — which is better for a day trip?',
        answer:
          'The train is faster and more comfortable, but it locks you to fixed timings: out around 8:10am, back around 5:50pm. The car takes longer but lets you set your own departure, stop where you like, and stay at the monument as long as you want. For a day built around sunrise the car wins outright; for a relaxed late-morning start the train is excellent.'
      },
      {
        question: 'Do we need to book Taj Mahal tickets in advance?',
        answer:
          'We book them for you as part of arranging the tour, so you skip the counter queue. This matters more than it used to — the Taj Mahal gates are digital-payment only now, with no cash accepted, so arriving to buy on the day costs real time. The ticket cost is billed to you separately and confirmed in writing before you pay anything.'
      },
      {
        question: 'What time should we leave Delhi for the Taj Mahal?',
        answer:
          'For this tour, 6am. That reaches Agra mid-morning with the light still good and before the heaviest crowds. If you want the monument at its quietest, the sunrise version leaves around 3am in winter and closer to 1:30am in summer, because the Taj opens 30 minutes before sunrise rather than at a fixed time.'
      }
    ]
  },
  {
    id: 'same-day-taj-train',
    title: 'Same Day Taj Mahal Tour by Express Train',
    description: 'Travel to Agra by Gatimaan Express from Delhi for a hassle-free day trip to the Taj Mahal. The fastest and most scenic route to experience Agra\'s heritage.',
    duration: '13 Hours',
    price: 65,
    image: '/taj-mahal-couple.webp',
    category: 'Same Day Tours',
    rating: 4.8,
    reviewsCount: 870,
    highlights: ['Gatimaan Express train tickets', 'Taj Mahal guided tour', 'Agra Fort visit', 'Private AC vehicle in Agra'],
    itinerary: [
      { time: '07:00 AM', activity: 'Pickup from Delhi hotel to Hazrat Nizamuddin Station' },
      { time: '08:10 AM', activity: 'Board Gatimaan Express (India\'s fastest train)' },
      { time: '09:50 AM', activity: 'Arrive Agra Cantt, meet your guide' },
      { time: '10:15 AM', activity: 'Taj Mahal in-depth guided tour' },
      { time: '01:00 PM', activity: 'Lunch at heritage restaurant' },
      { time: '02:00 PM', activity: 'Agra Fort guided exploration' },
      { time: '04:00 PM', activity: 'Visit local marble craft workshop' },
      { time: '05:00 PM', activity: 'Transfer to Agra Cantt station' },
      { time: '05:45 PM', activity: 'Return by Gatimaan Express to Delhi' },
      { time: '07:30 PM', activity: 'Arrive Delhi, drop-off at hotel' }
    ],
    overview: [
      "The Gatimaan Express is the fastest train in India and it exists largely because of this journey. It leaves Hazrat Nizamuddin around 8:10 AM and reaches Agra Cantt around 9:50 AM — one hour forty, against three and a half by road. The return leaves Agra around 5:50 PM.",
      "What you are buying is a day without driving. You arrive rested rather than after three hours on the expressway, and the same is true of the journey home, which is the leg most people underestimate. A private vehicle and your guide meet the train at Agra Cantt and stay with you until you board again.",
      "The trade is flexibility. The train times are fixed, which rules out sunrise at the Taj — by 9:50 AM the light has gone flat. If the early light matters more to you than the comfort, the same-day tour by car or the sunrise tour are the honest alternatives."
    ],
    included: [
      "Return Gatimaan Express tickets, Delhi to Agra Cantt and back, in air-conditioned chair car",
      "Hotel transfers to and from Hazrat Nizamuddin station in Delhi",
      "Private air-conditioned vehicle with a chauffeur in Agra for the whole day",
      "Government-licensed Agra guide holding a Ministry of Tourism regional licence, meeting you at the station",
      "Monument tickets arranged in advance so you are not queuing at a counter",
      "A female guide on request, at no extra charge, subject to availability on your date"
    ],
    notIncluded: [
      "Monument entry fees — we book them for you and confirm the exact amount in writing before you pay anything. A foreign adult Taj Mahal ticket is ₹1,300, SAARC ₹740 and Indian citizens ₹250",
      "Meals and drinks — a lunch stop is built into the day and you settle that bill there",
      "Camera and video fees charged at some monuments",
      "Tips and personal spending"
    ],
    goodToKnow: [
      {
        "title": "Train seats are the constraint, not the car",
        "text": "The Gatimaan runs once a day in each direction and sells out in peak season, particularly October to March and around public holidays. The earlier you tell us your date, the more likely we can hold seats on the train you actually want. Bring the passport you booked with — Indian Railways requires photo ID matching the ticket."
      },
      {
        "title": "This tour cannot do sunrise",
        "text": "The train reaches Agra at 9:50 AM, well after the soft early light has gone. That is not a flaw in the tour, it is what the timetable allows. If sunrise is the reason you are going, take the car version instead and accept the 3 AM start."
      },
      {
        "title": "The Taj Mahal is closed every Friday",
        "text": "No exceptions, for congregational prayers at the mosque inside the complex. Tell us your dates and we will flag it before you book, or reshape the itinerary around Agra Fort, Fatehpur Sikri and Mehtab Bagh — which still gives you the classic view across the river."
      },
      {
        "title": "Nothing is charged when you book",
        "text": "We confirm guide and vehicle availability for your date first, then send payment details on WhatsApp. Cash, UPI, bank transfer and card are all accepted, and single-day tours need no deposit. Free cancellation up to 24 hours before pickup."
      }
    ],
    faqs: [
      {
        "question": "How long does the Gatimaan Express take from Delhi to Agra?",
        "answer": "One hour forty minutes. It leaves Hazrat Nizamuddin around 8:10 AM and reaches Agra Cantt around 9:50 AM, with the return departing Agra around 5:50 PM. That is roughly half the time a car takes on the Yamuna Expressway, and you spend it sitting still rather than in traffic."
      },
      {
        "question": "Is the train or the car better for a Taj Mahal day trip?",
        "answer": "The train is faster and far more comfortable, and you arrive rested. The car is flexible — you choose your departure, stop where you like, and can leave at 3 AM for sunrise. For a relaxed late-morning start the train wins outright. For a day built around the early light, only the car can do it."
      },
      {
        "question": "Are the train tickets included in the price?",
        "answer": "Yes — return Gatimaan Express tickets in air-conditioned chair car are part of this tour, along with your hotel transfers at the Delhi end and a private vehicle with a chauffeur for the whole day in Agra. Monument entry fees are the main thing billed separately."
      },
      {
        "question": "What happens if the train is delayed or cancelled?",
        "answer": "The Gatimaan is among the most punctual services on the network, but winter fog does occasionally delay it. Your guide and vehicle in Agra wait for the train you are actually on rather than a scheduled time. If a service is cancelled outright we move you to the car version for the day at no extra cost, which means an earlier start than planned."
      },
      {
        "question": "How much time do we actually get at the Taj Mahal?",
        "answer": "Around two hours, which is what most visitors want. The day also covers Agra Fort with your guide and a lunch stop, and gets you back to the station comfortably before the evening departure. What it does not leave room for is Fatehpur Sikri — for that you want the two-day version."
      }
    ]
  },
  {
    id: 'same-day-jaipur',
    title: 'Same Day Jaipur Tour from Delhi',
    description: 'Explore the Pink City of Jaipur in a single day, visiting its majestic forts, vibrant bazaars, and stunning palaces — all with a private guide and AC transport.',
    duration: '14 Hours',
    price: 55,
    image: '/rajasthan-palace-hotel.webp',
    category: 'Same Day Tours',
    rating: 4.7,
    reviewsCount: 640,
    highlights: ['Amber Fort Jeep ride', 'Hawa Mahal photo stop', 'City Palace museum', 'Local bazaar shopping time'],
    itinerary: [
      { time: '05:00 AM', activity: 'Early morning pickup from Delhi hotel' },
      { time: '09:30 AM', activity: 'Arrive Jaipur, meet your local guide' },
      { time: '10:00 AM', activity: 'Amber Fort with Jeep ride up the hill' },
      { time: '12:00 PM', activity: 'Photo stop at Jal Mahal (Water Palace)' },
      { time: '12:30 PM', activity: 'Lunch at traditional Rajasthani restaurant' },
      { time: '01:30 PM', activity: 'City Palace museum tour' },
      { time: '03:00 PM', activity: 'Hawa Mahal & Jantar Mantar visit' },
      { time: '04:30 PM', activity: 'Free time at Johari Bazaar for shopping' },
      { time: '05:30 PM', activity: 'Depart for Delhi' },
      { time: '10:00 PM', activity: 'Drop-off at Delhi hotel' }
    ],
    overview: [
      "Jaipur is about 270 km from Delhi, which is further than Agra and takes five to five and a half hours each way. That makes this the longest of our day trips at roughly fourteen hours door to door, and it is worth being honest about that before you book rather than after.",
      "What it buys you is the three things people come to Jaipur for — Amber Fort on the hill above Maota Lake, the City Palace and Jantar Mantar in the old city, and the Hawa Mahal facade. It also leaves time at Johari Bazaar, which for many visitors is the part they remember.",
      "If Jaipur is the only Rajasthan you will see, this works. If you have two days, an overnight changes the trip completely — Amber Fort in the early morning before the crowds and a Nahargarh sunset are both off the table on a single day."
    ],
    included: [
      "Private air-conditioned vehicle with a professional chauffeur, yours for the whole day — never a shared pickup",
      "Government-licensed guide holding a Ministry of Tourism regional licence",
      "Door-to-door pickup and drop at your Delhi hotel or the airport",
      "All tolls, parking, fuel and driver charges",
      "Monument tickets arranged in advance so you are not queuing at a counter",
      "A female guide on request, at no extra charge, subject to availability on your date"
    ],
    notIncluded: [
      "Monument entry fees across Amber Fort, City Palace and Jantar Mantar — we book them and confirm the total in writing before you pay anything",
      "The Amber Fort jeep ride up to the gate",
      "Meals and drinks — a lunch stop is built into the day and you settle that bill there",
      "Tips and personal spending"
    ],
    goodToKnow: [
      {
        "title": "It is a fourteen-hour day, and ten of those are driving",
        "text": "Five to five and a half hours each way on the Delhi–Jaipur highway. We schedule an early pickup so the sightseeing happens in daylight rather than the drive. Families with young children and anyone who struggles with long car journeys are usually happier with the overnight version."
      },
      {
        "title": "Elephant rides at Amber Fort",
        "text": "We do not book them. The welfare concerns around the Amber Fort elephants are well documented, and a jeep covers the same climb in less time. If you would rather walk up, the path takes about fifteen minutes and gives you the fort approach the way it was meant to be seen."
      },
      {
        "title": "No shopping stops, ever",
        "text": "Many cheaper tours route you through a marble emporium or handicraft showroom because the operator earns commission on what you buy. We do not. It is also why our days fit in another monument where others fit in a showroom."
      },
      {
        "title": "Nothing is charged when you book",
        "text": "We confirm guide and vehicle availability for your date first, then send payment details on WhatsApp. Cash, UPI, bank transfer and card are all accepted, and single-day tours need no deposit. Free cancellation up to 24 hours before pickup."
      }
    ],
    faqs: [
      {
        "question": "How far is Jaipur from Delhi and how long does the drive take?",
        "answer": "About 270 km, and five to five and a half hours each way depending on traffic leaving Delhi. It is a longer run than the Agra trip, which is why this day starts early and comes in at around fourteen hours door to door."
      },
      {
        "question": "Is a day trip to Jaipur from Delhi worth it?",
        "answer": "It works if Jaipur is the only part of Rajasthan you will see and you accept a long day in the car. You get Amber Fort, the City Palace, Jantar Mantar, the Hawa Mahal facade and time in the bazaar. What you do not get is an early morning at Amber Fort before the coaches arrive, or a Nahargarh sunset — both need an overnight."
      },
      {
        "question": "Is the Amber Fort elephant ride included?",
        "answer": "No, and we do not arrange it. The welfare concerns around those elephants are well documented. The jeep ride up to the gate is the alternative we use, and it is billed separately from the tour price. Walking up takes about fifteen minutes if you would prefer that."
      },
      {
        "question": "What is the best time of year for a Jaipur day trip?",
        "answer": "October to March, when the days are clear and the fort climb is comfortable. April to June is genuinely hot in Jaipur — over 40°C is normal — and a fourteen-hour day in that heat is hard work. July to September brings the monsoon, when the Aravalli hills around Amber are at their greenest."
      },
      {
        "question": "Can we combine Jaipur and the Taj Mahal in one day?",
        "answer": "No, and anyone offering it is selling you a day in a car. Delhi to Agra to Jaipur and back is over 700 km. The Golden Triangle exists precisely because these three cities need at least three days between them."
      }
    ]
  },

  // ─── TWO DAY TOURS ───
  {
    id: 'overnight-taj-tour',
    title: 'Delhi Overnight Taj Mahal Tour',
    description: 'An overnight tour from Delhi to Agra, giving you ample time to explore the Taj Mahal at both sunrise and sunset, plus surrounding heritage attractions.',
    duration: '2 Days / 1 Night',
    price: 105,
    image: '/taj-mahal-dawn.webp',
    category: 'Two Day Tours',
    rating: 4.9,
    reviewsCount: 520,
    highlights: ['Overnight stay in heritage hotel', 'Taj Mahal at sunrise & sunset', 'Mehtab Bagh evening views', 'All meals included'],
    itinerary: [
      { time: 'Day 1 — 06:00 AM', activity: 'Pickup from Delhi hotel, drive to Agra' },
      { time: 'Day 1 — 10:00 AM', activity: 'Taj Mahal guided morning tour' },
      { time: 'Day 1 — 01:00 PM', activity: 'Lunch at heritage restaurant' },
      { time: 'Day 1 — 02:30 PM', activity: 'Agra Fort historical exploration' },
      { time: 'Day 1 — 05:00 PM', activity: 'Sunset at Mehtab Bagh with Taj view' },
      { time: 'Day 1 — 07:00 PM', activity: 'Dinner & overnight stay at heritage hotel' },
      { time: 'Day 2 — 05:30 AM', activity: 'Sunrise at Taj Mahal (second visit)' },
      { time: 'Day 2 — 08:30 AM', activity: 'Breakfast at hotel, check out' },
      { time: 'Day 2 — 09:30 AM', activity: 'Visit Itimad-ud-Daulah (Baby Taj)' },
      { time: 'Day 2 — 11:00 AM', activity: 'Depart for Delhi, drop-off at hotel/airport' }
    ],
    overview: [
      "The argument for staying the night in Agra is simple: the Taj Mahal is a different building at either end of the day, and a day trip can only show you one of them. This tour gives you sunset at Mehtab Bagh across the river on the first evening and sunrise at the monument itself the following morning.",
      "It also removes the part of the day trip people dislike most. There is no 3 AM departure from Delhi and no three-hour drive home on tired legs — you sleep twenty minutes from the East Gate and walk to it in the morning.",
      "Between May and July this stops being a preference and becomes the sensible choice. A Delhi-based sunrise tour in June means leaving around 1:30 AM, and the heat by mid-morning makes everything after the Taj hard work."
    ],
    included: [
      "One night at an Agra heritage hotel on a twin-sharing basis",
      "All meals through the trip, as stated in the itinerary",
      "Private air-conditioned vehicle with a professional chauffeur for the whole trip, including every inter-city drive",
      "Government-licensed guides in Agra, each holding a Ministry of Tourism regional licence",
      "Door-to-door pickup and drop at your Delhi hotel or the airport",
      "All tolls, parking, fuel, driver allowances and inter-state taxes",
      "Monument tickets arranged in advance across the whole route",
      "A female guide on request, at no extra charge, subject to availability on your dates"
    ],
    notIncluded: [
      "Monument entry fees along the route — we book them and confirm the full amount in writing before you pay anything",
      "Drinks, and anything ordered outside the set menu",
      "Camera and video fees, and optional add-ons such as the Amber Fort jeep ride",
      "Tips and personal spending"
    ],
    goodToKnow: [
      {
        "title": "Sunrise here means walking, not driving",
        "text": "Your hotel is close enough to the East Gate that the morning starts twenty minutes before the gate opens rather than three hours. The gate time moves through the year — around 6:35 AM in December, as early as 4:55 AM in June — and we set the morning against your actual date."
      },
      {
        "title": "Mehtab Bagh is the view most day trippers never see",
        "text": "The garden sits directly across the Yamuna from the Taj Mahal, on the axis Shah Jahan designed it to be seen from. At sunset the marble goes warm and the crowd is a fraction of the one inside. It closes at sunset, which is exactly why a day trip out of Delhi cannot fit it in."
      },
      {
        "title": "The Taj Mahal is closed every Friday",
        "text": "No exceptions, for congregational prayers at the mosque inside the complex. Tell us your dates and we will flag it before you book, or reshape the itinerary around Agra Fort, Fatehpur Sikri and Mehtab Bagh — which still gives you the classic view across the river."
      },
      {
        "title": "Multi-day tours need a part payment",
        "text": "This tour holds hotel rooms on your behalf, so a part payment is usually needed to confirm them — that is the main way multi-day trips differ from our single-day tours. Nothing is taken through the website; we check availability first, then send payment details on WhatsApp."
      }
    ],
    faqs: [
      {
        "question": "Is an overnight Taj Mahal tour better than a day trip?",
        "answer": "For most people, yes, and the reason is not the extra sightseeing. You see the monument at sunset from across the river and at sunrise from inside, you skip the 3 AM departure and the tired drive home, and you have a second morning in reserve if winter fog hides the Taj on the first one. A day trip gives you one attempt at one time of day."
      },
      {
        "question": "Are meals included in this tour?",
        "answer": "Yes — all meals through the trip are included as set out in the itinerary, along with one night at an Agra heritage hotel on a twin-sharing basis. Drinks and anything ordered outside the set menu are not. This is one of the few tours where meals are covered; most of our day tours build in a stop and you settle the bill there."
      },
      {
        "question": "What is there to do in Agra in the evening?",
        "answer": "Sunset at Mehtab Bagh across the river is the main event, and it is the view most day visitors never get. Agra Fort in the late afternoon light is the other. The following morning adds Itimad-ud-Daulah — the Baby Taj — which is where the inlay technique used on the Taj Mahal was worked out first, and which is almost always quiet."
      },
      {
        "question": "Is the overnight version better in summer?",
        "answer": "Considerably. A Delhi-based sunrise tour in June means a 1:30 AM pickup, because the Taj opens 30 minutes before sunrise and the drive is three and a half hours. Staying in Agra turns that into a short walk. Between May and July we usually recommend this version over the day trip without being asked."
      },
      {
        "question": "What happens if it is foggy in the morning?",
        "answer": "Agra fog in December and January can hide the monument until mid-morning. The advantage of staying overnight is that you have already seen it from Mehtab Bagh the previous evening, and your ticket is valid for three hours from entry — so the usual plan is to wait with your guide and reorder the morning rather than lose the visit."
      }
    ]
  },
  {
    id: 'agra-wildlife-sos',
    title: 'Agra Heritage & Wildlife SOS Tour',
    description: 'Combine the Taj Mahal visit with a heartwarming trip to the Wildlife SOS Elephant Conservation Center. A unique blend of heritage and wildlife.',
    duration: '2 Days / 1 Night',
    price: 125,
    image: '/ranthambore-tiger.webp',
    category: 'Two Day Tours',
    rating: 4.8,
    reviewsCount: 340,
    highlights: ['Taj Mahal guided tour', 'Wildlife SOS elephant center', 'Elephant conservation experience', 'Heritage hotel stay'],
    itinerary: [
      { time: 'Day 1 — 06:00 AM', activity: 'Pickup from Delhi, drive to Agra' },
      { time: 'Day 1 — 10:00 AM', activity: 'Taj Mahal in-depth guided tour' },
      { time: 'Day 1 — 01:00 PM', activity: 'Lunch at local restaurant' },
      { time: 'Day 1 — 02:30 PM', activity: 'Agra Fort exploration' },
      { time: 'Day 1 — 05:00 PM', activity: 'Check-in at heritage hotel, evening free' },
      { time: 'Day 2 — 08:00 AM', activity: 'Breakfast and check out' },
      { time: 'Day 2 — 09:00 AM', activity: 'Visit Wildlife SOS Elephant Conservation Center' },
      { time: 'Day 2 — 11:30 AM', activity: 'Interactive session with caretakers' },
      { time: 'Day 2 — 01:00 PM', activity: 'Lunch, then depart for Delhi' },
      { time: 'Day 2 — 05:00 PM', activity: 'Drop-off at Delhi hotel or airport' }
    ],
    overview: [
      "Wildlife SOS runs a genuine conservation centre outside Agra, not an attraction. It houses elephants retired from the tourism and begging trades, many of them blind, arthritic or recovering from decades of injury. There is no riding, no bathing with the animals and no performance — which is the point, and the reason we include it rather than the Amber Fort elephants.",
      "The visit is a guided walk through the facility with the people who care for the animals, and an explanation of where each elephant came from. Most visitors find it the more memorable half of the trip, which is not what they expect when they book a Taj Mahal tour.",
      "Day one is the Taj Mahal and Agra Fort with a licensed guide. Day two is the conservation centre in the morning, when the elephants are most active, before the drive back to Delhi."
    ],
    included: [
      "One night at an Agra heritage hotel on a twin-sharing basis with breakfast",
      "Private air-conditioned vehicle with a professional chauffeur for the whole trip, including every inter-city drive",
      "Government-licensed guides in Agra, each holding a Ministry of Tourism regional licence",
      "Door-to-door pickup and drop at your Delhi hotel or the airport",
      "All tolls, parking, fuel, driver allowances and inter-state taxes",
      "Monument tickets arranged in advance across the whole route",
      "A female guide on request, at no extra charge, subject to availability on your dates"
    ],
    notIncluded: [
      "Monument entry fees along the route — we book them and confirm the full amount in writing before you pay anything",
      "Wildlife SOS entry and conservation contribution, which goes directly to the centre",
      "Lunches and dinners; breakfast at your hotel is included",
      "Camera and video fees, and any optional add-ons",
      "Tips and personal spending"
    ],
    goodToKnow: [
      {
        "title": "There is no elephant riding, and that is deliberate",
        "text": "Wildlife SOS exists because of what riding and begging did to these animals. You will walk the facility, meet the caretakers and hear each elephant's history. If you were hoping to ride or bathe an elephant, this is not that, and no ethical centre in India offers it."
      },
      {
        "title": "Visits run to the centre's schedule",
        "text": "Wildlife SOS sets visiting slots around the animals' routine rather than around tourism, and numbers per slot are limited. We book your slot when you confirm the tour. Morning visits are better — the elephants are more active before the heat."
      },
      {
        "title": "The Taj Mahal is closed every Friday",
        "text": "No exceptions, for congregational prayers at the mosque inside the complex. Tell us your dates and we will flag it before you book, or reshape the itinerary around Agra Fort, Fatehpur Sikri and Mehtab Bagh — which still gives you the classic view across the river."
      },
      {
        "title": "Multi-day tours need a part payment",
        "text": "This tour holds hotel rooms on your behalf, so a part payment is usually needed to confirm them — that is the main way multi-day trips differ from our single-day tours. Nothing is taken through the website; we check availability first, then send payment details on WhatsApp."
      }
    ],
    faqs: [
      {
        "question": "Can you ride the elephants at Wildlife SOS?",
        "answer": "No. Wildlife SOS is a rescue and conservation centre for elephants retired from riding, begging and circus work, many with permanent injuries from it. Visitors walk the facility with the caretakers and learn each animal's history. Any operation in India offering elephant rides or bathing is not a sanctuary, whatever it calls itself."
      },
      {
        "question": "Is Wildlife SOS a legitimate charity?",
        "answer": "Yes — it is an established Indian conservation organisation that also runs sloth bear and leopard rescue work, and it operates the elephant hospital outside Agra. Your entry contribution goes to the centre rather than to us, and we book your visiting slot when you confirm the tour."
      },
      {
        "question": "Is this tour suitable for children?",
        "answer": "It is one of the better tours for families. Children usually engage with the conservation story far more than with Mughal architecture, and the caretakers are used to explaining the work in plain terms. The walking is flat and the pace is gentle."
      },
      {
        "question": "How long is the visit to the elephant centre?",
        "answer": "Around two to three hours including the guided walk and the session with the caretakers, scheduled in the morning while the elephants are most active. The rest of day two is lunch and the drive back to Delhi, putting you home by early evening."
      },
      {
        "question": "What else does this tour cover besides the elephants?",
        "answer": "Day one is a full guided visit to the Taj Mahal and Agra Fort with a licensed guide, at a more relaxed pace than a day trip allows, with an evening free in Agra. The conservation centre is the second morning. You are getting the standard Agra heritage tour with a genuinely different second day attached."
      }
    ]
  },
  {
    id: 'agra-fatehpur-sikri',
    title: 'Agra & Fatehpur Sikri Heritage Tour',
    description: 'Explore the Taj Mahal and the abandoned Mughal city of Fatehpur Sikri over two leisurely days. Walk through centuries of Mughal grandeur.',
    duration: '2 Days / 1 Night',
    price: 95,
    image: '/taj-mahal-reflection.webp',
    category: 'Two Day Tours',
    rating: 4.7,
    reviewsCount: 420,
    highlights: ['Taj Mahal guided tour', 'Fatehpur Sikri ghost city', 'Buland Darwaza (tallest gateway)', 'Heritage hotel accommodation'],
    itinerary: [
      { time: 'Day 1 — 06:00 AM', activity: 'Pickup from Delhi, scenic drive to Agra' },
      { time: 'Day 1 — 10:00 AM', activity: 'Guided tour of the Taj Mahal' },
      { time: 'Day 1 — 01:00 PM', activity: 'Lunch at Mughlai restaurant' },
      { time: 'Day 1 — 02:30 PM', activity: 'Agra Fort guided exploration' },
      { time: 'Day 1 — 05:00 PM', activity: 'Evening walk through Agra markets' },
      { time: 'Day 1 — 07:00 PM', activity: 'Dinner & overnight at heritage hotel' },
      { time: 'Day 2 — 08:00 AM', activity: 'Breakfast and check out' },
      { time: 'Day 2 — 09:00 AM', activity: 'Drive to Fatehpur Sikri (45 min)' },
      { time: 'Day 2 — 09:45 AM', activity: 'Guided tour of Fatehpur Sikri complex' },
      { time: 'Day 2 — 11:30 AM', activity: 'Visit Buland Darwaza & Salim Chishti Tomb' },
      { time: 'Day 2 — 01:00 PM', activity: 'Lunch, then depart for Delhi' },
      { time: 'Day 2 — 05:00 PM', activity: 'Drop-off at Delhi hotel or airport' }
    ],
    overview: [
      "Fatehpur Sikri is the reason this tour is two days rather than one. Akbar built a complete imperial capital here in red sandstone, moved his court in, and abandoned it within about fifteen years — most likely because the water ran out. What is left is the most intact Mughal city anywhere, and it is almost empty compared with Agra.",
      "A day trip from Delhi cannot fit it. Fatehpur Sikri sits 40 km beyond Agra, needs two to three hours to walk properly, and closes at sunset. Squeezing it into a single day means seeing the Taj Mahal in a hurry and the palace complex at a jog.",
      "Day one is the Taj Mahal and Agra Fort at a civilised pace with an evening in the Agra markets. Day two is Fatehpur Sikri — the Buland Darwaza, the Panch Mahal, and the Sufi shrine of Salim Chishti that is still an active place of pilgrimage."
    ],
    included: [
      "One night at an Agra heritage hotel on a twin-sharing basis with breakfast",
      "Private air-conditioned vehicle with a professional chauffeur for the whole trip, including every inter-city drive",
      "Government-licensed guides in Agra and at Fatehpur Sikri, each holding a Ministry of Tourism regional licence",
      "Door-to-door pickup and drop at your Delhi hotel or the airport",
      "All tolls, parking, fuel, driver allowances and inter-state taxes",
      "Monument tickets arranged in advance across the whole route",
      "A female guide on request, at no extra charge, subject to availability on your dates"
    ],
    notIncluded: [
      "Monument entry fees along the route — we book them and confirm the full amount in writing before you pay anything",
      "Lunches and dinners; breakfast at your hotel is included",
      "Camera and video fees, and any optional add-ons",
      "Tips and personal spending"
    ],
    goodToKnow: [
      {
        "title": "Fatehpur Sikri has two separate sites",
        "text": "The palace complex is ticketed and run by the Archaeological Survey of India. The Jama Masjid and the Salim Chishti shrine beside it are free, active religious sites where shoes come off and heads are covered. Most visitors do both, and a guide matters here more than usual — there are no information boards worth reading."
      },
      {
        "title": "Expect to be approached at the shrine",
        "text": "Salim Chishti's tomb draws people selling thread for the lattice screen, unofficial guides and donation requests. None of it is dangerous and a polite refusal is enough, but it catches visitors off guard. Your guide stays with you through it."
      },
      {
        "title": "The Taj Mahal is closed every Friday",
        "text": "No exceptions, for congregational prayers at the mosque inside the complex. Tell us your dates and we will flag it before you book, or reshape the itinerary around Agra Fort, Fatehpur Sikri and Mehtab Bagh — which still gives you the classic view across the river."
      },
      {
        "title": "Multi-day tours need a part payment",
        "text": "This tour holds hotel rooms on your behalf, so a part payment is usually needed to confirm them — that is the main way multi-day trips differ from our single-day tours. Nothing is taken through the website; we check availability first, then send payment details on WhatsApp."
      }
    ],
    faqs: [
      {
        "question": "Is Fatehpur Sikri worth visiting?",
        "answer": "Yes, and it is the most under-visited major Mughal site in India. It is a complete imperial city in red sandstone, abandoned within about fifteen years of being finished and left largely intact. Where the Taj Mahal is crowded, Fatehpur Sikri is usually quiet enough to hear your own footsteps."
      },
      {
        "question": "Can you do the Taj Mahal and Fatehpur Sikri in one day from Delhi?",
        "answer": "Not well. Fatehpur Sikri is 40 km past Agra, needs two to three hours on foot, and closes at sunset. Adding it to a day trip means rushing the Taj Mahal and arriving at the palace complex with no time. This is exactly why the tour is built over two days."
      },
      {
        "question": "Why was Fatehpur Sikri abandoned?",
        "answer": "Most likely water. Akbar built the capital on a ridge with no reliable supply, and the lake that served it is thought to have failed within a few years of completion. Political reasons — the need to be closer to the northwest frontier — probably played a part too. The court moved to Lahore and the city was never really reoccupied."
      },
      {
        "question": "How much walking is involved?",
        "answer": "Fatehpur Sikri is spread out and almost entirely on foot, with uneven sandstone underfoot and very little shade — allow two to three hours and wear proper shoes. Day one in Agra is easier, though Agra Fort involves ramps and stairs. In summer both sites are hard work after about 11 AM, which is why the itinerary front-loads the mornings."
      },
      {
        "question": "What is the Buland Darwaza?",
        "answer": "The main gateway into the Fatehpur Sikri mosque courtyard, and at roughly 54 metres it is the tallest gateway in India. Akbar built it to mark a military victory in Gujarat. The climb up the steps to it is the photograph most people come away with."
      }
    ]
  },

  // ─── GOLDEN TRIANGLE ───
  {
    id: 'golden-triangle-3d',
    title: '3 Day Golden Triangle Express',
    description: 'The classic Delhi-Agra-Jaipur circuit in 3 action-packed days covering India\'s most iconic landmarks. Perfect for travelers short on time.',
    duration: '3 Days / 2 Nights',
    price: 210,
    image: '/india-gate-group.webp',
    category: 'Golden Triangle',
    rating: 4.9,
    reviewsCount: 780,
    highlights: ['Delhi heritage sightseeing', 'Taj Mahal guided tour', 'Jaipur forts & palaces', 'Heritage hotel stays'],
    itinerary: [
      { time: 'Day 1 — 08:00 AM', activity: 'Delhi sightseeing: Red Fort, Jama Masjid, Chandni Chowk' },
      { time: 'Day 1 — 12:00 PM', activity: 'Lunch at Old Delhi restaurant' },
      { time: 'Day 1 — 01:30 PM', activity: 'India Gate, Rashtrapati Bhavan drive-past' },
      { time: 'Day 1 — 03:00 PM', activity: 'Humayun\'s Tomb & Qutub Minar' },
      { time: 'Day 1 — 06:00 PM', activity: 'Drive to Agra (3.5 hrs), overnight at hotel' },
      { time: 'Day 2 — 06:00 AM', activity: 'Sunrise at the Taj Mahal' },
      { time: 'Day 2 — 09:00 AM', activity: 'Breakfast, then Agra Fort tour' },
      { time: 'Day 2 — 12:00 PM', activity: 'Lunch, drive to Jaipur via Fatehpur Sikri' },
      { time: 'Day 2 — 02:00 PM', activity: 'Quick stop at Fatehpur Sikri' },
      { time: 'Day 2 — 07:00 PM', activity: 'Arrive Jaipur, overnight at heritage hotel' },
      { time: 'Day 3 — 09:00 AM', activity: 'Amber Fort with Jeep ride' },
      { time: 'Day 3 — 11:30 AM', activity: 'City Palace & Jantar Mantar' },
      { time: 'Day 3 — 01:00 PM', activity: 'Lunch, Hawa Mahal photo stop' },
      { time: 'Day 3 — 03:00 PM', activity: 'Depart for Delhi, drop-off at hotel/airport' }
    ],
    overview: [
      'The Golden Triangle is Delhi, Agra and Jaipur — three cities roughly four hours apart that between them hold most of what a first trip to North India is built around. Three days is the shortest honest version of it: one day per city, with the driving folded into afternoons so no day is lost entirely to the road.',
      'It moves quickly. Day one covers Delhi and ends in Agra, day two gives you the Taj Mahal at sunrise and Agra Fort before crossing to Jaipur via Fatehpur Sikri, and day three is Amber Fort and the Jaipur old city before the drive back. If you would rather not travel at that pace, the four and five day versions keep the same route and give each city room to breathe.',
      'Everything runs privately — your own vehicle and driver for all three days, and a licensed local guide in each city rather than one person trying to cover all three.'
    ],
    included: [
      'Two nights of hotel accommodation — one in Agra, one in a Jaipur heritage property — on a twin-sharing basis with breakfast',
      'Private air-conditioned vehicle with a professional chauffeur for all three days, including every inter-city drive',
      'A government-licensed guide in each city, holding a Ministry of Tourism regional licence',
      'Door-to-door pickup and drop at your Delhi hotel or the airport',
      'All tolls, parking, fuel, driver allowances and inter-state taxes',
      'Monument tickets arranged in advance across all three cities',
      'A female guide on request, at no extra charge, subject to availability on your dates'
    ],
    notIncluded: [
      'Monument entry fees across the three cities — we book them and confirm the full amount in writing before you pay anything',
      'Lunches and dinners; breakfast at your hotel is included',
      'The Amber Fort jeep ride, camera and video fees, and any optional add-ons',
      'Tips and personal spending'
    ],
    goodToKnow: [
      {
        title: 'Multi-day tours need a part payment',
        text: 'Unlike our single-day tours, this one holds hotel rooms on your behalf, so a part payment is usually needed to confirm them. Nothing is taken through the website — we check availability for your dates first, then send payment details on WhatsApp. Cash, UPI, bank transfer and card are all accepted.'
      },
      {
        title: 'Avoid starting on a Wednesday',
        text: 'Day two is built around sunrise at the Taj Mahal, and the Taj is closed every Friday. A Wednesday start puts your Agra morning on a Friday. Tell us your dates and we will flag this before you book — or reshape the route so Agra lands on another day.'
      },
      {
        title: 'The route gets reshaped often',
        text: 'Most of our multi-day trips start as this standard route and change. Common additions are Udaipur, Ranthambore for a tiger safari, and Jodhpur or Jaisalmer for the desert forts. Send your dates, rough budget and what you care about most, and we will build around that rather than selling you the fixed version.'
      },
      {
        title: 'October to March is the comfortable season',
        text: 'Clear skies and pleasant days. December and January mornings can be foggy in Agra, which sometimes delays the sunrise view. April to June gets very hot, though the trip still works when it is built around early starts. July to September brings the monsoon and the greenest Rajasthan you will see.'
      }
    ],
    faqs: [
      {
        question: 'Is 3 days enough for the Golden Triangle?',
        answer:
          'It is enough to see the headline sights of all three cities properly — Delhi\'s Mughal core, the Taj Mahal and Agra Fort, and Amber Fort with the Jaipur old city. It is not enough to linger anywhere, and the afternoons involve real driving. If you have four or five days, the longer versions of this route cover the same ground with time left over for Fatehpur Sikri properly, a Jaipur bazaar evening, or simply a slower morning.'
      },
      {
        question: 'Are hotels included in the Golden Triangle tour price?',
        answer:
          'Yes — two nights on a twin-sharing basis with breakfast, one in Agra and one in a Jaipur heritage property. Lunches and dinners are not included. Because we hold rooms on your behalf, this tour needs a part payment to confirm, which is the main way it differs from our single-day tours.'
      },
      {
        question: 'How much driving is involved over the three days?',
        answer:
          'Delhi to Agra is about three and a half hours, Agra to Jaipur around four and a half including the Fatehpur Sikri stop, and Jaipur back to Delhi roughly five. The drives sit in the afternoons and evenings so your mornings stay free for sightseeing. All of it is in a private air-conditioned vehicle that stays with you for the whole trip.'
      },
      {
        question: 'Can the Golden Triangle itinerary be customised?',
        answer:
          'Yes, and most of our multi-day trips end up reshaped. Udaipur, a tiger safari at Ranthambore, Varanasi, and the desert forts at Jodhpur or Jaisalmer are the most common additions. Tell us your dates, a rough budget and what matters most to you, and we will build the route around that instead of fitting you into a fixed package.'
      },
      {
        question: 'What is the best time of year to do the Golden Triangle?',
        answer:
          'October to March, when the days are clear and comfortable across all three cities. December and January bring fog to Agra that can delay the Taj Mahal sunrise. April to June is very hot, and the trip is built around early mornings if you travel then. July to September is the monsoon — fewer crowds, lower prices, and Rajasthan at its greenest.'
      }
    ]
  },
  {
    id: 'golden-triangle-4d',
    title: '4 Day Golden Triangle Tour',
    description: 'A relaxed pace through the Golden Triangle with more time at each destination. Explore Delhi, Agra, and Jaipur without rushing.',
    duration: '4 Days / 3 Nights',
    price: 275,
    image: '/red-fort-delhi.webp',
    category: 'Golden Triangle',
    rating: 4.9,
    reviewsCount: 620,
    highlights: ['Old & New Delhi sightseeing', 'Taj Mahal & Agra Fort', 'Amber Fort & City Palace', 'All meals & heritage stays'],
    itinerary: [
      { time: 'Day 1 — 09:00 AM', activity: 'Delhi tour: Red Fort, Jama Masjid, Raj Ghat' },
      { time: 'Day 1 — 01:00 PM', activity: 'Lunch, then New Delhi: India Gate, Parliament' },
      { time: 'Day 1 — 04:00 PM', activity: 'Humayun\'s Tomb, evening at Dilli Haat' },
      { time: 'Day 2 — 06:00 AM', activity: 'Drive to Agra (3.5 hrs)' },
      { time: 'Day 2 — 10:00 AM', activity: 'Taj Mahal guided tour' },
      { time: 'Day 2 — 01:00 PM', activity: 'Lunch, Agra Fort exploration' },
      { time: 'Day 2 — 05:00 PM', activity: 'Sunset at Mehtab Bagh' },
      { time: 'Day 3 — 08:00 AM', activity: 'Drive to Jaipur via Fatehpur Sikri' },
      { time: 'Day 3 — 12:00 PM', activity: 'Arrive Jaipur, lunch at local restaurant' },
      { time: 'Day 3 — 02:00 PM', activity: 'Amber Fort & Jal Mahal' },
      { time: 'Day 3 — 05:00 PM', activity: 'Hawa Mahal & local bazaar shopping' },
      { time: 'Day 4 — 09:00 AM', activity: 'City Palace & Jantar Mantar' },
      { time: 'Day 4 — 12:00 PM', activity: 'Lunch, then Nahargarh Fort for panoramic views' },
      { time: 'Day 4 — 03:00 PM', activity: 'Depart for Delhi, drop-off at hotel/airport' }
    ],
    overview: [
      "The difference between three days and four on this route is Delhi. The three-day version starts with a compressed morning in the capital before driving to Agra; this one gives Delhi a full day, which is the difference between seeing Red Fort and Jama Masjid at a march and actually walking Chandni Chowk.",
      "The extra night also takes the pressure off day two. You reach Agra the evening before rather than after a day of sightseeing, which means the Taj Mahal happens on fresh legs, and Fatehpur Sikri gets the time it needs on the way to Jaipur instead of a twenty-minute photo stop.",
      "This is the version we recommend to most first-time visitors. Three days is doable and genuinely covers the headline sights; four days covers the same ground without any day feeling like a commute."
    ],
    included: [
      "Three nights of hotel accommodation across Delhi, Agra and Jaipur on a twin-sharing basis",
      "All meals through the trip, as set out in the itinerary",
      "Private air-conditioned vehicle with a professional chauffeur for the whole trip, including every inter-city drive",
      "A government-licensed guide in each city, each holding a Ministry of Tourism regional licence",
      "Door-to-door pickup and drop at your Delhi hotel or the airport",
      "All tolls, parking, fuel, driver allowances and inter-state taxes",
      "Monument tickets arranged in advance across the whole route",
      "A female guide on request, at no extra charge, subject to availability on your dates"
    ],
    notIncluded: [
      "Monument entry fees along the route — we book them and confirm the full amount in writing before you pay anything",
      "Drinks, and anything ordered outside the set menu",
      "The Amber Fort jeep ride, camera and video fees, and optional add-ons",
      "Tips and personal spending"
    ],
    goodToKnow: [
      {
        "title": "What the fourth day actually buys",
        "text": "A full day in Delhi instead of a morning, Fatehpur Sikri walked properly rather than glimpsed, and Nahargarh Fort at sunset in Jaipur. If you are choosing between this and the three-day version, those three things are the whole difference."
      },
      {
        "title": "Avoid a start day that puts Agra on a Friday",
        "text": "The Taj Mahal is closed every Friday with no exceptions. Because the Agra day is fixed within this itinerary, your start date decides whether you see it. Send us your dates and we will flag the clash before you book, or reshape the route so Agra lands elsewhere in the week."
      },
      {
        "title": "October to March is the comfortable season",
        "text": "Clear skies and pleasant days across the whole route. December and January mornings can be foggy in Agra, which sometimes delays the Taj Mahal view. April to June gets very hot and the itinerary shifts to early starts. July to September is the monsoon — fewer crowds, lower prices, and Rajasthan at its greenest."
      },
      {
        "title": "Multi-day tours need a part payment",
        "text": "This tour holds hotel rooms on your behalf, so a part payment is usually needed to confirm them — that is the main way multi-day trips differ from our single-day tours. Nothing is taken through the website; we check availability first, then send payment details on WhatsApp."
      }
    ],
    faqs: [
      {
        "question": "Is 4 days better than 3 for the Golden Triangle?",
        "answer": "For most first-time visitors, yes. The fourth day gives Delhi a full day rather than a compressed morning, lets Fatehpur Sikri be walked properly on the Agra to Jaipur leg, and adds a Jaipur sunset. The three-day version covers the same headline sights but every afternoon involves real driving after a full morning."
      },
      {
        "question": "What is included in the 4 day Golden Triangle tour price?",
        "answer": "Three nights of hotel accommodation on a twin-sharing basis, all meals as set out in the itinerary, a private air-conditioned vehicle with a chauffeur for the whole trip, and a licensed local guide in each city. Monument entry fees are the main thing billed separately — we book them and confirm the total in writing first."
      },
      {
        "question": "How much driving is there over the four days?",
        "answer": "Delhi to Agra is about three and a half hours, Agra to Jaipur around four and a half including the Fatehpur Sikri stop, and Jaipur back to Delhi roughly five. Spread over four days that is comfortable; the same driving over three days is what makes the shorter version feel rushed."
      },
      {
        "question": "Can we add Ranthambore or Udaipur to this itinerary?",
        "answer": "Yes, and it is a common change. Ranthambore for a tiger safari makes it a five-day trip; Udaipur adds two days and a long drive south. We also run both as standard itineraries if you would rather start from those."
      },
      {
        "question": "What is the best time of year for the Golden Triangle?",
        "answer": "October to March, when all three cities are comfortable. December and January bring fog to Agra that can delay the Taj Mahal view. April to June is very hot and the days get rebuilt around early starts. July to September is the monsoon — quieter, cheaper, and Rajasthan at its greenest."
      }
    ]
  },
  {
    id: 'golden-triangle-5d',
    title: '5 Day Golden Triangle Tour',
    description: 'The most comprehensive Golden Triangle experience with hidden gems, local experiences, and time to truly absorb each city\'s unique character.',
    duration: '5 Days / 4 Nights',
    price: 340,
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80',
    category: 'Golden Triangle',
    rating: 4.9,
    reviewsCount: 490,
    highlights: ['Comprehensive Delhi tour', 'Fatehpur Sikri UNESCO site', 'Jaipur shopping experience', 'All meals & luxury stays'],
    itinerary: [
      { time: 'Day 1 — 09:00 AM', activity: 'Old Delhi: Red Fort, Jama Masjid, rickshaw ride' },
      { time: 'Day 1 — 02:00 PM', activity: 'New Delhi: India Gate, Qutub Minar' },
      { time: 'Day 2 — 08:00 AM', activity: 'Humayun\'s Tomb, Lotus Temple, Akshardham' },
      { time: 'Day 2 — 02:00 PM', activity: 'Drive to Agra, evening at leisure' },
      { time: 'Day 3 — 06:00 AM', activity: 'Sunrise at Taj Mahal' },
      { time: 'Day 3 — 10:00 AM', activity: 'Agra Fort, Itimad-ud-Daulah' },
      { time: 'Day 3 — 02:00 PM', activity: 'Drive to Jaipur via Fatehpur Sikri' },
      { time: 'Day 4 — 09:00 AM', activity: 'Amber Fort, City Palace, Jantar Mantar' },
      { time: 'Day 4 — 02:00 PM', activity: 'Hawa Mahal, Johari Bazaar shopping' },
      { time: 'Day 4 — 05:00 PM', activity: 'Sunset at Nahargarh Fort' },
      { time: 'Day 5 — 09:00 AM', activity: 'Jaipur textile & gem workshop visits' },
      { time: 'Day 5 — 12:00 PM', activity: 'Depart for Delhi, drop-off at airport/hotel' }
    ],
    overview: [
      "Five days is where the Golden Triangle stops being a circuit you complete and starts being a trip you take. The route is the same three cities, but the Taj Mahal happens at sunrise rather than mid-morning, Delhi gets both halves — the Mughal north and the colonial and medieval south — and Jaipur gets a full day plus an evening.",
      "The additions on this version are mostly about texture rather than more monuments. Qutub Minar and Humayun's Tomb on the Delhi day, an evening at leisure in Agra before the early start, and time with Jaipur's textile and gem workshops, which is the part of the city that still works the way it did.",
      "If you have five days and this is your first trip to North India, this is the version that leaves you with the fewest regrets. Shorter is entirely possible; this is simply the length at which nothing has to be cut."
    ],
    included: [
      "Four nights of hotel accommodation across Delhi, Agra and Jaipur on a twin-sharing basis",
      "All meals through the trip, as set out in the itinerary",
      "Private air-conditioned vehicle with a professional chauffeur for the whole trip, including every inter-city drive",
      "A government-licensed guide in each city, each holding a Ministry of Tourism regional licence",
      "Door-to-door pickup and drop at your Delhi hotel or the airport",
      "All tolls, parking, fuel, driver allowances and inter-state taxes",
      "Monument tickets arranged in advance across the whole route",
      "A female guide on request, at no extra charge, subject to availability on your dates"
    ],
    notIncluded: [
      "Monument entry fees along the route — we book them and confirm the full amount in writing before you pay anything",
      "Drinks, and anything ordered outside the set menu",
      "The Amber Fort jeep ride, camera and video fees, and optional add-ons",
      "Tips and personal spending"
    ],
    goodToKnow: [
      {
        "title": "This version does sunrise at the Taj Mahal",
        "text": "Because you sleep in Agra the night before, the morning is a short drive rather than a pre-dawn run from Delhi. The gate opens 30 minutes before sunrise and that time moves through the year, so we set the morning against your actual date rather than a fixed hour."
      },
      {
        "title": "The Jaipur workshops are not a shopping stop",
        "text": "Block printing and gem cutting are working trades in Jaipur and worth seeing as craft. We take you to workshops that demonstrate rather than to emporiums that sell on commission — there is no obligation to buy and we earn nothing if you do."
      },
      {
        "title": "Avoid a start day that puts Agra on a Friday",
        "text": "The Taj Mahal is closed every Friday with no exceptions. Because the Agra day is fixed within this itinerary, your start date decides whether you see it. Send us your dates and we will flag the clash before you book, or reshape the route so Agra lands elsewhere in the week."
      },
      {
        "title": "Multi-day tours need a part payment",
        "text": "This tour holds hotel rooms on your behalf, so a part payment is usually needed to confirm them — that is the main way multi-day trips differ from our single-day tours. Nothing is taken through the website; we check availability first, then send payment details on WhatsApp."
      }
    ],
    faqs: [
      {
        "question": "Is 5 days enough for the Golden Triangle?",
        "answer": "Five days is comfortably enough, and it is the point at which nothing needs cutting. You get a full day in Delhi covering both the Mughal north and the southern monuments, sunrise at the Taj Mahal, Fatehpur Sikri properly, and a full day plus an evening in Jaipur. Three and four day versions cover the same route with progressively less room."
      },
      {
        "question": "What does the 5 day version add over the 4 day one?",
        "answer": "Sunrise at the Taj Mahal rather than a mid-morning visit, Qutub Minar and Humayun's Tomb added to the Delhi day, an evening at leisure in Agra, and time with Jaipur's textile and gem workshops. It is mostly depth rather than extra monuments."
      },
      {
        "question": "Are hotels and meals included?",
        "answer": "Yes — four nights on a twin-sharing basis and all meals as set out in the itinerary, along with a private air-conditioned vehicle and a licensed guide in each city. Monument entry fees are billed separately and confirmed in writing before you pay anything."
      },
      {
        "question": "Do we see the Taj Mahal at sunrise on this tour?",
        "answer": "Yes. You stay in Agra the previous night, so the morning is a short drive to the East Gate rather than a three-hour run from Delhi. The gate opens 30 minutes before sunrise — around 6:35 AM in December, as early as 4:55 AM in June — and the first hour inside is when the crowd is smallest."
      },
      {
        "question": "Can this itinerary be customised?",
        "answer": "Yes, and most are. Ranthambore for a tiger safari and Udaipur are the two most common additions, and both exist as standard itineraries of their own. Tell us your dates, rough budget and what matters most and we will build the route around that."
      }
    ]
  },
  {
    id: 'golden-triangle-tiger',
    title: '5 Day Golden Triangle with Tiger Safari',
    description: 'Combine the Golden Triangle with a thrilling tiger safari at Ranthambore National Park. Heritage, history, and wildlife all in one epic journey.',
    duration: '5 Days / 4 Nights',
    price: 395,
    image: '/ranthambore-tiger.webp',
    category: 'Golden Triangle',
    rating: 4.8,
    reviewsCount: 380,
    highlights: ['Ranthambore tiger safari', 'Taj Mahal guided tour', 'Jaipur forts & palaces', 'Wildlife & heritage combined'],
    itinerary: [
      { time: 'Day 1 — 06:00 AM', activity: 'Delhi to Agra, Taj Mahal & Agra Fort' },
      { time: 'Day 1 — 06:00 PM', activity: 'Overnight at Agra heritage hotel' },
      { time: 'Day 2 — 08:00 AM', activity: 'Drive to Ranthambore (5 hrs)' },
      { time: 'Day 2 — 03:00 PM', activity: 'Evening safari at Ranthambore National Park' },
      { time: 'Day 3 — 06:00 AM', activity: 'Morning safari — tiger tracking' },
      { time: 'Day 3 — 02:00 PM', activity: 'Ranthambore Fort visit, afternoon at leisure' },
      { time: 'Day 4 — 08:00 AM', activity: 'Drive to Jaipur (3.5 hrs)' },
      { time: 'Day 4 — 12:00 PM', activity: 'Amber Fort, City Palace, Hawa Mahal' },
      { time: 'Day 5 — 09:00 AM', activity: 'Jaipur markets & Nahargarh Fort' },
      { time: 'Day 5 — 01:00 PM', activity: 'Depart for Delhi, drop-off at hotel/airport' }
    ],
    overview: [
      "Ranthambore is the reason this itinerary exists. It is one of the few places in India where a wild tiger is a realistic prospect rather than a long shot, and it sits close enough to the Jaipur road that adding it costs you one day rather than a separate trip.",
      "The park is a former royal hunting reserve, and the ruined fort inside it makes the landscape unlike any other tiger reserve in the country. You take two safaris — one evening, one the following morning — which is the sensible minimum, since a single drive is a coin toss.",
      "The rest of the route is the standard Golden Triangle: the Taj Mahal and Agra Fort, then Amber Fort and the Jaipur old city after the park. You are trading some of the depth of a five-day heritage trip for two safaris, which is a good trade if wildlife is why you are here."
    ],
    included: [
      "Four nights of hotel accommodation across Agra, Ranthambore and Jaipur on a twin-sharing basis with breakfast",
      "Private air-conditioned vehicle with a professional chauffeur for the whole trip, including every inter-city drive",
      "A government-licensed guide in Agra and Jaipur, each holding a Ministry of Tourism regional licence",
      "Door-to-door pickup and drop at your Delhi hotel or the airport",
      "All tolls, parking, fuel, driver allowances and inter-state taxes",
      "Monument tickets arranged in advance across the whole route",
      "A female guide on request, at no extra charge, subject to availability on your dates",
      "Two shared-canter or gypsy safaris at Ranthambore with park permits and a naturalist"
    ],
    notIncluded: [
      "Monument entry fees along the route — we book them and confirm the full amount in writing before you pay anything",
      "Lunches and dinners; breakfast at your hotel is included",
      "The Amber Fort jeep ride, camera and video fees, and optional add-ons",
      "Tips and personal spending"
    ],
    goodToKnow: [
      {
        "title": "Ranthambore is closed from July to September",
        "text": "The park shuts for the monsoon, generally from 1 July to 30 September, with only limited zones open at the edges. If your dates fall in that window this itinerary does not run and we will say so rather than substituting something and hoping you do not notice."
      },
      {
        "title": "Nobody can promise you a tiger",
        "text": "Ranthambore has among the better sighting rates in India, and two safaris across two parts of the day give you a genuine chance — but it is a wild animal in a 1,300 square kilometre reserve. Any operator guaranteeing a sighting is either lying or taking you somewhere that is not a national park."
      },
      {
        "title": "Safari zones are allocated, not chosen",
        "text": "The forest department assigns zones and vehicles through a permit system, and popular zones go early in peak season. Booking well ahead improves what we can request, but no operator controls the allocation. Permits are included in your tour price."
      },
      {
        "title": "Multi-day tours need a part payment",
        "text": "This tour holds hotel rooms on your behalf, so a part payment is usually needed to confirm them — that is the main way multi-day trips differ from our single-day tours. Nothing is taken through the website; we check availability first, then send payment details on WhatsApp."
      }
    ],
    faqs: [
      {
        "question": "What are the chances of seeing a tiger at Ranthambore?",
        "answer": "Ranthambore has one of the higher sighting rates in India, and two safaris across an evening and a morning give you a realistic chance rather than a slim one. It is still a wild animal in a large reserve, and no honest operator will guarantee it. What we can promise is two proper drives with a naturalist rather than one rushed one."
      },
      {
        "question": "When is Ranthambore National Park open?",
        "answer": "October to June. The park closes for the monsoon, generally 1 July to 30 September, with only limited buffer zones open. October to March is the most comfortable for weather; April to June is hot but sightings improve as animals concentrate around water."
      },
      {
        "question": "How many safaris are included?",
        "answer": "Two — one evening drive on arrival and one the following morning. That is the sensible minimum, since a single drive is close to a coin toss and the two halves of the day behave differently. Park permits and a naturalist are included in the price."
      },
      {
        "question": "Can we choose our safari zone?",
        "answer": "No, and neither can any operator. The forest department allocates zones and vehicles through a permit system, and in peak season the sought-after zones go early. Booking well ahead improves what we can request. Every zone at Ranthambore holds tigers."
      },
      {
        "question": "Is this better than a standard 5 day Golden Triangle?",
        "answer": "Only if wildlife is a real priority. You are trading heritage depth for two safaris — this version covers Delhi lightly and gives Agra and Jaipur less time than the five-day heritage itinerary. If a tiger is the thing you most want from the trip, it is worth the trade."
      }
    ]
  },
  {
    id: 'golden-triangle-udaipur',
    title: '6 Day Golden Triangle with Udaipur',
    description: 'Extend the Golden Triangle to include the romantic city of Udaipur — the Venice of the East. Palaces, lakes, and timeless beauty await.',
    duration: '6 Days / 5 Nights',
    price: 450,
    image: '/rajasthan-palace-hotel.webp',
    category: 'Golden Triangle',
    rating: 4.9,
    reviewsCount: 350,
    highlights: ['Lake Pichola boat ride', 'City Palace Udaipur', 'Taj Mahal at sunrise', 'Heritage hotel stays throughout'],
    itinerary: [
      { time: 'Day 1', activity: 'Delhi sightseeing: Old Delhi, New Delhi landmarks' },
      { time: 'Day 2', activity: 'Drive to Agra, Taj Mahal & Agra Fort tours' },
      { time: 'Day 3', activity: 'Drive to Jaipur via Fatehpur Sikri' },
      { time: 'Day 4', activity: 'Jaipur: Amber Fort, City Palace, Hawa Mahal' },
      { time: 'Day 5', activity: 'Fly/drive to Udaipur, Lake Pichola, City Palace' },
      { time: 'Day 6', activity: 'Sahelion-ki-Bari, Jagdish Temple, depart for Delhi' }
    ],
    overview: [
      "Udaipur is not an extension of the Golden Triangle so much as a different Rajasthan bolted onto it. Where Jaipur and Jodhpur are desert cities of sandstone and fort walls, Udaipur is built around water — a chain of lakes with the City Palace running along the shore of Pichola, in the green Aravalli hills rather than the plains.",
      "Getting there is the cost. Udaipur sits around 650 km southwest of Jaipur, which is a long day by road or a short flight. Either works and we will price both, but it is the reason this is a six-day trip rather than five.",
      "The first four days are the Golden Triangle proper — Delhi, the Taj Mahal and Agra Fort, Fatehpur Sikri, then Amber Fort and the Jaipur old city. The last two are Udaipur at a deliberately slower pace, because rushing Udaipur defeats the point of going."
    ],
    included: [
      "Five nights of hotel accommodation across the route, including heritage properties on a twin-sharing basis with breakfast",
      "Private air-conditioned vehicle with a professional chauffeur for the whole trip, including every inter-city drive",
      "A government-licensed guide in each city, each holding a Ministry of Tourism regional licence",
      "Door-to-door pickup and drop at your Delhi hotel or the airport",
      "All tolls, parking, fuel, driver allowances and inter-state taxes",
      "Monument tickets arranged in advance across the whole route",
      "A female guide on request, at no extra charge, subject to availability on your dates"
    ],
    notIncluded: [
      "Monument entry fees along the route — we book them and confirm the full amount in writing before you pay anything",
      "Lunches and dinners; breakfast at your hotel is included",
      "The Amber Fort jeep ride, camera and video fees, and optional add-ons",
      "Tips and personal spending",
      "Flights to Udaipur if you choose to fly rather than drive — we will quote both"
    ],
    goodToKnow: [
      {
        "title": "Fly or drive to Udaipur — both are real options",
        "text": "The road from Jaipur is around 650 km and takes most of a day, though it passes Chittorgarh and Ajmer if you want to break it. Flying saves the day and costs more. We quote both so you can decide whether the day is worth the fare."
      },
      {
        "title": "Udaipur rewards slowness",
        "text": "The two days here are deliberately unhurried — the City Palace, a boat on Lake Pichola at sunset, Sahelion-ki-Bari and the old city lanes on foot. Cramming a fifth city into the same trip is possible and we would advise against it."
      },
      {
        "title": "October to March is the comfortable season",
        "text": "Clear skies and pleasant days across the whole route. December and January mornings can be foggy in Agra, which sometimes delays the Taj Mahal view. April to June gets very hot and the itinerary shifts to early starts. July to September is the monsoon — fewer crowds, lower prices, and Rajasthan at its greenest."
      },
      {
        "title": "Multi-day tours need a part payment",
        "text": "This tour holds hotel rooms on your behalf, so a part payment is usually needed to confirm them — that is the main way multi-day trips differ from our single-day tours. Nothing is taken through the website; we check availability first, then send payment details on WhatsApp."
      }
    ],
    faqs: [
      {
        "question": "Is Udaipur worth adding to the Golden Triangle?",
        "answer": "If you have the days, yes — it shows you a Rajasthan the Golden Triangle does not. Lakes instead of desert, the Aravalli hills instead of the plains, and a city built for water rather than defence. It costs a long drive or a flight from Jaipur, which is the honest trade."
      },
      {
        "question": "How do you get from Jaipur to Udaipur?",
        "answer": "Around 650 km by road, which takes most of a day but passes Chittorgarh and Ajmer if you want to break it up, or a short domestic flight. We quote both when you enquire. Driving keeps the trip continuous and saves the airfare; flying gives you most of a day back in Udaipur."
      },
      {
        "question": "How many days do you need in Udaipur?",
        "answer": "Two is the right minimum, which is what this itinerary gives. That covers the City Palace, a sunset boat on Lake Pichola, Sahelion-ki-Bari and Jagdish Temple, and enough unstructured time in the old city lanes for the place to register. One day turns it into a checklist."
      },
      {
        "question": "What is included in the 6 day tour price?",
        "answer": "Five nights of accommodation including heritage properties, a private air-conditioned vehicle with a chauffeur throughout, a licensed local guide in each city, all tolls and inter-state taxes, and monument tickets arranged in advance. Entry fees, meals other than breakfast, and any Udaipur flight are billed separately and confirmed before you pay."
      },
      {
        "question": "Why is Udaipur called the Venice of the East?",
        "answer": "Because of the lake system it is built around — Pichola and Fateh Sagar chief among them — with palaces, ghats and havelis running right to the water. It is a marketing phrase rather than a real comparison, but the impression of a city organised around water rather than around a fort is accurate."
      }
    ]
  },

  // ─── ROYAL RAJASTHAN ───
  {
    id: 'rajasthan-7d',
    title: '7 Day Royal Rajasthan Tour',
    description: 'Explore the royal state of Rajasthan — majestic forts, colorful bazaars, and desert landscapes across Jaipur, Jodhpur, and Udaipur.',
    duration: '7 Days / 6 Nights',
    price: 520,
    image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=80',
    category: 'Royal Rajasthan',
    rating: 4.9,
    reviewsCount: 290,
    highlights: ['Jaipur, Jodhpur & Udaipur', 'Desert cultural experience', 'Palace hotel stays', 'All meals & transport included'],
    itinerary: [
      { time: 'Day 1', activity: 'Arrive Delhi, transfer to heritage hotel, welcome dinner' },
      { time: 'Day 2', activity: 'Drive to Jaipur, Amber Fort, City Palace' },
      { time: 'Day 3', activity: 'Jaipur: Hawa Mahal, Nahargarh Fort, bazaar shopping' },
      { time: 'Day 4', activity: 'Drive to Jodhpur, Mehrangarh Fort, blue city walk' },
      { time: 'Day 5', activity: 'Jodhpur: Umaid Bhawan Palace, spice markets' },
      { time: 'Day 6', activity: 'Drive to Udaipur, City Palace, Lake Pichola sunset' },
      { time: 'Day 7', activity: 'Udaipur: Sahelion-ki-Bari, departure transfer' }
    ],
    overview: [
      "Seven days covers the three cities most people picture when they think of Rajasthan — Jaipur's forts, Jodhpur's blue old town beneath Mehrangarh, and Udaipur's lakes. What it deliberately leaves out is the Thar desert, which sits several hundred kilometres further west and needs its own days.",
      "That omission is the point rather than a shortcut. These three cities sit in a reasonably tight triangle, so the drives stay at four to five hours rather than the seven-hour desert runs, and each city gets a full day plus part of another.",
      "This is the version for a first trip to Rajasthan, or for anyone who would rather see three places properly than five in passing. If Jaisalmer and the desert are what drew you, the eight and nine day itineraries are the honest answer instead."
    ],
    included: [
      "Six nights across Delhi, Jaipur, Jodhpur and Udaipur, including palace and heritage properties on a twin-sharing basis",
      "All meals through the trip, as set out in the itinerary",
      "Private air-conditioned vehicle with a professional chauffeur for the whole trip, including every inter-city drive",
      "A government-licensed guide in each city, each holding a Ministry of Tourism regional licence",
      "Airport or hotel pickup in Delhi and the departure transfer at the end",
      "All tolls, parking, fuel, driver allowances and inter-state taxes",
      "Monument and fort tickets arranged in advance across the whole route",
      "A female guide on request, at no extra charge, subject to availability on your dates"
    ],
    notIncluded: [
      "Monument and fort entry fees along the route — we book them and confirm the full amount in writing before you pay anything",
      "Drinks, and anything ordered outside the set menu",
      "Camera and video fees, and optional add-ons such as the Amber Fort jeep ride",
      "Tips and personal spending"
    ],
    goodToKnow: [
      {
        "title": "What seven days leaves out",
        "text": "Jaisalmer and the Thar desert. Reaching them adds a seven-hour drive west from Jodhpur and at least two days. If a camel safari and dune camping are on your list, the eight or nine day itineraries are built around exactly that and this one is not."
      },
      {
        "title": "Mehrangarh is the fort people do not expect",
        "text": "Jodhpur's fort rises straight out of the rock above the blue city and is among the best preserved in India, with an audio guide that is genuinely good. Most visitors arrive expecting Jaipur to be the highlight and leave rating Mehrangarh above it."
      },
      {
        "title": "October to March is the season, and it matters more here",
        "text": "Rajasthan in April to June regularly passes 45°C, and the desert stretches become genuinely punishing rather than merely hot. October to March is comfortable throughout. July to September brings the monsoon — the state turns green, prices drop, and the crowds thin, though desert activities are limited."
      },
      {
        "title": "Multi-day tours need a part payment",
        "text": "This tour holds hotel rooms across several cities on your behalf, so a part payment is needed to confirm them — more so in peak season, when heritage properties fill months ahead. Nothing is taken through the website; we check availability first, then send payment details on WhatsApp."
      }
    ],
    faqs: [
      {
        "question": "Which cities does the 7 day Rajasthan tour cover?",
        "answer": "Jaipur, Jodhpur and Udaipur, starting and ending in Delhi. That is the compact triangle of Rajasthan — forts, the blue city and the lakes — with drives of four to five hours between them rather than the long desert runs further west."
      },
      {
        "question": "Does this tour include Jaisalmer and the desert?",
        "answer": "No. Jaisalmer is around seven hours west of Jodhpur and needs at least two more days to be worth the drive. Our eight and nine day itineraries are built around it, including the camel safari and dune sunset. Seven days is the version that skips the desert deliberately in order to give three cities proper time."
      },
      {
        "question": "Are hotels and meals included?",
        "answer": "Yes — six nights on a twin-sharing basis including palace and heritage properties, and all meals as set out in the itinerary, along with a private air-conditioned vehicle throughout and a licensed guide in each city. Fort and monument entry fees are billed separately and confirmed in writing first."
      },
      {
        "question": "How much driving is involved?",
        "answer": "Delhi to Jaipur is about five hours, Jaipur to Jodhpur around five to six, and Jodhpur to Udaipur roughly five including a stop. The drives sit between full sightseeing days rather than on top of them, and all of it is in a private air-conditioned vehicle that stays with you for the week."
      },
      {
        "question": "Is 7 days enough for Rajasthan?",
        "answer": "For three cities seen properly, yes. For the whole state, no — Rajasthan is larger than England and the desert west alone needs three days. Seven days gives you the forts, the blue city and the lakes without any day feeling like a transfer, which is a better trip than five cities at a jog."
      }
    ]
  },
  {
    id: 'rajasthan-8d',
    title: '8 Day Royal Rajasthan Tour',
    description: 'A deeper dive into Rajasthan\'s royal heritage with Pushkar and Jaisalmer included. Desert safaris, sacred lakes, and mighty fortresses.',
    duration: '8 Days / 7 Nights',
    price: 595,
    image: 'https://images.unsplash.com/photo-1524230572899-a752b3835840?auto=format&fit=crop&w=1200&q=80',
    category: 'Royal Rajasthan',
    rating: 4.8,
    reviewsCount: 240,
    highlights: ['Jaisalmer desert safari', 'Pushkar sacred lake', 'Mehrangarh Fort', 'Camel ride in Thar Desert'],
    itinerary: [
      { time: 'Day 1', activity: 'Arrive Delhi, overnight at luxury hotel' },
      { time: 'Day 2', activity: 'Drive to Jaipur, Amber Fort, evening bazaar walk' },
      { time: 'Day 3', activity: 'Jaipur sightseeing, drive to Pushkar' },
      { time: 'Day 4', activity: 'Pushkar Lake, Brahma Temple, drive to Jodhpur' },
      { time: 'Day 5', activity: 'Jodhpur: Mehrangarh Fort, blue city heritage walk' },
      { time: 'Day 6', activity: 'Drive to Jaisalmer, Golden Fort exploration' },
      { time: 'Day 7', activity: 'Jaisalmer: Desert safari, camel ride, dune sunset' },
      { time: 'Day 8', activity: 'Fly from Jaisalmer/Jodhpur to Delhi, departure' }
    ],
    overview: [
      "This is the itinerary for people who came to Rajasthan for the desert. It runs Jaipur, then Pushkar, Jodhpur and out west to Jaisalmer — the golden sandstone fort city on the edge of the Thar, and the only inhabited fort in India where people still live inside the walls.",
      "Pushkar is the other thing this version has that the seven-day does not. It is a small pilgrimage town around a sacred lake, with one of the very few Brahma temples anywhere, and it changes the rhythm of the trip between two big fort cities.",
      "The desert night at Jaisalmer — camel ride out to the dunes, sunset, and dinner under the sky — is what most people book this for. The drive west is long and there is no way around that, which is why this needs eight days rather than seven."
    ],
    included: [
      "Seven nights across Delhi, Jaipur, Pushkar, Jodhpur and Jaisalmer, including heritage and desert properties on a twin-sharing basis with breakfast",
      "Private air-conditioned vehicle with a professional chauffeur for the whole trip, including every inter-city drive",
      "A government-licensed guide in each city, each holding a Ministry of Tourism regional licence",
      "Airport or hotel pickup in Delhi and the departure transfer at the end",
      "All tolls, parking, fuel, driver allowances and inter-state taxes",
      "Monument and fort tickets arranged in advance across the whole route",
      "A female guide on request, at no extra charge, subject to availability on your dates",
      "Camel safari and dune sunset at Jaisalmer, with the desert camp arrangement"
    ],
    notIncluded: [
      "Monument and fort entry fees along the route — we book them and confirm the full amount in writing before you pay anything",
      "Lunches and dinners; breakfast at your hotel is included",
      "Domestic flights at the end of the trip if you fly back from Jaisalmer or Jodhpur rather than driving — we will quote both",
      "Camera and video fees, and optional add-ons such as the Amber Fort jeep ride",
      "Tips and personal spending"
    ],
    goodToKnow: [
      {
        "title": "The drive west is long, and honestly so",
        "text": "Jodhpur to Jaisalmer is around 280 km and five to six hours across increasingly empty country. It is a genuinely interesting drive rather than dead time, but it is a driving day. Flying out of Jaisalmer or Jodhpur at the end saves you repeating the whole distance back to Delhi."
      },
      {
        "title": "Jaisalmer fort is still a living city",
        "text": "Around three thousand people live inside the walls, which makes it unlike Mehrangarh or Amber. It also means real strain on the drainage and foundations, so we stay outside the fort and visit it rather than adding to the load — a small thing, but it is the reason the fort is on watch lists."
      },
      {
        "title": "Pushkar has rules worth knowing",
        "text": "It is a Hindu pilgrimage town. The lake ghats require shoes off and shoulders covered, alcohol and meat are not sold, and you may be offered a \"Pushkar passport\" blessing at the ghats that ends in a donation demand. Your guide will steer you past it."
      },
      {
        "title": "October to March is the season, and it matters more here",
        "text": "Rajasthan in April to June regularly passes 45°C, and the desert stretches become genuinely punishing rather than merely hot. October to March is comfortable throughout. July to September brings the monsoon — the state turns green, prices drop, and the crowds thin, though desert activities are limited."
      }
    ],
    faqs: [
      {
        "question": "Does this tour include a desert safari in Jaisalmer?",
        "answer": "Yes — a camel ride out to the Sam or Khuri dunes for sunset, with the desert camp arrangement included in the price. It is the reason most people choose this itinerary over the seven-day one, which stops short of the desert entirely."
      },
      {
        "question": "How far is Jaisalmer from Jodhpur?",
        "answer": "Around 280 km, five to six hours by road across increasingly empty desert country. It is a real driving day and there is no shortcut. Flying home from Jaisalmer or Jodhpur at the end avoids repeating the full distance back to Delhi, and we will quote that option when you enquire."
      },
      {
        "question": "What is Pushkar and why is it on this route?",
        "answer": "A small Hindu pilgrimage town built around a sacred lake, with one of the very few Brahma temples in the world. It sits between Jaipur and Jodhpur and changes the pace between two large fort cities. It is also a town with genuine religious etiquette — shoes off at the ghats, no alcohol or meat sold."
      },
      {
        "question": "Is 8 days enough to see Rajasthan including the desert?",
        "answer": "It is enough for Jaipur, Pushkar, Jodhpur and Jaisalmer at a workable pace, which is the desert version of the state. It does not include Udaipur and the lakes — for both the desert and Udaipur you want the nine or twelve day itineraries."
      },
      {
        "question": "Where do we stay in the desert?",
        "answer": "At a desert camp near the dunes outside Jaisalmer, included in your tour price. We stay outside the Jaisalmer fort walls rather than inside — around three thousand people live in the fort and the drainage strain from hotels there is the main reason it appears on heritage watch lists."
      }
    ]
  },
  {
    id: 'rajasthan-9d',
    title: '9 Day Royal Rajasthan Tour',
    description: 'The complete Rajasthan experience covering all major cities and hidden gems. From desert dunes to lake palaces, see it all.',
    duration: '9 Days / 8 Nights',
    price: 665,
    image: '/rajasthan-palace-hotel.webp',
    category: 'Royal Rajasthan',
    rating: 4.9,
    reviewsCount: 210,
    highlights: ['Mount Abu hill station', 'Ranakpur Jain temples', 'Desert camel safari', 'Complete Rajasthan circuit'],
    itinerary: [
      { time: 'Day 1', activity: 'Arrive Delhi, welcome dinner at heritage hotel' },
      { time: 'Day 2', activity: 'Drive to Jaipur, Amber Fort, City Palace' },
      { time: 'Day 3', activity: 'Jaipur: Hawa Mahal, Nahargarh, local bazaars' },
      { time: 'Day 4', activity: 'Drive to Jodhpur via Ajmer & Pushkar' },
      { time: 'Day 5', activity: 'Jodhpur: Mehrangarh Fort, Umaid Bhawan, blue city' },
      { time: 'Day 6', activity: 'Drive to Jaisalmer, Golden Fort evening walk' },
      { time: 'Day 7', activity: 'Jaisalmer desert safari, camel ride, desert camping' },
      { time: 'Day 8', activity: 'Drive to Udaipur via Ranakpur Jain Temples' },
      { time: 'Day 9', activity: 'Udaipur: City Palace, Lake Pichola, departure' }
    ],
    overview: [
      "Nine days is the first length at which you can have both Rajasthans — the desert west of Jodhpur and Jaisalmer, and the green, lake-centred south around Udaipur — without either feeling like an afterthought.",
      "It also picks up two places that longer-looking itineraries often skip. Ranakpur is a fifteenth-century Jain temple carved from white marble with more than a thousand pillars, no two alike, and it sits on the road between Jodhpur and Udaipur. Mount Abu is Rajasthan's only hill station, cool enough to change the weather for a day.",
      "The shape is a loop: Jaipur, then west through Jodhpur to the desert at Jaisalmer, then south through Ranakpur and the Aravalli hills to finish on the lakes at Udaipur. It covers more ground than the eight-day version without adding more driving days than one."
    ],
    included: [
      "Eight nights across Delhi, Jaipur, Jodhpur, Jaisalmer, Mount Abu and Udaipur, including heritage and palace properties on a twin-sharing basis with breakfast",
      "Private air-conditioned vehicle with a professional chauffeur for the whole trip, including every inter-city drive",
      "A government-licensed guide in each city, each holding a Ministry of Tourism regional licence",
      "Airport or hotel pickup in Delhi and the departure transfer at the end",
      "All tolls, parking, fuel, driver allowances and inter-state taxes",
      "Monument and fort tickets arranged in advance across the whole route",
      "A female guide on request, at no extra charge, subject to availability on your dates",
      "Camel safari and desert camping at Jaisalmer"
    ],
    notIncluded: [
      "Monument and fort entry fees along the route — we book them and confirm the full amount in writing before you pay anything",
      "Lunches and dinners; breakfast at your hotel is included",
      "Camera and video fees, and optional add-ons such as the Amber Fort jeep ride",
      "Tips and personal spending"
    ],
    goodToKnow: [
      {
        "title": "Ranakpur is the stop nobody expects to remember",
        "text": "A fifteenth-century Jain temple in white marble with 1,444 pillars, no two carved alike, in a wooded valley on the Jodhpur to Udaipur road. It is open to non-Jain visitors in the afternoon only, leather must be left outside, and photography is restricted inside."
      },
      {
        "title": "Mount Abu changes the weather for a day",
        "text": "Rajasthan's only hill station sits at about 1,200 metres, which in summer is a twelve-degree difference from the plains. It is also home to the Dilwara temples, whose marble carving is generally rated finer than Ranakpur's. In winter it can be genuinely cold at night — pack accordingly."
      },
      {
        "title": "October to March is the season, and it matters more here",
        "text": "Rajasthan in April to June regularly passes 45°C, and the desert stretches become genuinely punishing rather than merely hot. October to March is comfortable throughout. July to September brings the monsoon — the state turns green, prices drop, and the crowds thin, though desert activities are limited."
      },
      {
        "title": "Multi-day tours need a part payment",
        "text": "This tour holds hotel rooms across several cities on your behalf, so a part payment is needed to confirm them — more so in peak season, when heritage properties fill months ahead. Nothing is taken through the website; we check availability first, then send payment details on WhatsApp."
      }
    ],
    faqs: [
      {
        "question": "What does the 9 day Rajasthan tour cover that the 8 day does not?",
        "answer": "Udaipur and the lakes, plus Ranakpur and Mount Abu on the way south. The eight-day itinerary ends in the desert around Jaisalmer; this one continues through the Aravalli hills to finish on the water. If you want both the desert and Udaipur, nine days is the shortest version that does both properly."
      },
      {
        "question": "What is Ranakpur and is it worth the stop?",
        "answer": "A fifteenth-century Jain temple carved in white marble, with 1,444 pillars of which no two are alike, set in a wooded valley between Jodhpur and Udaipur. It is on the route rather than a detour, and most visitors rate it among the finest things they see in Rajasthan. Non-Jain visitors are admitted in the afternoon only."
      },
      {
        "question": "Is Mount Abu worth including?",
        "answer": "It earns its place in two ways. It is Rajasthan's only hill station at around 1,200 metres, which in summer means a real drop in temperature, and it holds the Dilwara temples — marble carving that is generally considered even finer than Ranakpur. It also breaks up what would otherwise be a long desert-to-lakes drive."
      },
      {
        "question": "Is this too much driving for nine days?",
        "answer": "It is a real driving itinerary and we would rather say so. The longest legs are Jodhpur to Jaisalmer at five to six hours and Jaisalmer south towards Mount Abu, which is a full day. Everything else sits at four to five. If that sounds like too much, the seven-day version keeps the drives short by skipping the desert."
      },
      {
        "question": "Does this tour include desert camping?",
        "answer": "Yes — a camel safari out to the dunes near Jaisalmer and a night at a desert camp are included. Bring warm layers if you are travelling between November and February; desert nights drop sharply once the sun goes."
      }
    ]
  },
  {
    id: 'rajasthan-12d',
    title: '12 Day Grand Rajasthan Tour',
    description: 'The ultimate Rajasthan journey — every palace, every fort, every experience across the golden desert state. The most comprehensive royal tour available.',
    duration: '12 Days / 11 Nights',
    price: 880,
    image: 'https://images.unsplash.com/photo-1599058917765-a780eda07a3e?auto=format&fit=crop&w=1200&q=80',
    category: 'Royal Rajasthan',
    rating: 4.9,
    reviewsCount: 180,
    highlights: ['All major Rajasthan cities', 'Desert camping under stars', 'Heritage palace hotels', 'Complete royal experience'],
    itinerary: [
      { time: 'Day 1', activity: 'Arrive Delhi, city orientation tour' },
      { time: 'Day 2', activity: 'Delhi sightseeing: Old Delhi, New Delhi monuments' },
      { time: 'Day 3', activity: 'Drive to Agra, Taj Mahal & Agra Fort' },
      { time: 'Day 4', activity: 'Drive to Jaipur via Fatehpur Sikri' },
      { time: 'Day 5', activity: 'Jaipur: Amber Fort, City Palace, Hawa Mahal' },
      { time: 'Day 6', activity: 'Drive to Pushkar: Sacred lake, Brahma Temple' },
      { time: 'Day 7', activity: 'Drive to Jodhpur: Mehrangarh Fort, blue city walk' },
      { time: 'Day 8', activity: 'Drive to Jaisalmer: Golden Fort exploration' },
      { time: 'Day 9', activity: 'Jaisalmer desert safari & overnight desert camp' },
      { time: 'Day 10', activity: 'Drive to Mount Abu via Ranakpur temples' },
      { time: 'Day 11', activity: 'Drive to Udaipur: City Palace, Lake Pichola' },
      { time: 'Day 12', activity: 'Udaipur morning tour, fly to Delhi, departure' }
    ],
    overview: [
      "Twelve days is the only itinerary we run that puts the Golden Triangle and the whole of Rajasthan into one trip. Delhi and Agra at the start, then the full western loop — Jaipur, Jodhpur, Jaisalmer, Mount Abu, Ranakpur and Udaipur — with none of the compression that makes shorter versions feel like transfers.",
      "The practical difference is not more cities. It is that each one gets a full day, the long desert legs stop being endurance tests, and there is room to sit still. Rajasthan is larger than England, and the difference between seeing it in nine days and twelve is mostly the difference between arriving and staying.",
      "This is the trip for a first visit where you are unlikely to come back soon, or for anyone who would rather do one thorough journey than two partial ones. If your time is tighter, the nine-day version covers the same state with the Taj Mahal dropped."
    ],
    included: [
      "Eleven nights across Delhi, Agra, Jaipur, Jodhpur, Jaisalmer, Mount Abu and Udaipur, in heritage and palace properties throughout on a twin-sharing basis with breakfast",
      "Private air-conditioned vehicle with a professional chauffeur for the whole trip, including every inter-city drive",
      "A government-licensed guide in each city, each holding a Ministry of Tourism regional licence",
      "Airport or hotel pickup in Delhi and the departure transfer at the end",
      "All tolls, parking, fuel, driver allowances and inter-state taxes",
      "Monument and fort tickets arranged in advance across the whole route",
      "A female guide on request, at no extra charge, subject to availability on your dates",
      "Camel safari and a night of desert camping under the stars at Jaisalmer"
    ],
    notIncluded: [
      "Monument and fort entry fees along the route — we book them and confirm the full amount in writing before you pay anything",
      "Lunches and dinners; breakfast at your hotel is included",
      "Camera and video fees, and optional add-ons such as the Amber Fort jeep ride",
      "Tips and personal spending"
    ],
    goodToKnow: [
      {
        "title": "This is the only Rajasthan itinerary that includes the Taj Mahal",
        "text": "Our seven, eight and nine day Rajasthan tours start and end in Delhi but do not go to Agra. If you want the Taj Mahal and the full western loop in one trip, this is the version that does it — which is part of why it runs to twelve days."
      },
      {
        "title": "Pack for two climates",
        "text": "Between November and February, Jaisalmer and Mount Abu get genuinely cold after dark while the middle of the day stays warm, and Udaipur is milder than both. Layers matter more on this trip than on any of the shorter ones."
      },
      {
        "title": "October to March is the season, and it matters more here",
        "text": "Rajasthan in April to June regularly passes 45°C, and the desert stretches become genuinely punishing rather than merely hot. October to March is comfortable throughout. July to September brings the monsoon — the state turns green, prices drop, and the crowds thin, though desert activities are limited."
      },
      {
        "title": "The route gets reshaped often",
        "text": "Most of our longer trips start as a standard route and change. Common adjustments are dropping a city to slow the rest down, adding Bundi or Shekhawati for the painted havelis, or finishing in Udaipur rather than returning to Delhi. Send your dates, a rough budget and what matters most and we build around that."
      }
    ],
    faqs: [
      {
        "question": "Does the 12 day Rajasthan tour include the Taj Mahal?",
        "answer": "Yes, and it is the only one of our Rajasthan itineraries that does. Delhi and Agra come at the start, before the western loop through Jaipur, Jodhpur, Jaisalmer, Mount Abu, Ranakpur and Udaipur. The seven, eight and nine day versions cover Rajasthan alone."
      },
      {
        "question": "Is 12 days too long for Rajasthan?",
        "answer": "Only if you would rather move quickly than settle. Rajasthan is larger than England, and twelve days is what it takes to give each city a full day and still cross the desert without endurance driving. The nine-day version covers the same state at a faster pace if your time is tighter."
      },
      {
        "question": "Which cities does the 12 day tour cover?",
        "answer": "Delhi, Agra, Jaipur, Jodhpur, Jaisalmer, Mount Abu and Udaipur, with Fatehpur Sikri and Ranakpur on the road between them. That is the Golden Triangle plus the full Rajasthan loop — desert, hill station and lakes in one journey."
      },
      {
        "question": "What kind of hotels are used?",
        "answer": "Heritage and palace properties throughout, on a twin-sharing basis with breakfast. Several are converted forts and havelis rather than modern hotels, which on a trip this length is part of the experience rather than a detail. Because these fill months ahead in peak season, a part payment confirms them."
      },
      {
        "question": "When is the best time to do a 12 day Rajasthan trip?",
        "answer": "October to March without much argument. On a trip this long the heat compounds — April to June regularly passes 45°C and the desert legs become punishing rather than merely hot. July to September is the monsoon, when the state turns green and prices fall, though desert activities are limited."
      }
    ]
  },

  // ─── PHOTOGRAPHY TOURS ───
  {
    id: 'taj-photography-tour',
    title: 'Taj Mahal Photography Tour',
    description: 'A dedicated photography tour of the Taj Mahal with expert guides who know the best angles, timing, and hidden viewpoints for stunning shots.',
    duration: '12 Hours',
    price: 120,
    image: '/taj-mahal-reflection.webp',
    category: 'Photography Tours',
    rating: 4.9,
    reviewsCount: 310,
    highlights: ['Golden hour shots at sunrise', 'Hidden viewpoints access', 'Professional photography tips', 'All best angles covered'],
    itinerary: [
      { time: '04:00 AM', activity: 'Pickup from hotel, drive to Agra' },
      { time: '05:30 AM', activity: 'Pre-dawn setup at Mehtab Bagh for Taj reflections' },
      { time: '06:15 AM', activity: 'Sunrise golden hour shoot at Taj Mahal' },
      { time: '08:00 AM', activity: 'Breakfast break, review shots' },
      { time: '09:00 AM', activity: 'Interior details & architecture photography session' },
      { time: '11:00 AM', activity: 'Agra Fort photography — dramatic angles & shadows' },
      { time: '01:00 PM', activity: 'Lunch, then Yamuna riverside Taj shots' },
      { time: '03:00 PM', activity: 'Secret viewpoints & local neighborhood spots' },
      { time: '04:30 PM', activity: 'Depart for Delhi with your collection of shots' }
    ],
    overview: [
      "Most photographs of the Taj Mahal are taken from the same spot on the main axis, between nine and eleven in the morning, in the worst light of the day. This tour is built to get you away from that — Mehtab Bagh across the river before dawn, the monument itself at first light, and the riverside and rooftop angles that almost no visitor finds.",
      "The pre-dawn start at Mehtab Bagh is the part people remember. The garden sits on the axis Shah Jahan designed the building to be seen from, and on a still morning the Yamuna holds the reflection. You are then inside the complex for the first hour after opening, when the forecourt is a few hundred people rather than several thousand.",
      "Your guide is a working photographer who knows the site rather than a monument guide carrying a camera. Expect direction on position and timing, a review session over breakfast, and honest advice about what the light will and will not do on your particular morning."
    ],
    included: [
      "A full day with a photography guide who works this site regularly",
      "Private air-conditioned vehicle with a professional chauffeur, yours for the whole day",
      "Pre-dawn door-to-door pickup and drop at your Delhi hotel",
      "All tolls, parking, fuel and driver charges",
      "Monument tickets arranged in advance — at sunrise the counter queue costs you the light",
      "A review session over breakfast, going through the morning's frames before the afternoon",
      "A female guide on request, at no extra charge, subject to availability on your date"
    ],
    notIncluded: [
      "Monument entry fees — we book them for you and confirm the exact amount in writing before you pay anything. A foreign adult Taj Mahal ticket is ₹1,300, SAARC ₹740 and Indian citizens ₹250",
      "Camera and video fees, which several Agra monuments charge separately from entry",
      "Meals and drinks — breakfast and lunch stops are built into the day and you settle those bills there",
      "Camera equipment; bring your own body and lenses",
      "Tips and personal spending"
    ],
    goodToKnow: [
      {
        "title": "Tripods and drones are not allowed inside",
        "text": "Neither is permitted within the Taj Mahal complex, and there is no permit that changes it. Mehtab Bagh before dawn is where a tripod earns its place, and we plan the morning around that. Bring a fast lens for inside the complex rather than assuming you can brace anything."
      },
      {
        "title": "What gets confiscated at the gate",
        "text": "Large bags, food, cigarettes, tripods and anything electronic beyond a phone and a camera go into the cloakroom. Security screening at the East Gate is thorough and it is the real queue at sunrise. Come with a body, lenses, cards and battery, and leave everything else in the car."
      },
      {
        "title": "The Taj Mahal is closed every Friday",
        "text": "No exceptions, for congregational prayers at the mosque inside the complex. Tell us your dates and we will flag it before you book, or reshape the itinerary around Agra Fort, Fatehpur Sikri and Mehtab Bagh — which still gives you the classic view across the river."
      },
      {
        "title": "Nothing is charged when you book",
        "text": "We confirm guide and vehicle availability for your date first, then send payment details on WhatsApp. Cash, UPI, bank transfer and card are all accepted, and single-day tours need no deposit. Free cancellation up to 24 hours before pickup."
      }
    ],
    faqs: [
      {
        "question": "What is the best time of day to photograph the Taj Mahal?",
        "answer": "The first hour after the gate opens, which is 30 minutes before sunrise and moves through the year — roughly 6:35 AM in December, as early as 4:55 AM in June. You get the softest light, a chance at a reflection in the watercourse before the surface is disturbed, and a few hundred people in frame instead of several thousand. By eleven the marble has gone flat and white."
      },
      {
        "question": "Can I bring a tripod to the Taj Mahal?",
        "answer": "Not inside the complex, and there is no permit that gets around it. Drones are also prohibited. Mehtab Bagh across the river is where a tripod is genuinely useful, and the pre-dawn session there is built into this tour for exactly that reason."
      },
      {
        "question": "Where are the best viewpoints of the Taj Mahal besides the main entrance?",
        "answer": "Mehtab Bagh directly across the Yamuna, which sits on the axis the building was designed to be seen from. The riverside stretch east of the complex gives you the side profile with local life in the foreground. There are also rooftop angles in the neighbourhood behind the East Gate that need someone who knows which doors to knock on."
      },
      {
        "question": "What camera gear should I bring?",
        "answer": "A wide lens for the complex and something longer for compressing the minarets and the riverside shots. Bring more cards and battery than you expect to need. Agra dust is the real hazard for sensors, so a blower and a cloth are worth the space, and change lenses as little as you can outdoors."
      },
      {
        "question": "Is this tour suitable if I am not a professional photographer?",
        "answer": "Yes. The value is in access and timing rather than technique — being in the right place an hour before everyone else is what makes the difference, and that holds whether you shoot on a professional body or a phone. The guide adjusts to what you are carrying."
      }
    ]
  },
  {
    id: 'delhi-photography-tour',
    title: 'Delhi Street & Heritage Photography Tour',
    description: 'Capture the vibrant streets, historic monuments, and hidden corners of Delhi with a local photography guide. Perfect for enthusiasts and pros.',
    duration: '10 Hours',
    price: 110,
    image: '/humayuns-tomb-family.webp',
    category: 'Photography Tours',
    rating: 4.8,
    reviewsCount: 260,
    highlights: ['Old Delhi street photography', 'Humayun\'s Tomb golden hour', 'Qutub Minar dramatic angles', 'Local life & culture shots'],
    itinerary: [
      { time: '06:00 AM', activity: 'Early morning at Jama Masjid — empty courtyards' },
      { time: '07:30 AM', activity: 'Old Delhi street photography — spice market, Chandni Chowk' },
      { time: '09:30 AM', activity: 'Breakfast at Paranthe Wali Gali' },
      { time: '10:30 AM', activity: 'Humayun\'s Tomb — Mughal architecture in morning light' },
      { time: '12:30 PM', activity: 'Lunch break, review and tips session' },
      { time: '02:00 PM', activity: 'Qutub Minar complex — shadows and geometry' },
      { time: '04:00 PM', activity: 'Lodhi Garden — nature and heritage blend' },
      { time: '05:30 PM', activity: 'India Gate golden hour, wrap up session' }
    ],
    overview: [
      'Delhi photographs badly in the middle of the day and beautifully at either end of it, and almost every problem visitors have with photographing the city comes from being in the wrong place at the wrong hour. This day is ordered around light rather than around a checklist — Jama Masjid while the courtyard is still empty, Old Delhi as the lanes wake up, and the Mughal ruins in the last hour before sunset.',
      'It starts at 6am for a reason. The Jama Masjid courtyard at first light is close to deserted, and the Chandni Chowk lanes an hour later are at their most photogenic — shutters going up, deliveries arriving, the spice market at full tilt before the crowds make it impossible to stand still.',
      'Your guide is a local photographer, not a monument guide with a camera. The day includes a midday review session over lunch, which is when most of the actual learning happens.'
    ],
    included: [
      'A full day with a local photography guide who knows where the light lands and when',
      'Private air-conditioned vehicle with a professional chauffeur between locations, yours for the whole day',
      'Door-to-door pickup and drop at your Delhi hotel',
      'All tolls, parking, fuel and driver charges',
      'Monument tickets arranged in advance so you are shooting rather than queuing',
      'A midday review session — going through the morning\'s frames before the afternoon shoot',
      'A female guide on request, at no extra charge, subject to availability on your date'
    ],
    notIncluded: [
      'Monument entry fees — we book them for you and confirm the exact amount in writing before you pay anything',
      'Camera and video fees, which several Delhi monuments charge separately from entry',
      'Meals and drinks — breakfast and lunch stops are built into the day and you settle those bills there',
      'Camera equipment; bring your own body and lenses',
      'Tips and personal spending'
    ],
    goodToKnow: [
      {
        title: 'Tripods are not allowed at most monuments',
        text: 'ASI sites including Humayun\'s Tomb and Qutub Minar do not permit tripods without a prior permit, and neither does the Taj Mahal. Plan for handheld work, or tell us in advance if a tripod matters to you and we will look at what is possible on your date.'
      },
      {
        title: 'What to bring',
        text: 'A fast wide lens earns its place in the Old Delhi lanes, and something longer is useful for compressing the Mughal geometry at Qutub Minar. Bring more cards and battery than you think you need — there is no comfortable place to stop and offload mid-morning. Dust is the real enemy in Delhi, so a blower and a cloth are worth the space.'
      },
      {
        title: 'Beginners are welcome',
        text: 'The day works whether you shoot on a professional body or a phone. The guide adjusts to what you are carrying and what you want out of the day, and the midday review session is where most of that gets sorted out.'
      },
      {
        title: 'Nothing is charged when you book',
        text: 'We confirm availability for your date first, then send payment details on WhatsApp. Cash, UPI, bank transfer and card are all accepted, and this tour needs no deposit. Free cancellation up to 24 hours before pickup.'
      }
    ],
    faqs: [
      {
        question: 'What are the best places for photography in Delhi?',
        answer:
          'Jama Masjid at first light, the Chandni Chowk lanes and spice market as they wake up, Humayun\'s Tomb in morning light, Qutub Minar for shadows and geometry in the afternoon, and Lodhi Garden and India Gate at golden hour. The order matters as much as the list — these are ordered here the way the light actually moves across the city.'
      },
      {
        question: 'What time of day is best for photographing Delhi?',
        answer:
          'The first two hours after sunrise and the last hour before sunset, and this is not a small difference in Delhi. Midday sun flattens the sandstone at Qutub Minar and Humayun\'s Tomb completely, and the Old Delhi lanes become too crowded to frame anything cleanly. A day that starts at 6am gets you the two best hours most visitors sleep through.'
      },
      {
        question: 'Can I bring a tripod or a drone?',
        answer:
          'Drones are not permitted at Delhi monuments. Tripods need a prior permit at ASI sites including Humayun\'s Tomb and Qutub Minar, and are not allowed at the Taj Mahal at all. The day is planned around handheld shooting. If a tripod is essential to what you want to make, tell us before you book and we will look into what is possible on your specific date.'
      },
      {
        question: 'Do I need to be an experienced photographer to join?',
        answer:
          'No. The day is built around light and access rather than around technique, and it works whether you are carrying a professional body or a phone. Your guide adjusts to your level, and the midday review session over lunch is usually where the most useful part of the day happens for less experienced photographers.'
      },
      {
        question: 'Are camera fees included in the tour price?',
        answer:
          'No — several Delhi monuments charge a camera or video fee separately from the entry ticket, and those are billed to you along with the entry fees. We arrange all of it in advance so you are not dealing with counters, and confirm the full amount in writing before you pay anything.'
      }
    ]
  }
];

export const DESTINATIONS: Destination[] = [
  {
    id: 'agra',
    name: 'Agra',
    description: 'City of the Taj Mahal and three UNESCO World Heritage sites.',
    image: '/taj-mahal-dawn.webp',
    toursCount: 12
  },
  {
    id: 'jaipur',
    name: 'Jaipur',
    description: 'The Pink City, known for royal architecture and vibrant bazaars.',
    image: '/rajasthan-palace-hotel.webp',
    toursCount: 8
  },
  {
    id: 'delhi',
    name: 'Delhi',
    description: 'A vibrant metropolis blending modern India with ancient history.',
    image: '/red-fort-delhi.webp',
    toursCount: 10
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    slug: 'taj-mahal-timing-guide',
    title: 'Insider Guide: The Best Time to Visit Taj Mahal in 2026',
    excerpt: 'Avoid the crowds and find the perfect light. Learn our secret tips for the ultimate Taj experience.',
    content: 'The Taj Mahal is best visited during the cooler months between October and March. Sunrise is the absolute prime time for photography, as the white marble reflects the soft morning glow...',
    category: 'Travel Tips',
    image: '/taj-mahal-dawn.webp',
    date: 'August 18, 2026',
    author: 'Hemant Kumar'
  },
  {
    id: 'b2',
    slug: 'agra-food-guide',
    title: 'Top 5 Local Food Delicacies in Agra',
    excerpt: 'Beyond the monuments, Agra offers a culinary journey you cannot miss. Try Petha, Bedai, and Mughlai Parathas.',
    content: 'Agra is a paradise for street food lovers. The legendary Agra Petha, made from ash gourd, comes in dozens of varieties like Pan Petha and Saffron Petha...',
    category: 'Cuisine',
    image: '/chai-stop-with-driver.webp',
    date: 'July 22, 2026',
    author: 'Hemant Kumar'
  }
];

/**
 * Live figures from the Google Business Profile — the single source of truth for
 * every rating claim on the site. Re-check these whenever REVIEWS is synced, and
 * never state a number here that the public listing does not show.
 * Listing: https://g.page/r/CS9HSF8iHKJeEBM
 */
export const GOOGLE_RATING = '4.9';
export const GOOGLE_REVIEW_COUNT = 8;
export const GOOGLE_LISTING_URL = 'https://g.page/r/CS9HSF8iHKJeEBM';

/**
 * Tripadvisor listing — same rule as above: only figures the public page shows.
 * Verified September 2026.
 */
export const TRIPADVISOR_RATING = '5.0';
export const TRIPADVISOR_REVIEW_COUNT = 5;
export const TRIPADVISOR_LISTING_URL =
  'https://www.tripadvisor.com/Attraction_Review-g304551-d34462482-Reviews-Indiventure_Travellers-New_Delhi_National_Capital_Territory_of_Delhi.html';

export const VIATOR_LISTING_URL =
  'https://www.viator.com/tours/New-Delhi/Delhi-Unveiled-Private-Full-Day-Heritage-and-Cultural-Experience/d804-5671644P2';

/**
 * Platforms we are listed on but deliberately quote no rating for. Viator is
 * owned by Tripadvisor and shares its review pool, so showing both counts would
 * present the same reviews twice.
 *
 * Every entry needs a public listing URL — a name a traveller cannot open is the
 * unverifiable logo wall this replaced.
 */
export const ADDITIONAL_LISTINGS: { name: string; url: string }[] = [
  { name: 'Viator', url: VIATOR_LISTING_URL }
];

/**
 * Verified Google reviews, transcribed verbatim from the public listing
 * (spelling left as written by the reviewer). Last synced September 2026.
 *
 * These are a selection — the listing carries GOOGLE_REVIEW_COUNT reviews in
 * total, so the site shows the real Google average rather than one computed
 * from the subset below.
 */
export const REVIEWS: Review[] = [
  {
    id: 'r1',
    author: 'Deepak Binwal',
    rating: 5,
    text: 'Our Golden Triangle tour with IndiVentureTravellers was truly special. Hemant made us feel like we were exploring India with a friend, not just a guide. His stories of Delhi, the Taj Mahal, and Jaipur made every place come alive. We loved the personal attention and the little cultural experiences along the way. Thank you, Hemant, for making our first journey through India so memorable. We would happily recommend IndiVentureTravellers to our friends and family!',
    date: '2026-09',
    source: 'Google'
  },
  {
    id: 'r2',
    author: 'Keven Jhon',
    rating: 5,
    text: 'We had an amazing experience traveling with IndiVenturetravellers during our visit to India. From the moment we arrived, everything was organized perfectly. Our guide was friendly, knowledgeable, and spoke excellent English.',
    date: '2026-07',
    source: 'Google'
  },
  {
    id: 'r3',
    author: 'Tereza Housková',
    rating: 5,
    text: 'The best traveling with guide Himen. He knows what he dnes and can take wonderful pictures as well. Thank You for everything',
    date: '2026-07',
    source: 'Google'
  },
  {
    id: 'r4',
    author: 'Mohd Hilal',
    rating: 5,
    text: 'Really had awesome experience guide was very knowledgeable and very cooperative',
    date: '2026-07',
    source: 'Google'
  },
  {
    id: 'r5',
    author: 'Maria Vhernie Vizcarra',
    rating: 4,
    text: 'Great tour',
    date: '2026-08',
    source: 'Google'
  }
];

// Figures verified August 2026 — re-check ticket prices each year, since ASI revises them.
export const FAQS = [
  {
    question: "Is the Taj Mahal closed on any days?",
    answer:
      "Yes. The Taj Mahal is closed every Friday for congregational prayers at the mosque inside the complex, with no exceptions. It is open all other days, including weekends and public holidays. If your trip only allows a Friday in Agra, we shift the itinerary to Agra Fort, Fatehpur Sikri and Mehtab Bagh, where you still get the classic across-the-river view of the Taj."
  },
  {
    question: "What does a Taj Mahal ticket cost for foreign visitors in 2026?",
    answer:
      "A foreign (non-SAARC) adult ticket is ₹1,300 — ₹1,100 for monument entry plus ₹200 for the mausoleum supplement that lets you step onto the marble platform and see the cenotaphs. SAARC and BIMSTEC passport holders pay ₹740, and Indian citizens ₹250. Children under 15 enter free but still need to be registered online for a zero-value QR code. Entry tickets are not included in our tour prices unless the tour page says so, and we tell you the exact amount before you book."
  },
  {
    question: "What are the Taj Mahal opening and closing times?",
    answer:
      "The Taj Mahal does not open at a fixed clock time. The Archaeological Survey of India opens it 30 minutes before sunrise and closes it 30 minutes before sunset, so the gate time moves through the year — roughly 6:35 AM in December and as early as 4:55 AM in June. Ticket counters open about an hour before sunrise. Your ticket is valid for a three-hour visit from the moment you enter; staying longer can attract an extra charge at the exit gate."
  },
  {
    question: "How early does the sunrise tour pick up from Delhi?",
    answer:
      "It depends on your travel month, because the monument opens 30 minutes before sunrise rather than at a set time. In winter that means a pickup around 3:00 AM; in summer, closer to 1:30 AM — which is why we usually suggest the overnight version between May and July. We time the pickup so you reach the East Gate about 20 minutes before the gate opens, because security screening is the real bottleneck and that queue position is the whole point of the sunrise tour."
  },
  {
    question: "What is the best time of day for Taj Mahal photography?",
    answer:
      "Sunrise gives the softest light, the fewest people in frame and a chance at reflections in the watercourse. Sunset is warmer and more dramatic but far busier. Midday is the hardest — the marble goes flat and white in overhead sun. One winter caveat: January fog in Agra can hide the monument completely until about 10:00 AM."
  },
  {
    question: "Delhi to Agra — is the car or the Gatimaan Express better?",
    answer:
      "The Gatimaan Express (train 12050) leaves Hazrat Nizamuddin around 8:10 AM and reaches Agra Cantt around 9:50 AM — roughly 1 hour 40 minutes, with the return departing Agra around 5:50 PM. It is faster and more comfortable, but locks you to fixed timings. A private car takes about 3 to 3.5 hours each way on the Yamuna Expressway, and lets you leave at 3:00 AM for sunrise, stop where you like, and stay as long as you want. For a same-day trip built around sunrise, the car wins; for a relaxed late-morning start, the train is excellent."
  },
  {
    question: "Do you book the monument entry tickets for us?",
    answer:
      "Yes, we handle the booking so you are not queuing at a counter. Note that the Taj Mahal is now digital-payment only at the gates — no cash — so having tickets arranged in advance saves real time. We confirm what is included and what you pay separately before you book, in writing."
  },
  {
    question: "Is a same-day Taj Mahal trip from Delhi too rushed?",
    answer:
      "It is a long day, but it works well when it is planned around sunrise rather than a late start. A typical day is a 3:00 AM pickup, sunrise at the Taj, breakfast, a guided visit to Agra Fort, lunch, and back in Delhi by early evening — around 12 hours door to door. If you would rather not do it in one push, the overnight version gives you sunrise and sunset in Agra without the pre-dawn drive."
  },
  {
    question: "What is your cancellation and refund policy?",
    answer:
      "You can cancel or change a confirmed booking up to 24 hours before the tour start time at no charge, subject to availability. Inside 24 hours, costs already committed to the driver or to monument tickets may apply. Nothing is charged at the time of booking — we confirm guide and vehicle availability first, then arrange payment."
  },
  {
    question: "Are your guides government-licensed, and can we see proof?",
    answer:
      "Yes. Our guides hold Ministry of Tourism regional guide licences, and you are welcome to ask to see the licence card at the start of your tour. An unlicensed guide cannot legally take you inside ASI monuments, which is why this matters more than it sounds."
  },
  {
    question: "Do you provide female heritage guides?",
    answer:
      "Yes. We work with a collective of professional female heritage guides who can be requested at the time of booking, subject to availability on your date. Many solo and family travellers prefer this, and there is no extra charge for it."
  },
  {
    question: "Is it safe for solo female travellers?",
    answer:
      "Yes, and it is a large part of who we host. You are with a licensed guide and a known driver for the whole day, pickup and drop are at your hotel door rather than a public meeting point, and you have a direct WhatsApp line to us throughout. Female guides are available on request. If you would like your itinerary and vehicle details shared with someone at home before the tour, just ask."
  },
  {
    question: "What vehicle will we get, and is it air-conditioned?",
    answer:
      "All tours use private air-conditioned vehicles with a professional chauffeur — a sedan for couples and small groups, an SUV or tempo traveller for larger parties. The vehicle stays with you for the whole day; you are never left waiting for a shared pickup."
  },
  {
    question: "What should I wear, and what is not allowed inside the Taj Mahal?",
    answer:
      "There is no strict dress code, but modest clothing covering shoulders and knees is respectful and more comfortable in the heat. Shoe covers are provided for the marble platform. Tripods, drones, large bags, food, cigarettes and any electronic items beyond a phone and camera are not allowed inside; your driver can hold anything you cannot carry in."
  },
  {
    question: "Can we see the Taj Mahal at night?",
    answer:
      "Night viewing runs on five nights per lunar cycle — the full moon night plus the two nights before and after — from 8:30 PM to 12:30 AM, in batches of 50 people for 30-minute slots. Tickets must be arranged at least 24 hours in advance, and it is not available on Fridays or during Ramadan. Tell us your dates and we will check whether they fall in a viewing window."
  },
  {
    question: "How do we pay, and is a deposit required?",
    answer:
      "We accept cash, UPI, bank transfer and card. No payment is taken through the website — we confirm availability for your dates first, then send payment details on WhatsApp. For most single-day tours no deposit is needed; multi-day tours with hotel bookings usually need a part payment to hold the rooms."
  },
  {
    question: "When is the best time of year to visit Agra and Rajasthan?",
    answer:
      "October to March is the comfortable season, with clear skies and pleasant days. December and January mornings can be foggy in Agra, which sometimes delays the sunrise view. April to June gets very hot — tours are still enjoyable if built around early mornings. July to September brings the monsoon, fewer crowds, lower prices and a green Rajasthan, with occasional rain to plan around."
  },
  {
    question: "Can you customise an itinerary or add Udaipur or a tiger safari?",
    answer:
      "Yes — most of our multi-day trips start as a standard route and get reshaped. Common additions are Udaipur, Ranthambore for a tiger safari, Varanasi, and Jodhpur or Jaisalmer for the desert forts. Send us your dates, rough budget and what you care about most, and we will build the route around that rather than fitting you into a fixed package."
  }
];
