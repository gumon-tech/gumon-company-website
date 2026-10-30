import type { Locale } from "@/lib/i18n";

// Box at the top of /privacy and /terms: those pages cover the gumon.io website only,
// and the Shop Agent (WhatsApp service for shops) has its own documents.
export type ShopAgentNoticeCopy = {
  text: string;
  privacy: string;
  dataDeletion: string;
  terms: string;
};

export const shopAgentNoticeByLocale: Partial<Record<Locale, ShopAgentNoticeCopy>> = {
  en: {
    text: "This page covers the gumon.io website. If you message a shop that Gumon supports on WhatsApp, Gumon Shop Agent handles your messages on the shop's behalf and is covered by its own documents:",
    privacy: "Shop Agent privacy notice",
    dataDeletion: "Data deletion instructions",
    terms: "Shop Agent terms of service",
  },
  th: {
    text: "หน้านี้ครอบคลุมเว็บไซต์ gumon.io หากคุณส่งข้อความทาง WhatsApp หาร้านที่ Gumon ดูแล ระบบ Gumon Shop Agent จะจัดการข้อความของคุณในนามของร้าน และมีเอกสารของตนเองดังนี้",
    privacy: "ประกาศความเป็นส่วนตัวของ Shop Agent",
    dataDeletion: "วิธีขอลบข้อมูล",
    terms: "ข้อกำหนดการให้บริการของ Shop Agent",
  },
  "zh-CN": {
    text: "本页面适用于 gumon.io 网站。如果您通过 WhatsApp 向 Gumon 提供支持的商家发送消息，Gumon Shop Agent 将代表该商家处理您的消息，并适用其专属文件：",
    privacy: "Shop Agent 隐私声明",
    dataDeletion: "数据删除说明",
    terms: "Shop Agent 服务条款",
  },
  "zh-TW": {
    text: "本頁面適用於 gumon.io 網站。若您透過 WhatsApp 傳送訊息給 Gumon 所支援的商家，Gumon Shop Agent 會代表該商家處理您的訊息，並適用其專屬文件：",
    privacy: "Shop Agent 隱私權聲明",
    dataDeletion: "資料刪除說明",
    terms: "Shop Agent 服務條款",
  },
  ja: {
    text: "このページは gumon.io ウェブサイトに適用されます。Gumon が支援する店舗に WhatsApp でメッセージを送信された場合、Gumon Shop Agent が店舗に代わってメッセージを処理します。その取り扱いには、以下の専用文書が適用されます：",
    privacy: "Shop Agent プライバシー通知",
    dataDeletion: "データ削除の手順",
    terms: "Shop Agent 利用規約",
  },
  ko: {
    text: "이 페이지는 gumon.io 웹사이트에 적용됩니다. Gumon이 지원하는 상점에 WhatsApp으로 메시지를 보내시면 Gumon Shop Agent가 상점을 대신하여 메시지를 처리하며, 이에 대해서는 별도의 문서가 적용됩니다:",
    privacy: "Shop Agent 개인정보 처리 안내",
    dataDeletion: "데이터 삭제 안내",
    terms: "Shop Agent 서비스 약관",
  },
  vi: {
    text: "Trang này áp dụng cho website gumon.io. Nếu bạn nhắn tin qua WhatsApp cho một cửa hàng được Gumon hỗ trợ, Gumon Shop Agent sẽ xử lý tin nhắn của bạn thay mặt cửa hàng và được điều chỉnh bởi các tài liệu riêng sau:",
    privacy: "Thông báo quyền riêng tư của Shop Agent",
    dataDeletion: "Hướng dẫn xóa dữ liệu",
    terms: "Điều khoản dịch vụ của Shop Agent",
  },
  id: {
    text: "Halaman ini mencakup situs web gumon.io. Jika Anda mengirim pesan melalui WhatsApp ke toko yang didukung oleh Gumon, Gumon Shop Agent menangani pesan Anda atas nama toko tersebut dan diatur oleh dokumen tersendiri berikut:",
    privacy: "Pemberitahuan privasi Shop Agent",
    dataDeletion: "Petunjuk penghapusan data",
    terms: "Ketentuan layanan Shop Agent",
  },
  ms: {
    text: "Halaman ini meliputi laman web gumon.io. Jika anda menghantar mesej melalui WhatsApp kepada kedai yang disokong oleh Gumon, Gumon Shop Agent mengendalikan mesej anda bagi pihak kedai tersebut dan tertakluk kepada dokumen tersendiri berikut:",
    privacy: "Notis privasi Shop Agent",
    dataDeletion: "Arahan pemadaman data",
    terms: "Terma perkhidmatan Shop Agent",
  },
  hi: {
    text: "यह पृष्ठ gumon.io वेबसाइट पर लागू होता है। यदि आप WhatsApp पर किसी ऐसी दुकान को संदेश भेजते हैं जिसे Gumon सहयोग देता है, तो Gumon Shop Agent दुकान की ओर से आपके संदेशों को संभालता है और उस पर इसके अपने अलग दस्तावेज़ लागू होते हैं:",
    privacy: "Shop Agent गोपनीयता सूचना",
    dataDeletion: "डेटा हटाने के निर्देश",
    terms: "Shop Agent सेवा की शर्तें",
  },
  ar: {
    text: "تنطبق هذه الصفحة على موقع gumon.io. إذا راسلتَ عبر WhatsApp متجرًا تدعمه Gumon، فإن Gumon Shop Agent يعالج رسائلك نيابةً عن المتجر، وتسري عليه مستنداته الخاصة التالية:",
    privacy: "إشعار الخصوصية الخاص بـ Shop Agent",
    dataDeletion: "تعليمات حذف البيانات",
    terms: "شروط خدمة Shop Agent",
  },
  he: {
    text: "דף זה חל על אתר gumon.io. אם תשלחו הודעה ב-WhatsApp לחנות ש-Gumon תומכת בה, Gumon Shop Agent מטפל בהודעותיכם מטעם החנות, וחלים עליו מסמכים נפרדים משלו:",
    privacy: "הודעת פרטיות של Shop Agent",
    dataDeletion: "הנחיות למחיקת נתונים",
    terms: "תנאי השירות של Shop Agent",
  },
  es: {
    text: "Esta página abarca el sitio web gumon.io. Si usted envía un mensaje por WhatsApp a una tienda a la que Gumon presta soporte, Gumon Shop Agent gestiona sus mensajes en nombre de la tienda y se rige por sus propios documentos:",
    privacy: "Aviso de privacidad de Shop Agent",
    dataDeletion: "Instrucciones para la eliminación de datos",
    terms: "Términos del servicio de Shop Agent",
  },
  "pt-BR": {
    text: "Esta página abrange o site gumon.io. Se você enviar uma mensagem pelo WhatsApp para uma loja atendida pela Gumon, o Gumon Shop Agent trata as suas mensagens em nome da loja e é regido por documentos próprios:",
    privacy: "Aviso de privacidade do Shop Agent",
    dataDeletion: "Instruções para exclusão de dados",
    terms: "Termos de serviço do Shop Agent",
  },
  fr: {
    text: "Cette page concerne le site web gumon.io. Si vous envoyez un message sur WhatsApp à une boutique prise en charge par Gumon, Gumon Shop Agent traite vos messages au nom de la boutique et est régi par ses propres documents :",
    privacy: "Avis de confidentialité de Shop Agent",
    dataDeletion: "Instructions de suppression des données",
    terms: "Conditions d'utilisation de Shop Agent",
  },
  de: {
    text: "Diese Seite gilt für die Website gumon.io. Wenn Sie über WhatsApp eine Nachricht an ein Geschäft senden, das von Gumon unterstützt wird, verarbeitet Gumon Shop Agent Ihre Nachrichten im Namen des Geschäfts; hierfür gelten eigene Dokumente:",
    privacy: "Datenschutzhinweis zu Shop Agent",
    dataDeletion: "Anleitung zur Datenlöschung",
    terms: "Nutzungsbedingungen für Shop Agent",
  },
  it: {
    text: "Questa pagina riguarda il sito web gumon.io. Se invia un messaggio su WhatsApp a un negozio supportato da Gumon, Gumon Shop Agent gestisce i suoi messaggi per conto del negozio ed è disciplinato da documenti propri:",
    privacy: "Informativa sulla privacy di Shop Agent",
    dataDeletion: "Istruzioni per la cancellazione dei dati",
    terms: "Termini di servizio di Shop Agent",
  },
  nl: {
    text: "Deze pagina heeft betrekking op de website gumon.io. Als u via WhatsApp een bericht stuurt naar een winkel die door Gumon wordt ondersteund, verwerkt Gumon Shop Agent uw berichten namens de winkel en gelden daarvoor eigen documenten:",
    privacy: "Privacyverklaring van Shop Agent",
    dataDeletion: "Instructies voor gegevensverwijdering",
    terms: "Servicevoorwaarden van Shop Agent",
  },
  pl: {
    text: "Ta strona dotyczy witryny gumon.io. Jeśli wysyłają Państwo wiadomość przez WhatsApp do sklepu obsługiwanego przez Gumon, Gumon Shop Agent przetwarza te wiadomości w imieniu sklepu, a zasady jego działania określają odrębne dokumenty:",
    privacy: "Informacja o prywatności Shop Agent",
    dataDeletion: "Instrukcja usuwania danych",
    terms: "Regulamin usługi Shop Agent",
  },
  tr: {
    text: "Bu sayfa gumon.io web sitesini kapsar. Gumon'un desteklediği bir mağazaya WhatsApp üzerinden mesaj gönderirseniz, Gumon Shop Agent mesajlarınızı mağaza adına işler ve kendi belgelerine tabidir:",
    privacy: "Shop Agent gizlilik bildirimi",
    dataDeletion: "Veri silme talimatları",
    terms: "Shop Agent hizmet şartları",
  },
  ru: {
    text: "Эта страница относится к веб-сайту gumon.io. Если вы пишете через WhatsApp в магазин, который поддерживает Gumon, Gumon Shop Agent обрабатывает ваши сообщения от имени магазина, и на это распространяются отдельные документы:",
    privacy: "Уведомление о конфиденциальности Shop Agent",
    dataDeletion: "Инструкции по удалению данных",
    terms: "Условия обслуживания Shop Agent",
  },
  uk: {
    text: "Ця сторінка стосується вебсайту gumon.io. Якщо ви надсилаєте повідомлення через WhatsApp магазину, який підтримує Gumon, Gumon Shop Agent обробляє ваші повідомлення від імені магазину, і на це поширюються окремі документи:",
    privacy: "Повідомлення про конфіденційність Shop Agent",
    dataDeletion: "Інструкції з видалення даних",
    terms: "Умови надання послуг Shop Agent",
  },
  sv: {
    text: "Den här sidan gäller webbplatsen gumon.io. Om du skickar ett meddelande via WhatsApp till en butik som Gumon stöder hanterar Gumon Shop Agent dina meddelanden på butikens vägnar och omfattas av egna dokument:",
    privacy: "Sekretessmeddelande för Shop Agent",
    dataDeletion: "Anvisningar för radering av data",
    terms: "Användarvillkor för Shop Agent",
  },
};
