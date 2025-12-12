"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import {
  Mail as MailIcon,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Message sending failed");

      setSubmitted(true);
      setErrorMessage(null);
      reset();
      setTimeout(() => setSubmitted(false), 4000);
    } catch {
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 md:gap-12 max-w-6xl mx-auto p-4 sm:p-6 md:p-8">
      {/* Left: Contact Info */}
      <div className="flex flex-col gap-6 md:flex-1">
        <p className="text-lg font-semibold">Get In Touch</p>

        <div className="space-y-4">
          {[
            {
              icon: <MailIcon className="text-purple-500" />,
              label: "Email",
              value: "abhishekfarande81@gmail.com",
            },
            {
              icon: <Phone className="text-purple-500" />,
              label: "Phone",
              value: "+91-9326396793",
            },
            {
              icon: <MapPin className="text-purple-500" />,
              label: "Location",
              value: "Kolhapur, Maharashtra, India",
            },
          ].map(({ icon, label, value }) => (
            <div
              key={label}
              className="flex items-start gap-4 rounded-lg bg-secondary p-4 md:p-5 text-foreground"
            >
              {icon}
              <div className="flex flex-col">
                <p className="font-semibold">{label}</p>
                <p className="text-muted-foreground break-words">{value}</p>
              </div>
            </div>
          ))}
        </div>

        <div>
          <p className="font-semibold mb-2">Social Profiles</p>
          <div className="flex gap-4 sm:gap-5 text-muted-foreground">
            <a
              href="https://github.com/yourgithub"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-foreground"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/yourlinkedin"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-foreground"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:abhishekfarande81@gmail.com"
              aria-label="Email"
              className="hover:text-foreground"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Right: Contact Form */}
      <div className="flex-1 w-full rounded-lg border border-border bg-background p-6 sm:p-8">
        <h3 className="text-2xl font-semibold mb-3 text-foreground">
          Send Me a Message
        </h3>
        <p className="mb-6 text-muted-foreground">
          Fill out the form below and I will get back to you as soon as possible.
        </p>

        {submitted && (
          <div className="mb-4 rounded-md border border-green-600 bg-green-600/20 p-3 text-green-700">
            Message sent successfully! 🎉
          </div>
        )}
        {errorMessage && (
          <div className="mb-4 rounded-md border border-red-600 bg-red-600/20 p-3 text-red-700">
            {errorMessage}
          </div>
        )}

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 sm:space-y-6 text-foreground"
          noValidate
        >
          <div className="flex flex-col gap-1">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="Your name"
              {...register("name")}
              aria-invalid={errors.name ? "true" : "false"}
            />
            {errors.name && (
              <p className="text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              {...register("email")}
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email && (
              <p className="text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <Label htmlFor="subject">Subject</Label>
            <Input
              id="subject"
              placeholder="Subject"
              {...register("subject")}
            />
          </div>

          <div className="flex flex-col gap-1">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              rows={5}
              placeholder="Your message"
              {...register("message")}
              aria-invalid={errors.message ? "true" : "false"}
            />
            {errors.message && (
              <p className="text-sm text-red-600">{errors.message.message}</p>
            )}
          </div>

          <Button type="submit" disabled={isSubmitting} className="w-full">
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </div>
    </div>
  );
}
