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
import {
  fadeContainer,
  fadeUpItem,
  fadeRightItem,
  cardItem,
} from "@/lib/animations";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().optional(),
  message: z.string().min(10),
});

type ContactFormData = z.infer<typeof contactSchema>;

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
      className="max-w-6xl mx-auto px-4 sm:px-8 py-16"
      variants={fadeContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.3 }}
    >
      <div className="flex flex-col md:flex-row gap-12">
        {/* LEFT INFO */}
        <motion.div className="flex-1 space-y-6">
          <motion.h3
            className="text-2xl font-semibold text-center md:text-left"
            variants={fadeUpItem}
          >
            Get In Touch
          </motion.h3>

          {[MailIcon, Phone, MapPin].map((Icon, i) => (
            <motion.div
              key={i}
              variants={cardItem}
              className="flex items-start gap-4 rounded-lg bg-secondary p-4 w-full"
            >
              <Icon className="text-purple-500 shrink-0" />
              <p className="text-sm sm:text-base text-muted-foreground">
                {i === 0 && "abhishekfarande81@gmail.com"}
                {i === 1 && "+91-9326396793"}
                {i === 2 && "Kolhapur, Maharashtra, India"}
              </p>
            </motion.div>
          ))}

          <motion.div
            className="flex justify-center md:justify-start gap-6"
            variants={fadeUpItem}
          >
            {[Github, Linkedin, Mail].map((Icon, i) => (
              <motion.a
                key={i}
                whileHover={{ scale: 1.2 }}
                className="text-muted-foreground hover:text-foreground"
              >
                <Icon size={22} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* FORM */}
        <motion.div
          className="flex-1 rounded-lg border bg-background p-6 sm:p-8"
          variants={fadeRightItem}
        >
          <motion.h3
            className="text-xl sm:text-2xl font-semibold mb-4"
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
              <Input {...register("name")} />
            </motion.div>

            <motion.div variants={fadeUpItem}>
              <Label>Email</Label>
              <Input {...register("email")} />
            </motion.div>

            <motion.div variants={fadeUpItem}>
              <Label>Message</Label>
              <Textarea rows={4} {...register("message")} />
            </motion.div>

            <motion.div variants={fadeUpItem}>
              <Button
                type="submit"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </motion.div>

            {submitted && (
              <motion.p
                className="text-green-600 text-center text-sm"
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
