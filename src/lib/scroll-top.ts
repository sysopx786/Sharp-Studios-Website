import { useEffect, useState } from "react";

export function useScrolledFromTop(threshold = 40) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const mark = document.getElementById("scroll-top-mark");
    const apply = () => {
      const y = window.scrollY || document.documentElement.scrollTop || 0;
      setScrolled(y > threshold);
    };
    apply();
    window.addEventListener("scroll", apply, { passive: true });
    document.addEventListener("scroll", apply, { passive: true });

    let io: IntersectionObserver | undefined;
    if (mark) {
      io = new IntersectionObserver(
        ([entry]) => setScrolled(!entry.isIntersecting),
        { threshold: 0, rootMargin: "-8px 0px 0px 0px" },
      );
      io.observe(mark);
    }

    return () => {
      window.removeEventListener("scroll", apply);
      document.removeEventListener("scroll", apply);
      io?.disconnect();
    };
  }, [threshold]);

  return scrolled;
}
