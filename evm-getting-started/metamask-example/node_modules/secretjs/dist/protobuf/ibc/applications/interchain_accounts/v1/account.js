"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InterchainAccount = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const auth_1 = require("../../../../cosmos/auth/v1beta1/auth");
exports.protobufPackage = "ibc.applications.interchain_accounts.v1";
function createBaseInterchainAccount() {
    return { base_account: undefined, account_owner: "" };
}
exports.InterchainAccount = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.base_account !== undefined) {
            auth_1.BaseAccount.encode(message.base_account, writer.uint32(10).fork()).ldelim();
        }
        if (message.account_owner !== "") {
            writer.uint32(18).string(message.account_owner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInterchainAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.base_account = auth_1.BaseAccount.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.account_owner = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            base_account: isSet(object.base_account)
                ? auth_1.BaseAccount.fromJSON(object.base_account)
                : undefined,
            account_owner: isSet(object.account_owner)
                ? String(object.account_owner)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.base_account !== undefined &&
            (obj.base_account = message.base_account
                ? auth_1.BaseAccount.toJSON(message.base_account)
                : undefined);
        message.account_owner !== undefined &&
            (obj.account_owner = message.account_owner);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseInterchainAccount();
        message.base_account =
            object.base_account !== undefined && object.base_account !== null
                ? auth_1.BaseAccount.fromPartial(object.base_account)
                : undefined;
        message.account_owner = (_a = object.account_owner) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
if (_m0.util.Long !== long_1.default) {
    _m0.util.Long = long_1.default;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=account.js.map