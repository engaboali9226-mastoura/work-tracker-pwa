import type { Site } from "../models/site.model";

export interface SiteQueryService {
  getSite(
    siteId: string,
  ): Promise<Site | null>;

  getSites(): Promise<Site[]>;
}
