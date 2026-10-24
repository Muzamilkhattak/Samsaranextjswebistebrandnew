import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Toni Maguire | Samsara Aesthetics & Wellness",
  description: "Learn more about Toni Maguire, Practice Manager and Marketing Director at Samsara Aesthetics and Wellness",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
