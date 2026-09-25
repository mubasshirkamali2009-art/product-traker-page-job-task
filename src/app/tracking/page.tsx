import type { Metadata } from "next";
import TrackingPage from "./TrackingPage";

export const metadata: Metadata = {
  title: "Order Tracking — Delivari",
  description:
    "Track your order status, estimated delivery time, and get support for delayed or missing packages.",
};

export default function Page() {
  return <TrackingPage />;
}
