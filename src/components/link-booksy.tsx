import type { ReactNode } from "react";
import { SHOP } from "@/lib/shop";
import { cn } from "@/lib/utils";

const LINK_CLASS =
  "font-semibold underline decoration-2 underline-offset-2 hover:opacity-80";

export function BooksyHref({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <a href={SHOP.booksyUrl} target="_blank" rel="noreferrer" className={cn(LINK_CLASS, className)}>
      {children}
    </a>
  );
}

/** Turns every “Booksy” in a string into a link to the shop’s Booksy page. */
export function LinkBooksy({ text, className }: { text: string; className?: string }) {
  const parts = text.split(/(Booksy)/gi);
  return (
    <>
      {parts.map((part, i) =>
        /^booksy$/i.test(part) ? (
          <BooksyHref key={i} className={className}>
            {part}
          </BooksyHref>
        ) : (
          part
        ),
      )}
    </>
  );
}
