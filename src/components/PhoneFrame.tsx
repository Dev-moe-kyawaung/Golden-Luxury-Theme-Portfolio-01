type Props = {
  src: string;
  type: "video" | "image";
  caption: string;
};

export default function PhoneFrame({ src, type, caption }: Props) {
  return (
    <div className="relative mx-auto w-[210px] sm:w-[230px]">
      {/* halo */}
      <div
        className="absolute -inset-6 rounded-[2.5rem] bg-[#C8A96A]/10 blur-[40px]"
        aria-hidden
      />
      <div className="relative overflow-hidden rounded-[2rem] border-[10px] border-[#1C1C22] bg-black shadow-[0_32px_70px_-24px_rgba(0,0,0,0.9)]">
        <div className="absolute left-1/2 top-0 z-20 h-5 w-24 -translate-x-1/2 rounded-b-2xl bg-[#1C1C22]" />
        <div className="aspect-[9/18.5] w-full overflow-hidden bg-[#0B0B0E]">
          {type === "video" ? (
            <video
              key={src}
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={src} type="video/mp4" />
            </video>
          ) : (
            <img src={src} alt={caption} className="h-full w-full object-cover" loading="lazy" />
          )}
        </div>
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent p-3.5 pt-12">
          <p className="font-mono text-[8px] uppercase tracking-[0.22em] text-[#C8A96A]">
            Live preview
          </p>
          <p className="mt-0.5 truncate text-xs font-semibold text-white">{caption}</p>
        </div>
      </div>
    </div>
  );
}
