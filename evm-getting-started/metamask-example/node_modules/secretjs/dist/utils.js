"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bytesToAddress = exports.addressToBytes = exports.validateAddress = exports.coinsFromString = exports.stringToCoins = exports.coinFromString = exports.stringToCoin = exports.ibcDenom = exports.base64TendermintPubkeyToValconsAddress = exports.tendermintPubkeyToValconsAddress = exports.validatorAddressToSelfDelegatorAddress = exports.selfDelegatorAddressToValidatorAddress = exports.base64PubkeyToAddress = exports.pubkeyToAddress = exports.is_gzip = void 0;
const encoding_1 = require("@cosmjs/encoding");
const ripemd160_1 = require("@noble/hashes/ripemd160");
const sha256_1 = require("@noble/hashes/sha256");
const bech32_1 = require("bech32");
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
const is_gzip = (buf) => {
    if (!buf || buf.length < 3) {
        return false;
    }
    return buf[0] === 0x1f && buf[1] === 0x8b && buf[2] === 0x08;
};
exports.is_gzip = is_gzip;
/**
 * Convert a secp256k1 compressed public key to an address
 *
 * @param {Uint8Array} pubkey The account's pubkey, should be 33 bytes (compressed secp256k1)
 * @param {String} [prefix="secret"] The address' bech32 prefix. Defaults to `"secret"`.
 * @returns the account's address
 */
function pubkeyToAddress(pubkey, prefix = "secret") {
    return bech32_1.bech32.encode(prefix, bech32_1.bech32.toWords((0, ripemd160_1.ripemd160)((0, sha256_1.sha256)(pubkey))));
}
exports.pubkeyToAddress = pubkeyToAddress;
/**
 * Convert a secp256k1 compressed public key to an address
 *
 * @param {Uint8Array} pubkey The account's pubkey as base64 string, should be 33 bytes (compressed secp256k1)
 * @param {String} [prefix="secret"] The address' bech32 prefix. Defaults to `"secret"`.
 * @returns the account's address
 */
function base64PubkeyToAddress(pubkey, prefix = "secret") {
    return pubkeyToAddress((0, encoding_1.fromBase64)(pubkey), prefix);
}
exports.base64PubkeyToAddress = base64PubkeyToAddress;
/**
 * Convert self delegator address to validator address
 *
 * @param {String} selfDelegator The self delegator bech32 encoded address
 * @param {String} [prefix="secret"] The self delegator address' bech32 prefix. Defaults to `"secret"`.
 * @returns the account's address
 */
function selfDelegatorAddressToValidatorAddress(selfDelegator, prefix = "secret") {
    return bech32_1.bech32.encode(`${prefix}valoper`, bech32_1.bech32.decode(selfDelegator).words);
}
exports.selfDelegatorAddressToValidatorAddress = selfDelegatorAddressToValidatorAddress;
/**
 * Convert self delegator address to validator address
 *
 * @param {String} validator The validator bech32 encoded address
 * @param {String} [prefix="secret"] The self delegator address' bech32 prefix. Defaults to `"secret"`.
 * @returns the account's address
 */
function validatorAddressToSelfDelegatorAddress(validator, prefix = "secret") {
    return bech32_1.bech32.encode(prefix, bech32_1.bech32.decode(validator).words);
}
exports.validatorAddressToSelfDelegatorAddress = validatorAddressToSelfDelegatorAddress;
/**
 * Convert a Tendermint ed25519 public key to a consensus address
 *
 * @param {Uint8Array} pubkey The tendermint pubkey, should be 32 bytes (ed25519)
 * @param {String} [prefix="secret"] The valcons address' bech32 prefix. Defaults to `"secret"`.
 * @returns the valcons account's address
 */
function tendermintPubkeyToValconsAddress(pubkey, prefix = "secret") {
    return bech32_1.bech32.encode(`${prefix}valcons`, bech32_1.bech32.toWords((0, sha256_1.sha256)(pubkey).slice(0, 20)));
}
exports.tendermintPubkeyToValconsAddress = tendermintPubkeyToValconsAddress;
/**
 * Convert a secp256k1 compressed public key to an address
 *
 * @param {Uint8Array} pubkey The account's pubkey as base64 string, should be 33 bytes (compressed secp256k1)
 * @param {String} [prefix="secret"] The address' bech32 prefix. Defaults to `"secret"`.
 * @returns the account's address
 */
