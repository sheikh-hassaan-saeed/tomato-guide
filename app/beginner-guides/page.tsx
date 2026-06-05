import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading, Paragraph } from "../components/ui";

export const metadata: Metadata = {
  title: "Beginner Tomato Growing Guides - Start Here",
  description:
    "All beginner tomato growing guides in one place. Learn container selection, sunlight, watering, and setup - step by step for first-time growers.",
  alternates: { canonical: "/beginner-guides" },
};

const guides = [
  {
    icon: "🛍️",
    title: "Grow Bags vs Pots for Tomatoes",
    desc: "Which container actually produces better tomatoes? The real side-by-side comparison - root health, moisture, size, and cost.",
    href: "/tomato-grow-bags-vs-pots",
    time: "5 min read",
    tags: ["Containers", "Setup"],
  },
  {
    icon: "☀️",
    title: "Do Tomatoes Need Full Sun All Day?",
    desc: "The truth about tomato sunlight - ideal hours, what too much sun does, best container positioning, and shade strategies.",
    href: "/do-tomatoes-need-full-sun",
    time: "5 min read",
    tags: ["Sunlight", "Setup"],
  },
  {
    icon: "💧",
    title: "How Often to Water Tomatoes in Summer",
    desc: "A beginner-proof watering schedule for containers and in-ground plants. Includes the finger test and drip irrigation tips.",
    href: "/tomato-watering-guide",
    time: "6 min read",
    tags: ["Watering", "Summer Care"],
  },
];

export default function BeginnerGuidesPage() {
  return (
    <main className="py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <span className="text-xs font-semibold text-green-700 bg-green-50 px-3 py-1 rounded-full">
            Start Here
          </span>
          <h1 className="text-3xl font-extrabold text-gray-900 mt-3 mb-3">
            Beginner Tomato Growing Guides
          </h1>
          <p className="text-lg text-gray-600">
            New to growing tomatoes? Start with these guides. Each one covers a
            single topic completely so you get the real answer - not a watered-down
            overview.
          </p>
        </div>

        <SectionHeading>All Beginner Guides</SectionHeading>
        <div className="space-y-4 mt-4">
          {guides.map(({ icon, title, desc, href, time, tags }) => (
            <Link key={href} href={href} className="group block">
              <div className="bg-white border border-gray-200 rounded-2xl p-5 hover:border-green-400 hover:shadow-md transition-all">
                <div className="flex items-start gap-4">
                  <span className="text-3xl mt-1 shrink-0" aria-hidden="true">
                    {icon}
                  </span>
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-1 mb-2">
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-medium text-green-700 bg-green-50 px-2 py-0.5 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h2 className="font-bold text-gray-800 text-lg mb-1 group-hover:text-green-800">
                      {title}
                    </h2>
                    <p className="text-sm text-gray-500 mb-2">{desc}</p>
                    <p className="text-xs text-gray-400">{time}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 bg-green-50 rounded-2xl p-6">
          <SectionHeading>New to Tomatoes? Start Here</SectionHeading>
          <Paragraph>
            If you&apos;re not sure where to start, the home page gives you a
            complete overview of every topic with quick summaries. Once you
            identify your specific question, follow the link to the full guide.
          </Paragraph>
          <Link
            href="/"
            className="inline-block text-sm font-semibold text-white bg-green-700 hover:bg-green-800 px-5 py-2 rounded-lg transition-colors mt-2"
          >
            → Go to the Complete Overview
          </Link>
        </div>

        <div className="mt-8">
          <SectionHeading>Got a Specific Problem?</SectionHeading>
          <Paragraph>
            Seedling problems, watering confusion, or container questions often
            have specific answers. Check the Growing Problems section.
          </Paragraph>
          <Link
            href="/growing-problems"
            className="text-green-700 font-semibold hover:underline text-sm"
          >
            → Browse Growing Problems &amp; Fixes
          </Link>
        </div>
      </div>
    </main>
  );
}
