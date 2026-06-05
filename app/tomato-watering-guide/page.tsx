import type { Metadata } from "next";
import { Card, SectionHeading, SubHeading, Paragraph, PinterestHook } from "../components/ui";
import FAQAccordion from "../components/FAQAccordion";
import InternalLinks from "../components/InternalLinks";
import AffiliateCard from "../components/AffiliateCard";
import JsonLd from "../components/JsonLd";
import PinterestBlock from "../components/PinterestBlock";

export const metadata: Metadata = {
  title: "How Often to Water Tomato Plants in Summer (Never Overwater Again)",
  description:
    "How often to water tomato plants in summer - a beginner schedule for containers, grow bags, and in-ground plants. Includes the finger test and overwatering signs.",
  alternates: { canonical: "/tomato-watering-guide" },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How Often to Water Tomato Plants in Summer",
  description:
    "A complete beginner watering guide for tomatoes, covering container vs in-ground schedules, overwatering signs, the finger test, and drip irrigation tips.",
  author: { "@type": "Organization", name: "TomatoGrowGuide" },
  publisher: { "@type": "Organization", name: "TomatoGrowGuide" },
  datePublished: "2025-06-05",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://tomatogrowguide.com/tomato-watering-guide",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How often should I water tomatoes in pots?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In containers, water tomatoes daily or every 1–2 days during summer heat. In a heatwave (above 90°F), you may need to water twice a day. Grow bags dry out faster than plastic pots.",
      },
    },
    {
      "@type": "Question",
      name: "Can you overwater tomatoes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Overwatered tomatoes show yellow leaves starting at the bottom, limp stems despite wet soil, and fungus gnats in the soil. Allow the top inch to dry slightly between waterings.",
      },
    },
    {
      "@type": "Question",
      name: "Is it better to water tomatoes in the morning or evening?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Morning is best. Morning watering dries up by afternoon, reducing fungal disease risk. Evening watering leaves moisture on leaves overnight, which encourages mold and blight.",
      },
    },
    {
      "@type": "Question",
      name: "How do I know if my tomato plant needs water?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Use the finger test: stick your finger 2 inches into the soil. If it feels dry, water now. If still damp, wait. Also watch for slight leaf drooping in the early morning - that's an early sign of drought stress.",
      },
    },
    {
      "@type": "Question",
      name: "Why do my tomatoes crack after watering?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tomatoes crack when they receive a large dose of water after a dry spell. The fruit expands too fast and the skin splits. Consistent daily watering prevents this - avoid letting soil dry completely between waterings.",
      },
    },
    {
      "@type": "Question",
      name: "How much water do tomato plants need per day in summer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Container tomatoes typically need 1-2 gallons per day in summer heat. In-ground plants need deep watering 2-3 times per week (roughly equivalent). The amount varies by plant size, container size, and temperatures - always use the finger test rather than a fixed volume.",
      },
    },
  ],
};

const faqs = [
  {
    q: "How often should I water tomatoes in pots?",
    a: "In containers, water tomatoes daily or every 1–2 days during summer heat. In a heatwave (above 90°F), you may need to water twice a day. Grow bags dry out faster than plastic pots.",
  },
  {
    q: "Can you overwater tomatoes?",
    a: "Yes. Overwatered tomatoes show yellow leaves starting at the bottom, limp stems despite wet soil, and fungus gnats in the soil. Allow the top inch to dry slightly between waterings.",
  },
  {
    q: "Is it better to water tomatoes in the morning or evening?",
    a: "Morning is best. Morning watering dries up by afternoon, reducing fungal disease risk. Evening watering leaves moisture on leaves overnight, which encourages mold and blight.",
  },
  {
    q: "How do I know if my tomato plant needs water?",
    a: "Use the finger test: stick your finger 2 inches into the soil. If it feels dry, water now. If still damp, wait. Also watch for slight leaf drooping in the early morning - that's an early sign of drought stress.",
  },
  {
    q: "Why do my tomatoes crack after watering?",
    a: "Tomatoes crack when they receive a large dose of water after a dry spell. The fruit expands too fast and the skin splits. Consistent daily watering prevents this - avoid letting soil dry completely between waterings.",
  },
  {
    q: "How much water do tomato plants need per day in summer?",
    a: "Container tomatoes typically need 1-2 gallons per day in summer heat. In-ground plants need deep watering 2-3 times per week. The amount varies by plant size, container size, and temperature - always use the finger test rather than a fixed volume.",
  },
];

