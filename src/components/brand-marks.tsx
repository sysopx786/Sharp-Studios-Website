export function GoogleG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path
        fill="#FFC107"
        d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
      />
      <path
        fill="#FF3D00"
        d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
      />
      <path
        fill="#4CAF50"
        d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
      />
      <path
        fill="#1976D2"
        d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
      />
    </svg>
  );
}

export function InstagramMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <defs>
        <radialGradient id="ig" cx="30%" cy="107%" r="150%">
          <stop offset="0%" stopColor="#fdf497" />
          <stop offset="5%" stopColor="#fdf497" />
          <stop offset="45%" stopColor="#fd5949" />
          <stop offset="60%" stopColor="#d6249f" />
          <stop offset="90%" stopColor="#285AEB" />
        </radialGradient>
      </defs>
      <rect x="2" y="2" width="20" height="20" rx="5.5" fill="url(#ig)" />
      <circle cx="12" cy="12" r="4.2" fill="none" stroke="#fff" strokeWidth="1.7" />
      <circle cx="17.2" cy="6.8" r="1.05" fill="#fff" />
    </svg>
  );
}

export function TikTokMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="#25F4EE"
        d="M16.6 5.82A5.4 5.4 0 0 1 14.5 2h-2.9v13.4a2.35 2.35 0 1 1-2.35-2.35c.2 0 .4.02.58.07V10.1a5.25 5.25 0 1 0 5.57 5.22V9.5a8.2 8.2 0 0 0 4.8 1.54V8.1a5.4 5.4 0 0 1-3.6-2.28Z"
        transform="translate(.6 .4)"
      />
      <path
        fill="#FE2C55"
        d="M16.6 5.82A5.4 5.4 0 0 1 14.5 2h-2.9v13.4a2.35 2.35 0 1 1-2.35-2.35c.2 0 .4.02.58.07V10.1a5.25 5.25 0 1 0 5.57 5.22V9.5a8.2 8.2 0 0 0 4.8 1.54V8.1a5.4 5.4 0 0 1-3.6-2.28Z"
        transform="translate(-.55 .85)"
      />
      <path
        fill="#fff"
        d="M16.6 5.82A5.4 5.4 0 0 1 14.5 2h-2.9v13.4a2.35 2.35 0 1 1-2.35-2.35c.2 0 .4.02.58.07V10.1a5.25 5.25 0 1 0 5.57 5.22V9.5a8.2 8.2 0 0 0 4.8 1.54V8.1a5.4 5.4 0 0 1-3.6-2.28Z"
      />
    </svg>
  );
}

export function GoogleStars({
  count,
  className,
}: {
  count: number;
  className?: string;
}) {
  return (
    <span className={className} aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" className="inline size-3.5">
          <path
            fill={i < count ? "#FBBC04" : "#E8EAED"}
            d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
          />
        </svg>
      ))}
    </span>
  );
}
