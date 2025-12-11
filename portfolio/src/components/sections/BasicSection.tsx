interface BasicSectionProps {
  id: string;
  title: string;
  children?: React.ReactNode;
}

export default function BasicSection({ id, title, children }: BasicSectionProps) {
  return (
    <section id={id} className="min-h-screen px-10 md:px-20 py-20">
      <h2 className="text-4xl font-bold mb-6">{title}</h2>
      {children}
    </section>
  );
}
