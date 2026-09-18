import { bench, describe } from "vitest";
import { cn } from "@/utils/cn";

// Class lists taken from the markup used across the portfolio, so the
// benchmark reflects the tailwind-merge work the UI actually triggers.
const BUTTON_BASE =
  "btn-sheen inline-flex items-center gap-2 rounded-full bg-[#F4F1EA] px-6 py-3 text-sm font-semibold text-[#0B0B0E] transition hover:bg-white";
const BUTTON_OVERRIDE = "px-5 py-2.5 bg-[#C8A96A]/10 text-[#E9D5A8]";
const CARD =
  "relative overflow-hidden rounded-[2rem] border-[10px] border-[#1C1C22] bg-black shadow-[0_32px_70px_-24px_rgba(0,0,0,0.9)]";
const NAV_LINK =
  "link-underline text-[13px] font-medium text-zinc-400 transition hover:text-white";

describe("cn", () => {
  bench("single class string", () => {
    cn(NAV_LINK);
  });

  bench("merge conflicting utilities", () => {
    cn(BUTTON_BASE, BUTTON_OVERRIDE);
  });

  bench("conditional variants", () => {
    for (const active of [true, false]) {
      cn(
        NAV_LINK,
        active && "text-white",
        !active && "text-zinc-500",
        active ? ["font-semibold", "underline"] : { "opacity-70": true }
      );
    }
  });

  bench("large class list", () => {
    cn(CARD, BUTTON_BASE, BUTTON_OVERRIDE, NAV_LINK, [
      "mx-auto max-w-6xl px-5 sm:px-8",
      "grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-8",
    ]);
  });
});
