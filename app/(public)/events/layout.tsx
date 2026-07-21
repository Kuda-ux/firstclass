import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Events | First Class Private School",
  description: "Upcoming events, calendar dates and event posters for First Class Private School.",
};

export default function EventsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}
