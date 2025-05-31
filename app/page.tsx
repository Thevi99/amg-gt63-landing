import Link from "next/link";

import { MercedesGT63Viewer } from "@/components/MercedesGT63Viewer";
import { CarSpecifications } from "@/components/CarSpecifications";
import { MercedesHeader } from "@/components/MercedesHeader";
import { MercedesFooter } from "@/components/MercedesFooter";
import { FeatureHighlights } from "@/components/FeatureHighlights";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-white text-black">
      <MercedesHeader />
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-24">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Mercedes-AMG GT 63
          </h2>
          <MercedesGT63Viewer />
        </section>
        <FeatureHighlights />
        <CarSpecifications />
      <MercedesFooter />
    </main>
  );
}