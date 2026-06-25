import type { Contractor }
  from "../models/contractor.model";

import type {
  ContractorQueryDependencies,
} from "./contractor-query.dependencies";

import type {
  ContractorQueryService,
} from "./contractor-query.service";

export class ContractorQueryServiceImpl
  implements ContractorQueryService
{
  private readonly contractorRepository;

  constructor(
    dependencies: ContractorQueryDependencies,
  ) {
    this.contractorRepository =
      dependencies.contractorRepository;
  }

  async getContractor(
    contractorId: string,
  ): Promise<Contractor | null> {
    return this.contractorRepository.findById(
      contractorId,
    );
  }

  async getContractors(): Promise<Contractor[]> {
    return this.contractorRepository.findAll();
  }
}
