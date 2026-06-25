import type { Site }
  from "../models/site.model";

import type {
  SiteQueryDependencies,
} from "./site-query.dependencies";

import type {
  SiteQueryService,
} from "./site-query.service";

export class SiteQueryServiceImpl
  implements SiteQueryService
{
  private readonly siteRepository;

  constructor(
    dependencies: SiteQueryDependencies,
  ) {
    this.siteRepository =
      dependencies.siteRepository;
  }

  async getSite(
    siteId: string,
  ): Promise<Site | null> {
    return this.siteRepository.findById(
      siteId,
    );
  }

  async getSites(): Promise<Site[]> {
    return this.siteRepository.findAll();
  }
}
