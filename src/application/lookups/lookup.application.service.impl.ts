import type {
  LookupApplicationDependencies,
} from "./lookup.application.dependencies";

import type {
  LookupApplicationService,
} from "./lookup.application.service";

import type {
  WorkDayLookups,
} from "./work-day-lookups.dto";

export class LookupApplicationServiceImpl
  implements LookupApplicationService
{

  private readonly dependencies:
    LookupApplicationDependencies;

  constructor(
    dependencies: LookupApplicationDependencies,
  ) {
    this.dependencies =
      dependencies;
  }

  getAreas() {
    return this.dependencies
      .areaQueryService
      .getAreas();
  }

  getSites() {
    return this.dependencies
      .siteQueryService
      .getSites();
  }

  getProjects() {
    return this.dependencies
      .projectQueryService
      .getProjects();
  }

  getContractors() {
    return this.dependencies
      .contractorQueryService
      .getContractors();
  }

  async getWorkDayLookups():
    Promise<WorkDayLookups> {

    const [

      areas,

      projects,

      sites,

      contractors,

    ] = await Promise.all([

      this.getAreas(),

      this.getProjects(),

      this.getSites(),

      this.getContractors(),

    ]);

    return {

      areas,

      projects,

      sites,

      contractors,

    };

  }

}
