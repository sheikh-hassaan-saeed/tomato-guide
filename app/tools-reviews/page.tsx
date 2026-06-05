import type { Metadata } from "next";
import { SectionHeading, Paragraph, PinterestHook } from "../components/ui";
import AffiliateCard from "../components/AffiliateCard";
import InternalLinks from "../components/InternalLinks";
import JsonLd from "../components/JsonLd";

export const metadata: Metadata = {
  title: "Best Tools for Growing Tomatoes - Beginner Reviews & Recommendations",
  description:
    "The best grow bags, cages, potting soil, and watering tools for beginner tomato growers. Honest recommendations with no fluff - just what you actually need.",
  alternates: { canonical: "/tools-reviews" },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Best Tools for Growing Tomatoes",
  description: "Recommended tools for beginner tomato container gardening",
  numberOfItems: 8,
};

const containers = [
  {
    icon: "🛍️",
    name: "Fabric Grow Bags - 5-Pack (10 Gallon)",
    description:
      "Non-woven fabric promotes air pruning and prevents root rot. Handles on both sides make it easy to move. A 5-pack gives you enough for a full balcony setup.",
    benefit: "Produces healthier roots than any plastic pot",
    placement:
      "Best for patios, balconies, or anywhere with good drainage. Place on a saucer to catch runoff.",
    cta: "View on Amazon",
  },
  {
    icon: "🪴",
    name: "Heavy-Duty 15-Gallon Plastic Pot",
    description:
      "Thick-walled with multiple drainage holes. Light enough to move but stable in wind. Retains moisture 2–3x longer than fabric bags.",
    benefit: "Better for gardeners who water less frequently",
    placement:
      "Best for balconies in windy spots or growers who travel. Add a wheeled caddy underneath.",
    cta: "View on Amazon",
  },
];

const support = [
  {
    icon: "🪝",
    name: "Heavy-Duty Tomato Cage - 4-Pack",
    description:
      "Strong steel cages that hold indeterminate vines up to 6 feet. Avoid the flimsy triangular green cages - they collapse under a full-grown plant.",
    benefit: "Prevents vine collapse and improves airflow around the plant",
    placement:
      "Install at planting time - much easier than trying to add support later.",
    cta: "View on Amazon",
  },
  {
    icon: "🪵",
    name: "6-Foot Bamboo Stakes (20-Pack)",
    description:
      "Classic, inexpensive support for single-stem training or tying. Combine with soft jute twine or silicone ties.",
    benefit: "Flexible - works in any container size",
    placement:
      "Push 12 inches into soil before planting to avoid root damage.",
    cta: "View on Amazon",
  },
];

const soil = [
  {
    icon: "🌿",
    name: "Premium Vegetable Potting Mix",
    description:
      "A peat-free mix formulated for vegetables with controlled-release fertilizer included. Never use plain garden soil in containers - it compacts and suffocates roots.",
    benefit: "Well-draining mix reduces root rot risk dramatically",
    placement:
      "Fill containers leaving 2 inches from the top. Top up each season - soil compresses over time.",
    cta: "View on Amazon",
  },
  {
    icon: "🪨",
    name: "Perlite (8 Quart Bag)",
    description:
      "Volcanic glass beads that improve drainage and aeration in any potting mix. Add 20–25% perlite by volume to standard potting soil.",
    benefit: "Prevents waterlogging - critical in grow bags and pots",
    placement:
      "Mix into potting soil before filling container. Most important for grow bags.",
    cta: "View on Amazon",
  },
];

const watering = [
  {
    icon: "💧",
    name: "Long-Spout Watering Can (2 Gallon)",
    description:
      "A 30-inch spout lets you water precisely at the base of each plant without splashing leaves. Reduces fungal disease significantly.",
    benefit: "Base watering reduces fungal disease by 40–60%",
    placement:
      "Fill from a hose or rain barrel. 2 gallons is the right size for 4–6 containers.",
    cta: "View on Amazon",
  },
  {
    icon: "🚿",
    name: "Drip Irrigation Kit (10 Containers)",
    description:
      "Timer-controlled soaker system that delivers consistent moisture directly to roots. Set it once, and your plants stay watered through heatwaves and vacations.",
    benefit: "Eliminates blossom end rot and fruit cracking from inconsistent watering",
    placement:
      "Connect to outdoor tap with a battery timer set to water for 20–30 minutes every morning.",
    cta: "View on Amazon",
  },
];

