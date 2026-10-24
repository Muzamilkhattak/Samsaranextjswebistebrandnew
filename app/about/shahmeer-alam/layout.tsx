import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Shahmeer K. Alam Esq, Executive Director | Samsara",
  description: "Learn more about our team at Samsara Aesthetics & Wellness in Plantation, FL.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
