"use client";

import { FormEvent, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { detectLocaleFromPathname } from "@/lib/i18n";
import { getContactFormCopy } from "@/content/locales/contactForm";

function encode(value: string) {
  return encodeURIComponent(value.trim());
}

export default function ContactLeadForm() {
  const pathname = usePathname();
  const locale = detectLocaleFromPathname(pathname);
  const copy = getContactFormCopy(locale);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [topic, setTopic] = useState("technical");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const topicLabel = useMemo(() => {
    if (topic === "partner") return copy.topicPartner;
    if (topic === "business") return copy.topicBusiness;
    return copy.topicTechnical;
  }, [topic, copy.topicBusiness, copy.topicPartner, copy.topicTechnical]);

  const buildMailtoHref = (payloadMessage: string) => {
    const subject = `[Gumon Website] ${topicLabel} - ${name.trim()}`;
    return `mailto:contact@gumon.io?subject=${encode(subject)}&body=${encode(payloadMessage)}`;
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setSuccess("");

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError(copy.requiredError);
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.trim())) {
      setError(copy.invalidEmailError);
      return;
    }

    if (phone.trim()) {
      const phonePattern = /^[0-9+\-\s()]{7,20}$/;
      if (!phonePattern.test(phone.trim())) {
        setError(copy.invalidPhoneError);
        return;
      }
    }

    const lines = [
      `Name: ${name.trim()}`,
      `Email: ${email.trim()}`,
      `Phone: ${phone.trim() || "-"}`,
      `Topic: ${topicLabel}`,
      `Submitted At: ${new Date().toISOString()}`,
      `Current URL: ${typeof window !== "undefined" ? window.location.href : ""}`,
      `Referrer: ${typeof document !== "undefined" ? document.referrer : ""}`,
      "",
      "Message:",
      message.trim(),
    ];
    const body = lines.join("\n");
    const mailtoHref = buildMailtoHref(body);
    const webhookUrl = process.env.NEXT_PUBLIC_CONTACT_WEBHOOK_URL;

    if (!webhookUrl) {
      window.location.href = mailtoHref;
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          topic,
          topic_label: topicLabel,
          message: message.trim(),
          submitted_at: new Date().toISOString(),
          current_url: typeof window !== "undefined" ? window.location.href : "",
          referrer: typeof document !== "undefined" ? document.referrer : "",
        }),
      });

      if (!response.ok) {
        throw new Error(`Webhook failed: ${response.status}`);
      }

      setSuccess(copy.success);
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch {
      window.location.href = mailtoHref;
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid gap-2">
        <label htmlFor="contact-name" className="text-xs tracking-[0.14em] uppercase text-mist">{copy.labels.name}</label>
        <input
          id="contact-name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="rounded-lg border border-line/40 bg-bg1/80 px-3 py-2 text-sm text-ink outline-none focus:border-accent/70"
          placeholder={copy.placeholders.name}
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="contact-email" className="text-xs tracking-[0.14em] uppercase text-mist">{copy.labels.email}</label>
        <input
          id="contact-email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="rounded-lg border border-line/40 bg-bg1/80 px-3 py-2 text-sm text-ink outline-none focus:border-accent/70"
          placeholder={copy.placeholders.email}
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="contact-phone" className="text-xs tracking-[0.14em] uppercase text-mist">{copy.labels.phone}</label>
        <input
          id="contact-phone"
          name="phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="rounded-lg border border-line/40 bg-bg1/80 px-3 py-2 text-sm text-ink outline-none focus:border-accent/70"
          placeholder={copy.placeholders.phone}
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="contact-topic" className="text-xs tracking-[0.14em] uppercase text-mist">{copy.labels.topic}</label>
        <select
          id="contact-topic"
          name="topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="rounded-lg border border-line/40 bg-bg1/80 px-3 py-2 text-sm text-ink outline-none focus:border-accent/70"
        >
          <option value="technical">{copy.topicTechnical}</option>
          <option value="partner">{copy.topicPartner}</option>
          <option value="business">{copy.topicBusiness}</option>
        </select>
      </div>

      <div className="grid gap-2">
        <label htmlFor="contact-message" className="text-xs tracking-[0.14em] uppercase text-mist">{copy.labels.message}</label>
        <textarea
          id="contact-message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          className="rounded-lg border border-line/40 bg-bg1/80 px-3 py-2 text-sm text-ink outline-none focus:border-accent/70"
          placeholder={copy.placeholders.message}
        />
      </div>

      {error ? <p className="text-xs text-danger">{error}</p> : null}
      {success ? <p className="text-xs text-accent">{success}</p> : null}

      <button type="submit" disabled={isSubmitting} className="btn-primary w-full sm:w-fit disabled:opacity-70 disabled:cursor-not-allowed">
        {isSubmitting ? copy.submitLoading : copy.submitIdle}
      </button>
      <p className="text-xs text-mist">{copy.note}</p>
    </form>
  );
}
