import type { Area } from "../models/area.model";

export interface AreaRepository {
  findById(
    areaId: string,
  ): Promise<Area | null>;

  findAll(): Promise<Area[]>;

  save(
    area: Area,
  ): Promise<void>;
}
