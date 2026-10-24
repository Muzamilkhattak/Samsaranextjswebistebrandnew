import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Erika | Samsara Aesthetics & Wellness",
  description: "Learn more about Erika  at Samsara Aesthetics and Wellness",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
