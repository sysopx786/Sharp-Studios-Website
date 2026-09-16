import { SHOP } from "@/lib/shop";
import { InstagramMark } from "@/components/brand-marks";

export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <a
        href={SHOP.instagramUrl}
        target="_blank"
        rel="noreferrer"
        aria-label={`Instagram @${SHOP.instagramHandle}`}
        className="inline-flex size-11 items-center justify-center rounded-full bg-ink-2 hover:bg-line"
      >
        <InstagramMark className="size-6" />
      </a>
    </div>
  );
}
