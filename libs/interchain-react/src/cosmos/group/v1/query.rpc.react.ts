import { buildUseQuery } from "../../../react-query";
import { QueryGroupInfoRequest, QueryGroupInfoResponse, QueryGroupPolicyInfoRequest, QueryGroupPolicyInfoResponse, QueryGroupMembersRequest, QueryGroupMembersResponse, QueryGroupsByAdminRequest, QueryGroupsByAdminResponse, QueryGroupPoliciesByGroupRequest, QueryGroupPoliciesByGroupResponse, QueryGroupPoliciesByAdminRequest, QueryGroupPoliciesByAdminResponse, QueryProposalRequest, QueryProposalResponse, QueryProposalsByGroupPolicyRequest, QueryProposalsByGroupPolicyResponse, QueryVoteByProposalVoterRequest, QueryVoteByProposalVoterResponse, QueryVotesByProposalRequest, QueryVotesByProposalResponse, QueryVotesByVoterRequest, QueryVotesByVoterResponse, QueryGroupsByMemberRequest, QueryGroupsByMemberResponse, QueryTallyResultRequest, QueryTallyResultResponse, QueryGroupsRequest, QueryGroupsResponse } from "./query";
import { getGroupInfo, getGroupPolicyInfo, getGroupMembers, getGroupsByAdmin, getGroupPoliciesByGroup, getGroupPoliciesByAdmin, getProposal, getProposalsByGroupPolicy, getVoteByProposalVoter, getVotesByProposal, getVotesByVoter, getGroupsByMember, getTallyResult, getGroups } from "./query.rpc.func";
/**
 * GroupInfo queries group info based on group id.
 * @name useGetGroupInfo
 * @package cosmos.group.v1
 * @see proto service: cosmos.group.v1.GroupInfo
 */
export const useGetGroupInfo = buildUseQuery<QueryGroupInfoRequest, QueryGroupInfoResponse>({
  builderQueryFn: getGroupInfo,
  queryKeyPrefix: "GroupInfoQuery"
});
/**
 * GroupPolicyInfo queries group policy info based on account address of group policy.
 * @name useGetGroupPolicyInfo
 * @package cosmos.group.v1
 * @see proto service: cosmos.group.v1.GroupPolicyInfo
 */
export const useGetGroupPolicyInfo = buildUseQuery<QueryGroupPolicyInfoRequest, QueryGroupPolicyInfoResponse>({
  builderQueryFn: getGroupPolicyInfo,
  queryKeyPrefix: "GroupPolicyInfoQuery"
});
/**
 * GroupMembers queries members of a group by group id.
 * @name useGetGroupMembers
 * @package cosmos.group.v1
 * @see proto service: cosmos.group.v1.GroupMembers
 */
export const useGetGroupMembers = buildUseQuery<QueryGroupMembersRequest, QueryGroupMembersResponse>({
  builderQueryFn: getGroupMembers,
  queryKeyPrefix: "GroupMembersQuery"
});
/**
 * GroupsByAdmin queries groups by admin address.
 * @name useGetGroupsByAdmin
 * @package cosmos.group.v1
 * @see proto service: cosmos.group.v1.GroupsByAdmin
 */
export const useGetGroupsByAdmin = buildUseQuery<QueryGroupsByAdminRequest, QueryGroupsByAdminResponse>({
  builderQueryFn: getGroupsByAdmin,
  queryKeyPrefix: "GroupsByAdminQuery"
});
/**
 * GroupPoliciesByGroup queries group policies by group id.
 * @name useGetGroupPoliciesByGroup
 * @package cosmos.group.v1
 * @see proto service: cosmos.group.v1.GroupPoliciesByGroup
 */
export const useGetGroupPoliciesByGroup = buildUseQuery<QueryGroupPoliciesByGroupRequest, QueryGroupPoliciesByGroupResponse>({
  builderQueryFn: getGroupPoliciesByGroup,
  queryKeyPrefix: "GroupPoliciesByGroupQuery"
});
/**
 * GroupPoliciesByAdmin queries group policies by admin address.
 * @name useGetGroupPoliciesByAdmin
 * @package cosmos.group.v1
 * @see proto service: cosmos.group.v1.GroupPoliciesByAdmin
 */
