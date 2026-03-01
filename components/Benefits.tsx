"use client";

import { useEffect, useRef } from "react";

const benefits = [
  {
    title: "Lightning Speed",
    description:
      "Process over 120,000 transactions per second with our cutting-edge consensus algorithm for unmatched performance.",
    icon: "⚡",
  },
  {
    title: "AI-Powered Security",
    description:
      "Advanced machine learning models continuously monitor and protect your data against emerging threats in real time.",
    icon: "🛡️",
  },
  {
    title: "Smart Contracts",
    description:
      "Deploy and manage self-executing contracts with our intuitive SDK — no complex setup required.",
    icon: "📜",
  },
  {
    title: "Scalable Infrastructure",
    description:
      "Our Proof of Stake architecture scales effortlessly to meet demand without compromising decentralization.",
    icon: "🚀",
  },
  {
    title: "Cross-Chain Bridge",
    description:
      "Seamlessly transfer assets across multiple blockchain networks with built-in interoperability protocols.",
    icon: "🔗",
  },
  {
    title: "Developer Toolkit",
    description:
      "Comprehensive APIs, SDKs, and documentation to accelerate your dApp development from prototype to production.",
    icon: "🧰",
  },
];

export default function Benefits() {
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

  return (
    <section id="benefits" className="relative px-6 py-24 lg:px-8" ref={sectionRef}>
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            <span className="gradient-text">Why Choose Us</span>
          </h2>
          <p className="mx-auto max-w-2xl text-text-secondary">
            Built for the future of decentralized technology with unmatched
            performance, security, and developer experience.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="reveal card-glow rounded-2xl bg-dark-800 p-8"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* TODO: Insert icon here */}
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-dark-700 text-2xl">
                {benefit.icon}
              </div>
              <h3 className="mb-2 text-lg font-semibold text-text-primary">
                {benefit.title}
              </h3>
              <p className="text-sm leading-relaxed text-text-secondary">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
