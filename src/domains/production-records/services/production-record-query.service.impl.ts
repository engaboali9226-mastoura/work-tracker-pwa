import type {
  ProductionRecord,
} from "../models/production-record.model";

import type {
  ProductionRecordQueryDependencies,
} from "./production-record-query.dependencies";

import type {
  ProductionRecordQueryService,
} from "./production-record-query.service";

export class ProductionRecordQueryServiceImpl
  implements ProductionRecordQueryService
{
  private readonly repository;

  constructor(
    dependencies:
      ProductionRecordQueryDependencies,
  ) {
    this.repository =
      dependencies.productionRecordRepository;
  }

  async getProductionRecord(
    productionRecordId: string,
  ): Promise<ProductionRecord | null> {
    return this.repository.findById(
      productionRecordId,
    );
  }

  async getTaskProductionRecords(
    taskKey: string,
  ): Promise<ProductionRecord[]> {
    return this.repository.findByTaskKey(
      taskKey,
    );
  }

  async getProductionRecords():
    Promise<ProductionRecord[]>
  {
    return this.repository.findAll();
  }
}
