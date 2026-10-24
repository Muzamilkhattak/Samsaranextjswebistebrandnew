import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Maureen Murphy | Samsara Aesthetics & Wellness",
  description: "Learn more about Maureen Murphy, Massage Therapist at Samsara Aesthetics and Wellness",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
