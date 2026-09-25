"use client";

import Image from "next/image";
import type { OrderInfo } from "./data";

export default function OrderSummary({ order }: { order: OrderInfo }) {
  const { product, orderId, orderDate, estimatedDelivery } = order;

  return (
    <div className="bg-zinc-900/60 backdrop-blur-sm rounded-2xl p-5 border border-zinc-800/80">
      <h3 className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-4">
        Order Details
      </h3>

      {/* Product Card */}
      <div className="flex gap-4">
        <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-zinc-800 shrink-0">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            sizes="80px"
          />
        </div>

        <div className="flex flex-col justify-center min-w-0">
          <p className="text-sm font-semibold text-white truncate">
            {product.name}
          </p>
          <p className="text-xs text-zinc-400 mt-0.5">
            {product.variant} · Qty {product.qty}
          </p>
          <p className="text-sm font-bold text-emerald-400 mt-1">
            ${product.price.toFixed(2)}
          </p>
        </div>
      </div>

      {/* Metadata Row */}
      <div className="mt-4 pt-4 border-t border-zinc-800 grid grid-cols-2 gap-y-3 gap-x-4">
        <div>
          <p className="text-[11px] text-zinc-500 uppercase tracking-wider">
            Order ID
          </p>
          <p className="text-xs font-mono text-zinc-300 mt-0.5">{orderId}</p>
        </div>
        <div>
          <p className="text-[11px] text-zinc-500 uppercase tracking-wider">
            Placed
          </p>
          <p className="text-xs text-zinc-300 mt-0.5">{orderDate}</p>
        </div>
        <div className="col-span-2">
          <p className="text-[11px] text-zinc-500 uppercase tracking-wider">
            Estimated Delivery
          </p>
          <p className="text-xs text-zinc-300 mt-0.5">{estimatedDelivery}</p>
        </div>
      </div>
    </div>
  );
}
