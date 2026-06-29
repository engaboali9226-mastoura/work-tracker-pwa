import type {
  AreaQueryService,
} from "../../domains/areas/services/area-query.service";

import type {
  SiteQueryService,
} from "../../domains/sites/services/site-query.service";

import type {
  ProjectQueryService,
} from "../../domains/projects/services/project-query.service";

import type {
  ContractorQueryService,
} from "../../domains/contractors/services/contractor-query.service";

export interface LookupApplicationDependencies {

  areaQueryService:
    AreaQueryService;

  siteQueryService:
    SiteQueryService;

  projectQueryService:
    ProjectQueryService;

  contractorQueryService:
    ContractorQueryService;

}
