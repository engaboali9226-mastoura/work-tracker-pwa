import type {
  ProductionRecordRepository,
} from "../repositories/production-record.repository";

export interface ProductionRecordQueryDependencies {
  productionRecordRepository:
    ProductionRecordRepository;
}
