import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Sierra Sesler | Samsara Aesthetics & Wellness",
  description: "Learn more about Sierra Sesler, Front Desk Coordinator at Samsara Aesthetics and Wellness",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
