export default function SkillsSection() {
  const skills = [
    "HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js",
    "Node.js", "Express", "MongoDB", "PostgreSQL", "Tailwind CSS"
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {skills.map((skill) => (
        <div
          key={skill}
          className="p-3 border rounded-md text-center bg-muted/40"
        >
          {skill}
        </div>
      ))}
    </div>
  );
}
