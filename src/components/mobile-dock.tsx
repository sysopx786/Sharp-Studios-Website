import { BooksyFlash, LangCircles } from "@/components/site-header";

export function MobileDock() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-ink/95 px-3 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md">
      <div className="mx-auto flex max-w-lg items-center gap-2.5 md:max-w-xl">
        <div className="flex shrink-0 items-center gap-2.5">
          <LangCircles />
        </div>
        <BooksyFlash className="h-[4.35rem] min-w-0 flex-1 text-base" />
      </div>
    </div>
  );
}
