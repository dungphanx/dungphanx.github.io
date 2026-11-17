export type Lang = "en" | "vi";

type Job = { role: string; org: string; years: string };

export type Content = {
  lang: Lang;
  title: string;
  description: string;
  skip: string;
  backToTop: string;
  navLabel: string;
  nav: { experience: string; contact: string; email: string };
  switchTo: { href: string; label: string; name: string; lang: Lang };
  themeLabel: string;
  role: string;
  lead: string;
  emailMe: string;
  about: { heading: string; paragraphs: string[]; focus: string };
  experience: { heading: string; jobs: Job[] };
  contact: { heading: string; note: string };
  city: string;
};

export const en: Content = {
  lang: "en",
  title: "Dung Phan — Technical Lead, Cloud Expense at Money Forward",
  description:
    "Dung Phan is a technical lead at Money Forward Vietnam. He built the Account Payable team from zero and now leads the Product VN team for Cloud Expense.",
  skip: "Skip to content",
  backToTop: "Dung Phan, back to top",
  navLabel: "Primary",
  nav: { experience: "Experience", contact: "Contact", email: "Email" },
  switchTo: { href: "/vi/", label: "VI", name: "Tiếng Việt", lang: "vi" },
  themeLabel: "Toggle dark mode",
  role: "Technical Lead, Cloud Expense at Money Forward",
  lead: "I build teams from zero and ship top-revenue cloud products.",
  emailMe: "Email me",
  about: {
    heading: "About",
    paragraphs: [
      "I am a technical lead at Money Forward Vietnam. I joined in July 2023 to lead Account Payable, and built that team from zero to more than ten engineers. In September 2025 I started the EX MFV team for Cloud Expense and lead it with Money Forward Group in Japan. We are five developers now.",
      "Both products sit at the top of Money Forward Group revenue. I work best in small teams, with clear writing and long stretches of focus.",
    ],
    focus:
      "Ruby on Rails, React, Next.js, TypeScript, AWS, microservices, team leadership.",
  },
  experience: {
    heading: "Experience",
    jobs: [
      { role: "Technical Lead, Cloud Expense", org: "Money Forward Vietnam", years: "Sep 2025 to now" },
      { role: "Technical Lead, Account Payable", org: "Money Forward Vietnam", years: "Jul 2023 to Sep 2025" },
      { role: "Senior Software Developer", org: "Freelance, Vietnam", years: "2023" },
      { role: "Senior Fullstack Developer", org: "Coinhako, Singapore", years: "2020 to 2022" },
      { role: "Senior Fullstack Developer, Scrum Master", org: "Freelance, Vietnam", years: "2019 to 2020" },
      { role: "Team Leader", org: "Symphony Creative Solution, Singapore", years: "2016 to 2019" },
      { role: "Database Developer", org: "Asian Live Tech", years: "2015 to 2016" },
      { role: "Software Developer", org: "Ciiva.com, Switzerland", years: "2012 to 2015" },
    ],
  },
  contact: {
    heading: "Contact",
    note: "Ho Chi Minh City, Vietnam. We are growing the team for Cloud Expense and looking for Principal Engineers.",
  },
  city: "Ho Chi Minh City, Vietnam",
};

export const vi: Content = {
  lang: "vi",
  title: "Dung Phan — Technical Lead, Cloud Expense tại Money Forward",
  description:
    "Dung Phan là technical lead tại Money Forward Vietnam. Anh xây dựng đội Account Payable từ con số không và hiện dẫn dắt đội phát triển Cloud Expense.",
  skip: "Bỏ qua đến nội dung",
  backToTop: "Dung Phan, về đầu trang",
  navLabel: "Điều hướng chính",
  nav: { experience: "Kinh nghiệm", contact: "Liên hệ", email: "Email" },
  switchTo: { href: "/", label: "EN", name: "English", lang: "en" },
  themeLabel: "Bật/tắt chế độ tối",
  role: "Technical Lead, Cloud Expense tại Money Forward",
  lead: "Tôi xây dựng đội ngũ từ con số không và phát triển những sản phẩm cloud dẫn đầu doanh thu.",
  emailMe: "Gửi email",
  about: {
    heading: "Giới thiệu",
    paragraphs: [
      "Tôi là technical lead tại Money Forward Vietnam. Tôi gia nhập vào tháng 7/2023 để dẫn dắt Account Payable và xây dựng đội từ con số không lên hơn mười kỹ sư. Tháng 9/2025, tôi lập đội EX MFV cho Cloud Expense và cùng Money Forward Group tại Nhật Bản dẫn dắt đội. Hiện đội có năm lập trình viên.",
      "Cả hai sản phẩm đều thuộc nhóm dẫn đầu doanh thu của Money Forward Group. Tôi làm việc tốt nhất trong đội nhỏ, viết rõ ràng và có những khoảng thời gian dài để tập trung.",
    ],
    focus:
      "Ruby on Rails, React, Next.js, TypeScript, AWS, microservices, lãnh đạo đội ngũ.",
  },
  experience: {
    heading: "Kinh nghiệm",
    jobs: [
      { role: "Technical Lead, Cloud Expense", org: "Money Forward Vietnam", years: "09/2025 đến nay" },
      { role: "Technical Lead, Account Payable", org: "Money Forward Vietnam", years: "07/2023 đến 09/2025" },
      { role: "Senior Software Developer", org: "Freelance, Việt Nam", years: "2023" },
      { role: "Senior Fullstack Developer", org: "Coinhako, Singapore", years: "2020 đến 2022" },
      { role: "Senior Fullstack Developer, Scrum Master", org: "Freelance, Việt Nam", years: "2019 đến 2020" },
      { role: "Team Leader", org: "Symphony Creative Solution, Singapore", years: "2016 đến 2019" },
      { role: "Database Developer", org: "Asian Live Tech", years: "2015 đến 2016" },
      { role: "Software Developer", org: "Ciiva.com, Thụy Sĩ", years: "2012 đến 2015" },
    ],
  },
  contact: {
    heading: "Liên hệ",
    note: "TP. Hồ Chí Minh, Việt Nam. Chúng tôi đang mở rộng đội Cloud Expense và tìm kiếm Principal Engineer.",
  },
  city: "TP. Hồ Chí Minh, Việt Nam",
};
