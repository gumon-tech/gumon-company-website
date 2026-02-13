export type SolutionItem = {
  slug: "government" | "healthcare" | "education" | "enterprise";
  title: string;
  summary: string;
  context: string;
  model: string[];
  outcomes: string[];
};

export const solutionItems: SolutionItem[] = [
  {
    slug: "government",
    title: "Government",
    summary:
      "รองรับงานภาครัฐที่ต้องการมาตรฐานการเชื่อมระบบ, governance ที่ตรวจสอบได้ และการส่งมอบแบบค่อยเป็นค่อยไป",
    context:
      "หน่วยงานภาครัฐมักมีระบบเดิมหลายชุดและข้อกำกับที่เข้มงวด การออกแบบโซลูชันต้องให้ทั้งความโปร่งใสและความยืดหยุ่นในการขยายบริการ",
    model: [
      "วาง baseline integration และ API contracts กลางตั้งแต่ระยะแรก",
      "แยกบทบาท platform governance และ delivery execution ให้ชัดเจน",
      "ออก rollout plan แบบ phase เพื่อลดความเสี่ยงด้านการเปลี่ยนผ่านระบบ",
    ],
    outcomes: [
      "ลดความเสี่ยงจากการเชื่อมต่อระบบข้ามหน่วยงาน",
      "เพิ่มความโปร่งใสของกระบวนการส่งมอบและการติดตามผล",
      "ขยายบริการใหม่ได้เร็วขึ้นบนมาตรฐานเดียวกัน",
    ],
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    summary:
      "ออกแบบ workflow และข้อมูลบริการสุขภาพให้ขยายได้ พร้อมรักษาความสม่ำเสมอของบริการข้ามทีม",
    context:
      "บริบท healthcare ต้องรักษาความต่อเนื่องของบริการและเชื่อมข้อมูลหลายระบบโดยไม่กระทบการปฏิบัติงานหน้างาน",
    model: [
      "แยก service ตาม workflow สำคัญและกำหนด event contracts ชัดเจน",
      "ใช้ shared standards เพื่อให้ทีมพัฒนาและทีมหน้างานทำงานบนภาษาเดียวกัน",
      "วาง observability เพื่อคุมเสถียรภาพและรอบการปรับปรุงระบบ",
    ],
    outcomes: [
      "ลด cycle time การพัฒนาฟีเจอร์ใหม่",
      "เพิ่มความต่อเนื่องของบริการข้ามทีมปฏิบัติการ",
      "ยกระดับความพร้อมในการขยายบริการระยะถัดไป",
    ],
  },
  {
    slug: "education",
    title: "Education",
    summary:
      "ยกระดับระบบเรียนรู้และระบบสนับสนุนสถาบันผ่านแพลตฟอร์มที่ใช้ซ้ำได้ในหลายหน่วยงาน",
    context:
      "สถาบันการศึกษามักมีความต้องการระบบที่หลากหลายและเปลี่ยนเร็ว การสร้างองค์ประกอบที่ใช้ซ้ำได้ช่วยลดภาระดูแลระยะยาว",
    model: [
      "ออกแบบ architecture ที่แยกส่วนความรับผิดชอบของบริการอย่างชัดเจน",
      "กำหนดมาตรฐานการส่งมอบและ onboarding สำหรับหลายทีม",
      "เชื่อม learning workflow กับการปฏิบัติงานจริงของทีมพัฒนา",
    ],
    outcomes: [
      "ลดต้นทุนการพัฒนาแบบแยกส่วน",
      "เพิ่มความเร็วในการขยายบริการใหม่",
      "รักษาคุณภาพการส่งมอบให้สม่ำเสมอข้ามโครงการ",
    ],
  },
  {
    slug: "enterprise",
    title: "Enterprise Modernization",
    summary:
      "ช่วยองค์กรเปลี่ยนผ่านจากระบบเดิมสู่ service-based architecture โดยไม่เร่งความเสี่ยงเกินความพร้อม",
    context:
      "องค์กรขนาดใหญ่ต้อง modernize ระบบเดิมโดยไม่กระทบธุรกิจหลัก การเดินแผนตาม readiness เป็นจุดสำคัญกว่าการเร่งเปลี่ยนทั้งหมดในครั้งเดียว",
    model: [
      "ประเมิน readiness ของทีมและระบบก่อนกำหนดลำดับ modernize",
      "เริ่มจาก domain ที่มีผลกระทบสูงและคุมความเสี่ยงได้",
      "ใช้แพลตฟอร์มกลางเพื่อเร่งการส่งมอบซ้ำในหลายหน่วยธุรกิจ",
    ],
    outcomes: [
      "เพิ่มความพร้อม scale ของระบบองค์กร",
      "ลด technical debt สะสมจากการพัฒนาเฉพาะจุด",
      "ทำให้รอบการส่งมอบคาดการณ์ได้มากขึ้น",
    ],
  },
];

export function getSolutionBySlug(slug: string) {
  return solutionItems.find((item) => item.slug === slug);
}

export function getRelatedSolutions(slug: string, limit = 2) {
  return solutionItems.filter((item) => item.slug !== slug).slice(0, limit);
}