const relatedLinks = [
  {
    label: "Grow Bags vs Pots - Full Comparison",
    href: "/tomato-grow-bags-vs-pots",
    desc: "understand the container choice before you buy",
  },
  {
    label: "How Often to Water Tomatoes in Summer",
    href: "/tomato-watering-guide",
    desc: "get the most from your watering tools",
  },
  {
    label: "Fix Leggy Tomato Seedlings",
    href: "/leggy-tomato-seedlings-fix",
    desc: "grow lights help prevent leggy seedlings",
  },
];

export default function ToolsReviewsPage() {
  return (
    <main className="py-10 px-4">
      <JsonLd data={pageSchema} />

      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <span className="text-xs font-semibold text-orange-700 bg-orange-50 px-3 py-1 rounded-full">
            Tools &amp; Reviews
          </span>
          <h1 className="text-3xl font-extrabold text-gray-900 mt-3 mb-3 leading-tight">
            Best Tools for Growing Tomatoes
            <br />
            <span className="text-green-700">Beginner Recommendations</span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            You don&apos;t need expensive tools to grow great tomatoes. These are the
            essentials - chosen specifically for beginner container growers who
            want real results without waste.
          </p>
          <p className="text-xs text-gray-400 mt-3">
            This page contains affiliate links. We earn a small commission if
            you purchase through our links, at no extra cost to you.
          </p>
        </div>

        <PinterestHook>
          The Only 6 Tools a Beginner Tomato Grower Actually Needs
        </PinterestHook>

        {/* Containers */}
        <section aria-labelledby="containers-heading" className="mb-10">
          <SectionHeading id="containers-heading">
            Containers - Grow Bags &amp; Pots
          </SectionHeading>
          <Paragraph>
            Your container choice affects root health, watering frequency, and
            harvest size more than almost any other factor. Start with a 10–15
            gallon size - smaller containers stunt tomato plants.
          </Paragraph>
          <div className="grid sm:grid-cols-2 gap-4 mt-4">
            {containers.map((p) => (
              <AffiliateCard key={p.name} {...p} />
            ))}
          </div>
        </section>

        {/* Support */}
        <section aria-labelledby="support-heading" className="mb-10">
          <SectionHeading id="support-heading">
            Plant Support - Cages &amp; Stakes
          </SectionHeading>
          <Paragraph>
            Tomato plants - especially indeterminate varieties - grow 4–6+ feet
            tall and need support from early on. Install support at planting
            time rather than trying to add it later when the plant is large.
          </Paragraph>
          <div className="grid sm:grid-cols-2 gap-4 mt-4">
            {support.map((p) => (
              <AffiliateCard key={p.name} {...p} />
            ))}
          </div>
        </section>

        {/* Soil */}
        <section aria-labelledby="soil-heading" className="mb-10">
          <SectionHeading id="soil-heading">
            Soil &amp; Growing Media
          </SectionHeading>
          <Paragraph>
            The single biggest mistake beginners make is using garden soil or
            cheap potting mix in containers. Proper container mix is
            non-negotiable - it makes the difference between thriving plants
            and stunted ones.
          </Paragraph>
          <div className="grid sm:grid-cols-2 gap-4 mt-4">
            {soil.map((p) => (
              <AffiliateCard key={p.name} {...p} />
            ))}
          </div>
        </section>

        {/* Watering */}
        <section aria-labelledby="watering-heading" className="mb-10">
          <SectionHeading id="watering-heading">
            Watering Tools
          </SectionHeading>
          <Paragraph>
            Consistent watering is the most important thing you can do for
            container tomatoes. The right tools make it easy - the wrong ones
            (like overhead sprinklers or a hose with no control) lead to
            inconsistency and disease.
          </Paragraph>
          <div className="grid sm:grid-cols-2 gap-4 mt-4">
            {watering.map((p) => (
              <AffiliateCard key={p.name} {...p} />
            ))}
          </div>
        </section>

        <InternalLinks links={relatedLinks} />
      </div>
    </main>
  );
}
