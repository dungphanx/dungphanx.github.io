import type { IconName } from "./icons";

export const SITE = "https://dungphanx.github.io";
export const EMAIL = "mailto:dungphanx@gmail.com";
export const LINKEDIN = "https://www.linkedin.com/in/dungphanx/";
export const GITHUB = "https://github.com/dungphanx";
export const PHONE = "tel:+84933842933";

export type ContactLink = {
  icon: IconName;
  label: string;
  value: string;
  href: string;
  external?: boolean;
  numeric?: boolean;
};

export function contactLinks(phoneLabel: string): ContactLink[] {
  return [
    { icon: "mail", label: "Email", value: "dungphanx@gmail.com", href: EMAIL },
    { icon: "linkedin", label: "LinkedIn", value: "in/dungphanx", href: LINKEDIN, external: true },
    { icon: "github", label: "GitHub", value: "dungphanx", href: GITHUB, external: true },
    { icon: "phone", label: phoneLabel, value: "+84 933 842 933", href: PHONE, numeric: true },
  ];
}

/** The round icon buttons under the avatar: every contact link except the phone. */
export const socialLinks = contactLinks("").filter((l) => l.icon !== "phone");
