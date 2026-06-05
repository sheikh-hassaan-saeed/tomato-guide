import type { Metadata } from "next";
import { Card, SectionHeading, SubHeading, Paragraph, PinterestHook } from "../components/ui";
import FAQAccordion from "../components/FAQAccordion";
import InternalLinks from "../components/InternalLinks";
import AffiliateCard from "../components/AffiliateCard";
import JsonLd from "../components/JsonLd";
import PinterestBlock from "../components/PinterestBlock";

export const metadata: Metadata = {
  title: "Do Tomato Plants Need Full Sun All Day? Sunlight Requirements Explained",
  description:
    "Do tomato plants need full sun all day? No - and getting this wrong costs you fruit. Learn the ideal sunlight hours, heat stress signs, and best container positioning.",
  alternates: { canonical: "/do-tomatoes-need-full-sun" },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Do Tomato Plants Need Full Sun All Day? Sunlight Requirements Explained",
  description:
    "A guide to understanding tomato sunlight requirements - ideal hours, effects of too much or too little sun, best positioning, and shade strategies.",
  author: { "@type": "Organization", name: "TomatoGrowGuide" },
  publisher: { "@type": "Organization", name: "TomatoGrowGuide" },
  datePublished: "2025-06-05",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://tomatogrowguide.com/do-tomatoes-need-full-sun",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do tomato plants need full sun all day?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Tomato plants need 6–8 hours of direct sun daily, not full sun all day. In climates with extreme summer heat (above 95°F), afternoon shade is actually beneficial and helps the plant set more fruit.",
      },
    },
    {
      "@type": "Question",
      name: "Can tomatoes grow in partial shade?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tomatoes can survive in partial shade (4–5 hours) but will produce fewer fruits. Cherry tomato varieties like Tumbling Tom, Sweet 100, and Sun Gold tolerate lower light better than large beefsteak types.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if tomatoes get too much sun?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Too much afternoon sun in heat above 95°F causes flower drop (blossoms fall before setting fruit), sunscald on fruit (white or yellow patches), leaf curling, and wilting even when the soil is moist.",
      },
    },
    {
      "@type": "Question",
      name: "Which direction should I position my tomato containers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "South-facing is best for maximum sunlight. East-facing provides good morning sun with afternoon shade - ideal in hot climates. North-facing gets too little sun for tomatoes. West-facing gives afternoon sun, which is harsh in summer.",
      },
    },
    {
      "@type": "Question",
      name: "How do I provide shade for tomatoes in a heatwave?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Use a 30–40% shade cloth over plants during peak afternoon hours (1–5pm) when temperatures exceed 90°F. You can also move containers to a spot with natural afternoon shade from a fence or building.",
      },
    },
    {
      "@type": "Question",
      name: "How many hours of sun do tomato plants need per day?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tomato plants need a minimum of 6 hours of direct sun per day. The ideal range is 6-8 hours. Morning sun is the most valuable because it dries leaf moisture and reduces fungal disease risk. More than 8 hours is fine in mild climates but can cause heat stress above 90-95°F.",
      },
    },
  ],
};

const faqs = [
  {
    q: "Do tomato plants need full sun all day?",
    a: "No. Tomato plants need 6–8 hours of direct sun daily, not full sun all day. In climates with extreme summer heat (above 95°F), afternoon shade is actually beneficial and helps the plant set more fruit.",
  },
  {
    q: "Can tomatoes grow in partial shade?",
    a: "Tomatoes can survive in partial shade (4–5 hours) but will produce fewer fruits. Cherry tomato varieties like Tumbling Tom, Sweet 100, and Sun Gold tolerate lower light better than large beefsteak types.",
  },
  {
    q: "What happens if tomatoes get too much sun?",
    a: "Too much afternoon sun in heat above 95°F causes flower drop (blossoms fall before setting fruit), sunscald on fruit (white or yellow patches), leaf curling, and wilting even when the soil is moist.",
  },
  {
    q: "Which direction should I position my tomato containers?",
    a: "South-facing is best for maximum sunlight. East-facing provides good morning sun with afternoon shade - ideal in hot climates. North-facing gets too little sun for tomatoes. West-facing gives afternoon sun, which is harsh in summer.",
  },
  {
    q: "How do I provide shade for tomatoes in a heatwave?",
    a: "Use a 30–40% shade cloth over plants during peak afternoon hours (1–5pm) when temperatures exceed 90°F. You can also move containers to a spot with natural afternoon shade from a fence or building.",
  },
  {
    q: "How many hours of sun do tomato plants need per day?",
    a: "Tomato plants need a minimum of 6 hours of direct sun per day, with 6-8 hours being ideal. Morning sun is the most valuable because it dries leaf moisture and reduces fungal disease. More than 8 hours is fine in mild climates but can cause heat stress above 90-95°F.",
  },
];

