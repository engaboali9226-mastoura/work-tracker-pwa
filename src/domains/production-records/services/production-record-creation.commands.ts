export interface CreateProductionRecordCommand {
  productionRecordId: string;

  taskKey: string;

  quantity: number;

  unit: string;

  recordedAt: string;
}
