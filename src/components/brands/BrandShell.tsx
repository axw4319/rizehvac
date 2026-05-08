import { type ReactNode } from "react";
import { type Brand, brandStyleVars } from "@/lib/brands";

export function BrandShell({
  brand,
  children,
}: {
  brand: Brand;
  children: ReactNode;
}) {
  return (
    <div
      style={brandStyleVars(brand)}
      className="min-h-screen"
    >
      {children}
    </div>
  );
}
