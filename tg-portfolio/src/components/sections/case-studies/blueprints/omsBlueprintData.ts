
import type { BlueprintGraphData } from "@/components/shared/blueprint";

export const omsBlueprintData: BlueprintGraphData = {
  stages: [
    {
      id: "partner-platform",
      title: "Partner Platform",
      subtitle: "Social Commerce",
      row: 1,
      column: 2,
      state: "completed",
    },
    {
      id: "tradebyte",
      title: "Tradebyte",
      subtitle: "Middleware",
      row: 2,
      column: 2,
      state: "completed",
    },
    {
      id: "sterling-oms",
      title: "IBM Sterling OMS",
      subtitle: "Order Management",
      row: 3,
      column: 1,
      state: "active",
    },
    {
      id: "inventory-validation",
      title: "Inventory Validation",
      subtitle: "Inventory Processing",
      row: 3,
      column: 3,
      state: "active",
    },
    {
      id: "catalog-validation",
      title: "Catalog Validation",
      subtitle: "Product Data",
      row: 3,
      column: 5,
      state: "active",
    },
  ],

  connections: [
    {
      from: "partner-platform",
      to: "tradebyte",
    },
    {
      from: "tradebyte",
      to: "sterling-oms",
    },
    {
      from: "tradebyte",
      to: "inventory-validation",
    },
    {
      from: "tradebyte",
      to: "catalog-validation",
    },
  ],
};
