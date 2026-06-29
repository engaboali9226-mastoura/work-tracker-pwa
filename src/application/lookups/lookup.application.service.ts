import type { WorkDayLookups } from "./work-day-lookups.dto";

import type { Area } from "../../domains/areas/models/area.model";
import type { Site } from "../../domains/sites/models/site.model";
import type { Project } from "../../domains/projects/models/project.model";
import type { Contractor } from "../../domains/contractors/models/contractor.model";

export interface LookupApplicationService {

  getAreas(): Promise<Area[]>;

  getSites(): Promise<Site[]>;

  getProjects(): Promise<Project[]>;

  getContractors(): Promise<Contractor[]>;


  getWorkDayLookups():
    Promise<WorkDayLookups>;

}
