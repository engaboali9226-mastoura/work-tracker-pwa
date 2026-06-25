import type { ContractorRepository }
  from "../repositories/contractor.repository";

export interface ContractorQueryDependencies {
  contractorRepository: ContractorRepository;
}
