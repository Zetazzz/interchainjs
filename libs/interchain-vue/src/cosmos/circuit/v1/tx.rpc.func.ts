import { buildTx } from "../../../helper-func-types";
import { MsgAuthorizeCircuitBreaker, MsgTripCircuitBreaker, MsgResetCircuitBreaker } from "./tx";
/**
 * AuthorizeCircuitBreaker allows a super-admin to grant (or revoke) another
 * account's circuit breaker permissions.
 * @name authorizeCircuitBreaker
 * @package cosmos.circuit.v1
 * @see proto service: cosmos.circuit.v1.AuthorizeCircuitBreaker
 */
export const authorizeCircuitBreaker = buildTx<MsgAuthorizeCircuitBreaker>({
  msg: MsgAuthorizeCircuitBreaker
});
/**
 * TripCircuitBreaker pauses processing of Msg's in the state machine.
 * @name tripCircuitBreaker
 * @package cosmos.circuit.v1
 * @see proto service: cosmos.circuit.v1.TripCircuitBreaker
 */
export const tripCircuitBreaker = buildTx<MsgTripCircuitBreaker>({
  msg: MsgTripCircuitBreaker
});
/**
 * ResetCircuitBreaker resumes processing of Msg's in the state machine that
 * have been been paused using TripCircuitBreaker.
 * @name resetCircuitBreaker
 * @package cosmos.circuit.v1
 * @see proto service: cosmos.circuit.v1.ResetCircuitBreaker
 */
export const resetCircuitBreaker = buildTx<MsgResetCircuitBreaker>({
  msg: MsgResetCircuitBreaker
});