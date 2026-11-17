export type Lang = "en" | "vi";

type Job = { role: string; org: string; years: string; points: string[]; award?: string };
type School = { name: string; detail: string; years: string; note?: string };
type Fact = { label: string; value: string };
type SkillGroup = { name: string; items: string[] };
type Language = { name: string; level: string };

export type Content = {
  lang: Lang;
  title: string;
  description: string;
  skip: string;
  backToTop: string;
  navLabel: string;
  nav: { home: string; about: string; experience: string; contact: string };
  switchTo: { href: string; label: string; name: string; lang: Lang };
  themeLabel: string;
  role: string;
  shortRole: string;
  hello: string;
  heroLine: { accent: string; rest: string };
  lead: string;
  emailMe: string;
  about: { heading: string; paragraphs: string[] };
  profile: {
    label: string;
    facts: Fact[];
    skillsHeading: string;
    skills: SkillGroup[];
    languagesHeading: string;
    languages: Language[];
  };
  experience: { heading: string; jobs: Job[] };
  education: { heading: string; schools: School[] };
  contact: { heading: string; phone: string; note: string };
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
  nav: { home: "Home", about: "About", experience: "Experience", contact: "Contact" },
  switchTo: { href: "/vi/", label: "VI", name: "Tiếng Việt", lang: "vi" },
  themeLabel: "Toggle dark mode",
  role: "Technical Lead, Cloud Expense at Money Forward",
  shortRole: "Technical Lead, Cloud Expense",
  hello: "I'm Dung Phan",
  heroLine: { accent: "Technical Lead", rest: " at Money Forward" },
  lead: "I build teams from zero and ship top-revenue cloud products.",
  emailMe: "Email me",
  about: {
    heading: "About",
    paragraphs: [
      "I am a technical lead at Money Forward Vietnam. I joined in July 2023 to lead Account Payable, and built that team from zero to more than ten engineers. In September 2025 I started the EX MFV team for Cloud Expense and lead it with Money Forward Group in Japan. We are five developers now.",
      "Before that I spent ten years in teams across Singapore, Switzerland and Vietnam: a cryptocurrency exchange at Coinhako, logistics port systems at Symphony, high-traffic databases at Asian Live Tech, and my first product at Ciiva.",
      "Both products sit at the top of Money Forward Group revenue. I work best in small teams, with clear writing and long stretches of focus.",
    ],
  },
  profile: {
    label: "Profile",
    facts: [
      { label: "Based in", value: "Ho Chi Minh City" },
      { label: "Company", value: "Money Forward Vietnam" },
      { label: "Building since", value: "2012" },
      { label: "Hiring", value: "Principal Engineers" },
    ],
    skillsHeading: "Skills",
    skills: [
      { name: "Backend", items: ["Ruby on Rails", "Node.js", "PostgreSQL", "GraphQL", "Microservices"] },
      { name: "Frontend", items: ["React", "Next.js", "TypeScript", "Vue", "Angular"] },
      { name: "Cloud", items: ["AWS"] },
      { name: "Leadership", items: ["Team building", "Hiring", "Scrum", "Dev process"] },
    ],
    languagesHeading: "Languages",
    languages: [
      { name: "Vietnamese", level: "Native" },
      { name: "English", level: "Working" },
    ],
  },
  experience: {
    heading: "Experience",
    jobs: [
      {
        role: "Technical Lead, Cloud Expense",
        org: "Money Forward Vietnam",
        years: "Sep 2025 to now",
        points: [
          "Started the EX MFV team for Cloud Expense and lead it together with Money Forward Group in Japan. Five developers so far.",
        ],
      },
      {
        role: "Technical Lead, Account Payable",
        org: "Money Forward Vietnam",
        years: "Jul 2023 to Sep 2025",
        points: [
          "Built the Vietnam team from zero to more than ten engineers: fullstack, backend and frontend developers and QA, for a top Account Payable product in Japan built in Fukuoka since 2015.",
          "Set up how the team works: Definition of Done, GitHub Flow and coding standards.",
          "Main contact for the Vietnam side with the Product Owner and stakeholders; helped shape the technical strategy and roadmap.",
          "Ruby on Rails, React, Next.js, REST and GraphQL, AWS, microservices.",
        ],
      },
      {
        role: "Senior Software Developer",
        org: "Freelance, Vietnam",
        years: "2023",
        points: [
          "Built and redesigned web products in Ruby on Rails and Node.js, with a focus on performance and scale.",
          "Worked with clients from requirements to delivery, then kept the products running.",
        ],
      },
      {
        role: "Senior Fullstack Developer",
        org: "Coinhako, Singapore",
        years: "2020 to 2022",
        points: [
          "Worked on the leading cryptocurrency exchange in Singapore and led its move from a monolith to microservices.",
          "Built identity verification features for MAS (Monetary Authority of Singapore) compliance.",
          "Worked with engineers from other major exchanges on wallet identification for centralised exchanges.",
        ],
        award: "Employee of the Quarter, three times in a row",
      },
      {
        role: "Senior Fullstack Developer, Scrum Master",
        org: "Freelance, Vietnam",
        years: "2019 to 2020",
        points: [
          "Built crypto cold wallets and social products with Node.js (Express, Koa), Angular and real-time sockets.",
          "Turned web apps into mobile apps with Ionic and ran the Scrum sprints.",
        ],
      },
      {
        role: "Team Leader",
        org: "Symphony Creative Solution, Singapore",
        years: "2016 to 2019",
        points: [
          "Led two large logistics port projects in Ruby on Rails, with teams of up to eight.",
          "Worked directly with clients in Japan, the USA and Korea, and built quick prototypes for them to review.",
        ],
        award: "Project of the Year, twice",
      },
      {
        role: "Database Developer",
        org: "Asian Live Tech",
        years: "2015 to 2016",
        points: [
          "Designed and ran databases for high-traffic online gaming systems in Asia-Pacific: capacity planning, tuning, backup and recovery.",
        ],
      },
      {
        role: "Software Developer",
        org: "Ciiva.com, Switzerland",
        years: "2012 to 2015",
        points: [
          "Started as an intern and grew from web designer to front-end and then .NET developer.",
          "Built crawlers for chip makers' data and contributed to OpenERP (now Odoo) for the parent company, Toradex.",
          "The product was later acquired by a European company, and more recently by a Japanese one.",
        ],
      },
    ],
  },
  education: {
    heading: "Education",
    schools: [
      {
        name: "CoderSchool",
        detail: "Ruby on Rails course",
        years: "2016",
        note: "Then a teaching assistant for the same course.",
      },
      { name: "CNC Aptech", detail: "Higher Diploma in Software Engineering", years: "2010 to 2013" },
    ],
  },
  contact: {
    heading: "Contact",
    phone: "Phone",
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
  nav: { home: "Trang chủ", about: "Giới thiệu", experience: "Kinh nghiệm", contact: "Liên hệ" },
  switchTo: { href: "/", label: "EN", name: "English", lang: "en" },
  themeLabel: "Bật/tắt chế độ tối",
  role: "Technical Lead, Cloud Expense tại Money Forward",
  shortRole: "Technical Lead, Cloud Expense",
  hello: "Tôi là Dung Phan",
  heroLine: { accent: "Technical Lead", rest: " tại Money Forward" },
  lead: "Tôi xây dựng đội ngũ từ con số không và phát triển những sản phẩm cloud dẫn đầu doanh thu.",
  emailMe: "Gửi email",
  about: {
    heading: "Giới thiệu",
    paragraphs: [
      "Tôi là technical lead tại Money Forward Vietnam. Tôi gia nhập vào tháng 7/2023 để dẫn dắt Account Payable và xây dựng đội từ con số không lên hơn mười kỹ sư. Tháng 9/2025, tôi lập đội EX MFV cho Cloud Expense và cùng Money Forward Group tại Nhật Bản dẫn dắt đội. Hiện đội có năm lập trình viên.",
      "Trước đó, tôi có mười năm làm việc trong các đội ở Singapore, Thụy Sĩ và Việt Nam: sàn giao dịch tiền mã hoá ở Coinhako, hệ thống cảng logistics ở Symphony, cơ sở dữ liệu lưu lượng lớn ở Asian Live Tech, và sản phẩm đầu tiên ở Ciiva.",
      "Cả hai sản phẩm đều thuộc nhóm dẫn đầu doanh thu của Money Forward Group. Tôi làm việc tốt nhất trong đội nhỏ, viết rõ ràng và có những khoảng thời gian dài để tập trung.",
    ],
  },
  profile: {
    label: "Hồ sơ",
    facts: [
      { label: "Sống tại", value: "TP. Hồ Chí Minh" },
      { label: "Công ty", value: "Money Forward Vietnam" },
      { label: "Đi làm từ", value: "2012" },
      { label: "Đang tuyển", value: "Principal Engineer" },
    ],
    skillsHeading: "Kỹ năng",
    skills: [
      { name: "Backend", items: ["Ruby on Rails", "Node.js", "PostgreSQL", "GraphQL", "Microservices"] },
      { name: "Frontend", items: ["React", "Next.js", "TypeScript", "Vue", "Angular"] },
      { name: "Cloud", items: ["AWS"] },
      { name: "Lãnh đạo", items: ["Xây dựng đội", "Tuyển dụng", "Scrum", "Quy trình phát triển"] },
    ],
    languagesHeading: "Ngôn ngữ",
    languages: [
      { name: "Tiếng Việt", level: "Bản ngữ" },
      { name: "Tiếng Anh", level: "Làm việc" },
    ],
  },
  experience: {
    heading: "Kinh nghiệm",
    jobs: [
      {
        role: "Technical Lead, Cloud Expense",
        org: "Money Forward Vietnam",
        years: "09/2025 đến nay",
        points: [
          "Lập đội EX MFV cho Cloud Expense và cùng Money Forward Group tại Nhật Bản dẫn dắt đội. Hiện có năm lập trình viên.",
        ],
      },
      {
        role: "Technical Lead, Account Payable",
        org: "Money Forward Vietnam",
        years: "07/2023 đến 09/2025",
        points: [
          "Xây dựng đội Việt Nam từ con số không lên hơn mười kỹ sư (fullstack, backend, frontend và QA) cho một sản phẩm Account Payable hàng đầu Nhật Bản, do đội Fukuoka phát triển từ 2015.",
          "Thiết lập quy trình làm việc của đội: Definition of Done, GitHub Flow và chuẩn code.",
          "Đầu mối của phía Việt Nam với Product Owner và các bên liên quan; tham gia định hướng kỹ thuật và lộ trình sản phẩm.",
          "Ruby on Rails, React, Next.js, REST và GraphQL, AWS, microservices.",
        ],
      },
      {
        role: "Senior Software Developer",
        org: "Freelance, Việt Nam",
        years: "2023",
        points: [
          "Xây dựng và thiết kế lại các sản phẩm web bằng Ruby on Rails và Node.js, chú trọng hiệu năng và khả năng mở rộng.",
          "Làm việc trực tiếp với khách hàng từ khâu lấy yêu cầu đến bàn giao, rồi tiếp tục bảo trì sản phẩm.",
        ],
      },
      {
        role: "Senior Fullstack Developer",
        org: "Coinhako, Singapore",
        years: "2020 đến 2022",
        points: [
          "Phát triển sàn giao dịch tiền mã hoá hàng đầu Singapore và dẫn dắt việc chuyển từ monolith sang microservices.",
          "Xây dựng tính năng xác minh danh tính theo yêu cầu của MAS (Cơ quan Tiền tệ Singapore).",
          "Cùng kỹ sư của các sàn lớn khác phát triển tính năng định danh ví người dùng trên sàn tập trung.",
        ],
        award: "Nhân viên xuất sắc của quý, ba lần liên tiếp",
      },
      {
        role: "Senior Fullstack Developer, Scrum Master",
        org: "Freelance, Việt Nam",
        years: "2019 đến 2020",
        points: [
          "Xây dựng ví lạnh tiền mã hoá và sản phẩm mạng xã hội bằng Node.js (Express, Koa), Angular và socket thời gian thực.",
          "Chuyển ứng dụng web thành ứng dụng di động bằng Ionic và điều phối các sprint Scrum.",
        ],
      },
      {
        role: "Team Leader",
        org: "Symphony Creative Solution, Singapore",
        years: "2016 đến 2019",
        points: [
          "Dẫn dắt hai dự án lớn về cảng logistics bằng Ruby on Rails, đội tối đa tám người.",
          "Làm việc trực tiếp với khách hàng ở Nhật Bản, Mỹ và Hàn Quốc, dựng prototype nhanh để khách duyệt.",
        ],
        award: "Dự án của năm, hai lần",
      },
      {
        role: "Database Developer",
        org: "Asian Live Tech",
        years: "2015 đến 2016",
        points: [
          "Thiết kế và vận hành cơ sở dữ liệu cho các hệ thống game trực tuyến lưu lượng lớn ở châu Á – Thái Bình Dương: hoạch định dung lượng, tối ưu, sao lưu và phục hồi.",
        ],
      },
      {
        role: "Software Developer",
        org: "Ciiva.com, Thụy Sĩ",
        years: "2012 đến 2015",
        points: [
          "Bắt đầu là thực tập sinh, rồi làm thiết kế web, front-end và sau đó là lập trình viên .NET.",
          "Xây dựng công cụ thu thập dữ liệu từ các hãng chip và tham gia phát triển OpenERP (nay là Odoo) cho công ty mẹ Toradex.",
          "Sản phẩm sau đó được một công ty châu Âu mua lại, và gần đây là một công ty Nhật Bản.",
        ],
      },
    ],
  },
  education: {
    heading: "Học vấn",
    schools: [
      {
        name: "CoderSchool",
        detail: "Khoá học Ruby on Rails",
        years: "2016",
        note: "Sau đó làm trợ giảng cho chính khoá học này.",
      },
      { name: "CNC Aptech", detail: "Higher Diploma ngành Kỹ thuật phần mềm", years: "2010 đến 2013" },
    ],
  },
  contact: {
    heading: "Liên hệ",
    phone: "Điện thoại",
    note: "TP. Hồ Chí Minh, Việt Nam. Chúng tôi đang mở rộng đội Cloud Expense và tìm kiếm Principal Engineer.",
  },
  city: "TP. Hồ Chí Minh, Việt Nam",
};
