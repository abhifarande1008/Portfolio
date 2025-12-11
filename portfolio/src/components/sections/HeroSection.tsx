import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-between px-10 md:px-20 bg-background text-foreground"
    >
      {/* LEFT CONTENT */}
      <div className="max-w-xl">
        <h1 className="text-5xl font-bold">
          <span className="text-purple-500">Abhishek</span> Farande
        </h1>

        <p className="text-muted-foreground mt-2">📍 Kolhapur, Maharashtra</p>

        <h2 className="text-3xl font-semibold mt-4">
          Full-Stack Web Developer
        </h2>

        <p className="mt-4 text-muted-foreground leading-relaxed">
          Passionate developer crafting modern web experiences using
          cutting-edge technologies. Specialized in building responsive,
          user-friendly applications.
        </p>

        <div className="flex gap-4 mt-6">
          <Button className="bg-primary text-primary-foreground">
            View Projects
          </Button>
          <Button variant="outline">Contact Me</Button>
          <Button variant="outline">View Resume</Button>
        </div>
      </div>

      {/* PROFILE IMAGE */}
      <div className="mt-10 md:mt-0">
        <div className="rounded-full border-4 border-primary p-1">
          <Image
            src="/image.png"
            alt="profile photo"
            width={280}
            height={280}
            className="rounded-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
