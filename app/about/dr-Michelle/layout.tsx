import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Michelle Rzepka | Samsara Aesthetics & Wellness",
  description: "Learn more about Michelle Rzepka, Registered Nurse and Esthetician at Samsara Aesthetics and Wellness",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
