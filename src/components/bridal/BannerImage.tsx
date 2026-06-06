interface BannerImageProps {
  src: string;
  alt: string;
  fadeBottom?: boolean;
  rounded?: boolean;
  height?: string;
}

export function BannerImage({ src, alt, fadeBottom = false, rounded = false, height = "h-[60vh]" }: BannerImageProps) {
  return (
    <div className={`relative w-full ${height} min-h-[320px] overflow-hidden ${rounded ? "mx-auto max-w-7xl px-6 sm:px-10" : ""}`}>
      <div className={`relative h-full w-full overflow-hidden ${rounded ? "rounded-2xl" : ""}`}>
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        {fadeBottom && (
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[color:var(--cream)] to-transparent" />
        )}
      </div>
    </div>
  );
}
