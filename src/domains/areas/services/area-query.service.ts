import type { Area } from "../models/area.model";

export interface AreaQueryService {
  getArea(
    areaId: string,
  ): Promise<Area | null>;

  getAreas(): Promise<Area[]>;
}
