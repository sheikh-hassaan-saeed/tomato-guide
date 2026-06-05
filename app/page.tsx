import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Card, SectionHeading, SubHeading, Paragraph, PinterestHook } from "./components/ui";
import FAQAccordion from "./components/FAQAccordion";
import AffiliateCard from "./components/AffiliateCard";
import JsonLd from "./components/JsonLd";

export const metadata: Metadata = {
  title: "Complete Tomato Growing Guide (Pots vs Grow Bags + Care Tips)",
  description:
    "Learn how to grow tomatoes in pots or grow bags, how often to water in summer, fix leggy seedlings, and set up your first container garden - beginner-friendly.",
  alternates: { canonical: "/" },
};

const homeSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "TomatoGrowGuide",
  description:
    "Beginner tomato growing guides covering containers, watering, seedling problems, and sunlight.",
  url: "https://tomatogrowguide.com",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do tomatoes need full sun all day?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Tomatoes need 6–8 hours of direct sun daily. In very hot climates, afternoon shade actually helps fruit set. Morning sun is most important because it dries leaves and reduces disease risk.",
      },
    },
    {
      "@type": "Question",
      name: "Are grow bags better than pots for tomatoes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Grow bags promote healthier roots through air pruning and drain better than pots. The downside: they dry out faster and need more frequent watering in hot weather.",
      },
    },
    {
      "@type": "Question",
      name: "Why are my tomato seedlings leggy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Leggy seedlings are caused by insufficient light. The plant stretches toward any light source and grows a long, weak stem. Fix it by improving light, adding a small fan for stem strength, and burying the stem deep when transplanting.",
      },
    },
    {
      "@type": "Question",
      name: "How often do you water tomatoes in summer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In containers: daily or every 1–2 days in summer heat. In the ground: 2–3 times per week with deep watering. Use the finger test - if the soil is dry 2 inches down, water now.",
      },
    },
  ],
};

const guidesHub = [
  {
    icon: "🛍️",
    title: "Grow Bags vs Pots",
    desc: "Which container actually produces better tomatoes? The real comparison.",
    href: "/tomato-grow-bags-vs-pots",
    tag: "Beginner Guide",
  },
  {
    icon: "💧",
    title: "Tomato Watering Guide",
    desc: "How often to water in summer - without killing your plants.",
    href: "/tomato-watering-guide",
    tag: "Beginner Guide",
  },
  {
    icon: "🌱",
    title: "Fix Leggy Seedlings",
    desc: "Why seedlings get leggy and the 4-step fix that actually works.",
    href: "/leggy-tomato-seedlings-fix",
    tag: "Growing Problems",
  },
  {
    icon: "☀️",
    title: "Full Sun Guide",
    desc: "Do tomatoes really need sun all day? The truth might surprise you.",
    href: "/do-tomatoes-need-full-sun",
    tag: "Beginner Guide",
  },
];

const affiliateProducts = [
  {
    icon: "🛍️",
    name: "Fabric Grow Bags (5–20 Gallon)",
    description:
      "Breathable fabric bags that air-prune roots for a healthier plant. Available in multi-packs.",
    benefit: "Better root health than any plastic pot",
    placement: "Best placed on patio or balcony",
    cta: "View on Amazon",
  },
  {
    icon: "🪝",
    name: "Heavy-Duty Tomato Cages",
    description:
      "Strong wire cages that hold up to indeterminate vines 5+ feet tall. Avoid lightweight flimsy ones.",
    benefit: "Prevents sprawling and stem breakage",
    placement: "Install when planting - easier than staking later",
    cta: "View on Amazon",
  },
  {
    icon: "🌿",
    name: "Premium Vegetable Potting Mix",
    description:
      "Well-draining mix formulated for containers. Look for one with perlite already included.",
    benefit: "Prevents root rot in containers",
    placement: "Use as primary growing medium - never garden soil",
    cta: "View on Amazon",
  },
  {
    icon: "💧",
    name: "Watering Can or Drip Kit",
    description:
      "A long-spout can for precision base watering, or a simple drip kit for hands-off consistency.",
    benefit: "Consistent watering prevents blossom end rot",
    placement: "Drip kits especially useful in heatwaves",
    cta: "View on Amazon",
  },
];

