import type { Metadata } from "next";
import { Card, SectionHeading, SubHeading, Paragraph, PinterestHook } from "../components/ui";
import FAQAccordion from "../components/FAQAccordion";
import InternalLinks from "../components/InternalLinks";
import AffiliateCard from "../components/AffiliateCard";
import JsonLd from "../components/JsonLd";
import PinterestBlock from "../components/PinterestBlock";

export const metadata: Metadata = {
  title: "Why Are My Tomato Seedlings Leggy? (4-Step Fix That Works)",
  description:
    "Why tomato seedlings get leggy and how to fix it - 4 proven steps including burying the stem, improving light, adding airflow, and transplanting tips.",
  alternates: { canonical: "/leggy-tomato-seedlings-fix" },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Why Are My Tomato Seedlings Leggy? (4-Step Fix That Works)",
  description:
    "The complete guide to diagnosing and fixing leggy tomato seedlings, including causes, step-by-step fixes, and prevention tips for next season.",
  author: { "@type": "Organization", name: "TomatoGrowGuide" },
  publisher: { "@type": "Organization", name: "TomatoGrowGuide" },
  datePublished: "2025-06-05",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://tomatogrowguide.com/leggy-tomato-seedlings-fix",
  },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Fix Leggy Tomato Seedlings",
  description:
    "A 4-step method to fix leggy tomato seedlings using better light, stem burying, fan airflow, and correct timing.",
  step: [
    {
      "@type": "HowToStep",
      name: "Improve the light source",
      text: "Move seedlings to your brightest south-facing window, or lower a grow light to 2–4 inches above the seedling tops. Rotate trays daily for even light exposure.",
    },
    {
      "@type": "HowToStep",
      name: "Bury the stem deeper when transplanting",
      text: "Tomatoes grow roots along any buried stem. If your seedling is 6 inches tall, bury 4 inches of the stem. The plant will develop a strong, deep root system.",
    },
    {
      "@type": "HowToStep",
      name: "Add airflow with a small fan",
      text: "Run a small oscillating fan near seedlings for 2–4 hours daily. The gentle movement triggers the stem to thicken and strengthen - mimicking outdoor wind.",
    },
    {
      "@type": "HowToStep",
      name: "Correct your seed starting timing",
      text: "Start tomato seeds 6–8 weeks before your last frost date. Starting earlier means seedlings sit indoors under low light for too long, causing legginess before they can go outside.",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Why are my tomato seedlings tall and thin?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tall, thin (leggy) tomato seedlings are caused by insufficient light. The seedling stretches upward searching for a stronger light source, resulting in a long, weak stem that flops over.",
      },
    },
    {
      "@type": "Question",
      name: "Can you save already leggy tomato seedlings?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. When transplanting, bury the stem deep - up to the lowest set of leaves (cotyledons). Tomatoes grow roots along any buried stem, so the plant will recover and develop a strong root system.",
      },
    },
    {
      "@type": "Question",
      name: "How do I prevent leggy tomato seedlings?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Start seeds on time (6–8 weeks before last frost), provide 14–16 hours of light daily (grow light or bright window), keep temperatures cool (60–65°F at night), and run a fan for 2 hours daily.",
      },
    },
    {
      "@type": "Question",
      name: "How much light do tomato seedlings need?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tomato seedlings need 14–16 hours of light per day. A south-facing window in winter is rarely enough - a basic T5 or LED grow light kept 2–4 inches above seedlings is far more effective.",
      },
    },
    {
      "@type": "Question",
      name: "Does temperature cause leggy tomato seedlings?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "High temperatures combined with low light can accelerate legginess. Seedlings grown too warm (above 75°F) in low light stretch even faster. Aim for 65–70°F daytime and 60°F at night for compact seedlings.",
      },
    },
    {
      "@type": "Question",
      name: "Why are my tomato seedlings stretching and falling over?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tomato seedlings stretch and fall over when they are not getting enough light. The plant reaches toward any light source it can find, creating a long weak stem. Move your seedlings to a brighter spot or lower a grow light to 2-4 inches above the tops.",
      },
    },
  ],
};