export const useGetGroupPoliciesByAdmin = buildUseQuery<QueryGroupPoliciesByAdminRequest, QueryGroupPoliciesByAdminResponse>({
  builderQueryFn: getGroupPoliciesByAdmin,
  queryKeyPrefix: "GroupPoliciesByAdminQuery"
});
/**
 * Proposal queries a proposal based on proposal id.
 * @name useGetProposal
 * @package cosmos.group.v1
 * @see proto service: cosmos.group.v1.Proposal
 */
export const useGetProposal = buildUseQuery<QueryProposalRequest, QueryProposalResponse>({
  builderQueryFn: getProposal,
  queryKeyPrefix: "ProposalQuery"
});
/**
 * ProposalsByGroupPolicy queries proposals based on account address of group policy.
 * @name useGetProposalsByGroupPolicy
 * @package cosmos.group.v1
 * @see proto service: cosmos.group.v1.ProposalsByGroupPolicy
 */
export const useGetProposalsByGroupPolicy = buildUseQuery<QueryProposalsByGroupPolicyRequest, QueryProposalsByGroupPolicyResponse>({
  builderQueryFn: getProposalsByGroupPolicy,
  queryKeyPrefix: "ProposalsByGroupPolicyQuery"
});
/**
 * VoteByProposalVoter queries a vote by proposal id and voter.
 * @name useGetVoteByProposalVoter
 * @package cosmos.group.v1
 * @see proto service: cosmos.group.v1.VoteByProposalVoter
 */
export const useGetVoteByProposalVoter = buildUseQuery<QueryVoteByProposalVoterRequest, QueryVoteByProposalVoterResponse>({
  builderQueryFn: getVoteByProposalVoter,
  queryKeyPrefix: "VoteByProposalVoterQuery"
});
/**
 * VotesByProposal queries a vote by proposal id.
 * @name useGetVotesByProposal
 * @package cosmos.group.v1
 * @see proto service: cosmos.group.v1.VotesByProposal
 */
export const useGetVotesByProposal = buildUseQuery<QueryVotesByProposalRequest, QueryVotesByProposalResponse>({
  builderQueryFn: getVotesByProposal,
  queryKeyPrefix: "VotesByProposalQuery"
});
/**
 * VotesByVoter queries a vote by voter.
 * @name useGetVotesByVoter
 * @package cosmos.group.v1
 * @see proto service: cosmos.group.v1.VotesByVoter
 */
export const useGetVotesByVoter = buildUseQuery<QueryVotesByVoterRequest, QueryVotesByVoterResponse>({
  builderQueryFn: getVotesByVoter,
  queryKeyPrefix: "VotesByVoterQuery"
});
/**
 * GroupsByMember queries groups by member address.
 * @name useGetGroupsByMember
 * @package cosmos.group.v1
 * @see proto service: cosmos.group.v1.GroupsByMember
 */
export const useGetGroupsByMember = buildUseQuery<QueryGroupsByMemberRequest, QueryGroupsByMemberResponse>({
  builderQueryFn: getGroupsByMember,
  queryKeyPrefix: "GroupsByMemberQuery"
});
/**
 * TallyResult returns the tally result of a proposal. If the proposal is
 * still in voting period, then this query computes the current tally state,
 * which might not be final. On the other hand, if the proposal is final,
 * then it simply returns the `final_tally_result` state stored in the
 * proposal itself.
 * @name useGetTallyResult
 * @package cosmos.group.v1
 * @see proto service: cosmos.group.v1.TallyResult
 */
export const useGetTallyResult = buildUseQuery<QueryTallyResultRequest, QueryTallyResultResponse>({
  builderQueryFn: getTallyResult,
  queryKeyPrefix: "TallyResultQuery"
});
/**
 * Groups queries all groups in state.
 * @name useGetGroups
 * @package cosmos.group.v1
 * @see proto service: cosmos.group.v1.Groups
 */
export const useGetGroups = buildUseQuery<QueryGroupsRequest, QueryGroupsResponse>({
  builderQueryFn: getGroups,
  queryKeyPrefix: "GroupsQuery"
});