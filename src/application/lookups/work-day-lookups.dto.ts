import type { Area } from "../../domains/areas/models/area.model";
import type { Project } from "../../domains/projects/models/project.model";
import type { Site } from "../../domains/sites/models/site.model";
import type { Contractor } from "../../domains/contractors/models/contractor.model";

export interface WorkDayLookups {

  areas: Area[];

  projects: Project[];

  sites: Site[];

  contractors: Contractor[];

}
