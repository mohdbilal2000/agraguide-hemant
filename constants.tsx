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
