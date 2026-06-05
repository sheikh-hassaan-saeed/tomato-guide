import React from "react";

export function SectionHeading({
  id,
  children,
}: {
  id?: string;
  children: React.ReactNode;
}) {
  return (
    <h2 id={id} className="text-2xl font-bold text-green-800 mb-3 mt-2">
      {children}
    </h2>
  );
}

export function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-lg font-semibold text-green-700 mb-2 mt-4">
      {children}
    </h3>
  );
}

export function Paragraph({ children }: { children: React.ReactNode }) {
  return <p className="text-gray-700 leading-relaxed mb-3">{children}</p>;
}

export function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`bg-white rounded-2xl shadow-sm border border-gray-100 p-6 ${className}`}
    >
      {children}
    </div>
  );
}

export function PinterestHook({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-red-50 border-l-4 border-red-400 px-5 py-3 rounded-r-xl mb-5">
      <p className="text-red-800 font-semibold text-base">{children}</p>
    </div>
  );
}
