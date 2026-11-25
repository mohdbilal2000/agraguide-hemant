import React, { useState } from 'react';

/**
 * An email address that always does something when clicked.
 *
 * A plain `mailto:` link only opens anything when the device has a mail client
 * registered for the protocol. On a desktop where the person reads mail in a
 * browser tab — which is most of them — clicking one does nothing at all: no
 * window, no error, no sign that the click registered. The address was correct
 * and the markup was correct, and the visitor still walked away thinking the
 * site was broken.
 *
 * So the mailto stays, for everyone whose mail client does open, and the click
 * also copies the address and says so. Whatever happens, the click did
 * something visible.
 */
/**
 * The same behaviour for the places where the address is a whole card rather
 * than a word — wrapping those in EmailLink's span would break their layout,
 * so they keep their own markup and borrow the clipboard part.
 */
export const useCopyEmail = (email: string) => {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    try {
      navigator.clipboard?.writeText(email).then(
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
  return { copied, copy };
};

interface EmailLinkProps {
  email: string;
  className?: string;
  /** What to show instead of the address itself. */
  children?: React.ReactNode;
  /** Extra classes for the short "Copied" confirmation. */
  noticeClassName?: string;
}

const EmailLink: React.FC<EmailLinkProps> = ({
  email,
  className = '',
  children,
  noticeClassName = '',
}) => {
  const [copied, setCopied] = useState(false);

  const handleClick = () => {
    /* Never block the mailto — this runs alongside it. navigator.clipboard
       needs a secure context and can be refused outright, so a failure here
       must leave the link behaving exactly as it did before. */
    try {
      navigator.clipboard?.writeText(email).then(
        () => {
          setCopied(true);
          window.setTimeout(() => setCopied(false), 2500);
        },
        () => undefined,
      );
    } catch {
      /* no clipboard — the mailto is still the link's normal behaviour */
    }
  };

  return (
    <span className="inline-flex items-center gap-2">
      <a href={`mailto:${email}`} onClick={handleClick} className={className}>
        {children ?? email}
      </a>
      {copied && (
        <span
          role="status"
          className={`text-[11px] font-bold uppercase tracking-wider opacity-80 ${noticeClassName}`}
        >
          Copied
        </span>
      )}
    </span>
  );
};

export default EmailLink;
