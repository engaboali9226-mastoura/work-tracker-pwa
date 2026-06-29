import type {
  ProductionRecord,
} from "../../../domains/production-records/models/production-record.model";

import type {
  ProductionRecordRepository,
} from "../../../domains/production-records/repositories/production-record.repository";

export class InMemoryProductionRecordRepository
  implements ProductionRecordRepository
{
  private readonly records =
    new Map<string, ProductionRecord>();

  async findById(
    productionRecordId: string,
  ): Promise<ProductionRecord | null> {
    return (
      this.records.get(
        productionRecordId,
      ) ?? null
    );
  }

  async findByTaskKey(
    taskKey: string,
  ): Promise<ProductionRecord[]> {
    return [...this.records.values()]
      .filter(
        (record) =>
          record.taskKey === taskKey,
      );
  }

  async findAll():
    Promise<ProductionRecord[]>
  {
    return [...this.records.values()];
  }

  async save(
    productionRecord: ProductionRecord,
  ): Promise<void> {
    this.records.set(
      productionRecord.productionRecordId,
      productionRecord,
    );
  }
}
