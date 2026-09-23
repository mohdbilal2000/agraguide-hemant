import { Guide, GuideTopic } from './types';

/**
 * Groups shown on /guides, in display order. Every guide carries a `topic`
 * matching one of these ids.
 *
 * Grouping rather than paginating is deliberate: a "load more" button hides
 * the remaining links behind JavaScript, and this index exists to pass link
 * equity to every guide. Each card stays in the HTML however long the list
 * grows.
 */
export const GUIDE_TOPICS: { id: GuideTopic; label: string; blurb: string }[] = [
  {
    id: 'delhi',
    label: 'Delhi',
    blurb:
      'Planning a day, working out the transport, and the honest answer on safety — from guides who work the city every week.'
  },
  {
    id: 'agra',
    label: 'Agra & the Taj Mahal',
    blurb:
      'Gate times that move through the year, the Friday closure, and every way of covering the road between Delhi and Agra.'
  }
];

/**
 * Evergreen reference content served at /guides.
 *
 * Facts here are time-sensitive. Each guide carries an `updated` date that is
 * shown to readers and emitted in schema — when you revise a figure, move the
 * date. Monument timings and fees are set by the Archaeological Survey of
 * India and change without much notice; the official source is
 * tajmahal.gov.in.
 */

export const GUIDES: Guide[] = [
  // ───────────────────────────────────────────────────────────────────────
  {
    slug: 'taj-mahal-sunrise',
    topic: 'agra',
    metaTitle: 'Taj Mahal Sunrise: What Time to Arrive, Which Gate, What to Expect',
    metaDescription:
      'The Taj Mahal opens 30 minutes before sunrise, so the gate time moves through the year. Month-by-month arrival times, which gate to use, and what the first hour is actually like.',
    h1: 'Taj Mahal at Sunrise: Timing, Gates and What Actually Happens',
    cardTitle: 'Taj Mahal Sunrise Guide',
    cardSummary:
      'The gate time changes every month. Here is when to arrive, which gate to choose, and an honest account of the first hour.',
    image: '/taj-mahal-dawn.webp',
    updated: '2026-09-16',
    intro: [
      'The Taj Mahal does not open at a fixed clock time. It opens roughly 30 minutes before sunrise and closes 30 minutes before sunset, which means the gate time shifts by almost two hours between June and December. Most guides quoting a flat "6 AM" are wrong for half the year.',
      'That single fact drives everything else — when to leave Delhi, which gate to use, and whether a sunrise visit in your travel month is even worth the alarm clock. This page covers all three.'
    ],
    sections: [
      {
        heading: 'What time does the Taj Mahal actually open?',
        id: 'opening-time',
        body: [
          'The Archaeological Survey of India sets opening at 30 minutes before sunrise. Ticket counters at the East and West gates open an hour before sunrise. Because sunrise in Agra moves from about 5:20 AM in late June to about 7:10 AM in late December, so does everything else.',
          'The table below is approximate — sunrise shifts a few minutes each week, and you should check your exact date. Treat it as a planning guide, not a timetable.'
        ],
        table: {
          caption: 'Approximate Agra sunrise and gate-opening times by month',
          headers: ['Month', 'Sunrise (approx.)', 'Gate opens (approx.)', 'Be in the queue by'],
          rows: [
            ['January', '7:10 AM', '6:40 AM', '6:20 AM'],
            ['February', '7:00 AM', '6:30 AM', '6:10 AM'],
            ['March', '6:30 AM', '6:00 AM', '5:40 AM'],
            ['April', '6:05 AM', '5:35 AM', '5:15 AM'],
            ['May', '5:40 AM', '5:10 AM', '4:50 AM'],
            ['June', '5:25 AM', '4:55 AM', '4:35 AM'],
            ['July', '5:35 AM', '5:05 AM', '4:45 AM'],
            ['August', '5:50 AM', '5:20 AM', '5:00 AM'],
            ['September', '6:10 AM', '5:40 AM', '5:20 AM'],
            ['October', '6:25 AM', '5:55 AM', '5:35 AM'],
            ['November', '6:45 AM', '6:15 AM', '5:55 AM'],
            ['December', '7:05 AM', '6:35 AM', '6:15 AM']
          ]
        },
        callout: {
          title: 'The 20 minutes that decide your morning',
          text: 'Security screening is the bottleneck, not the ticket counter. Being twenty minutes ahead of the gate opening usually puts you in the first group through — which is the difference between a clear forecourt and two hundred people in your photographs.'
        }
      },
      {
        heading: 'East Gate or West Gate?',
        id: 'which-gate',
        body: [
          'There are three entrances. The South Gate no longer sells tickets and is used mainly as an exit. That leaves a real choice between East and West.',
          'The East Gate is the quieter of the two at dawn and is the side most Delhi arrivals use. The West Gate sits closer to Agra\'s old city and Taj Ganj, so it draws more of the local hotel traffic and more coach groups. Neither gets you inside faster once you are through screening — both funnel into the same forecourt — but the queue at East is usually shorter before opening.',
          'One practical note: the walk from the ticket counter to the actual entrance at the East Gate is about a kilometre. Battery buses cover it, but in the dark, with a queue forming, it is worth allowing the extra ten minutes rather than assuming a short stroll.'
        ]
      },
      {
        heading: 'Leaving from Delhi: the honest arithmetic',
        id: 'from-delhi',
        body: [
          'Delhi to Agra on the Yamuna Expressway takes three to three and a half hours in light traffic. Before dawn the road is genuinely clear, which is the one advantage of the pre-dawn start.',
          'Working backwards from the table above: a December sunrise visit means leaving a Delhi hotel around 3:00 AM. A June visit means leaving around 1:30 AM — which is why we rarely recommend a [Delhi-based sunrise trip](/plans/sunrise-taj-tour) in high summer. In those months an [overnight in Agra](/plans/overnight-taj-tour) makes far more sense than a night without sleep.',
          'The Gatimaan Express cannot do sunrise. It leaves Hazrat Nizamuddin at 8:10 AM and reaches Agra at 9:50 AM, well after the light has gone flat. The train is an excellent way to see the Taj Mahal — just not at dawn.'
        ]
      },
      {
        heading: 'What the first hour is actually like',
        id: 'first-hour',
        body: [
          'The marble does not turn pink on cue. What happens is subtler and, honestly, better: for about twenty minutes the dome shifts through grey, then a soft apricot, then white, and the change is fast enough that you notice it happening.',
          'The forecourt in front of the main gateway fills first, because everyone stops at the classic framed view. If you walk straight through and turn right along the watercourse, you will usually have two or three minutes of near-empty foreground before the crowd catches up.',
          'By around forty minutes after opening the central path is busy. By ninety minutes it is shoulder to shoulder in front of the platform. The mausoleum interior — the part your ₹200 supplement pays for — is coolest and quietest in that first hour, and stifling by mid-morning.'
        ],
        list: [
          'Shoe covers are handed out at the platform steps; you do not need to buy your own',
          'Photography is permitted in the gardens and forecourt, not inside the mausoleum chamber',
          'Tripods and drones are not allowed through security',
          'Your ticket is valid for three hours from entry — ample for sunrise, and worth knowing if you plan to linger'
        ]
      },
      {
        heading: 'When sunrise is not worth it',
        id: 'when-to-skip',
        body: [
          'December and January mornings in Agra carry real fog risk. On a bad morning the monument is invisible until nine or ten o\'clock, and a 3:00 AM departure buys you a view of white mist. There is no way to know the night before with any confidence.',
          'If your travel dates fall in deep winter and you only have one shot, a mid-morning visit is the safer bet. If you have two days, go at sunrise and keep the following morning in reserve.',
          'In May and June the heat argues the other way: sunrise is the only comfortable time to be there at all, but the departure time from Delhi becomes punishing. An [overnight in Agra](/plans/overnight-taj-tour) solves it.'
        ]
      }
    ],
    faqs: [
      {
        question: 'Is the Taj Mahal open at sunrise every day?',
        answer:
          'Every day except Friday, when the monument is closed for congregational prayers at the mosque inside the complex. There are no exceptions, including public holidays.'
      },
      {
        question: 'Can I buy sunrise tickets at the gate?',
        answer:
          'Yes, counters open about an hour before sunrise — but the gates are digital-payment only, so carry a card or a working UPI app rather than cash. Booking ahead removes the queue entirely, which matters more at dawn than at any other hour.'
      },
      {
        question: 'How long should I allow for a sunrise visit?',
        answer:
          'Ninety minutes inside is comfortable for the gardens, the platform and the mausoleum interior. Your ticket allows three hours. Add thirty minutes either side for parking, screening and the walk from the gate.'
      },
      {
        question: 'Is sunrise better than sunset at the Taj Mahal?',
        answer:
          'For photographs and for crowds, yes. Sunrise gives softer light, far fewer people and a chance of reflections in the still watercourse. Sunset is warmer and more dramatic but considerably busier, and the closing time is 30 minutes before sunset — so you never quite see the sun go down from inside.'
      }
    ],
    related: [
      {
        label: 'Sunrise Taj Mahal Private Tour',
        to: '/plans/sunrise-taj-tour',
        note: 'Pickup timed to your travel month, tickets pre-booked, and a licensed guide who knows where the light lands first.'
      },
      {
        label: 'Delhi Overnight Taj Mahal Tour',
        to: '/plans/overnight-taj-tour',
        note: 'The sensible option in summer and deep winter — sleep in Agra, walk to the gate, and keep a second morning in reserve if the fog rolls in.'
      }
    ],
    seeAlso: [
      { label: 'Delhi to Agra: every way to get there', to: '/guides/delhi-to-agra' },
      { label: 'Is the Taj Mahal closed on Friday?', to: '/guides/taj-mahal-friday-closed' }
    ]
  },

  // ───────────────────────────────────────────────────────────────────────
  {
    slug: 'delhi-to-agra',
    topic: 'agra',
    metaTitle: 'Delhi to Agra: Train, Car or Bus — Times, Costs and Which to Choose',
    metaDescription:
      'Delhi to Agra is about 230 km and three hours by road, or 100 minutes on the Gatimaan Express. A straight comparison of every option, including the return journey most guides forget.',
    h1: 'Delhi to Agra: Every Way to Get There, Compared',
    cardTitle: 'Delhi to Agra Travel Guide',
    cardSummary:
      'Train, private car, bus and self-drive — with real timings, honest costs, and the return-leg problem nobody mentions.',
    image: '/chai-stop-with-driver.webp',
    updated: '2026-09-16',
    intro: [
      'Agra sits about 230 km south of Delhi. The Yamuna Expressway covers it in three to three and a half hours by road; the Gatimaan Express does it in one hour forty. Both are good options, and which one suits you depends almost entirely on what time you want to be standing in front of the Taj Mahal.',
      'The part that catches people out is not the outbound journey. It is the return.'
    ],
    sections: [
      {
        heading: 'The options at a glance',
        id: 'at-a-glance',
        table: {
          caption: 'Delhi to Agra — journey comparison',
          headers: ['Option', 'Journey time', 'Departure control', 'Sunrise possible?', 'Best for'],
          rows: [
            ['Private car', '3–3.5 hrs', 'Any time you like', 'Yes', 'Sunrise visits, families, door-to-door'],
            ['Gatimaan Express', '1 hr 40 min', 'Fixed: 8:10 AM out', 'No', 'Comfort, speed, a relaxed late start'],
            ['Other trains', '2–4 hrs', 'Several daily', 'Some', 'Budget travel, flexible timing'],
            ['Bus', '4–6 hrs', 'Frequent', 'No', 'Lowest cost, no fixed schedule needed'],
            ['Self-drive', '3–3.5 hrs', 'Any time', 'Yes', 'Confident drivers only — see below']
          ]
        }
      },
      {
        heading: 'The Gatimaan Express',
        id: 'gatimaan',
        body: [
          'India\'s fastest train runs as 12050 out of Hazrat Nizamuddin at 8:10 AM, reaching Agra Cantt at about 9:50 AM. The return, 12049, leaves Agra at roughly 5:50 PM and is back in Delhi by about 7:30 PM. It does not run every day of the week, so check your date before building a plan around it.',
          'Two seating classes: Chair Car and Executive Chair Car, both air-conditioned with a meal served. Fares vary with demand, and seats on popular dates sell out two to four weeks ahead.',
          'What the train gives you is a genuinely comfortable ninety minutes instead of three hours in traffic, and no dependence on road conditions. What it takes away is control: you arrive at 9:50 AM whether or not that is when you wanted to be at the monument, and you must be back at Agra Cantt by early evening.'
        ],
        callout: {
          title: 'The return-leg problem',
          text: 'The 5:50 PM return sounds generous until you map it against a full day. Taj Mahal, Agra Fort and lunch fit comfortably. Add Fatehpur Sikri — 40 km west of Agra — and you will be watching the clock all afternoon. If Fatehpur Sikri matters to you, take the car.'
        }
      },
      {
        heading: 'By private car',
        id: 'by-car',
        body: [
          'The Yamuna Expressway is a good road: six lanes, tolled, and genuinely fast outside of peak Delhi traffic. Three hours is realistic; three and a half is honest if you are leaving mid-morning from central Delhi.',
          'The advantage is not speed — it is that you choose the departure time. A 3:00 AM start for sunrise is only possible by road. So is stopping where you like, staying at the monument as long as you want, and being collected from the exit rather than finding your way back to a station.',
          'Costs to expect beyond the vehicle itself: expressway tolls in both directions, parking at the monument, and driver allowance on a long day. A reputable operator includes all of these in the quoted price — ask directly, because the ones who do not will present them at the end of the day.'
        ]
      },
      {
        heading: 'Other trains, and the bus',
        id: 'other-options',
        body: [
          'Beyond the Gatimaan, several Shatabdi and Vande Bharat services run the route, along with slower expresses. Journey times range from about two hours to four. They are cheaper, more frequent and less predictable in terms of punctuality.',
          'Buses run frequently from Delhi\'s ISBT terminals and from private operators, taking four to six hours depending on traffic and stops. It is the cheapest way to reach Agra, and a reasonable choice if the journey itself is not part of what you are paying for. It is not a sensible base for a same-day return trip.'
        ]
      },
      {
        heading: 'A word on self-driving',
        id: 'self-drive',
        body: [
          'Self-drive rentals exist and the expressway itself is straightforward. Delhi and Agra city traffic are not. Lane discipline, unlit vehicles at night and unfamiliar junction behaviour make the last few kilometres at either end harder than the 200 km in between.',
          'If you are an experienced driver in India, it is fine. If your driving experience is European or North American, the honest recommendation is a car with a driver — it usually costs less than the rental plus fuel plus tolls, and you arrive unfrazzled.'
        ]
      },
      {
        heading: 'Which should you choose?',
        id: 'recommendation',
        list: [
          'Want sunrise at the Taj Mahal — private car, no alternative',
          'Want a comfortable, relaxed day with a 10 AM start — Gatimaan Express',
          'Want Taj Mahal plus Fatehpur Sikri in one day — private car',
          'Travelling with young children or elderly parents — private car, for the door-to-door',
          'Budget is the deciding factor — a slower train, or the bus',
          'Two days in Agra rather than one — either; the train is pleasanter if you are not chasing sunrise'
        ]
      }
    ],
    faqs: [
      {
        question: 'How far is Agra from Delhi?',
        answer:
          'About 230 km by the Yamuna Expressway. Road journey time is three to three and a half hours each way in normal conditions.'
      },
      {
        question: 'Can I do Delhi to Agra and back in one day?',
        answer:
          'Yes, and thousands of people do. [By car](/plans/same-day-taj-car) it is roughly a twelve-hour day door to door; [by Gatimaan Express](/plans/same-day-taj-train), closer to eleven. It is a long day either way, but a well-planned one is not a rushed one — the driving happens while you would otherwise be asleep or tired.'
      },
      {
        question: 'What time does the Gatimaan Express leave Delhi?',
        answer:
          'Train 12050 departs Hazrat Nizamuddin at about 8:10 AM and arrives at Agra Cantt around 9:50 AM. The return service, 12049, leaves Agra at roughly 5:50 PM. It does not run daily — confirm your travel date before booking around it.'
      },
      {
        question: 'Is the Yamuna Expressway safe at night?',
        answer:
          'It is well surfaced and well used, and pre-dawn departures for sunrise trips are routine. The risks are the ordinary ones of night driving in India — unlit slow vehicles, and fatigue. With a professional driver who does the route regularly, it is a normal working journey.'
      }
    ],
    related: [
      {
        label: 'Same Day Taj Mahal Tour by Car',
        to: '/plans/same-day-taj-car',
        note: 'Private air-conditioned car with driver, door to door from your Delhi hotel, with tolls and parking included.'
      },
      {
        label: 'Same Day Taj Mahal Tour by Express Train',
        to: '/plans/same-day-taj-train',
        note: 'Gatimaan Express both ways, with a licensed guide and a private vehicle waiting at Agra Cantt.'
      },
      {
        label: 'Delhi Overnight Taj Mahal Tour',
        to: '/plans/overnight-taj-tour',
        note: 'If a twelve-hour day sounds like too much — sunrise and sunset in Agra, with a night in between.'
      }
    ],
    seeAlso: [
      { label: 'Taj Mahal at sunrise: timing and gates', to: '/guides/taj-mahal-sunrise' },
      { label: 'Is the Taj Mahal closed on Friday?', to: '/guides/taj-mahal-friday-closed' },
      { label: 'Delhi itinerary: 1, 2 or 3 days', to: '/guides/delhi-itinerary-1-2-3-days' }
    ]
  },

  // ───────────────────────────────────────────────────────────────────────
  {
    slug: 'taj-mahal-friday-closed',
    topic: 'agra',
    metaTitle: 'Is the Taj Mahal Closed on Friday? Yes — Here Is What to Do Instead',
    metaDescription:
      'The Taj Mahal is closed every Friday for prayers, with no exceptions. What is still open in Agra that day, and how to reshuffle a one- or two-day itinerary around it.',
    h1: 'Is the Taj Mahal Closed on Friday?',
    cardTitle: 'Taj Mahal on Fridays',
    cardSummary:
      'Yes, every Friday, no exceptions. Here is what is still worth doing in Agra that day — including the view most visitors never see.',
    image: '/taj-mahal-reflection.webp',
    updated: '2026-09-16',
    intro: [
      'Yes. The Taj Mahal is closed to visitors every Friday, without exception, including public holidays and peak season. The mosque inside the complex holds congregational prayers that day and the monument is not open for general viewing.',
      'If Friday is the only day your itinerary allows in Agra, you have two options: move the day, or spend it on the rest of Agra — which is more rewarding than most people expect.'
    ],
    sections: [
      {
        heading: 'Why it closes',
        id: 'why',
        body: [
          'The Taj Mahal complex contains a working mosque on its western side. Friday is the day of congregational prayer, and the complex is reserved for worshippers rather than ticketed visitors.',
          'This is not a seasonal arrangement or a rule that flexes for busy periods. It has been in place for years and applies every Friday of the year. Any operator offering you a Friday Taj Mahal visit is either mistaken or selling you something they cannot deliver.'
        ]
      },
      {
        heading: 'What is open in Agra on a Friday',
        id: 'what-is-open',
        body: [
          'Agra has three UNESCO World Heritage sites. Only one of them closes on Friday.'
        ],
        table: {
          headers: ['Site', 'Open on Friday?', 'Time to allow'],
          rows: [
            ['Taj Mahal', 'No', '—'],
            ['Agra Fort', 'Yes', '2 hours'],
            ['Fatehpur Sikri', 'Yes', '2–3 hours'],
            ['Mehtab Bagh', 'Yes', '45 minutes'],
            ['Itimad-ud-Daulah (Baby Taj)', 'Yes', '1 hour'],
            ['Akbar\'s Tomb, Sikandra', 'Yes', '1 hour']
          ]
        },
        callout: {
          title: 'The view almost nobody plans for',
          text: 'Mehtab Bagh sits directly across the Yamuna from the Taj Mahal, on axis with the dome. You cannot enter the monument on a Friday, but you can stand in a Mughal garden and look straight at it across the river — and at sunset, with the marble catching the last light and almost no one around, it is arguably the better photograph.'
        }
      },
      {
        heading: 'Fatehpur Sikri: the strongest Friday option',
        id: 'fatehpur-sikri',
        body: [
          'Forty kilometres west of Agra stands a complete Mughal capital, built by Akbar in the 1570s and abandoned within about fifteen years. Red sandstone courtyards, the Diwan-i-Khas with its extraordinary central pillar, Panch Mahal, and the Buland Darwaza — at 54 metres, one of the tallest gateways in the world.',
          'It is open on Fridays. It takes about ninety minutes to reach from Agra city, and two to three hours to see properly. Paired with Agra Fort in the morning, it makes a full and genuinely excellent day that does not feel like a consolation prize.',
          'One practical note: the Jama Masjid within the Fatehpur Sikri complex is also an active mosque, and Friday prayers take place there too. The palace complex remains open; expect the mosque courtyard to be busy around midday.'
        ]
      },
      {
        heading: 'How to reshuffle your itinerary',
        id: 'reshuffle',
        body: [
          'If you have two days in Agra and one is a Friday, the fix is simple: do Agra Fort, Fatehpur Sikri and Mehtab Bagh on the Friday, and keep the Taj Mahal for the Saturday sunrise. This is a better sequence than the usual one anyway — you arrive at the Taj having already understood the Mughal architecture that leads up to it.',
          'If you have only one day and it is a Friday, you have a decision to make. Moving the day by twenty-four hours is almost always worth it. If that is genuinely impossible, spend the day on the other two World Heritage sites and see the Taj from Mehtab Bagh at sunset — it is a real experience, not a substitute one.',
          'If you are on a Golden Triangle circuit, the fix is usually to swap the Agra and Jaipur legs rather than to lose a day.'
        ]
      }
    ],
    faqs: [
      {
        question: 'Is the Taj Mahal ever open on a Friday?',
        answer:
          'No. The closure applies every Friday of the year, including during peak tourist season and on public holidays that fall on a Friday.'
      },
      {
        question: 'Is Agra Fort open on Friday?',
        answer:
          'Yes. Agra Fort, Fatehpur Sikri, Mehtab Bagh, Itimad-ud-Daulah and Akbar\'s Tomb are all open on Fridays. Only the Taj Mahal closes.'
      },
      {
        question: 'Can I see the Taj Mahal from outside on a Friday?',
        answer:
          'Yes. Mehtab Bagh, the Mughal garden directly across the Yamuna, gives an unobstructed view of the mausoleum on axis with the dome. It is open on Fridays and is at its best in the hour before sunset.'
      },
      {
        question: 'Does Taj Mahal night viewing run on Fridays?',
        answer:
          'No. Night viewing is available on five nights per lunar cycle — the full moon and the two nights either side — but not on Fridays, and not during Ramadan.'
      }
    ],
    related: [
      {
        label: 'Agra & Fatehpur Sikri Heritage Tour',
        to: '/plans/agra-fatehpur-sikri',
        note: 'Built for exactly this problem: Agra Fort and Fatehpur Sikri on one day, the Taj Mahal at sunrise on the next.'
      },
      {
        label: 'Delhi Overnight Taj Mahal Tour',
        to: '/plans/overnight-taj-tour',
        note: 'Two days in Agra gives you the flexibility to work around a Friday without losing the monument.'
      }
    ],
    seeAlso: [
      { label: 'Taj Mahal at sunrise: timing and gates', to: '/guides/taj-mahal-sunrise' },
      { label: 'Delhi to Agra: every way to get there', to: '/guides/delhi-to-agra' }
    ]
  },

  // ───────────────────────────────────────────────────────────────────────
  {
    slug: 'is-delhi-safe-for-tourists',
    topic: 'delhi',
    metaTitle: 'Is Delhi Safe for Tourists? An Honest Answer from Local Guides',
    metaDescription:
      'Delhi is safe for most visitors who take ordinary precautions — but the honest answer has detail in it. What actually goes wrong, what does not, and what solo women should know.',
    h1: 'Is Delhi Safe for Tourists?',
    cardTitle: 'Is Delhi Safe for Tourists?',
    cardSummary:
      'The honest version — what actually goes wrong in Delhi, what is exaggerated, and what solo female travellers should plan for.',
    image: '/india-gate-group.webp',
    updated: '2026-09-17',
    intro: [
      'Mostly, yes. Millions of foreign visitors come through Delhi every year and the overwhelming majority have an ordinary, uneventful trip. The real risks are not the ones most people worry about — violent crime against tourists is rare. What is common is being overcharged, misdirected, or steered towards a shop that pays commission.',
      'That said, "it is safe" is a lazy answer, and so is "it is dangerous". Below is what actually tends to go wrong, what solo women should plan for, and what we do differently on our own tours. We run these streets every week, and we would rather you arrive prepared than reassured.'
    ],
    sections: [
      {
        heading: 'What actually goes wrong',
        id: 'what-goes-wrong',
        body: [
          'Almost every bad story that comes out of Delhi is a commercial one, not a violent one. It follows a pattern, and the pattern is worth knowing because it is easy to spot once you have seen it written down.'
        ],
        list: [
          'The taxi that says your hotel is "closed", "burnt down" or "full", and offers to take you to a better one — where he earns a commission',
          'The helpful stranger outside a monument who says the entrance is elsewhere, and walks you towards a travel agency',
          'The auto-rickshaw that will not use the meter, then quotes four times the fare at the end of the ride',
          'The "government tourist office" near Connaught Place that is nothing of the sort',
          'The shopping stop your driver insists on, where prices are doubled and he takes a cut'
        ],
        callout: {
          title: 'The one rule that prevents most of it',
          text: 'Never let a stranger redirect a plan you already made. If someone tells you your hotel is closed, your monument is shut, or your route has changed, assume it is untrue until you have checked it yourself. Every version of this scam depends on you changing your plan on someone else\'s word.'
        }
      },
      {
        heading: 'Solo female travellers',
        id: 'solo-women',
        body: [
          'This deserves a straight answer rather than a reassuring one. Delhi has a poor reputation on women\'s safety, and it is not entirely undeserved — staring is common, and crowded public transport can be uncomfortable. Most solo women who visit have no serious problem, but "most" is doing real work in that sentence and it would be dishonest to pretend otherwise.',
          'What changes the experience is structure: knowing where you are going, having transport you did not arrange on the street, and not being alone in unfamiliar areas after dark. None of that requires being fearful. It requires planning the parts that are easy to plan.'
        ],
        list: [
          'The Delhi Metro has a women-only carriage at the front of every train — it is well used and worth using at busy hours',
          'Use a booked cab (app or hotel) rather than flagging one down, particularly at night',
          'Dress is not about rules — shoulders and knees covered simply attracts less attention, which is the practical point',
          'Trust the instinct to leave a situation. You owe no one a polite exit',
          'Share your day\'s plan with someone — a hotel, a friend at home, or your guide'
        ]
      },
      {
        heading: 'Areas, and times of day',
        id: 'areas',
        body: [
          'Delhi is not one place. Central Delhi around India Gate, Lodhi Road and Khan Market is calm and green. Old Delhi around Chandni Chowk is dense, loud and completely absorbing — and entirely fine in daylight, though it is easy to get lost and hard to move quickly.',
          'Paharganj, the backpacker area near New Delhi railway station, is where most touts operate. It is not dangerous so much as relentless. If your hotel is there, that is fine, but expect to be approached constantly.',
          'After dark, the calculation changes in the way it does in any large city: stay in well-lit, busy areas, and take a booked cab rather than walking unfamiliar routes. Delhi at night is not a no-go zone — Connaught Place, Khan Market and Hauz Khas are busy and normal well into the evening.'
        ]
      },
      {
        heading: 'Food and water',
        id: 'food-water',
        body: [
          'The stomach is the thing most likely to interrupt your trip, not crime. Tap water is not drinkable — use sealed bottles, and check the seal. Ice in smaller places is worth avoiding.',
          'Street food is not the enemy. A busy stall with high turnover, cooking in front of you, is usually safer than a quiet restaurant with a fridge you cannot see. The rule is freshly cooked and hot, eaten where locals are eating.',
          'If your stomach is unaccustomed to Indian food, give it a couple of days before the ambitious eating. Carry oral rehydration salts; they are cheap at any pharmacy and make a bad day considerably shorter.'
        ]
      },
      {
        heading: 'Air quality — the real seasonal risk',
        id: 'air-quality',
        body: [
          'This is the health issue most visitors underestimate, and unlike everything else on this page it is seasonal and measurable. Delhi\'s air is at its worst from late October through January, when crop burning, cooler air and winter smog combine. Readings during that period are regularly in the unhealthy range.',
          'For most healthy adults on a short visit it means irritated eyes and a cough. For anyone with asthma or a respiratory condition, or travelling with young children or elderly parents, it is worth taking seriously — check the current AQI before you travel, carry an N95 mask, and plan indoor mornings on the worst days.',
          'February to April and September to early October are considerably better, and pleasant to walk in.'
        ]
      },
      {
        heading: 'What we do about it',
        id: 'how-we-work',
        body: [
          'Most of the risks above come from the gaps — the walk from the station, the taxi you did not arrange, the stranger at the gate. A guided day removes the gaps rather than the city.',
          'On [our tours](/plans) you are with a Ministry of Tourism licensed guide and a driver we work with regularly, for the whole day. Pickup and drop are at your hotel door, not a public meeting point. You have a direct WhatsApp line to us throughout, and [female guides can be requested](/guide-booking) at booking with no extra charge.',
          'We do not run commission shopping stops. If you want to shop, tell us and we will take you somewhere good — but it will not appear in your itinerary uninvited.',
          'If you would like your itinerary, vehicle number and guide details shared with someone at home before the tour, ask. We do this often and think more people should.'
        ]
      }
    ],
    faqs: [
      {
        question: 'Is Delhi safe for solo female travellers?',
        answer:
          'For most visitors, yes, with ordinary precautions — booked transport rather than street-hailed, the women-only Metro carriage at busy hours, and avoiding unfamiliar areas alone after dark. Staring is common and can be wearing; serious incidents involving foreign visitors are rare. Travelling with a guide removes most of the situations where problems start.'
      },
      {
        question: 'Is it safe to eat street food in Delhi?',
        answer:
          'Generally yes, if you choose well. Busy stalls with fast turnover, cooked fresh in front of you, are the safest bet. Avoid anything sitting out, raw salads washed in tap water, and ice in smaller places. Drink only sealed bottled water.'
      },
      {
        question: 'What is the most common scam in Delhi?',
        answer:
          'Being told your hotel is closed, full or burnt down, and being taken to a different one that pays commission. The variants all work the same way — a stranger changes a plan you already had. Verify anything like this yourself before acting on it.'
      },
      {
        question: 'When is Delhi air pollution at its worst?',
        answer:
          'Late October through January, with November usually the worst month. If you have a respiratory condition or are travelling with children or older parents, check the AQI before booking those dates and carry an N95 mask.'
      },
      {
        question: 'Is the Delhi Metro safe for tourists?',
        answer:
          'Yes. It is clean, cheap, air-conditioned and heavily used by locals and visitors alike, with security screening at every station. The front carriage of each train is reserved for women. It is crowded at rush hour, which is a comfort issue rather than a safety one.'
      }
    ],
    related: [
      {
        label: 'Delhi Unveiled: Private Full Day Heritage Tour',
        to: '/plans/delhi-full-day-heritage',
        note: 'A licensed guide and a known driver for the whole day, hotel door to hotel door — the version of Delhi this guide describes as the easy one.'
      },
      {
        label: 'Hire a Licensed Delhi Guide',
        to: '/guide-booking',
        note: 'Guide-only or guide with a car, female guides available on request at no extra charge.'
      }
    ],
    seeAlso: [
      { label: 'Delhi airport layover: can you leave?', to: '/guides/delhi-airport-layover' },
      { label: 'Getting around Delhi: metro, taxi or car', to: '/guides/getting-around-delhi' },
      { label: 'Delhi itinerary: 1, 2 or 3 days', to: '/guides/delhi-itinerary-1-2-3-days' },
      { label: 'Delhi to Agra: every way to get there', to: '/guides/delhi-to-agra' }
    ]
  },

  // ───────────────────────────────────────────────────────────────────────
  {
    slug: 'getting-around-delhi',
    topic: 'delhi',
    metaTitle: 'Getting Around Delhi: Metro, Taxi, Auto or Private Car',
    metaDescription:
      'Delhi is large and the right transport changes by time of day. Metro, app cabs, autos and private cars compared — costs, when each works, and what to avoid.',
    h1: 'Getting Around Delhi: Metro, Taxi, Auto or Car',
    cardTitle: 'Getting Around Delhi',
    cardSummary:
      'The Metro is excellent and the traffic is not. When to use which, what things cost, and the mistakes that cost visitors time.',
    image: '/red-fort-delhi.webp',
    updated: '2026-09-17',
    intro: [
      'Delhi covers roughly 1,500 square kilometres, and the distance between two things you want to see is usually further than it looks on a map. Getting this right is the difference between seeing four monuments in a day and seeing two.',
      'The short version: the Metro is genuinely excellent and beats road transport at rush hour; app cabs are cheap and remove all negotiation; autos are useful for short hops if you agree the fare first; and a private car earns its cost on a day with several stops or in the heat.'
    ],
    sections: [
      {
        heading: 'The options, compared',
        id: 'compare',
        table: {
          caption: 'Delhi transport at a glance',
          headers: ['Option', 'Cost', 'Best for', 'Watch out for'],
          rows: [
            ['Metro', 'Very low', 'Rush hour, long distances, airport run', 'Crowds 8–10am and 5–8pm; not every monument is near a station'],
            ['App cab (Uber / Ola)', 'Low', 'Door to door, at night, with luggage', 'Surge pricing; drivers cancelling short trips'],
            ['Auto-rickshaw', 'Low', 'Short hops, last mile from a Metro station', 'Meters often refused — agree the fare before you sit'],
            ['Private car with driver', 'Higher', 'Full sightseeing days, families, summer heat', 'Unsolicited shopping stops with commission operators'],
            ['Walking', 'Free', 'Old Delhi lanes, Lodhi Garden, Khan Market', 'Distances between areas are much longer than they look']
          ]
        }
      },
      {
        heading: 'The Metro',
        id: 'metro',
        body: [
          'Delhi\'s Metro is one of the best in Asia — clean, air-conditioned, cheap and fast. Trains run roughly from early morning until about 11pm, and every station has security screening on entry, which takes a minute or two.',
          'Pay with a travel card or a QR ticket bought at the station or in the DMRC app. A card is worth it if you plan more than a couple of journeys.',
          'The Airport Express Line connects Terminal 3 with New Delhi railway station in about twenty minutes. At rush hour it comfortably beats a taxi, which can take an hour or more for the same journey.',
          'The front carriage of every train is reserved for women. Bulky luggage is allowed on the Airport Express but awkward on the regular lines during peak hours.'
        ],
        callout: {
          title: 'Where the Metro stops being the answer',
          text: 'Several of the places you have come to see — Humayun\'s Tomb, Lodhi Garden, parts of Old Delhi — are a further ten to twenty minutes from the nearest station. The Metro gets you across the city; something else gets you the last kilometre. Plan for both rather than assuming one covers the day.'
        }
      },
      {
        heading: 'App cabs and autos',
        id: 'cabs-autos',
        body: [
          'Uber and Ola both work across Delhi and are inexpensive by international standards. The advantage is not only price — it is that the fare is fixed in advance and there is nothing to negotiate. Both also offer auto-rickshaws in the app, which solves the meter problem entirely.',
          'Flagged-down autos are still useful for short distances. The meter is frequently refused; agree a price before getting in, and expect to be quoted high initially. A short hop across a neighbourhood should be modest — if the number sounds like a taxi fare, it is one.',
          'At the airport, use the official prepaid taxi counter or an app pickup from the designated zone. Do not accept an offer from someone approaching you in the arrivals hall.'
        ]
      },
      {
        heading: 'Private car with driver',
        id: 'private-car',
        body: [
          'For a sightseeing day this is usually the right answer, and not mainly for comfort. Delhi\'s monuments are spread across the city; with a car the vehicle waits while you go in, your bags stay with you, and you are not renegotiating transport five times a day in 40-degree heat.',
          'It matters more with children, with elderly parents, in May and June, and on any day where you want to see more than three places.',
          'One thing to settle before you start: shopping stops. Many drivers earn commission from emporiums and will build them into your day. A reputable operator does not. Say at the start that you do not want unplanned stops — and if you do want to shop, say that too, so it is on your terms.'
        ]
      },
      {
        heading: 'Traffic, and how to plan around it',
        id: 'traffic',
        body: [
          'Delhi traffic is heaviest roughly 8–10am and 5–8pm on weekdays. In those windows a journey can take three times as long as the map suggests, and the Metro will usually win outright.',
          'Old Delhi is its own case. Around Chandni Chowk, vehicles barely move and the lanes are too narrow for cars anyway. Arrive by Metro or drop at the edge and walk in — a cycle-rickshaw through the bazaar is slow, but it is also one of the better twenty minutes of a Delhi trip.',
          'Sunday morning is the quietest the city gets. If your itinerary has one day with a lot of ground to cover, make it that one.'
        ],
        list: [
          'Allow 45–60 minutes between areas during peak hours, not the 20 minutes the map shows',
          'Group sights by area rather than by interest — Old Delhi together, central Delhi together, south Delhi together',
          'Monument entry closes well before sunset; the last hour of the day is better spent somewhere open in the evening'
        ]
      }
    ],
    faqs: [
      {
        question: 'Is the Delhi Metro good for tourists?',
        answer:
          'Yes — it is cheap, air-conditioned, clean and far faster than road transport at rush hour. Buy a travel card or a QR ticket at the station. Bear in mind that several major monuments sit some distance from the nearest station, so you will often still need an auto or cab for the last stretch.'
      },
      {
        question: 'How do I get from Delhi airport to the city?',
        answer:
          'The Airport Express Metro reaches New Delhi station from Terminal 3 in about twenty minutes and is the fastest option at busy times. Otherwise use the official prepaid taxi counter or book an app cab from the designated pickup zone. Do not accept rides offered by people approaching you inside arrivals.'
      },
      {
        question: 'Should I use Uber or an auto-rickshaw in Delhi?',
        answer:
          'Uber and Ola remove the negotiation and fix the fare in advance, which makes them the simpler choice for most visitors. Autos are good for short hops and are cheaper — just agree the fare before getting in, since meters are frequently refused. Both apps also let you book an auto with a fixed fare.'
      },
      {
        question: 'Do I need a private car for a day of sightseeing in Delhi?',
        answer:
          'Not strictly, but it saves a great deal of time if you plan to see more than three places, and it matters in the summer heat or with children or older parents. The vehicle waits at each stop and your luggage stays with you, which the Metro and cabs cannot offer.'
      }
    ],
    related: [
      {
        label: 'Delhi Unveiled: Private Full Day Heritage Tour',
        to: '/plans/delhi-full-day-heritage',
        note: 'The day where the transport question stops mattering — one car, one driver, both halves of the city in the right order.'
      },
      {
        label: 'Delhi Half Day Private Tour',
        to: '/plans/delhi-half-day',
        note: 'Five hours with a car that waits for you, which is the whole argument against app cabs on a tight schedule.'
      }
    ],
    seeAlso: [
      { label: 'Delhi airport layover: can you leave?', to: '/guides/delhi-airport-layover' },
      { label: 'Delhi itinerary: 1, 2 or 3 days', to: '/guides/delhi-itinerary-1-2-3-days' },
      { label: 'Is Delhi safe for tourists?', to: '/guides/is-delhi-safe-for-tourists' },
      { label: 'Delhi to Agra: every way to get there', to: '/guides/delhi-to-agra' }
    ]
  },
  {
    slug: 'delhi-itinerary-1-2-3-days',
    topic: 'delhi',
    metaTitle: 'Delhi Itinerary: 1, 2 or 3 Days — Planned by Local Guides',
    metaDescription:
      'What actually fits in one, two or three days in Delhi — hour by hour, with the Monday closures that wreck most plans, real travel times between stops, and what to skip.',
    h1: 'Delhi Itinerary: 1, 2 or 3 Days',
    cardTitle: 'Delhi Itinerary: 1, 2 or 3 Days',
    cardSummary:
      'Hour-by-hour plans for one, two and three days, built around Delhi\'s real travel times — and the closure days that catch most visitors out.',
    image: '/humayuns-tomb-family.webp',
    updated: '2026-09-23',
    intro: [
      'One day in Delhi works if you give the morning to Old Delhi and the afternoon to New Delhi, and accept that you are seeing two neighbourhoods rather than a city. Two days lets each half breathe. Three days adds the things people wish they had time for — Mehrauli, a morning without a schedule, or a day trip to Agra.',
      'The constraint in Delhi is almost never the monuments. It is the distance between them. Two sites that look close on a map can be an hour apart at the wrong time of day, and every plan below is built around that rather than around a wish list.'
    ],
    sections: [
      {
        heading: 'How much of Delhi actually fits in a day',
        id: 'how-much',
        body: [
          'Delhi covers around 1,500 square kilometres and its sights are scattered across three clusters that are nowhere near each other. Old Delhi sits in the north, the colonial-era core and its museums in the centre, and Mehrauli — where Qutub Minar stands — well to the south. Moving between clusters costs you thirty to sixty minutes each time.',
          'A realistic day is one cluster in the morning and one in the afternoon, with three to four substantial stops in total. Plans that promise six or seven are counting the car window as a sight.'
        ],
        table: {
          caption: 'Delhi\'s three clusters and what sits in each',
          headers: ['Cluster', 'Main sights', 'Time needed', 'Best part of day'],
          rows: [
            ['Old Delhi (north)', 'Red Fort, Jama Masjid, Chandni Chowk, Spice Market', '3–4 hours', 'Morning — cooler, and the lanes wake up around 10am'],
            ['Central Delhi', 'India Gate, Rashtrapati Bhavan drive-past, Humayun\'s Tomb, Lodhi Garden, National Museum', '3–4 hours', 'Afternoon — wide roads move faster than Old Delhi lanes'],
            ['South Delhi / Mehrauli', 'Qutub Minar, Mehrauli Archaeological Park, Lotus Temple', '2–3 hours', 'Late afternoon — golden light on the sandstone'],
            ['East (across the Yamuna)', 'Akshardham', '2–3 hours', 'Afternoon, and never on a Monday']
          ]
        }
      },
      {
        heading: 'The closure days that wreck plans',
        id: 'closures',
        body: [
          'This is the single most common way a Delhi day goes wrong, and it is entirely avoidable. Several of the biggest sights close on the same day of the week, so an unlucky Monday can empty a whole itinerary at once.',
          'Friday has a narrower version of the same problem: Jama Masjid stays open, but closes to visitors during congregational prayers around midday, which is exactly when most one-day itineraries arrive there.'
        ],
        table: {
          caption: 'Weekly closures at Delhi\'s main sights',
          headers: ['Sight', 'Closed', 'Notes'],
          rows: [
            ['Red Fort', 'Mondays', 'Allow 1.5–2 hours; the son et lumière show runs some evenings'],
            ['Akshardham', 'Mondays', 'No phones, cameras or bags inside — cloakroom queues are the real wait'],
            ['Lotus Temple', 'Mondays', 'Free entry; queues are long on weekends'],
            ['National Museum', 'Mondays', 'Closed on public holidays too'],
            ['Jama Masjid', 'Open daily', 'Closed to visitors during midday prayers, and longest on Fridays'],
            ['Qutub Minar', 'Open daily', 'Sunrise to sunset, like most ASI monuments'],
            ['Humayun\'s Tomb', 'Open daily', 'Sunrise to sunset; best light in the last hour'],
            ['India Gate', 'Always open', 'Liveliest after dark, when families come out']
          ]
        },
        callout: {
          title: 'If your only full day in Delhi is a Monday',
          text: 'Build the day around the sights that stay open — Jama Masjid and Chandni Chowk in the morning, then Humayun\'s Tomb, Qutub Minar and Mehrauli Archaeological Park in the afternoon. It is a genuinely good day, and arguably a quieter one. What you cannot do is plan a Monday around Red Fort and Akshardham and improvise when you arrive.'
        }
      },
      {
        heading: 'One day in Delhi',
        id: 'one-day',
        body: [
          'One day means choosing depth over coverage. This plan gives the morning to Old Delhi while it is cool and the lanes are at their best, then crosses to the south for the afternoon. It deliberately leaves out Akshardham and the museums — there is no honest way to fit them.'
        ],
        table: {
          caption: 'One day, hour by hour',
          headers: ['Time', 'Where', 'Why this slot'],
          rows: [
            ['8:00–8:30', 'Arrive Old Delhi', 'Before the lanes fill and before the heat'],
            ['8:30–10:00', 'Jama Masjid, then the Chandni Chowk lanes on foot', 'Prayer times are clear, and shutters are just opening'],
            ['10:00–11:00', 'Spice Market (Khari Baoli) and a chai stop', 'The market is at its most active mid-morning'],
            ['11:00–13:00', 'Red Fort', 'Allow the full two hours — the complex is larger than it looks'],
            ['13:00–14:00', 'Lunch, then drive south', 'Eat before the cross-city drive, not after'],
            ['14:00–15:30', 'Humayun\'s Tomb', 'The blueprint for the Taj Mahal, and far quieter'],
            ['15:30–17:00', 'Qutub Minar and Mehrauli', 'Late light on red sandstone is the reason for this order'],
            ['17:30–18:30', 'India Gate on the way back', 'A drive-past is enough; it is better after dark anyway']
          ]
        },
        callout: {
          title: 'Why Old Delhi goes first',
          text: 'Two reasons, and both are practical. The lanes around Chandni Chowk are genuinely unpleasant in afternoon heat, and Old Delhi traffic is at its worst from late morning onward — arriving at 8am can save forty minutes over arriving at 11am. The order is not aesthetic. It buys you time.'
        }
      },
      {
        heading: 'Two days in Delhi',
        id: 'two-days',
        body: [
          'Two days is where Delhi stops feeling rushed. Day one becomes a proper Old Delhi morning instead of a march, and day two picks up everything a single day forces you to drop — Akshardham, the museums, and time to sit in Lodhi Garden without checking a watch.'
        ],
        list: [
          'Day 1, morning — Jama Masjid, Chandni Chowk on foot, the Spice Market, and a rickshaw through the lanes rather than a walk-through. Add breakfast at a Paranthe Wali Gali stall if you want the version locals recognise.',
          'Day 1, afternoon — Red Fort at a proper pace, then Raj Ghat on the way south if the traffic allows.',
          'Day 2, morning — Humayun\'s Tomb early, then Lodhi Garden and the Lodhi Art District next door. This is the calmest two hours in the city.',
          'Day 2, afternoon — Qutub Minar and Mehrauli Archaeological Park, which almost nobody visits despite sitting beside the Qutub complex.',
          'Day 2, evening — Akshardham, or India Gate and Connaught Place if you would rather end with people than with a monument.'
        ],
        callout: {
          title: 'The stop most two-day visitors miss',
          text: 'Mehrauli Archaeological Park sits directly beside Qutub Minar, is free, and contains around a hundred structures spread over centuries — tombs, a stepwell, a mosque built from temple columns. Most tour itineraries skip it because it has no ticket counter and no queue. That is exactly why it is worth an hour.'
        }
      },
      {
        heading: 'Three days in Delhi',
        id: 'three-days',
        body: [
          'By the third day you have a real choice: go deeper into Delhi, or use the day for Agra. Both work, and the right answer depends on how long you are in India overall.',
          'If Delhi is your only stop, spend day three on the parts of the city that reward slowness — a Nizamuddin evening, the Mughal ruins scattered through Hauz Khas and Tughlaqabad, or a morning food walk that is about eating rather than photographing.',
          'If you are moving on and Agra is not already on the plan, day three is the day for it. A [same-day return by car](/plans/same-day-taj-car) or by the Gatimaan Express is long but entirely doable, and covered in detail in our [Delhi to Agra guide](/guides/delhi-to-agra).'
        ],
        list: [
          'Option A — Delhi in depth: Nizamuddin Dargah on a Thursday evening for qawwali, Hauz Khas ruins at sunset, Tughlaqabad Fort for the version of Delhi almost no visitor sees.',
          'Option B — Old Delhi food walk: Karim\'s, Al Jawahar, the kebab lanes behind Jama Masjid, and Kuremal for kulfi. Best started around 5pm.',
          'Option C — Agra day trip: leave before dawn for the Taj Mahal at sunrise, add Agra Fort, and be back in Delhi by evening.',
          'Option D — Museums and the colonial core: National Museum, Gandhi Smriti, and the Rashtrapati Bhavan circuit. Not on a Monday.'
        ]
      },
      {
        heading: 'What to skip, honestly',
        id: 'skip',
        body: [
          'Every Delhi itinerary online lists the same fifteen places. Several of them are not worth the hour they cost on a short trip, and saying so is more useful than padding the list.'
        ],
        list: [
          'The "government emporium" stop — this is not a sight. It appears on cheap tour itineraries because the operator earns commission on what you buy. Any itinerary with a shopping stop built into a sightseeing day is telling you how it makes its money.',
          'Delhi Haat on a one-day trip — pleasant, but it is a craft market, and you did not come this far to spend an hour of a single day shopping.',
          'The Lotus Temple queue on a weekend — the building is beautiful from outside and the interior is a silent prayer hall with nothing to see. On a Saturday the queue can run past an hour. Photograph it from the garden and move on.',
          'Trying to add Agra to a one-day Delhi plan — it cannot be done well. You will spend eight hours in a car to rush two monuments.'
        ]
      },
      {
        heading: 'Tickets, costs and what is worth pre-booking',
        id: 'tickets',
        body: [
          'Most of Delhi\'s ticketed sights are run by the Archaeological Survey of India and share the same two-tier pricing, with a much lower rate for Indian citizens. Entry is digital-payment only at most gates, so arriving with cash alone is a problem.',
          'None of these need booking weeks ahead the way the Taj Mahal does, but buying online saves the counter queue, which at Red Fort on a weekend is the longest part of the visit.'
        ],
        table: {
          caption: 'Approximate entry costs — confirm before you travel, as ASI revises these',
          headers: ['Sight', 'Indian citizen', 'Foreign visitor', 'Worth pre-booking?'],
          rows: [
            ['Red Fort', '₹35', '₹600', 'Yes on weekends and holidays'],
            ['Qutub Minar', '₹35', '₹600', 'Not usually'],
            ['Humayun\'s Tomb', '₹35', '₹600', 'Not usually'],
            ['Jama Masjid', 'Free', 'Free', 'No — small camera and minaret fees paid on site'],
            ['Akshardham', 'Free entry', 'Free entry', 'No — exhibitions cost extra and are optional'],
            ['Lotus Temple', 'Free', 'Free', 'No'],
            ['India Gate', 'Free', 'Free', 'No']
          ]
        },
        callout: {
          title: 'The Akshardham queue nobody warns you about',
          text: 'Entry is free, but phones, cameras and bags are all banned inside, and everything goes into a cloakroom before airport-style security. On a busy afternoon that process alone can take forty-five minutes. Arrive with as little as you can carry, and budget the time — it is the one Delhi sight where the queue, not the visit, decides how long you are there.'
        }
      },
      {
        heading: 'Getting between the stops',
        id: 'transport',
        body: [
          'The Metro is excellent and beats road transport comfortably at rush hour, but several of the places in these plans — Humayun\'s Tomb, the Old Delhi lanes, Mehrauli — sit ten to twenty minutes beyond the nearest station. Most good Delhi days use the Metro for the long hops and something else for the last kilometre.',
          'On a one-day plan the maths changes. A [private car with a driver and a licensed guide](/guide-booking) earns its cost when you have four stops across three clusters and a fixed departure that evening, because the time you lose to app cabs cancelling and autos negotiating is time you do not have. On a three-day plan, the Metro and cabs are usually the better value.',
          'Whichever you choose, avoid crossing the city between 8–10am and 5–8pm if the plan allows it. Our guide to [getting around Delhi](/guides/getting-around-delhi) compares all the options with costs.'
        ]
      }
    ],
    faqs: [
      {
        question: 'Is one day enough for Delhi?',
        answer:
          'One day is enough to see Old Delhi properly and add two or three sights in the south, which is a genuinely good introduction to the city. It is not enough to cover Delhi comprehensively, and any itinerary promising seven or eight stops in a day is counting time in the car as sightseeing. If you only have one day, choose depth: a real Old Delhi morning beats a rushed tour of everything.'
      },
      {
        question: 'What is closed on Mondays in Delhi?',
        answer:
          'Red Fort, Akshardham, the Lotus Temple and the National Museum are all closed on Mondays, which is why a Monday catches out so many visitors at once. Qutub Minar, Humayun\'s Tomb, Jama Masjid and India Gate stay open, so a Monday itinerary built around those works well. Jama Masjid closes to visitors during midday prayers on any day, and for longest on Fridays.'
      },
      {
        question: 'Should I visit Old Delhi or New Delhi first?',
        answer:
          'Old Delhi first, and start early. The lanes around Chandni Chowk are far more pleasant before the heat and before traffic builds from late morning, and arriving at 8am rather than 11am can save you the better part of an hour. New Delhi\'s wider roads and larger sites handle an afternoon much better.'
      },
      {
        question: 'Can I do a Taj Mahal day trip from Delhi as part of a Delhi itinerary?',
        answer:
          'Yes, but treat it as its own day rather than something added to a Delhi day. A same-day return means leaving Delhi around 3am for sunrise at the Taj, and being back in the evening — around twelve hours door to door. It works well as day three of a three-day plan. It does not work squeezed into a single day that also covers Delhi.'
      },
      {
        question: 'Do I need a guide for Delhi, or can I do it alone?',
        answer:
          'Delhi is very doable independently, particularly if you are comfortable with the Metro and app cabs. A [licensed guide](/guide-booking) earns their cost in two situations: in Old Delhi, where the lanes are genuinely confusing and the history is invisible without someone to point it out, and on a single-day plan where losing forty minutes to logistics costs you a monument. Guides working inside ASI monuments must hold a Ministry of Tourism licence — ask to see the card.'
      }
    ],
    related: [
      {
        label: 'Delhi Unveiled: Private Full Day Heritage Tour',
        to: '/plans/delhi-full-day-heritage',
        note: 'The one-day plan above, run for you — Old Delhi in the morning, the Mughal tombs in the afternoon, and the order sorted out already.'
      },
      {
        label: 'Delhi Half Day Private Tour',
        to: '/plans/delhi-half-day',
        note: 'When the day is split by an arrival or a departure — one half of the city, done properly, with the car timed around your flight.'
      },
      {
        label: 'Same Day Taj Mahal Tour by Car',
        to: '/plans/same-day-taj-car',
        note: 'If day three is going to Agra — door to door from your Delhi hotel, timed for sunrise, with tolls and parking included.'
      }
    ],
    seeAlso: [
      { label: 'Delhi airport layover: can you leave?', to: '/guides/delhi-airport-layover' },
      { label: 'Getting around Delhi: Metro, taxi, auto or car', to: '/guides/getting-around-delhi' },
      { label: 'Is Delhi safe for tourists?', to: '/guides/is-delhi-safe-for-tourists' },
      { label: 'Delhi to Agra: every way to get there', to: '/guides/delhi-to-agra' }
    ]
  },
  {
    slug: 'delhi-airport-layover',
    topic: 'delhi',
    metaTitle: 'Delhi Airport Layover: Can You Leave, and What Fits?',
    metaDescription:
      'Whether you can leave Delhi airport on a layover, the visa that decides it, how long you actually need, and what fits in 6, 8 or 12 hours — with real travel times from T3.',
    h1: 'Delhi Airport Layover: Can You Leave, and What Fits?',
    cardTitle: 'Delhi Airport Layover Guide',
    cardSummary:
      'Whether you can leave the airport, how much time you really need, and what fits in six, eight or twelve hours between flights.',
    image: '/india-gate-group.webp',
    updated: '2026-09-23',
    intro: [
      'You can leave Delhi airport on a layover, but only if you hold a visa that lets you enter India — and that is the part most people get wrong. A confirmed onward ticket is not enough on its own, and the free transit facility inside the terminal does not let you through immigration.',
      'If you do have the visa, the rule of thumb is simple: under six hours, stay airside. Six to eight hours gets you one thing done. Ten hours or more is a real half-day in the city. Anything involving Agra needs at least fourteen, and we would rather talk you out of it than sell it to you.'
    ],
    sections: [
      {
        heading: 'Can you leave the airport during a layover in Delhi?',
        id: 'can-you-leave',
        body: [
          'Only with a visa valid for entry to India. India does not have a visa-free transit arrangement that lets you into the country for a few hours — if you want to pass through immigration, you need an e-Visa, a regular tourist visa, or an OCI card, arranged before you fly.',
          'The e-Visa is the usual route and is applied for online in advance, typically at least four days before travel. Approval is not instant, so this is not something to sort out at the airport. Check the current requirements on the official Indian government portal rather than a third-party site, since the fee and the list of eligible nationalities both change.',
          'Without a visa you stay airside. Terminal 3 has a transit hotel, lounges and showers, and that is a perfectly reasonable way to spend a short layover — but you will not see Delhi.'
        ],
        callout: {
          title: 'The mistake that ends the plan at immigration',
          text: 'Arriving with an onward boarding pass and assuming that counts as transit permission. It does not. Indian immigration will not admit you without a valid entry visa, however short your stay, and no amount of explaining at the counter changes it. Sort the visa before you fly or plan an airside layover.'
        }
      },
      {
        heading: 'How much time do you actually need?',
        id: 'how-long',
        body: [
          'The number on your ticket is not the number you are working with. Immigration on arrival can take 30 to 60 minutes at busy times, the drive into central Delhi is 45 minutes to an hour and a quarter depending on traffic, and you want to be back at the terminal three hours before an international departure.',
          'That overhead is roughly four and a half to five hours before any sightseeing happens. Subtract it from your layover honestly, and what is left is what you actually have.'
        ],
        table: {
          caption: 'What a Delhi layover realistically allows',
          headers: ['Layover', 'Usable time in the city', 'What fits'],
          rows: [
            ['Under 6 hours', 'None', 'Stay airside — T3 has a transit hotel, lounges and showers'],
            ['6–8 hours', '1–2 hours', 'One nearby sight — Qutub Minar or the Lotus Temple, both on the airport side of the city'],
            ['8–10 hours', '3–4 hours', 'Humayun\'s Tomb and Qutub Minar, or a short Old Delhi walk'],
            ['10–14 hours', '5–7 hours', 'A proper half-day: Old Delhi in the morning or the Mughal monuments in the south'],
            ['14+ hours', '8+ hours', 'A full Delhi day — or Agra, but only at the top of that range']
          ]
        }
      },
      {
        heading: 'What to see, by how long you have',
        id: 'what-fits',
        body: [
          'Geography decides this more than preference. Qutub Minar and the Lotus Temple sit in south Delhi, on the same side of the city as the airport — roughly 30 to 40 minutes away. Old Delhi and Red Fort are the far side, an hour or more each way, which is an hour of your layover spent in a car before you see anything.',
          'On a short layover, take the south. On a long one, Old Delhi is worth the drive.'
        ],
        list: [
          'Qutub Minar — closest major monument to the airport, about 30 minutes, and needs an hour. The single best choice if you have one slot to fill.',
          'Humayun\'s Tomb — the Mughal tomb the Taj Mahal was modelled on, quieter than anything in Old Delhi, and about 45 minutes from T3.',
          'Lotus Temple — free, striking from outside, and close to Qutub Minar. Skip the interior queue on a layover; there is nothing to see inside but a silent prayer hall.',
          'India Gate and the government quarter — a drive-past rather than a stop, and best at either end of the day.',
          'Old Delhi: Jama Masjid, Chandni Chowk, the spice market — the most memorable few hours in the city, and the least suited to a tight layover.'
        ],
        callout: {
          title: 'Why we do not sell a Taj Mahal layover under fourteen hours',
          text: 'Agra is three and a half hours each way from Delhi, and from the airport rather than a city hotel it is closer to four. Add immigration, the return buffer and any time at the monument, and the arithmetic needs about fourteen hours to work without the day depending on nothing going wrong. Operators do sell it on ten. What they are selling is eight hours in a car and a real chance of missing your flight.'
        }
      },
      {
        heading: 'Luggage, money and the practical side',
        id: 'practical',
        body: [
          'Check your bags through to your final destination when you check in for the first leg, and confirm that at the desk rather than assuming. If they are through-checked you walk out with hand luggage only. If not, Terminal 3 has left-luggage facilities, and you want to know which before you land, not after.',
          'You will need a little Indian currency for entry tickets and incidentals even though cards are widely accepted, and the Taj Mahal and several monuments are now digital-payment only. ATMs in the arrivals hall are the simplest option.'
        ],
        list: [
          'Through-check your bags at the first check-in desk, and confirm it verbally.',
          'Keep your onward boarding pass and passport on you the whole time.',
          'Set an alarm for your return, not a reminder — Delhi traffic does not care about your schedule.',
          'Allow three hours at T3 before an international departure, and more in the morning peak.',
          'Terminal 1 and Terminal 3 are not walking distance apart. If your onward flight leaves from a different terminal, add the transfer to your buffer.'
        ]
      },
      {
        heading: 'Getting into the city and back',
        id: 'transport',
        body: [
          'The Airport Express Metro connects T3 with New Delhi station in about twenty minutes and is excellent value, but it drops you in the centre and you still need transport from there — and you are on your own for the return timing.',
          'A [private car with a driver](/guide-booking) is the version most layover visitors take, for one reason: the vehicle stays with you. You are not negotiating with autos, waiting for a cab that cancels, or working out whether the traffic you are sitting in has put your flight at risk. On a layover the schedule is the whole problem, and that is what you are paying to remove.',
          'Either way, avoid crossing the city between 8–10am and 5–8pm if the timings allow it. Our guide to [getting around Delhi](/guides/getting-around-delhi) compares every option with costs.'
        ]
      }
    ],
    faqs: [
      {
        question: 'Can I leave Delhi airport during a layover?',
        answer:
          'Only if you hold a visa valid for entry to India — an e-Visa, a tourist visa or an OCI card. India has no visa-free transit arrangement that admits you for a few hours, and a confirmed onward ticket does not substitute for one. Without a visa you stay airside, where Terminal 3 has a transit hotel, lounges and showers.'
      },
      {
        question: 'How many hours of layover do I need to leave the airport in Delhi?',
        answer:
          'Eight hours is the realistic minimum for it to be worth doing. Immigration can take 30 to 60 minutes, the drive into the city is 45 minutes to an hour and a quarter each way, and you want to be back three hours before an international departure. That overhead is four and a half to five hours before any sightseeing. Under six hours, stay airside.'
      },
      {
        question: 'Can I visit the Taj Mahal on a Delhi layover?',
        answer:
          'Only with about fourteen hours or more, and we would not recommend it below that. Agra is three and a half hours each way from Delhi and closer to four from the airport. Add immigration, the airport buffer and time at the monument and the day only works if nothing goes wrong. Operators sell it on ten-hour layovers; that version is eight hours in a car with a real risk to your flight.'
      },
      {
        question: 'What can I see in Delhi with a 6 to 8 hour layover?',
        answer:
          'One thing, and it should be on the airport side of the city. Qutub Minar is about 30 minutes from Terminal 3 and needs an hour — it is the best single choice. The Lotus Temple is nearby and free. Old Delhi and Red Fort are an hour or more each way, which does not fit.'
      },
      {
        question: 'What do I do with my luggage on a layover?',
        answer:
          'Check it through to your final destination at the first check-in desk and confirm that verbally rather than assuming — if it is through-checked you leave the terminal with hand luggage only. If it is not, Terminal 3 has left-luggage facilities. Find out which applies before you land rather than at the carousel.'
      },
      {
        question: 'Is a Delhi layover tour worth it?',
        answer:
          'With eight hours or more and a valid visa, yes — Qutub Minar or Humayun\'s Tomb beats another few hours in a terminal, and both are genuinely worth seeing. Under six hours it is not, and no amount of planning changes the arithmetic. The deciding factor is almost always the visa rather than the time.'
      }
    ],
    related: [
      {
        label: 'Delhi Airport Layover Tour',
        to: '/plans/delhi-layover-tour',
        note: 'Timed against your flight number rather than a generic schedule, with airport pickup and the return buffer built in.'
      },
      {
        label: 'Delhi Half Day Private Tour',
        to: '/plans/delhi-half-day',
        note: 'If you are staying the night rather than connecting — five hours on one half of the city, from hotel or airport.'
      },
      {
        label: 'Delhi Unveiled: Private Full Day Heritage Tour',
        to: '/plans/delhi-full-day-heritage',
        note: 'For a layover long enough to be a day — both halves of the city with a licensed guide.'
      }
    ],
    seeAlso: [
      { label: 'Delhi itinerary: 1, 2 or 3 days', to: '/guides/delhi-itinerary-1-2-3-days' },
      { label: 'Getting around Delhi: Metro, taxi, auto or car', to: '/guides/getting-around-delhi' },
      { label: 'Is Delhi safe for tourists?', to: '/guides/is-delhi-safe-for-tourists' }
    ]
  }
];
