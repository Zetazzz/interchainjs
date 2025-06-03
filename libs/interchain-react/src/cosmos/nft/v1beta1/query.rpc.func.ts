import { buildQuery } from "../../../helper-func-types";
import { QueryBalanceRequest, QueryBalanceResponse, QueryOwnerRequest, QueryOwnerResponse, QuerySupplyRequest, QuerySupplyResponse, QueryNFTsRequest, QueryNFTsResponse, QueryNFTRequest, QueryNFTResponse, QueryClassRequest, QueryClassResponse, QueryClassesRequest, QueryClassesResponse } from "./query";
/* Balance queries the number of NFTs of a given class owned by the owner, same as balanceOf in ERC721 */
export const getBalance = buildQuery<QueryBalanceRequest, QueryBalanceResponse>({
  encode: QueryBalanceRequest.encode,
  decode: QueryBalanceResponse.decode,
  service: "cosmos.nft.v1beta1.Query",
  method: "Balance",
  deps: [QueryBalanceRequest, QueryBalanceResponse]
});
/* Owner queries the owner of the NFT based on its class and id, same as ownerOf in ERC721 */
export const getOwner = buildQuery<QueryOwnerRequest, QueryOwnerResponse>({
  encode: QueryOwnerRequest.encode,
  decode: QueryOwnerResponse.decode,
  service: "cosmos.nft.v1beta1.Query",
  method: "Owner",
  deps: [QueryOwnerRequest, QueryOwnerResponse]
});
/* Supply queries the number of NFTs from the given class, same as totalSupply of ERC721. */
export const getSupply = buildQuery<QuerySupplyRequest, QuerySupplyResponse>({
  encode: QuerySupplyRequest.encode,
  decode: QuerySupplyResponse.decode,
  service: "cosmos.nft.v1beta1.Query",
  method: "Supply",
  deps: [QuerySupplyRequest, QuerySupplyResponse]
});
/* NFTs queries all NFTs of a given class or owner,choose at least one of the two, similar to tokenByIndex in
 ERC721Enumerable */
export const getNFTs = buildQuery<QueryNFTsRequest, QueryNFTsResponse>({
  encode: QueryNFTsRequest.encode,
  decode: QueryNFTsResponse.decode,
  service: "cosmos.nft.v1beta1.Query",
  method: "NFTs",
  deps: [QueryNFTsRequest, QueryNFTsResponse]
});
/* NFT queries an NFT based on its class and id. */
export const getNFT = buildQuery<QueryNFTRequest, QueryNFTResponse>({
  encode: QueryNFTRequest.encode,
  decode: QueryNFTResponse.decode,
  service: "cosmos.nft.v1beta1.Query",
  method: "NFT",
  deps: [QueryNFTRequest, QueryNFTResponse]
});
/* Class queries an NFT class based on its id */
export const getClass = buildQuery<QueryClassRequest, QueryClassResponse>({
  encode: QueryClassRequest.encode,
  decode: QueryClassResponse.decode,
  service: "cosmos.nft.v1beta1.Query",
  method: "Class",
  deps: [QueryClassRequest, QueryClassResponse]
});
/* Classes queries all NFT classes */
export const getClasses = buildQuery<QueryClassesRequest, QueryClassesResponse>({
  encode: QueryClassesRequest.encode,
  decode: QueryClassesResponse.decode,
  service: "cosmos.nft.v1beta1.Query",
  method: "Classes",
  deps: [QueryClassesRequest, QueryClassesResponse]
});