function base64TendermintPubkeyToValconsAddress(pubkey, prefix = "secret") {
    return tendermintPubkeyToValconsAddress((0, encoding_1.fromBase64)(pubkey), prefix);
}
exports.base64TendermintPubkeyToValconsAddress = base64TendermintPubkeyToValconsAddress;
/**
 * Compute the IBC denom of a token that was sent over IBC.
 *
 * For example, to get the IBC denom of SCRT on mainnet Osmosis:
 * ```
 * ibcDenom([{incomingPortId: "transfer", incomingChannelId: "channel-88"}], "uscrt")
 * ```
 */
const ibcDenom = (paths, coinMinimalDenom) => {
    const prefixes = [];
    for (const path of paths) {
        prefixes.push(`${path.incomingPortId}/${path.incomingChannelId}`);
    }
    const prefix = prefixes.join("/");
    const denom = `${prefix}/${coinMinimalDenom}`;
    return "ibc/" + (0, encoding_1.toHex)((0, sha256_1.sha256)((0, encoding_1.toUtf8)(denom))).toUpperCase();
};
exports.ibcDenom = ibcDenom;
/**
 * E.g. `"1uscrt"` => `{amount:"1",denom:"uscrt"}`
 */
const stringToCoin = (coinAsString) => {
    const regexMatch = coinAsString.match(/^(\d+)([a-z]+)$/);
    if (regexMatch === null) {
        throw new Error(`cannot extract denom & amount from '${coinAsString}'`);
    }
    return { amount: regexMatch[1], denom: regexMatch[2] };
};
exports.stringToCoin = stringToCoin;
/**
 * E.g. `"1uscrt"` => `{amount:"1",denom:"uscrt"}`
 */
exports.coinFromString = exports.stringToCoin;
/**
 * E.g. `"1uscrt,1uatom,1uosmo"` =>
 * `[{amount:"1",denom:"uscrt"},{amount:"1",denom:"uatom"},{amount:"1",denom:"uosmo"}]`
 */
const stringToCoins = (coinsAsString) => coinsAsString.split(",").map(exports.stringToCoin);
exports.stringToCoins = stringToCoins;
/**
 * E.g. `"1uscrt,1uatom,1uosmo"` =>
 * `[{amount:"1",denom:"uscrt"},{amount:"1",denom:"uatom"},{amount:"1",denom:"uosmo"}]`
 */
exports.coinsFromString = exports.stringToCoins;
/**
 * validateAddress checks if a given address is a valid address
 * @param {string} address the address to check
 * @param {string?} prefix the address prefix, defaults to `"secret"`
 * @returns `{ isValid: true }` if valid, `{ isValid: false, reason: "..." }` if not valid
 */
const validateAddress = (address, prefix = "secret") => {
    let decoded;
    try {
        decoded = bech32_1.bech32.decode(address);
    }
    catch (e) {
        let reason = "failed to decode address as a bech32";
        if (e instanceof Error) {
            reason += `: ${e.message}`;
        }
        return { isValid: false, reason };
    }
    if (decoded.prefix !== prefix) {
        return {
            isValid: false,
            reason: `wrong bech32 prefix, expected '${prefix}', got '${decoded.prefix}'`,
        };
    }
    const canonicalAddress = bech32_1.bech32.fromWords(decoded.words);
    if (canonicalAddress.length !== 20 && canonicalAddress.length !== 32) {
        return {
            isValid: false,
            reason: `wrong address length, expected 20 or 32 bytes, got ${canonicalAddress.length}`,
        };
    }
    return {
        isValid: true,
    };
};
exports.validateAddress = validateAddress;
/**
 * Converts an address from a bech32 string to the bytes representation.
 * @param {string} address - The address bech32 string to convert.
 * @returns {Uint8Array} - The resulting bytes address.
 */
function addressToBytes(address) {
    if (address === "") {
        return new Uint8Array(0);
    }
    return Uint8Array.from(bech32_1.bech32.fromWords(bech32_1.bech32.decode(address).words));
}
exports.addressToBytes = addressToBytes;
/**
 * Converts an address from bytes to the strong representation.
 * @param {Uint8Array} bytes - The address bytes to convert.
 * @param {string} prefix - The bech32 prefix to use.
 * @returns {string} - The resulting bech32 string address.
 */
function bytesToAddress(bytes, prefix = "secret") {
    if (bytes.length === 0) {
        return "";
    }
    return bech32_1.bech32.encode(prefix, bech32_1.bech32.toWords(bytes));
}
exports.bytesToAddress = bytesToAddress;
//# sourceMappingURL=utils.js.map