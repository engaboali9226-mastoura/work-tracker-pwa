import type { Contractor }
  from "../../../domains/contractors/models/contractor.model";

import type { ContractorRepository }
  from "../../../domains/contractors/repositories/contractor.repository";

export class InMemoryContractorRepository
  implements ContractorRepository
{
  private readonly contractors =
    new Map<string, Contractor>();

  async findById(
    contractorId: string,
  ): Promise<Contractor | null> {
    return this.contractors.get(
      contractorId,
    ) ?? null;
  }

  async findAll(): Promise<Contractor[]> {
    return [...this.contractors.values()];
  }

  async save(
    contractor: Contractor,
  ): Promise<void> {
    this.contractors.set(
      contractor.contractorId,
      contractor,
    );
  }
}
