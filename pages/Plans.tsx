import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TourCard from '../components/TourCard';
import OptimizedImage from '../components/OptimizedImage';
import SEO, { SITE_URL } from '../components/SEO';
import { TOURS, PRICE_DISCLAIMER } from '../constants';
import { Search, ChevronRight, Car, Users, ShieldCheck, CalendarCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

/* "Top Rated" was removed with the per-tour rating figures it sorted on —
   those were invented, and a sort order is not a good enough reason to keep
   fabricated numbers in the data where something could publish them. */
type SortKey = 'popular' | 'price-asc' | 'price-desc' | 'duration';

const SORT_OPTIONS: { value: SortKey; label: string }[] = [
  { value: 'popular', label: 'Most Popular' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'duration', label: 'Shortest First' },
];

/* Answers here restate the policies on /faq rather than inventing new ones —
   if one of these changes, it changes there first. */
const BOOKING_FAQS = [
  {
    question: 'Do I pay anything to book a tour?',
    answer:
      'No. Nothing is charged when you book and no payment is taken through this website. We confirm guide and vehicle availability for your dates first, then send payment details on WhatsApp — cash, UPI, bank transfer and card are all accepted. Single-day tours need no deposit at all. Multi-day tours that hold hotel rooms usually need a part payment to confirm them.'
  },
  {
    question: 'Are monument entry fees included in the tour price?',
    answer:
      'No, and we state it on every tour page rather than leaving it to be discovered. We book the tickets on your behalf so you skip the counter queue, and confirm the exact amount in writing before you pay anything. For reference, a foreign adult Taj Mahal ticket is ₹1,300, SAARC and BIMSTEC passport holders pay ₹740, and Indian citizens ₹250.'
  },
  {
    question: 'Are the prices per person or per group?',
    answer:
      'Per person, and they are starting prices — the final figure depends on group size and season, and larger groups bring the per-person cost down. Every tour runs privately regardless of size, so you are never joined to another party. We quote the exact amount for your dates before anything is paid.'
  },
  {
    question: 'What is your cancellation policy?',
    answer:
      'Free cancellation or change up to 24 hours before the tour start time, subject to availability. Inside 24 hours, costs already committed to the driver or to monument tickets may apply. Since nothing is charged at the time of booking, cancelling outside that window costs you nothing.'
  },
  {
    question: 'Can you customise an itinerary rather than selling me a package?',
    answer:
      'Yes, and most of our multi-day trips end up reshaped. Common additions are Udaipur, a tiger safari at Ranthambore, Varanasi, and the desert forts at Jodhpur or Jaisalmer. Send your dates, a rough budget and what matters most to you, and we build the route around that instead of fitting you into a fixed package.'
  },
  {
    question: 'Will the tour include shopping stops?',
    answer:
      'No. Many cheaper tours route you through a marble emporium or handicraft showroom because the operator earns commission on what you buy — it is why those tours can be priced the way they are. We do not do it, which is also why our days fit in another monument where others fit in a showroom.'
  },
  {
    question: 'Can I request a female guide?',
    answer:
      'Yes, on any tour, at no extra charge and subject to availability on your date. We work with a collective of professional female heritage guides. Many solo travellers and families ask for this and it is a large part of who we host.'
  }
];

/** Days where the duration says so, otherwise hours — used only for sorting. */
const hoursOf = (t: typeof TOURS[number]) => {
  const days = t.duration.match(/(\d+)\s*Day/i);
  if (days) return Number(days[1]) * 24;
  const hours = t.duration.match(/(\d+)\s*Hour/i);
  return hours ? Number(hours[1]) : Number.MAX_SAFE_INTEGER;
};

const priceOf = (t: typeof TOURS[number]) => (typeof t.price === 'number' ? t.price : Number.MAX_SAFE_INTEGER);

const Plans: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortKey, setSortKey] = useState<SortKey>('popular');
  const categories = ['All', 'Same Day Tours', 'Two Day Tours', 'Golden Triangle', 'Royal Rajasthan', 'Photography Tours'];

  const filteredTours = useMemo(() => {
    const filtered = TOURS.filter(tour => {
      const matchesSearch = tour.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          tour.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = activeCategory === 'All' ||
                            tour.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
    return [...filtered].sort((a, b) => {
      switch (sortKey) {
        case 'price-asc': return priceOf(a) - priceOf(b);
        case 'price-desc': return priceOf(b) - priceOf(a);
        case 'duration': return hoursOf(a) - hoursOf(b);
        // "Most popular" is the curated order in constants.tsx, with the
        // flagged tours first — an editorial choice rather than a fake metric.
        default: return (b.isMostBooked ? 1 : 0) - (a.isMostBooked ? 1 : 0);
      }
    });
  }, [searchTerm, activeCategory, sortKey]);

  const listSchema = [
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Taj Mahal, Agra & Golden Triangle Tour Packages",
      "numberOfItems": TOURS.length,
      "itemListElement": TOURS.map((tour, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "name": tour.title,
        "url": `${SITE_URL}/plans/${tour.id}`
      }))
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${SITE_URL}/plans#faq`,
      "mainEntity": BOOKING_FAQS.map(f => ({
        "@type": "Question",
        "name": f.question,
        "acceptedAnswer": { "@type": "Answer", "text": f.answer }
      }))
    }
  ];

  return (
    <div className="pt-24 md:pt-32 pb-24 bg-brand-bg min-h-screen">
      <SEO
        title="Tour Packages & Prices — Taj Mahal, Agra & Golden Triangle"
        description={`Compare ${TOURS.length} private tours: same-day Taj Mahal trips from $40, Golden Triangle packages, Rajasthan circuits and photography tours. Licensed guides, free cancellation.`}
        canonical="/plans"
        schema={listSchema}
      />
      <div className="page-container">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-brand-primary transition-colors">Home</Link>
          <ChevronRight size={14} aria-hidden="true" />
          <span className="text-brand-dark font-medium" aria-current="page">Tour Plans</span>
        </nav>

        <div className="mb-16">
          <h1 className="display-lg font-bold playfair text-brand-dark mb-6">
            Taj Mahal, Golden Triangle &amp; Rajasthan Tours
          </h1>
          <p className="text-lg md:text-xl text-gray-500 max-w-3xl leading-relaxed mb-6">
            {TOURS.length} private itineraries — from a sunrise hour at the Taj Mahal to twelve days
            across Rajasthan. Every one runs privately, with a government-licensed guide and a car
            that stays with you for the whole trip.
          </p>
          <p className="text-gray-500 max-w-3xl leading-relaxed mb-12">
            Prices are per person and start from the figure shown; monument entry fees are arranged
            for you and billed separately, with the exact amount confirmed in writing before you pay
            anything. If you are still deciding how many days you need,{' '}
            <a href="#choosing" className="text-brand-primary underline underline-offset-2">
              the comparison below
            </a>{' '}
            sets out what each length actually covers.
          </p>

          {/* These four are true of every tour on this page. "Boutique stays" and
              "authentic meals" used to sit here and are not — most day tours
              include neither, and the tour pages say so. */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: Car, title: 'Private Vehicle', desc: 'An air-conditioned car and chauffeur that stay with you all day — never a shared pickup.' },
              { icon: Users, title: 'Licensed Guides', desc: 'Ministry of Tourism regional licences. Ask to see the card — an unlicensed guide cannot legally take you inside ASI monuments.' },
              { icon: ShieldCheck, title: 'No Commission Stops', desc: 'We never route your day through an emporium. Your time goes on monuments, not showrooms.' },
              { icon: CalendarCheck, title: 'Nothing Charged to Book', desc: 'We confirm availability first, then send payment details. Free cancellation up to 24 hours before.' }
            ].map((feature, i) => (
              <div key={i} className="bg-white p-6 md:p-8 rounded-3xl shadow-soft border border-brand-dark/5 hover:shadow-lift hover:-translate-y-0.5 transition-all">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary mb-6">
                  <feature.icon size={24} aria-hidden="true" />
                </div>
                <h2 className="font-bold text-brand-dark mb-2 text-lg">{feature.title}</h2>
                <p className="text-sm text-gray-500 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 mb-10 items-start lg:items-center justify-between">
          <div className="flex flex-wrap gap-2 md:gap-3" role="group" aria-label="Filter by category">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                aria-pressed={activeCategory === cat}
                className={`px-5 md:px-7 py-2 md:py-3 rounded-full font-bold transition-all border-2 text-sm ${
                  activeCategory === cat
                    ? 'bg-brand-primary text-white border-brand-primary shadow-lg'
                    : 'bg-white text-brand-dark border-brand-dark/5 hover:border-brand-primary/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full lg:w-96 group">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-brand-primary transition-colors" size={20} aria-hidden="true" />
            <input
              type="search"
              placeholder="Search tours or cities..."
              aria-label="Search tours"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white border-2 border-brand-dark/5 p-4 pl-14 rounded-2xl outline-none focus:border-brand-primary/40 transition-all text-brand-dark font-medium shadow-soft"
            />
          </div>
        </div>

        <p className="mb-6 text-xs text-gray-500 leading-relaxed bg-white border border-brand-dark/5 rounded-2xl px-5 py-3.5 shadow-soft">
          <span className="font-bold text-brand-dark">Pricing note:</span> {PRICE_DISCLAIMER}
        </p>

        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 px-2">
          <p className="text-gray-500 font-medium text-sm" role="status">
            {filteredTours.length} {filteredTours.length === 1 ? 'experience' : 'experiences'} available
          </p>
          <label className="flex items-center gap-3 text-sm font-bold text-brand-dark">
            <span className="text-gray-400 uppercase tracking-widest text-[10px]">Sort by</span>
            <select
              value={sortKey}
              onChange={(e) => setSortKey(e.target.value as SortKey)}
              className="bg-white border-2 border-brand-dark/5 rounded-xl px-4 py-2.5 font-bold text-brand-dark outline-none focus:border-brand-primary/40 cursor-pointer shadow-soft"
            >
              {SORT_OPTIONS.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </label>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          <AnimatePresence>
            {filteredTours.length > 0 ? (
              filteredTours.map(tour => (
                <motion.div
                  key={tour.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <TourCard tour={tour} />
                </motion.div>
              ))
            ) : (
              <div className="col-span-full py-24 md:py-32 text-center bg-white rounded-[2rem] border-2 border-dashed border-brand-dark/10">
                <Search size={48} className="mx-auto text-gray-300 mb-6" aria-hidden="true" />
                <h2 className="text-2xl font-bold playfair text-brand-dark mb-2">No plans found</h2>
                <p className="text-gray-500 mb-6 px-4">Try adjusting your filters or search terms for better results.</p>
                <button
                  onClick={() => { setSearchTerm(''); setActiveCategory('All'); }}
                  className="text-brand-primary font-bold border-b-2 border-brand-primary hover:text-brand-dark hover:border-brand-dark transition-all"
                >
                  Reset All Filters
                </button>
              </div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* The listing above is a grid of cards with almost no prose. This is
            the page's own content — the question people actually arrive with
            is how many days they need, and nothing on the site answered it. */}
        <section id="choosing" className="mt-24 scroll-mt-24" aria-labelledby="choosing-heading">
          <h2 id="choosing-heading" className="text-3xl md:text-4xl font-bold playfair text-brand-dark mb-4">
            Which length is right for you?
          </h2>
          <p className="text-gray-600 max-w-3xl leading-relaxed mb-10">
            Almost everyone arrives at this page asking the same thing: how many days do I need? The
            honest answer depends on how much driving you are willing to do, because in North India
            the distance between two sights is usually the constraint rather than the sights
            themselves.
          </p>

          <div className="overflow-x-auto rounded-2xl border border-brand-dark/10 bg-white shadow-soft">
            <table className="w-full text-sm text-left border-collapse">
              <caption className="sr-only">Tour lengths compared by what each covers</caption>
              <thead>
                <tr className="bg-brand-bg">
                  {['Length', 'Covers', 'Best for', 'The trade-off'].map(h => (
                    <th key={h} scope="col" className="px-5 py-4 font-bold text-brand-dark whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-dark/5">
                {[
                  ['Day tour (10–14 hrs)', 'One city, or the Taj Mahal from Delhi and back', 'A spare day, or a single monument you came for', 'Most of it is driving. Nothing is left over for Fatehpur Sikri or a second morning'],
                  ['Overnight (2 days)', 'Agra at sunrise and sunset, or Agra with Fatehpur Sikri', 'Seeing the Taj properly rather than once, in one light', 'Adds a hotel night, but removes the 3 AM departure and the tired drive home'],
                  ['3–5 days', 'Delhi, Agra and Jaipur — the Golden Triangle', 'A first trip to North India', 'Three days works and every afternoon involves real driving. Five days is where nothing needs cutting'],
                  ['6–9 days', 'The Golden Triangle plus Udaipur, or Rajasthan without it', 'A second week, or skipping Delhi and Agra for the forts', 'Long inter-city legs — Jodhpur to Jaisalmer alone is five to six hours'],
                  ['12 days', 'Delhi, Agra and the full Rajasthan loop', 'One thorough trip rather than two partial ones', 'The longest commitment, and the only itinerary that fits both the Taj Mahal and the desert']
                ].map((row, i) => (
                  <tr key={i} className="align-top">
                    <th scope="row" className="px-5 py-4 font-bold text-brand-dark whitespace-nowrap">{row[0]}</th>
                    <td className="px-5 py-4 text-gray-600">{row[1]}</td>
                    <td className="px-5 py-4 text-gray-600">{row[2]}</td>
                    <td className="px-5 py-4 text-gray-500">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-20" aria-labelledby="booking-faq-heading">
          <h2 id="booking-faq-heading" className="text-3xl md:text-4xl font-bold playfair text-brand-dark mb-8">
            Booking questions
          </h2>
          <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-soft border border-brand-dark/5 divide-y divide-brand-dark/5">
            {BOOKING_FAQS.map((faq, i) => (
              <div key={i} className="py-6 first:pt-0 last:pb-0">
                <h3 className="font-bold text-brand-dark mb-3 leading-snug">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-24 bg-brand-dark rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-20 text-white relative overflow-hidden text-center shadow-2xl">
          <div className="absolute inset-0 opacity-10">
            <OptimizedImage src="/rajasthan-palace-hotel.webp" alt="" sizes="100vw" className="h-full w-full" aria-hidden="true" />
          </div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="display-lg font-bold playfair mb-6">Need a Custom Itinerary?</h2>
            <p className="text-white/70 text-base md:text-lg mb-10 md:mb-12 leading-relaxed">
              Our travel experts can create a personalized journey based on your interests, timeframe, and budget. Perfect for families, photographers, and history buffs.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-10 md:mb-12">
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-md">
                <h3 className="font-bold mb-1 text-sm md:text-base">Any Duration</h3>
                <p className="text-[10px] md:text-xs text-white/40 uppercase tracking-widest">3 Days to 3 Weeks</p>
              </div>
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-md">
                <h3 className="font-bold mb-1 text-sm md:text-base">Premium Hotels</h3>
                <p className="text-[10px] md:text-xs text-white/40 uppercase tracking-widest">Heritage & 5-Star</p>
              </div>
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-md">
                <h3 className="font-bold mb-1 text-sm md:text-base">Special Focus</h3>
                <p className="text-[10px] md:text-xs text-white/40 uppercase tracking-widest">Culture & Arts</p>
              </div>
            </div>
            <Link to="/contact" className="inline-block bg-brand-gold text-brand-dark px-10 md:px-14 py-4 md:py-5 rounded-2xl font-bold text-base md:text-lg shadow-2xl hover:bg-white transition-all">Request Custom Quote</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
