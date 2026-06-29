import type { ReferenceData } from "../models/reference-data.model";
import type { ReferenceDataType } from "../models/reference-data-type";

export interface ReferenceDataRepository {
  findById(
    id: string,
  ): Promise<ReferenceData | null>;

  findAll(): Promise<ReferenceData[]>;

  findByType(
    type: ReferenceDataType,
  ): Promise<ReferenceData[]>;

  findByParent(
    parentId: string,
  ): Promise<ReferenceData[]>;

  findByName(
    type: ReferenceDataType,
    name: string,
  ): Promise<ReferenceData | null>;

  save(
    item: ReferenceData,
  ): Promise<void>;
}
