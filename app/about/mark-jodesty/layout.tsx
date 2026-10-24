import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Mark Jodesty | Samsara Aesthetics & Wellness",
  description: "Learn more about Mark Jodesty, Operations at Samsara Aesthetics and Wellness",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
