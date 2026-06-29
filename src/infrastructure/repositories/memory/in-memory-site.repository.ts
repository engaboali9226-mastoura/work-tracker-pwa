import type { Site }
  from "../../../domains/sites/models/site.model";

import type { SiteRepository }
  from "../../../domains/sites/repositories/site.repository";

export class InMemorySiteRepository
  implements SiteRepository
{
  private readonly sites =
    new Map<string, Site>();

  async findById(
    siteId: string,
  ): Promise<Site | null> {
    return this.sites.get(siteId) ?? null;
  }

  async findAll(): Promise<Site[]> {
    return [...this.sites.values()];
  }

  async save(
    site: Site,
  ): Promise<void> {
    this.sites.set(
      site.siteId,
      site,
    );
  }
}
