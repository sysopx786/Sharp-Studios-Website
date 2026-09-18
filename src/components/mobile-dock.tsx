import { LangCircles } from "@/components/site-header";
import { useScrolledFromTop } from "@/lib/scroll-top";
import { cn } from "@/lib/utils";

export function MobileDock() {
  const scrolled = useScrolledFromTop();

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 border-t border-line bg-ink/95 px-3 pt-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] backdrop-blur-md transition duration-200",
        scrolled && "pointer-events-none translate-y-full opacity-0",
      )}
    >
      <div className="mx-auto flex max-w-lg items-center justify-center gap-6">
        <LangCircles />
      </div>
    </div>
  );
}
