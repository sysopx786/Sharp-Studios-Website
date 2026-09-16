import { cn } from "@/lib/utils";

export function BarberPole({ className, height = 40 }: { className?: string; height?: number }) {
  return (
    <span
      className={cn("barber-pole inline-block shrink-0", className)}
      style={{ height }}
      aria-hidden="true"
    />
  );
}