const faqs = [
  {
    q: "Why are my tomato seedlings tall and thin?",
    a: "Tall, thin (leggy) tomato seedlings are caused by insufficient light. The seedling stretches upward searching for a stronger light source, resulting in a long, weak stem that flops over.",
  },
  {
    q: "Can you save already leggy tomato seedlings?",
    a: "Yes. When transplanting, bury the stem deep - up to the lowest set of leaves (cotyledons). Tomatoes grow roots along any buried stem, so the plant will recover and develop a strong root system.",
  },
  {
    q: "How do I prevent leggy tomato seedlings?",
    a: "Start seeds on time (6–8 weeks before last frost), provide 14–16 hours of light daily (grow light or bright window), keep temperatures cool (60–65°F at night), and run a fan for 2 hours daily.",
  },
  {
    q: "How much light do tomato seedlings need?",
    a: "Tomato seedlings need 14–16 hours of light per day. A south-facing window in winter is rarely enough - a basic T5 or LED grow light kept 2–4 inches above seedlings is far more effective.",
  },
  {
    q: "Does temperature cause leggy tomato seedlings?",
    a: "High temperatures combined with low light can accelerate legginess. Seedlings grown too warm (above 75°F) in low light stretch even faster. Aim for 65–70°F daytime and 60°F at night for compact seedlings.",
  },
  {
    q: "Why are my tomato seedlings stretching and falling over?",
    a: "Tomato seedlings stretch and fall over when they are not getting enough light. The plant reaches toward any light source it can find, creating a long weak stem. Move seedlings to a brighter spot or lower a grow light to 2-4 inches above the tops.",
  },
];

const relatedLinks = [
  {
    label: "Grow Bags vs Pots - Where to Transplant Your Seedlings",
    href: "/tomato-grow-bags-vs-pots",
    desc: "once your seedlings are ready, choose the right container",
  },
  {
    label: "How Often to Water Tomato Plants in Summer",
    href: "/tomato-watering-guide",
    desc: "overwatering also weakens young tomato plants",
  },
  {
    label: "Do Tomatoes Need Full Sun All Day?",
    href: "/do-tomatoes-need-full-sun",
    desc: "light outside matters as much as light indoors",
  },
  {
    label: "Complete Tomato Growing Guide",
    href: "/",
    desc: "hub page covering every beginner topic in one place",
  },
];