const relatedLinks = [
  {
    label: "How Often to Water Tomatoes in Summer",
    href: "/tomato-watering-guide",
    desc: "more sun means faster soil drying - adjust your watering",
  },
  {
    label: "Grow Bags vs Pots - Container Positioning Tips",
    href: "/tomato-grow-bags-vs-pots",
    desc: "containers can be moved to optimize sunlight exposure",
  },
  {
    label: "Fix Leggy Tomato Seedlings",
    href: "/leggy-tomato-seedlings-fix",
    desc: "leggy seedlings are caused by the same problem indoors",
  },
  {
    label: "Complete Tomato Growing Guide",
    href: "/",
    desc: "hub page covering every beginner topic in one place",
  },
];

export default function FullSunPage() {
  return (
    <main className="py-10 px-4">
      <JsonLd data={articleSchema} />
      <JsonLd data={faqSchema} />

      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <span className="text-xs font-semibold text-yellow-700 bg-yellow-50 px-3 py-1 rounded-full">
            Beginner Guide
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3 mb-3 leading-tight">
            Do Tomato Plants Need Full Sun All Day?
            <br />
            <span className="text-green-700">Sunlight Requirements Explained</span>
          </h1>
          <p className="text-gray-500 text-sm">
            5 min read · Updated June 2025
          </p>
          <PinterestBlock
            title="Do Tomato Plants Need Full Sun All Day? Sunlight Requirements Explained"
            description="Tomatoes need 6–8 hours of sun, not all-day sun. Learn what too much afternoon heat does and how to position containers for the best harvest."
          />
          <p className="text-lg text-gray-700 mt-4 leading-relaxed">
            Do tomato plants need full sun all day? No - and getting this
            wrong can cost you your harvest. Tomato plants need 6-8 hours of
            direct sunlight daily, but too much afternoon heat causes flower
            drop and stress. Here&apos;s what tomato sunlight requirements actually
            look like, and how to position your plants for the best results.
          </p>
        </div>

        <PinterestHook>
          Your Tomatoes Might Be Getting Too Much Sun - Here&apos;s What the Signs Look Like
        </PinterestHook>

        {/* How much sun */}
        <SectionHeading id="how-much-sun">
          How Much Sun Do Tomatoes Really Need?
        </SectionHeading>
        <Paragraph>
          Tomatoes are technically classified as a &ldquo;full sun&rdquo; plant, which
          means 6 or more hours of direct sunlight daily. But &ldquo;full sun&rdquo; doesn&apos;t
          mean all-day sun - it means a minimum of 6 direct hours.
        </Paragraph>

        <div className="grid sm:grid-cols-3 gap-4 my-5">
          <Card className="text-center border-green-200 bg-green-50">
            <div className="text-3xl mb-2" aria-hidden="true">☀️</div>
            <h3 className="font-bold text-green-800 mb-1">6–8 Hours</h3>
            <p className="text-sm text-green-700 font-medium">Ideal</p>
            <p className="text-xs text-gray-600 mt-1">
              Best balance of photosynthesis and fruit production
            </p>
          </Card>
          <Card className="text-center border-yellow-200 bg-yellow-50">
            <div className="text-3xl mb-2" aria-hidden="true">⚡</div>
            <h3 className="font-bold text-yellow-800 mb-1">8–10 Hours</h3>
            <p className="text-sm text-yellow-700 font-medium">Good, with caveats</p>
            <p className="text-xs text-gray-600 mt-1">
              Fine in mild climates, can stress plants in heat
            </p>
          </Card>
          <Card className="text-center border-red-200 bg-red-50">
            <div className="text-3xl mb-2" aria-hidden="true">🔥</div>
            <h3 className="font-bold text-red-800 mb-1">All-Day + Heat</h3>
            <p className="text-sm text-red-700 font-medium">Potentially harmful</p>
            <p className="text-xs text-gray-600 mt-1">
              Above 95°F can cause flower drop and sunscald
            </p>
          </Card>
        </div>

        {/* Too much sun effects */}
        <SectionHeading id="too-much-sun">
          What Happens When Tomatoes Get Too Much Sun?
        </SectionHeading>
        <PinterestHook>
          5 Signs Your Tomatoes Are Getting Too Much Afternoon Sun
        </PinterestHook>
        <Paragraph>
          In climates where summer temperatures regularly exceed 90–95°F,
          all-day direct sun is not beneficial. The heat, not the light itself,
          causes problems. Tomatoes stop setting fruit when temperatures exceed
          85–90°F during pollination.
        </Paragraph>

        <Card className="bg-red-50 border-red-200 mb-4">
          <SubHeading>Signs of Heat Stress and Sun Overexposure</SubHeading>
          <ul className="space-y-2 text-sm text-gray-700">
            {[
              "Blossom drop - flowers fall off before becoming fruit",
              "Sunscald - white, papery patches on the fruit",
              "Leaf curling - leaves roll inward to protect themselves",
              "Wilting in the afternoon despite moist soil",
              "Slow or no new growth during peak summer heat",
            ].map((sign) => (
              <li key={sign} className="flex items-start gap-2">
                <span className="text-red-500 font-bold mt-0.5 shrink-0">⚠</span>
                {sign}
              </li>
            ))}
          </ul>
        </Card>

        {/* Not enough sun */}
        <SectionHeading id="too-little-sun">
          What Happens When Tomatoes Don&apos;t Get Enough Sun?
        </SectionHeading>
        <Paragraph>
          Below 6 hours of direct sun, tomato plants compensate by growing more
          leaves and fewer fruits. The plant prioritizes photosynthesis
          (leaves) over reproduction (fruit).
        </Paragraph>

        <Card className="bg-orange-50 border-orange-200 mb-4">
          <SubHeading>Signs of Insufficient Sunlight</SubHeading>
          <ul className="space-y-2 text-sm text-gray-700">
            {[
              "Slow overall growth - plants stay small through the season",
              "Sparse fruit set - lots of flowers, few fruits",
              "Tall, stretchy growth toward any light source",
              "Increased disease susceptibility (damp, shaded conditions)",
              "Pale, slightly yellow-green leaf color",
            ].map((sign) => (
              <li key={sign} className="flex items-start gap-2">
                <span className="text-orange-500 font-bold mt-0.5 shrink-0">⚠</span>
                {sign}
              </li>
            ))}
          </ul>
        </Card>

        {/* Why morning sun matters */}
        <SectionHeading id="morning-sun">
          Why Morning Sun Is More Valuable Than Afternoon Sun
        </SectionHeading>
        <Paragraph>
          If you can only give your tomatoes one block of sunlight, choose
          morning. Morning sun does something afternoon sun can&apos;t: it quickly
          dries overnight dew and moisture from leaves.
        </Paragraph>
        <Paragraph>
          Wet leaves in the morning are a breeding ground for early blight,
          septoria leaf spot, and other fungal diseases. Morning sun eliminates
          this moisture before it has time to cause problems. Afternoon sun
          arrives after the leaves are already dry.
        </Paragraph>

        <Card className="bg-yellow-50 border-yellow-200">
          <SubHeading>Best Container Positions (By Sun Direction)</SubHeading>
          <div className="space-y-2 text-sm text-gray-700">
            {[
              {
                dir: "South-facing",
                desc: "Maximum sun all day - ideal in mild climates",
                rating: "⭐⭐⭐⭐⭐",
              },
              {
                dir: "East-facing",
                desc: "Morning sun + afternoon shade - ideal in hot climates",
                rating: "⭐⭐⭐⭐",
              },
              {
                dir: "West-facing",
                desc: "Afternoon sun only - acceptable, but hotter",
                rating: "⭐⭐⭐",
              },
              {
                dir: "North-facing",
                desc: "Too little sun for most tomato varieties",
                rating: "⭐",
              },
            ].map(({ dir, desc, rating }) => (
              <div
                key={dir}
                className="flex justify-between items-start border-b border-yellow-200 pb-2"
              >
                <div>
                  <span className="font-semibold">{dir}</span>
                  <span className="text-gray-500 ml-2">{desc}</span>
                </div>
                <span className="shrink-0 ml-3 text-xs">{rating}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Best varieties for partial shade */}
        <SectionHeading id="partial-shade-varieties">
          Best Tomato Varieties for Less Sun
        </SectionHeading>
        <Paragraph>
          If your growing spot only gets 4–6 hours of sun, choose varieties that
          produce well in lower light. Cherry tomatoes consistently outperform
          large varieties in partial shade.
        </Paragraph>

        <div className="grid sm:grid-cols-2 gap-3 my-4">
          {[
            { name: "Tumbling Tom", type: "Cherry", note: "Tolerates shade better than most" },
            { name: "Sweet 100", type: "Cherry", note: "Prolific even in 5 hours of sun" },
            { name: "Sun Gold", type: "Cherry", note: "Sweet flavor, good partial shade performer" },
            { name: "Patio", type: "Bush/Compact", note: "Bred for container/lower-light growing" },
          ].map(({ name, type, note }) => (
            <div
              key={name}
              className="bg-gray-50 rounded-xl p-3 border border-gray-200"
            >
              <p className="font-bold text-gray-800">{name}</p>
              <p className="text-xs text-green-700 font-medium">{type}</p>
              <p className="text-xs text-gray-500 mt-1">{note}</p>
            </div>
          ))}
        </div>

        {/* Shade cloth */}
        <SectionHeading id="shade-cloth">
          When and How to Use Shade Cloth
        </SectionHeading>
        <Paragraph>
          In extreme heat (above 90–95°F), a 30–40% shade cloth significantly
          helps tomatoes maintain fruit production. It reduces heat stress
          without blocking enough light to hurt photosynthesis.
        </Paragraph>
        <Paragraph>
          Hang the shade cloth over (not touching) plants during the hottest
          afternoon hours - roughly 1–5pm. Remove it in the morning so plants
          get the valuable morning sun. In mild climates, shade cloth is rarely
          necessary.
        </Paragraph>

        <InternalLinks links={relatedLinks} />

        {/* FAQ */}
        <section aria-labelledby="faq-heading" className="mt-8">
          <SectionHeading id="faq-heading">
            Frequently Asked Questions
          </SectionHeading>
          <FAQAccordion items={faqs} />
        </section>

        {/* Affiliate */}
        <section aria-labelledby="tools-heading" className="mt-10">
          <SectionHeading id="tools-heading">
            Recommended Tools for Managing Tomato Sunlight
          </SectionHeading>
          <div className="grid sm:grid-cols-2 gap-4 mt-4">
            <AffiliateCard
              icon="⛱️"
              name="30% Shade Cloth Panel"
              description="Lightweight mesh cloth that reduces heat stress during heatwaves while still allowing enough light for photosynthesis."
              benefit="Protects fruit set when temps exceed 90°F"
              placement="Use over plants 1–5pm on hot days only"
              cta="View on Amazon"
            />
            <AffiliateCard
              icon="📱"
              name="Light Meter / Lux Meter"
              description="An inexpensive digital meter that tells you exactly how many hours of usable light your spot gets - no more guessing."
              benefit="Eliminate guesswork about your growing spot"
              placement="Measure at 9am, 12pm, and 3pm for a full picture"
              cta="View on Amazon"
            />
          </div>
        </section>
      </div>
    </main>
  );
}
