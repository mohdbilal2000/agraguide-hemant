
import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

/* The one address the rest of the site uses — the footer, the contact page,
   the digital card, llms.txt and the Organization schema all carry this one.
   This component used to point at contact@indiventuretravellers.com, which
   appeared nowhere else and is not a mailbox anyone reads. Anything sent to it
   went nowhere, from the button that sits on every page of the site. */
const EMAIL = 'indiventuretravellers@gmail.com';
const WHATSAPP = '919217519989';

/* Every enquiry should arrive knowing which page produced it. Without it, a
   message reads "Hi, I have a question" and there is no way to tell whether
   the guides are earning contact or the tour pages are. */
const whatsappLink = () => {
  const path = typeof window === 'undefined' ? '' : window.location.pathname;
  const where = path && path !== '/' ? `I was reading ${path} on your website. ` : '';
  const text = `Hi — ${where}I'm planning a trip to India and would like some advice.`;
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;
};

const ContactButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);
  /* A mailto opens nothing on a device with no mail client registered for the
     protocol, which is most desktops where mail is read in a browser tab. The
     click looked broken. Copying the address as well means it always lands. */
  const [copied, setCopied] = useState(false);
  const copyEmail = () => {
    try {
      navigator.clipboard?.writeText(EMAIL).then(
        () => {
          setCopied(true);
          window.setTimeout(() => setCopied(false), 2500);
        },
        () => undefined,
      );
    } catch {
      /* clipboard unavailable — the mailto still behaves exactly as before */
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeenPrompt = localStorage.getItem('hasSeenContactPrompt');
      if (!hasSeenPrompt) {
        setShowPrompt(true);
      }
    }, 20000); // 20 seconds auto-popup

    return () => clearTimeout(timer);
  }, []);

  const dismissPrompt = () => {
    setShowPrompt(false);
    localStorage.setItem('hasSeenContactPrompt', 'true');
  };

  return (
    <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[100] flex flex-col items-end" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
      {/* Auto Prompt */}
      <AnimatePresence>
        {showPrompt && !isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white p-4 rounded-2xl shadow-2xl border border-brand-primary/10 mb-4 max-w-[280px] relative"
          >
            <button
              onClick={dismissPrompt}
              aria-label="Dismiss"
              className="absolute -top-2 -right-2 bg-gray-100 hover:bg-gray-200 rounded-full p-1 text-gray-500"
            >
              <X size={14} aria-hidden="true" />
            </button>
            <div className="flex gap-3 items-center mb-2">
              <div className="w-10 h-10 rounded-full bg-brand-success/10 flex items-center justify-center text-brand-success">
                <MessageCircle size={20} />
              </div>
              <div>
                {/* This read "I'm Naveen, your local expert." Naveen appeared
                    nowhere else on the site, in any review, or in the company's
                    own contact card — it was placeholder copy introducing a
                    person who does not exist, on every page. */}
                <p className="text-sm font-bold text-brand-dark">Planning a trip?</p>
                <p className="text-xs text-gray-500">Ask us anything — no booking needed.</p>
              </div>
            </div>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={dismissPrompt}
              className="block w-full text-center bg-brand-success text-white py-2 rounded-lg text-sm font-bold hover:bg-brand-success/90 transition-colors"
            >
              Chat on WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Expanded Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="bg-white rounded-3xl shadow-2xl border border-brand-primary/10 mb-4 overflow-hidden w-[300px]"
          >
            <div className="bg-brand-primary p-6 text-white">
              <h3 className="text-xl font-serif font-bold mb-1">Contact Us</h3>
              <p className="text-sm text-white/80">Available 24/7 for our guests.</p>
            </div>
            <div className="p-4 flex flex-col gap-2">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-brand-success/5 hover:bg-brand-success/10 text-brand-success transition-all border border-brand-success/10"
              >
                <MessageCircle fill="currentColor" className="text-brand-success" />
                <div className="text-left">
                  <p className="font-bold">WhatsApp</p>
                  <p className="text-xs opacity-70">Instant Response</p>
                </div>
              </a>
              <a 
                href="tel:+919217519989" 
                className="flex items-center gap-4 p-4 rounded-xl bg-brand-info/5 hover:bg-brand-info/10 text-brand-info transition-all border border-brand-info/10"
              >
                <Phone fill="currentColor" className="text-brand-info" />
                <div className="text-left">
                  <p className="font-bold">Call Now</p>
                  <p className="text-xs opacity-70">+91 9217519989</p>
                </div>
              </a>
              <a
                href={`mailto:${EMAIL}`}
                onClick={copyEmail}
                className="flex items-center gap-4 p-4 rounded-xl bg-brand-dark/5 hover:bg-brand-dark/10 text-brand-dark transition-all border border-brand-dark/10"
              >
                <Mail fill="currentColor" className="text-brand-dark" />
                <div className="text-left">
                  <p className="font-bold">{copied ? 'Address copied' : 'Email Us'}</p>
                  {/* Was "Query in 2 hours" — a response time nobody measures.
                      The address itself is the more useful thing to show. */}
                  <p className="text-xs opacity-70 break-all">{EMAIL}</p>
                </div>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Toggle */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close contact options' : 'Open contact options'}
        aria-expanded={isOpen}
        className={`w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all ${
          isOpen ? 'bg-brand-dark text-white rotate-90' : 'bg-brand-success text-white'
        }`}
      >
        {isOpen ? <X size={28} aria-hidden="true" /> : <MessageCircle size={28} aria-hidden="true" />}
      </motion.button>
    </div>
  );
};

export default ContactButton;
