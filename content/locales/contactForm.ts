import type { Locale } from "@/lib/i18n";

export type ContactFormCopy = {
  topicTechnical: string;
  topicPartner: string;
  topicBusiness: string;
  requiredError: string;
  invalidEmailError: string;
  invalidPhoneError: string;
  success: string;
  labels: {
    name: string;
    email: string;
    phone: string;
    topic: string;
    message: string;
  };
  placeholders: {
    name: string;
    email: string;
    phone: string;
    message: string;
  };
  submitIdle: string;
  submitLoading: string;
  note: string;
};

export const contactFormCopyByLocale: Record<"th" | "en", ContactFormCopy> = {
  th: {
    topicTechnical: "ปรึกษาด้านเทคนิค",
    topicPartner: "ความร่วมมือกับพาร์ตเนอร์",
    topicBusiness: "สอบถามข้อมูลทั่วไป",
    requiredError: "กรุณากรอกข้อมูลให้ครบก่อนส่งข้อความ",
    invalidEmailError: "รูปแบบอีเมลไม่ถูกต้อง",
    invalidPhoneError: "รูปแบบเบอร์โทรศัพท์ไม่ถูกต้อง",
    success: "ส่งข้อความสำเร็จแล้ว ทีมจะติดต่อกลับโดยเร็วที่สุด",
    labels: {
      name: "ชื่อผู้ติดต่อ",
      email: "อีเมล",
      phone: "เบอร์โทรศัพท์",
      topic: "หัวข้อ",
      message: "รายละเอียด",
    },
    placeholders: {
      name: "ชื่อ-นามสกุล",
      email: "name@company.com",
      phone: "08x-xxx-xxxx",
      message: "เล่าระบบปัจจุบัน ปัญหาหลัก และเป้าหมายที่ต้องการ",
    },
    submitIdle: "ส่งข้อความ",
    submitLoading: "กำลังส่ง…",
    note: "ข้อมูลของคุณจะถูกใช้เพื่อการติดต่อกลับและการประเมินแนวทางเริ่มต้นเท่านั้น",
  },
  en: {
    topicTechnical: "Technical Consultation",
    topicPartner: "Partner Collaboration",
    topicBusiness: "General Inquiry",
    requiredError: "Please complete all required fields before submitting.",
    invalidEmailError: "Invalid email format.",
    invalidPhoneError: "Invalid phone number format.",
    success: "Message sent successfully. Our team will contact you shortly.",
    labels: {
      name: "Contact Name",
      email: "Email",
      phone: "Phone",
      topic: "Topic",
      message: "Message",
    },
    placeholders: {
      name: "Full name",
      email: "name@company.com",
      phone: "+66-xx-xxx-xxxx",
      message: "Share your current system context, key problems, and target outcomes.",
    },
    submitIdle: "Send Message",
    submitLoading: "Sending…",
    note: "Your information will be used only for response and initial solution assessment.",
  },
};

export function getContactFormCopy(locale: Locale): ContactFormCopy {
  return locale === "th" ? contactFormCopyByLocale.th : contactFormCopyByLocale.en;
}
