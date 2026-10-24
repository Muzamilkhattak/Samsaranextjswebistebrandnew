import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Yves M. Jodesty Jr., MD | Samsara Aesthetics &amp; Wellness",
  description: "Learn more about our team at Samsara Aesthetics & Wellness in Plantation, FL.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
