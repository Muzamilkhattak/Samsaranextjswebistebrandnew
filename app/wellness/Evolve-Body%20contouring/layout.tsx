import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Evolve Body Contouring Plantation, FL | Samsara Aesthetics & Wellness",
  description: "Evolve Body Contouring at Samsara Aesthetics & Wellness in Plantation, FL, offers a non-surgical approach to body sculpting using advanced technology.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
