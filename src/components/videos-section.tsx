import { useEffect, useRef, useState } from "react";
import { InstagramMark } from "@/components/brand-marks";
import { SocialLinks } from "@/components/social-links";
import { SHOP, VIDEOS } from "@/lib/shop";
import { loc, useI18n } from "@/lib/i18n";
import { asset } from "@/lib/utils";

type Reel = (typeof VIDEOS)[number];

function ReelCard({
  reel,
  playingId,
  onPlay,
}: {
  reel: Reel;
  playingId: string | null;
  onPlay: (id: string) => void;
}) {
  const { lang } = useI18n();
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (playingId !== reel.id) ref.current?.pause();
  }, [playingId, reel.id]);

  return (
    <li className="w-full max-w-[360px]">
      <video
        ref={ref}
        controls
        playsInline
        preload="metadata"
        poster={asset(reel.poster)}
        onPlay={() => onPlay(reel.id)}
        aria-label={loc(lang, reel.titleEn, reel.titleEs, reel.titlePt)}
        title={loc(lang, reel.titleEn, reel.titleEs, reel.titlePt)}
        className="aspect-[9/16] w-full rounded-xl bg-ink-2 object-cover"
      >
        <source src={asset(reel.src)} type="video/mp4" />
      </video>
      <p className="mt-3 text-center text-sm font-medium uppercase tracking-[0.18em] text-cream">
        {loc(lang, reel.titleEn, reel.titleEs, reel.titlePt)}
      </p>
    </li>
  );
}

function ReelGrid({
  reels,
  playingId,
  onPlay,
  cols,
}: {
  reels: readonly Reel[];
  playingId: string | null;
  onPlay: (id: string) => void;
  cols: string;
}) {
  return (
    <ul className={`mt-8 grid justify-items-center gap-6 ${cols}`}>
      {reels.map((reel) => (
        <ReelCard key={reel.id} reel={reel} playingId={playingId} onPlay={onPlay} />
      ))}
    </ul>
  );
}

export function VideosSection() {
  const { t } = useI18n();
  const [playingId, setPlayingId] = useState<string | null>(null);
  const vibe = VIDEOS.filter((v) => v.group === "vibe");
  const work = VIDEOS.filter((v) => v.group === "work");

  return (
    <section id="videos" className="scroll-mt-32 bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-cream">
          {t.videosKicker}
        </p>
        <h2 className="font-display mt-3 max-w-xl text-4xl font-semibold uppercase leading-[0.9] sm:text-5xl">
          {t.videosTitle}
        </h2>
        <p className="mt-5 max-w-2xl text-lg text-cream/85">{t.videosLead}</p>

        <h3 className="font-display mt-14 text-2xl font-semibold uppercase tracking-wide text-paper sm:text-3xl">
          {t.videosVibe}
        </h3>
        <ReelGrid
          reels={vibe}
          playingId={playingId}
          onPlay={setPlayingId}
          cols="sm:grid-cols-2 lg:grid-cols-3"
        />

        <h3 className="font-display mt-16 text-2xl font-semibold uppercase tracking-wide text-paper sm:text-3xl">
          {t.videosWork}
        </h3>
        <ReelGrid
          reels={work}
          playingId={playingId}
          onPlay={setPlayingId}
          cols="sm:grid-cols-2 lg:grid-cols-3"
        />

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href={SHOP.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center gap-2 text-sm text-cream hover:text-paper"
          >
            <InstagramMark className="size-5" />
            {t.watchIg}
          </a>
          <SocialLinks />
        </div>
      </div>
    </section>
  );
}
