import {
  ArchitectureCard,
  ArchitectureCanvas,
} from "@/components/shared/architecture";

import { omsBlueprintData } from "./omsBlueprintData";

export default function OMSBlueprint() {
  return (
    <ArchitectureCard
      title="Enterprise Order Flow"
      description="High-level representation of a social commerce order flowing through partner platforms into IBM Sterling OMS before downstream enterprise processing."
    >
      <ArchitectureCanvas
        data={omsBlueprintData}
      />
    </ArchitectureCard>
  );
}