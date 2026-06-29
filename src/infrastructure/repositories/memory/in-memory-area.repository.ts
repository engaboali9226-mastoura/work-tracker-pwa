import type { Area }
  from "../../../domains/areas/models/area.model";

import type { AreaRepository }
  from "../../../domains/areas/repositories/area.repository";

export class InMemoryAreaRepository
  implements AreaRepository
{
  private readonly areas =
    new Map<string, Area>();

  async findById(
    areaId: string,
  ): Promise<Area | null> {
    return this.areas.get(areaId) ?? null;
  }

  async findAll(): Promise<Area[]> {
    return [...this.areas.values()];
  }

  async save(
    area: Area,
  ): Promise<void> {
    this.areas.set(
      area.areaId,
      area,
    );
  }
}
