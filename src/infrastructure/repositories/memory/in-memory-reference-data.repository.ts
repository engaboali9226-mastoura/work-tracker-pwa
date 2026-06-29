import type { ReferenceData } from "../../../domains/reference-data/models/reference-data.model";
import type { ReferenceDataType } from "../../../domains/reference-data/models/reference-data-type";
import type { ReferenceDataRepository } from "../../../domains/reference-data/repositories/reference-data.repository";

export class InMemoryReferenceDataRepository
  implements ReferenceDataRepository
{
  private readonly items: ReferenceData[] = [];

  async findById(
    id: string,
  ): Promise<ReferenceData | null> {
    return (
      this.items.find(
        item => item.id === id,
      ) ?? null
    );
  }

  async findAll(): Promise<ReferenceData[]> {
    return [...this.items];
  }

  async findByType(
    type: ReferenceDataType,
  ): Promise<ReferenceData[]> {
    return this.items.filter(
      item => item.type === type,
    );
  }

  async findByParent(
    parentId: string,
  ): Promise<ReferenceData[]> {
    return this.items.filter(
      item => item.parentId === parentId,
    );
  }

  async findByName(
    type: ReferenceDataType,
    name: string,
  ): Promise<ReferenceData | null> {
    return (
      this.items.find(
        item =>
          item.type === type &&
          item.name === name,
      ) ?? null
    );
  }

  async save(
    item: ReferenceData,
  ): Promise<void> {
    const index = this.items.findIndex(
      current => current.id === item.id,
    );

    if (index >= 0) {
      this.items[index] = item;
      return;
    }

    this.items.push(item);
  }
}
