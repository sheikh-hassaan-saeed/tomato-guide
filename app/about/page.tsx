import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading, Paragraph } from "../components/ui";

export const metadata: Metadata = {
  title: "About TomatoGrowGuide",
  description:
    "TomatoGrowGuide helps beginner gardeners grow tomatoes in containers successfully - practical advice based on real gardening problems, not theory.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main className="py-10 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-3">
            About TomatoGrowGuide
          </h1>
          <p className="text-lg text-gray-600">
            Practical tomato growing advice for beginners - written by growers
            who actually make the mistakes so you don&apos;t have to.
          </p>
        </div>

        <SectionHeading>What This Site Is</SectionHeading>
        <Paragraph>
          TomatoGrowGuide is a beginner-focused gardening resource covering one
          thing: growing tomatoes in containers. No fluff, no 5,000-word
          history of tomato cultivation - just the answers to questions
          beginners actually have.
        </Paragraph>
        <Paragraph>
          Every guide on this site addresses a real problem that beginner
          container growers run into - from choosing between grow bags and pots,
          to fixing leggy seedlings, to knowing exactly how much to water in a
          heatwave.
        </Paragraph>

        <SectionHeading>Why Container Tomatoes?</SectionHeading>
        <Paragraph>
          Most beginner gardening advice assumes you have a garden bed.
          Millions of people grow food on balconies, patios, and small yards
          where containers are the only option. Container tomato growing has its
          own specific challenges - watering more often, choosing the right
          container size, managing heat - and those challenges deserve specific
          answers.
        </Paragraph>

        <SectionHeading>Affiliate Disclosure</SectionHeading>
        <Paragraph>
          Some pages on this site contain affiliate links to products on Amazon
          and other retailers. When you purchase through these links, we earn a
          small commission at no extra cost to you.
        </Paragraph>
        <Paragraph>
          We only recommend products that are genuinely useful for beginner
          container growers. Affiliate income helps keep this site free and
          updated.
        </Paragraph>

        <div className="mt-8 bg-green-50 border border-green-200 rounded-2xl p-6">
          <h2 className="font-bold text-green-800 mb-2">Start With the Guides</h2>
          <p className="text-sm text-gray-700 mb-4">
            Not sure where to begin? The home page covers all the key beginner
            topics with quick summaries and links to full guides.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/"
              className="inline-block text-sm font-semibold text-white bg-green-700 hover:bg-green-800 px-4 py-2 rounded-lg transition-colors"
            >
              Home - Complete Guide
            </Link>
            <Link
              href="/beginner-guides"
              className="inline-block text-sm font-semibold text-green-700 border border-green-300 hover:bg-green-50 px-4 py-2 rounded-lg transition-colors"
            >
              Beginner Guides
            </Link>
            <Link
              href="/tools-reviews"
              className="inline-block text-sm font-semibold text-green-700 border border-green-300 hover:bg-green-50 px-4 py-2 rounded-lg transition-colors"
            >
              Tools &amp; Reviews
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