const homeFAQs = [
  {
    q: "Do tomatoes need full sun all day?",
    a: "No, tomatoes need 6–8 hours of direct sun daily - not necessarily all day. In very hot climates, afternoon shade actually helps fruit set. Morning sun is most important because it dries leaves and reduces disease risk.",
  },
  {
    q: "Are grow bags better than pots for tomatoes?",
    a: "Grow bags promote healthier root systems through air pruning, which prevents roots from circling. They drain better and are lighter than pots. The downside is they dry out faster and need more frequent watering in hot weather.",
  },
  {
    q: "Why are my tomato seedlings leggy?",
    a: "Leggy seedlings are caused by not enough light. The plant stretches toward any light source and grows a long, weak stem. Fix it by improving light, adding a fan for stem strength, and burying the stem deep when transplanting.",
  },
  {
    q: "How often do you water tomatoes in summer?",
    a: "In containers: daily or every 1–2 days in summer heat. In the ground: 2–3 times per week with deep watering. Use the finger test - if the soil is dry 2 inches down, water. Always water at the base, not the leaves.",
  },
];

// ─── Sections ──────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative text-white overflow-hidden min-h-[480px] sm:min-h-[540px] flex items-center py-20 px-4">
      {/* Background photo */}
      <Image
        src="/hero-tomatoes.webp"
        alt="Fresh ripe tomatoes with basil leaves on a rustic wooden table"
        fill
        className="object-cover object-center"
        priority
        quality={85}
      />
      {/* Dark gradient overlay - darker on edges, slightly lighter in centre */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/70"
        aria-hidden="true"
      />
      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center w-full">
        <span className="inline-block bg-white/15 text-white border border-white/25 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 backdrop-blur-sm tracking-wide">
          Beginner Friendly
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-1 mb-5 leading-tight drop-shadow-md">
          Complete Tomato Growing Guide
          <br />
          <span className="text-green-300">(Pots vs Grow Bags + Care Tips)</span>
        </h1>
        <p className="text-lg text-white/90 mb-5 max-w-2xl mx-auto leading-relaxed drop-shadow">
          Whether you&apos;re growing on a balcony or in a backyard, this hub covers
          everything a beginner needs: choosing containers, watering schedules,
          fixing common problems, and more.
        </p>
        <p className="text-sm text-white/60 italic">
          Based on common gardening problems and real beginner mistakes.
        </p>
      </div>
    </section>
  );
}