const relatedLinks = [
  {
    label: "Grow Bags vs Pots - Which Dries Out Faster?",
    href: "/tomato-grow-bags-vs-pots",
    desc: "container choice affects how often you need to water",
  },
  {
    label: "Fix Leggy Tomato Seedlings",
    href: "/leggy-tomato-seedlings-fix",
    desc: "overwatering is a common cause of weak seedlings too",
  },
  {
    label: "Do Tomatoes Need Full Sun All Day?",
    href: "/do-tomatoes-need-full-sun",
    desc: "more sun = faster soil drying = more watering needed",
  },
  {
    label: "Complete Tomato Growing Guide",
    href: "/",
    desc: "hub page covering every beginner topic in one place",
  },
];

export default function WateringGuidePage() {
  return (
    <main className="py-10 px-4">
      <JsonLd data={articleSchema} />
      <JsonLd data={faqSchema} />

      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-3 py-1 rounded-full">
            Beginner Guide
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3 mb-3 leading-tight">
            How Often to Water Tomato Plants in Summer
          </h1>
          <p className="text-gray-500 text-sm">
            6 min read · Updated June 2025
          </p>
          <PinterestBlock
            title="How Often to Water Tomato Plants in Summer - Beginner Schedule"
            description="A simple watering schedule for container and in-ground tomatoes, including the finger test method and signs of overwatering vs underwatering."
          />
          <p className="text-lg text-gray-700 mt-4 leading-relaxed">
            If you want to know how often to water tomato plants in summer,
            the answer depends on your container type, local temperatures, and
            soil. Inconsistent watering is the number one cause of preventable
            tomato problems - blossom end rot, cracked fruit, and early blight
            all trace back to getting this wrong. This guide gives you a clear
            tomato watering schedule for containers, grow bags, and in-ground
            beds.
          </p>
        </div>

        <PinterestHook>
          Best Way to Water Tomatoes Without Accidentally Killing Them
        </PinterestHook>

        {/* Container vs ground */}
        <SectionHeading id="container-vs-ground">
          Container Tomatoes vs In-Ground: The Watering Difference
        </SectionHeading>
        <Paragraph>
          The biggest factor in how often you water is not the weather - it&apos;s
          whether your tomatoes are in containers or in the ground. Containers
          (especially grow bags) dry out dramatically faster than in-ground beds.
        </Paragraph>

        <div className="grid sm:grid-cols-2 gap-4 my-5">
          <Card>
            <SubHeading>Containers &amp; Grow Bags</SubHeading>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-500 shrink-0">💧</span>
                <span>
                  <strong>Hot weather (85°F+):</strong> water daily, sometimes
                  twice
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 shrink-0">💧</span>
                <span>
                  <strong>Mild summer weather:</strong> every 1–2 days
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 shrink-0">💧</span>
                <span>
                  <strong>Grow bags specifically:</strong> dry faster than
                  plastic pots - check daily regardless
                </span>
              </li>
            </ul>
          </Card>
          <Card>
            <SubHeading>In the Ground</SubHeading>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-500 shrink-0">💧</span>
                <span>
                  <strong>Standard summer:</strong> 2–3 times per week deeply
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 shrink-0">💧</span>
                <span>
                  <strong>Heatwave (95°F+):</strong> every other day minimum
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 shrink-0">💧</span>
                <span>
                  <strong>With mulch:</strong> reduce frequency by 25–30% -
                  mulch dramatically cuts evaporation
                </span>
              </li>
            </ul>
          </Card>
        </div>

        {/* Signs of overwatering */}
        <SectionHeading id="overwatering-signs">
          Signs You&apos;re Overwatering Your Tomatoes
        </SectionHeading>
        <PinterestHook>
          Overwatering Tomatoes Looks Exactly Like Underwatering - Here&apos;s How to Tell
        </PinterestHook>
        <Paragraph>
          Overwatering is the most common beginner mistake. Ironically, an
          overwatered tomato wilts just like an underwatered one - which causes
          many beginners to add more water and make things worse.
        </Paragraph>

        <Card className="bg-red-50 border-red-200 mb-4">
          <SubHeading>Overwatering Warning Signs</SubHeading>
          <ul className="space-y-2 text-sm text-gray-700">
            {[
              "Yellow leaves starting from the bottom of the plant",
              "Soil that stays wet for more than 3 days after watering",
              "Fungus gnats (tiny flies hovering near the soil)",
              "Limp, wilted stems despite obviously wet soil",
              "Brown, mushy roots if you pull the plant out",
            ].map((sign) => (
              <li key={sign} className="flex items-start gap-2">
                <span className="text-red-500 font-bold mt-0.5 shrink-0">⚠</span>
                {sign}
              </li>
            ))}
          </ul>
        </Card>

        {/* Signs of underwatering */}
        <SectionHeading id="underwatering-signs">
          Signs You&apos;re Underwatering Your Tomatoes
        </SectionHeading>

        <Card className="bg-orange-50 border-orange-200 mb-4">
          <SubHeading>Underwatering Warning Signs</SubHeading>
          <ul className="space-y-2 text-sm text-gray-700">
            {[
              "Wilting in the morning (not just afternoon heat-related wilting)",
              "Dry, cracked, or pulling-away-from-pot-walls soil",
              "Crispy brown leaf edges",
              "Blossom drop - flowers fall before fruit forms",
              "Fruit cracking after a big watering following drought",
            ].map((sign) => (
              <li key={sign} className="flex items-start gap-2">
                <span className="text-orange-500 font-bold mt-0.5 shrink-0">⚠</span>
                {sign}
              </li>
            ))}
          </ul>
        </Card>

        {/* Finger test */}
        <SectionHeading id="finger-test">
          The Finger Test: Simplest Watering Method
        </SectionHeading>
        <Paragraph>
          Forget schedules. The finger test is the most reliable watering
          method for beginners, and it works for every container and every
          weather condition.
        </Paragraph>

        <Card className="bg-blue-50 border-blue-200">
          <SubHeading>How to Do the Finger Test</SubHeading>
          <ol className="space-y-3 text-sm text-gray-700 list-none">
            {[
              "Push your index finger 2 inches (to the second knuckle) into the soil",
              "If it feels dry at that depth → water now, thoroughly",
              "If it feels slightly moist → check again in a few hours",
              "If it feels wet and cool → don't water, check again tomorrow",
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="bg-blue-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
          <p className="text-xs text-blue-700 mt-3 font-medium bg-blue-100 rounded-lg px-3 py-2">
            Key principle: water deeply but less often. You want water to reach
            the bottom roots, not just wet the surface.
          </p>
        </Card>

        {/* Morning vs evening */}
        <SectionHeading id="morning-vs-evening">
          Morning vs Evening Watering - Which Is Better?
        </SectionHeading>
        <Paragraph>
          Always water in the morning if possible. Morning water soaks in before
          the heat of the day and any splashed leaf moisture dries up quickly -
          reducing the risk of fungal diseases like early blight.
        </Paragraph>
        <Paragraph>
          Evening watering is the second-worst time (night is worst). Water
          sitting on leaves overnight creates ideal conditions for mold, blight,
          and powdery mildew. If you must water in the evening, water at the
          base only and avoid splashing leaves.
        </Paragraph>

        {/* Drip irrigation */}
        <SectionHeading id="drip-irrigation">
          Drip Irrigation for Container Tomatoes
        </SectionHeading>
        <Paragraph>
          If you can&apos;t water daily in summer - vacations, work, or hot
          weather - a basic drip irrigation kit solves the problem entirely. A
          simple gravity-fed or timer-controlled drip system delivers consistent
          water directly to the root zone while you&apos;re away.
        </Paragraph>
        <Paragraph>
          Even a basic $20 drip kit dramatically outperforms hand watering for
          consistency. Consistent soil moisture is the single biggest factor in
          preventing cracked fruit, blossom end rot, and growth stunts.
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
            Recommended Watering Tools
          </SectionHeading>
          <Paragraph>
            The right tools make consistent watering much easier - especially in
            summer heat.
          </Paragraph>
          <div className="grid sm:grid-cols-2 gap-4 mt-4">
            <AffiliateCard
              icon="💧"
              name="Long-Spout Watering Can (2 Gallon)"
              description="A long spout lets you water at the base without splashing leaves. Essential for container tomatoes."
              benefit="Precision base watering reduces fungal disease"
              placement="Best for patios and balconies with 2–6 plants"
              cta="View on Amazon"
            />
            <AffiliateCard
              icon="🚿"
              name="Drip Irrigation Kit for Containers"
              description="Timer-controlled drip system for up to 10 containers. Set it once and plants stay consistently watered."
              benefit="Prevents watering inconsistency in heatwaves"
              placement="Essential if you travel or work long hours"
              cta="View on Amazon"
            />
          </div>
        </section>
      </div>
    </main>
  );
}
