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
import { motion } from "framer-motion";
import { fadeContainer, fadeUpItem, fadeRightItem, cardItem } from "@/lib/animations";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().optional(),
  message: z.string().min(10),
});

type ContactFormData = z.infer<typeof contactSchema>;

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/abhifarande1008",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/abhishek-farande",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:abhishekfarande90@gmail.com",
    label: "Mail",
  },
];

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <motion.section
      id="contact"
      className="relative mx-auto max-w-6xl px-4 sm:px-8"
      variants={fadeContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.3 }}
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.05),transparent_70%)]" />

      <motion.div variants={fadeUpItem} className="mb-10 space-y-3 text-center md:text-left">
        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-muted-foreground">
          CONTACT
        </p>
        <h2 className="text-4xl font-black tracking-tight text-foreground sm:text-5xl">
          Get In Touch
        </h2>
        <p className="max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
          Have a project in mind or just want to say hi? 👋
        </p>
      </motion.div>

      <div className="flex flex-col gap-12 md:flex-row">
        <motion.div className="flex-1 space-y-6 text-center md:text-left" variants={fadeContainer}>
          {[MailIcon, Phone, MapPin].map((Icon, i) => (
            <motion.div
              key={i}
              variants={cardItem}
              className="flex items-start gap-4 rounded-2xl border border-purple-500/20 bg-background/60 p-4 transition-all hover:border-purple-500/40"
            >
              <Icon className="shrink-0 text-purple-500" />
              <p className="text-sm text-muted-foreground sm:text-base">
                {i === 0 && "abhishekfarande81@gmail.com"}
                {i === 1 && "+91-9326396793"}
                {i === 2 && "Kolhapur, Maharashtra, India"}
              </p>
            </motion.div>
          ))}

          <motion.div className="flex justify-center gap-6 md:justify-start" variants={fadeUpItem}>
            {socialLinks.map((item) => {
              const Icon = item.icon;

              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="text-muted-foreground transition-colors hover:text-purple-400"
                  whileHover={{ scale: 1.2 }}
                >
                  <Icon size={22} />
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>

        <motion.div
          className="flex-1 overflow-hidden rounded-3xl border border-purple-500/20 bg-background/70 p-6 shadow-2xl shadow-purple-500/10 backdrop-blur-xl sm:p-8"
          variants={fadeRightItem}
        >
          <div className="h-1 w-full rounded-t-3xl bg-gradient-to-r from-purple-600 to-violet-400 -mt-6 -mx-6 mb-6" />
          <motion.h3
            className="mb-4 text-lg font-bold tracking-tight text-foreground"
            variants={fadeUpItem}
          >
            Send a Message
          </motion.h3>

          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5"
            variants={fadeContainer}
          >
            <motion.div variants={fadeUpItem}>
              <Label>Name</Label>
              <Input
                {...register("name")}
                className="focus:border-purple-500 focus:ring-purple-500/20"
              />
            </motion.div>

            <motion.div variants={fadeUpItem}>
              <Label>Email</Label>
              <Input
                {...register("email")}
                className="focus:border-purple-500 focus:ring-purple-500/20"
              />
            </motion.div>

            <motion.div variants={fadeUpItem}>
              <Label>Message</Label>
              <Textarea
                rows={4}
                {...register("message")}
                className="focus:border-purple-500 focus:ring-purple-500/20"
              />
            </motion.div>

            <motion.div variants={fadeUpItem}>
              <Button
                type="submit"
                className="w-full bg-purple-600 text-white hover:bg-purple-700"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </motion.div>

            {submitted && (
              <motion.p
                className="text-center text-sm text-green-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                Message sent successfully 🎉
              </motion.p>
            )}
          </motion.form>
        </motion.div>
      </div>
    </motion.section>
  );
}
