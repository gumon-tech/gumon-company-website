import { companyInfoByLocale } from "@/lib/companyInfo";
import type { Locale } from "@/lib/i18n";
import { shopAgentPaths, type ShopAgentLegalCopy } from "@/lib/shopAgentLegal";

// Facts on this page (roles, sub-processors, locations, deletion behaviour) follow the Shop Agent's
// actual set-up (sub-processor list, hosting and per-person erase records kept with the service).
// Change them only when the service changes. Never name a client shop here.

export const shopAgentPrivacyContent: Partial<Record<Locale, ShopAgentLegalCopy>> = {
  en: {
    title: "Gumon Shop Agent Privacy Notice",
    description: "How Gumon Shop Agent handles personal data when you message a shop that uses it on WhatsApp.",
    crumb: "Shop Agent Privacy",
    kicker: "Gumon Shop Agent",
    heading: "Gumon Shop Agent Privacy Notice",
    updatedLabel: "Last updated",
    updatedAt: "October 30, 2026",
    intro:
      "Gumon Shop Agent is a WhatsApp messaging service that Gumon Technology provides to the shops it supports, such as massage and spa businesses. When you message one of these shops on WhatsApp, the Shop Agent helps the shop reply, answer questions and manage bookings. This notice explains what personal data is involved, who is responsible for it, and how you can use your rights. It applies to every shop that uses Gumon Shop Agent. The privacy policy for the gumon.io website is a separate document.",
    sections: [
      {
        title: "1. Who is responsible for your data",
        items: [
          "The shop you are messaging is the data controller. It decides why and how your data is used, and it is your main point of contact for questions about your data. The shop's name and contact details are shown in its WhatsApp business profile.",
          `${companyInfoByLocale.en.legalName} (registration no. ${companyInfoByLocale.en.registrationNumber}, Thailand) provides and operates the Shop Agent as a data processor. Gumon processes your data on behalf of the shop and only on the shop's instructions.`,
          "Gumon does not use shop customers' data for its own purposes, does not sell it, and does not share one shop's customer data with another shop.",
          "WhatsApp is provided by Meta. Meta handles your WhatsApp account and the delivery of your messages under its own terms and privacy policy, which this notice does not cover.",
        ],
      },
      {
        title: "2. Data we process",
        items: [
          "Your WhatsApp phone number and profile name.",
          "Messages you exchange with the shop, including text and any photos, videos or other files you choose to send.",
          "Booking details: the services you ask about or book, dates and times, appointment history, and deposit or payment status. Card details are entered on the payment provider's page and are not received by the Shop Agent.",
          "Details you choose to give, such as your name, email address, preferred language, or notes for your appointment.",
          "Health information, only if you choose to share it (for example an injury or pregnancy), so the shop can provide your treatment safely.",
          "Whether you have agreed to, or opted out of, updates and offers from the shop.",
          "Details the shop already holds in its own booking system, such as your appointments and contact details, which may be used to send you booking confirmations and reminders.",
          "Technical records such as message IDs, delivery status and timestamps.",
        ],
      },
      {
        title: "3. How your data is used",
        items: [
          "To answer your questions about services, prices, opening hours and availability.",
          "To make, change or cancel bookings, and to send confirmations and reminders about your bookings.",
          "To pass your conversation to the shop's staff when a person needs to help, including translating messages for staff where needed.",
          "To send updates or offers only where you have agreed or the law otherwise allows. You can ask the shop to stop these messages at any time.",
          "To keep the service secure, prevent misuse and fix problems.",
          "To meet the shop's legal obligations, such as keeping accounting records.",
        ],
      },
      {
        title: "4. Automated replies",
        body:
          "Many replies are written by an AI system (Claude, provided by Anthropic) on the shop's behalf, using the shop's own information and your conversation. The shop's staff oversee the service and take over when needed, and you can ask to speak to a member of staff at any time. The AI does not make decisions that have legal or similarly significant effects on you.",
      },
      {
        title: "5. Legal bases",
        body:
          "The shop, as controller, decides the legal basis for each use. Depending on the law that applies to the shop (for example UK GDPR, EU GDPR or Thailand's Personal Data Protection Act), these are typically: steps you ask for before a booking and the performance of your booking; the shop's legitimate interests in answering enquiries, running its business and keeping the service secure; your consent for marketing messages where consent is required, and your explicit consent for health information you choose to share; and the shop's legal obligations, such as keeping accounting records. Records of treatments already provided, including related health information, may be kept after a deletion request where they are needed to establish or defend legal claims.",
      },
      {
        title: "6. Service providers (sub-processors)",
        items: [
          "Meta Platforms, WhatsApp Business Platform: carries messages between you and the shop.",
          "Anthropic, Claude API: produces replies, summaries and translations from the conversation content it is given, under Anthropic's commercial API terms.",
          "Vultr: cloud hosting for the application, database and backups (servers in the United Kingdom) and storage for files sent in chats (in the Netherlands).",
          "Gumon-operated servers in Thailand: service monitoring and operational logs.",
          "Staff calendars (for example Google Calendar), where a shop's staff connect one: appointment entries show the time and service, with no more than your first name or initial.",
          "Providers that the shop engages itself, such as its own booking system or payment provider, are covered by the shop's own privacy notice.",
          "If these providers change, we will update this page and its date.",
        ],
      },
      {
        title: "7. International transfers",
        body:
          "Gumon is based in Thailand, and the providers above operate in several countries, including the United Kingdom, the Netherlands, Thailand and the United States. Where UK GDPR or EU GDPR applies and data is transferred to a country without an adequacy decision, the transfer must rely on a safeguard recognised by those laws, such as the UK International Data Transfer Agreement or Addendum, the EU Standard Contractual Clauses, or the recipient's certification under the EU-US Data Privacy Framework and its UK Extension. You can write to data@gumon.io to ask which safeguard applies to a particular provider.",
      },
      {
        title: "8. How long data is kept",
        items: [
          "Each shop sets its own retention periods, and Gumon follows the shop's instructions. Some shops keep conversations and customer records until you ask for them to be deleted. You can ask the shop for its retention period.",
          "Records that the law requires a shop to keep, such as booking and payment records for accounting and tax, are kept for at least the legal period (in the United Kingdom, generally six years). After a deletion request they are kept without your name or phone number.",
          "Deleted data stays in encrypted backups until they are replaced by 14 later successful daily backups.",
        ],
      },
      {
        title: "9. Your rights",
        items: [
          "Depending on where you live, you can ask to access, correct or delete your data, receive a copy of it, object to or restrict its use, and withdraw consent at any time. Withdrawing consent does not affect processing that took place before.",
          "You can stop marketing messages from a shop at any time.",
          "Send requests to the shop, on WhatsApp or through its usual contact details. You can also write to data@gumon.io; we will pass your request to the shop and help it respond.",
          "We may ask you to confirm that you control the phone number before acting on a request.",
          "Requests are answered within the time the law sets, which is one month under UK GDPR and EU GDPR.",
        ],
        links: [{ href: shopAgentPaths.dataDeletion, label: "How to delete your data" }],
      },
      {
        title: "10. Security",
        body:
          "We protect data with measures that include encryption in transit, encrypted backups, and access restricted to Gumon's technical staff. No system is completely secure. If a security incident affects your data, Gumon will inform the shop without delay, and notifications will be made as the law requires.",
      },
      {
        title: "11. Children",
        body:
          "The service is intended for people arranging their own appointments and is not directed at children. If you believe a child has shared personal data with a shop through the service, please contact the shop or data@gumon.io so it can be deleted.",
      },
      {
        title: "12. Complaints",
        body:
          "If you have a concern, please contact the shop or data@gumon.io first so we can try to resolve it. You also have the right to complain to a data protection authority: in the United Kingdom, the Information Commissioner's Office (ico.org.uk); in Thailand, the Personal Data Protection Committee; in the European Economic Area, the authority in your country.",
      },
      {
        title: "13. Changes to this notice",
        body:
          "We may update this notice when the service or the law changes. The date at the top of this page shows the latest version.",
      },
      {
        title: "14. Contact",
        items: [
          "Privacy and data rights: data@gumon.io",
          `${companyInfoByLocale.en.legalName}, ${companyInfoByLocale.en.address}`,
        ],
      },
      {
        title: "Related pages",
        links: [
          { href: shopAgentPaths.dataDeletion, label: "Gumon Shop Agent data deletion instructions" },
          { href: shopAgentPaths.terms, label: "Gumon Shop Agent terms of service" },
          { href: "/privacy", label: "Privacy policy for the gumon.io website" },
        ],
      },
    ],
  },
  th: {
    title: "ประกาศความเป็นส่วนตัวของ Gumon Shop Agent",
    description: "วิธีที่ Gumon Shop Agent จัดการข้อมูลส่วนบุคคลเมื่อคุณส่งข้อความหาร้านที่ใช้บริการนี้ทาง WhatsApp",
    crumb: "ความเป็นส่วนตัว Shop Agent",
    kicker: "Gumon Shop Agent",
    heading: "ประกาศความเป็นส่วนตัวของ Gumon Shop Agent",
    updatedLabel: "ปรับปรุงล่าสุด",
    updatedAt: "30 ตุลาคม 2026",
    intro:
      "Gumon Shop Agent คือบริการรับส่งข้อความทาง WhatsApp ที่ Gumon Technology ให้บริการแก่ร้านที่ Gumon ดูแล เช่น ร้านนวดและสปา เมื่อคุณส่งข้อความหาร้านเหล่านี้ทาง WhatsApp ระบบ Shop Agent จะช่วยร้านตอบข้อความ ตอบคำถาม และจัดการการนัดหมาย ประกาศนี้อธิบายว่ามีข้อมูลส่วนบุคคลใดเกี่ยวข้อง ใครเป็นผู้รับผิดชอบ และคุณใช้สิทธิของคุณได้อย่างไร ประกาศนี้ใช้กับทุกร้านที่ใช้ Gumon Shop Agent ส่วนนโยบายความเป็นส่วนตัวของเว็บไซต์ gumon.io เป็นเอกสารแยกต่างหาก",
    sections: [
      {
        title: "1. ผู้รับผิดชอบข้อมูลของคุณ",
        items: [
          "ร้านที่คุณติดต่อเป็นผู้ควบคุมข้อมูลส่วนบุคคล ร้านเป็นผู้กำหนดวัตถุประสงค์และวิธีการใช้ข้อมูลของคุณ และเป็นช่องทางหลักสำหรับคำถามเกี่ยวกับข้อมูลของคุณ ชื่อและช่องทางติดต่อของร้านแสดงอยู่ในโปรไฟล์ธุรกิจ WhatsApp ของร้าน",
          `${companyInfoByLocale.th.legalName} (เลขทะเบียน ${companyInfoByLocale.th.registrationNumber} ประเทศไทย) เป็นผู้ให้บริการและดูแลระบบ Shop Agent ในฐานะผู้ประมวลผลข้อมูลส่วนบุคคล Gumon ประมวลผลข้อมูลของคุณในนามของร้าน และตามคำสั่งของร้านเท่านั้น`,
          "Gumon ไม่นำข้อมูลลูกค้าของร้านไปใช้เพื่อวัตถุประสงค์ของตนเอง ไม่ขายข้อมูล และไม่เปิดเผยข้อมูลลูกค้าของร้านหนึ่งให้อีกร้านหนึ่ง",
          "WhatsApp ให้บริการโดย Meta ซึ่งจัดการบัญชี WhatsApp ของคุณและการส่งข้อความตามข้อกำหนดและนโยบายความเป็นส่วนตัวของ Meta เอง ซึ่งไม่อยู่ในขอบเขตของประกาศนี้",
        ],
      },
      {
        title: "2. ข้อมูลที่เราประมวลผล",
        items: [
          "หมายเลขโทรศัพท์ WhatsApp และชื่อโปรไฟล์ของคุณ",
          "ข้อความที่คุณรับส่งกับร้าน รวมถึงรูปภาพ วิดีโอ หรือไฟล์อื่นที่คุณเลือกส่งมา",
          "ข้อมูลการนัดหมาย ได้แก่ บริการที่สอบถามหรือจอง วันและเวลา ประวัติการนัดหมาย และสถานะเงินมัดจำหรือการชำระเงิน ข้อมูลบัตรจะกรอกในหน้าของผู้ให้บริการชำระเงิน และระบบ Shop Agent ไม่ได้รับข้อมูลบัตร",
          "ข้อมูลที่คุณเลือกให้ เช่น ชื่อ อีเมล ภาษาที่ต้องการ หรือหมายเหตุสำหรับการนัดหมาย",
          "ข้อมูลสุขภาพ เฉพาะเมื่อคุณเลือกแจ้ง (เช่น อาการบาดเจ็บหรือการตั้งครรภ์) เพื่อให้ร้านให้บริการได้อย่างปลอดภัย",
          "การที่คุณตกลงรับหรือขอยกเลิกการรับข่าวสารและข้อเสนอจากร้าน",
          "ข้อมูลที่ร้านมีอยู่แล้วในระบบจองของร้านเอง เช่น นัดหมายและช่องทางติดต่อของคุณ ซึ่งอาจใช้ส่งการยืนยันและการแจ้งเตือนนัดหมาย",
          "ข้อมูลทางเทคนิค เช่น รหัสข้อความ สถานะการส่ง และเวลา",
        ],
      },
      {
        title: "3. การใช้ข้อมูลของคุณ",
        items: [
          "เพื่อตอบคำถามเกี่ยวกับบริการ ราคา เวลาเปิดทำการ และคิวว่าง",
          "เพื่อจอง เปลี่ยน หรือยกเลิกนัด และส่งการยืนยันและการแจ้งเตือนเกี่ยวกับนัดของคุณ",
          "เพื่อส่งต่อบทสนทนาให้พนักงานของร้านเมื่อต้องการให้คนช่วยดูแล รวมถึงแปลข้อความให้พนักงานเมื่อจำเป็น",
          "เพื่อส่งข่าวสารหรือข้อเสนอ เฉพาะเมื่อคุณตกลงหรือกฎหมายอนุญาต คุณขอให้ร้านหยุดส่งได้ทุกเมื่อ",
          "เพื่อรักษาความปลอดภัยของบริการ ป้องกันการใช้งานในทางที่ผิด และแก้ไขปัญหา",
          "เพื่อปฏิบัติตามหน้าที่ตามกฎหมายของร้าน เช่น การเก็บบันทึกทางบัญชี",
        ],
      },
      {
        title: "4. การตอบกลับอัตโนมัติ",
        body:
          "ข้อความตอบกลับจำนวนมากเขียนโดยระบบ AI (Claude ให้บริการโดย Anthropic) ในนามของร้าน โดยใช้ข้อมูลของร้านและบทสนทนาของคุณ พนักงานของร้านกำกับดูแลบริการและรับช่วงต่อเมื่อจำเป็น และคุณขอคุยกับพนักงานได้ทุกเมื่อ ระบบ AI ไม่ได้ตัดสินใจเรื่องใดที่มีผลทางกฎหมายหรือมีผลกระทบสำคัญในลักษณะเดียวกันต่อคุณ",
      },
      {
        title: "5. ฐานทางกฎหมาย",
        body:
          "ร้านในฐานะผู้ควบคุมข้อมูลเป็นผู้กำหนดฐานทางกฎหมายของการใช้ข้อมูลแต่ละอย่าง ขึ้นอยู่กับกฎหมายที่ใช้กับร้าน (เช่น UK GDPR, EU GDPR หรือพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 ของไทย) โดยทั่วไปได้แก่ การดำเนินการตามที่คุณขอก่อนการจองและการปฏิบัติตามการจองของคุณ ประโยชน์โดยชอบด้วยกฎหมายของร้านในการตอบคำถาม ดำเนินธุรกิจ และรักษาความปลอดภัยของบริการ ความยินยอมของคุณสำหรับข้อความการตลาดในกรณีที่กฎหมายกำหนดให้ต้องขอความยินยอม และความยินยอมโดยชัดแจ้งสำหรับข้อมูลสุขภาพที่คุณเลือกแจ้ง รวมถึงหน้าที่ตามกฎหมายของร้าน เช่น การเก็บบันทึกทางบัญชี บันทึกของบริการที่ให้ไปแล้ว รวมถึงข้อมูลสุขภาพที่เกี่ยวข้อง อาจถูกเก็บไว้หลังมีคำขอลบในกรณีที่จำเป็นเพื่อการก่อตั้งสิทธิหรือการต่อสู้ข้อเรียกร้องตามกฎหมาย",
      },
      {
        title: "6. ผู้ให้บริการ (ผู้ประมวลผลข้อมูลช่วง)",
        items: [
          "Meta Platforms, WhatsApp Business Platform: รับส่งข้อความระหว่างคุณกับร้าน",
          "Anthropic, Claude API: สร้างข้อความตอบกลับ สรุป และคำแปลจากเนื้อหาบทสนทนาที่ได้รับ ภายใต้ข้อกำหนดเชิงพาณิชย์ของ API ของ Anthropic",
          "Vultr: บริการคลาวด์สำหรับระบบ ฐานข้อมูล และข้อมูลสำรอง (เซิร์ฟเวอร์ในสหราชอาณาจักร) และที่เก็บไฟล์ที่ส่งในแชท (ในเนเธอร์แลนด์)",
          "เซิร์ฟเวอร์ที่ Gumon ดูแลในประเทศไทย: การเฝ้าระวังระบบและบันทึกการทำงาน",
          "ปฏิทินของพนักงาน (เช่น Google Calendar) ในกรณีที่พนักงานของร้านเชื่อมต่อไว้: รายการนัดแสดงเวลาและบริการ โดยมีชื่อของคุณไม่เกินชื่อต้นหรืออักษรแรก",
          "ผู้ให้บริการที่ร้านใช้เอง เช่น ระบบจองหรือผู้ให้บริการชำระเงินของร้าน อยู่ภายใต้ประกาศความเป็นส่วนตัวของร้านนั้น",
          "หากผู้ให้บริการเหล่านี้เปลี่ยนแปลง เราจะปรับปรุงหน้านี้และวันที่ปรับปรุง",
        ],
      },
      {
        title: "7. การส่งข้อมูลไปต่างประเทศ",
        body:
          "Gumon ตั้งอยู่ในประเทศไทย และผู้ให้บริการข้างต้นดำเนินงานในหลายประเทศ รวมถึงสหราชอาณาจักร เนเธอร์แลนด์ ไทย และสหรัฐอเมริกา ในกรณีที่ UK GDPR หรือ EU GDPR ใช้บังคับและมีการส่งข้อมูลไปยังประเทศที่ไม่มีคำวินิจฉัยว่ามีมาตรฐานการคุ้มครองที่เพียงพอ การส่งข้อมูลต้องอาศัยมาตรการคุ้มครองที่กฎหมายเหล่านั้นรับรอง เช่น UK International Data Transfer Agreement หรือ Addendum, EU Standard Contractual Clauses หรือการที่ผู้รับข้อมูลได้รับการรับรองภายใต้ EU-US Data Privacy Framework และ UK Extension คุณสอบถามได้ที่ data@gumon.io ว่าผู้ให้บริการรายใดใช้มาตรการใด",
      },
      {
        title: "8. ระยะเวลาการเก็บรักษา",
        items: [
          "แต่ละร้านเป็นผู้กำหนดระยะเวลาการเก็บข้อมูลของตน และ Gumon ปฏิบัติตามคำสั่งของร้าน บางร้านเก็บบทสนทนาและข้อมูลลูกค้าไว้จนกว่าคุณจะขอให้ลบ คุณสอบถามระยะเวลาการเก็บได้จากร้าน",
          "บันทึกที่กฎหมายกำหนดให้ร้านต้องเก็บ เช่น บันทึกการนัดหมายและการชำระเงินเพื่อการบัญชีและภาษี จะถูกเก็บอย่างน้อยตามระยะเวลาที่กฎหมายกำหนด (ในสหราชอาณาจักรโดยทั่วไปอย่างน้อยหกปี) หลังจากมีคำขอลบ บันทึกเหล่านี้จะถูกเก็บโดยไม่มีชื่อหรือหมายเลขโทรศัพท์ของคุณ",
          "ข้อมูลที่ลบแล้วยังอยู่ในข้อมูลสำรองที่เข้ารหัสจนกว่าจะถูกแทนที่ด้วยข้อมูลสำรองรายวันที่สำเร็จอีก 14 ชุด",
        ],
      },
      {
        title: "9. สิทธิของคุณ",
        items: [
          "ขึ้นอยู่กับกฎหมายในที่ที่คุณอาศัยอยู่ คุณสามารถขอเข้าถึง แก้ไข หรือลบข้อมูล ขอรับสำเนาข้อมูล คัดค้านหรือขอให้จำกัดการใช้ข้อมูล และถอนความยินยอมได้ทุกเมื่อ การถอนความยินยอมไม่กระทบการประมวลผลที่เกิดขึ้นก่อนหน้า",
          "คุณขอให้ร้านหยุดส่งข้อความการตลาดได้ทุกเมื่อ",
          "ส่งคำขอถึงร้านทาง WhatsApp หรือช่องทางติดต่อปกติของร้าน หรือเขียนถึง data@gumon.io ได้ เราจะส่งต่อคำขอให้ร้านและช่วยร้านดำเนินการ",
          "เราอาจขอให้คุณยืนยันว่าคุณเป็นผู้ใช้หมายเลขโทรศัพท์นั้นก่อนดำเนินการตามคำขอ",
          "คำขอจะได้รับการตอบภายในระยะเวลาที่กฎหมายกำหนด ซึ่งภายใต้ UK GDPR และ EU GDPR คือหนึ่งเดือน",
        ],
        links: [{ href: shopAgentPaths.dataDeletion, label: "วิธีขอลบข้อมูลของคุณ" }],
      },
      {
        title: "10. ความปลอดภัย",
        body:
          "เราปกป้องข้อมูลด้วยมาตรการต่าง ๆ เช่น การเข้ารหัสระหว่างการรับส่ง การเข้ารหัสข้อมูลสำรอง และการจำกัดสิทธิ์เข้าถึงเฉพาะเจ้าหน้าที่เทคนิคของ Gumon ไม่มีระบบใดปลอดภัยได้ทั้งหมด หากเกิดเหตุด้านความปลอดภัยที่กระทบข้อมูลของคุณ Gumon จะแจ้งร้านโดยไม่ชักช้า และจะมีการแจ้งเหตุตามที่กฎหมายกำหนด",
      },
      {
        title: "11. ผู้เยาว์",
        body:
          "บริการนี้มีไว้สำหรับผู้ที่นัดหมายด้วยตนเองและไม่ได้มุ่งให้บริการแก่เด็ก หากคุณเชื่อว่ามีเด็กส่งข้อมูลส่วนบุคคลให้ร้านผ่านบริการนี้ โปรดติดต่อร้านหรือ data@gumon.io เพื่อให้ลบข้อมูลนั้น",
      },
      {
        title: "12. การร้องเรียน",
        body:
          "หากมีข้อกังวล โปรดติดต่อร้านหรือ data@gumon.io ก่อน เพื่อให้เราพยายามแก้ไข คุณยังมีสิทธิร้องเรียนต่อหน่วยงานกำกับดูแลด้านการคุ้มครองข้อมูล ได้แก่ ในสหราชอาณาจักร Information Commissioner's Office (ico.org.uk) ในประเทศไทย สำนักงานคณะกรรมการคุ้มครองข้อมูลส่วนบุคคล และในเขตเศรษฐกิจยุโรป หน่วยงานกำกับดูแลในประเทศของคุณ",
      },
      {
        title: "13. การเปลี่ยนแปลงประกาศนี้",
        body:
          "เราอาจปรับปรุงประกาศนี้เมื่อบริการหรือกฎหมายเปลี่ยนแปลง วันที่ด้านบนของหน้านี้แสดงฉบับล่าสุด",
      },
      {
        title: "14. ติดต่อ",
        items: [
          "ความเป็นส่วนตัวและสิทธิในข้อมูล: data@gumon.io",
          `${companyInfoByLocale.th.legalName} ${companyInfoByLocale.th.address}`,
        ],
      },
      {
        title: "หน้าที่เกี่ยวข้อง",
        links: [
          { href: shopAgentPaths.dataDeletion, label: "วิธีขอลบข้อมูลจาก Gumon Shop Agent" },
          { href: shopAgentPaths.terms, label: "ข้อกำหนดการให้บริการของ Gumon Shop Agent" },
          { href: "/privacy", label: "นโยบายความเป็นส่วนตัวของเว็บไซต์ gumon.io" },
        ],
      },
    ],
  },
};
