/// <reference types="node" />
import { Coin } from "./tx";
/**
 *
 * Copied here to avoid unnecessary deps
 *
 * MIT License
 *
 * Copyright (c) Kevin Mårtensson <kevinmartensson@gmail.com> (github.com/kevva)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * @param buf
 */
export declare const is_gzip: (buf: Buffer | Uint8Array) => boolean;
/**
 * Convert a secp256k1 compressed public key to an address
 *
 * @param {Uint8Array} pubkey The account's pubkey, should be 33 bytes (compressed secp256k1)
 * @param {String} [prefix="secret"] The address' bech32 prefix. Defaults to `"secret"`.
 * @returns the account's address
 */
export declare function pubkeyToAddress(pubkey: Uint8Array, prefix?: string): string;
/**
 * Convert a secp256k1 compressed public key to an address
 *
 * @param {Uint8Array} pubkey The account's pubkey as base64 string, should be 33 bytes (compressed secp256k1)
 * @param {String} [prefix="secret"] The address' bech32 prefix. Defaults to `"secret"`.
 * @returns the account's address
 */
export declare function base64PubkeyToAddress(pubkey: string, prefix?: string): string;
/**
 * Convert self delegator address to validator address
 *
 * @param {String} selfDelegator The self delegator bech32 encoded address
 * @param {String} [prefix="secret"] The self delegator address' bech32 prefix. Defaults to `"secret"`.
 * @returns the account's address
 */
export declare function selfDelegatorAddressToValidatorAddress(selfDelegator: string, prefix?: string): string;
/**
 * Convert self delegator address to validator address
 *
 * @param {String} validator The validator bech32 encoded address
 * @param {String} [prefix="secret"] The self delegator address' bech32 prefix. Defaults to `"secret"`.
 * @returns the account's address
 */
export declare function validatorAddressToSelfDelegatorAddress(validator: string, prefix?: string): string;
/**
 * Convert a Tendermint ed25519 public key to a consensus address
 *
 * @param {Uint8Array} pubkey The tendermint pubkey, should be 32 bytes (ed25519)
 * @param {String} [prefix="secret"] The valcons address' bech32 prefix. Defaults to `"secret"`.
 * @returns the valcons account's address
 */
export declare function tendermintPubkeyToValconsAddress(pubkey: Uint8Array, prefix?: string): string;
/**
 * Convert a secp256k1 compressed public key to an address
 *
 * @param {Uint8Array} pubkey The account's pubkey as base64 string, should be 33 bytes (compressed secp256k1)
 * @param {String} [prefix="secret"] The address' bech32 prefix. Defaults to `"secret"`.
 * @returns the account's address
 */
export declare function base64TendermintPubkeyToValconsAddress(pubkey: string, prefix?: string): string;
/**
 * Compute the IBC denom of a token that was sent over IBC.
 *
 * For example, to get the IBC denom of SCRT on mainnet Osmosis:
 * ```
 * ibcDenom([{incomingPortId: "transfer", incomingChannelId: "channel-88"}], "uscrt")
 * ```
 */
export declare const ibcDenom: (paths: {
    incomingPortId: string;
    incomingChannelId: string;
}[], coinMinimalDenom: string) => string;
/**
 * E.g. `"1uscrt"` => `{amount:"1",denom:"uscrt"}`
 */
export declare const stringToCoin: (coinAsString: string) => Coin;
/**
 * E.g. `"1uscrt"` => `{amount:"1",denom:"uscrt"}`
 */
export declare const coinFromString: (coinAsString: string) => Coin;
/**
 * E.g. `"1uscrt,1uatom,1uosmo"` =>
 * `[{amount:"1",denom:"uscrt"},{amount:"1",denom:"uatom"},{amount:"1",denom:"uosmo"}]`
 */
export declare const stringToCoins: (coinsAsString: string) => Coin[];
/**
 * E.g. `"1uscrt,1uatom,1uosmo"` =>
 * `[{amount:"1",denom:"uscrt"},{amount:"1",denom:"uatom"},{amount:"1",denom:"uosmo"}]`
 */
export declare const coinsFromString: (coinsAsString: string) => Coin[];
/**
 * validateAddress checks if a given address is a valid address
 * @param {string} address the address to check
 * @param {string?} prefix the address prefix, defaults to `"secret"`
 * @returns `{ isValid: true }` if valid, `{ isValid: false, reason: "..." }` if not valid
 */
export declare const validateAddress: (address: string, prefix?: string) => {
    isValid: boolean;
    reason?: string;
};
/**
 * Converts an address from a bech32 string to the bytes representation.
 * @param {string} address - The address bech32 string to convert.
 * @returns {Uint8Array} - The resulting bytes address.
 */
export declare function addressToBytes(address: string): Uint8Array;
/**
 * Converts an address from bytes to the strong representation.
 * @param {Uint8Array} bytes - The address bytes to convert.
 * @param {string} prefix - The bech32 prefix to use.
 * @returns {string} - The resulting bech32 string address.
 */
export declare function bytesToAddress(bytes: Uint8Array, prefix?: string): string;
//# sourceMappingURL=utils.d.ts.map