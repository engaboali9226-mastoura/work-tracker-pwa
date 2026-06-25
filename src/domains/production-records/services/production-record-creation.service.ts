import type {
  ProductionRecord,
} from "../models/production-record.model";

import type {
  CreateProductionRecordCommand,
} from "./production-record-creation.commands";

export interface ProductionRecordCreationService {
  createProductionRecord(
    command: CreateProductionRecordCommand,
  ): Promise<ProductionRecord>;
}
