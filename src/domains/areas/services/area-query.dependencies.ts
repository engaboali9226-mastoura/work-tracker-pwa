import type { AreaRepository }
  from "../repositories/area.repository";

export interface AreaQueryDependencies {
  areaRepository: AreaRepository;
}
