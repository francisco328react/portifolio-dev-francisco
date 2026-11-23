export default function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-titulo`}>
      <h2 id={`${id}-titulo`}>{title}</h2>
      {children}
    </section>
  );
}
