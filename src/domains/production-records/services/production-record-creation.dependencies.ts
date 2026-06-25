import type { TaskRepository }
  from "../../tasks/repositories/task.repository";

import type {
  ProductionRecordRepository,
} from "../repositories/production-record.repository";

export interface ProductionRecordCreationDependencies {
  taskRepository:
    TaskRepository;

  productionRecordRepository:
    ProductionRecordRepository;
}
