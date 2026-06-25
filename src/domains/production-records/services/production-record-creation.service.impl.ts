import {
  TaskNotFoundError,
} from "../../tasks/errors/task-not-found.error";

import {
  ProductionTaskRequiredError,
} from "../errors/production-task-required.error";

import type {
  ProductionRecord,
} from "../models/production-record.model";

import type {
  CreateProductionRecordCommand,
} from "./production-record-creation.commands";

import type {
  ProductionRecordCreationDependencies,
} from "./production-record-creation.dependencies";

import type {
  ProductionRecordCreationService,
} from "./production-record-creation.service";

export class ProductionRecordCreationServiceImpl
  implements ProductionRecordCreationService
{
  private readonly dependencies;

  constructor(
    dependencies:
      ProductionRecordCreationDependencies,
  ) {
    this.dependencies =
      dependencies;
  }

  async createProductionRecord(
    command: CreateProductionRecordCommand,
  ): Promise<ProductionRecord> {

    const task =
      await this.dependencies
        .taskRepository
        .findByKey(
          command.taskKey,
        );

    if (!task) {
      throw new TaskNotFoundError(
        command.taskKey,
      );
    }

    if (
      task.categoryId !==
      "production"
    ) {
      throw new ProductionTaskRequiredError(
        command.taskKey,
      );
    }

    const productionRecord:
      ProductionRecord = {
      productionRecordId:
        command.productionRecordId,

      taskKey:
        command.taskKey,

      quantity:
        command.quantity,

      unit:
        command.unit,

      recordedAt:
        command.recordedAt,
    };

    await this.dependencies
      .productionRecordRepository
      .save(
        productionRecord,
      );

    return productionRecord;
  }
}
