"use client";

import { useEffect, useRef } from "react";

const reviews = [
  {
    name: "Alex Thompson",
    position: "CTO, NexaFinance",
    text: "The transaction speed is phenomenal. We migrated our entire DeFi platform and saw a 40x improvement in throughput. The AI security layer gives our users real confidence.",
    rating: 5,
  },
  {
    name: "Sarah Chen",
    position: "Lead Developer, ChainVerse",
    text: "Best developer experience in the blockchain space. The SDK is incredibly well-documented, and the smart contract deployment process is seamless. Our team was productive from day one.",
    rating: 5,
  },
  {
    name: "Marcus Rivera",
    position: "Founder, MetaStake Labs",
    text: "We evaluated over a dozen L1 solutions and this was the clear winner. The Proof of Stake implementation is elegant, and the cross-chain bridge opened up entirely new possibilities for our project.",
    rating: 4,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="star-rating mb-4 text-lg" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < rating ? "opacity-100" : "opacity-30"}>
          ★
        </span>
      ))}
    </div>
  );
}

export default function Reviews() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll(".reveal");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  // JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: reviews.map((review, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: review.name,
          jobTitle: review.position,
        },
        reviewBody: review.text,
        reviewRating: {
          "@type": "Rating",
          ratingValue: review.rating,
          bestRating: 5,
        },
      },
    })),
  };

  return (
    <section id="reviews" className="relative px-6 py-24 lg:px-8" ref={sectionRef}>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            <span className="gradient-text">What Our Users Say</span>
          </h2>
          <p className="mx-auto max-w-2xl text-text-secondary">
            Trusted by leading teams building the next generation of
            decentralized applications.
          </p>
        </div>

        {/* Reviews grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <div
              key={review.name}
              className="reveal card-glow flex flex-col rounded-2xl bg-dark-800 p-8"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <StarRating rating={review.rating} />
              <blockquote className="mb-6 flex-1 text-sm leading-relaxed text-text-secondary">
                &ldquo;{review.text}&rdquo;
              </blockquote>
              <div className="flex items-center gap-4">
                {/* TODO: Insert avatar placeholder here */}
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-accent-pink to-accent-purple text-sm font-bold text-white">
                  {review.name[0]}
                </div>
                <div>
                  <p className="text-sm font-semibold text-text-primary">
                    {review.name}
                  </p>
                  <p className="text-xs text-text-muted">{review.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
