import type { SiteRepository }
  from "../repositories/site.repository";

export interface SiteQueryDependencies {
  siteRepository: SiteRepository;
}