function GuidesHub() {
  return (
    <section className="py-10 px-4 bg-gray-50" aria-labelledby="hub-heading">
      <div className="max-w-3xl mx-auto">
        <h2
          id="hub-heading"
          className="text-xl font-bold text-gray-800 mb-1 text-center"
        >
          Beginner Guides
        </h2>
        <p className="text-gray-500 text-sm text-center mb-6">
          Each guide goes deep on one topic so you get the full answer.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {guidesHub.map(({ icon, title, desc, href, tag }) => (
            <Link key={href} href={href} className="group block">
              <div className="bg-white border border-gray-200 rounded-2xl p-5 h-full hover:border-green-400 hover:shadow-md transition-all">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl" aria-hidden="true">
                    {icon}
                  </span>
                  <span className="text-xs font-semibold text-green-700 bg-green-50 px-2 py-0.5 rounded-full">
                    {tag}
                  </span>
                </div>
                <p className="font-bold text-gray-800 mb-1 group-hover:text-green-800">
                  {title}
                </p>
                <p className="text-sm text-gray-500">{desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuickDecision() {
  return (
    <section
      aria-labelledby="decision-heading"
      className="py-10 px-4"
    >
      <div className="max-w-3xl mx-auto">
        <SectionHeading id="decision-heading">
          Grow Bags vs Pots for Tomatoes - What Should You Choose?
        </SectionHeading>
        <PinterestHook>
          Grow Bags vs Pots - The Real Beginner Mistake Most People Make
        </PinterestHook>
        <Paragraph>
          Both work well for growing tomatoes. The right pick depends on your
          setup and how much time you have to water.
        </Paragraph>

        <div className="grid sm:grid-cols-2 gap-4 mt-4">
          <div className="border-2 border-green-200 bg-green-50 rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl" aria-hidden="true">🪴</span>
              <h3 className="text-lg font-bold text-green-800">
                Plastic or Terracotta Pots
              </h3>
            </div>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold mt-0.5">✓</span>
                More stable - won&apos;t tip over in wind
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold mt-0.5">✓</span>
                Holds moisture longer - less frequent watering
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold mt-0.5">✓</span>
                Easy to reuse season after season
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold mt-0.5">✗</span>
                Roots can get too hot in summer
              </li>
            </ul>
            <p className="mt-3 text-xs text-green-700 font-medium bg-green-100 rounded-lg px-3 py-2">
              Best for: balconies, windy spots, or if you forget to water
            </p>
          </div>

          <div className="border-2 border-orange-200 bg-orange-50 rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl" aria-hidden="true">🛍️</span>
              <h3 className="text-lg font-bold text-orange-800">
                Fabric Grow Bags
              </h3>
            </div>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold mt-0.5">✓</span>
                Air prunes roots - healthier root system
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold mt-0.5">✓</span>
                Lightweight and easy to store in winter
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold mt-0.5">✓</span>
                Better drainage - less risk of root rot
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold mt-0.5">✗</span>
                Dries out faster - water more often
              </li>
            </ul>
            <p className="mt-3 text-xs text-orange-700 font-medium bg-orange-100 rounded-lg px-3 py-2">
              Best for: patios, storage convenience, serious root health
            </p>
          </div>
        </div>

        <Card className="mt-5 bg-yellow-50 border-yellow-200">
          <p className="text-sm text-yellow-800">
            <span className="font-bold">Quick verdict:</span> For most
            beginners, a 10–15 gallon grow bag is the best starting point.
            It&apos;s affordable, promotes healthy roots, and folds flat after
            the season.
          </p>
        </Card>

        <div className="mt-4 text-sm">
          <Link
            href="/tomato-grow-bags-vs-pots"
            className="text-green-700 font-semibold hover:underline"
          >
            → Read the complete Grow Bags vs Pots guide
          </Link>
        </div>
      </div>
    </section>
  );
}

function Sunlight() {
  return (
    <section
      aria-labelledby="sunlight-heading"
      className="py-10 px-4 bg-yellow-50"
    >
      <div className="max-w-3xl mx-auto">
        <SectionHeading id="sunlight-heading">
          Do Tomato Plants Need Full Sun All Day?
        </SectionHeading>
        <PinterestHook>
          Your Tomatoes Might Be Getting Too Much Sun - Here&apos;s What to Do
        </PinterestHook>
        <Paragraph>
          Tomatoes love sun, but they don&apos;t need it every single hour.
          Here&apos;s what actually matters.
        </Paragraph>

        <div className="grid sm:grid-cols-3 gap-4 my-5">
          <Card className="text-center">
            <div className="text-3xl mb-2" aria-hidden="true">☀️</div>
            <h3 className="font-bold text-green-800 mb-1">6–8 Hours</h3>
            <p className="text-sm text-gray-600">
              Ideal daily sun for healthy plants and good fruit production
            </p>
          </Card>
          <Card className="text-center">
            <div className="text-3xl mb-2" aria-hidden="true">⚠️</div>
            <h3 className="font-bold text-orange-700 mb-1">Too Much Heat</h3>
            <p className="text-sm text-gray-600">
              Afternoon sun above 95°F can cause flower drop and stress
            </p>
          </Card>
          <Card className="text-center">
            <div className="text-3xl mb-2" aria-hidden="true">🌤️</div>
            <h3 className="font-bold text-blue-700 mb-1">Afternoon Shade</h3>
            <p className="text-sm text-gray-600">
              In hot climates, a little shade helps tomatoes set fruit
            </p>
          </Card>
        </div>

        <Paragraph>
          Morning sun is the most valuable. It dries dew off leaves quickly,
          reducing fungal disease risk. Cherry tomatoes tolerate partial shade
          better than large beefsteak varieties.
        </Paragraph>

        <div className="mt-4 text-sm">
          <Link
            href="/do-tomatoes-need-full-sun"
            className="text-green-700 font-semibold hover:underline"
          >
            → Read the complete Sunlight Guide
          </Link>
        </div>
      </div>
    </section>
  );
}

function Watering() {
  return (
    <section aria-labelledby="watering-heading" className="py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <SectionHeading id="watering-heading">
          How Often to Water Tomatoes in Summer
        </SectionHeading>
        <PinterestHook>
          Best Way to Water Tomatoes Without Overwatering Them
        </PinterestHook>
        <Paragraph>
          Inconsistent watering is one of the top causes of problems -
          including blossom end rot and cracked fruit.
        </Paragraph>

        <div className="grid sm:grid-cols-2 gap-4 my-5">
          <Card>
            <SubHeading>In Pots or Grow Bags</SubHeading>
            <p className="text-gray-700 text-sm mb-3">
              Containers dry out quickly, especially in summer heat.
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <span className="text-blue-500" aria-hidden="true">💧</span>
                Water <strong>daily</strong> during hot weather (above 85°F)
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-500" aria-hidden="true">💧</span>
                Every <strong>1–2 days</strong> in mild summer weather
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-500" aria-hidden="true">💧</span>
                Grow bags dry faster - may need twice daily in a heatwave
              </li>
            </ul>
          </Card>
          <Card>
            <SubHeading>In the Ground</SubHeading>
            <p className="text-gray-700 text-sm mb-3">
              Soil retains moisture longer than containers.
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <span className="text-blue-500" aria-hidden="true">💧</span>
                Water <strong>2–3 times per week</strong> deeply
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-500" aria-hidden="true">💧</span>
                Water at the base - avoid wetting leaves
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-500" aria-hidden="true">💧</span>
                Mulch reduces evaporation significantly
              </li>
            </ul>
          </Card>
        </div>

        <Card className="bg-blue-50 border-blue-200">
          <SubHeading>The Finger Test Method</SubHeading>
          <Paragraph>
            Not sure if your plant needs water? Stick your finger 2 inches into
            the soil. If it feels dry, water now. If still damp, wait another
            day. This beats any fixed schedule.
          </Paragraph>
          <p className="text-sm text-blue-800 font-medium">
            Rule of thumb: water deeply and less often. Deep watering
            encourages roots to grow downward.
          </p>
        </Card>

        <div className="mt-4 text-sm">
          <Link
            href="/tomato-watering-guide"
            className="text-green-700 font-semibold hover:underline"
          >
            → Read the complete Watering Guide
          </Link>
        </div>
      </div>
    </section>
  );
}

function LeggySeedlings() {
  return (
    <section
      aria-labelledby="leggy-heading"
      className="py-10 px-4 bg-red-50"
    >
      <div className="max-w-3xl mx-auto">
        <SectionHeading id="leggy-heading">
          Why Are My Tomato Seedlings Leggy?
        </SectionHeading>
        <PinterestHook>
          Fix Leggy Tomato Seedlings in 24 Hours With This Simple Trick
        </PinterestHook>
        <Paragraph>
          Leggy seedlings - tall, thin stems that flop over - are one of the
          most common beginner problems. The good news: it&apos;s fixable.
        </Paragraph>

        <Card className="mb-4 border-red-200 bg-white">
          <SubHeading>The Cause: Not Enough Light</SubHeading>
          <Paragraph>
            When seedlings don&apos;t get enough light, they stretch upward
            trying to reach a light source. The stem grows long and weak instead
            of short and stocky.
          </Paragraph>
          <p className="text-sm text-red-700 bg-red-50 rounded-lg px-3 py-2">
            A windowsill is often not enough - especially in early spring when
            days are short.
          </p>
        </Card>

        <h3 className="text-lg font-bold text-green-800 mb-3">
          How to Fix Leggy Tomato Seedlings
        </h3>

        <div className="space-y-3">
          {[
            {
              icon: "🌱",
              title: "Bury the stem deeper when transplanting",
              body: "Tomatoes grow roots all along their buried stem. If your seedling is 6 inches tall, bury 4 inches of it. The plant roots deeply and becomes much stronger.",
            },
            {
              icon: "💡",
              title: "Move the light closer",
              body: "If using a grow light, keep it 2–4 inches above the seedlings. Move seed trays to your brightest south-facing window and rotate daily.",
            },
            {
              icon: "🌬️",
              title: "Add airflow with a small fan",
              body: "Running a fan near seedlings for a few hours a day mimics outdoor wind. This causes stems to strengthen - stocky seedlings result.",
            },
            {
              icon: "📅",
              title: "Don't start seeds too early",
              body: "Start 6–8 weeks before your last frost date. Too early means seedlings sit under low light for too long and get leggy before going outside.",
            },
          ].map(({ icon, title, body }) => (
            <div
              key={title}
              className="flex gap-4 bg-white rounded-xl border border-gray-100 p-4 shadow-sm"
            >
              <div className="text-2xl" aria-hidden="true">
                {icon}
              </div>
              <div>
                <p className="font-semibold text-gray-800">{title}</p>
                <p className="text-sm text-gray-600 mt-1">{body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 text-sm">
          <Link
            href="/leggy-tomato-seedlings-fix"
            className="text-green-700 font-semibold hover:underline"
          >
            → Read the complete Leggy Seedlings Fix guide
          </Link>
        </div>
      </div>
    </section>
  );
}

function BeginnerSetup() {
  return (
    <section aria-labelledby="setup-heading" className="py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <SectionHeading id="setup-heading">
          Complete Beginner Tomato Container Setup
        </SectionHeading>
        <Paragraph>
          You don&apos;t need a big garden to grow tomatoes. Here&apos;s
          everything you need for a successful first container setup.
        </Paragraph>

        <div className="grid sm:grid-cols-3 gap-4 my-5">
          <Card>
            <div className="text-3xl mb-2" aria-hidden="true">📦</div>
            <h3 className="font-bold text-green-800 mb-2">Container Size</h3>
            <p className="text-sm text-gray-600 mb-2">
              Minimum 5 gallons. For full-size tomatoes, use 10–20 gallons.
            </p>
            <ul className="text-xs text-gray-500 space-y-1">
              <li>• Cherry tomatoes: 5–7 gal</li>
              <li>• Bush varieties: 7–10 gal</li>
              <li>• Indeterminate vines: 15–20 gal</li>
            </ul>
          </Card>

          <Card>
            <div className="text-3xl mb-2" aria-hidden="true">🌿</div>
            <h3 className="font-bold text-green-800 mb-2">Soil Mix</h3>
            <p className="text-sm text-gray-600 mb-2">
              Never use plain garden soil in containers - it compacts and
              suffocates roots.
            </p>
            <ul className="text-xs text-gray-500 space-y-1">
              <li>• Well-draining potting mix</li>
              <li>• Add perlite for drainage</li>
              <li>• Slow-release fertilizer</li>
            </ul>
          </Card>

          <Card>
            <div className="text-3xl mb-2" aria-hidden="true">🪝</div>
            <h3 className="font-bold text-green-800 mb-2">Support</h3>
            <p className="text-sm text-gray-600 mb-2">
              Tomatoes need support as they grow - especially indeterminate
              types reaching 6+ feet.
            </p>
            <ul className="text-xs text-gray-500 space-y-1">
              <li>• Tomato cage (easiest)</li>
              <li>• Bamboo stake + tie</li>
              <li>• Florida weave for rows</li>
            </ul>
          </Card>
        </div>

        <Card className="bg-green-50 border-green-200">
          <SubHeading>Quick Setup Checklist</SubHeading>
          <div className="grid sm:grid-cols-2 gap-2 text-sm text-gray-700">
            {[
              "10+ gallon container (pot or grow bag)",
              "Well-draining potting mix",
              "Slow-release tomato fertilizer",
              "Cage or stake for support",
              "Sunny spot with 6+ hours of light",
              "Saucer or drip tray under pot",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="text-green-600 font-bold">✓</span>
                {item}
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <main>
      <JsonLd data={homeSchema} />
      <JsonLd data={faqSchema} />

      <Hero />
      <GuidesHub />
      <QuickDecision />
      <Sunlight />
      <Watering />
      <LeggySeedlings />
      <BeginnerSetup />

      {/* FAQ */}
      <section aria-labelledby="faq-heading" className="py-10 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <SectionHeading id="faq-heading">
            Frequently Asked Questions About Growing Tomatoes
          </SectionHeading>
          <Paragraph>
            Quick answers to the questions beginners ask most often.
          </Paragraph>
          <div className="mt-5">
            <FAQAccordion items={homeFAQs} />
          </div>
        </div>
      </section>

      {/* Affiliate tools */}
      <section aria-labelledby="tools-heading" className="py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <SectionHeading id="tools-heading">
            Recommended Tools for Tomato Growing
          </SectionHeading>
          <Paragraph>
            These are the essentials for starting your first tomato container
            garden. Links are affiliate links - they don&apos;t cost you anything
            extra and help support this site.
          </Paragraph>
          <div className="grid sm:grid-cols-2 gap-4 mt-5">
            {affiliateProducts.map((p) => (
              <AffiliateCard key={p.name} {...p} />
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/tools-reviews"
              className="inline-block text-sm font-semibold text-green-700 border border-green-300 px-5 py-2 rounded-lg hover:bg-green-50 transition-colors"
            >
              → See all recommended tools &amp; reviews
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
