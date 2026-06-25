import type {
  ProductionRecord,
} from "../models/production-record.model";

export interface ProductionRecordQueryService {
  getProductionRecord(
    productionRecordId: string,
  ): Promise<ProductionRecord | null>;

  getTaskProductionRecords(
    taskKey: string,
  ): Promise<ProductionRecord[]>;

  getProductionRecords():
    Promise<ProductionRecord[]>;
}
