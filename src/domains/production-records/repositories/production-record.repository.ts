import type {
  ProductionRecord,
} from "../models/production-record.model";

export interface ProductionRecordRepository {
  findById(
    productionRecordId: string,
  ): Promise<ProductionRecord | null>;

  findByTaskKey(
    taskKey: string,
  ): Promise<ProductionRecord[]>;

  findAll(): Promise<ProductionRecord[]>;

  save(
    productionRecord: ProductionRecord,
  ): Promise<void>;
}
