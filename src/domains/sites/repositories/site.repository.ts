import type { Site } from "../models/site.model";

export interface SiteRepository {
  findById(
    siteId: string,
  ): Promise<Site | null>;

  findAll(): Promise<Site[]>;

  save(
    site: Site,
  ): Promise<void>;
}
