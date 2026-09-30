type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  copy?: string;
};

export function SectionHeading({ eyebrow, title, copy }: SectionHeadingProps) {
  return (
    <div className="mb-12 flex flex-col gap-5 md:mb-16 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-[0.98] text-ink md:text-6xl">
          {title}
        </h2>
      </div>
      {copy ? (
        <p className="max-w-sm text-sm leading-7 text-muted md:text-base">{copy}</p>
      ) : null}
    </div>
  );
}
