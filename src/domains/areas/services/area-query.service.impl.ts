import type { Area }
  from "../models/area.model";

import type {
  AreaQueryDependencies,
} from "./area-query.dependencies";

import type {
  AreaQueryService,
} from "./area-query.service";

export class AreaQueryServiceImpl
  implements AreaQueryService
{
  private readonly areaRepository;

  constructor(
    dependencies: AreaQueryDependencies,
  ) {
    this.areaRepository =
      dependencies.areaRepository;
  }

  async getArea(
    areaId: string,
  ): Promise<Area | null> {
    return this.areaRepository.findById(
      areaId,
    );
  }

  async getAreas(): Promise<Area[]> {
    return this.areaRepository.findAll();
  }
}
