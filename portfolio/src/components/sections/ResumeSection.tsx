import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ResumeSection() {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-muted-foreground">
        You can view or download my resume below.
      </p>

      <Link
        href="/Abhishek_Farande_CV.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button className="w-fit">View Resume</Button>
      </Link>
    </div>
  );
}
