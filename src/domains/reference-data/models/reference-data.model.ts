import type { ReferenceDataType } from "./reference-data-type";

export interface ReferenceData {
  id: string;

  name: string;

  type: ReferenceDataType;

  parentId: string | null;
}
