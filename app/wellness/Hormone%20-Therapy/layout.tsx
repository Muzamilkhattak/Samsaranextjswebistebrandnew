import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hormone Therapy Plantation, FL | Samsara Aesthetics & Wellness",
  description: "Hormone Replacement Therapy at Samsara Aesthetics & Wellness in Plantation, FL, helps restore hormonal balance, optimize vitality, and improve overall wellness.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
