import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading, Paragraph } from "../components/ui";

export const metadata: Metadata = {
  title: "Tomato Growing Problems - Diagnose and Fix Common Issues",
  description:
    "Diagnose and fix common tomato growing problems - leggy seedlings, overwatering, blossom drop, sunscald, and more. Beginner-friendly explanations.",
  alternates: { canonical: "/growing-problems" },
};

const problems = [
  {
    icon: "🌱",
    title: "Why Are My Tomato Seedlings Leggy?",
    symptom: "Tall, thin stems that flop over",
    cause: "Not enough light during seed starting",
    href: "/leggy-tomato-seedlings-fix",
    urgency: "Fix Now",
    urgencyColor: "text-red-700 bg-red-50",
  },
  {
    icon: "💧",
    title: "Overwatering vs Underwatering Tomatoes",
    symptom: "Wilting, yellow leaves, cracked fruit",
    cause: "Inconsistent watering schedule",
    href: "/tomato-watering-guide",
    urgency: "Common",
    urgencyColor: "text-orange-700 bg-orange-50",
  },
  {
    icon: "☀️",
    title: "Flower Drop and Blossom End Rot",
    symptom: "Flowers falling, dark bottom on fruit",
    cause: "Heat stress or calcium deficiency from watering issues",
    href: "/do-tomatoes-need-full-sun",
    urgency: "Common",
    urgencyColor: "text-orange-700 bg-orange-50",
  },
  {
    icon: "📦",
    title: "Stunted Growth in Containers",
    symptom: "Slow growth, small fruit, early flowering",
    cause: "Container too small or poor soil mix",
    href: "/tomato-grow-bags-vs-pots",
    urgency: "Check Setup",
    urgencyColor: "text-blue-700 bg-blue-50",
  },
];

const quickFixes = [
  { problem: "Seedlings falling over", fix: "Bury stem deeper when transplanting", href: "/leggy-tomato-seedlings-fix" },
  { problem: "Yellow bottom leaves", fix: "Reduce watering, check drainage", href: "/tomato-watering-guide" },
  { problem: "Flowers dropping off", fix: "Provide afternoon shade above 90°F", href: "/do-tomatoes-need-full-sun" },
  { problem: "Fruit cracking", fix: "Water more consistently - don't let soil dry out", href: "/tomato-watering-guide" },
  { problem: "No fruit despite flowers", fix: "Check if temps are above 90°F - plants stop setting fruit in heat", href: "/do-tomatoes-need-full-sun" },
  { problem: "Plant looks healthy but won't grow", fix: "Container too small - upgrade to 10–15 gallon", href: "/tomato-grow-bags-vs-pots" },
];

export default function GrowingProblemsPage() {
  return (
    <main className="py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <span className="text-xs font-semibold text-red-700 bg-red-50 px-3 py-1 rounded-full">
            Problem Solver
          </span>
          <h1 className="text-3xl font-extrabold text-gray-900 mt-3 mb-3">
            Tomato Growing Problems - Diagnose &amp; Fix
          </h1>
          <p className="text-lg text-gray-600">
            Something going wrong with your tomatoes? Find the symptom, the
            cause, and the fix - all in plain language for beginners.
          </p>
        </div>

        {/* Quick fix table */}
        <div className="mb-8 bg-yellow-50 rounded-2xl p-5 border border-yellow-200">
          <h2 className="font-bold text-yellow-900 mb-3">Quick Symptom Lookup</h2>
          <div className="space-y-2">
            {quickFixes.map(({ problem, fix, href }) => (
              <div
                key={problem}
                className="bg-white rounded-xl px-4 py-3 border border-yellow-100 text-sm"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                  <span className="font-semibold text-gray-800 shrink-0">
                    {problem}
                  </span>
                  <span className="text-gray-400 hidden sm:block">→</span>
                  <span className="text-gray-600 flex-1">{fix}</span>
                  <Link
                    href={href}
                    className="text-green-700 font-medium hover:underline shrink-0 text-xs"
                  >
                    Full guide →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <SectionHeading>Common Tomato Problems - Full Guides</SectionHeading>
        <div className="space-y-4 mt-4">
          {problems.map(({ icon, title, symptom, cause, href, urgency, urgencyColor }) => (
            <Link key={href} href={href} className="group block">
              <div className="bg-white border border-gray-200 rounded-2xl p-5 hover:border-red-300 hover:shadow-md transition-all">
                <div className="flex items-start gap-4">
                  <span className="text-3xl mt-1 shrink-0" aria-hidden="true">
                    {icon}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className={`text-xs font-semibold px-2 py-0.5 rounded-full ${urgencyColor}`}
                      >
                        {urgency}
                      </span>
                    </div>
                    <h2 className="font-bold text-gray-800 text-lg mb-1 group-hover:text-red-700">
                      {title}
                    </h2>
                    <p className="text-sm text-gray-500 mb-1">
                      <span className="font-medium">Symptom:</span> {symptom}
                    </p>
                    <p className="text-sm text-gray-500">
                      <span className="font-medium">Cause:</span> {cause}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 bg-green-50 rounded-2xl p-6">
          <Paragraph>
            Not sure if your issue is listed? The home page overview covers all
            common beginner problems with quick answers.
          </Paragraph>
          <Link
            href="/"
            className="inline-block text-sm font-semibold text-white bg-green-700 hover:bg-green-800 px-5 py-2 rounded-lg transition-colors mt-2"
          >
            → Back to Complete Guide
          </Link>
        </div>
      </div>
    </main>
  );
}
