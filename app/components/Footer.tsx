import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-green-900 text-green-200 py-10 px-4 mt-10">
      <div className="max-w-5xl mx-auto">
        <div className="grid sm:grid-cols-3 gap-8 mb-6">
          <div>
            <p className="font-bold text-white text-lg mb-2">
              🍅 TomatoGrowGuide
            </p>
            <p className="text-sm leading-relaxed">
              Practical tomato growing advice for beginners - no fluff, just
              what works.
            </p>
          </div>

          <div>
            <p className="font-semibold text-white mb-3 text-sm uppercase tracking-wide">
              Guides
            </p>
            <ul className="text-sm space-y-2">
              <li>
                <Link
                  href="/tomato-grow-bags-vs-pots"
                  className="hover:text-white transition-colors"
                >
                  Grow Bags vs Pots
                </Link>
              </li>
              <li>
                <Link
                  href="/tomato-watering-guide"
                  className="hover:text-white transition-colors"
                >
                  Watering Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/leggy-tomato-seedlings-fix"
                  className="hover:text-white transition-colors"
                >
                  Fix Leggy Seedlings
                </Link>
              </li>
              <li>
                <Link
                  href="/do-tomatoes-need-full-sun"
                  className="hover:text-white transition-colors"
                >
                  Sunlight Guide
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-white mb-3 text-sm uppercase tracking-wide">
              More
            </p>
            <ul className="text-sm space-y-2">
              <li>
                <Link
                  href="/beginner-guides"
                  className="hover:text-white transition-colors"
                >
                  Beginner Guides
                </Link>
              </li>
              <li>
                <Link
                  href="/growing-problems"
                  className="hover:text-white transition-colors"
                >
                  Growing Problems
                </Link>
              </li>
              <li>
                <Link
                  href="/tools-reviews"
                  className="hover:text-white transition-colors"
                >
                  Tools &amp; Reviews
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <p className="text-xs text-green-400 border-t border-green-800 pt-5">
          This site contains affiliate links. We may earn a small commission at
          no cost to you when you purchase through our links. All
          recommendations are based on genuine beginner gardening needs.
        </p>
      </div>
    </footer>
  );
}
