// ─── Types ───────────────────────────────────────────────────────────────────

export type TrackingStep = {
  label: string;
  description: string;
  timestamp: string | null;
  completed: boolean;
  active: boolean;
};

export type OrderProduct = {
  name: string;
  image: string;
  qty: number;
  price: number;
  variant: string;
};

export type OrderInfo = {
  orderId: string;
  orderDate: string;
  estimatedDelivery: string;
  product: OrderProduct;
};

export type ScenarioStatus =
  | "delayed"
  | "delivered_not_received"
  | "no_tracking";

export type Scenario = {
  id: ScenarioStatus;
  label: string;
  tabLabel: string;
  status: {
    headline: string;
    subtext: string;
    type: "warning" | "info" | "empty";
  };
  order: OrderInfo;
  timeline: TrackingStep[];
  cta: {
    primary: { label: string; icon: "support" | "report" | "refresh" };
    secondary?: { label: string; icon: "support" | "report" | "refresh" };
  };
};

// ─── Shared Product ──────────────────────────────────────────────────────────

const product: OrderProduct = {
  name: "Sony WH-1000XM5 Wireless Headphones",
  image: "/product-headphones.jpg",
  qty: 1,
  price: 349.99,
  variant: "Black",
};

// ─── Scenario 1: Delayed ─────────────────────────────────────────────────────

const delayedScenario: Scenario = {
  id: "delayed",
  label: "Delayed Delivery",
  tabLabel: "Delayed",
  status: {
    headline: "Your delivery is delayed",
    subtext:
      "The estimated delivery time has passed. We're working to get your order to you as soon as possible.",
    type: "warning",
  },
  order: {
    orderId: "ORD-2026-8174X",
    orderDate: "Sep 18, 2026",
    estimatedDelivery: "Sep 23, 2026 · 2:00 PM",
    product,
  },
  timeline: [
    {
      label: "Order Placed",
      description: "Your order has been confirmed",
      timestamp: "Sep 18 · 10:32 AM",
      completed: true,
      active: false,
    },
    {
      label: "Processing",
      description: "Preparing your shipment",
      timestamp: "Sep 19 · 8:15 AM",
      completed: true,
      active: false,
    },
    {
      label: "Shipped",
      description: "Package is in transit",
      timestamp: "Sep 20 · 3:47 PM",
      completed: true,
      active: false,
    },
    {
      label: "Out for Delivery",
      description: "Delayed — running behind schedule",
      timestamp: null,
      completed: false,
      active: true,
    },
    {
      label: "Delivered",
      description: "Waiting for delivery",
      timestamp: null,
      completed: false,
      active: false,
    },
  ],
  cta: {
    primary: { label: "Contact Support", icon: "support" },
    secondary: { label: "Report Issue", icon: "report" },
  },
};

// ─── Scenario 2: Delivered but Not Received ──────────────────────────────────

const deliveredNotReceivedScenario: Scenario = {
  id: "delivered_not_received",
  label: "Delivered · Not Received",
  tabLabel: "Not Received",
  status: {
    headline: "Marked as delivered",
    subtext:
      "Our records show your package was delivered, but if you haven't received it, we're here to help.",
    type: "info",
  },
  order: {
    orderId: "ORD-2026-5392K",
    orderDate: "Sep 15, 2026",
    estimatedDelivery: "Sep 22, 2026 · 11:00 AM",
    product,
  },
  timeline: [
    {
      label: "Order Placed",
      description: "Your order has been confirmed",
      timestamp: "Sep 15 · 2:10 PM",
      completed: true,
      active: false,
    },
    {
      label: "Processing",
      description: "Preparing your shipment",
      timestamp: "Sep 16 · 9:00 AM",
      completed: true,
      active: false,
    },
    {
      label: "Shipped",
      description: "Package is in transit",
      timestamp: "Sep 17 · 1:20 PM",
      completed: true,
      active: false,
    },
    {
      label: "Out for Delivery",
      description: "Package was out for delivery",
      timestamp: "Sep 22 · 8:30 AM",
      completed: true,
      active: false,
    },
    {
      label: "Delivered",
      description: "Left at front door",
      timestamp: "Sep 22 · 11:14 AM",
      completed: true,
      active: true,
    },
  ],
  cta: {
    primary: { label: "Report Issue", icon: "report" },
    secondary: { label: "Contact Support", icon: "support" },
  },
};

// ─── Scenario 3: Tracking Not Available Yet ──────────────────────────────────

const noTrackingScenario: Scenario = {
  id: "no_tracking",
  label: "Tracking Unavailable",
  tabLabel: "No Tracking",
  status: {
    headline: "Tracking not available yet",
    subtext:
      "We're still waiting for tracking information from the carrier. This usually updates within 24–48 hours.",
    type: "empty",
  },
  order: {
    orderId: "ORD-2026-9201J",
    orderDate: "Sep 25, 2026",
    estimatedDelivery: "Sep 30, 2026 · 5:00 PM",
    product,
  },
  timeline: [],
  cta: {
    primary: { label: "Refresh Status", icon: "refresh" },
    secondary: { label: "Contact Support", icon: "support" },
  },
};

// ─── Export ──────────────────────────────────────────────────────────────────

export const scenarios: Scenario[] = [
  delayedScenario,
  deliveredNotReceivedScenario,
  noTrackingScenario,
];
