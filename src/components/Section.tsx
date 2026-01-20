export default function Section({
  children,
  id,
  muted = false,
}: {
  children: React.ReactNode;
  id?: string;
  muted?: boolean;
}) {
  return (
    <section
      id={id}
      className={`
        ${muted ? "bg-gray-50" : "bg-white"}
        border-t border-gray-200
      `}
    >
      {children}
    </section>
  );
}
