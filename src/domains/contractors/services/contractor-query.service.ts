import type { Contractor }
  from "../models/contractor.model";

export interface ContractorQueryService {
  getContractor(
    contractorId: string,
  ): Promise<Contractor | null>;

  getContractors(): Promise<Contractor[]>;
}
