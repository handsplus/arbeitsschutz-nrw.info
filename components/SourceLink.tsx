type Props = {
  href: string;
  label: string;
};

export function SourceLink({ href, label }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="source-link"
    >
      <span aria-hidden>↗</span>
      Quelle: {label}
    </a>
  );
}
