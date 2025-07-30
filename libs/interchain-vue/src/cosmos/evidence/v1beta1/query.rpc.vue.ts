import { buildUseVueQuery } from "../../../vue-query";
import { QueryEvidenceRequest, QueryEvidenceResponse, QueryAllEvidenceRequest, QueryAllEvidenceResponse } from "./query";
import { getEvidence, getAllEvidence } from "./query.rpc.func";
/**
 * Evidence queries evidence based on evidence hash.
 * @name useGetEvidence
 * @package cosmos.evidence.v1beta1
 * @see proto service: cosmos.evidence.v1beta1.Evidence
 */
export const useGetEvidence = buildUseVueQuery<QueryEvidenceRequest, QueryEvidenceResponse>({
  builderQueryFn: getEvidence,
  queryKeyPrefix: "EvidenceQuery"
});
/**
 * AllEvidence queries all evidence.
 * @name useGetAllEvidence
 * @package cosmos.evidence.v1beta1
 * @see proto service: cosmos.evidence.v1beta1.AllEvidence
 */
export const useGetAllEvidence = buildUseVueQuery<QueryAllEvidenceRequest, QueryAllEvidenceResponse>({
  builderQueryFn: getAllEvidence,
  queryKeyPrefix: "AllEvidenceQuery"
});