export default function LeggySeedlingsPage() {
  return (
    <main className="py-10 px-4">
      <JsonLd data={articleSchema} />
      <JsonLd data={howToSchema} />
      <JsonLd data={faqSchema} />

      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <span className="text-xs font-semibold text-red-700 bg-red-50 px-3 py-1 rounded-full">
            Growing Problems
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3 mb-3 leading-tight">
            Why Are My Tomato Seedlings Leggy?
            <br />
            <span className="text-green-700">(4-Step Fix That Works)</span>
          </h1>
          <p className="text-gray-500 text-sm">
            7 min read · Updated June 2025
          </p>
          <PinterestBlock
            title="Why Are My Tomato Seedlings Leggy? Fix It in 24 Hours"
            description="The #1 cause of leggy tomato seedlings and the 4-step fix - better light, stem burying, fan airflow, and correct seed timing."
          />
          <p className="text-lg text-gray-700 mt-4 leading-relaxed">
            If your tomato seedlings are leggy - with tall, spindly stems
            that can&apos;t hold themselves upright - you&apos;re dealing with the most
            common beginner seed-starting problem. Understanding why tomato
            seedlings get leggy is the first step. The good news: it&apos;s almost
            always one cause, and the fix can be started in under 24 hours.
          </p>
        </div>

        <PinterestHook>
          Fix Leggy Tomato Seedlings in 24 Hours - 4 Steps Every Beginner Needs to Know
        </PinterestHook>

        {/* What does leggy mean */}
        <SectionHeading id="what-is-leggy">
          What Does &ldquo;Leggy&rdquo; Mean for Tomato Seedlings?
        </SectionHeading>
        <Paragraph>
          A leggy seedling has a stem that&apos;s disproportionately long and thin
          relative to the size of its leaves. The plant looks like it&apos;s trying to
          reach for something. It usually flops over under its own weight and
          struggles to stand upright.
        </Paragraph>
        <Paragraph>
          Healthy tomato seedlings are short and stocky - a thick, sturdy stem
          with leaves that are close together. If you can stand your seedling
          up and it holds itself straight without leaning, it&apos;s doing well.
        </Paragraph>

        {/* Why seedlings get leggy */}
        <SectionHeading id="causes">
          Why Tomato Seedlings Get Leggy
        </SectionHeading>
        <PinterestHook>
          The #1 Reason Tomato Seedlings Get Leggy (It&apos;s Not What You Think)
        </PinterestHook>

        <div className="space-y-3 my-5">
          {[
            {
              icon: "💡",
              cause: "Not enough light",
              detail:
                "The most common cause by far. Seedlings on a windowsill receive far less light than they need - especially in late winter and early spring. They stretch upward searching for more.",
              severity: "Very Common",
              color: "border-red-200 bg-red-50",
            },
            {
              icon: "🌡️",
              cause: "Too much heat",
              detail:
                "High temperatures (above 75°F) combined with low light accelerate stretching. Cool temperatures produce compact seedlings.",
              severity: "Common",
              color: "border-orange-200 bg-orange-50",
            },
            {
              icon: "📅",
              cause: "Started seeds too early",
              detail:
                "Starting 10–12 weeks before last frost means seedlings spend too long indoors under low light. They get leggy before they can go outside.",
              severity: "Common",
              color: "border-orange-200 bg-orange-50",
            },
            {
              icon: "🪴",
              cause: "Overcrowding in seed tray",
              detail:
                "Seedlings packed too close compete for light and grow tall trying to outcompete neighbors.",
              severity: "Less Common",
              color: "border-yellow-200 bg-yellow-50",
            },
          ].map(({ icon, cause, detail, severity, color }) => (
            <div
              key={cause}
              className={`border-2 rounded-xl p-4 ${color}`}
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="text-lg" aria-hidden="true">{icon}</span>
                <span className="font-bold text-gray-800">{cause}</span>
                <span className="text-xs text-gray-500 ml-auto">{severity}</span>
              </div>
              <p className="text-sm text-gray-700">{detail}</p>
            </div>
          ))}
        </div>

        {/* The 4-step fix */}
        <SectionHeading id="fix-steps">
          How to Fix Leggy Tomato Seedlings (4 Steps)
        </SectionHeading>
        <Paragraph>
          These steps work both as a fix for leggy seedlings you already have,
          and as a prevention system for seedlings you haven&apos;t started yet.
        </Paragraph>

        <div className="space-y-4 my-5">
          {[
            {
              step: 1,
              title: "Improve the Light Source",
              icon: "💡",
              content:
                "Move your seed tray to the brightest south-facing window in your home. Rotate it daily so all sides get equal exposure. If you have a grow light, lower it to 2–4 inches above the seedling tops - most beginners keep lights too far away.",
              tip: "A basic LED grow light ($25–40) makes a bigger difference than any other investment for seed starting.",
            },
            {
              step: 2,
              title: "Bury the Stem Deep When Transplanting",
              icon: "🌱",
              content:
                "This is the most important rescue technique. Tomatoes are unique - they grow roots all along any part of the stem that gets buried. If your seedling is 6 inches tall, bury 4–5 inches of the stem, leaving only the top 1–2 inches with leaves above ground. The plant will root deeply and develop tremendous strength.",
              tip: "You can bury up to the lowest set of leaves (cotyledons). The buried stem becomes roots within days.",
            },
            {
              step: 3,
              title: "Add Airflow With a Small Fan",
              icon: "🌬️",
              content:
                "Run a small oscillating fan near your seedlings for 2–4 hours per day. The gentle movement of the stem triggers a process where the plant strengthens its cell walls to resist the wind - exactly like outdoor seedlings. This technique, known as thigmomorphogenesis, produces noticeably stockier stems within a week.",
              tip: "Any small desk fan works. You don't need a breeze - just enough movement to gently sway the seedlings.",
            },
            {
              step: 4,
              title: "Correct Your Seed Starting Timing",
              icon: "📅",
              content:
                "If you haven't started seeds yet, this is the most important fix. Start tomatoes 6–8 weeks before your last frost date - not 10–12 weeks. Check your local last frost date online, count back 6–8 weeks, and start then.",
              tip: "Starting too early is worse than starting on time. A slightly younger, stocky plant will outperform an older, leggy one every time.",
            },
          ].map(({ step, title, icon, content, tip }) => (
            <Card key={step}>
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-green-700 text-white font-extrabold w-8 h-8 rounded-full flex items-center justify-center text-sm shrink-0">
                  {step}
                </span>
                <span className="text-lg" aria-hidden="true">{icon}</span>
                <h3 className="font-bold text-gray-800">{title}</h3>
              </div>
              <p className="text-sm text-gray-700 mb-3">{content}</p>
              <p className="text-xs text-green-700 font-medium bg-green-50 rounded-lg px-3 py-2">
                💡 {tip}
              </p>
            </Card>
          ))}
        </div>

        {/* Saving leggy seedlings */}
        <SectionHeading id="save-leggy">
          Can You Save Already Leggy Seedlings?
        </SectionHeading>
        <Paragraph>
          Yes - and tomatoes are particularly forgiving because of their ability
          to root from the buried stem. When you transplant a leggy seedling
          into its final container, dig a deep hole or trench and lay the stem
          sideways if needed. The entire buried portion will sprout roots.
        </Paragraph>
        <Card className="bg-green-50 border-green-200">
          <SubHeading>Trench Planting for Very Leggy Seedlings</SubHeading>
          <Paragraph>
            For extremely leggy seedlings, dig a shallow trench at an angle
            instead of a straight-down hole. Lay the stem along the trench so
            most of it is buried horizontally. Only the top few inches with
            leaves stick up. The entire buried stem becomes roots.
          </Paragraph>
          <p className="text-sm text-green-800 font-medium">
            This technique saves seedlings that look unsalvageable. Give it 2
            weeks and the plant will be indistinguishable from a healthy one.
          </p>
        </Card>

        {/* Prevention */}
        <SectionHeading id="prevention">
          How to Prevent Leggy Seedlings Next Season
        </SectionHeading>

        <div className="grid sm:grid-cols-2 gap-3 my-4">
          {[
            {
              icon: "📅",
              tip: "Start seeds 6–8 weeks before last frost (not earlier)",
            },
            {
              icon: "💡",
              tip: "Use a grow light - place it 2–4 inches above seedlings",
            },
            {
              icon: "🌡️",
              tip: "Keep nighttime temps cool: 60–65°F promotes compact growth",
            },
            {
              icon: "🌬️",
              tip: "Run a fan 2–4 hours daily to strengthen stems",
            },
            {
              icon: "🪴",
              tip: "Give each seedling 2–3 inches of space - don't overcrowd",
            },
            {
              icon: "⏰",
              tip: "Keep lights on 14–16 hours/day on a timer for consistency",
            },
          ].map(({ icon, tip }) => (
            <div
              key={tip}
              className="flex items-start gap-3 bg-gray-50 rounded-xl p-3"
            >
              <span className="text-xl" aria-hidden="true">{icon}</span>
              <p className="text-sm text-gray-700">{tip}</p>
            </div>
          ))}
        </div>

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
            Recommended Tools for Healthy Seedlings
          </SectionHeading>
          <Paragraph>
            The right tools prevent leggy seedlings from happening in the first
            place.
          </Paragraph>
          <div className="grid sm:grid-cols-2 gap-4 mt-4">
            <AffiliateCard
              icon="💡"
              name="LED Grow Light for Seedlings"
              description="A full-spectrum LED panel that provides the intensity seedlings need. Place 2–4 inches above seedlings on a 16-hour timer."
              benefit="Eliminates the #1 cause of leggy seedlings"
              placement="Essential for indoor seed starting in winter or spring"
              cta="View on Amazon"
            />
            <AffiliateCard
              icon="🌬️"
              name="Small Oscillating Desk Fan"
              description="A compact 6-inch fan is all you need to strengthen seedling stems with daily airflow."
              benefit="Produces stockier, stronger stems in 1 week"
              placement="Place 2 feet away and run 2–4 hours daily"
              cta="View on Amazon"
            />
          </div>
        </section>
      </div>
    </main>
  );
}
