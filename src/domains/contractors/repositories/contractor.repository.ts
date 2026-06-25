import type { Contractor } from "../models/contractor.model";

export interface ContractorRepository {
  findById(
    contractorId: string,
  ): Promise<Contractor | null>;

  findAll(): Promise<Contractor[]>;

  save(
    contractor: Contractor,
  ): Promise<void>;
}
